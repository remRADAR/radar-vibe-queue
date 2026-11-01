#!/usr/bin/env node
// RADAR Core Brain - capability-driven routing and regression tests.
// Zero-dependency Node (>= 18). Run from repository root: node tests/routing.test.mjs
// Exit codes: 0 = all tests pass, 1 = failure.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const registry = JSON.parse(readFileSync(join(ROOT, 'registry/skills.json'), 'utf8'));
const queue = JSON.parse(readFileSync(join(ROOT, 'queue.json'), 'utf8'));

// ---------- routing algorithm under test (mirrors skills/radar-intelligent-routing Steps 3-4) ----------
const norm = (s) => ' ' + s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';

function scoreSkill(taskNorm, skill) {
  let score = 0;
  for (const tr of skill.triggers) {
    if (taskNorm.includes(' ' + norm(tr).slice(1, -1) + ' ')) score += 2;
  }
  return score;
}

function route(taskText, skills) {
  const pool = skills || registry.skills;
  const taskNorm = norm(taskText);
  return pool
    .filter((s) => s.status === 'active')
    .map((s) => ({ id: s.id, score: scoreSkill(taskNorm, s) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);
}

// ---------- test harness ----------
let passed = 0;
let failed = 0;
const results = [];
function test(name, fn) {
  try { fn(); passed += 1; results.push('PASS ' + name); }
  catch (e) { failed += 1; results.push('FAIL ' + name + ' - ' + e.message); }
}
function assert(cond, msg) { if (!cond) throw new Error(msg); }
function assertEq(actual, expected, label) { if (actual !== expected) throw new Error(label + ': expected ' + expected + ', got ' + actual); }

// ---------- 1. registry sanity ----------
test('registry parses with active and pending-review skills', () => {
  const activeSkills = registry.skills.filter((s) => s.status === 'active');
  const pending = registry.skills.filter((s) => s.status === 'pending-review');
  assert(activeSkills.length >= 14, 'expected >= 14 active skills');
  assert(pending.length >= 10, 'expected >= 10 pending-review skills');
});

test('every active skill has triggers and verification criteria', () => {
  for (const s of registry.skills.filter((x) => x.status === 'active')) {
    assert(Array.isArray(s.triggers) && s.triggers.length > 0, s.id + ' lacks triggers');
    assert(Array.isArray(s.verification) && s.verification.length > 0, s.id + ' lacks verification criteria');
    assert(s.availability && s.availability.path, s.id + ' lacks availability');
  }
});

// ---------- 2. capability-driven selection ----------
const FIXTURES = [
  ['Prepare a RADARCharts social intelligence account audit with community and trend discovery', 'radar-meta'],
  ['Design an AI agent with tool contracts, guardrails, and an evaluation plan', 'universal-agent-architect'],
  ['Review the application architecture and database schema for this product', 'application-engineering'],
  ['Improve the website accessibility and web security of this web app', 'web-development'],
  ['Modify our AI-generated Lovable app; the AI builder produced this code', 'lovable-vibecode'],
  ['There is a production outage; find the root cause of this incident', 'debug-incident'],
  ['Company research with regulatory filings and portfolio risk analysis', 'market-intelligence'],
  ['Translate this module to Go respecting language semantics and runtime behavior', 'code-language'],
  ['Authorized competitor analysis: map the product and build a functional equivalent', 'authorized-product-study'],
  ['Resume work from another agent; update the HANDOFF ledger for cross-agent handoff', 'agent-continuation'],
  ['Use intelligent routing with skill discovery to orchestrate this task', 'radar-intelligent-routing'],
  ['Audit this project for junk code, dead code, and unwanted files', 'radar-junk-audit'],
  ['repo cleanup: remove unused files and stale dependencies', 'radar-junk-audit'],
  ['Run the technology watch: research developments and upgrade skills', 'radar-skill-evolution'],
];
for (const item of FIXTURES) {
  const task = item[0]; const expected = item[1];
  test('routes "' + task.slice(0, 48) + '..." to ' + expected, () => {
    const ranked = route(task);
    assert(ranked.length > 0, 'no skill matched');
    assertEq(ranked[0].id, expected, 'primary skill');
  });
}

// ---------- 3. multi-skill (cross-domain) selection ----------
test('cross-domain task selects the smallest effective combination', () => {
  const ranked = route('Fix the production outage in the web app deployment pipeline, then review the website accessibility');
  const selected = ranked.map((r) => r.id);
  assert(selected.includes('debug-incident'), 'expected debug-incident in selection');
  assert(selected.includes('web-development'), 'expected web-development in selection');
  assert(selected.length <= 4, 'selection is not the smallest effective combination: ' + selected.join(', '));
});

test('hygiene and evolution route together on a combined task', () => {
  const ranked = route('Repo cleanup first: audit junk code, then run skill evolution to upgrade skills');
  const selected = ranked.map((r) => r.id);
  assert(selected.includes('radar-junk-audit'), 'expected radar-junk-audit in selection');
  assert(selected.includes('radar-skill-evolution'), 'expected radar-skill-evolution in selection');
  assert(selected.length <= 4, 'selection is not the smallest effective combination: ' + selected.join(', '));
});

// ---------- 4. fallback / no forced route ----------
test('task matching no capability returns an empty route (no forced routing)', () => {
  assertEq(route('Write a haiku about the ocean').length, 0, 'unexpected matches');
});

// ---------- 5. pending-review and deprecated skills are never selected ----------
test('pending-review skills are never selected even when their triggers match', () => {
  const ranked = route('Perform a full website audit with an accessibility assessment');
  assert(ranked.length > 0, 'expected at least one active match');
  assert(!ranked.some((r) => registry.skills.find((s) => s.id === r.id).status !== 'active'), 'a non-active skill was selected');
  assertEq(ranked[0].id, 'web-development', 'closest active alternative should be chosen');
});
test('deprecated skills are never selected', () => {
  const skills = registry.skills.map((s) => ({ ...s, status: s.id === 'web-development' ? 'deprecated' : s.status }));
  const ranked = route('Improve the website accessibility', skills);
  assert(!ranked.some((r) => r.id === 'web-development'), 'deprecated skill was selected');
});

// ---------- 6. extensibility: registration without router rewrite ----------
test('a newly registered active skill is discoverable without any router change', () => {
  const extended = registry.skills.concat([{
    id: 'synthetic-lattice-optimizer', name: 'synthetic-lattice-optimizer', version: '0.1.0', status: 'active',
    domain: 'software-engineering', summary: 'synthetic test skill', triggers: ['quantum weave optimization', 'lattice reticulation'],
    required_inputs: [], expected_outputs: [], dependencies: { skills: [], files: [] }, related_skills: [],
    limitations: ['synthetic'], verification: ['synthetic'], availability: { path: 'skills/synthetic-lattice-optimizer/SKILL.md', branch: 'main' }, governance: {},
  }]);
  const ranked = route('Perform quantum weave optimization and lattice reticulation on the mesh', extended);
  assert(ranked.length > 0, 'new skill was not discovered');
  assertEq(ranked[0].id, 'synthetic-lattice-optimizer', 'newly registered skill must win its own trigger match');
});

// ---------- 7. regression: legacy static routes keep resolving ----------
const LEGACY = [
  ['RADAR social intelligence for this account', 'radar-meta'],
  ['agent design for this tool-using system', 'universal-agent-architect'],
  ['web-specific work for this website', 'web-development'],
  ['Lovable AI builder work on this generated app', 'lovable-vibecode'],
  ['failure and outage in production', 'debug-incident'],
  ['company research and financial analysis', 'market-intelligence'],
  ['language-specific review of this module', 'code-language'],
  ['authorized product study of this competitor', 'authorized-product-study'],
];
for (const item of LEGACY) {
  const task = item[0]; const expected = item[1];
  test('legacy route preserved: "' + task + '" -> ' + expected, () => {
    const ranked = route(task);
    assert(ranked.length > 0, 'no skill matched');
    assertEq(ranked[0].id, expected, 'primary skill');
  });
}

// ---------- 8. manifest consistency (routing data integrity) ----------
test('queue.json skills list equals registry active skills', () => {
  const activeIds = registry.skills.filter((s) => s.status === 'active').map((s) => s.id).sort();
  const queueIds = queue.skills.map((p) => p.replace('skills/', '').replace('/SKILL.md', '')).sort();
  assertEq(JSON.stringify(activeIds), JSON.stringify(queueIds), 'skills lists diverge');
});

// ---------- report ----------
console.log(results.join('\n'));
console.log('');
if (failed > 0) {
  console.error('ROUTING TESTS FAILED: ' + failed + ' failed, ' + passed + ' passed');
  process.exit(1);
}
console.log('ROUTING TESTS PASSED: ' + passed + ' passed, 0 failed');

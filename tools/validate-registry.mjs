#!/usr/bin/env node
// RADAR Core Brain - registry, manifest, and consistency validation.
// Zero-dependency Node (>= 18). Run from repository root: node tools/validate-registry.mjs
// Exit codes: 0 = valid (warnings allowed), 1 = validation failure.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
let errors = 0;
let warnings = 0;
const fail = (m) => { console.error('FAIL ' + m); errors += 1; };
const warn = (m) => { console.warn('WARN ' + m); warnings += 1; };
const ok = (m) => console.log('PASS ' + m);

const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const existsRel = (p) => existsSync(join(ROOT, p));

function frontmatter(p) {
  let t;
  try { t = read(p); } catch { return null; }
  const m = t.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return fm;
}

let queue, registry;
try { queue = JSON.parse(read('queue.json')); } catch (e) { console.error('FAIL queue.json does not parse: ' + e.message); process.exit(1); }
try { registry = JSON.parse(read('registry/skills.json')); } catch (e) { console.error('FAIL registry/skills.json does not parse: ' + e.message); process.exit(1); }
ok('queue.json and registry/skills.json parse');

if (!queue.version) fail('queue.json missing version');
if (!registry.registry_version || !registry.schema) fail('registry missing registry_version/schema');

const REQUIRED = ['id', 'name', 'version', 'status', 'domain', 'summary', 'triggers', 'required_inputs', 'expected_outputs', 'dependencies', 'related_skills', 'limitations', 'verification', 'availability', 'governance'];
const NONEMPTY_ARRAYS = ['triggers', 'required_inputs', 'expected_outputs', 'related_skills', 'limitations', 'verification'];
const STATUSES = ['active', 'pending-review', 'deprecated'];
const domainIds = new Set((registry.domains || []).map((d) => d.id));
if (domainIds.size === 0) fail('registry defines no domains');

const ids = registry.skills.map((s) => s.id);
if (new Set(ids).size !== ids.length) fail('duplicate skill ids in registry');
const names = registry.skills.map((s) => s.name);
if (new Set(names).size !== names.length) fail('duplicate skill names in registry');
ok('skill ids and names are unique (' + ids.length + ' entries)');

const byId = new Map(registry.skills.map((s) => [s.id, s]));
for (const s of registry.skills) {
  for (const k of REQUIRED) {
    if (s[k] === undefined || s[k] === null) { fail('skill ' + s.id + ' missing field ' + k); }
    else if (NONEMPTY_ARRAYS.includes(k) && (!Array.isArray(s[k]) || s[k].length === 0)) { fail('skill ' + s.id + ' has empty ' + k); }
  }
  if (s.dependencies === undefined || s.dependencies === null || typeof s.dependencies !== 'object' || Array.isArray(s.dependencies)) fail('skill ' + s.id + ' dependencies must be an object');
  if (!STATUSES.includes(s.status)) fail('skill ' + s.id + ' has invalid status ' + s.status);
  if (!domainIds.has(s.domain)) fail('skill ' + s.id + ' has unknown domain ' + s.domain);
  for (const sd of s.secondary_domains || []) if (!domainIds.has(sd)) fail('skill ' + s.id + ' has unknown secondary domain ' + sd);
  for (const r of s.related_skills) if (!byId.has(r)) fail('skill ' + s.id + ' references unknown related skill ' + r);
  if (!s.availability || !s.availability.path) fail('skill ' + s.id + ' missing availability.path');
  if (!s.governance || !s.governance.last_reviewed) fail('skill ' + s.id + ' missing governance.last_reviewed');
  else {
    const d = new Date(s.governance.last_reviewed + 'T00:00:00Z');
    if (isNaN(d.getTime())) fail('skill ' + s.id + ' has invalid governance.last_reviewed');
    else if ((Date.now() - d.getTime()) / 86400000 > 180) warn('skill ' + s.id + ' not reviewed in >180 days - run skills/radar-skill-evolution');
  }
  if (s.status === 'active') {
    if (!existsRel(s.availability.path)) fail('active skill path missing: ' + s.availability.path);
    const fm = frontmatter(s.availability.path);
    if (!fm) fail('active skill has no frontmatter: ' + s.availability.path);
    else {
      if (fm.name !== s.name) fail('frontmatter name mismatch at ' + s.availability.path + ' (' + fm.name + ' != ' + s.name + ')');
      if (!fm.description || fm.description.length > 1024) fail('frontmatter description missing or >1024 chars at ' + s.availability.path);
    }
  } else if (s.status === 'pending-review') {
    if (!s.availability.branch) fail('pending skill ' + s.id + ' must declare its proposing branch');
  }
  for (const f of (s.dependencies && s.dependencies.files) || []) {
    if (!existsRel(f)) fail('skill ' + s.id + ' dependency file missing: ' + f);
  }
}
ok('per-skill schema, status, domain, availability, governance freshness, and dependency checks complete');

for (const s of registry.skills.filter((x) => x.status === 'active')) {
  const dir = s.availability.path.split('/')[1];
  if (dir !== s.name) fail('active skill ' + s.id + ' directory does not match name: ' + dir);
}
ok('active skill directories match frontmatter names');

const skillDirs = readdirSync(join(ROOT, 'skills'), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
for (const d of skillDirs) {
  if (!ids.includes(d)) fail('unregistered skill directory: skills/' + d);
  if (!existsRel('skills/' + d + '/SKILL.md')) fail('skill directory missing SKILL.md: skills/' + d);
}
ok('all skill directories registered (' + skillDirs.length + ' directories)');

const active = registry.skills.filter((s) => s.status === 'active');
const activeIds = active.map((s) => s.id).sort();
const queueIds = queue.skills.map((p) => String(p).replace('skills/', '').replace('/SKILL.md', '')).sort();
if (JSON.stringify(activeIds) !== JSON.stringify(queueIds)) {
  fail('queue.json skills list does not match registry active skills');
}
ok('queue.json skills list matches registry active skills (' + activeIds.length + ')');

const moduleIds = queue.modules.map((m) => m.id);
if (new Set(moduleIds).size !== moduleIds.length) fail('duplicate queue module ids');
for (const m of queue.modules) {
  if (!existsRel(m.file)) fail('queue module file missing: ' + m.file);
  if (!existsRel(m.skill)) fail('queue module skill missing: ' + m.skill);
  if (!Array.isArray(m.triggers) || m.triggers.length === 0) warn('queue module ' + m.id + ' has no triggers');
}
ok('all ' + queue.modules.length + ' queue modules resolve to existing files and skills');

if (read('SKILL.md') !== read('skills/radar-vibe-queue/SKILL.md')) {
  fail('root SKILL.md has drifted from skills/radar-vibe-queue/SKILL.md - keep them in sync');
} else { ok('root SKILL.md and skills/radar-vibe-queue/SKILL.md are in sync'); }

for (const f of [
  'AGENTS.md', 'QUEUE.md', 'SOURCE_NOTES.md', 'README.md',
  'docs/ARCHITECTURE.md', 'docs/GOVERNANCE.md', 'docs/RADARMATRIX-INTEGRATION.md', 'docs/MIGRATION.md',
  'framework/prompt-engineering.md', 'framework/operating-mindset.md',
  'queues/00-router.md', 'queues/intelligent-routing.md', 'queues/junk-audit.md', 'queues/skill-evolution.md',
  'knowledge/README.md', 'knowledge/GAPS.md',
  'knowledge/organization/identity.md', 'knowledge/organization/terminology.md',
  'knowledge/projects/radar-matrix.md', 'knowledge/projects/radarmusic.md', 'knowledge/projects/radarme.md',
  'knowledge/projects/on-the-radar.md', 'knowledge/projects/radarsite.md',
  'knowledge/technical/platforms.md', 'knowledge/operational/workflows.md', 'knowledge/strategic/vision.md',
]) {
  if (!existsRel(f)) fail('required foundation file missing: ' + f);
}
ok('required foundation files present');

const trigMap = new Map();
for (const s of active) {
  for (const tr of s.triggers) {
    const k = tr.toLowerCase();
    if (!trigMap.has(k)) trigMap.set(k, []);
    trigMap.get(k).push(s.id);
  }
}
for (const entry of trigMap) if (entry[1].length > 1) warn('trigger "' + entry[0] + '" shared by: ' + entry[1].join(', '));
ok('duplicate-trigger scan complete');

console.log('');
if (errors > 0) {
  console.error('VALIDATION FAILED: ' + errors + ' error(s), ' + warnings + ' warning(s)');
  process.exit(1);
}
console.log('VALIDATION PASSED: 0 errors, ' + warnings + ' warning(s)');

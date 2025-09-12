#!/usr/bin/env node
/*
  Builds a keyword registry and enforces anti-cannibalization rules:
  - primaryKeyword must be unique site-wide
  - no duplicate (intent + dimension + citySlug/season/occasion) combos
  Outputs registry to src/content/keyword-registry.json
*/
import { fileURLToPath } from 'url';
import { dirname, join, relative } from 'path';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = dirname(__dirname);

const PAGES_DIR = join(projectRoot, 'src', 'content', 'pages');
const AREAS_DIR = join(projectRoot, 'src', 'content', 'service-areas');
const REGISTRY_PATH = join(projectRoot, 'src', 'content', 'keyword-registry.json');

function walkDir(dir, out = []) {
  let entries = [];
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    const fp = join(dir, name);
    let s;
    try { s = statSync(fp); } catch { continue; }
    if (s.isDirectory()) walkDir(fp, out);
    else if (s.isFile() && name.endsWith('.md')) out.push(fp);
  }
  return out;
}

function pageSlugFromFile(filepath) {
  const rel = relative(PAGES_DIR, filepath).replace(/\\/g, '/');
  return rel.replace(/\.mdx?$/, '');
}

function areaSlugFromFile(filepath) {
  const rel = relative(AREAS_DIR, filepath).replace(/\\/g, '/');
  return rel.replace(/\.mdx?$/, '');
}

function loadContentEntries() {
  const registry = [];
  // Pages
  for (const fp of walkDir(PAGES_DIR)) {
    const raw = readFileSync(fp, 'utf8');
    const { data } = matter(raw);
    const slug = pageSlugFromFile(fp);
    const url = '/' + slug.replace(/^index$/, '').replace(/\/index$/, '');
    registry.push({
      id: slug,
      collection: 'pages',
      url,
      primaryKeyword: data.primaryKeyword || undefined,
      intent: data.intent || undefined,
      dimension: data.dimension || undefined,
      citySlug: data.citySlug || undefined,
      season: data.season || undefined,
      canonicalOf: data.canonicalOf || undefined,
    });
  }
  // Service Areas
  for (const fp of walkDir(AREAS_DIR)) {
    const raw = readFileSync(fp, 'utf8');
    const { data } = matter(raw);
    const slug = areaSlugFromFile(fp);
    const city = data.citySlug || slug;
    const url = '/service-areas/' + city;
    registry.push({
      id: slug,
      collection: 'service-areas',
      url,
      primaryKeyword: data.primaryKeyword || undefined,
      intent: data.intent || undefined,
      dimension: data.dimension || 'city',
      citySlug: city,
      season: data.season || undefined,
      canonicalOf: data.canonicalOf || undefined,
    });
  }
  return registry;
}

function validate(registry) {
  const primaryMap = new Map();
  for (const r of registry) {
    if (!r.primaryKeyword) continue;
    if (r.canonicalOf) continue;
    if (primaryMap.has(r.primaryKeyword)) {
      const other = primaryMap.get(r.primaryKeyword);
      throw new Error(`Duplicate primaryKeyword: "${r.primaryKeyword}"\n - ${other}\n - ${r.url}`);
    }
    primaryMap.set(r.primaryKeyword, r.url);
  }

  const comboSet = new Set();
  for (const r of registry) {
    const intent = r.intent || '';
    const dimension = r.dimension || '';
    const scope = r.citySlug || r.season || '';
    const comboKey = [intent, dimension, scope].join('|');
    if (comboKey.replace(/\|/g, '').length === 0) continue;
    if (r.canonicalOf) continue;
    if (comboSet.has(comboKey)) {
      throw new Error(`Duplicate intent/dimension scope: ${comboKey}`);
    }
    comboSet.add(comboKey);
  }
}

function main() {
  const registry = loadContentEntries();
  validate(registry);
  writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2));
  console.log(`Keyword registry written: ${REGISTRY_PATH}`);
}

try {
  main();
} catch (err) {
  console.error(err.message || err);
  process.exit(1);
}



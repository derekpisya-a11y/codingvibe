import { readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve, basename, extname } from 'node:path';

// Package the actual production build as one offline-capable HTML file.
const output = resolve('dist');
const mimeTypes = { '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff' };
const dataUrl = async file => `data:${mimeTypes[extname(file)]};base64,${(await readFile(file)).toString('base64')}`;
let html = await readFile(resolve(output, 'index.html'), 'utf8');
const scriptMatch = html.match(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/);
const styleMatch = html.match(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (!scriptMatch || !styleMatch) throw new Error('Production JS or CSS bundle was not found.');
const scriptPath = resolve(output, 'assets', basename(scriptMatch[1]));
const stylePath = resolve(output, 'assets', basename(styleMatch[1]));
let css = await readFile(stylePath, 'utf8');
const fontUrls = [...new Set([...css.matchAll(/url\((?:"|')?([^"')]+)(?:"|')?\)/g)].map(match => match[1]))];
for (const url of fontUrls) {
  if (url.startsWith('data:')) continue;
  if (/^https?:/.test(url)) throw new Error('Standalone build must not rely on external fonts.');
  css = css.replaceAll(url, await dataUrl(resolve(output, 'assets', basename(url))));
}
const images = {};
for (const name of await readdir(resolve(output, 'images'))) {
  if (name.endsWith('.webp')) images[name] = await dataUrl(resolve(output, 'images', name));
}
const js = `globalThis.__KOMOREBI_IMAGES__=${JSON.stringify(images)};\n${await readFile(scriptPath, 'utf8')}`;
html = html.replace(scriptMatch[0], () => `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`);
html = html.replace(styleMatch[0], () => `<style>${css}</style>`);
html = html.replace(/href="[^\"]*favicon\.svg"/, `href="${await dataUrl(resolve(output, 'favicon.svg'))}"`);
await writeFile(resolve(output, 'komorebi.html'), html);
console.log(`Offline website: dist/komorebi.html (${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} MB)`);

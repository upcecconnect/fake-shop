import http from 'node:http';
import https from 'node:https';
import { createReadStream, existsSync, statSync, readFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = existsSync(join(ROOT, 'index.html')) ? ROOT : join(ROOT, 'dist');
const BASE = '/fake-shop';
const PROXY_PREFIX = '/upc';
const PORT = Number(process.env.PORT) || 4173;

const loadEnvFile = () => {
  const envPath = join(ROOT, '.env');
  if (!existsSync(envPath)) {
    return;
  }
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([\w.]+)\s*=\s*(.*?)\s*$/);
    if (match && !(match[1] in process.env)) {
      process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
    }
  }
};

loadEnvFile();

const targetUrl = process.env.PAYME_PROXY_TARGET;
if (!targetUrl) {
  console.error('PAYME_PROXY_TARGET is not set. Put it in a ".env" file next to serve.mjs, or run: PAYME_PROXY_TARGET=https://<host> node serve.mjs');
  process.exit(1);
}
if (!existsSync(join(DIST_DIR, 'index.html'))) {
  console.error(`No built app found (missing index.html in ${DIST_DIR}). Run "npm run build:test" and keep serve.mjs inside the dist/ folder.`);
  process.exit(1);
}
const target = new URL(targetUrl);

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.map': 'application/json; charset=utf-8',
};

const proxyRequest = (req, res, pathname, search) => {
  const headers = { ...req.headers };
  delete headers.origin;
  delete headers.referer;
  headers.host = target.host;
  const forwardedPath = pathname.slice(PROXY_PREFIX.length) + search;
  console.log(`[proxy] ${req.method} -> ${target.origin}${forwardedPath}`);
  const client = target.protocol === 'https:' ? https : http;
  const upstream = client.request(
    {
      protocol: target.protocol,
      hostname: target.hostname,
      port: target.port || (target.protocol === 'https:' ? 443 : 80),
      method: req.method,
      path: forwardedPath,
      headers,
      rejectUnauthorized: false,
    },
    (upstreamRes) => {
      res.writeHead(upstreamRes.statusCode || 502, upstreamRes.headers);
      upstreamRes.pipe(res);
    },
  );
  upstream.on('error', (error) => {
    res.writeHead(502, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'proxy_error', message: error.message }));
  });
  req.pipe(upstream);
};

const serveStatic = (res, pathname) => {
  let relative = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  if (relative === '' || relative === '/') {
    relative = '/index.html';
  }
  const safe = normalize(relative).replace(/^(\.\.[/\\])+/, '');
  let filePath = join(DIST_DIR, safe);
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(DIST_DIR, 'index.html');
  }
  if (!existsSync(filePath)) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, { 'content-type': CONTENT_TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream' });
  const stream = createReadStream(filePath);
  stream.on('error', () => {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Internal error');
  });
  stream.pipe(res);
};

const server = http.createServer((req, res) => {
  const { pathname, search } = new URL(req.url, `http://localhost:${PORT}`);
  if (pathname === '/') {
    res.writeHead(302, { location: `${BASE}/` });
    res.end();
    return;
  }
  if (pathname === PROXY_PREFIX || pathname.startsWith(`${PROXY_PREFIX}/`)) {
    proxyRequest(req, res, pathname, search);
    return;
  }
  serveStatic(res, pathname);
});

server.listen(PORT, () => {
  console.log(`fake-shop:  http://localhost:${PORT}${BASE}/`);
  console.log(`proxy ${PROXY_PREFIX}/* -> ${targetUrl}`);
});

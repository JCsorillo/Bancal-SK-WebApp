// Run once after you know your domain:  node set-domain.js https://yourdomain.com
// Saves the domain in tools/site.json and rebuilds every page, sitemap.xml and robots.txt.
const arg = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}$/i.test(arg)) { console.error('Usage: node set-domain.js https://yourdomain.com'); process.exit(1); }
process.argv[2] = arg;
require('./tools/build.js');

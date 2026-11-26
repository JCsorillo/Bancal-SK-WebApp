# SEO setup (Google Search Console)

The site has 13 main pages plus one page per report (46 URLs in the sitemap). Each page has its own title, description, canonical link, Open Graph/Twitter tags, JSON-LD (Organization, WebSite, Article, FAQPage, BreadcrumbList) and real HTML text for crawlers.

1. Host the site, then run once in this folder: `node set-domain.js https://yourdomain.com` (use the exact address people will visit, with or without www, but pick one). It rebuilds every page, sitemap.xml and robots.txt. Upload or push the result.
2. Go to https://search.google.com/search-console and add your site.
   - Domain property: add the TXT record Google gives you at your domain registrar. Nothing to change in the site.
   - URL prefix property: copy the token from the `google-site-verification` tag, put it in `tools/site.json` as `"googleVerification"`, run `node tools/build.js`, upload, then press Verify.
3. Sitemaps > add `sitemap.xml` > Submit.
4. URL Inspection > paste the homepage > Request indexing. Do the same for reports.html, projects.html and hotlines.html.
5. After adding posts or events, set a new date in `tools/site.json` ("updated") and run `node tools/build.js`, then resubmit nothing: Google re-reads the sitemap on its own.
6. Optional: add the site in Bing Webmaster Tools (it can import from Google Search Console).
7. Ask the SK to put the site link in the Facebook profile intro and in post captions. Links from the Carles municipal or barangay pages help most.

Notes
- The Events page is hidden from search (noindex) until at least one event is added in `assets/js/data.js`.
- Ranking for "SK Bancal" searches takes days to weeks after indexing. Nobody can promise a position.
- 404.html uses root paths (/assets/...), so host the site at the domain root, not in a sub-folder.

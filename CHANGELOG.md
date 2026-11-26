# Changelog
## v1.15.2 (2026-11-26)
- Projects: new "All" year tab that shows the 2025 and 2023 to 2024 lists together, with the year next to each sector.
- Intro: the title, logo and Welcome screen now scale to the screen height, so the logo no longer gets pushed off the top on laptops.
- Navigation: Home is now in the desktop menu too, not only the hamburger.
- Services: only sites with a usable front-page snapshot show a live preview. Every other agency shows its logo instead of an error or verification page.
## v1.15.1 (2026-11-26)
- Fix: the first and third stat tiles on Reports, Officials and Projects matched the page background in dark mode. They are now blue, yellow and red on every page.
- Fix: the sector share bar reused four colours across nine sectors. Each sector now has its own colour, the count is printed inside wide segments, and the legend is a tidy list. Hovering a legend row or a segment highlights its match.
## v1.15.0 (2026-11-26)
- Reports: count-up tiles (reports, projects, years) and a scrolling poster wall at the bottom.
- Projects: new "The SK's work by sector" section with count-up tiles and an animated share bar with a legend, computed from the project lists.
- Officials: council count-up tiles, "What SK officials do" (Chairperson, Secretary, Treasurer, Kagawads), links onward, and officer cards that tilt and zoom on hover.
- Hotlines: "What to say when you call" (4 numbered steps).
- Services: "Before you go to the office" tips, including a warning about fixers.
- All new text is in English, Tagalog and Hiligaynon (Hiligaynon is a draft).

## v1.14.0 (2026-11-26)
- Fix: the Projects page showed a blank gap while scrolling. The big project table never counted as "on screen" for the fade-in, so it stayed invisible. Tall blocks now reveal as soon as a slice of the screen is filled.
- Budget transparency is no longer its own page or menu item. It is now the last section of the Projects page (projects.html#transparency), still linked from the home quick links and search.
- New page: Officials (officials.html), listed in the menu just above About.
- About page has new sections: How the SK works, and Policies and notices (Privacy Policy, Terms and Conditions, Legal notice, Accessibility). The pages themselves stay in the footer.

## v1.13.1 (2026-11-25)
- Fix: the offline single-file preview did not include the Transparency and Accessibility pages, so their links went nowhere. The hosted site was not affected. Both pages are now in the preview.

## v1.13.0 (2026-11-25)
- Hamburger menu now starts with Home and also lists Transparency.
- New page: transparency.html (SK budget transparency). It shows an honest "not yet published" state until real figures are entered in assets/js/data.js (window.BUDGET); then it shows the total, spent, remaining, a usage ring, per-sector bars and document links. It also explains the SK fund and ABYIP and how to ask for documents. Linked from the footer, the home quick links, the menu and search.
- New page: accessibility.html (accessibility statement), linked in the footer.
- Organization structured data is now GovernmentOrganization.
- Smoother motion: longer ease-out reveals, GPU hints and paint containment on the animated sections, smooth anchor scrolling, lighter search backdrop.

## v1.12.0 (2026-11-25)
- Poster viewer now has previous/next arrows, a counter, left/right keys and swipe, so you can flip through every report poster without closing it.
- Hero greets by time of day in the visitor's language ("Maayong aga", "Magandang hapon", "Good evening").
- Hand-made touches: handwritten "start here" note by the hero buttons (Caveat font), hand-drawn squiggle under section titles, latest posters sit slightly crooked and straighten on hover, a faint paper grain over the whole site.
- Fix: rotating hero word underline now fits each word; floating shapes no longer cross the headline on phones.
- Fonts: Caveat added to the Google Fonts link and to tools/self-host-fonts.js.

## v1.11.1 (2026-11-25)
- Removed the text size feature (header button, menu buttons and saved setting).
- Hamburger menu now only has the language buttons, centered.
- The "Suggest an idea to the SK" section is back at the bottom of the home page, as before.

## v1.11.0 (2026-11-25)
- Mobile header is cleaner: only search, light/dark and the menu button stay visible. Language, text size and the SK suggestion form button now live inside the hamburger menu (desktop keeps the language and Aa buttons in the header).
- The menu closes when you tap outside it, press Esc, scroll away, or open search. It drops down with a short animation.
- "Got a question for the SK?" is removed from the home page and now sits at the bottom of Reports, Projects, About, Services, Hotlines, Events, Downloads and FAQ. The suggestion section is gone from the home page (the form is still on Contact and in the menu).

## v1.10.0 (2026-11-25)
- New: install-as-app prompt. On Android and desktop Chrome/Edge a bottom sheet offers "Install" a few seconds after arriving; on iPhone Safari it shows the Add to Home Screen steps. "Not now" hides it for 14 days, it never shows inside the installed app, and the footer gets an "Install the app" button once the browser allows it.
- New: hotlines page has "Save all numbers to my phone" (downloads a .vcf contacts file with every Carles emergency number).
- New: offline / back-online notice.
- Fix: translated labels in the new search, install and hotline features now follow the language setting (Tagalog was falling back to English).

## v1.9.0 (2026-11-25)
- Fix: on phones the intro screen sat off-centre because a wide decorative shape stretched the layout. It is now centred at any width.
- New: site search. Press / or Ctrl+K, or tap the magnifier in the header. It searches pages, reports, projects, services, hotlines and FAQ, with arrow keys and Enter. The index is built from the data files by tools/build.js (assets/js/search-index.js).

## v1.8.0 (2026-11-25)
- Dark mode now spreads from the theme button as a circle (View Transitions, with a fallback for older browsers).
- Text size moved from the footer to an "Aa" button in the header, next to the language and theme buttons.
- Home page is longer: sector numbers, a scrolling poster wall, a motto band that moves as you scroll, a milestone timeline, an emergency band, rotating words in the intro.
- New motion layer (assets/css/motion.css, assets/js/fx.js): page transitions, sliding nav underline, button shine and ripple, magnetic hero buttons, pointer tilt on tiles, headline word rise, floating shapes, dark-mode stars, back-to-top with progress ring, language-switch blur. All off under reduced motion.

## v1.7.0
- Site split into real pages: Home, Reports, Projects, About (officials), Services, Hotlines, Events, Downloads, FAQ, Contact, Privacy, Terms, Legal notice and a 404 page. A header menu and footer link them all.
- Every report now has its own page (34 pages) with the poster, caption, previous/next links and a share link that previews the poster on Facebook and Messenger.
- Pages are generated by `node tools/build.js` from `src/` and `data.js`, so reports, project rows, hotlines and officers are real HTML that search engines can read.
- SEO: unique title, description, canonical and social tags on every page, JSON-LD (Organization, WebSite, Article, FAQPage, BreadcrumbList, ItemList), sitemap with images, robots.txt, noindex on the empty Events and 404 pages.
- Security: Content-Security-Policy, HSTS, no-sniff, frame blocking, Referrer and Permissions policy for Apache, Vercel and Netlify/Cloudflare; build folders blocked; security.txt; inline script removed.
- New: announcement bar, Events page, Downloads page, FAQ (9 answers, 3 languages), Contact page, text-size buttons (A, A+, A++), optional cookie-free analytics, PWA shortcuts, `tools/self-host-fonts.js`.
- Removed the quick-idea form from the site; suggestions go through the SK's Google Form.
- Fixed: year tabs on Projects no longer clear the feed filters. Replaced an unsourced quote with the SK motto, "Bancal to the Highest". Removed a promise that every suggestion is read.
## v1.6.0
- Emergency hotlines section (Carles MDRRMO advisory, updated 07/20/2026): tap to call, copy number, floating Emergency button, nav link.
- Heart reactions show counts. Visitor counter in the footer. Both run per-device in preview mode and become shared totals after SETUP-counters.md (Google Sheet + Apps Script, free).
- 2023–2024 project list (42) next to 2025 with a year switch. Four new reports in the feed (gambling campaign, billiards, office supplies, Basurahan 2026). Suggestion section now leads with the SK's Google Form (ABYIP).
- Accomplishment report video (cropped to landscape, 30 s) in its own section.
- Removed the on-site suggestion form (the SK's Google Form is the only suggestion route). Legal text updated to match.
- SEO: robots.txt, sitemap.xml, canonical, Open Graph/Twitter cards, JSON-LD, noscript summary, social image, .htaccess (HTTPS, compression, caching), set-domain.js and SEO-SETUP.md. Video crop changed to 4:3 (less cut off).
- Privacy Policy, Terms and Conditions and Legal notice (footer). Print button for the hotlines list.
- Suggestion box: visitors send ideas to a private Google Sheet (needs the counters setup; preview mode copies the text). "Poster coming soon" card moved to the bottom of the feed.
- 19 more accomplishment reports (SK24 to SK26) added to the main feed after the first 45 days, with SK24, SK25 and SK26 filters. Fixed the caravan date (2023). The Latest reports row is unchanged.
- Facebook links updated to the SK profile and SK Chair profile; wording changed from "page" to "profile".
- Search box for government services (works with the category filters).
- New agency banners: BIR ORUS, BIR, LTO, SSS, PhilHealth, Pag-IBIG.
- Share button on every post, installable app (PWA) and offline support.
## v1.5.0
- Added DFA (passport and consular services).
- Fallback preview now uses agency banner images (BIR, PhilHealth, Pag-IBIG, NBI, PSA, PhilSys, DENR, BFAR/DA, TESDA, CHED, DOLE, NYC, DILG, DFA). LTO and SSS keep their logos.
## v1.4.1
- Feed: removed the duplicate small date under "SK Bancal"; the date pill remains.
- Services: when a site preview cannot load, the card shows the agency logo (bundled for LTO, SSS and BIR; fetched from the site icon for the others).
## v1.4.0
- Government services cards now show a front-page preview of each site (tap to enlarge). Falls back to a plain card if a preview cannot load.
- eGovPH logo and icon added to the app promo.
## v1.3.1
- Footer credit changed to "© 2026 Jolan Clark Sorillo" with a note that posters, photos and the logo belong to the SK.
## v1.3.0
- New Government services section: filterable carousel of 16 official portals (LTO, Pag-IBIG, PhilHealth, SSS, BIR, NBI, PSA, PhilSys, DENR, BFAR, TESDA, CHED, DOLE, NYC, DILG) with document checklists, plus an eGovPH app promo.
- Professional footer with link columns, an "unofficial community site" disclaimer and a privacy line.
## v1.2.2
- Caravan feed date now matches the poster (Nov 3, 2026). Heart-only reaction (no label), double-tap a poster to like. Scroll reveals, count-up numbers, hashtag ticker, scroll progress bar, header shrink, portrait tilt, smoother filters and dialogs. Respects reduced motion.
## v1.2.1
- Language switcher is now one globe icon with a small menu (and chips on the intro screen), freeing header space on phones.
- Caravan poster date flagged on the post itself.
## v1.2.0
- Rebuilt in the SK poster format; Facebook-style feed of the first 45 days; bento sector tiles that filter the 49-project table; tap intro; EN/HIL/TAG; light/dark.
## v1.1.0 (separate folder)
- Portfolio design language build.
## v1.0.0
- First static build.

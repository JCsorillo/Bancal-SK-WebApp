# Turn on shared heart counts and the visitor counter (about 10 minutes, free)

Until you do this the site runs in preview mode: hearts and visits are counted on each device only.

1. Go to sheets.google.com and create a blank spreadsheet. Name it "SK Bancal counters".
2. Extensions > Apps Script. Delete the sample code and paste everything from `apps-script/Code.gs`. Save.
3. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Deploy. Allow the permissions it asks for.
4. Copy the Web app URL (it ends in /exec).
5. Open `assets/js/config.js` and paste it: `window.SK_CONFIG = { counterUrl: "PASTE_URL_HERE" };`
6. Re-upload the site. Hearts now show real totals and the footer shows visitors since launch.

Notes
- One heart per device per post, stored in the visitor's browser. It is not tamper-proof: someone technical can inflate the numbers. Fine for a community site; use real accounts later if it matters.
- If you redeploy the script after editing it, choose "Manage deployments > Edit > New version" so the URL stays the same.
- The sheet only stores post ids and totals. No names, emails or IPs.


## Suggestion box

The same script also receives suggestions from the "Suggest an idea" form. They are saved in a private sheet called "suggestions" (time, topic, name, message). Only people with access to your Google Sheet can read them, and the site never shows them. If you set up the counters before this version, open Extensions > Apps Script, paste the new Code.gs, then Deploy > Manage deployments > edit > New version. The /exec URL stays the same.

Until the URL is set, the form runs in preview mode: nothing is sent, the text is copied so the visitor can send it on Facebook. The form has a hidden spam field and a one-minute wait per device, but it is not bot-proof. Check the sheet from time to time.

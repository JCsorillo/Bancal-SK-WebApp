/**
 * Bancal SK counters. Google Apps Script bound to a Google Sheet.
 * Stores heart counts per post, total visits, and suggestions (optional name, private sheet 'suggestions').
 * Deploy: Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone.
 */
function sheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}
function doGet(e) {
  const p = (e && e.parameter) || {};
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const hearts = sheet_('hearts'), meta = sheet_('meta');
    const out = {};
    if (p.action === 'heart' && /^[a-z0-9_-]{1,40}$/.test(p.id || '')) {
      const rows = hearts.getDataRange().getValues();
      let row = rows.findIndex(r => r[0] === p.id);
      const delta = p.on === '1' ? 1 : -1;
      if (row < 0) { hearts.appendRow([p.id, Math.max(0, delta)]); out.count = Math.max(0, delta); }
      else { const n = Math.max(0, Number(rows[row][1] || 0) + delta); hearts.getRange(row + 1, 2).setValue(n); out.count = n; }
    } else if (p.action === 'suggest') {
      const clean = (s, n) => String(s || '').replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, n).replace(/^([=+\-@])/, "'$1");
      const msg = clean(p.msg, 500);
      if (msg.length < 10) { out.ok = false; }
      else { sheet_('suggestions').appendRow([new Date(), clean(p.topic, 60), clean(p.name, 60), msg]); out.ok = true; }
    } else if (p.action === 'visit') {
      const v = Number(meta.getRange('B1').getValue() || 0) + 1;
      meta.getRange('A1').setValue('visits'); meta.getRange('B1').setValue(v); out.visits = v;
    } else {
      const map = {};
      hearts.getDataRange().getValues().forEach(r => { if (r[0]) map[r[0]] = Number(r[1] || 0); });
      out.hearts = map; out.visits = Number(meta.getRange('B1').getValue() || 0);
    }
    return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.release(); }
}

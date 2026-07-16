/* ==========================================================================
   MOCK DATA
   This mirrors the columns from the "SSL Cert." master tracker.
   Power Automate will later replace loadRecords() with a live fetch
   (e.g. from a SharePoint list / Excel table / API endpoint) that
   returns objects in this same shape.
   ========================================================================== */

const RAW_RECORDS = [
  {
    certificateId: "126218249",
    application: "4155 - MY - CDARS-E",
    shortName: "\u2014",
    bu: "Commercial, Consumer and Claims",
    portfolioOwner: "Genri Como, Saravanan",
    primaryAppOwner: "Joo Phing Tan",
    responsibleCIO: "Umar Goldeli",
    bio: "Michael Patrick Galloway",
    ipAddress: "\u2014",
    dns: "\u2014",
    appUrl: "www-413.aig.com",
    certExpiry: "2026-07-07",
    lastFoundDateTime: "2026-06-28 09:12",
    lastObserved: "\u2014",
    lastObservedBy: "\u2014",
    title: "Missing from Key Factor",
    disposition: "Pass (Unmanaged)",
    strengthIssue: 0, inKeyFactor: 0, inQualys: 0, inHawkeye: -1,
    previousStatus: "Open",
    currentStatus: "Pending",
    statusCategory: "Feedback Required",
    remediationPlan: "Cert Expiry - July 2026. Appl Team will renew.",
    remediationTeam: "CN",
    targetETA: "TBD"
  },
  {
    certificateId: "239357882",
    application: "6434 - CN - Online Backtrack Visualization Platform",
    shortName: "PWGIWSCNMALL002",
    bu: "Commercial, Consumer and Claims",
    portfolioOwner: "Genri Como, Saravanan",
    primaryAppOwner: "Li Gang Ding",
    responsibleCIO: "Umar Goldeli",
    bio: "Michael Patrick Galloway",
    ipAddress: "10.64.144.123",
    dns: "\u2014",
    appUrl: "www-403.aig.com.cn",
    certExpiry: "2026-07-08",
    lastFoundDateTime: "2026-06-30 06:00",
    lastObserved: "Jun 9, 2026 6:00 AM",
    lastObservedBy: "Qualys Asset",
    title: "Missing from Key Factor. External address 180.168.227.2 last scanned Jun 9 2026; certificate not detected since Mar 6 2026.",
    disposition: "Pass (Unmanaged)",
    strengthIssue: 0, inKeyFactor: 0, inQualys: 1, inHawkeye: 0,
    previousStatus: "Open",
    currentStatus: "Pending",
    statusCategory: "Feedback Required",
    remediationPlan: "Cert Expiry - July 2026. Appl Team will renew.",
    remediationTeam: "CN",
    targetETA: "TBD"
  },
  {
    certificateId: "651405776",
    application: "6434 - CN - Online Backtrack Visualization Platform",
    shortName: "PWGIWSCNMALL002",
    bu: "Commercial, Consumer and Claims",
    portfolioOwner: "Genri Como, Saravanan",
    primaryAppOwner: "Li Gang Ding",
    responsibleCIO: "Umar Goldeli",
    bio: "Michael Patrick Galloway",
    ipAddress: "10.64.144.126",
    dns: "\u2014",
    appUrl: "www-403.aig.com.cn",
    certExpiry: "2026-07-08",
    lastFoundDateTime: "2026-06-30 06:00",
    lastObserved: "Jun 9, 2026 6:00 AM",
    lastObservedBy: "Qualys Asset",
    title: "Missing from Key Factor. External address 180.168.227.2 last scanned Jun 9 2026; certificate not detected since Mar 6 2026.",
    disposition: "Pass (Unmanaged)",
    strengthIssue: 0, inKeyFactor: 0, inQualys: 1, inHawkeye: 0,
    previousStatus: "Pending",
    currentStatus: "In Review",
    statusCategory: "Feedback Required",
    remediationPlan: "Cert Expiry - July 2026. Appl Team will renew.",
    remediationTeam: "CN",
    targetETA: "TBD"
  },
  {
    certificateId: "180567756",
    application: "6434 - CN - Online Backtrack Visualization Platform",
    shortName: "AWGIWSCNMALL001",
    bu: "Commercial, Consumer and Claims",
    portfolioOwner: "Genri Como, Saravanan",
    primaryAppOwner: "Li Gang Ding",
    responsibleCIO: "Umar Goldeli",
    bio: "Michael Patrick Galloway",
    ipAddress: "101.230.108.88",
    dns: "\u2014",
    appUrl: "model-www-403.aig.com.cn",
    certExpiry: "2026-09-19",
    lastFoundDateTime: "2026-06-29 14:44",
    lastObserved: "\u2014",
    lastObservedBy: "Qualys Asset",
    title: "Missing from Key Factor",
    disposition: "Pass (Unmanaged)",
    strengthIssue: 0, inKeyFactor: 1, inQualys: 0, inHawkeye: 0,
    previousStatus: "Pending",
    currentStatus: "On Hold",
    statusCategory: "On-Hold",
    remediationPlan: "Cert Expiry - from July 2026 & later. Appl Team HK.",
    remediationTeam: "HK",
    targetETA: "TBD"
  },
  {
    certificateId: "258880129",
    application: "6434 - CN - Online Backtrack Visualization Platform",
    shortName: "AWGIWSCNMALL001",
    bu: "Commercial, Consumer and Claims",
    portfolioOwner: "Genri Como, Saravanan",
    primaryAppOwner: "Li Gang Ding",
    responsibleCIO: "Umar Goldeli",
    bio: "Michael Patrick Galloway",
    ipAddress: "10.64.146.94",
    dns: "\u2014",
    appUrl: "model-www-403.aig.com.cn",
    certExpiry: "2026-09-19",
    lastFoundDateTime: "2026-06-29 14:44",
    lastObserved: "\u2014",
    lastObservedBy: "Qualys Asset",
    title: "Missing from Key Factor",
    disposition: "Pass (Unmanaged)",
    strengthIssue: 0, inKeyFactor: 1, inQualys: 0, inHawkeye: 0,
    previousStatus: "Pending",
    currentStatus: "On Hold",
    statusCategory: "On-Hold",
    remediationPlan: "Cert Expiry - from July 2026 & later. Appl Team HK.",
    remediationTeam: "HK",
    targetETA: "TBD"
  },
  {
    certificateId: "900877067",
    application: "6434 - CN - Online Backtrack Visualization Platform",
    shortName: "AWGIWSCNMALL001",
    bu: "Commercial, Consumer and Claims",
    portfolioOwner: "Genri Como, Saravanan",
    primaryAppOwner: "Li Gang Ding",
    responsibleCIO: "Umar Goldeli",
    bio: "Michael Patrick Galloway",
    ipAddress: "10.64.146.92",
    dns: "\u2014",
    appUrl: "model-www-403.aig.com.cn",
    certExpiry: "2026-09-19",
    lastFoundDateTime: "2026-06-29 14:44",
    lastObserved: "\u2014",
    lastObservedBy: "Qualys Asset",
    title: "Missing from Key Factor",
    disposition: "Pass (Unmanaged)",
    strengthIssue: 0, inKeyFactor: 1, inQualys: 0, inHawkeye: 0,
    previousStatus: "On Hold",
    currentStatus: "On Hold",
    statusCategory: "On-Hold",
    remediationPlan: "Cert Expiry - from July 2026 & later. Appl Team HK.",
    remediationTeam: "HK",
    targetETA: "TBD"
  },
  {
    certificateId: "524111994",
    application: "6155 - MY - Retail Payments Gateway",
    shortName: "RPGWMYWSC004",
    bu: "Retail Banking, Consumer Lending",
    portfolioOwner: "Farah Aziz",
    primaryAppOwner: "Nadia Hassan",
    responsibleCIO: "Ravi Chandrasekaran",
    bio: "Priya Sundaram",
    ipAddress: "10.72.18.44",
    dns: "\u2014",
    appUrl: "pay-gateway.aig.com.my",
    certExpiry: "2026-08-02",
    lastFoundDateTime: "2026-07-01 08:20",
    lastObserved: "Jul 1, 2026 8:20 AM",
    lastObservedBy: "Hawkeye Scanner",
    title: "Weak Signature Algorithm (SHA-1) detected on certificate chain",
    disposition: "Fail (Managed)",
    strengthIssue: 1, inKeyFactor: 1, inQualys: 1, inHawkeye: 1,
    previousStatus: "Escalated",
    currentStatus: "In Progress",
    statusCategory: "Remediation In Progress",
    remediationPlan: "Reissue certificate with SHA-256 chain and redeploy to load balancer.",
    remediationTeam: "MY",
    targetETA: "2026-07-25"
  },
  {
    certificateId: "817517401",
    application: "6155 - MY - Retail Payments Gateway",
    shortName: "RPGWMYWSC004",
    bu: "Retail Banking, Consumer Lending",
    portfolioOwner: "Farah Aziz",
    primaryAppOwner: "Nadia Hassan",
    responsibleCIO: "Ravi Chandrasekaran",
    bio: "Priya Sundaram",
    ipAddress: "10.72.18.51",
    dns: "\u2014",
    appUrl: "pay-gateway.aig.com.my",
    certExpiry: "2026-07-21",
    lastFoundDateTime: "2026-07-05 11:02",
    lastObserved: "Jul 5, 2026 11:02 AM",
    lastObservedBy: "Qualys Asset",
    title: "Certificate expiring within 30 days \u2014 no renewal ticket found",
    disposition: "Pass (Managed)",
    strengthIssue: 0, inKeyFactor: 0, inQualys: 1, inHawkeye: 0,
    previousStatus: "Pending",
    currentStatus: "Escalated",
    statusCategory: "Feedback Required",
    remediationPlan: "Portfolio owner to confirm renewal ticket and vendor CA.",
    remediationTeam: "MY",
    targetETA: "2026-07-18"
  },
  {
    certificateId: "651900332",
    application: "7021 - HK - Claims Intake Portal",
    shortName: "CLMINTKHK002",
    bu: "Commercial, Consumer and Claims",
    portfolioOwner: "Ka Yee Wong",
    primaryAppOwner: "Desmond Lau",
    responsibleCIO: "Umar Goldeli",
    bio: "Michael Patrick Galloway",
    ipAddress: "10.88.4.17",
    dns: "\u2014",
    appUrl: "claims-intake.aig.com.hk",
    certExpiry: "2026-12-11",
    lastFoundDateTime: "2026-07-03 07:45",
    lastObserved: "Jul 3, 2026 7:45 AM",
    lastObservedBy: "Qualys Asset",
    title: "Certificate renewed and validated on schedule",
    disposition: "Pass (Managed)",
    strengthIssue: 0, inKeyFactor: 0, inQualys: 0, inHawkeye: 0,
    previousStatus: "In Progress",
    currentStatus: "Resolved",
    statusCategory: "Closed",
    remediationPlan: "New certificate deployed and confirmed by scanner. No further action.",
    remediationTeam: "HK",
    targetETA: "2026-07-05"
  },
  {
    certificateId: "902213410",
    application: "3310 - SG - Employee Self Service Portal",
    shortName: "ESSSGWSC011",
    bu: "Corporate Functions",
    portfolioOwner: "Wei Ling Tan",
    primaryAppOwner: "Aaron Koh",
    responsibleCIO: "Ravi Chandrasekaran",
    bio: "Priya Sundaram",
    ipAddress: "10.51.9.203",
    dns: "\u2014",
    appUrl: "ess.aig.com.sg",
    certExpiry: "2026-07-17",
    lastFoundDateTime: "2026-07-10 16:30",
    lastObserved: "Jul 10, 2026 4:30 PM",
    lastObservedBy: "Hawkeye Scanner",
    title: "Certificate expiring within 7 days \u2014 renewal in progress",
    disposition: "Pass (Unmanaged)",
    strengthIssue: 0, inKeyFactor: 0, inQualys: 0, inHawkeye: 1,
    previousStatus: "Feedback Required",
    currentStatus: "In Progress",
    statusCategory: "Remediation In Progress",
    remediationPlan: "New certificate ordered from internal CA; deployment window scheduled Jul 16.",
    remediationTeam: "SG",
    targetETA: "2026-07-16"
  }
];

/* ==========================================================================
   STATE
   ========================================================================== */
let allRecords = [];
let filteredRecords = [];
let currentPage = 1;
const PAGE_SIZE = 6;
let sortState = { key: "certExpiry", dir: "asc" };
let activeSummaryFilter = null; // 'expiring' | 'pending' | 'feedback' | 'resolved' | null

const statusStyle = {
  "Open":              { cls: "badge-danger" },
  "Escalated":         { cls: "badge-danger" },
  "Pending":           { cls: "badge-warning" },
  "In Review":         { cls: "badge-info" },
  "Feedback Required": { cls: "badge-info" },
  "On Hold":           { cls: "badge-neutral" },
  "In Progress":       { cls: "badge-warning" },
  "Resolved":          { cls: "badge-success" }
};

/* ==========================================================================
   DATA LOADING (swap this for a live Power Automate / API call later)
   ========================================================================== */
function loadRecords() {
  // Example for future live integration:
  // const res = await fetch('https://<power-automate-http-trigger-url>');
  // allRecords = await res.json();
  allRecords = RAW_RECORDS.map((r, i) => ({ id: `rec-${i}`, ...r }));
}

/* ==========================================================================
   HELPERS
   ========================================================================== */
function daysUntil(dateStr) {
  const today = new Date("2026-07-15T00:00:00");
  const target = new Date(dateStr + "T00:00:00");
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr) {
  if (!dateStr || dateStr === "TBD") return "TBD";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function statusBadge(status) {
  const style = statusStyle[status] || { cls: "badge-neutral" };
  return `<span class="badge-status ${style.cls}"><span class="dot"></span>${escapeHtml(status)}</span>`;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a.localeCompare(b));
}

/* ==========================================================================
   FILTER OPTIONS
   ========================================================================== */
function populateFilterOptions() {
  const buSel = document.getElementById("filterBU");
  const statusSel = document.getElementById("filterCurrentStatus");
  const catSel = document.getElementById("filterCategory");
  const ownerSel = document.getElementById("filterOwner");

  uniqueSorted(allRecords.map(r => r.bu)).forEach(v => buSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.currentStatus)).forEach(v => statusSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.statusCategory)).forEach(v => catSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.portfolioOwner)).forEach(v => ownerSel.add(new Option(v, v)));
}

/* ==========================================================================
   SUMMARY CARDS
   ========================================================================== */
function computeSummary() {
  const total = allRecords.length;
  const expiring = allRecords.filter(r => daysUntil(r.certExpiry) <= 30 && daysUntil(r.certExpiry) >= 0 && r.currentStatus !== "Resolved").length;
  const pending = allRecords.filter(r => r.currentStatus === "Pending" || r.currentStatus === "On Hold").length;
  const feedback = allRecords.filter(r => r.currentStatus === "Feedback Required" || r.currentStatus === "In Review" || r.currentStatus === "Escalated").length;
  const resolved = allRecords.filter(r => r.currentStatus === "Resolved").length;
  return { total, expiring, pending, feedback, resolved };
}

function renderSummary() {
  const s = computeSummary();
  const grid = document.getElementById("summaryGrid");
  const cards = [
    { key: null,       cls: "sc-total",    icon: "bi-collection",        value: s.total,    label: "Total Records" },
    { key: "expiring", cls: "sc-expiring", icon: "bi-hourglass-split",   value: s.expiring, label: "Expiring \u2264 30 Days" },
    { key: "pending",  cls: "sc-pending",  icon: "bi-hourglass",         value: s.pending,  label: "Pending / On Hold" },
    { key: "feedback", cls: "sc-feedback", icon: "bi-chat-square-text",  value: s.feedback, label: "Needs Feedback" },
    { key: "resolved", cls: "sc-resolved", icon: "bi-check-circle",      value: s.resolved, label: "Resolved" }
  ];

  grid.innerHTML = cards.map(c => `
    <div class="summary-card ${c.cls} ${activeSummaryFilter === c.key ? 'is-active' : ''}" data-key="${c.key || ''}">
      <div class="sc-top">
        <span class="sc-icon"><i class="bi ${c.icon}"></i></span>
      </div>
      <div class="sc-value">${c.value}</div>
      <div class="sc-label">${c.label}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".summary-card").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.key || null;
      activeSummaryFilter = activeSummaryFilter === key ? null : key;
      currentPage = 1;
      applyFilters();
      renderSummary();
    });
  });
}

/* ==========================================================================
   FILTER + SEARCH + SORT PIPELINE
   ========================================================================== */
function applyFilters() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const bu = document.getElementById("filterBU").value;
  const status = document.getElementById("filterCurrentStatus").value;
  const cat = document.getElementById("filterCategory").value;
  const owner = document.getElementById("filterOwner").value;

  filteredRecords = allRecords.filter(r => {
    if (bu && r.bu !== bu) return false;
    if (status && r.currentStatus !== status) return false;
    if (cat && r.statusCategory !== cat) return false;
    if (owner && r.portfolioOwner !== owner) return false;

    if (activeSummaryFilter === "expiring") {
      const d = daysUntil(r.certExpiry);
      if (!(d <= 30 && d >= 0 && r.currentStatus !== "Resolved")) return false;
    }
    if (activeSummaryFilter === "pending" && !["Pending", "On Hold"].includes(r.currentStatus)) return false;
    if (activeSummaryFilter === "feedback" && !["Feedback Required", "In Review", "Escalated"].includes(r.currentStatus)) return false;
    if (activeSummaryFilter === "resolved" && r.currentStatus !== "Resolved") return false;

    if (q) {
      const haystack = [
        r.application, r.shortName, r.portfolioOwner, r.primaryAppOwner,
        r.responsibleCIO, r.bio, r.ipAddress, r.appUrl, r.certificateId,
        r.currentStatus, r.previousStatus, r.title
      ].join(" ").toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  sortRecords();
  renderTable();
}

function sortRecords() {
  const { key, dir } = sortState;
  filteredRecords.sort((a, b) => {
    let va = a[key], vb = b[key];
    if (key === "certExpiry") { va = new Date(va); vb = new Date(vb); }
    if (key === "targetETA") {
      va = va === "TBD" ? Infinity : new Date(va);
      vb = vb === "TBD" ? Infinity : new Date(vb);
    }
    if (typeof va === "string") va = va.toLowerCase();
    if (typeof vb === "string") vb = vb.toLowerCase();
    if (va < vb) return dir === "asc" ? -1 : 1;
    if (va > vb) return dir === "asc" ? 1 : -1;
    return 0;
  });
}

/* ==========================================================================
   TABLE RENDER
   ========================================================================== */
function renderTable() {
  const body = document.getElementById("recordsBody");
  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("resultsCount");
  const table = document.getElementById("recordsTable");

  countEl.textContent = `${filteredRecords.length} record${filteredRecords.length === 1 ? "" : "s"}`;

  if (filteredRecords.length === 0) {
    body.innerHTML = "";
    table.style.display = "none";
    empty.classList.remove("d-none");
    document.getElementById("paginationBar").style.visibility = "hidden";
    return;
  }
  table.style.display = "table";
  empty.classList.add("d-none");
  document.getElementById("paginationBar").style.visibility = "visible";

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredRecords.slice(start, start + PAGE_SIZE);

  body.innerHTML = pageItems.map(r => {
    const d = daysUntil(r.certExpiry);
    let dayCls = "is-ok";
    let dayLabel = `${d} days left`;
    if (d < 0) { dayCls = "is-critical"; dayLabel = `Expired ${Math.abs(d)}d ago`; }
    else if (d <= 14) { dayCls = "is-critical"; dayLabel = `${d} days left`; }
    else if (d <= 30) { dayCls = "is-soon"; dayLabel = `${d} days left`; }

    return `
      <tr>
        <td class="cell-app">
          <span class="app-name">${escapeHtml(r.application)}</span>
          <span class="app-sub">${escapeHtml(r.shortName)} &middot; Cert ${escapeHtml(r.certificateId)}</span>
        </td>
        <td class="cell-owner">
          <span class="owner-name">${escapeHtml(r.portfolioOwner)}</span>
          <span class="owner-role">${escapeHtml(r.primaryAppOwner)}</span>
        </td>
        <td class="cell-date">
          ${formatDate(r.certExpiry)}
          <span class="days-left ${dayCls}">${dayLabel}</span>
        </td>
        <td>${statusBadge(r.previousStatus)}</td>
        <td>${statusBadge(r.currentStatus)}</td>
        <td><span class="eta-tag ${r.targetETA === 'TBD' ? 'tbd' : ''}">${r.targetETA === 'TBD' ? 'TBD' : formatDate(r.targetETA)}</span></td>
        <td class="td-action">
          <button class="btn-details" data-id="${r.id}"><i class="bi bi-eye"></i> View</button>
        </td>
      </tr>
    `;
  }).join("");

  body.querySelectorAll(".btn-details").forEach(btn => {
    btn.addEventListener("click", () => openDetail(btn.dataset.id));
  });

  document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages}`;
  document.getElementById("prevPage").disabled = currentPage <= 1;
  document.getElementById("nextPage").disabled = currentPage >= totalPages;

  document.querySelectorAll(".records-table thead th[data-sort]").forEach(th => {
    th.querySelector(".sort-caret")?.remove();
    if (th.dataset.sort === sortState.key) {
      const caret = document.createElement("span");
      caret.className = "sort-caret";
      caret.innerHTML = sortState.dir === "asc" ? "\u25B2" : "\u25BC";
      th.appendChild(caret);
    }
  });
}

/* ==========================================================================
   DETAIL MODAL
   ========================================================================== */
function openDetail(id) {
  const r = allRecords.find(x => x.id === id);
  if (!r) return;

  document.getElementById("modalCertId").textContent = `CERTIFICATE ${r.certificateId}`;
  document.getElementById("modalAppTitle").textContent = r.application;

  const flags = [
    { label: "Strength Issue", val: r.strengthIssue },
    { label: "In Key Factor", val: r.inKeyFactor },
    { label: "In Qualys", val: r.inQualys },
    { label: "In Hawkeye", val: r.inHawkeye }
  ];

  document.getElementById("modalBody").innerHTML = `
    <div class="detail-status-row">
      <span class="flow-label">Status</span>
      ${statusBadge(r.previousStatus)}
      <i class="bi bi-arrow-right"></i>
      ${statusBadge(r.currentStatus)}
      <span style="margin-left:auto;">${statusBadge(r.statusCategory)}</span>
    </div>

    <div class="detail-section-title">Issue</div>
    <div class="detail-grid">
      <div class="detail-item full">
        <div class="di-label">Title</div>
        <div class="di-value">${escapeHtml(r.title)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Disposition</div>
        <div class="di-value">${escapeHtml(r.disposition)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Certificate Expiration</div>
        <div class="di-value">${formatDate(r.certExpiry)}</div>
      </div>
    </div>

    <div class="detail-section-title">Detection Flags</div>
    <div class="flag-pill-row">
      ${flags.map(f => `<span class="flag-pill ${Number(f.val) > 0 ? 'flag-yes' : ''}">${f.label}: ${f.val}</span>`).join("")}
    </div>

    <div class="detail-section-title">Application &amp; Ownership</div>
    <div class="detail-grid">
      <div class="detail-item">
        <div class="di-label">Business Unit</div>
        <div class="di-value">${escapeHtml(r.bu)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Short Name</div>
        <div class="di-value mono">${escapeHtml(r.shortName)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Portfolio Owner</div>
        <div class="di-value">${escapeHtml(r.portfolioOwner)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Primary App Owner(s)</div>
        <div class="di-value">${escapeHtml(r.primaryAppOwner)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Responsible CIO</div>
        <div class="di-value">${escapeHtml(r.responsibleCIO)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">BIO</div>
        <div class="di-value">${escapeHtml(r.bio)}</div>
      </div>
    </div>

    <div class="detail-section-title">Network &amp; Scan Detail</div>
    <div class="detail-grid">
      <div class="detail-item">
        <div class="di-label">App URL</div>
        <div class="di-value mono">${escapeHtml(r.appUrl)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">IP Address</div>
        <div class="di-value mono">${escapeHtml(r.ipAddress)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">DNS</div>
        <div class="di-value mono">${escapeHtml(r.dns)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Last Found Date/Time</div>
        <div class="di-value">${escapeHtml(r.lastFoundDateTime)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Last Observed</div>
        <div class="di-value">${escapeHtml(r.lastObserved)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Last Observed By</div>
        <div class="di-value">${escapeHtml(r.lastObservedBy)}</div>
      </div>
    </div>

    <div class="detail-section-title">Remediation</div>
    <div class="detail-grid">
      <div class="detail-item full">
        <div class="di-label">Remediation Plan</div>
        <div class="di-value">${escapeHtml(r.remediationPlan)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Remediation Team</div>
        <div class="di-value">${escapeHtml(r.remediationTeam)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Target ETA</div>
        <div class="di-value">${r.targetETA === "TBD" ? "TBD" : formatDate(r.targetETA)}</div>
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById("detailModal"));
  modal.show();
}

/* ==========================================================================
   EVENTS
   ========================================================================== */
function wireEvents() {
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");

  searchInput.addEventListener("input", () => {
    searchClear.classList.toggle("d-none", searchInput.value.length === 0);
    currentPage = 1;
    applyFilters();
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.classList.add("d-none");
    currentPage = 1;
    applyFilters();
  });

  ["filterBU", "filterCurrentStatus", "filterCategory", "filterOwner"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => {
      currentPage = 1;
      applyFilters();
    });
  });

  const resetAll = () => {
    searchInput.value = "";
    searchClear.classList.add("d-none");
    ["filterBU", "filterCurrentStatus", "filterCategory", "filterOwner"].forEach(id => {
      document.getElementById(id).value = "";
    });
    activeSummaryFilter = null;
    currentPage = 1;
    applyFilters();
    renderSummary();
  };
  document.getElementById("resetFilters").addEventListener("click", resetAll);
  document.getElementById("emptyResetBtn").addEventListener("click", resetAll);

  document.querySelectorAll(".records-table thead th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (sortState.key === key) {
        sortState.dir = sortState.dir === "asc" ? "desc" : "asc";
      } else {
        sortState = { key, dir: "asc" };
      }
      sortRecords();
      renderTable();
    });
  });

  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) { currentPage--; renderTable(); }
  });
  document.getElementById("nextPage").addEventListener("click", () => {
    currentPage++; renderTable();
  });

  document.getElementById("refreshBtn").addEventListener("click", (e) => {
    e.currentTarget.classList.add("spinning");
    document.getElementById("syncTime").textContent = "just now";
    setTimeout(() => e.currentTarget.classList.remove("spinning"), 700);
    // Placeholder: this is where Power Automate refresh call would be triggered.
    applyFilters();
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  loadRecords();
  populateFilterOptions();
  renderSummary();
  wireEvents();
  applyFilters();
});

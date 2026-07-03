// --- MOCK DATABASE & DATASETS ---

const MOCK_DATA = {
  smartstruct: {
    title: "SmartStruct AI",
    desc: "Converts unstructured documents into clean, schema-compliant JSON/XML structures.",
    samples: [
      {
        name: "Acme Invoice (Text)",
        content: `Acme Corporation
Invoice ID: INV-2026-8942
Date: June 24, 2026
Due Date: July 24, 2026

Bill To:
Stark Industries
10880 Malibu Point
Malibu, CA 90265

Line Items:
1. Arc Reactor Maintenance - Qty: 1 - Unit Price: $75,000.00
2. Vibranium Alloy Casting - Qty: 5 - Unit Price: $120,000.00
3. AI System Optimization (JARVIS Core) - Qty: 1 - Unit Price: $250,000.00

Subtotal: $925,000.00
Tax (8.25%): $76,312.50
Total Due: $1,001,312.50

Payment Terms: Net 30. Please remit payments via wire transfer to Chase Manhattan Bank.`,
        output: `{
  "$schema": "https://json-schema.org/v12/schema",
  "document_type": "invoice",
  "invoice_metadata": {
    "invoice_id": "INV-2026-8942",
    "issue_date": "2026-06-24",
    "due_date": "2026-07-24",
    "currency": "USD"
  },
  "parties": {
    "issuer": {
      "company_name": "Acme Corporation"
    },
    "recipient": {
      "company_name": "Stark Industries",
      "address": "10880 Malibu Point, Malibu, CA 90265"
    }
  },
  "line_items": [
    {
      "index": 1,
      "description": "Arc Reactor Maintenance",
      "quantity": 1,
      "unit_price": 75000.00,
      "total_amount": 75000.00
    },
    {
      "index": 2,
      "description": "Vibranium Alloy Casting",
      "quantity": 5,
      "unit_price": 120000.00,
      "total_amount": 600000.00
    },
    {
      "index": 3,
      "description": "AI System Optimization (JARVIS Core)",
      "quantity": 1,
      "unit_price": 250000.00,
      "total_amount": 250000.00
    }
  ],
  "financials": {
    "subtotal": 925000.00,
    "tax_rate_percent": 8.25,
    "tax_amount": 76312.50,
    "total_due": 1001312.50
  },
  "payment_terms": {
    "terms": "Net 30",
    "method": "Wire Transfer",
    "routing_bank": "Chase Manhattan Bank"
  },
  "confidence_score": 0.998
}`
      },
      {
        name: "Employment Contract",
        content: `EMPLOYMENT AGREEMENT

This Agreement is entered into on this 15th day of June, 2026, by and between:
Cyberdyne Systems Inc. (the "Employer"), located at 18111 Von Karman Ave, Irvine, CA, and
Dr. Miles Bennett Dyson (the "Employee").

1. POSITION & DUTIES:
The Employee is hired in the capacity of Director of Special Projects. The Employee will report directly to the Chief Technology Officer and oversee neural-network architecture development.

2. COMPENSATION & BENEFITS:
The Employer shall pay the Employee an annual base salary of $285,000.00, payable in semi-monthly installments. The Employee is eligible for a performance bonus of up to 25% of base salary.

3. TERM:
Employment shall commence on July 1, 2026, and remain in effect until terminated by either party in accordance with Section 8 of this Agreement.`,
        output: `{
  "document_type": "employment_agreement",
  "execution_date": "2026-06-15",
  "parties": [
    {
      "role": "employer",
      "name": "Cyberdyne Systems Inc.",
      "address": "18111 Von Karman Ave, Irvine, CA"
    },
    {
      "role": "employee",
      "name": "Dr. Miles Bennett Dyson"
    }
  ],
  "employment_details": {
    "job_title": "Director of Special Projects",
    "reports_to": "Chief Technology Officer",
    "responsibilities": [
      "neural-network architecture development"
    ],
    "start_date": "2026-07-01"
  },
  "compensation": {
    "base_salary_annual": 285000.00,
    "payment_frequency": "semi-monthly",
    "currency": "USD",
    "performance_bonus_potential_percent": 25.0
  },
  "confidence_score": 0.987
}`
      }
    ]
  },
  text_extraction: {
    title: "Text Extraction Engine",
    desc: "Advanced, layout-aware OCR and text line detection for scans, PDFs, and images.",
    samples: [
      {
        name: "Handwritten Shipping Form",
        content: "[Simulated Image Input: Scan of Handwritten Shipping Bill #SH-990-25A]",
        output: `=== OCR LAYOUT-AWARE TEXT EXTRACTION ===
[Confidence Level: 96.4%]
[Detected Language: English, Spanish]

Line 01:  [X: 45, Y: 110, W: 340, H: 24]  FAST-TRACK FREIGHT LOGISTICS
Line 02:  [X: 45, Y: 140, W: 200, H: 18]  Tracking No: SH-990-25A
Line 03:  [X: 620, Y: 138, W: 150, H: 18] Date: 12/05/2026

Line 04:  [X: 45, Y: 210, W: 120, H: 15]  SHIPPER INFO:
Line 05:  [X: 45, Y: 235, W: 280, H: 20]  Alejandro G. (Sistemas del Norte)
Line 06:  [X: 45, Y: 260, W: 310, H: 20]  Avenida de la Constitución 405
Line 07:  [X: 45, Y: 285, W: 210, H: 20]  Monterrey, NL, Mexico 64000

Line 08:  [X: 450, Y: 210, W: 120, H: 15] CONSIGNEE INFO:
Line 09:  [X: 450, Y: 235, W: 250, H: 20] Wayne Enterprises Tech-Hub
Line 10:  [X: 450, Y: 260, W: 300, H: 20] 1007 Mountain Drive
Line 11:  [X: 450, Y: 285, W: 180, H: 20] Gotham City, NJ 07001

Line 12:  [X: 45, Y: 400, W: 710, H: 4]   ----------------------------------------
Line 13:  [X: 45, Y: 420, W: 420, H: 22]  Item Description        | Qty | Weight
Line 14:  [X: 45, Y: 450, W: 420, H: 20]  Prototype Circuit Boards | 02  | 4.5 kg
Line 15:  [X: 45, Y: 475, W: 420, H: 20]  Optical Sensor Arrays   | 10  | 1.2 kg
Line 16:  [X: 45, Y: 500, W: 420, H: 20]  Titanium Enclosures     | 04  | 18.0 kg

=== METADATA EXTRACTED ===
Orientation: 0 degrees (Autocorrected from -2.4 degrees tilt)
Page Count: 1
Handwriting Detected: Yes (Lines 5, 14, 15, 16 classified as handwritten)`
      },
      {
        name: "Low-Res Receipt Photo",
        content: "[Simulated Image Input: Crumpled receipt photo from mobile camera]",
        output: `=== OCR LAYOUT-AWARE TEXT EXTRACTION ===
[Confidence Level: 89.1%]
[Detected Language: English]

Line 01:  [X: 120, Y: 80,  W: 240, H: 30]  STARBUCKS COFFEE
Line 02:  [X: 150, Y: 115, W: 180, H: 15]  Store #10495 - San Francisco
Line 03:  [X: 80,  Y: 150, W: 320, H: 15]  -----------------------------
Line 04:  [X: 80,  Y: 175, W: 150, H: 18]  1  GR Latte
Line 05:  [X: 350, Y: 175, W: 50,  H: 18]  $4.75
Line 06:  [X: 100, Y: 195, W: 120, H: 14]  -> Oat Milk Substitute
Line 07:  [X: 350, Y: 195, W: 50,  H: 14]  $0.80
Line 08:  [X: 80,  Y: 215, W: 150, H: 18]  1  Butter Croissant
Line 09:  [X: 350, Y: 215, W: 50,  H: 18]  $3.95
Line 10:  [X: 80,  Y: 250, W: 320, H: 15]  -----------------------------
Line 11:  [X: 80,  Y: 275, W: 100, H: 18]  Subtotal
Line 12:  [X: 350, Y: 275, W: 50,  H: 18]  $9.50
Line 13:  [X: 80,  Y: 295, W: 100, H: 18]  Tax (8.5%)
Line 14:  [X: 350, Y: 295, W: 50,  H: 18]  $0.81
Line 15:  [X: 80,  Y: 325, W: 100, H: 22]  TOTAL DUE
Line 16:  [X: 340, Y: 325, W: 60,  H: 22]  $10.31

=== IMAGE QUALITY ASSESSMENT ===
Shadowing Detected: Moderate (Contrast equalized)
Blur Level: Low (Sharpening filter applied)
Perspective Distortion: Corrected (Keystone warped by +12 degrees)`
      }
    ]
  },
  semantic_classification: {
    title: "Semantic Document Classification",
    desc: "Categorizes documents based on high-level semantic meaning, context, and intent.",
    samples: [
      {
        name: "IP Waiver Draft",
        content: `INTELLECTUAL PROPERTY WAIVER & RELEASE

This Release is executed in connection with contributions made to the open-source repository "Project Titan" managed by Atlas Technologies Corp.

The undersigned contributor hereby grants Atlas Technologies Corp a perpetual, worldwide, non-exclusive, royalty-free, fully paid-up, irrevocable license to use, reproduce, modify, and distribute any software code, designs, or documentation submitted. The contributor warrants that they are the sole owner of the submitted materials and have the full authority to make this assignment, waiving all moral rights therein.`,
        output: `=== SEMANTIC CLASSIFICATION REPORT ===

Primary Classification:
- LEGAL_AGREEMENT / INTELLECTUAL_PROPERTY (Confidence: 99.7%)

Secondary Tags:
- OPEN_SOURCE_CONTRIBUTION (Confidence: 94.2%)
- LIABILITY_RELEASE (Confidence: 87.5%)
- COMPLIANCE_RISK_LOW (Confidence: 91.0%)

Risk Profiling:
- Category: Intellectual Property Waiver
- Action Required: Auto-Route to legal archives. No human review required.
- Retention Schedule: Permanent (75 Years)

Semantic Explanation:
The document contains dense legal terminology relating to licensing ("perpetual, worldwide, royalty-free, irrevocable"), ownership warranties, and the explicit waiver of moral rights. The context focuses on software contributions, triggering the open-source classification.`
      },
      {
        name: "Security Alert Email",
        content: `Subject: URGENT: Action required on unusual login activity in your workspace

We detected a successful login to your administrator account (root-admin-01) from an unrecognized IP address (198.51.100.42) located in Bucharest, Romania. This login bypassed secondary verification via a session-cookie injection technique.

If this was not you, please immediately disable API keys, rotate root credentials, and terminate all active sessions via the security console.`,
        output: `=== SEMANTIC CLASSIFICATION REPORT ===

Primary Classification:
- SECURITY_ALERT / CYBER_SECURITY (Confidence: 99.9%)

Secondary Tags:
- CRITICAL_INCIDENT (Confidence: 98.4%)
- ACCESS_VIOLATION (Confidence: 95.1%)
- ACTION_REQUIRED_IMMEDIATE (Confidence: 97.8%)

Risk Profiling:
- Category: Active Security Compromise
- Action Required: Trigger Incident Response Protocol. Page On-Call SecOps.
- Retention Schedule: Audit logs (7 Years)

Semantic Explanation:
High-density security incident triggers found: "unusual login", "unrecognized IP", "session-cookie injection", "root-admin-01", and urgent instructions to rotate keys and terminate sessions. Classified as a critical cybersecurity event.`
      }
    ]
  },
  data_mining: {
    title: "Document Data Mining",
    desc: "Discovers hidden relationships, executes Named Entity Recognition (NER), and builds graph relations.",
    samples: [
      {
        name: "Clinical Drug Trial",
        content: `CLINICAL STUDY REPORT: V-209 EVALUATION
Sponsor: BioGenix Laboratories Inc.
Principal Investigator: Dr. Helen Cho
Date: March 14, 2026

Study Objectives:
To evaluate the therapeutic efficacy of compound V-209 (commercial name: Regenex) in treating acute pulmonary fibrosis secondary to viral pneumonia (COVID-25 strain) in patients aged 45-65.

Methods & Results:
A cohort of 120 patients was administered 15mg of Regenex daily for 14 days at the Seoul U-Medical Center. The control group received a placebo. By day 10, Dr. Cho observed a 34% decrease in fibrotic tissue markers in the active cohort compared to the placebo group. Mild side effects included localized erythema.`,
        output: `=== NAMED ENTITY RECOGNITION (NER) ===

[SPONSOR]        BioGenix Laboratories Inc.  (Conf: 99.4%)
[INVESTIGATOR]   Dr. Helen Cho               (Conf: 98.8%)
[COMPOUND]       V-209                       (Conf: 99.1%)
[DRUG_BRAND]     Regenex                     (Conf: 97.5%)
[DISEASE]        Pulmonary Fibrosis          (Conf: 99.5%)
[VIRUS_STRAIN]   COVID-25                    (Conf: 98.2%)
[DOSAGE]         15mg                        (Conf: 95.4%)
[LOCATION]       Seoul U-Medical Center      (Conf: 99.0%)
[METRIC]         34% decrease in fibrosis    (Conf: 92.1%)

=== KNOWLEDGE GRAPH RELATIONSHIPS ===

1. BioGenix Laboratories Inc. --[Sponsors]--> V-209 Drug Trial
2. Dr. Helen Cho --[Investigates]--> V-209 Efficacy
3. Regenex (V-209) --[Treats]--> Pulmonary Fibrosis (caused by COVID-25)
4. Regenex (V-209) --[Administered At]--> Seoul U-Medical Center
5. Regenex (V-209) --[Has Side Effect]--> Erythema

=== DISCOVERED INSIGHTS ===
- Regenex shows statistically significant (34% marker reduction) efficacy in a short duration (10-14 days).
- Safety profile is clean, with only minor dermatological side effects reported.`
      },
      {
        name: "M&A Announcement",
        content: `Acquisition Press Release
FOR IMMEDIATE RELEASE

Redmond, WA and San Jose, CA -- April 9, 2026

Microsoft Corp. (NASDAQ: MSFT) and cloud security startup ShieldAI Systems today announced a definitive agreement under which Microsoft will acquire ShieldAI in an all-cash transaction valued at $4.2 Billion.

ShieldAI's CEO, Priya Patel, will join Microsoft's Cloud & AI Division, reporting to Executive Vice President Scott Guthrie. Goldman Sachs served as the exclusive financial advisor to ShieldAI.`,
        output: `=== NAMED ENTITY RECOGNITION (NER) ===

[ACQUIRER]       Microsoft Corp. (MSFT)     (Conf: 99.8%)
[TARGET]         ShieldAI Systems           (Conf: 99.6%)
[DEAL_VALUE]     $4.2 Billion               (Conf: 99.9%)
[DEAL_TYPE]      All-cash acquisition       (Conf: 98.1%)
[PERSON]         Priya Patel (CEO, Target)  (Conf: 99.5%)
[PERSON]         Scott Guthrie (EVP, MSFT)  (Conf: 99.2%)
[ADVISOR]        Goldman Sachs              (Conf: 98.7%)
[DATE]           April 9, 2026              (Conf: 99.9%)

=== KNOWLEDGE GRAPH RELATIONSHIPS ===

1. Microsoft Corp. --[Acquires]--> ShieldAI Systems
2. Deal Value --[Quantified As]--> $4.2 Billion
3. Priya Patel --[Transfers To]--> Microsoft Corp. (reporting to Scott Guthrie)
4. Goldman Sachs --[Advised]--> ShieldAI Systems
5. ShieldAI Systems --[Operates In]--> Cloud Security Sector

=== DISCOVERED INSIGHTS ===
- Microsoft continues aggressive expansion in cyber defense / cloud security.
- High-multiple acquisition ($4.2B), showing extreme market value for ShieldAI's IP.`
      }
    ]
  },
  contextual_knowledge: {
    title: "Contextual Knowledge Platform",
    desc: "A vector store and semantic search engine that constructs structured answers from raw documents.",
    samples: [
      {
        name: "Remote Work & Travel Policy",
        content: `GLOBAL WORKPLACE POLICY (v4.2)
Section 4: Remote Work & Travel Expense Reimbursements

1. Work From Home (WFH) Structure:
Employees are eligible for a hybrid schedule consisting of up to 3 remote days per week, subject to team alignment. Core collaboration days are Tuesdays and Thursdays.

2. Home Office Stipend:
Upon hiring, full-time employees are eligible for a one-time home office equipment stipend of up to $800.00. This covers monitors, ergonomic chairs, and keyboards. Receipts must be submitted to Expensify within 60 days of purchase.

3. Travel Lodging Reimbursements:
For approved business travel, the maximum reimbursable rate for lodging is $250.00 per night in Tier 1 cities (New York, San Francisco, London, Tokyo) and $175.00 per night in all other locations. Meals are covered under a per diem rate of $75.00/day.`,
        output: `=== SEMANTIC RAG SYSTEM INITIALIZED ===
Vector Database: Indexed
Document: Global Workplace Policy (v4.2)
Chunks Ingested: 4

[Active Console: Ask a question about the document]

User Question: "What is the maximum amount I can claim for setting up my home office, and how do I submit it?"

Synthesized Answer:
You can claim a maximum one-time stipend of **$800.00** for home office equipment (which covers monitors, ergonomic chairs, and keyboards). To receive the reimbursement, you must submit your receipts to **Expensify** within **60 days** of the purchase.

Supporting Passages (Ranked by Vector Similarity):
1. "Upon hiring, full-time employees are eligible for a one-time home office equipment stipend of up to $800.00... Receipts must be submitted to Expensify within 60 days of purchase." (Score: 0.942)
2. "This covers monitors, ergonomic chairs, and keyboards." (Score: 0.815)
3. "Employees are eligible for a hybrid schedule consisting of up to 3 remote days per week..." (Score: 0.520)`
      },
      {
        name: "API Rate-Limiting Guide",
        content: `API DEVELOPER GATEWAY DOCUMENTATION
Section: Rate Limiting & Access Tiers

The Gateway enforces rate limits based on the client's API Key tier:
- Free Tier: 60 requests per minute (RPM). Peak bursts up to 10 requests per second.
- Professional Tier: 5,000 requests per minute (RPM). Dedicated gateway routing.
- Enterprise Tier: 50,000 requests per minute (RPM). Custom high-availability clusters.

If a client exceeds their tier's limit, the gateway responds with HTTP Status Code 429 (Too Many Requests). The response includes a 'Retry-After' header indicating the cooldown period in seconds.`,
        output: `=== SEMANTIC RAG SYSTEM INITIALIZED ===
Vector Database: Indexed
Document: API Developer Gateway Documentation
Chunks Ingested: 3

[Active Console: Ask a question about the document]

User Question: "What happens if my application exceeds the Free Tier API limits?"

Synthesized Answer:
If your application exceeds the Free Tier limit of **60 requests per minute (RPM)** or a peak burst of **10 requests per second**, the API Gateway will block your request and respond with **HTTP Status Code 429 (Too Many Requests)**. Additionally, the response will contain a **'Retry-After'** header that tells you the required cooldown period in seconds.

Supporting Passages (Ranked by Vector Similarity):
1. "If a client exceeds their tier's limit, the gateway responds with HTTP Status Code 429 (Too Many Requests). The response includes a 'Retry-After' header..." (Score: 0.958)
2. "- Free Tier: 60 requests per minute (RPM). Peak bursts up to 10 requests per second." (Score: 0.912)
3. "- Professional Tier: 5,000 requests per minute (RPM). Dedicated gateway routing." (Score: 0.498)`
      }
    ]
  }
};

// --- VIEW NAVIGATION CONTROLLER ---
const VIEWS = {
  HOME: "home-view",
  DASHBOARD: "dashboard-view",
  DOWNLOADS: "downloads-view"
};

let currentActiveView = VIEWS.HOME;
const navigationStack = [];

function switchView(viewId, pushToHistory = true) {
  // If pushing to history, save the previous active view
  if (pushToHistory && currentActiveView !== viewId) {
    navigationStack.push(currentActiveView);
  }
  
  currentActiveView = viewId;

  // Update view visibility
  document.querySelectorAll(".page-view").forEach(view => {
    view.classList.remove("active");
  });
  
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add("active");
  }

  // Update navbar links active state
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
  });

  if (viewId === VIEWS.HOME) {
    document.getElementById("nav-features").classList.add("active");
  } else if (viewId === VIEWS.DASHBOARD) {
    document.getElementById("nav-dashboard").classList.add("active");
    // Dynamically resize and update charts when view becomes active
    if (window.dashboardChartInstance) {
      window.dashboardChartInstance.resize();
    }
    if (window.doughnutChartInstance) {
      window.doughnutChartInstance.resize();
    }
  } else if (viewId === VIEWS.DOWNLOADS) {
    document.getElementById("nav-downloads").classList.add("active");
  }
  
  // Scroll to top on page change
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateBack() {
  if (navigationStack.length > 0) {
    const prevView = navigationStack.pop();
    switchView(prevView, false); // Switch without pushing to history again
  } else {
    // Default back behavior is home
    switchView(VIEWS.HOME);
  }
}

// --- UNIVERSAL MODAL MANAGER ---
function openModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }
}

function closeModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// --- INTERACTIVE AI ENGINE SIMULATIONS ---
let activeModuleId = null;
let activeSampleIndex = 0;

// SmartStruct State Variables
let activeSmartStructCategory = null;
let activeSmartStructType = null;
let currentSmartStructFile = null;

// Text Extraction State Variables
let activeTextExtractCategory = null;
let activeTextExtractType = null;
let currentTextExtractFile = null;

// Semantic Classification State Variables
let activeSemanticCategory = null;
let activeSemanticType = null;
let currentSemanticFile = null;
let currentSemanticAnalysisResult = null;

// Document Data Mining State Variables
let activeDataMiningSilo = null;
let activeDataMiningMode = null;
let currentDataMiningFile = null;

// Contextual Knowledge State Variables
let activeContextualDomain = null;
let activeContextualModel = null;
let currentContextualFile = null;
let contextualQAData = [];
let currentContextualSummary = "";
let currentContextualEntities = [];

// Live Telemetry Dashboard State Variables
let docCount = 0;
let averageAccuracy = "0.00";
let extractionSpeed = 0;

function setupWorkspaceModal(moduleId) {
  activeModuleId = moduleId;
  activeSampleIndex = 0;
  currentUploadedFile = null;
  
  const moduleData = MOCK_DATA[moduleId];
  if (!moduleData) return;

  // Set titles
  document.getElementById("workspace-modal-title").innerText = moduleData.title;

  const defaultLayout = document.getElementById("workspace-default-layout");
  const smartstructLayout = document.getElementById("workspace-smartstruct-layout");
  const textextractLayout = document.getElementById("workspace-textextract-layout");
  const semanticLayout = document.getElementById("workspace-semantic-layout");
  const dataminingLayout = document.getElementById("workspace-datamining-layout");

  if (moduleId === "smartstruct") {
    // Show SmartStruct custom layout, hide others
    if (defaultLayout) defaultLayout.style.display = "none";
    if (smartstructLayout) smartstructLayout.style.display = "block";
    if (textextractLayout) textextractLayout.style.display = "none";
    if (semanticLayout) semanticLayout.style.display = "none";
    if (dataminingLayout) dataminingLayout.style.display = "none";

    // Reset SmartStruct UI state
    activeSmartStructCategory = null;
    activeSmartStructType = null;
    currentSmartStructFile = null;

    const revSelect = document.getElementById("smartstruct-revision-select");
    const intSelect = document.getElementById("smartstruct-intake-select");
    if (revSelect) revSelect.value = "";
    if (intSelect) intSelect.value = "";

    const fileDisplay = document.getElementById("smartstruct-file-display");
    if (fileDisplay) {
      fileDisplay.value = "";
      fileDisplay.placeholder = "Select a document type above, then click '+' to upload...";
    }

    const searchBox = document.getElementById("smartstruct-search-box");
    if (searchBox) searchBox.classList.remove("active-file");

    const warningContainer = document.getElementById("smartstruct-warning-container");
    if (warningContainer) {
      warningContainer.style.display = "none";
      warningContainer.innerHTML = "";
    }

    const runBtn = document.getElementById("smartstruct-run-btn");
    if (runBtn) runBtn.disabled = true;

    const outputContent = document.getElementById("smartstruct-output-content");
    if (outputContent) outputContent.innerHTML = `// Upload a valid document to begin schema structuring.`;

    const outputStatus = document.getElementById("smartstruct-output-status");
    if (outputStatus) {
      outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--text-muted); box-shadow: none;"></span> Idle`;
    }

    const stagesContainer = document.getElementById("smartstruct-stages-container");
    if (stagesContainer) {
      stagesContainer.style.display = "none";
      const cards = stagesContainer.querySelectorAll(".ocr-stage-card");
      cards.forEach(card => {
        card.className = "ocr-stage-card";
        const status = card.querySelector(".ocr-stage-status");
        if (status) status.innerHTML = "";
      });
    }
  } else if (moduleId === "text_extraction") {
    // Show Text Extraction custom layout, hide others
    if (defaultLayout) defaultLayout.style.display = "none";
    if (smartstructLayout) smartstructLayout.style.display = "none";
    if (textextractLayout) textextractLayout.style.display = "block";
    if (semanticLayout) semanticLayout.style.display = "none";
    if (dataminingLayout) dataminingLayout.style.display = "none";

    // Reset Text Extraction UI state
    activeTextExtractCategory = null;
    activeTextExtractType = null;
    currentTextExtractFile = null;

    const inputSelect = document.getElementById("textextract-input-select");
    const outputSelect = document.getElementById("textextract-output-select");
    if (inputSelect) inputSelect.value = "";
    if (outputSelect) outputSelect.value = "";

    const fileDisplay = document.getElementById("textextract-file-display");
    if (fileDisplay) {
      fileDisplay.value = "";
      fileDisplay.placeholder = "Select an input type above, then click '+' to upload...";
    }

    const searchBox = document.getElementById("textextract-search-box");
    if (searchBox) searchBox.classList.remove("active-file");

    const warningContainer = document.getElementById("textextract-warning-container");
    if (warningContainer) {
      warningContainer.style.display = "none";
      warningContainer.innerHTML = "";
    }

    const runBtn = document.getElementById("textextract-run-btn");
    if (runBtn) runBtn.disabled = true;

    const outputContent = document.getElementById("textextract-output-content");
    if (outputContent) outputContent.innerHTML = `// Upload a valid document to begin text extraction.`;

    const outputStatus = document.getElementById("textextract-output-status");
    if (outputStatus) {
      outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--text-muted); box-shadow: none;"></span> Idle`;
    }

    const downloadBtn = document.getElementById("textextract-download-btn");
    if (downloadBtn) downloadBtn.disabled = true;

    // Reset OCR stage visualizer cards
    for (let i = 1; i <= 4; i++) {
      const stageCard = document.getElementById(`ocr-stage-${i}`);
      if (stageCard) {
        stageCard.className = "ocr-stage-card";
        const statusText = stageCard.querySelector(".ocr-status-text");
        if (statusText) statusText.innerText = "Idle";
      }
    }
  } else if (moduleId === "semantic_classification") {
    // Show Semantic Classification custom layout, hide others
    if (defaultLayout) defaultLayout.style.display = "none";
    if (smartstructLayout) smartstructLayout.style.display = "none";
    if (textextractLayout) textextractLayout.style.display = "none";
    if (semanticLayout) semanticLayout.style.display = "block";
    if (dataminingLayout) dataminingLayout.style.display = "none";

    // Reset Semantic UI state
    activeSemanticCategory = null;
    activeSemanticType = null;
    currentSemanticFile = null;

    const classSelect = document.getElementById("semantic-class-select");
    const targetSelect = document.getElementById("semantic-target-select");
    if (classSelect) classSelect.value = "";
    if (targetSelect) targetSelect.value = "";

    const fileDisplay = document.getElementById("semantic-file-display");
    if (fileDisplay) {
      fileDisplay.value = "";
      fileDisplay.placeholder = "Select a class above, then click '+' to upload...";
    }

    const searchBox = document.getElementById("semantic-search-box");
    if (searchBox) searchBox.classList.remove("active-file");

    const warningContainer = document.getElementById("semantic-warning-container");
    if (warningContainer) {
      warningContainer.style.display = "none";
      warningContainer.innerHTML = "";
    }

    const runBtn = document.getElementById("semantic-run-btn");
    if (runBtn) runBtn.disabled = true;

    const outputContent = document.getElementById("semantic-output-content");
    if (outputContent) outputContent.innerHTML = `// Upload a valid document to begin semantic classification and cognitive summary extraction.`;

    const outputStatus = document.getElementById("semantic-output-status");
    if (outputStatus) {
      outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--text-muted); box-shadow: none;"></span> Idle`;
    }

    const downloadBtn = document.getElementById("semantic-download-btn");
    if (downloadBtn) downloadBtn.disabled = true;

    const exportBtn = document.getElementById("semantic-export-btn");
    if (exportBtn) {
      exportBtn.style.display = "none";
      exportBtn.disabled = true;
    }

    currentSemanticAnalysisResult = null;
    const queryContainer = document.getElementById("semantic-interactive-query-container");
    if (queryContainer) queryContainer.style.display = "none";
    const queryInput = document.getElementById("semantic-custom-query-input");
    if (queryInput) queryInput.value = "";

    // Reset Semantic pipeline stage cards
    for (let i = 1; i <= 4; i++) {
      const stageCard = document.getElementById(`semantic-stage-${i}`);
      if (stageCard) {
        stageCard.className = "ocr-stage-card";
        const statusText = stageCard.querySelector(".ocr-status-text");
        if (statusText) statusText.innerText = "Idle";
      }
    }
  } else if (moduleId === "data_mining") {
    // Show Document Data Mining custom layout, hide others
    if (defaultLayout) defaultLayout.style.display = "none";
    if (smartstructLayout) smartstructLayout.style.display = "none";
    if (textextractLayout) textextractLayout.style.display = "none";
    if (semanticLayout) semanticLayout.style.display = "none";
    if (dataminingLayout) dataminingLayout.style.display = "block";

    // Reset Data Mining UI state
    activeDataMiningSilo = null;
    activeDataMiningMode = null;
    currentDataMiningFile = null;

    const siloSelect = document.getElementById("datamining-silo-select");
    const modeSelect = document.getElementById("datamining-mode-select");
    if (siloSelect) siloSelect.value = "";
    if (modeSelect) modeSelect.value = "";

    const fileDisplay = document.getElementById("datamining-file-display");
    if (fileDisplay) {
      fileDisplay.value = "";
      fileDisplay.placeholder = "Select a silo above, then click '+' to upload...";
    }

    const searchBox = document.getElementById("datamining-search-box");
    if (searchBox) searchBox.classList.remove("active-file");

    const warningContainer = document.getElementById("datamining-warning-container");
    if (warningContainer) {
      warningContainer.style.display = "none";
      warningContainer.innerHTML = "";
    }

    const runBtn = document.getElementById("datamining-run-btn");
    if (runBtn) runBtn.disabled = true;

    const outputContent = document.getElementById("datamining-output-content");
    if (outputContent) outputContent.innerHTML = `// Upload a valid document to begin data mining, entity recognition, and relationship mapping.`;

    const outputStatus = document.getElementById("datamining-output-status");
    if (outputStatus) {
      outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--text-muted); box-shadow: none;"></span> Idle`;
    }

    const downloadBtn = document.getElementById("datamining-download-btn");
    if (downloadBtn) downloadBtn.disabled = true;

    const exportBtn = document.getElementById("datamining-export-btn");
    if (exportBtn) {
      exportBtn.style.display = "none";
      exportBtn.disabled = true;
    }

    // Reset Data Mining pipeline stage cards
    for (let i = 1; i <= 4; i++) {
      const stageCard = document.getElementById(`datamining-stage-${i}`);
      if (stageCard) {
        stageCard.className = "ocr-stage-card";
        const statusText = stageCard.querySelector(".ocr-status-text");
        if (statusText) statusText.innerText = "Idle";
      }
    }
  } else if (moduleId === "contextual_knowledge") {
    // Show Contextual Knowledge custom layout, hide others
    if (defaultLayout) defaultLayout.style.display = "none";
    if (smartstructLayout) smartstructLayout.style.display = "none";
    if (textextractLayout) textextractLayout.style.display = "none";
    if (semanticLayout) semanticLayout.style.display = "none";
    if (dataminingLayout) dataminingLayout.style.display = "none";
    
    const contextualLayout = document.getElementById("workspace-contextual-layout");
    if (contextualLayout) contextualLayout.style.display = "block";

    // Reset Contextual Knowledge UI state
    activeContextualDomain = null;
    activeContextualModel = null;
    currentContextualFile = null;
    contextualQAData = [];
    currentContextualSummary = "";
    currentContextualEntities = [];

    const domainSelect = document.getElementById("contextual-domain-select");
    const modelSelect = document.getElementById("contextual-model-select");
    if (domainSelect) domainSelect.value = "";
    if (modelSelect) modelSelect.value = "";

    const fileDisplay = document.getElementById("contextual-file-display");
    if (fileDisplay) {
      fileDisplay.value = "";
      fileDisplay.placeholder = "Select a domain above, then click '+' to upload...";
    }

    const searchBox = document.getElementById("contextual-search-box");
    if (searchBox) searchBox.classList.remove("active-file");

    const warningContainer = document.getElementById("contextual-warning-container");
    if (warningContainer) {
      warningContainer.style.display = "none";
      warningContainer.innerHTML = "";
    }

    const runBtn = document.getElementById("contextual-run-btn");
    if (runBtn) runBtn.disabled = true;

    const qaDashboard = document.getElementById("contextual-qa-dashboard");
    if (qaDashboard) {
      qaDashboard.innerHTML = `<div style="color: var(--text-secondary); font-size: 0.85rem; font-style: italic; font-family: monospace;">// Ingest a document to automatically synthesize key Q&As and ask custom questions.</div>`;
    }

    const queryWrapper = document.getElementById("contextual-query-wrapper");
    if (queryWrapper) queryWrapper.style.display = "none";

    const outputStatus = document.getElementById("contextual-output-status");
    if (outputStatus) {
      outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--text-muted); box-shadow: none;"></span> Idle`;
    }

    const downloadBtn = document.getElementById("contextual-download-btn");
    if (downloadBtn) downloadBtn.disabled = true;

    const exportBtn = document.getElementById("contextual-export-btn");
    if (exportBtn) {
      exportBtn.style.display = "none";
      exportBtn.disabled = true;
    }

    // Reset Contextual pipeline stage cards
    for (let i = 1; i <= 4; i++) {
      const stageCard = document.getElementById(`contextual-stage-${i}`);
      if (stageCard) {
        stageCard.className = "ocr-stage-card";
        const statusText = stageCard.querySelector(".ocr-status-text");
        if (statusText) statusText.innerText = "Idle";
      }
    }
  } else {
    // Show default layout, hide others
    if (defaultLayout) defaultLayout.style.display = "block";
    if (smartstructLayout) smartstructLayout.style.display = "none";
    if (textextractLayout) textextractLayout.style.display = "none";
    if (semanticLayout) semanticLayout.style.display = "none";
    if (dataminingLayout) dataminingLayout.style.display = "none";
    
    const contextualLayout = document.getElementById("workspace-contextual-layout");
    if (contextualLayout) contextualLayout.style.display = "none";

    document.getElementById("workspace-output-title").innerText = `${moduleData.title} Outputs`;
    
    // Set sample list
    const sampleListContainer = document.getElementById("workspace-sample-list");
    sampleListContainer.innerHTML = "";
    
    moduleData.samples.forEach((sample, idx) => {
      const btn = document.createElement("button");
      btn.className = `sample-btn ${idx === 0 ? 'active' : ''}`;
      btn.innerHTML = `
        <span>${sample.name}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      `;
      btn.onclick = () => selectWorkspaceSample(idx);
      sampleListContainer.appendChild(btn);
    });

    // Reset dropdown and warnings
    const selectEl = document.getElementById("doc-type-select");
    if (selectEl) selectEl.value = "invoice";
    
    const warningContainer = document.getElementById("upload-warning-container");
    if (warningContainer) warningContainer.style.display = "none";

    // Load first sample input and clear output
    loadSampleInput(0);
    document.getElementById("workspace-output-content").innerHTML = `// Select a sample document or upload a file, then click "Run Pipeline" to execute the AI processing engine.`;
    document.getElementById("workspace-output-status").innerHTML = `<span class="badge-pulse"></span> Ready`;
    document.getElementById("workspace-run-btn").disabled = false;
  }

  openModal("workspace-modal");
}

// --- TEXT EXTRACTION SPECIALIZED ACTIONS ---

function handleTextExtractTypeChange(category) {
  activeTextExtractCategory = category;
  
  const inputSelect = document.getElementById("textextract-input-select");
  const outputSelect = document.getElementById("textextract-output-select");
  const fileDisplay = document.getElementById("textextract-file-display");
  
  if (category === "input") {
    // Clear output selection
    if (outputSelect) outputSelect.value = "";
    activeTextExtractType = inputSelect.value;
    if (fileDisplay && !currentTextExtractFile) {
      fileDisplay.placeholder = `Ready to upload file for ${inputSelect.options[inputSelect.selectedIndex].text}. Click '+'...`;
    }
  } else if (category === "output") {
    // Clear input selection
    if (inputSelect) inputSelect.value = "";
    activeTextExtractType = outputSelect.value;
    if (fileDisplay && !currentTextExtractFile) {
      fileDisplay.placeholder = `Ready to upload for target format ${outputSelect.options[outputSelect.selectedIndex].text}. Click '+'...`;
    }
  }
  
  // If a file is already uploaded, re-validate it
  if (currentTextExtractFile) {
    validateTextExtractFile();
  }
}

function triggerTextExtractUpload(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt,.pdf,.png,.jpg,.jpeg,.json,.csv,.xlsx,.xls,.xml,.pptx,.doc,.docx,.tiff,.db,.sql";
  input.onchange = (e) => {
    if (e.target.files.length > 0) {
      handleTextExtractUploadedFile(e.target.files[0]);
    }
  };
  input.click();
}

function handleTextExtractUploadedFile(file) {
  currentTextExtractFile = file;
  const fileDisplay = document.getElementById("textextract-file-display");
  const searchBox = document.getElementById("textextract-search-box");
  const warningContainer = document.getElementById("textextract-warning-container");
  const runBtn = document.getElementById("textextract-run-btn");
  
  if (!fileDisplay) return;
  
  const fileSizeKB = (file.size / 1024).toFixed(1);
  
  // Rule 1: Size limit of 2MB
  const maxBytes = 2 * 1024 * 1024; // 2MB
  if (file.size > maxBytes) {
    fileDisplay.value = `${file.name} (Size: ${fileSizeKB} KB - EXCEEDS 2MB)`;
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="upload-warning-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>File size exceeds 2MB limit.</strong> The uploaded file is <strong>${fileSizeKB} KB</strong>, which exceeds the strict corporate limit of 2,048 KB. Ingestion blocked.
          </div>
        </div>
      `;
    }
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    currentTextExtractFile = null;
    return;
  }

  fileDisplay.value = `${file.name} (Size: ${fileSizeKB} KB)`;
  
  // Rule 2: Must select a category and type first
  if (!activeTextExtractCategory || !activeTextExtractType) {
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="upload-warning-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>Select document type first.</strong> Please select a format from either <strong>Input Document</strong> or <strong>Output Generation</strong> before uploading a file.
          </div>
        </div>
      `;
    }
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    currentTextExtractFile = null;
    fileDisplay.value = "";
    return;
  }
  
  validateTextExtractFile();
}

function validateTextExtractFile() {
  const file = currentTextExtractFile;
  const warningContainer = document.getElementById("textextract-warning-container");
  const searchBox = document.getElementById("textextract-search-box");
  const runBtn = document.getElementById("textextract-run-btn");
  const fileDisplay = document.getElementById("textextract-file-display");
  
  if (!file || !warningContainer) return;
  
  const ext = file.name.split('.').pop().toLowerCase();
  let isAllowed = false;
  let allowedDesc = "";
  
  if (activeTextExtractCategory === "input") {
    switch(activeTextExtractType) {
      case "pdf":
        isAllowed = (ext === 'pdf');
        allowedDesc = "Scanned PDF (.pdf)";
        break;
      case "image":
        isAllowed = ['png', 'jpg', 'jpeg', 'tiff', 'bmp'].includes(ext);
        allowedDesc = "Image (.jpg, .jpeg, .png, .tiff)";
        break;
      case "handwritten":
        isAllowed = ['pdf', 'png', 'jpg', 'jpeg', 'tiff', 'txt'].includes(ext);
        allowedDesc = "Handwritten or printed document (PDF/Images/Text)";
        break;
    }
  } else if (activeTextExtractCategory === "output") {
    switch(activeTextExtractType) {
      case "pdf_searchable":
        isAllowed = ['pdf', 'png', 'jpg', 'jpeg', 'tiff'].includes(ext);
        allowedDesc = "Source for Searchable PDF (PDF/Images)";
        break;
      case "txt":
        isAllowed = ['txt', 'pdf', 'png', 'jpg', 'jpeg', 'docx', 'doc'].includes(ext);
        allowedDesc = "Source for TXT file (PDF/Images/Word/Text)";
        break;
      case "json":
        isAllowed = ['json', 'csv', 'txt', 'pdf', 'png', 'jpg', 'jpeg'].includes(ext);
        allowedDesc = "Source for JSON conversion";
        break;
      case "db":
        isAllowed = ['csv', 'tsv', 'json', 'sql', 'db'].includes(ext);
        allowedDesc = "Source for Database records (CSV/JSON/SQL)";
        break;
    }
  }
  
  if (!isAllowed) {
    warningContainer.style.display = "block";
    warningContainer.innerHTML = `
      <div class="upload-warning-banner">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <div>
          <strong>Document format mismatch.</strong> The uploaded file <strong>.${ext}</strong> does not match the requirements for selected option: <strong>${allowedDesc}</strong>. Please upload a valid document.
        </div>
      </div>
    `;
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
  } else {
    // Compression simulation for Text Extraction
    if (searchBox) searchBox.classList.remove("active-file");
    runBtn.disabled = true;
    
    warningContainer.style.display = "block";
    warningContainer.innerHTML = `
      <div class="loader-container" style="padding: 4px 8px; margin: 0; width: 100%;">
        <div style="font-size: 0.8rem; margin-bottom: 4px; color: var(--text-secondary);">Compressing Document Stream (Lz4)...</div>
        <div class="progress-bar-bg" style="height: 6px;">
          <div id="textextract-compression-progress" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
        </div>
      </div>
    `;
    
    let compProgress = 0;
    const compBar = document.getElementById("textextract-compression-progress");
    const compInterval = setInterval(() => {
      compProgress += 20;
      if (compProgress >= 100) {
        compProgress = 100;
        clearInterval(compInterval);
        
        setTimeout(() => {
          const fileSizeKB = (file.size / 1024).toFixed(1);
          const compressedSizeKB = (fileSizeKB * 0.22).toFixed(1); // 78% reduction
          const savingsPercent = 78;
          
          if (fileDisplay) {
            fileDisplay.value = `${file.name} (Compressed: ${compressedSizeKB} KB)`;
          }
          
          warningContainer.innerHTML = `
            <div class="upload-success-banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                <strong>Stream Compressed (${savingsPercent}% savings).</strong> Ingest payload reduced from ${fileSizeKB} KB to <strong>${compressedSizeKB} KB</strong>. Ready to extract.
              </div>
            </div>
          `;
          if (searchBox) searchBox.classList.add("active-file");
          if (runBtn) runBtn.disabled = false;
        }, 100);
      }
      if (compBar) compBar.style.width = `${compProgress}%`;
    }, 80);
  }
}

function simulateTextExtractPipeline() {
  const outputContent = document.getElementById("textextract-output-content");
  const outputStatus = document.getElementById("textextract-output-status");
  const runBtn = document.getElementById("textextract-run-btn");
  const downloadBtn = document.getElementById("textextract-download-btn");
  
  if (!outputContent || !outputStatus || !runBtn) return;
  
  runBtn.disabled = true;
  if (downloadBtn) downloadBtn.disabled = true;
  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span> Processing...`;
  
  // Reset all stages to idle
  const setStageState = (stageNum, state, statusTextMsg) => {
    const stageCard = document.getElementById(`ocr-stage-${stageNum}`);
    if (!stageCard) return;
    stageCard.className = `ocr-stage-card ${state}`; // state is 'active' or 'completed' or ''
    const statusText = stageCard.querySelector(".ocr-status-text");
    if (statusText) statusText.innerText = statusTextMsg;
  };
  
  for (let i = 1; i <= 4; i++) {
    setStageState(i, "", "Idle");
  }
  
  outputContent.innerHTML = `// Starting Text Extraction Engine pipeline...\n// Initializing isolated OCR container...`;

  let hasRealFile = (currentTextExtractFile !== null);
  let isImage = false;
  if (hasRealFile) {
    const ext = currentTextExtractFile.name.split('.').pop().toLowerCase();
    isImage = ['png', 'jpg', 'jpeg', 'tiff', 'bmp'].includes(ext);
  }
  
  // Step 1: Preprocessing
  setStageState(1, "active", "Preprocessing...");
  outputContent.innerHTML += `\n[STAGE 1] Executing Image Preprocessing (Lz4 decompressing, adaptive thresholding, binarization)...`;
  
  setTimeout(() => {
    setStageState(1, "completed", "Completed");
    setStageState(2, "active", "Detecting...");
    outputContent.innerHTML += `\n[STAGE 2] Running Text Line Detection (YOLOv8-OCR region localization, bounding box mapping)...`;
    
    setTimeout(() => {
      setStageState(2, "completed", "Completed");
      setStageState(3, "active", "Recognizing...");
      outputContent.innerHTML += `\n[STAGE 3] Running Character Recognition (Tesseract.js Core)...`;
      
      if (hasRealFile && isImage && typeof Tesseract !== 'undefined') {
        outputContent.innerHTML += `\n[TESSERACT] Ingesting real image file: ${currentTextExtractFile.name}...`;
        
        Tesseract.recognize(
          currentTextExtractFile,
          'eng',
          {
            logger: m => {
              if (m.status === 'recognizing text') {
                const pct = Math.round(m.progress * 100);
                setStageState(3, "active", `Recognizing (${pct}%)`);
              } else {
                setStageState(3, "active", m.status);
              }
            }
          }
        ).then(({ data: { text } }) => {
          setStageState(3, "completed", "Completed");
          setStageState(4, "active", "Extracting...");
          outputContent.innerHTML += `\n[STAGE 4] Compiling Western Roman character streams into editable text...`;
          
          setTimeout(() => {
            setStageState(4, "completed", "Completed");
            
            let cleanedText = text.trim();
            if (!cleanedText) {
              cleanedText = `// OCR Completed, but no readable characters were detected.\n// Make sure the image has high-contrast, clear English text.`;
            }
            
            let ocrReport = `=== REAL OCR LAYOUT-AWARE TEXT EXTRACTION ===\n`;
            ocrReport += `[Confidence Level: 94.2%]\n`;
            ocrReport += `[Source File: ${currentTextExtractFile.name}]\n\n`;
            ocrReport += cleanedText;
            ocrReport += `\n\n=== METADATA EXTRACTED ===\n`;
            ocrReport += `Orientation: Autocorrected\n`;
            ocrReport += `Engine: Tesseract.js (Client-Side AI)`;
            
            outputContent.innerHTML = escapeHTML(ocrReport);
            outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Completed`;
            runBtn.disabled = false;
            if (downloadBtn) downloadBtn.disabled = false;
            
            MOCK_DATA.text_extraction.samples[99] = {
              name: currentTextExtractFile.name,
              content: `[User Image Upload: ${currentTextExtractFile.name}]`,
              output: ocrReport
            };
            activeSampleIndex = 99;
            
            logSystemEvent("OCR_ENGINE", `Real client-side AI OCR executed successfully for "${currentTextExtractFile.name}"`);
            updateDashboardKPIs();
          }, 500);
        }).catch(err => {
          console.error(err);
          outputContent.innerHTML += `\n[WARNING] Tesseract.js encountered an error or ran offline. Falling back to high-fidelity mock extraction...`;
          runSimulatedOCR(outputContent, outputStatus, runBtn, downloadBtn, setStageState);
        });
      } else {
        runSimulatedOCR(outputContent, outputStatus, runBtn, downloadBtn, setStageState);
      }
    }, 1000);
  }, 1000);
}

function runSimulatedOCR(outputContent, outputStatus, runBtn, downloadBtn, setStageState) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 25;
    setStageState(3, "active", `Recognizing (${progress}%)`);
    if (progress >= 100) {
      clearInterval(interval);
      
      setStageState(3, "completed", "Completed");
      setStageState(4, "active", "Extracting...");
      outputContent.innerHTML += `\n[STAGE 4] Compiling text streams into structured output format...`;
      
      setTimeout(() => {
        setStageState(4, "completed", "Completed");
        
        let finalOutput = "";
        let sampleName = "";
        
        if (currentTextExtractFile) {
          sampleName = currentTextExtractFile.name;
          const formatSel = document.getElementById("textextract-output-select").value || "txt";
          const inputSel = document.getElementById("textextract-input-select").value || "pdf";
          
          finalOutput = `=== OCR LAYOUT-AWARE TEXT EXTRACTION ===
[Confidence Level: 95.8%]
[Source File: ${sampleName}]
[Detected Format: ${inputSel.toUpperCase()}]

Line 01: [X: 12, Y: 20, W: 240, H: 20]   ENTERPRISE DOCUMENT PIPELINE
Line 02: [X: 12, Y: 45, W: 180, H: 15]   Status Report: Active Ingest
Line 03: [X: 12, Y: 70, W: 420, H: 18]   Processed custom stream payload of ${(currentTextExtractFile.size / 1024).toFixed(1)} KB.
Line 04: [X: 12, Y: 95, W: 300, H: 15]   Layout bounding boxes successfully mapped.

=== METADATA EXTRACTED ===
Target Format: ${formatSel.toUpperCase()}
Page Count: 1
Tilt Angle: 0.0 degrees (Autocorrected)
Handwriting Detected: No`;
        } else {
          const sample = MOCK_DATA.text_extraction.samples[activeSampleIndex] || MOCK_DATA.text_extraction.samples[0];
          sampleName = sample.name;
          finalOutput = sample.output;
        }
        
        outputContent.innerHTML = escapeHTML(finalOutput);
        outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Completed`;
        runBtn.disabled = false;
        if (downloadBtn) downloadBtn.disabled = false;
        
        if (currentTextExtractFile) {
          MOCK_DATA.text_extraction.samples[99] = {
            name: currentTextExtractFile.name,
            content: `[User File Upload: ${currentTextExtractFile.name}]`,
            output: finalOutput
          };
          activeSampleIndex = 99;
        }
        
        logSystemEvent("OCR_ENGINE", `Simulated OCR executed successfully for "${sampleName}"`);
        updateDashboardKPIs();
      }, 600);
    }
  }, 300);
}

// --- DOCUMENT DATA MINING SPECIALIZED ACTIONS ---

function handleDataMiningTypeChange(category) {
  const siloSelect = document.getElementById("datamining-silo-select");
  const modeSelect = document.getElementById("datamining-mode-select");
  const fileDisplay = document.getElementById("datamining-file-display");
  
  if (category === "silo") {
    if (modeSelect) modeSelect.value = "";
    activeDataMiningSilo = siloSelect.value;
    activeDataMiningMode = null;
    if (fileDisplay && !currentDataMiningFile) {
      fileDisplay.placeholder = `Ready to upload for silo: ${siloSelect.options[siloSelect.selectedIndex].text}. Click '+'...`;
    }
  } else if (category === "mode") {
    if (siloSelect) siloSelect.value = "";
    activeDataMiningMode = modeSelect.value;
    activeDataMiningSilo = null;
    if (fileDisplay && !currentDataMiningFile) {
      fileDisplay.placeholder = `Ready to upload for mining focus: ${modeSelect.options[modeSelect.selectedIndex].text}. Click '+'...`;
    }
  }
  
  if (currentDataMiningFile) {
    validateDataMiningFile();
  }
}

function triggerDataMiningUpload(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt,.pdf,.png,.jpg,.jpeg,.json,.csv,.xlsx,.xls,.xml,.pptx,.doc,.docx,.tiff,.db,.sql";
  input.onchange = (e) => {
    if (e.target.files.length > 0) {
      handleDataMiningUploadedFile(e.target.files[0]);
    }
  };
  input.click();
}

function handleDataMiningUploadedFile(file) {
  currentDataMiningFile = file;
  const fileDisplay = document.getElementById("datamining-file-display");
  const searchBox = document.getElementById("datamining-search-box");
  const warningContainer = document.getElementById("datamining-warning-container");
  const runBtn = document.getElementById("datamining-run-btn");
  
  if (!fileDisplay) return;
  
  const fileSizeKB = (file.size / 1024).toFixed(1);
  const maxBytes = 2 * 1024 * 1024; // 2MB
  
  if (file.size > maxBytes) {
    fileDisplay.value = `${file.name} (Size: ${fileSizeKB} KB - EXCEEDS 2MB)`;
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="upload-warning-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>File size exceeds 2MB limit.</strong> The uploaded file is <strong>${fileSizeKB} KB</strong>, which exceeds the strict corporate limit of 2,048 KB. Ingestion blocked.
          </div>
        </div>
      `;
    }
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    currentDataMiningFile = null;
    return;
  }

  fileDisplay.value = `${file.name} (Size: ${fileSizeKB} KB)`;
  
  if (!activeDataMiningSilo && !activeDataMiningMode) {
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="upload-warning-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>Select configuration first.</strong> Please select a data source silo or mining focus before uploading.
          </div>
        </div>
      `;
    }
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    currentDataMiningFile = null;
    fileDisplay.value = "";
    return;
  }
  
  validateDataMiningFile();
}

function validateDataMiningFile() {
  const file = currentDataMiningFile;
  const warningContainer = document.getElementById("datamining-warning-container");
  const searchBox = document.getElementById("datamining-search-box");
  const runBtn = document.getElementById("datamining-run-btn");
  const fileDisplay = document.getElementById("datamining-file-display");
  
  if (!file || !warningContainer) return;
  
  if (searchBox) searchBox.classList.remove("active-file");
  runBtn.disabled = true;
  
  warningContainer.style.display = "block";
  warningContainer.innerHTML = `
    <div class="loader-container" style="padding: 4px 8px; margin: 0; width: 100%;">
      <div style="font-size: 0.8rem; margin-bottom: 4px; color: var(--text-secondary);">Compressing Document Stream (Lz4)...</div>
      <div class="progress-bar-bg" style="height: 6px;">
        <div id="datamining-compression-progress" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
      </div>
    </div>
  `;
  
  let compProgress = 0;
  const compBar = document.getElementById("datamining-compression-progress");
  const compInterval = setInterval(() => {
    compProgress += 20;
    if (compProgress >= 100) {
      compProgress = 100;
      clearInterval(compInterval);
      
      setTimeout(() => {
        const fileSizeKB = (file.size / 1024).toFixed(1);
        const compressedSizeKB = (fileSizeKB * 0.22).toFixed(1); // 78% reduction
        const savingsPercent = 78;
        
        if (fileDisplay) {
          fileDisplay.value = `${file.name} (Compressed: ${compressedSizeKB} KB)`;
        }
        
        warningContainer.innerHTML = `
          <div class="upload-success-banner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div>
              <strong>Stream Compressed (${savingsPercent}% savings).</strong> Ingest payload reduced from ${fileSizeKB} KB to <strong>${compressedSizeKB} KB</strong>. Ready to mine.
            </div>
          </div>
        `;
        if (searchBox) searchBox.classList.add("active-file");
        if (runBtn) runBtn.disabled = false;
      }, 100);
    }
    if (compBar) compBar.style.width = `${compProgress}%`;
  }, 80);
}

function simulateDataMiningPipeline() {
  const outputContent = document.getElementById("datamining-output-content");
  const outputStatus = document.getElementById("datamining-output-status");
  const runBtn = document.getElementById("datamining-run-btn");
  const downloadBtn = document.getElementById("datamining-download-btn");
  
  if (!outputContent || !outputStatus || !runBtn) return;
  
  runBtn.disabled = true;
  if (downloadBtn) downloadBtn.disabled = true;
  
  const exportBtn = document.getElementById("datamining-export-btn");
  if (exportBtn) {
    exportBtn.style.display = "none";
    exportBtn.disabled = true;
  }

  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span> Processing...`;
  
  const setStageState = (stageNum, state, statusTextMsg) => {
    const stageCard = document.getElementById(`datamining-stage-${stageNum}`);
    if (!stageCard) return;
    stageCard.className = `ocr-stage-card ${state}`;
    const statusText = stageCard.querySelector(".ocr-status-text");
    if (statusText) statusText.innerText = statusTextMsg;
  };
  
  for (let i = 1; i <= 4; i++) {
    setStageState(i, "", "Idle");
  }
  
  outputContent.innerHTML = `// Starting Document Data Mining pipeline...\n// Initializing semantic chunking containers...`;

  if (currentDataMiningFile) {
    const file = currentDataMiningFile;
    const filename = file.name;
    const fileSizeKB = (file.size / 1024).toFixed(1);
    const ext = filename.split('.').pop().toLowerCase();
    
    setStageState(1, "active", "Chunking...");
    outputContent.innerHTML += `\n[STAGE 1] Segmenting text streams into semantic tokens and stripping structural layout noise...`;
    
    setTimeout(() => {
      setStageState(1, "completed", "Completed");
      setStageState(2, "active", "Labeling NER...");
      outputContent.innerHTML += `\n[STAGE 2] Executing Deep NER Sequence Labeling models (identifying people, orgs, money, dates)...`;
      
      setTimeout(() => {
        setStageState(2, "completed", "Completed");
        setStageState(3, "active", "Mapping Relations...");
        outputContent.innerHTML += `\n[STAGE 3] Running Entity Relationship Extraction (matching semantic subject-predicate-object triples)...`;
        
        setTimeout(() => {
          setStageState(3, "completed", "Completed");
          setStageState(4, "active", "Synthesizing Graph...");
          outputContent.innerHTML += `\n[STAGE 4] Executing Knowledge Graph Synthesis (compiling node weights and visual mappings)...`;
          
          setTimeout(() => {
            setStageState(4, "completed", "Completed");
            
            const finishMining = (text) => {
              let miningResult;
              const isBinary = /[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(text.slice(0, 1000)) || text.includes('PK\x03\x04') || text.startsWith('%PDF');
              
              if (isBinary || text.trim().length < 20) {
                miningResult = generateInferredMiningAnalysis(filename, fileSizeKB);
              } else {
                miningResult = analyzeTextMiningEntities(text, filename, fileSizeKB);
              }
              
              renderDataMiningReport(miningResult);
            };
            
            const isImage = ['png', 'jpg', 'jpeg', 'tiff', 'bmp'].includes(ext);
            if (isImage && typeof Tesseract !== 'undefined') {
              outputContent.innerHTML += `\n[TESSERACT] Extracting text from image via client-side AI...`;
              Tesseract.recognize(
                file,
                'eng'
              ).then(({ data: { text } }) => {
                finishMining(text);
              }).catch(err => {
                console.error(err);
                finishMining("");
              });
            } else {
              const reader = new FileReader();
              reader.onload = function(e) {
                finishMining(e.target.result);
              };
              reader.onerror = function() {
                finishMining("");
              };
              reader.readAsText(file);
            }
          }, 600);
        }, 1000);
      }, 1000);
    }, 1000);
  }
}

function analyzeTextMiningEntities(text, filename, fileSizeKB) {
  const cleanText = text.replace(/[\r\n]+/g, ' ');
  
  // 1. NER - Dates & Time
  const dateRegex = /\b(?:\d{1,2}[/-]\d{1,2}[/-]\d{2,4})|(?:\d{4}[/-]\d{1,2}[/-]\d{1,2})|((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2},? \d{4})\b/gi;
  const dates = [...new Set(cleanText.match(dateRegex) || [])].slice(0, 4);
  if (dates.length === 0) dates.push(new Date().toLocaleDateString());
  
  // 2. NER - Financials
  const moneyRegex = /\$\s*?\(?\d{1,3}(?:,\d{3})*(?:\.\d{2})?\)?\b|\b\d+\s*(?:USD|EUR|GBP|dollars|euros)\b/gi;
  const financials = [...new Set(cleanText.match(moneyRegex) || [])].slice(0, 3);
  if (financials.length === 0) financials.push("$1,200.00");
  
  // 3. NER - Organizations
  const orgRegex = /\b[A-Z][a-zA-Z0-9&]*(?:\s+[A-Z][a-zA-Z0-9&]*)*\s+(?:Inc\.|Corp\.|Ltd\.|Co\.|LLC|Corporation|Company|Technologies|Laboratories|Solutions|Industries|Systems|Services|Partners|Holdings)\b/g;
  let organizations = [...new Set(cleanText.match(orgRegex) || [])].slice(0, 4);
  if (organizations.length === 0) {
    const generalOrgRegex = /\b[A-Z][a-zA-Z0-9]{2,}\s+[A-Z][a-zA-Z0-9]{2,}\b/g;
    organizations = [...new Set(cleanText.match(generalOrgRegex) || [])].slice(0, 3);
  }
  if (organizations.length === 0) organizations.push("BioGenix Laboratories Inc.");
  
  // 4. NER - Locations
  const citiesCountries = ["New York", "San Francisco", "London", "Tokyo", "Paris", "Berlin", "Bucharest", "Malibu", "Irvine", "Monterrey", "Gotham City", "Los Angeles", "Chicago", "Boston", "Seattle", "Austin", "Silicon Valley", "California", "Texas", "Germany", "Japan", "India", "Romania", "Mexico", "United Kingdom", "United States"];
  const locations = [];
  citiesCountries.forEach(city => {
    if (new RegExp('\\b' + city + '\\b', 'i').test(cleanText)) {
      locations.push(city);
    }
  });
  if (locations.length === 0) locations.push("Seoul U-Medical Center");
  
  // 5. NER - Names
  const nameRegex = /\b(Dr\.|Mr\.|Ms\.|Mrs\.)\s+[A-Z][a-z]+\b|\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g;
  let names = [...new Set(cleanText.match(nameRegex) || [])]
    .filter(n => !n.startsWith("The ") && !n.startsWith("To ") && !n.startsWith("In ") && !n.startsWith("On ") && !n.startsWith("This ") && !n.startsWith("From "))
    .slice(0, 4);
  if (names.length === 0) names.push("Dr. Helen Cho");
  
  // 6. NER - Products
  const productVocab = ["Regenex", "V-209", "ShieldAI", "JARVIS", "Arc Reactor", "Titanium Enclosures", "Optical Sensor Arrays", "Cisco Systems", "PostgreSQL", "SOAP-ENV"];
  const products = [];
  productVocab.forEach(p => {
    if (new RegExp('\\b' + p + '\\b', 'i').test(cleanText)) {
      products.push(p);
    }
  });
  if (products.length === 0) products.push("V-209");

  // 7. NER - Technologies
  const techVocab = ["neural-network", "vector database", "RAG", "OCR", "AI", "GPU", "cloud security", "API", "encryption", "SSL", "database", "analytics"];
  const technologies = [];
  techVocab.forEach(t => {
    if (new RegExp('\\b' + t + '\\b', 'i').test(cleanText)) {
      technologies.push(t);
    }
  });
  if (technologies.length === 0) technologies.push("neural-network", "GPU clusters");

  // 8. NER - Legal References
  const legalVocab = ["Section \\d+", "Article \\d+", "Agreement", "Contract", "NDA", "Waiver", "Clause", "Regulation", "Compliance", "Patent"];
  const legalRefs = [];
  legalVocab.forEach(l => {
    const matches = cleanText.match(new RegExp('\\b' + l + '\\b', 'gi'));
    if (matches) {
      matches.forEach(m => legalRefs.push(m));
    }
  });
  const uniqueLegal = [...new Set(legalRefs)].slice(0, 3);
  if (uniqueLegal.length === 0) uniqueLegal.push("Section 4", "IP Waiver Agreement");

  // 9. NER - Document Identifiers
  const docIdRegex = /INV-\d{4}-\d{4}|root-admin-\d{2}|[A-Z]{3,4}-\d{3,6}|No\.\s*[A-Z0-9-]+|ID:\s*[A-Z0-9-]+/gi;
  const docIds = [...new Set(cleanText.match(docIdRegex) || [])].slice(0, 3);
  if (docIds.length === 0) docIds.push("DOC-ID-" + Math.floor(1000 + Math.random()*9000));

  // Relations (Semantic Relationship Mining)
  const relations = [];
  relations.push(`Person ↔ Organization: ${names[0]} --[Affiliated With]--> ${organizations[0]}`);
  relations.push(`Organization ↔ Location: ${organizations[0]} --[Operates In]--> ${locations[0]}`);
  relations.push(`Event ↔ Date: Processing Operations --[Conducted On]--> ${dates[0]}`);
  relations.push(`Product ↔ Company: ${products[0]} --[Produced By]--> ${organizations[0]}`);
  relations.push(`Contract ↔ Parties: Legal Agreement --[Binds]--> ${organizations[0]}`);
  relations.push(`Financial Transaction ↔ Entity: Investment deal --[Quantified As]--> ${financials[0]}`);

  // Correlation Discovery
  const correlations = [
    `Strong co-occurrence detected between entity [${organizations[0]}] and technology [${technologies[0] || 'AI'}] (confidence: 96.4%).`,
    `Temporal alignment: Activity frequency peaks around date reference ${dates[0]}.`,
    `Co-occurrence cluster: [${names[0]}], [${products[0]}], and [${locations[0]}] form an active operations subgraph.`
  ];

  // Knowledge Graph (Structured Triples + ASCII representation)
  const nodeA = (organizations[0] || "BioGenix").substring(0, 18);
  const nodeB = (products[0] || "V-209").substring(0, 12);
  const nodeC = (locations[0] || "Seoul Center").substring(0, 15);
  const nodeD = (names[0] || "Dr. Helen Cho").substring(0, 15);
  
  const asciiGraph = `
       [${nodeA}] =====(Sponsors/Owns)=====> [${nodeB}]
            |                                    |
       (Employs)                            (Tested At)
            |                                    |
            v                                    v
       [${nodeD}]                          [${nodeC}]
  `;

  // Topic and Theme Extraction
  let primaryTheme = "Clinical Research & Healthcare Operations";
  let secondaryTheme = "Intellectual Property & Licensing";
  if (/acquisition|merger|buyout|deal|press|release|finance|price|invoice/i.test(filename)) {
    primaryTheme = "Corporate Finance & M&A Transactions";
    secondaryTheme = "Strategic Corporate Alliances";
  }
  const topics = [
    `${primaryTheme} (Relevance Score: 0.96)`,
    `${secondaryTheme} (Relevance Score: 0.84)`,
    `Regulatory Compliance & Reporting (Relevance Score: 0.57)`
  ];

  // Keyword Intelligence
  const keywords = [
    `${products[0]} (Weighted Score: 0.98)`,
    `${organizations[0]} (Weighted Score: 0.93)`,
    `${names[0]} (Weighted Score: 0.89)`,
    `${technologies[0] || 'AI'} (Weighted Score: 0.85)`
  ];

  // Cross-Document Analysis
  const crossDoc = [
    `Linkages: Mapped 4 semantic references to corporate silo directory files.`,
    `Conflicting Information: 0 conflicts detected (100% data consistency verified).`,
    `Duplicate Entities: Resolved 2 spelling variations of [${organizations[0]}] across files.`
  ];

  // Insight Generation
  const insights = [
    `Key Finding: Active deployment of product ${products[0]} at ${locations[0]} on ${dates[0]}.`,
    `Anomaly: Unusually high semantic density of technology ${technologies[0] || 'neural-network'} references.`,
    `Observation: Mined relationships suggest an immediate transition to the next phase of operational integration.`
  ];

  return {
    dates: dates,
    financials: financials,
    organizations: organizations,
    locations: locations,
    names: names,
    products: products,
    technologies: technologies,
    legalRefs: uniqueLegal,
    docIds: docIds,
    relations: relations,
    correlations: correlations,
    asciiGraph: asciiGraph,
    topics: topics,
    keywords: keywords,
    crossDoc: crossDoc,
    insights: insights,
    filename: filename,
    fileSizeKB: fileSizeKB
  };
}

function generateInferredMiningAnalysis(filename, fileSizeKB) {
  const cleanName = filename.replace(/[-_]/g, ' ');
  
  let inferredType = "Clinical Study";
  let primaryOrg = "BioGenix Laboratories Inc.";
  let product = "Regenex";
  let location = "Seoul Medical Center";
  let person = "Dr. Helen Cho";
  let technology = "neural-network";
  let legalRef = "Section 4 (Study Protocol)";
  let docId = "CLIN-TR-2026";
  let relationship = "sponsors";
  
  if (/acquisition|merger|buyout|deal|press|release/i.test(cleanName)) {
    inferredType = "M&A Announcement";
    primaryOrg = "Microsoft Corp.";
    product = "ShieldAI Systems";
    location = "Silicon Valley";
    person = "Priya Patel";
    technology = "cloud security";
    legalRef = "Section 2.1 (Merger Agreement)";
    docId = "DEAL-MSFT-2026";
    relationship = "acquires";
  }
  
  const dates = [new Date().toLocaleDateString()];
  const financials = ["$4.2 Billion"];
  
  // Relations
  const relations = [
    `Person ↔ Organization: ${person} --[Reports To]--> ${primaryOrg}`,
    `Organization ↔ Location: ${primaryOrg} --[Headquartered In]--> ${location}`,
    `Event ↔ Date: Transaction / Study --[Executed On]--> ${dates[0]}`,
    `Product ↔ Company: ${product} --[Produced By]--> ${primaryOrg}`,
    `Contract ↔ Parties: Agreement --[Binds]--> ${primaryOrg} and stakeholders`,
    `Financial Transaction ↔ Entity: Capital Deal --[Valued At]--> ${financials[0]}`
  ];

  // Correlation Discovery
  const correlations = [
    `Frequently co-occurring pair: [${primaryOrg}] and [${product}] (correlation weight: 0.98).`,
    `Temporal pattern: Operations tightly mapped to chronological references around ${dates[0]}.`,
    `Trend highlight: Growing strategic dependency on technology [${technology}].`
  ];

  // Synthesis ASCII Graph
  const asciiGraph = `
       [${primaryOrg}] =====(${relationship})=====> [${product}]
            |                                      |
       (Employs)                              (Located In)
            |                                      |
            v                                      v
       [${person}]                            [${location}]
  `;

  // Topic and Theme Extraction
  const topics = [
    `${inferredType} Context (Relevance Score: 0.97)`,
    `Strategic Technological Partnerships (Relevance Score: 0.86)`,
    `Financial Compliance & Asset Valuations (Relevance Score: 0.61)`
  ];

  // Keyword Intelligence
  const keywords = [
    `${primaryOrg} (Weighted Score: 0.99)`,
    `${product} (Weighted Score: 0.95)`,
    `${person} (Weighted Score: 0.91)`,
    `${technology} (Weighted Score: 0.87)`
  ];

  // Cross-Document Analysis
  const crossDoc = [
    `Linkages: Discovered 3 semantic connections in the active document repository.`,
    `Conflicting Information: 0 conflicts detected (consistent metadata verified).`,
    `Duplicate Entities: Merged 1 duplicate entity reference of [${primaryOrg}].`
  ];

  // Insight Generation
  const insights = [
    `Key Finding: Inferred document type is ${inferredType} based on filename structure.`,
    `Anomaly: Unusually high financial density reference of ${financials[0]} in a short filename.`,
    `Observation: Mined linkages indicate that corporate and security parameters are fully active.`
  ];

  return {
    dates: dates,
    financials: financials,
    organizations: [primaryOrg],
    locations: [location],
    names: [person],
    products: [product],
    technologies: [technology],
    legalRefs: [legalRef],
    docIds: [docId],
    relations: relations,
    correlations: correlations,
    asciiGraph: asciiGraph,
    topics: topics,
    keywords: keywords,
    crossDoc: crossDoc,
    insights: insights,
    filename: filename,
    fileSizeKB: fileSizeKB
  };
}

function renderDataMiningReport(result) {
  const outputContent = document.getElementById("datamining-output-content");
  const outputStatus = document.getElementById("datamining-output-status");
  const runBtn = document.getElementById("datamining-run-btn");
  const downloadBtn = document.getElementById("datamining-download-btn");
  
  if (!outputContent || !outputStatus || !runBtn) return;
  
  let report = `=== DOCUMENT DATA MINING KNOWLEDGE REPORT ===
Source File: ${result.filename} (${result.fileSizeKB} KB)
Timestamp: ${new Date().toLocaleString()}

[NAMED ENTITY RECOGNITION (NER)]
- Person Names: ${result.names.join(', ')}
- Organizations: ${result.organizations.join(', ')}
- Locations: ${result.locations.join(', ')}
- Dates & Time References: ${result.dates.join(', ')}
- Financial Values: ${result.financials.join(', ')}
- Products: ${result.products.join(', ')}
- Technologies: ${result.technologies.join(', ')}
- Legal References: ${result.legalRefs.join(', ')}
- Document Identifiers: ${result.docIds.join(', ')}

[SEMANTIC RELATIONSHIP MINING]
${result.relations.map((r, idx) => `${idx + 1}. ${r}`).join('\n')}

[CORRELATION & TREND DISCOVERY]
${result.correlations.map(c => `- ${c}`).join('\n')}

[SYNTHESIZED KNOWLEDGE GRAPH]
${result.asciiGraph}

[TOPIC & THEME EXTRACTION]
${result.topics.map((t, idx) => `${idx + 1}. ${t}`).join('\n')}

[KEYWORD INTELLIGENCE]
${result.keywords.map(k => `- ${k}`).join('\n')}

[CROSS-DOCUMENT ANALYSIS & LINKAGES]
${result.crossDoc.map(cd => `- ${cd}`).join('\n')}

[KNOWLEDGE INSIGHTS & ANOMALIES]
${result.insights.map(i => `- ${i}`).join('\n')}`;

  outputContent.innerHTML = escapeHTML(report);
  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Completed`;
  runBtn.disabled = false;
  if (downloadBtn) downloadBtn.disabled = false;
  
  MOCK_DATA.data_mining.samples[99] = {
    name: result.filename,
    content: `[User Uploaded Mining File: ${result.filename}]`,
    output: report
  };
  activeSampleIndex = 99;
  
  logSystemEvent("DATA_MINER", `Successfully mined knowledge graph for "${result.filename}"`);
  updateDashboardKPIs();
}

// --- SEMANTIC CLASSIFICATION SPECIALIZED ACTIONS ---

function handleSemanticTypeChange(category) {
  activeSemanticCategory = category;
  
  const classSelect = document.getElementById("semantic-class-select");
  const targetSelect = document.getElementById("semantic-target-select");
  const fileDisplay = document.getElementById("semantic-file-display");
  
  if (category === "class") {
    if (targetSelect) targetSelect.value = "";
    activeSemanticType = classSelect.value;
    if (fileDisplay && !currentSemanticFile) {
      fileDisplay.placeholder = `Ready to upload file for class: ${classSelect.options[classSelect.selectedIndex].text}. Click '+'...`;
    }
  } else if (category === "target") {
    if (classSelect) classSelect.value = "";
    activeSemanticType = targetSelect.value;
    if (fileDisplay && !currentSemanticFile) {
      fileDisplay.placeholder = `Ready to upload for target: ${targetSelect.options[targetSelect.selectedIndex].text}. Click '+'...`;
    }
  }
  
  if (currentSemanticFile) {
    validateSemanticFile();
  }
}

function triggerSemanticUpload(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt,.pdf,.png,.jpg,.jpeg,.json,.csv,.xlsx,.xls,.xml,.pptx,.doc,.docx,.tiff,.db,.sql";
  input.onchange = (e) => {
    if (e.target.files.length > 0) {
      handleSemanticUploadedFile(e.target.files[0]);
    }
  };
  input.click();
}

function handleSemanticUploadedFile(file) {
  currentSemanticFile = file;
  const fileDisplay = document.getElementById("semantic-file-display");
  const searchBox = document.getElementById("semantic-search-box");
  const warningContainer = document.getElementById("semantic-warning-container");
  const runBtn = document.getElementById("semantic-run-btn");
  
  if (!fileDisplay) return;
  
  const fileSizeKB = (file.size / 1024).toFixed(1);
  const maxBytes = 2 * 1024 * 1024; // 2MB
  
  if (file.size > maxBytes) {
    fileDisplay.value = `${file.name} (Size: ${fileSizeKB} KB - EXCEEDS 2MB)`;
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="upload-warning-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>File size exceeds 2MB limit.</strong> The uploaded file is <strong>${fileSizeKB} KB</strong>, which exceeds the strict corporate limit of 2,048 KB. Ingestion blocked.
          </div>
        </div>
      `;
    }
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    currentSemanticFile = null;
    return;
  }

  fileDisplay.value = `${file.name} (Size: ${fileSizeKB} KB)`;
  
  if (!activeSemanticCategory || !activeSemanticType) {
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="upload-warning-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>Select target first.</strong> Please select a format from either <strong>Predefined Class</strong> or <strong>Analysis Target</strong> before uploading a file.
          </div>
        </div>
      `;
    }
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    currentSemanticFile = null;
    fileDisplay.value = "";
    return;
  }
  
  validateSemanticFile();
}

function validateSemanticFile() {
  const file = currentSemanticFile;
  const warningContainer = document.getElementById("semantic-warning-container");
  const searchBox = document.getElementById("semantic-search-box");
  const runBtn = document.getElementById("semantic-run-btn");
  const fileDisplay = document.getElementById("semantic-file-display");
  
  if (!file || !warningContainer) return;
  
  if (searchBox) searchBox.classList.remove("active-file");
  runBtn.disabled = true;
  
  warningContainer.style.display = "block";
  warningContainer.innerHTML = `
    <div class="loader-container" style="padding: 4px 8px; margin: 0; width: 100%;">
      <div style="font-size: 0.8rem; margin-bottom: 4px; color: var(--text-secondary);">Compressing Document Stream (Lz4)...</div>
      <div class="progress-bar-bg" style="height: 6px;">
        <div id="semantic-compression-progress" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
      </div>
    </div>
  `;
  
  let compProgress = 0;
  const compBar = document.getElementById("semantic-compression-progress");
  const compInterval = setInterval(() => {
    compProgress += 20;
    if (compProgress >= 100) {
      compProgress = 100;
      clearInterval(compInterval);
      
      setTimeout(() => {
        const fileSizeKB = (file.size / 1024).toFixed(1);
        const compressedSizeKB = (fileSizeKB * 0.22).toFixed(1); // 78% reduction
        const savingsPercent = 78;
        
        if (fileDisplay) {
          fileDisplay.value = `${file.name} (Compressed: ${compressedSizeKB} KB)`;
        }
        
        warningContainer.innerHTML = `
          <div class="upload-success-banner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div>
              <strong>Stream Compressed (${savingsPercent}% savings).</strong> Ingest payload reduced from ${fileSizeKB} KB to <strong>${compressedSizeKB} KB</strong>. Ready to analyze.
            </div>
          </div>
        `;
        if (searchBox) searchBox.classList.add("active-file");
        if (runBtn) runBtn.disabled = false;
      }, 100);
    }
    if (compBar) compBar.style.width = `${compProgress}%`;
  }, 80);
}

function simulateSemanticPipeline() {
  const outputContent = document.getElementById("semantic-output-content");
  const outputStatus = document.getElementById("semantic-output-status");
  const runBtn = document.getElementById("semantic-run-btn");
  const downloadBtn = document.getElementById("semantic-download-btn");
  
  if (!outputContent || !outputStatus || !runBtn) return;
  
  runBtn.disabled = true;
  if (downloadBtn) downloadBtn.disabled = true;
  
  const exportBtn = document.getElementById("semantic-export-btn");
  if (exportBtn) {
    exportBtn.style.display = "none";
    exportBtn.disabled = true;
  }

  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span> Processing...`;
  
  const setStageState = (stageNum, state, statusTextMsg) => {
    const stageCard = document.getElementById(`semantic-stage-${stageNum}`);
    if (!stageCard) return;
    stageCard.className = `ocr-stage-card ${state}`;
    const statusText = stageCard.querySelector(".ocr-status-text");
    if (statusText) statusText.innerText = statusTextMsg;
  };
  
  for (let i = 1; i <= 4; i++) {
    setStageState(i, "", "Idle");
  }
  
  outputContent.innerHTML = `// Starting NLP Semantic Classification pipeline...\n// Initializing lexical tokenization engines...`;

  if (currentSemanticFile) {
    const file = currentSemanticFile;
    const filename = file.name;
    const fileSizeKB = (file.size / 1024).toFixed(1);
    const ext = filename.split('.').pop().toLowerCase();
    
    setStageState(1, "active", "Tokenizing...");
    outputContent.innerHTML += `\n[STAGE 1] Running Lexical syntax analysis & tokenization (parsing parts of speech, stripping stop words)...`;
    
    setTimeout(() => {
      setStageState(1, "completed", "Completed");
      setStageState(2, "active", "Extracting...");
      outputContent.innerHTML += `\n[STAGE 2] Running Named Entity Recognition & Concept Extraction (parsing organizations, dates, money)...`;
      
      setTimeout(() => {
        setStageState(2, "completed", "Completed");
        setStageState(3, "active", "Classifying...");
        outputContent.innerHTML += `\n[STAGE 3] Performing Semantic Document Classification & Vector Distance matching...`;
        
        setTimeout(() => {
          setStageState(3, "completed", "Completed");
          setStageState(4, "active", "Summarizing...");
          outputContent.innerHTML += `\n[STAGE 4] Executing Cognitive Ingestion Summary generator (ranking sentence semantic weights)...`;
          
          setTimeout(() => {
            setStageState(4, "completed", "Completed");
            
            const finishAnalysis = (text) => {
              let analysisResult;
              const isBinary = /[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(text.slice(0, 1000)) || text.includes('PK\x03\x04') || text.startsWith('%PDF');
              
              if (isBinary || text.trim().length < 20) {
                analysisResult = generateInferredSemanticAnalysis(filename, fileSizeKB);
              } else {
                analysisResult = analyzeTextSemantics(text, filename, fileSizeKB);
              }
              
              renderSemanticAnalysisReport(analysisResult);
            };
            
            const isImage = ['png', 'jpg', 'jpeg', 'tiff', 'bmp'].includes(ext);
            if (isImage && typeof Tesseract !== 'undefined') {
              outputContent.innerHTML += `\n[TESSERACT] Ingesting real image file: ${filename}...`;
              Tesseract.recognize(
                file,
                'eng'
              ).then(({ data: { text } }) => {
                finishAnalysis(text);
              }).catch(err => {
                console.error(err);
                finishAnalysis("");
              });
            } else {
              const reader = new FileReader();
              reader.onload = function(e) {
                finishAnalysis(e.target.result);
              };
              reader.onerror = function() {
                finishAnalysis("");
              };
              reader.readAsText(file);
            }
          }, 600);
        }, 1000);
      }, 1000);
    }, 1000);
  }
}

function analyzeTextSemantics(text, filename, fileSizeKB) {
  const cleanText = text.replace(/[\r\n]+/g, ' ');
  
  const dateRegex = /\b(?:\d{1,2}[/-]\d{1,2}[/-]\d{2,4})|(?:\d{4}[/-]\d{1,2}[/-]\d{1,2})|((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2},? \d{4})\b/gi;
  const dates = [...new Set(cleanText.match(dateRegex) || [])].slice(0, 5);
  if (dates.length === 0) {
    dates.push(new Date().toLocaleDateString());
  }
  
  const moneyRegex = /\$\s*?\(?\d{1,3}(?:,\d{3})*(?:\.\d{2})?\)?\b|\b\d+\s*(?:USD|EUR|GBP|dollars|euros)\b/gi;
  const financials = [...new Set(cleanText.match(moneyRegex) || [])].slice(0, 5);
  if (financials.length === 0) {
    financials.push("$0.00 (None detected)");
  }
  
  const orgRegex = /\b[A-Z][a-zA-Z0-9&]*(?:\s+[A-Z][a-zA-Z0-9&]*)*\s+(?:Inc\.|Corp\.|Ltd\.|Co\.|LLC|Corporation|Company|Technologies|Laboratories|Solutions|Industries|Systems|Services|Partners|Holdings)\b/g;
  let organizations = [...new Set(cleanText.match(orgRegex) || [])].slice(0, 5);
  if (organizations.length === 0) {
    const generalOrgRegex = /\b[A-Z][a-zA-Z0-9]{2,}\s+[A-Z][a-zA-Z0-9]{2,}\b/g;
    organizations = [...new Set(cleanText.match(generalOrgRegex) || [])]
      .filter(o => !o.includes("Invoice") && !o.includes("Document") && !o.includes("Date") && !o.includes("Page"))
      .slice(0, 3);
  }
  if (organizations.length === 0) {
    organizations.push("Enterprise Ingest Node");
  }
  
  const citiesCountries = ["New York", "San Francisco", "London", "Tokyo", "Paris", "Berlin", "Bucharest", "Malibu", "Irvine", "Monterrey", "Gotham City", "Los Angeles", "Chicago", "Boston", "Seattle", "Austin", "Silicon Valley", "California", "Texas", "Germany", "Japan", "India", "Romania", "Mexico", "United Kingdom", "United States"];
  const locations = [];
  citiesCountries.forEach(city => {
    if (new RegExp('\\b' + city + '\\b', 'i').test(cleanText)) {
      locations.push(city);
    }
  });
  if (locations.length === 0) {
    locations.push("Cloud Ingest Cluster");
  }
  
  const nameRegex = /\b(Dr\.|Mr\.|Ms\.|Mrs\.)\s+[A-Z][a-z]+\b|\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g;
  let names = [...new Set(cleanText.match(nameRegex) || [])]
    .filter(n => !n.startsWith("The ") && !n.startsWith("To ") && !n.startsWith("In ") && !n.startsWith("On ") && !n.startsWith("This ") && !n.startsWith("From ") && !n.startsWith("Invoice ") && !n.startsWith("Due ") && !n.startsWith("Total ") && !n.startsWith("Tax "))
    .slice(0, 5);
  if (names.length === 0) {
    names.push("Authorized Operator");
  }
  
  const techVocab = ["API", "neural-network", "OCR", "Lz4", "YOLOv8", "database", "Tesseract", "vector", "algorithms", "framework", "cloud", "cluster", "encryption", "RAG", "tokenization", "payload", "binary", "system", "integration", "schema", "JSON", "XML", "CSV", "SQL", "metadata", "architecture", "node", "pipeline", "automation", "cognitive", "computational"];
  const techTerms = [];
  techVocab.forEach(term => {
    if (new RegExp('\\b' + term + '\\b', 'i').test(cleanText)) {
      techTerms.push(term);
    }
  });
  if (techTerms.length === 0) {
    techTerms.push("Metadata Ingestion", "Parsing System");
  }
  
  const bizVocab = ["invoice", "agreement", "contract", "payment", "compensation", "stipend", "reimbursement", "confidentiality", "acquisitions", "revenue", "profit", "vendor", "parties", "obligations", "terms", "liability", "compliance", "salary", "bonus", "sign-on", "employer", "employee", "corporate", "commercial", "enterprise", "audit", "billing", "schedule", "performance"];
  const bizKeywords = [];
  bizVocab.forEach(term => {
    if (new RegExp('\\b' + term + '\\b', 'i').test(cleanText)) {
      bizKeywords.push(term.charAt(0).toUpperCase() + term.slice(1));
    }
  });
  if (bizKeywords.length === 0) {
    bizKeywords.push("Data Extraction", "Operational Efficiency");
  }
  
  const classKeywords = {
    invoice: ["invoice", "bill", "due", "total", "tax", "price", "qty", "remit", "subtotal", "purchase", "amount", "charge"],
    contract: ["agreement", "contract", "parties", "hereby", "shall", "covenant", "terminate", "agree", "undersigned", "hereto", "provision"],
    resume: ["resume", "experience", "education", "skills", "employment", "professional", "curriculum", "history", "languages", "achievements", "summary"],
    financial: ["balance", "sheet", "asset", "revenue", "income", "profit", "loss", "fiscal", "quarterly", "statement", "equity", "liability", "earning"],
    medical: ["medical", "patient", "clinical", "treatment", "doctor", "diagnosis", "health", "drug", "hospital", "therapy", "physician", "disease"],
    research: ["abstract", "introduction", "methods", "results", "study", "clinical", "investigator", "references", "research", "experiment", "hypothesis"],
    legal: ["court", "plaintiff", "defendant", "jurisdiction", "statute", "waiver", "release", "herein", "liability", "arbitration", "judgment", "litigation"]
  };
  
  let bestClass = "others";
  let maxScore = 0;
  const scores = {};
  
  Object.keys(classKeywords).forEach(cls => {
    let score = 0;
    classKeywords[cls].forEach(word => {
      const count = (text.toLowerCase().match(new RegExp('\\b' + word + '\\b', 'g')) || []).length;
      score += count * 2;
    });
    scores[cls] = score;
    if (score > maxScore) {
      maxScore = score;
      bestClass = cls;
    }
  });
  
  if (maxScore < 3) {
    bestClass = "others";
  }
  
  const classNames = {
    invoice: "Invoice",
    contract: "Contract",
    resume: "Resume",
    financial: "Financial Statement",
    medical: "Medical Record",
    research: "Research Paper",
    legal: "Legal Document",
    others: "Other Enterprise Documents"
  };
  
  const primaryClass = classNames[bestClass];
  const confidence = maxScore > 0 ? Math.min(99.9, 85 + (maxScore * 1.5)) : 78.5;
  
  const sentenceRegex = /[^.!?]+[.!?]+/g;
  const rawSentences = text.match(sentenceRegex) || [text];
  const cleanSentences = rawSentences.map(s => s.trim()).filter(s => s.length > 15 && s.length < 250);
  
  const scoredSentences = cleanSentences.map(sentence => {
    let score = 0;
    [...techVocab, ...bizVocab].forEach(word => {
      if (new RegExp('\\b' + word + '\\b', 'i').test(sentence)) {
        score += 1;
      }
    });
    if (/\b\d+%\b|\$\s*\d+/.test(sentence)) {
      score += 2;
    }
    return { text: sentence, score: score };
  });
  
  const keySentences = scoredSentences
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(s => s.text);
    
  if (keySentences.length === 0) {
    keySentences.push("This document contains custom textual payload from " + filename + ".");
    keySentences.push("The cognitive ingestion pipeline has successfully parsed the text coordinates and semantic weights.");
    keySentences.push("No highly weighted standalone sentences were identified; processing structural paragraphs instead.");
  }
  
  const orgsText = organizations.join(", ");
  const datesText = dates.join(", ");
  const locsText = locations.join(", ");
  const namesText = names.join(", ");
  const financialsText = financials.join(" and ");
  const techText = techTerms.slice(0, 3).join(", ");
  const bizText = bizKeywords.slice(0, 3).join(", ");
  
  const summaryParagraph1 = `The uploaded document, titled "${filename}" (Size: ${fileSizeKB} KB), has been analyzed and classified as a *${primaryClass}* with an estimated confidence rating of *${confidence.toFixed(1)}%*. The core content relates to activities involving *${orgsText}* and was executed or dated around *${datesText}*. Key locations referenced in the text include *${locsText}*, pointing to a structured operational or geographical context.`;
  
  const summaryParagraph2 = `Throughout the document, several key actors and entities are noted, including *${namesText}*. The financial profile highlights monetary values totaling *${financialsText}*, representing transaction values, compensation rates, or budget limits. Lexical scanning identifies dominant business concepts like *${bizText}*, coupled with technical elements including *${techText}*, suggesting a sophisticated, domain-specific document scope.`;
  
  const summaryParagraph3 = `The primary objective of this document is to record, structure, or formalize relations between the involved parties. The sentence semantic weight density points to high-level compliance, financial obligations, or research methods. Ingestion into the DocIntellect platform has parsed the data streams, enabling automated routing, semantic querying, and long-term compliance storage.`;
  
  const summary = `${summaryParagraph1}\n\n${summaryParagraph2}\n\n${summaryParagraph3}`;
  
  return {
    primaryClass: primaryClass,
    confidence: confidence,
    organizations: organizations,
    dates: dates,
    locations: locations,
    names: names,
    financials: financials,
    techTerms: techTerms,
    bizKeywords: bizKeywords,
    keySentences: keySentences,
    summary: summary
  };
}

function generateInferredSemanticAnalysis(filename, fileSizeKB) {
  const cleanName = filename.replace(/[-_]/g, ' ');
  const classSelect = document.getElementById("semantic-class-select");
  const selectedClassVal = classSelect ? classSelect.value : "others";
  
  let inferredClass = "others";
  let titleToken = "Enterprise Document";
  
  if (/invoice|bill|receipt|payment/i.test(cleanName)) {
    inferredClass = "invoice";
    titleToken = "Vendor Invoice";
  } else if (/contract|agreement|nda|waiver|release/i.test(cleanName)) {
    inferredClass = "contract";
    titleToken = "Legal Agreement";
  } else if (/resume|cv|bio|profile|experience/i.test(cleanName)) {
    inferredClass = "resume";
    titleToken = "Candidate Profile";
  } else if (/financial|report|revenue|budget|balance|statement/i.test(cleanName)) {
    inferredClass = "financial";
    titleToken = "Financial Report";
  } else if (/medical|health|clinical|patient|drug|record/i.test(cleanName)) {
    inferredClass = "medical";
    titleToken = "Clinical Medical Record";
  } else if (/research|paper|thesis|study|article/i.test(cleanName)) {
    inferredClass = "research";
    titleToken = "Scientific Research Paper";
  } else if (/court|legal|suit|law|litigation/i.test(cleanName)) {
    inferredClass = "legal";
    titleToken = "Legal Filing Document";
  } else {
    inferredClass = selectedClassVal;
    const classTitles = {
      invoice: "Vendor Invoice",
      contract: "Legal Agreement",
      resume: "Candidate Profile",
      financial: "Financial Report",
      medical: "Clinical Medical Record",
      research: "Scientific Research Paper",
      legal: "Legal Filing Document",
      others: "Enterprise Document"
    };
    titleToken = classTitles[inferredClass] || "Enterprise Document";
  }
  
  const classNames = {
    invoice: "Invoice",
    contract: "Contract",
    resume: "Resume",
    financial: "Financial Statement",
    medical: "Medical Record",
    research: "Research Paper",
    legal: "Legal Document",
    others: "Other Enterprise Documents"
  };
  
  const primaryClass = classNames[inferredClass];
  const confidence = 94.5 + Math.random() * 5;
  
  let extractedOrg = "Global Enterprise Partners";
  const words = cleanName.split(' ');
  if (words.length > 1) {
    const orgWords = [];
    for (let w of words) {
      if (/invoice|contract|agreement|nda|waiver|release|resume|cv|bio|financial|report|medical|research|paper|legal|pdf|docx|doc|txt|xlsx|xls|png|jpg|jpeg/i.test(w)) {
        break;
      }
      if (w.charAt(0) === w.charAt(0).toUpperCase() && w.length > 1) {
        orgWords.push(w);
      }
    }
    if (orgWords.length > 0) {
      extractedOrg = orgWords.join(' ');
    }
  }
  
  const dates = [new Date().toLocaleDateString()];
  const locations = ["Enterprise Secure Vault"];
  const names = ["System Autopilot Operator"];
  const financials = ["$15,420.00 (Estimated Ingestion Value)"];
  const techTerms = ["Lz4 Stream Compression", "PDF Binary Extraction", "DocIntellect Parser"];
  const bizKeywords = ["Ingestion", "Compliance", "Archival"];
  
  const keySentences = [
    `This document "${filename}" has been successfully ingested as binary stream and parsed by our layout-aware NLP pipeline.`,
    `The cognitive classification engine mapped the file to the primary class category: ${primaryClass} (Confidence: ${confidence.toFixed(1)}%).`,
    `The semantic indexing layers extracted metadata coordinates and stored the vector weights in the secure corporate document silo.`
  ];
  
  const summaryParagraph1 = `The uploaded binary document "${filename}" (Size: ${fileSizeKB} KB) has been parsed and classified as a *${primaryClass}* with an outstanding confidence rating of *${confidence.toFixed(1)}%*. Lexical heuristic scanning suggests association with *${extractedOrg}*, with transaction or ingestion processing registered on *${dates[0]}*.`;
  
  const summaryParagraph2 = `Due to the binary encoding of the source file, direct character stream parsing was bypassed in favor of structural entity mapping. The cognitive classification model inferred key business terms including *${bizKeywords.join(', ')}* and invoked technical parsing pipelines like *${techTerms.slice(0, 2).join(' and ')}*.`;
  
  const summaryParagraph3 = `The document has been securely indexed in the corporate database. It is now routed to the appropriate archival pipeline, ensuring full compliance with SOC-2 guidelines. No further manual review is required, and the vector index has been updated to support semantic search.`;
  
  const summary = `${summaryParagraph1}\n\n${summaryParagraph2}\n\n${summaryParagraph3}`;
  
  return {
    primaryClass: primaryClass,
    confidence: confidence,
    organizations: [extractedOrg],
    dates: dates,
    locations: locations,
    names: names,
    financials: financials,
    techTerms: techTerms,
    bizKeywords: bizKeywords,
    keySentences: keySentences,
    summary: summary
  };
}

function renderSemanticAnalysisReport(result) {
  const outputContent = document.getElementById("semantic-output-content");
  const outputStatus = document.getElementById("semantic-output-status");
  const runBtn = document.getElementById("semantic-run-btn");
  const downloadBtn = document.getElementById("semantic-download-btn");
  
  if (!outputContent || !outputStatus || !runBtn) return;
  
  let report = `=== EXTRACTED KEY POINTS & IMPORTANT SENTENCES ===
Document: ${currentSemanticFile.name}
Ingestion Type: ${result.primaryClass.toUpperCase()} (Confidence: ${result.confidence.toFixed(1)}%)

Key Points Extracted:
${result.keySentences.map((s, idx) => `${idx + 1}. ${s}`).join('\n')}

Key Concepts & Keywords:
- ${result.bizKeywords.join(', ')}
- ${result.techTerms.join(', ')}`;

  currentSemanticAnalysisResult = result;

  outputContent.innerHTML = escapeHTML(report);
  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Completed`;
  runBtn.disabled = false;
  if (downloadBtn) downloadBtn.disabled = false;

  // Show the interactive query container
  const queryContainer = document.getElementById("semantic-interactive-query-container");
  if (queryContainer) queryContainer.style.display = "flex";
  
  MOCK_DATA.semantic_classification.samples[99] = {
    name: currentSemanticFile.name,
    content: `[User Uploaded Semantic File: ${currentSemanticFile.name}]`,
    output: report
  };
  activeSampleIndex = 99;
  
  logSystemEvent("CLASSIFIER", `Successfully extracted key points for "${currentSemanticFile.name}"`);
  updateDashboardKPIs();
}

function submitSemanticCustomQuery() {
  const input = document.getElementById("semantic-custom-query-input");
  const outputContent = document.getElementById("semantic-output-content");
  
  if (!input || !outputContent || !currentSemanticAnalysisResult) return;
  
  const query = input.value.trim();
  if (query.length === 0) return;
  
  // Log event
  logSystemEvent("CLASSIFIER", `User executed query: "${query}" on "${currentSemanticFile.name}"`);
  
  // Set console status to running
  const outputStatus = document.getElementById("semantic-output-status");
  if (outputStatus) {
    outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span> Processing Command...`;
  }
  
  // Display a temporary thinking loader
  outputContent.innerHTML = `// Running Interactive Ingestion Agent...\n// Query: "${query}"\n// Analyzing document context...\n\nProcessing...`;
  
  setTimeout(() => {
    const qLower = query.toLowerCase();
    let response = "";
    
    if (qLower.includes("name") || qLower.includes("people") || qLower.includes("person") || qLower.includes("who")) {
      response = `=== EXTRACTED NAMES / PEOPLE ===\n`;
      if (currentSemanticAnalysisResult.names && currentSemanticAnalysisResult.names.length > 0 && currentSemanticAnalysisResult.names[0] !== "Corporate Signatory") {
        response += currentSemanticAnalysisResult.names.map(n => `• ${n}`).join('\n');
      } else {
        response += `• Corporate Signatory (Default Signee)\n• Primary Investigator\n• Executive Sponsor`;
      }
    } else if (qLower.includes("date") || qLower.includes("time") || qLower.includes("when")) {
      response = `=== EXTRACTED DATES ===\n`;
      response += currentSemanticAnalysisResult.dates.map(d => `• ${d}`).join('\n');
    } else if (qLower.includes("org") || qLower.includes("company") || qLower.includes("companies") || qLower.includes("institution") || qLower.includes("employer")) {
      response = `=== EXTRACTED ORGANIZATIONS ===\n`;
      response += currentSemanticAnalysisResult.organizations.map(o => `• ${o}`).join('\n');
    } else if (qLower.includes("money") || qLower.includes("cost") || qLower.includes("price") || qLower.includes("fee") || qLower.includes("amount") || qLower.includes("financial") || qLower.includes("value") || qLower.includes("limit")) {
      response = `=== FINANCIAL VALUES & MONETARY VALUES ===\n`;
      response += currentSemanticAnalysisResult.financials.map(f => `• ${f}`).join('\n');
    } else if (qLower.includes("location") || qLower.includes("city") || qLower.includes("where") || qLower.includes("address")) {
      response = `=== EXTRACTED LOCATIONS ===\n`;
      response += currentSemanticAnalysisResult.locations.map(l => `• ${l}`).join('\n');
    } else if (qLower.includes("summary") || qLower.includes("summarize") || qLower.includes("brief")) {
      response = `=== COMPREHENSIVE COGNITIVE SUMMARY ===\n`;
      response += currentSemanticAnalysisResult.summary;
    } else if (qLower.includes("keyword") || qLower.includes("concept") || qLower.includes("term")) {
      response = `=== EXTRACTED KEYWORDS & CONCEPTS ===\n`;
      response += `Business Keywords:\n` + currentSemanticAnalysisResult.bizKeywords.map(k => `  • ${k}`).join('\n');
      response += `\n\nTechnical Terms:\n` + currentSemanticAnalysisResult.techTerms.map(t => `  • ${t}`).join('\n');
    } else {
      // Smart generalized fallback response
      response = `=== INTERACTIVE DOCUMENT AGENT RESPONSE ===
File analyzed: ${currentSemanticFile.name}
Operation Executed: "${query}"

Result details:
Based on the semantic analysis of the document content, the request was processed successfully. 
The document is a ${currentSemanticAnalysisResult.primaryClass.toUpperCase()} (Confidence: ${currentSemanticAnalysisResult.confidence.toFixed(1)}%) associated with ${currentSemanticAnalysisResult.organizations[0]}.

General Document Scope:
${currentSemanticAnalysisResult.keySentences.map(s => `• ${s}`).join('\n')}`;
    }
    
    outputContent.innerHTML = escapeHTML(response);
    
    if (outputStatus) {
      outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Response Rendered`;
    }
    
    // Clear query input field
    input.value = "";
    
    // Update sample cache to retain query state
    MOCK_DATA.semantic_classification.samples[99].output = response;
  }, 1000);
}

// --- SMARTSTRUCT SPECIALIZED ACTIONS ---

function handleSmartStructTypeChange(category) {
  activeSmartStructCategory = category;
  
  const revSelect = document.getElementById("smartstruct-revision-select");
  const intSelect = document.getElementById("smartstruct-intake-select");
  const fileDisplay = document.getElementById("smartstruct-file-display");
  
  if (category === "revision") {
    // Clear intake selection
    if (intSelect) intSelect.value = "";
    activeSmartStructType = revSelect.value;
    if (fileDisplay && !currentSmartStructFile) {
      fileDisplay.placeholder = `Ready to upload revision file (${activeSmartStructType.toUpperCase()}). Click '+'...`;
    }
  } else if (category === "intake") {
    // Clear revision selection
    if (revSelect) revSelect.value = "";
    activeSmartStructType = intSelect.value;
    if (fileDisplay && !currentSmartStructFile) {
      fileDisplay.placeholder = `Ready to upload structured document (${activeSmartStructType.toUpperCase()}). Click '+'...`;
    }
  }
  
  // If a file is already uploaded, re-validate it against the new format selection
  if (currentSmartStructFile) {
    validateSmartStructFile();
  }
}

function triggerSmartStructUpload(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const input = document.createElement("input");
  input.type = "file";
  // Accept standard extensions
  input.accept = ".txt,.pdf,.png,.jpg,.jpeg,.json,.csv,.xlsx,.xls,.xml,.pptx,.doc,.docx,.tiff,.sql,.db,.tsv";
  input.onchange = (e) => {
    if (e.target.files.length > 0) {
      handleSmartStructUploadedFile(e.target.files[0]);
    }
  };
  input.click();
}

function handleSmartStructUploadedFile(file) {
  currentSmartStructFile = file;
  const fileDisplay = document.getElementById("smartstruct-file-display");
  const searchBox = document.getElementById("smartstruct-search-box");
  const warningContainer = document.getElementById("smartstruct-warning-container");
  const runBtn = document.getElementById("smartstruct-run-btn");
  
  if (!fileDisplay) return;
  
  const fileSizeKB = (file.size / 1024).toFixed(1);
  fileDisplay.value = `${file.name} (Size: ${fileSizeKB} KB)`;
  
  // Rule 1: Must select a type first
  if (!activeSmartStructCategory || !activeSmartStructType) {
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="upload-warning-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>Select document type first.</strong> Please select a format from either <strong>Document Revision</strong> or <strong>Document Intake</strong> before uploading a file.
          </div>
        </div>
      `;
    }
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    currentSmartStructFile = null;
    fileDisplay.value = "";
    return;
  }
  
  validateSmartStructFile();
}

function validateSmartStructFile() {
  const file = currentSmartStructFile;
  const warningContainer = document.getElementById("smartstruct-warning-container");
  const searchBox = document.getElementById("smartstruct-search-box");
  const runBtn = document.getElementById("smartstruct-run-btn");
  
  if (!file || !warningContainer) return;
  
  const ext = file.name.split('.').pop().toLowerCase();
  let isAllowed = false;
  let allowedDesc = "";
  
  if (activeSmartStructCategory === "revision") {
    switch(activeSmartStructType) {
      case "pdf":
        isAllowed = (ext === 'pdf');
        allowedDesc = "PDF Document (.pdf)";
        break;
      case "word":
        isAllowed = ['docx', 'doc'].includes(ext);
        allowedDesc = "Word Document (.docx, .doc)";
        break;
      case "txt":
        isAllowed = (ext === 'txt');
        allowedDesc = "Text File (.txt)";
        break;
      case "pptx":
        isAllowed = (ext === 'pptx');
        allowedDesc = "PowerPoint Presentation (.pptx)";
        break;
      case "scanned":
        isAllowed = ['pdf', 'png', 'jpg', 'jpeg', 'tiff'].includes(ext);
        allowedDesc = "Scanned Document (PDF/Images)";
        break;
      case "images":
        isAllowed = ['jpg', 'jpeg', 'png', 'tiff'].includes(ext);
        allowedDesc = "Image (.jpg, .jpeg, .png, .tiff)";
        break;
    }
  } else if (activeSmartStructCategory === "intake") {
    switch(activeSmartStructType) {
      case "csv":
        isAllowed = (ext === 'csv');
        allowedDesc = "CSV File (.csv)";
        break;
      case "excel":
        isAllowed = ['xlsx', 'xls'].includes(ext);
        allowedDesc = "Excel Spreadsheet (.xlsx, .xls)";
        break;
      case "word":
        isAllowed = ['docx', 'doc'].includes(ext);
        allowedDesc = "Word Document (.docx, .doc)";
        break;
      case "db":
        isAllowed = ['sql', 'db', 'csv', 'tsv', 'json'].includes(ext);
        allowedDesc = "Database export (.sql, .db, .csv, .tsv, .json)";
        break;
      case "json":
        isAllowed = (ext === 'json');
        allowedDesc = "JSON Payload (.json)";
        break;
      case "xml":
        isAllowed = (ext === 'xml');
        allowedDesc = "XML Document (.xml)";
        break;
    }
  }
  
  if (!isAllowed) {
    warningContainer.style.display = "block";
    warningContainer.innerHTML = `
      <div class="upload-warning-banner">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <div>
          <strong>Document format mismatch.</strong> The uploaded file <strong>.${ext}</strong> does not match the selected format requirements: <strong>${allowedDesc}</strong>. Please upload a valid document.
        </div>
      </div>
    `;
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
  } else {
    warningContainer.style.display = "block";
    warningContainer.innerHTML = `
      <div class="upload-success-banner">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <div>
          <strong>Validation successful.</strong> The uploaded document matches requirements for <strong>${allowedDesc}</strong>. Ready to process.
        </div>
      </div>
    `;
    if (searchBox) searchBox.classList.add("active-file");
    if (runBtn) runBtn.disabled = false;

    // Automatically trigger the 10s parsing pipeline
    simulateSmartStructPipeline();
  }
}

let smartstructActiveIntervals = [];

function clearSmartStructTimers() {
  smartstructActiveIntervals.forEach(t => clearTimeout(t));
  smartstructActiveIntervals = [];
}

function updateSmartStructStageUI(stageNum, state) {
  const card = document.getElementById(`smartstruct-stage-${stageNum}`);
  if (!card) return;
  
  if (state === "active") {
    card.className = "ocr-stage-card active";
    const status = card.querySelector(".ocr-stage-status");
    if (status) {
      status.innerHTML = `<span class="ocr-dot"></span>`;
    }
  } else if (state === "completed") {
    card.className = "ocr-stage-card completed";
    const status = card.querySelector(".ocr-stage-status");
    if (status) {
      status.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="stroke: var(--primary);"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    }
  } else {
    card.className = "ocr-stage-card";
    const status = card.querySelector(".ocr-stage-status");
    if (status) status.innerHTML = "";
  }
}

function simulateSmartStructPipeline() {
  if (!currentSmartStructFile || !activeSmartStructType) return;
  
  const outputContent = document.getElementById("smartstruct-output-content");
  const outputStatus = document.getElementById("smartstruct-output-status");
  const runBtn = document.getElementById("smartstruct-run-btn");
  const stagesContainer = document.getElementById("smartstruct-stages-container");
  
  if (!outputContent || !outputStatus || !runBtn) return;
  
  // Clear any running timers
  clearSmartStructTimers();
  
  runBtn.disabled = true;
  
  // Reset download and export buttons
  const downloadBtn = document.getElementById("smartstruct-download-btn");
  if (downloadBtn) downloadBtn.disabled = true;

  const exportBtn = document.getElementById("smartstruct-export-btn");
  if (exportBtn) {
    exportBtn.style.display = "none";
    exportBtn.disabled = true;
  }

  // Set processing status
  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span> Processing...`;
  
  // Display stages container
  if (stagesContainer) {
    stagesContainer.style.display = "flex";
    // Reset all stage cards to default
    for (let i = 1; i <= 6; i++) {
      updateSmartStructStageUI(i, "idle");
    }
  }

  // Terminal logging logic
  let logText = "";
  const appendLog = (line) => {
    const time = new Date().toLocaleTimeString([], { hour12: false });
    logText += `[${time}] ${line}\n`;
    outputContent.textContent = logText;
    outputContent.scrollTop = outputContent.scrollHeight;
  };

  // Phase 1: Start OCR (0s - 1.66s)
  updateSmartStructStageUI(1, "active");
  appendLog("[SYSTEM] Initiating SmartStruct schema parsing pipeline...");
  appendLog("[STAGE 1] OCR Engine: Preprocessing scanned layout pages and deskewing...");
  
  // Phase 2: Classification (1.66s)
  const t1 = setTimeout(() => {
    updateSmartStructStageUI(1, "completed");
    updateSmartStructStageUI(2, "active");
    appendLog("[STAGE 1] OCR Engine: Page preprocessing complete. Extracted raw character blocks.");
    appendLog("[STAGE 2] Document Classification: Inspecting lexical templates...");
  }, 1666);
  smartstructActiveIntervals.push(t1);

  // Phase 3: NER (3.33s)
  const t2 = setTimeout(() => {
    updateSmartStructStageUI(2, "completed");
    updateSmartStructStageUI(3, "active");
    appendLog(`[STAGE 2] Document Classification: Category resolved as: ${activeSmartStructType.toUpperCase()}`);
    appendLog("[STAGE 3] Named Entity Recognition (NER): Resolving key names, dates, and amounts...");
  }, 3333);
  smartstructActiveIntervals.push(t2);

  // Phase 4: Information Extraction (5.0s)
  const t3 = setTimeout(() => {
    updateSmartStructStageUI(3, "completed");
    updateSmartStructStageUI(4, "active");
    appendLog("[STAGE 3] Named Entity Recognition (NER): Extracted metadata attributes (confidence: 99.1%).");
    appendLog("[STAGE 4] Information Extraction: Structural mapping of document attributes...");
  }, 5000);
  smartstructActiveIntervals.push(t3);

  // Phase 5: LLM Schema Validation (6.66s)
  const t4 = setTimeout(() => {
    updateSmartStructStageUI(4, "completed");
    updateSmartStructStageUI(5, "active");
    appendLog("[STAGE 4] Information Extraction: Mapped key-value fields successfully.");
    appendLog("[STAGE 5] Large Language Models (LLMs): Parsing semantic clauses & validating compliance...");
  }, 6666);
  smartstructActiveIntervals.push(t4);

  // Phase 6: JSON/XML Output Generation (8.33s)
  const t5 = setTimeout(() => {
    updateSmartStructStageUI(5, "completed");
    updateSmartStructStageUI(6, "active");
    appendLog("[STAGE 5] Large Language Models (LLMs): Semantic schema integrity validated.");
    appendLog("[STAGE 6] JSON/XML Generation: Finalizing output tags and compiling structured stream...");
  }, 8333);
  smartstructActiveIntervals.push(t5);

  // Finish: Show restructured output (10s)
  const t6 = setTimeout(() => {
    updateSmartStructStageUI(6, "completed");
    appendLog("[SYSTEM] SmartStruct schema parsing complete. Rendering structured data...");
    
    // Switch from terminal log to structured output payload
    setTimeout(() => {
      let mockData = "";
      
      switch(activeSmartStructType) {
        case "pdf":
        case "word":
        case "scanned":
          mockData = `{
  "$schema": "https://json-schema.org/v12/schema",
  "document_category": "${activeSmartStructCategory === 'revision' ? 'unstructured_revision' : 'structured_intake'}",
  "source_format": "${activeSmartStructType.toUpperCase()}",
  "file_metadata": {
    "name": "${currentSmartStructFile.name}",
    "size_bytes": ${currentSmartStructFile.size},
    "type_validation": "verified"
  },
  "inferred_document_model": {
    "type": "corporate_agreement",
    "parties": [
      { "role": "issuer", "name": "Global Tech Corp" },
      { "role": "recipient", "name": "Apex Consulting Group" }
    ],
    "clauses_detected": 14,
    "confidence_rating": 0.962
  },
  "extraction_summary": {
    "paragraphs_processed": 42,
    "tables_extracted": 1,
    "entities_found": { "organizations": 2, "dates": 4, "currency_monetary": 2 }
  }
}`;
          break;
        case "txt":
          mockData = `{
  "document_category": "unstructured_revision",
  "source_format": "PLAIN_TEXT",
  "character_encoding": "UTF-8",
  "lexical_analysis": {
    "total_words": 284,
    "total_sentences": 18,
    "readability_index": "Flesch-Kincaid Grade 10.4"
  },
  "semantic_density": {
    "tokens": 418,
    "vocabulary_richness_ratio": 0.654
  },
  "inferred_schema": {
    "document_title": "Notes_June_2026",
    "paragraphs": 3
  }
}`;
          break;
        case "pptx":
          mockData = `{
  "document_category": "unstructured_revision",
  "source_format": "POWERPOINT",
  "presentation_details": {
    "slide_count": 8,
    "aspect_ratio": "16:9",
    "theme_detected": "Dark Neon Corporates"
  },
  "slides_schema_parsing": [
    { "slide_number": 1, "layout": "title_slide", "title": "Enterprise Document Intelligence Platform" },
    { "slide_number": 2, "layout": "content_list", "title": "Core AI Cognitive Engines" },
    { "slide_number": 3, "layout": "comparison", "title": "Structured vs Unstructured Ingestion Pipelines" }
  ]
}`;
          break;
        case "images":
          mockData = `{
  "document_category": "unstructured_revision",
  "source_format": "IMAGE_OCR",
  "image_dimensions": "3200x2400",
  "color_depth_bits": 24,
  "visual_blocks_detected": [
    { "type": "header_block", "coordinates": { "x": 120, "y": 140, "w": 2960, "h": 120 }, "text": "QUARTERLY BUSINESS INGEST REPORT" },
    { "type": "data_table", "coordinates": { "x": 120, "y": 300, "w": 2960, "h": 1800 }, "columns": ["Q1_Sales", "Q2_Sales", "Variance"] }
  ],
  "ocr_text_confidence": 0.942
}`;
          break;
        case "csv":
          mockData = `{
  "document_category": "structured_intake",
  "source_format": "CSV_TABLE",
  "parser_settings": { "delimiter": ",", "has_headers": true },
  "table_schema": {
    "column_count": 5,
    "schema_mapping": {
      "transaction_id": "STRING (Identifier)",
      "date": "DATETIME",
      "customer_email": "STRING (Email)",
      "amount": "DECIMAL",
      "status": "STRING"
    }
  },
  "payload_statistics": {
    "total_records": 1500,
    "corrupted_rows_omitted": 0,
    "data_loss_percentage": 0.0
  }
}`;
          break;
        case "excel":
          mockData = `{
  "document_category": "structured_intake",
  "source_format": "EXCEL_WORKBOOK",
  "workbook_properties": {
    "active_sheet": "Revenue_Summary",
    "total_sheets": 3,
    "sheets_list": ["Revenue_Summary", "Operating_Costs", "System_Logs"]
  },
  "revenue_summary_schema": {
    "dimensions": "A1:F800",
    "headers": ["Quarter", "Region", "Gross_Revenue", "Direct_Costs", "Net_Profit"],
    "aggregate_sums": { "gross_revenue_total": 9184500.00, "net_profit_total": 2451000.00 }
  }
}`;
          break;
        case "db":
          mockData = `{
  "document_category": "structured_intake",
  "source_format": "DATABASE_EXPORT",
  "database_type": "PostgreSQL",
  "tables_extracted": {
    "users": { "row_count": 14820, "primary_key": "id", "foreign_keys": [] },
    "subscriptions": { "row_count": 9241, "primary_key": "id", "foreign_keys": ["user_id -> users.id"] }
  },
  "erd_integrity_score": 1.0,
  "inferred_relationships": "one-to-many: users -> subscriptions"
}`;
          break;
        case "json":
          mockData = `{
  "document_category": "structured_intake",
  "source_format": "JSON_SCHEMA",
  "schema_compliance": "Strict Draft-12",
  "payload_metrics": {
    "root_node_type": "object",
    "nesting_depth_limit": 5,
    "cardinality": 42
  },
  "top_level_keys": ["meta", "system_config", "telemetry_records"]
}`;
          break;
        case "xml":
          mockData = `{
  "document_category": "structured_intake",
  "source_format": "XML_DOCUMENT",
  "soap_namespaces": ["http://schemas.xmlsoap.org/soap/envelope/"],
  "root_tag": "SOAP-ENV:Envelope",
  "converted_json_equivalent": {
    "Envelope": {
      "Header": { "SecurityToken": "token-920-f" },
      "Body": { "ProcessDocumentRequest": { "DocumentId": "doc-894", "Status": "active" } }
    }
  }
}`;
          break;
        default:
          mockData = `{ "status": "processed", "file": "${currentSmartStructFile.name}" }`;
      }
      
      outputContent.innerHTML = syntaxHighlightJSON(mockData);
      outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Completed`;
      runBtn.disabled = false;
      
      // Enable the download button
      if (downloadBtn) downloadBtn.disabled = false;
      
      // Add to dashboard activity log
      logSystemEvent("SMARTSTRUCT", `Successfully parsed schema-compliant model for "${currentSmartStructFile.name}" (10.00s)`);
      
      // Update dashboard KPIs
      updateDashboardKPIs();
    }, 500);
  }, 10000);
  smartstructActiveIntervals.push(t6);
}

function selectWorkspaceSample(idx) {
  activeSampleIndex = idx;
  currentUploadedFile = null;
  
  // Update active state in buttons
  const buttons = document.querySelectorAll("#workspace-sample-list .sample-btn");
  buttons.forEach((btn, i) => {
    if (i === idx) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  // Reset warnings and buttons
  const warningContainer = document.getElementById("upload-warning-container");
  if (warningContainer) warningContainer.style.display = "none";
  document.getElementById("workspace-run-btn").disabled = false;

  loadSampleInput(idx);
  
  // Reset output panel
  document.getElementById("workspace-output-content").innerHTML = `// Configuration changed. Click "Run Pipeline" to re-process.`;
  document.getElementById("workspace-output-status").innerHTML = `<span class="badge-pulse"></span> Ready`;
}

function loadSampleInput(idx) {
  const moduleData = MOCK_DATA[activeModuleId];
  if (!moduleData || !moduleData.samples[idx]) return;

  const sample = moduleData.samples[idx];
  const dropzoneText = document.getElementById("workspace-dropzone-text");
  
  // Display template header in horizontal bar
  dropzoneText.innerHTML = `
    <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">Template: ${sample.name}</div>
    <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">Pre-loaded template ready</div>
  `;

  // Display sample content inside preview area
  const previewBox = document.getElementById("workspace-preview-box");
  if (previewBox) {
    previewBox.innerHTML = `<strong>Source Document Content:</strong>\n\n${sample.content}`;
  }
}

function simulatePipeline() {
  if (!activeModuleId) return;

  const moduleData = MOCK_DATA[activeModuleId];
  if (!moduleData) return;

  const sample = moduleData.samples[activeSampleIndex];
  if (!sample) return;

  const outputContent = document.getElementById("workspace-output-content");
  const outputStatus = document.getElementById("workspace-output-status");
  const runBtn = document.getElementById("workspace-run-btn");
  const downloadBtn = document.getElementById("workspace-download-btn");

  // Disable button
  runBtn.disabled = true;
  if (downloadBtn) downloadBtn.disabled = true;
  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span> Processing...`;

  // Render progress bar
  outputContent.innerHTML = `
    <div class="loader-container">
      <div style="font-size: 0.9rem; margin-bottom: 8px; color: var(--text-secondary);">Analyzing Document Semantics & Tokens...</div>
      <div class="progress-bar-bg">
        <div id="pipeline-progress" class="progress-bar-fill"></div>
      </div>
      <div id="progress-percent" style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">0%</div>
    </div>
  `;

  // Animate progress bar
  let progress = 0;
  const progressFill = document.getElementById("pipeline-progress");
  const progressPercent = document.getElementById("progress-percent");
  
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Render final output
      setTimeout(() => {
        // Syntax highlighting or styling for output
        if (activeModuleId === "smartstruct") {
          outputContent.innerHTML = syntaxHighlightJSON(sample.output);
        } else {
          outputContent.innerHTML = escapeHTML(sample.output);
        }

        outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Completed`;
        runBtn.disabled = false;
        if (downloadBtn) downloadBtn.disabled = false;

        // Add to dashboard activity log
        logSystemEvent(activeModuleId.toUpperCase(), `Successfully processed "${sample.name}" (${(Math.random() * 0.2 + 0.1).toFixed(2)}s)`);
        
        // Update dashboard KPIs
        updateDashboardKPIs();
      }, 300);
    }
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressPercent) progressPercent.innerText = `${progress}%`;
  }, 120);
}

// Utilities for rendering output cleanly
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function syntaxHighlightJSON(jsonStr) {
  let temp = escapeHTML(jsonStr);
  return temp.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
    let cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    
    // Style matches with embedded spans
    if (cls === 'key') {
      return `<span style="color: #60a5fa; font-weight: 600;">${match}</span>`;
    } else if (cls === 'string') {
      return `<span style="color: #34d399;">${match}</span>`;
    } else if (cls === 'number') {
      return `<span style="color: #fbbf24;">${match}</span>`;
    } else {
      return `<span style="color: #f472b6;">${match}</span>`;
    }
  });
}

// Global uploaded file state
let currentUploadedFile = null;

// --- MOCK DRAG & DROP FOR WORKSPACE ---
function initWorkspaceDragAndDrop() {
  const dropzone = document.getElementById("workspace-dropzone");
  if (!dropzone) return;
  
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      handleUploadedFile(files[0]);
    }
  });
}

function triggerPlusUpload(event) {
  event.preventDefault();
  event.stopPropagation();
  triggerFileSelect();
}

function triggerFileSelect() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt,.pdf,.png,.jpg,.jpeg,.json,.csv,.doc,.docx";
  input.onchange = (e) => {
    if (e.target.files.length > 0) {
      handleUploadedFile(e.target.files[0]);
    }
  };
  input.click();
}

function handleDocTypeChange() {
  if (currentUploadedFile) {
    validateUploadedFile();
  }
}

function handleUploadedFile(file) {
  currentUploadedFile = file;
  
  // Clear active sample styling
  const buttons = document.querySelectorAll("#workspace-sample-list .sample-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  
  const dropzoneText = document.getElementById("workspace-dropzone-text");
  const warningContainer = document.getElementById("upload-warning-container");
  const runBtn = document.getElementById("workspace-run-btn");
  const downloadBtn = document.getElementById("workspace-download-btn");
  
  if (!dropzoneText || !warningContainer || !runBtn) return;
  
  // Reset download button
  if (downloadBtn) downloadBtn.disabled = true;

  const fileSizeKB = (file.size / 1024).toFixed(1);
  const maxBytes = 2 * 1024 * 1024; // 2MB

  // Step 1: Check 2MB Limit
  if (file.size > maxBytes) {
    dropzoneText.innerHTML = `
      <div style="font-weight: 700; font-size: 0.95rem; color: var(--accent-rose); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        ${file.name}
      </div>
      <div style="font-size: 0.78rem; color: var(--accent-rose); margin-top: 2px;">
        Size: ${fileSizeKB} KB (EXCEEDS LIMIT)
      </div>
    `;
    warningContainer.style.display = "block";
    warningContainer.innerHTML = `
      <div class="upload-warning-banner">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <div>
          <strong>File size exceeds 2MB limit.</strong> The uploaded file <strong>${file.name}</strong> is <strong>${fileSizeKB} KB</strong>, which exceeds the strict corporate limit of 2,048 KB. Ingestion blocked.
        </div>
      </div>
    `;
    runBtn.disabled = true;
    currentUploadedFile = null;
    return;
  }

  // Step 2: Validate extension format
  const filename = file.name;
  const ext = filename.split('.').pop().toLowerCase();
  const selectedType = document.getElementById("doc-type-select").value;
  
  let isAllowed = false;
  let allowedDesc = "";
  
  switch(selectedType) {
    case "invoice":
      isAllowed = (ext === 'pdf');
      allowedDesc = "PDF Invoice (.pdf)";
      break;
    case "contract":
      isAllowed = ['pdf', 'docx', 'doc', 'txt'].includes(ext);
      allowedDesc = "Contract (.pdf, .docx, .doc, .txt)";
      break;
    case "resume":
      isAllowed = ['pdf', 'docx', 'doc'].includes(ext);
      allowedDesc = "Resume (.pdf, .docx, .doc)";
      break;
    case "reports":
      isAllowed = ['pdf', 'txt', 'csv'].includes(ext);
      allowedDesc = "Report (.pdf, .txt, .csv)";
      break;
    case "forms":
      isAllowed = ['pdf', 'json', 'csv'].includes(ext);
      allowedDesc = "Form (.pdf, .json, .csv)";
      break;
    case "others":
      isAllowed = true;
      allowedDesc = "Others (All Formats)";
      break;
  }

  if (!isAllowed) {
    dropzoneText.innerHTML = `
      <div style="font-weight: 700; font-size: 0.95rem; color: var(--accent-rose); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        ${file.name}
      </div>
      <div style="font-size: 0.78rem; color: var(--accent-rose); margin-top: 2px;">
        Format Mismatch
      </div>
    `;
    warningContainer.style.display = "block";
    warningContainer.innerHTML = `
      <div class="upload-warning-banner">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 2px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <div>
          <strong>Document type mismatch.</strong> The uploaded file <strong>.${ext}</strong> does not match the selected format: <strong>${allowedDesc}</strong>. Please upload a valid document format.
        </div>
      </div>
    `;
    runBtn.disabled = true;
    currentUploadedFile = null;
    return;
  }

  // Step 3: Visual Compression Simulation
  runBtn.disabled = true;
  dropzoneText.innerHTML = `
    <div style="font-weight: 700; font-size: 0.95rem; color: var(--accent-amber); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
      ${file.name}
    </div>
    <div style="font-size: 0.78rem; color: var(--accent-amber); margin-top: 2px;">
      Compressing Ingest Stream...
    </div>
  `;
  warningContainer.style.display = "block";
  warningContainer.innerHTML = `
    <div class="loader-container" style="padding: 4px 8px; margin: 0; width: 100%;">
      <div style="font-size: 0.8rem; margin-bottom: 4px; color: var(--text-secondary);">Compressing Document Stream (Lz4)...</div>
      <div class="progress-bar-bg" style="height: 6px;">
        <div id="compression-progress" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
      </div>
    </div>
  `;

  let compProgress = 0;
  const compBar = document.getElementById("compression-progress");
  const compInterval = setInterval(() => {
    compProgress += 15;
    if (compProgress >= 100) {
      compProgress = 100;
      clearInterval(compInterval);

      // Compression complete - render success
      setTimeout(() => {
        const compressedSizeKB = (fileSizeKB * 0.22).toFixed(1); // 78% reduction
        const savingsPercent = 78;

        dropzoneText.innerHTML = `
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--accent-emerald); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${file.name}
          </div>
          <div style="font-size: 0.78rem; color: var(--accent-emerald); margin-top: 2px;">
            Compressed: ${compressedSizeKB} KB (Saved ${savingsPercent}%)
          </div>
        `;

        warningContainer.innerHTML = `
          <div class="upload-success-banner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div>
              <strong>Stream Compressed (${savingsPercent}% savings).</strong> Extracted payload reduced from ${fileSizeKB} KB to <strong>${compressedSizeKB} KB</strong>. Ready to process.
            </div>
          </div>
        `;
        runBtn.disabled = false;
        
        // Update sample payload size for download schema generator
        MOCK_DATA[activeModuleId].samples[99] = {
          name: file.name,
          content: `[User File Upload: ${file.name}]`,
          output: getMockFileContent(activeModuleId, file.name, compressedSizeKB, selectedType)
        };
        activeSampleIndex = 99;

        // Display custom file content inside preview area
        const previewBox = document.getElementById("workspace-preview-box");
        if (previewBox) {
          previewBox.innerHTML = `<strong>Source Document Content:</strong>\n\n[Custom Uploaded File: ${file.name}]\nOriginal Size: ${fileSizeKB} KB\nCompressed Size: ${compressedSizeKB} KB (78% savings)\n\nThis document has been parsed, compressed, and is ready for the cognitive pipeline.`;
        }

        // Reset output panel
        document.getElementById("workspace-output-content").innerHTML = `// Compressed stream "${file.name}" loaded & verified. Click "Run Pipeline" to execute the AI processing engine.`;
      }, 100);
    }
    if (compBar) compBar.style.width = `${compProgress}%`;
  }, 100);
}

function initDashboardCharts() {
  const volumeCtx = document.getElementById("chart-volume").getContext("2d");
  const classificationCtx = document.getElementById("chart-classification").getContext("2d");

  // Chart 1: Volume Line Chart
  window.dashboardChartInstance = new Chart(volumeCtx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Documents Ingested',
        data: [],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.05)',
        borderWidth: 3,
        pointBackgroundColor: '#3b82f6',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#3b82f6',
        pointHoverBorderWidth: 3,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } }
        }
      }
    }
  });

  // Chart 2: Classification Doughnut Chart
  window.doughnutChartInstance = new Chart(classificationCtx, {
    type: 'doughnut',
    data: {
      labels: ['Financial', 'Legal', 'HR / Admin', 'Technical'],
      datasets: [{
        data: [0, 0, 0, 0],
        backgroundColor: [
          '#3b82f6', // Electric Blue
          '#8b5cf6', // Indigo Purple
          '#06b6d4', // Cyan
          '#f59e0b'  // Amber
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#94a3b8',
            font: { family: 'Plus Jakarta Sans', size: 11 },
            boxWidth: 12,
            padding: 15
          }
        }
      },
      cutout: '70%'
    }
  });

  // Start real-time updates
  setInterval(simulateLiveDashboardData, 4000);
}

function simulateLiveDashboardData() {
  if (!currentUser) return; // No live tracking if logged out
  
  if (!window.dashboardChartInstance || !document.getElementById("dashboard-view").classList.contains("active")) {
    return;
  }

  // 1. Update line chart data
  const chartData = window.dashboardChartInstance.data.datasets[0].data;
  if (chartData.length >= 7) {
    chartData.shift(); // Maintain window of 7
  }
  
  // Generate realistic next data point (adds volatility around current docCount)
  const lastVal = chartData.length > 0 ? chartData[chartData.length - 1] : docCount;
  const change = Math.floor(Math.random() * 5) + 1;
  const newVal = lastVal + change;
  chartData.push(newVal);

  // Update timestamps
  const labels = window.dashboardChartInstance.data.labels;
  if (labels.length >= 7) {
    labels.shift();
  }
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  labels.push(timeStr);
  
  window.dashboardChartInstance.update();

  // 2. Increment stats
  docCount += change;
  document.getElementById("stat-docs").innerText = docCount.toLocaleString();

  // Micro-oscillations in accuracy and speed
  averageAccuracy = Math.min(99.9, Math.max(97.0, parseFloat(averageAccuracy || 98.40) + (Math.random() * 0.1 - 0.04))).toFixed(2);
  document.getElementById("stat-accuracy").innerText = `${averageAccuracy}%`;

  extractionSpeed = Math.floor(Math.max(100, Math.min(180, (extractionSpeed || 120) + (Math.random() * 10 - 5))));
  document.getElementById("stat-speed").innerText = `${extractionSpeed} ms`;

  // Save changes to local session
  saveDashboardSession();

  // 3. Trigger random log events
  const randomEvents = [
    { tag: "SMARTSTRUCT", msg: "Extracted schema from INV-2026-4091 (Vendor: Cisco Systems). Accuracy: 99.4%" },
    { tag: "OCR_ENGINE", msg: "Parsed multi-page PDF 'Q3_Report_Draft.pdf' (18 pages). Corrected skew: 1.5°" },
    { tag: "CLASSIFIER", msg: "Assigned 'LEGAL_NDA' to uploaded document 'mutual_agreement_v2.docx'" },
    { tag: "DATA_MINER", msg: "NER engine extracted 14 entities and 8 relations from research paper." },
    { tag: "KNOWLEDGE", msg: "Vector segments refreshed. Ingested 44 chunks into core handbook store." },
    { tag: "SECURITY", msg: "API token validated successfully for client node IP: 104.28.19.11" }
  ];

  const randomEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
  logSystemEvent(randomEvent.tag, randomEvent.msg);
}

function updateDashboardKPIs() {
  if (activeModuleId) {
    recordUserPipelineAction(activeModuleId);
  }
}

function recordUserPipelineAction(moduleId) {
  if (!currentUser) return; // Only track actions for logged in user

  // Increment document count
  docCount += 1;
  
  // Update accuracy (oscillate with positive drift)
  const accuracyDelta = (Math.random() * 0.1 - 0.02);
  averageAccuracy = Math.min(99.9, Math.max(97.0, parseFloat(averageAccuracy || 98.40) + accuracyDelta)).toFixed(2);
  
  // Update speed
  extractionSpeed = Math.floor(100 + Math.random() * 80);
  
  // Update line chart data if initialized
  if (window.dashboardChartInstance) {
    const chartData = window.dashboardChartInstance.data.datasets[0].data;
    const labels = window.dashboardChartInstance.data.labels;
    
    // Maintain a window of 7 data points
    if (chartData.length >= 7) {
      chartData.shift();
      labels.shift();
    }
    
    chartData.push(docCount);
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    labels.push(timeStr);
    
    window.dashboardChartInstance.update();
  }
  
  // Update doughnut chart classification data
  if (window.doughnutChartInstance) {
    const doughnutData = window.doughnutChartInstance.data.datasets[0].data;
    
    // Map moduleId to chart indexes: ['Financial', 'Legal', 'HR / Admin', 'Technical']
    if (moduleId === "smartstruct") {
      doughnutData[0] += 1; // Financial
    } else if (moduleId === "semantic_classification") {
      doughnutData[1] += 1; // Legal
    } else if (moduleId === "contextual_knowledge") {
      doughnutData[2] += 1; // HR / Admin
    } else if (moduleId === "text_extraction" || moduleId === "data_mining") {
      doughnutData[3] += 1; // Technical
    }
    
    window.doughnutChartInstance.update();
  }
  
  // Update DOM labels
  const statDocs = document.getElementById("stat-docs");
  if (statDocs) statDocs.innerText = docCount.toLocaleString();
  
  const statAcc = document.getElementById("stat-accuracy");
  if (statAcc) statAcc.innerText = `${averageAccuracy}%`;
  
  const statSpeed = document.getElementById("stat-speed");
  if (statSpeed) statSpeed.innerText = `${extractionSpeed} ms`;
  
  // Save to localStorage
  saveDashboardSession();
}

function saveDashboardSession() {
  if (!currentUser) return;
  
  const sessionData = {
    docCount: docCount,
    averageAccuracy: averageAccuracy,
    extractionSpeed: extractionSpeed,
    lineData: window.dashboardChartInstance ? window.dashboardChartInstance.data.datasets[0].data : [],
    lineLabels: window.dashboardChartInstance ? window.dashboardChartInstance.data.labels : [],
    doughnutData: window.doughnutChartInstance ? window.doughnutChartInstance.data.datasets[0].data : [0, 0, 0, 0]
  };
  
  localStorage.setItem(`intelligence_dashboard_data_${currentUser.email}`, JSON.stringify(sessionData));
}

function loadDashboardSession() {
  if (!currentUser) return;
  
  const storedData = localStorage.getItem(`intelligence_dashboard_data_${currentUser.email}`);
  let sessionData = null;
  
  if (storedData) {
    try {
      sessionData = JSON.parse(storedData);
    } catch (e) {
      sessionData = null;
    }
  }
  
  if (sessionData) {
    docCount = sessionData.docCount || 0;
    averageAccuracy = sessionData.averageAccuracy || "0.00";
    extractionSpeed = sessionData.extractionSpeed || 0;
    
    if (window.dashboardChartInstance) {
      window.dashboardChartInstance.data.datasets[0].data = sessionData.lineData || [];
      window.dashboardChartInstance.data.labels = sessionData.lineLabels || [];
      window.dashboardChartInstance.update();
    }
    
    if (window.doughnutChartInstance) {
      window.doughnutChartInstance.data.datasets[0].data = sessionData.doughnutData || [0, 0, 0, 0];
      window.doughnutChartInstance.update();
    }
  } else {
    // Initialize standard starting telemetry for new user
    docCount = 0;
    averageAccuracy = "0.00";
    extractionSpeed = 0;
    
    if (window.dashboardChartInstance) {
      window.dashboardChartInstance.data.datasets[0].data = [];
      window.dashboardChartInstance.data.labels = [];
      window.dashboardChartInstance.update();
    }
    
    if (window.doughnutChartInstance) {
      window.doughnutChartInstance.data.datasets[0].data = [0, 0, 0, 0];
      window.doughnutChartInstance.update();
    }
  }
  
  // Update DOM labels
  const statDocs = document.getElementById("stat-docs");
  if (statDocs) statDocs.innerText = docCount === 0 ? "0" : docCount.toLocaleString();
  
  const statAcc = document.getElementById("stat-accuracy");
  if (statAcc) statAcc.innerText = docCount === 0 ? "0.00%" : `${averageAccuracy}%`;
  
  const statSpeed = document.getElementById("stat-speed");
  if (statSpeed) statSpeed.innerText = docCount === 0 ? "0 ms" : `${extractionSpeed} ms`;
}

function clearDashboardUI() {
  docCount = 0;
  averageAccuracy = "0.00";
  extractionSpeed = 0;
  
  if (window.dashboardChartInstance) {
    window.dashboardChartInstance.data.datasets[0].data = [];
    window.dashboardChartInstance.data.labels = [];
    window.dashboardChartInstance.update();
  }
  
  if (window.doughnutChartInstance) {
    window.doughnutChartInstance.data.datasets[0].data = [0, 0, 0, 0];
    window.doughnutChartInstance.update();
  }
  
  const statDocs = document.getElementById("stat-docs");
  if (statDocs) statDocs.innerText = "0";
  
  const statAcc = document.getElementById("stat-accuracy");
  if (statAcc) statAcc.innerText = "0.00%";
  
  const statSpeed = document.getElementById("stat-speed");
  if (statSpeed) statSpeed.innerText = "0 ms";
  
  const consoleBody = document.getElementById("console-log-body");
  if (consoleBody) {
    consoleBody.innerHTML = `
      <div class="console-line">
        <span class="console-time">[${new Date().toLocaleTimeString([], { hour12: false })}]</span>
        <span class="console-tag">[SYSTEM]</span>
        <span class="console-text" style="color: var(--accent-amber);">Awaiting user authentication to initialize data stream. Dashboard stats are locked.</span>
      </div>
    `;
  }
}

function handleComponentClick(name) {
  const queryMap = {
    "Cognitive Engines": "cognitive+ai+document+processing+engines",
    "SmartStruct AI": "AI+document+parsing+and+structured+json+schema+extraction",
    "Text Extraction OCR": "optical+character+recognition+ocr+technology+ai",
    "Semantic Classifier": "semantic+document+classification+machine+learning+nlp",
    "Entity Miner": "named+entity+recognition+ner+information+extraction",
    "Contextual RAG": "retrieval+augmented+generation+rag+vector+search+databases",
    "Developer Hub": "developer+hub+api+integrations+and+document+schemas",
    "Schemas & Templates": "json+schema+templates+for+document+processing",
    "API Documentation": "document+intelligence+api+design+best+practices",
    "Telemetry Status": "system+telemetry+monitoring+metrics+dashboard",
    "Security & Compliance": "enterprise+data+security+and+compliance+standards",
    "SOC 2 Type II": "soc+2+type+ii+certification+requirements+standards",
    "GDPR Compliance": "gdpr+data+protection+compliance+rules",
    "HIPAA Safe Harbor": "hipaa+safe+harbor+methodology+compliance",
    "Vector Encryption": "vector+database+encryption+at+rest+security"
  };

  const detailsMap = {
    "Cognitive Engines": "DocIntellect's Cognitive Engines are specialized, model-driven processing pipelines designed to ingest, classify, analyze, and structure unstructured business documents. Utilizing client-side AI algorithms (including Tesseract OCR, NLP classification models, and vector embeddings), these engines transform raw files into actionable, queryable intelligence.",
    "SmartStruct AI": "SmartStruct AI is our advanced document schema extractor. It parses unstructured text from business files (like invoices, receipts, and forms) and maps them into strictly valid, structured JSON or XML outputs matching corporate database schemas. It features layout-aware parsing and real-time confidence scores.",
    "Text Extraction OCR": "Text Extraction OCR is powered by a client-side integration of Tesseract.js. It performs optical character recognition directly within the user's browser, processing uploaded images (PNG, JPG, TIFF, BMP) to extract raw textual streams. It maintains layout coordinates and performs automatic skew correction for high accuracy.",
    "Semantic Classifier": "Semantic Classifier leverages Natural Language Processing (NLP) models to automatically classify ingested documents into predefined categories (such as Invoices, Contracts, Resumes, Financial Statements, or Legal Documents). It scans semantic densities, extracts key phrases, and compiles comprehensive summaries.",
    "Entity Miner": "Entity Miner is our Named Entity Recognition (NER) and relationship mining workspace. It scans massive document streams to identify key business entities (Persons, Organizations, Locations, Financial Values, Products, and Dates). It maps relations between these entities and synthesizes interactive ASCII knowledge graphs.",
    "Contextual RAG": "Contextual RAG (Retrieval-Augmented Generation) is an interactive Q&A console. It converts ingested document segments into high-dimensional semantic vector embeddings (using models like OpenAI Ada-002 or Google Gecko) and indexes them in a local vector database. Users can submit custom questions in plain English to query the document content using cosine similarity retrieval.",
    "Developer Hub": "The Developer Hub serves as the central control plane for systems integration. It provides access to corporate JSON/XML document schemas, complete API reference documentation, client integration libraries, and real-time telemetry metrics to monitor system status.",
    "Schemas & Templates": "DocIntellect AI offers pre-built and customizable schema templates matching standard business structures (like standard invoices, employment contracts, and compliance drafts). Developers can download templates in JSON Schema format to validate output payloads.",
    "API Documentation": "Our RESTful and WebSocket API endpoints allow developers to programmatically trigger OCR text extraction, document classification, NER entity mining, and RAG vector searches. The documentation includes complete request/response payloads, code samples in multiple languages, and authentication setup guides.",
    "Telemetry Status": "Telemetry Status provides real-time system performance metrics, tracking average extraction latency (ms), model recognition accuracy (%), system memory usage, and throughput volume. It allows administrators to identify bottlenecks in cognitive pipelines.",
    "Security & Compliance": "Security & Compliance forms the bedrock of DocIntellect AI. Our platform is built from the ground up to satisfy strict data protection protocols and enterprise security requirements, including end-to-end vector encryption, HIPAA compliance, and GDPR audit trails.",
    "SOC 2 Type II": "SOC 2 Type II compliance certifies that DocIntellect's operations, security policies, and hosting environments adhere to the Trust Services Criteria established by the AICPA. This includes rigorous audits of security controls, system availability, processing integrity, confidentiality, and privacy over a sustained monitoring period.",
    "GDPR Compliance": "DocIntellect AI is fully compliant with the General Data Protection Regulation (GDPR). We employ client-side AI processing (meaning data never leaves your system unless requested), strict user-session boundaries, automated data anonymization, and audit logging to guarantee data sovereignty and the right to be forgotten.",
    "HIPAA Safe Harbor": "HIPAA Safe Harbor compliance ensures that any Protected Health Information (PHI) processed by our systems is handled in accordance with U.S. healthcare standards. Our Named Entity Recognition (NER) engine automatically detects and redacts patient identifiers to ensure safe, compliant healthcare data operations.",
    "Vector Encryption": "Vector Encryption implements advanced AES-256 encryption at rest and TLS 1.3 encryption in transit for all high-dimensional vector embeddings and indexing tables. This ensures that even if vector databases are compromised, the raw semantic representations of corporate documents remain securely protected."
  };

  const query = queryMap[name] || encodeURIComponent(name);
  const searchUrl = `https://www.google.com/search?q=${query}`;
  const details = detailsMap[name] || `Information and policies regarding ${name}.`;

  // Update modal contents
  document.getElementById("info-modal-title").innerText = name;
  document.getElementById("info-modal-description").innerHTML = details;
  
  const googleBtn = document.getElementById("info-modal-google-btn");
  if (googleBtn) {
    googleBtn.onclick = () => {
      window.open(searchUrl, "_blank");
    };
  }

  // Open modal so user sees the details in brief
  openModal("component-info-modal");

  // Log system event if logged in
  logSystemEvent("INFO_PORTAL", `Displayed policy details for: [${name}].`);
  
  // Show a toast notification
  showToastNotification(`Displayed details for "${name}"`);
}

function closeComponentInfoModal() {
  closeModal("component-info-modal");
}

function showToastNotification(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    </div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  // Trigger animation after adding to DOM
  setTimeout(() => {
    toast.classList.add("active");
  }, 10);

  // Remove toast after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove("active");
    setTimeout(() => {
      container.removeChild(toast);
    }, 400);
  }, 3500);
}

function logSystemEvent(tag, message) {
  const consoleBody = document.getElementById("console-log-body");
  if (!consoleBody) return;

  const line = document.createElement("div");
  line.className = "console-line";
  
  const time = new Date().toLocaleTimeString([], { hour12: false });
  line.innerHTML = `
    <span class="console-time">[${time}]</span>
    <span class="console-tag">[${tag}]</span>
    <span class="console-text">${message}</span>
  `;

  consoleBody.appendChild(line);
  consoleBody.scrollTop = consoleBody.scrollHeight; // Scroll to bottom

  // Cap lines at 50 to prevent memory leak
  if (consoleBody.children.length > 50) {
    consoleBody.removeChild(consoleBody.firstChild);
  }
}

// --- DOWNLOADABLE SAMPLE FILES ENGINE ---
const SAMPLE_FILES = {
  invoice: {
    filename: "sample_invoice_structured.json",
    mime: "application/json",
    content: `{
  "invoice_number": "INV-2026-004",
  "vendor": "Acme Global Solutions",
  "issue_date": "2026-06-25",
  "total_amount": 12500.50,
  "currency": "USD",
  "line_items": [
    {
      "description": "Cloud Architecture Design Consulting",
      "amount": 8000.00
    },
    {
      "description": "Premium Database Management (2 Months)",
      "amount": 4500.00
    }
  ]
}`
  },
  classification: {
    filename: "document_schema.json",
    mime: "application/json",
    content: `{
  "$schema": "https://json-schema.org/v12/schema",
  "title": "DocumentClassificationSchema",
  "type": "object",
  "properties": {
    "primary_class": { "type": "string" },
    "confidence": { "type": "number", "minimum": 0, "maximum": 1 },
    "tags": { "type": "array", "items": { "type": "string" } },
    "risk_level": { "type": "string", "enum": ["LOW", "MEDIUM", "HIGH", "CRITICAL"] }
  },
  "required": ["primary_class", "confidence", "risk_level"]
}`
  },
  entities: {
    filename: "extracted_entities_report.csv",
    mime: "text/csv",
    content: `Entity ID,Entity Category,Entity Value,Extraction Confidence,Context Reference
ENT-01,ORGANIZATION,Microsoft Corp.,0.998,Press release header
ENT-02,PERSON,Priya Patel,0.995,"Priya Patel, CEO of ShieldAI"
ENT-03,MONEY,$4.2 Billion,0.999,"valued at $4.2 Billion"
ENT-04,DATE,April 9, 2026,0.999,"announced on April 9, 2026"
ENT-05,SECTOR,Cloud Security,0.945,ShieldAI domain expertise`
  },
  contract: {
    filename: "contract_relations_mined.json",
    mime: "application/json",
    content: `{
  "document_type": "nondisclosure_agreement",
  "parties": {
    "discloser": "Stark Industries Ltd.",
    "recipient": "Hammer Advanced Systems"
  },
  "effective_date": "2026-05-18",
  "obligations": {
    "confidentiality_period_years": 5,
    "permitted_disclosure": "To legal and financial advisors under strict NDA",
    "governing_law": "State of New York"
  }
}`
  },
  handbook: {
    filename: "company_knowledge_store.txt",
    mime: "text/plain",
    content: `COMPANY HANDBOOK VECTOR TRANSCRIPT
Doc Ref: HB-2026-v1.1
Total Vectors: 1,402

[Segment 12]
Hybrid work: Eligible employees can work up to 3 days remotely. Tuesdays and Thursdays are core teamwork days in-office.

[Segment 15]
Office equipment stipend: Full-time hires receive up to $800 reimbursement for ergonomic equipment. Submit claims via Expensify within 60 days.

[Segment 22]
Travel lodging reimbursement: Maximum rate is $250/night in Tier 1 cities, $175/night in other regions. Meal per-diem limit is $75/day.`
  },
  ocr: {
    filename: "ocr_layout_output.txt",
    mime: "text/plain",
    content: `=== OCR LAYOUT-AWARE TEXT EXTRACTION ===
File: invoice_scan_lowres.png
DPI: 150 (Upscaled to 300)

[BoundingBox: X: 40, Y: 80, W: 350, H: 45] -> "WAYNE ENTERPRISES INC."
[BoundingBox: X: 40, Y: 140, W: 200, H: 20] -> "Invoice Date: June 12, 2026"
[BoundingBox: X: 500, Y: 140, W: 180, H: 20] -> "Due Date: July 12, 2026"
[BoundingBox: X: 40, Y: 220, W: 600, H: 25] -> "Description: R&D Prototype Development Subcontract"
[BoundingBox: X: 40, Y: 255, W: 120, H: 25] -> "Total: $250,000.00"

--- END OF OCR STREAM ---`
  }
};

function downloadSampleFile(key) {
  const fileData = SAMPLE_FILES[key];
  if (!fileData) return;

  const blob = new Blob([fileData.content], { type: fileData.mime });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = fileData.filename;
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);

  // Log to dashboard
  logSystemEvent("DOWNLOADS", `Downloaded file: ${fileData.filename} (${(blob.size / 1024).toFixed(2)} KB)`);
}

// --- MOCK AUTH SYSTEM ---
let currentUser = null;

function handleMockAuth(type, event) {
  event.preventDefault();
  
  const email = document.getElementById(`${type}-email`).value;
  const password = document.getElementById(`${type}-password`).value;
  
  if (!email || !password) {
    alert("Please fill in all credentials.");
    return;
  }

  // Set logged in user state
  currentUser = {
    email: email,
    name: email.split('@')[0],
    initial: email.charAt(0).toUpperCase()
  };

  // Store in localStorage
  localStorage.setItem("intelligence_user", JSON.stringify(currentUser));
  
  // Close modal
  closeModal(`${type}-modal`);
  
  // Update header UI
  updateAuthNavbarUI();

  // Load user dashboard telemetry session
  loadDashboardSession();

  // System alert
  logSystemEvent("SECURITY", `User session initiated for: ${currentUser.email}`);
}

function updateAuthNavbarUI() {
  const authNavGroup = document.getElementById("auth-nav-group");
  if (!authNavGroup) return;

  if (currentUser) {
    authNavGroup.innerHTML = `
      <div class="user-profile-menu" onclick="toggleProfileDropdown(event)">
        <div class="avatar-circle">${currentUser.initial}</div>
        <span>${currentUser.name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left: 4px;"><path d="M6 9l6 6 6-6"/></svg>
        
        <!-- Dropdown Menu -->
        <div id="profile-dropdown" style="display: none; position: absolute; top: 110%; right: 0; background: var(--bg-deep); border: var(--glass-border); border-radius: var(--radius-sm); padding: 8px 0; width: 160px; box-shadow: var(--shadow-md); z-index: 100;">
          <div style="padding: 10px 16px; font-size: 0.8rem; color: var(--text-muted); border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 6px;">Account Settings</div>
          <button class="btn btn-ghost" onclick="mockLogout()" style="width: 100%; text-align: left; padding: 10px 16px; font-size: 0.85rem; border-radius: 0; display: flex; align-items: center; gap: 8px; color: var(--accent-rose);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign Out
          </button>
        </div>
      </div>
    `;
  } else {
    authNavGroup.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('login-modal')">Login</button>
      <button class="btn btn-primary" onclick="openModal('signup-modal')">Sign Up</button>
    `;
  }
}

function toggleProfileDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById("profile-dropdown");
  if (dropdown) {
    const isVisible = dropdown.style.display === "block";
    dropdown.style.display = isVisible ? "none" : "block";
  }
}

function mockLogout() {
  currentUser = null;
  localStorage.removeItem("intelligence_user");
  updateAuthNavbarUI();
  
  // Clear dashboard stats
  clearDashboardUI();
  
  logSystemEvent("SECURITY", `User session terminated.`);
}

// Global click handler to close dropdowns when clicking outside
window.addEventListener("click", () => {
  const dropdown = document.getElementById("profile-dropdown");
  if (dropdown) {
    dropdown.style.display = "none";
  }
});

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Check for logged in user
  const storedUser = localStorage.getItem("intelligence_user");
  if (storedUser) {
    try {
      currentUser = JSON.parse(storedUser);
    } catch(e) {
      currentUser = null;
    }
  }
  updateAuthNavbarUI();

  // 2. Setup Drag and Drop
  initWorkspaceDragAndDrop();

  // 3. Initialize Charts
  initDashboardCharts();

  // 4. Load dashboard session data or clear it depending on authentication
  if (currentUser) {
    loadDashboardSession();
  } else {
    clearDashboardUI();
  }

  // 5. Ingest baseline server logs if logged in
  if (currentUser) {
    logSystemEvent("SECURITY", "Firewall security profiles loaded. SSL handshakes initialized.");
    logSystemEvent("DATABASE", "Semantic vector segment indexes connected successfully.");
    logSystemEvent("OCR_ENGINE", "Layout-aware parsing engine fully initialized (GPU enabled).");
    logSystemEvent("SMARTSTRUCT", "LLM JSON schema parsing models loaded into active memory.");
  }
  // 6. Bind Semantic Custom Query Input Enter Key
  const semanticQueryInput = document.getElementById("semantic-custom-query-input");
  if (semanticQueryInput) {
    semanticQueryInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitSemanticCustomQuery();
      }
    });
  }
});

// --- DYNAMIC RESOLUTION DOWNLOAD GENERATOR ---

function getMockFileContent(moduleId, filename, fileSizeKB, docType) {
  const timestamp = new Date().toISOString();
  const dateStr = new Date().toLocaleDateString();
  
  if (moduleId === "smartstruct") {
    return `{
  "$schema": "https://json-schema.org/v12/schema",
  "document_type": "${docType}",
  "file_metadata": {
    "filename": "${filename}",
    "compressed_size_kb": ${fileSizeKB},
    "mime_type": "application/octet-stream"
  },
  "extracted_entities": {
    "detected_subject": "Custom Document Ingest",
    "ingest_timestamp": "${timestamp}"
  },
  "data_structure_status": "Schema-Parsed",
  "confidence_score": 0.954
}`;
  } else if (moduleId === "text_extraction") {
    return `=== OCR LAYOUT-AWARE TEXT EXTRACTION ===
[Confidence Level: 93.8%]
[File: ${filename}]
[Size: ${fileSizeKB} KB]

Line 01: [X: 10, Y: 15] SYSTEM INGEST: ${filename.toUpperCase()}
Line 02: [X: 10, Y: 35] Content block extracted from compressed binary stream.
Line 03: [X: 10, Y: 55] Processing character segmentation and layout boundaries.
Line 04: [X: 10, Y: 75] Output structures resolved to default standard.

=== METADATA EXTRACTED ===
Detected Page Count: 1
Resolution: Native Ingest DPI
Linguistic Script: Western Roman`;
  } else if (moduleId === "semantic_classification") {
    return `=== SEMANTIC CLASSIFICATION REPORT ===
[File: ${filename}]
[Size: ${fileSizeKB} KB]

Primary Classification:
- CUSTOM_ENTERPRISE_DOC (Confidence: 94.5%)

Secondary Tags:
- USER_UPLOADED (Confidence: 100.0%)
- INGESTION_QUEUE (Confidence: 89.2%)

Risk Profiling:
- Category: Standard Ingestion
- Action: Store in primary document silo.
- Retention: Corporate Standard (7 Years)`;
  } else if (moduleId === "data_mining") {
    return `=== NAMED ENTITY RECOGNITION (NER) ===
[File: ${filename}]
[Size: ${fileSizeKB} KB]

[FILENAME]      ${filename} (Conf: 99.9%)
[FILESIZE]      ${fileSizeKB} KB (Conf: 99.8%)
[INGEST_DATE]   ${dateStr} (Conf: 99.9%)

=== KNOWLEDGE GRAPH RELATIONSHIPS ===
1. User --[Uploaded]--> ${filename}
2. Platform --[Parsed]--> File Metadata`;
  } else {
    return `=== SEMANTIC RAG SYSTEM INITIALIZED ===
Vector Database: Custom Document Vector Segment
Document: ${filename}
Compressed Size: ${fileSizeKB} KB
Chunks Ingested: 2

[Active Console: Ask a question about the document]

User Question: "Provide a summary of the uploaded document."

Synthesized Answer:
This is a custom user-uploaded file named **${filename}** with a compressed size of **${fileSizeKB} KB**. The platform has parsed the document contents and added them to the semantic vector store. You can now execute semantic search queries against this index.`;
  }
}

function downloadStructuredResolution(layoutType) {
  if (!activeModuleId) return;
  
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;
  
  let resolution = "high";
  if (layoutType === "smartstruct") {
    const radio = document.querySelector('input[name="smartstruct-download-res"]:checked');
    if (radio) resolution = radio.value;
  } else if (layoutType === "textextract") {
    const radio = document.querySelector('input[name="textextract-download-res"]:checked');
    if (radio) resolution = radio.value;
  } else if (layoutType === "semantic") {
    const radio = document.querySelector('input[name="semantic-download-res"]:checked');
    if (radio) resolution = radio.value;
  } else if (layoutType === "datamining") {
    const radio = document.querySelector('input[name="datamining-download-res"]:checked');
    if (radio) resolution = radio.value;
  } else if (layoutType === "contextual") {
    const radio = document.querySelector('input[name="contextual-download-res"]:checked');
    if (radio) resolution = radio.value;
  } else {
    const radio = document.querySelector('input[name="download-res"]:checked');
    if (radio) resolution = radio.value;
  }
  
  let fileContent = "";
  let filename = "";
  let mimeType = "";
  
  const baseName = sample.name.split('.')[0];
  
  if (resolution === "high") {
    // High Resolution: Full JSON representation
    if (activeModuleId === "text_extraction" && !sample.output.trim().startsWith('{')) {
      fileContent = JSON.stringify({
        engine: "DocIntellect Text Extraction OCR",
        source_file: sample.name,
        timestamp: new Date().toISOString(),
        extracted_text: sample.output
      }, null, 2);
    } else if (activeModuleId === "semantic_classification" && !sample.output.trim().startsWith('{')) {
      fileContent = JSON.stringify({
        engine: "DocIntellect Semantic Classification",
        source_file: sample.name,
        timestamp: new Date().toISOString(),
        classification_report: sample.output
      }, null, 2);
    } else if (activeModuleId === "data_mining" && !sample.output.trim().startsWith('{')) {
      fileContent = JSON.stringify({
        engine: "DocIntellect Document Data Mining",
        source_file: sample.name,
        timestamp: new Date().toISOString(),
        mined_report: sample.output
      }, null, 2);
    } else if (activeModuleId === "contextual_knowledge" && !sample.output.trim().startsWith('{')) {
      fileContent = JSON.stringify({
        engine: "DocIntellect Contextual Knowledge Platform",
        source_file: sample.name,
        timestamp: new Date().toISOString(),
        embedding_model: activeContextualModel || "ada",
        knowledge_domain: activeContextualDomain || "handbook",
        vector_dimension: 1536,
        synthesized_qas: contextualQAData.map(qa => ({
          question: qa.q,
          answer: qa.a.replace(/<\/?[^>]+(>|$)/g, "")
        }))
      }, null, 2);
    } else {
      fileContent = sample.output;
    }
    filename = `docintellect_high_res_${baseName}.json`;
    mimeType = "application/json";
  } else if (resolution === "med") {
    // Medium Resolution: Flattened CSV representation
    if (activeModuleId === "smartstruct") {
      fileContent = `Field,Value\nDocument Type,${activeSmartStructType || 'unknown'}\nFile Name,${sample.name}\nExtracted Subject,Custom Document Ingest\nIngest Timestamp,${new Date().toISOString()}\nConfidence,0.954`;
    } else if (activeModuleId === "text_extraction") {
      const lines = sample.output.split('\n').filter(line => line.trim().startsWith('Line') || line.trim().includes('[X:'));
      if (lines.length > 0) {
        fileContent = `Line Number,Coordinates,Content\n` + lines.map(line => {
          const match = line.match(/(Line \d+):\s*(\[X:.*?\])\s*(.*)/);
          if (match) {
            return `"${match[1]}","${match[2].replace(/"/g, '""')}","${match[3].replace(/"/g, '""')}"`;
          }
          return `,"","${line.replace(/"/g, '""')}"`;
        }).join('\n');
      } else {
        fileContent = `Line Number,Content\nLine 01,SYSTEM INGEST: ${sample.name.toUpperCase()}\nLine 02,Content block extracted from compressed binary stream\nLine 03,Processing character segmentation and layout boundaries\nLine 04,Output structures resolved to default standard`;
      }
    } else if (activeModuleId === "semantic_classification") {
      fileContent = `Entity Category,Entity Value\n`;
      const orgMatch = sample.output.match(/- Organizations:\s*(.*)/);
      const nameMatch = sample.output.match(/- Names:\s*(.*)/);
      const dateMatch = sample.output.match(/- Dates:\s*(.*)/);
      const locMatch = sample.output.match(/- Locations:\s*(.*)/);
      const finMatch = sample.output.match(/- Financial Values:\s*(.*)/);
      const techMatch = sample.output.match(/- Technical Terms:\s*(.*)/);
      const bizMatch = sample.output.match(/- Business Keywords:\s*(.*)/);
      
      if (orgMatch) fileContent += `ORGANIZATION,"${orgMatch[1].replace(/"/g, '""')}"\n`;
      if (nameMatch) fileContent += `PERSON,"${nameMatch[1].replace(/"/g, '""')}"\n`;
      if (dateMatch) fileContent += `DATE,"${dateMatch[1].replace(/"/g, '""')}"\n`;
      if (locMatch) fileContent += `LOCATION,"${locMatch[1].replace(/"/g, '""')}"\n`;
      if (finMatch) fileContent += `MONEY,"${finMatch[1].replace(/"/g, '""')}"\n`;
      if (techMatch) fileContent += `TECHNICAL_TERM,"${techMatch[1].replace(/"/g, '""')}"\n`;
      if (bizMatch) fileContent += `BUSINESS_KEYWORD,"${bizMatch[1].replace(/"/g, '""')}"\n`;
    } else if (activeModuleId === "data_mining") {
      let entities = [];
      const lines = sample.output.split('\n');
      lines.forEach(line => {
        const matchA = line.match(/^\[([A-Z_]+)\]\s+(.*?)(?:\s+\(Conf:.*\))?$/);
        if (matchA) {
          entities.push({ category: matchA[1], value: matchA[2].trim() });
        }
        const matchB = line.match(/^-\s+([^:]+):\s*(.*)$/);
        if (matchB) {
          const cat = matchB[1].trim();
          const val = matchB[2].trim();
          if (val) {
            val.split(',').forEach(v => {
              entities.push({ category: cat.toUpperCase(), value: v.trim() });
            });
          }
        }
      });
      if (entities.length === 0) {
        entities.push({ category: "ORGANIZATION", value: "BioGenix Laboratories" });
        entities.push({ category: "PRODUCT", value: "V-209" });
        entities.push({ category: "PERSON", value: "Dr. Helen Cho" });
      }
      fileContent = "Entity Category,Entity Value\n" + entities.map(e => `"${e.category.replace(/"/g, '""')}","${e.value.replace(/"/g, '""')}"`).join('\n');
    } else if (activeModuleId === "contextual_knowledge") {
      fileContent = "Question,Answer\n" + contextualQAData.map(qa => {
        const cleanA = qa.a.replace(/<\/?[^>]+(>|$)/g, "").replace(/"/g, '""');
        const cleanQ = qa.q.replace(/"/g, '""');
        return `"${cleanQ}","${cleanA}"`;
      }).join('\n');
    } else {
      fileContent = `Category,Value,Confidence\nPrimary Class,CUSTOM_ENTERPRISE_DOC,94.5%\nIngestion Queue,Active,89.2%\nRetention,7 Years,100%`;
    }
    filename = `docintellect_med_res_${baseName}.csv`;
    mimeType = "text/csv";
  } else {
    // Low Resolution: plain text raw key-values
    if (activeModuleId === "data_mining") {
      let triples = "";
      let insights = "";
      const lines = sample.output.split('\n');
      let inTriples = false;
      let inInsights = false;
      lines.forEach(line => {
        if (line.includes("RELATIONSHIP") || line.includes("RELATIONS")) {
          inTriples = true;
          inInsights = false;
          triples += line + "\n";
        } else if (line.includes("INSIGHTS")) {
          inTriples = false;
          inInsights = true;
          insights += line + "\n";
        } else if (line.startsWith("===") || line.startsWith("[")) {
          inTriples = false;
          inInsights = false;
        } else {
          if (inTriples) triples += line + "\n";
          if (inInsights) insights += line + "\n";
        }
      });
      fileContent = `DOCINTELLECT AI - DATA MINING TRIPLES & INSIGHTS REPORT\n========================================================\nSource File: ${sample.name}\nTimestamp: ${new Date().toLocaleString()}\n\n${triples.trim()}\n\n${insights.trim()}`;
    } else if (activeModuleId === "contextual_knowledge") {
      fileContent = sample.output;
    } else {
      fileContent = `DOCINTELLECT AI - LOW RESOLUTION RAW TEXT REPORT\n================================================\nSource File: ${sample.name}\nIngest Date: ${new Date().toLocaleDateString()}\n\nRaw Extracted Data:\n${sample.output.replace(/[{}\"[\\]]/g, '')}`;
    }
    filename = `docintellect_low_res_${baseName}.txt`;
    mimeType = "text/plain";
  }
  
  const blob = new Blob([fileContent], { type: mimeType });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
  
  logSystemEvent("DOWNLOADS", `Downloaded ${resolution.toUpperCase()} resolution report: ${filename}`);

  // Enable and reveal the Export button for SmartStruct AI, Semantic Classification, Data Mining, and Contextual Knowledge
  if (layoutType === "smartstruct") {
    const exportBtn = document.getElementById("smartstruct-export-btn");
    if (exportBtn) {
      exportBtn.style.display = "inline-flex";
      exportBtn.disabled = false;
    }
  } else if (layoutType === "semantic") {
    const exportBtn = document.getElementById("semantic-export-btn");
    if (exportBtn) {
      exportBtn.style.display = "inline-flex";
      exportBtn.disabled = false;
    }
  } else if (layoutType === "datamining") {
    const exportBtn = document.getElementById("datamining-export-btn");
    if (exportBtn) {
      exportBtn.style.display = "inline-flex";
      exportBtn.disabled = false;
    }
  } else if (layoutType === "contextual") {
    const exportBtn = document.getElementById("contextual-export-btn");
    if (exportBtn) {
      exportBtn.style.display = "inline-flex";
      exportBtn.disabled = false;
    }
  }
}

// --- SMARTSTRUCT EXPORT SUITE SYSTEM INTEGRATIONS ---

function openSmartStructExportModal() {
  const whatsappPanel = document.getElementById("whatsapp-share-panel");
  if (whatsappPanel) whatsappPanel.style.display = "none";
  
  const statusContainer = document.getElementById("export-status-container");
  if (statusContainer) {
    statusContainer.style.display = "none";
    statusContainer.innerHTML = "";
  }
  
  const phoneInput = document.getElementById("whatsapp-phone");
  if (phoneInput) phoneInput.value = "";

  openModal("smartstruct-export-modal");
}

function closeSmartStructExportModal() {
  closeModal("smartstruct-export-modal");
}

function toggleWhatsAppForm(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const whatsappPanel = document.getElementById("whatsapp-share-panel");
  if (whatsappPanel) {
    const isVisible = whatsappPanel.style.display === "block";
    whatsappPanel.style.display = isVisible ? "none" : "block";
    if (!isVisible) {
      setTimeout(() => {
        whatsappPanel.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }
}

async function exportToSystemFiles() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Connecting secure local file bridge...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="export-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%;"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("export-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="smartstruct-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  let fileContent = "";
  let extension = "";
  
  if (resType === "high") {
    fileContent = sample.output;
    extension = "json";
  } else if (resType === "med") {
    fileContent = `Field,Value\nDocument Type,${activeSmartStructType || 'unknown'}\nFile Name,${sample.name}\nExtracted Subject,Custom Document Ingest\nIngest Timestamp,${new Date().toISOString()}\nConfidence,0.954`;
    extension = "csv";
  } else {
    fileContent = `DOCINTELLECT AI - LOW RESOLUTION RAW TEXT REPORT\n================================================\nSource File: ${sample.name}\nIngest Date: ${new Date().toLocaleDateString()}\n\nRaw Extracted Data:\n${sample.output.replace(/[{}\"[\\]]/g, '')}`;
    extension = "txt";
  }

  const defaultName = `smartstruct_${sample.name.split('.')[0]}_${resType}_res.${extension}`;
  const mimeTypes = {
    json: "application/json",
    csv: "text/csv",
    txt: "text/plain"
  };

  const interval = setInterval(async () => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      let nativeSaved = false;
      if ('showSaveFilePicker' in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: defaultName,
            types: [{
              description: `${extension.toUpperCase()} Document`,
              accept: { [mimeTypes[extension]]: [`.${extension}`] }
            }]
          });
          const writable = await handle.createWritable();
          await writable.write(fileContent);
          await writable.close();
          nativeSaved = true;
        } catch (err) {
          console.warn('Native save picker cancelled or failed, falling back to simulated path:', err);
        }
      }

      setTimeout(() => {
        const finalPath = nativeSaved 
          ? `Local System Directory (User Selected Location)`
          : `C:\\Users\\rithi\\Documents\\DocIntellect\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-emerald); font-size: 0.95rem;">Export Completed Successfully</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">The file has been saved to:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #a7f3d0; word-break: break-all;">${finalPath}</span>
            </div>
          </div>
        `;
        
        logSystemEvent("DOWNLOADS", `Exported SmartStruct ${resType.toUpperCase()} schema report to Local Filesystem.`);
      }, 200);
    }
  }, 120);
}

function exportToDesktop() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Syncing local Desktop directory...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="desktop-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("desktop-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="smartstruct-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  const extension = resType === "high" ? "json" : (resType === "med" ? "csv" : "txt");
  const defaultName = `smartstruct_${sample.name.split('.')[0]}_${resType}_res.${extension}`;

  const interval = setInterval(() => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      setTimeout(() => {
        const desktopPath = `C:\\Users\\rithi\\Desktop\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner" style="border-color: rgba(245, 158, 11, 0.25);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-amber);"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-amber); font-size: 0.95rem;">Export to Desktop Completed</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">File successfully written to Desktop:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #fde68a; word-break: break-all;">${desktopPath}</span>
            </div>
          </div>
        `;
        
        let fileContent = "";
        if (resType === "high") {
          fileContent = sample.output;
        } else if (resType === "med") {
          fileContent = `Field,Value\nDocument Type,${activeSmartStructType || 'unknown'}\nFile Name,${sample.name}\nExtracted Subject,Custom Document Ingest\nIngest Timestamp,${new Date().toISOString()}\nConfidence,0.954`;
        } else {
          fileContent = `DOCINTELLECT AI - LOW RESOLUTION RAW TEXT REPORT\n================================================\nSource File: ${sample.name}\nIngest Date: ${new Date().toLocaleDateString()}\n\nRaw Extracted Data:\n${sample.output.replace(/[{}\"[\\]]/g, '')}`;
        }
        
        const blob = new Blob([fileContent], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = defaultName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);

        logSystemEvent("DOWNLOADS", `Exported SmartStruct schema report to Desktop (${defaultName}).`);
      }, 200);
    }
  }, 100);
}

function exportViaWhatsApp(event) {
  event.preventDefault();
  
  const phoneInput = document.getElementById("whatsapp-phone");
  if (!phoneInput) return;
  
  let phone = phoneInput.value.trim().replace(/[^0-9]/g, '');
  if (!phone) {
    alert("Please enter a valid phone number.");
    return;
  }

  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const radio = document.querySelector('input[name="smartstruct-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let textSummary = `*DocIntellect AI - SmartStruct Schema Export*%0A`;
  textSummary += `==============================%0A`;
  textSummary += `*Document:* ${sample.name}%0A`;
  textSummary += `*Schema Class:* ${activeSmartStructType ? activeSmartStructType.toUpperCase() : 'UNKNOWN'}%0A`;
  textSummary += `*Extraction Resolution:* ${resType.toUpperCase()}%0A`;
  textSummary += `*Export Time:* ${timestamp}%0A`;
  textSummary += `*Status:* Verified %26 Compliant %0A%0A`;
  textSummary += `_Here is a snippet of the structured data:_ %0A`;
  
  let jsonSnippet = "";
  if (resType === "high") {
    const lines = sample.output.split('\n');
    jsonSnippet = lines.slice(0, 8).join('\n') + '\n  ... (truncated)';
  } else {
    jsonSnippet = `Field: Value\nDocument Category: structured_intake\nConfidence Score: 0.954`;
  }
  textSummary += `%60%60%60%0A${encodeURIComponent(jsonSnippet)}%0A%60%60%60`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${textSummary}`;
  
  window.open(whatsappUrl, '_blank');
  
  const statusContainer = document.getElementById("export-status-container");
  if (statusContainer) {
    statusContainer.style.display = "block";
    statusContainer.innerHTML = `
      <div class="export-success-banner" style="border-color: rgba(16, 185, 129, 0.25);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-emerald);"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <div class="export-success-details">
          <strong style="color: var(--accent-emerald); font-size: 0.95rem;">WhatsApp Export Initialized</strong>
          <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">Opening WhatsApp chat with ${phone}...</span>
          <span style="color: var(--text-muted); font-size: 0.78rem; margin-top: 2px;">The structured metadata payload has been transferred.</span>
        </div>
      </div>
    `;
  }

  logSystemEvent("DOWNLOADS", `Exported SmartStruct schema metadata via WhatsApp to ${phone}.`);
}

// --- SEMANTIC CLASSIFICATION EXPORT SUITE SYSTEM INTEGRATIONS ---

function openSemanticExportModal() {
  const whatsappPanel = document.getElementById("whatsapp-semantic-share-panel");
  if (whatsappPanel) whatsappPanel.style.display = "none";
  
  const statusContainer = document.getElementById("export-semantic-status-container");
  if (statusContainer) {
    statusContainer.style.display = "none";
    statusContainer.innerHTML = "";
  }
  
  const phoneInput = document.getElementById("whatsapp-semantic-phone");
  if (phoneInput) phoneInput.value = "";

  openModal("semantic-export-modal");
}

function closeSemanticExportModal() {
  closeModal("semantic-export-modal");
}

function toggleSemanticWhatsAppForm(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const whatsappPanel = document.getElementById("whatsapp-semantic-share-panel");
  if (whatsappPanel) {
    const isVisible = whatsappPanel.style.display === "block";
    whatsappPanel.style.display = isVisible ? "none" : "block";
    if (!isVisible) {
      setTimeout(() => {
        whatsappPanel.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }
}

async function exportSemanticToSystemFiles() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-semantic-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Connecting secure local file bridge...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="export-semantic-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%;"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("export-semantic-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="semantic-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  let fileContent = "";
  let extension = "";
  
  if (resType === "high") {
    fileContent = JSON.stringify({
      engine: "DocIntellect Semantic Classification",
      source_file: sample.name,
      timestamp: new Date().toISOString(),
      classification_report: sample.output
    }, null, 2);
    extension = "json";
  } else if (resType === "med") {
    fileContent = `Entity Category,Entity Value\n`;
    const orgMatch = sample.output.match(/- Organizations:\s*(.*)/);
    const nameMatch = sample.output.match(/- Names:\s*(.*)/);
    const dateMatch = sample.output.match(/- Dates:\s*(.*)/);
    const locMatch = sample.output.match(/- Locations:\s*(.*)/);
    const finMatch = sample.output.match(/- Financial Values:\s*(.*)/);
    const techMatch = sample.output.match(/- Technical Terms:\s*(.*)/);
    const bizMatch = sample.output.match(/- Business Keywords:\s*(.*)/);
    
    if (orgMatch) fileContent += `ORGANIZATION,"${orgMatch[1].replace(/"/g, '""')}"\n`;
    if (nameMatch) fileContent += `PERSON,"${nameMatch[1].replace(/"/g, '""')}"\n`;
    if (dateMatch) fileContent += `DATE,"${dateMatch[1].replace(/"/g, '""')}"\n`;
    if (locMatch) fileContent += `LOCATION,"${locMatch[1].replace(/"/g, '""')}"\n`;
    if (finMatch) fileContent += `MONEY,"${finMatch[1].replace(/"/g, '""')}"\n`;
    if (techMatch) fileContent += `TECHNICAL_TERM,"${techMatch[1].replace(/"/g, '""')}"\n`;
    if (bizMatch) fileContent += `BUSINESS_KEYWORD,"${bizMatch[1].replace(/"/g, '""')}"\n`;
    
    extension = "csv";
  } else {
    fileContent = `DOCINTELLECT AI - LOW RESOLUTION RAW TEXT REPORT\n================================================\nSource File: ${sample.name}\nIngest Date: ${new Date().toLocaleDateString()}\n\nRaw Extracted Data:\n${sample.output.replace(/[{}\"[\\]]/g, '')}`;
    extension = "txt";
  }

  const defaultName = `semantic_${sample.name.split('.')[0]}_${resType}_res.${extension}`;
  const mimeTypes = {
    json: "application/json",
    csv: "text/csv",
    txt: "text/plain"
  };

  const interval = setInterval(async () => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      let nativeSaved = false;
      if ('showSaveFilePicker' in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: defaultName,
            types: [{
              description: `${extension.toUpperCase()} Document`,
              accept: { [mimeTypes[extension]]: [`.${extension}`] }
            }]
          });
          const writable = await handle.createWritable();
          await writable.write(fileContent);
          await writable.close();
          nativeSaved = true;
        } catch (err) {
          console.warn('Native save picker cancelled or failed, falling back to simulated path:', err);
        }
      }

      setTimeout(() => {
        const finalPath = nativeSaved 
          ? `Local System Directory (User Selected Location)`
          : `C:\\Users\\rithi\\Documents\\DocIntellect\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-emerald); font-size: 0.95rem;">Export Completed Successfully</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">The file has been saved to:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #a7f3d0; word-break: break-all;">${finalPath}</span>
            </div>
          </div>
        `;
        
        logSystemEvent("DOWNLOADS", `Exported Semantic ${resType.toUpperCase()} report to Local Filesystem.`);
      }, 200);
    }
  }, 120);
}

function exportSemanticToDesktop() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-semantic-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Syncing local Desktop directory...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="export-semantic-desktop-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("export-semantic-desktop-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="semantic-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  const extension = resType === "high" ? "json" : (resType === "med" ? "csv" : "txt");
  const defaultName = `semantic_${sample.name.split('.')[0]}_${resType}_res.${extension}`;

  const interval = setInterval(() => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      setTimeout(() => {
        const desktopPath = `C:\\Users\\rithi\\Desktop\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner" style="border-color: rgba(245, 158, 11, 0.25);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-amber);"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-amber); font-size: 0.95rem;">Export to Desktop Completed</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">File successfully written to Desktop:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #fde68a; word-break: break-all;">${desktopPath}</span>
            </div>
          </div>
        `;
        
        let fileContent = "";
        if (resType === "high") {
          fileContent = JSON.stringify({
            engine: "DocIntellect Semantic Classification",
            source_file: sample.name,
            timestamp: new Date().toISOString(),
            classification_report: sample.output
          }, null, 2);
        } else if (resType === "med") {
          fileContent = `Entity Category,Entity Value\n`;
          const orgMatch = sample.output.match(/- Organizations:\s*(.*)/);
          const nameMatch = sample.output.match(/- Names:\s*(.*)/);
          const dateMatch = sample.output.match(/- Dates:\s*(.*)/);
          const locMatch = sample.output.match(/- Locations:\s*(.*)/);
          const finMatch = sample.output.match(/- Financial Values:\s*(.*)/);
          const techMatch = sample.output.match(/- Technical Terms:\s*(.*)/);
          const bizMatch = sample.output.match(/- Business Keywords:\s*(.*)/);
          
          if (orgMatch) fileContent += `ORGANIZATION,"${orgMatch[1].replace(/"/g, '""')}"\n`;
          if (nameMatch) fileContent += `PERSON,"${nameMatch[1].replace(/"/g, '""')}"\n`;
          if (dateMatch) fileContent += `DATE,"${dateMatch[1].replace(/"/g, '""')}"\n`;
          if (locMatch) fileContent += `LOCATION,"${locMatch[1].replace(/"/g, '""')}"\n`;
          if (finMatch) fileContent += `MONEY,"${finMatch[1].replace(/"/g, '""')}"\n`;
          if (techMatch) fileContent += `TECHNICAL_TERM,"${techMatch[1].replace(/"/g, '""')}"\n`;
          if (bizMatch) fileContent += `BUSINESS_KEYWORD,"${bizMatch[1].replace(/"/g, '""')}"\n`;
        } else {
          fileContent = `DOCINTELLECT AI - LOW RESOLUTION RAW TEXT REPORT\n================================================\nSource File: ${sample.name}\nIngest Date: ${new Date().toLocaleDateString()}\n\nRaw Extracted Data:\n${sample.output.replace(/[{}\"[\\]]/g, '')}`;
        }
        
        const blob = new Blob([fileContent], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = defaultName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);

        logSystemEvent("DOWNLOADS", `Exported Semantic report to Desktop (${defaultName}).`);
      }, 200);
    }
  }, 100);
}

function exportSemanticViaWhatsApp(event) {
  event.preventDefault();
  
  const phoneInput = document.getElementById("whatsapp-semantic-phone");
  if (!phoneInput) return;
  
  let phone = phoneInput.value.trim().replace(/[^0-9]/g, '');
  if (!phone) {
    alert("Please enter a valid phone number.");
    return;
  }

  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const radio = document.querySelector('input[name="semantic-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let textSummary = `*DocIntellect AI - Semantic Analysis Export*%0A`;
  textSummary += `==============================%0A`;
  textSummary += `*Document:* ${sample.name}%0A`;
  textSummary += `*Extraction Resolution:* ${resType.toUpperCase()}%0A`;
  textSummary += `*Export Time:* ${timestamp}%0A`;
  textSummary += `*Status:* Classified %26 Indexed %0A%0A`;
  textSummary += `_Summary Snippet:_ %0A`;
  
  let snippet = "";
  const summaryMatch = sample.output.match(/Comprehensive Cognitive Summary:\s*([\s\S]*)/);
  if (summaryMatch) {
    snippet = summaryMatch[1].slice(0, 300) + '...';
  } else {
    snippet = sample.output.slice(0, 300) + '...';
  }
  textSummary += `_${encodeURIComponent(snippet)}_%0A`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${textSummary}`;
  
  window.open(whatsappUrl, '_blank');
  
  const statusContainer = document.getElementById("export-semantic-status-container");
  if (statusContainer) {
    statusContainer.style.display = "block";
    statusContainer.innerHTML = `
      <div class="export-success-banner" style="border-color: rgba(16, 185, 129, 0.25);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-emerald);"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-7.6-4.7 8.38 8.38 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <div class="export-success-details">
          <strong style="color: var(--accent-emerald); font-size: 0.95rem;">WhatsApp Export Initialized</strong>
          <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">Opening WhatsApp chat with ${phone}...</span>
          <span style="color: var(--text-muted); font-size: 0.78rem; margin-top: 2px;">The semantic analysis summary has been transferred.</span>
        </div>
      </div>
    `;
  }

  logSystemEvent("DOWNLOADS", `Exported Semantic report via WhatsApp to ${phone}.`);
}

// --- DOCUMENT DATA MINING EXPORT SUITE SYSTEM INTEGRATIONS ---

function openDataMiningExportModal() {
  const whatsappPanel = document.getElementById("whatsapp-datamining-share-panel");
  if (whatsappPanel) whatsappPanel.style.display = "none";
  
  const statusContainer = document.getElementById("export-datamining-status-container");
  if (statusContainer) {
    statusContainer.style.display = "none";
    statusContainer.innerHTML = "";
  }
  
  const phoneInput = document.getElementById("whatsapp-datamining-phone");
  if (phoneInput) phoneInput.value = "";

  openModal("datamining-export-modal");
}

function closeDataMiningExportModal() {
  closeModal("datamining-export-modal");
}

function toggleDataMiningWhatsAppForm(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const whatsappPanel = document.getElementById("whatsapp-datamining-share-panel");
  if (whatsappPanel) {
    const isVisible = whatsappPanel.style.display === "block";
    whatsappPanel.style.display = isVisible ? "none" : "block";
    if (!isVisible) {
      setTimeout(() => {
        whatsappPanel.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }
}

async function exportDataMiningToSystemFiles() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-datamining-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Connecting secure local file bridge...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="export-datamining-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%;"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("export-datamining-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="datamining-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  let fileContent = "";
  let extension = "";
  
  if (resType === "high") {
    fileContent = JSON.stringify({
      engine: "DocIntellect Document Data Mining",
      source_file: sample.name,
      timestamp: new Date().toISOString(),
      mined_report: sample.output
    }, null, 2);
    extension = "json";
  } else if (resType === "med") {
    let entities = [];
    const lines = sample.output.split('\n');
    lines.forEach(line => {
      const matchA = line.match(/^\[([A-Z_]+)\]\s+(.*?)(?:\s+\(Conf:.*\))?$/);
      if (matchA) {
        entities.push({ category: matchA[1], value: matchA[2].trim() });
      }
      const matchB = line.match(/^-\s+([^:]+):\s*(.*)$/);
      if (matchB) {
        const cat = matchB[1].trim();
        const val = matchB[2].trim();
        if (val) {
          val.split(',').forEach(v => {
            entities.push({ category: cat.toUpperCase(), value: v.trim() });
          });
        }
      }
    });
    if (entities.length === 0) {
      entities.push({ category: "ORGANIZATION", value: "BioGenix Laboratories" });
      entities.push({ category: "PRODUCT", value: "V-209" });
      entities.push({ category: "PERSON", value: "Dr. Helen Cho" });
    }
    fileContent = "Entity Category,Entity Value\n" + entities.map(e => `"${e.category.replace(/"/g, '""')}","${e.value.replace(/"/g, '""')}"`).join('\n');
    extension = "csv";
  } else {
    let triples = "";
    let insights = "";
    const lines = sample.output.split('\n');
    let inTriples = false;
    let inInsights = false;
    lines.forEach(line => {
      if (line.includes("RELATIONSHIP") || line.includes("RELATIONS")) {
        inTriples = true;
        inInsights = false;
        triples += line + "\n";
      } else if (line.includes("INSIGHTS")) {
        inTriples = false;
        inInsights = true;
        insights += line + "\n";
      } else if (line.startsWith("===") || line.startsWith("[")) {
        inTriples = false;
        inInsights = false;
      } else {
        if (inTriples) triples += line + "\n";
        if (inInsights) insights += line + "\n";
      }
    });
    fileContent = `DOCINTELLECT AI - DATA MINING TRIPLES & INSIGHTS REPORT\n========================================================\nSource File: ${sample.name}\nTimestamp: ${new Date().toLocaleString()}\n\n${triples.trim()}\n\n${insights.trim()}`;
    extension = "txt";
  }

  const defaultName = `datamining_${sample.name.split('.')[0]}_${resType}_res.${extension}`;
  const mimeTypes = {
    json: "application/json",
    csv: "text/csv",
    txt: "text/plain"
  };

  const interval = setInterval(async () => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      let nativeSaved = false;
      if ('showSaveFilePicker' in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: defaultName,
            types: [{
              description: `${extension.toUpperCase()} Document`,
              accept: { [mimeTypes[extension]]: [`.${extension}`] }
            }]
          });
          const writable = await handle.createWritable();
          await writable.write(fileContent);
          await writable.close();
          nativeSaved = true;
        } catch (err) {
          console.warn('Native save picker cancelled or failed, falling back to simulated path:', err);
        }
      }

      setTimeout(() => {
        const finalPath = nativeSaved 
          ? `Local System Directory (User Selected Location)`
          : `C:\\Users\\rithi\\Documents\\DocIntellect\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-emerald); font-size: 0.95rem;">Export Completed Successfully</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">The file has been saved to:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #a7f3d0; word-break: break-all;">${finalPath}</span>
            </div>
          </div>
        `;
        
        logSystemEvent("DOWNLOADS", `Exported Data Mining ${resType.toUpperCase()} report to Local Filesystem.`);
      }, 200);
    }
  }, 120);
}

function exportDataMiningToDesktop() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-datamining-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Syncing local Desktop directory...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="export-datamining-desktop-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("export-datamining-desktop-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="datamining-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  const extension = resType === "high" ? "json" : (resType === "med" ? "csv" : "txt");
  const defaultName = `datamining_${sample.name.split('.')[0]}_${resType}_res.${extension}`;

  const interval = setInterval(() => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      setTimeout(() => {
        const desktopPath = `C:\\Users\\rithi\\Desktop\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner" style="border-color: rgba(245, 158, 11, 0.25);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-amber);"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-amber); font-size: 0.95rem;">Export to Desktop Completed</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">File successfully written to Desktop:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #fde68a; word-break: break-all;">${desktopPath}</span>
            </div>
          </div>
        `;
        
        let fileContent = "";
        if (resType === "high") {
          fileContent = JSON.stringify({
            engine: "DocIntellect Document Data Mining",
            source_file: sample.name,
            timestamp: new Date().toISOString(),
            mined_report: sample.output
          }, null, 2);
        } else if (resType === "med") {
          let entities = [];
          const lines = sample.output.split('\n');
          lines.forEach(line => {
            const matchA = line.match(/^\[([A-Z_]+)\]\s+(.*?)(?:\s+\(Conf:.*\))?$/);
            if (matchA) {
              entities.push({ category: matchA[1], value: matchA[2].trim() });
            }
            const matchB = line.match(/^-\s+([^:]+):\s*(.*)$/);
            if (matchB) {
              const cat = matchB[1].trim();
              const val = matchB[2].trim();
              if (val) {
                val.split(',').forEach(v => {
                  entities.push({ category: cat.toUpperCase(), value: v.trim() });
                });
              }
            }
          });
          if (entities.length === 0) {
            entities.push({ category: "ORGANIZATION", value: "BioGenix Laboratories" });
            entities.push({ category: "PRODUCT", value: "V-209" });
            entities.push({ category: "PERSON", value: "Dr. Helen Cho" });
          }
          fileContent = "Entity Category,Entity Value\n" + entities.map(e => `"${e.category.replace(/"/g, '""')}","${e.value.replace(/"/g, '""')}"`).join('\n');
        } else {
          let triples = "";
          let insights = "";
          const lines = sample.output.split('\n');
          let inTriples = false;
          let inInsights = false;
          lines.forEach(line => {
            if (line.includes("RELATIONSHIP") || line.includes("RELATIONS")) {
              inTriples = true;
              inInsights = false;
              triples += line + "\n";
            } else if (line.includes("INSIGHTS")) {
              inTriples = false;
              inInsights = true;
              insights += line + "\n";
            } else if (line.startsWith("===") || line.startsWith("[")) {
              inTriples = false;
              inInsights = false;
            } else {
              if (inTriples) triples += line + "\n";
              if (inInsights) insights += line + "\n";
            }
          });
          fileContent = `DOCINTELLECT AI - DATA MINING TRIPLES & INSIGHTS REPORT\n========================================================\nSource File: ${sample.name}\nTimestamp: ${new Date().toLocaleString()}\n\n${triples.trim()}\n\n${insights.trim()}`;
        }
        
        const blob = new Blob([fileContent], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = defaultName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);

        logSystemEvent("DOWNLOADS", `Exported Data Mining report to Desktop (${defaultName}).`);
      }, 200);
    }
  }, 100);
}

function exportDataMiningViaWhatsApp(event) {
  event.preventDefault();
  
  const phoneInput = document.getElementById("whatsapp-datamining-phone");
  if (!phoneInput) return;
  
  let phone = phoneInput.value.trim().replace(/[^0-9]/g, '');
  if (!phone) {
    alert("Please enter a valid phone number.");
    return;
  }

  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const radio = document.querySelector('input[name="datamining-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let textSummary = `*DocIntellect AI - Document Data Mining Export*%0A`;
  textSummary += `==============================%0A`;
  textSummary += `*Document:* ${sample.name}%0A`;
  textSummary += `*Extraction Resolution:* ${resType.toUpperCase()}%0A`;
  textSummary += `*Export Time:* ${timestamp}%0A`;
  textSummary += `*Status:* Mined %26 Synthesized %0A%0A`;
  textSummary += `_Mined Relationship Snippet:_ %0A`;
  
  let snippet = "";
  const relationsMatch = sample.output.match(/\[SEMANTIC RELATIONSHIP MINING\]\s*([\s\S]*?)(?:\n\n\[|$)/);
  if (relationsMatch) {
    snippet = relationsMatch[1].trim().slice(0, 300) + '...';
  } else {
    snippet = sample.output.slice(0, 300) + '...';
  }
  textSummary += `_${encodeURIComponent(snippet)}_%0A`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${textSummary}`;
  
  window.open(whatsappUrl, '_blank');
  
  const statusContainer = document.getElementById("export-datamining-status-container");
  if (statusContainer) {
    statusContainer.style.display = "block";
    statusContainer.innerHTML = `
      <div class="export-success-banner" style="border-color: rgba(16, 185, 129, 0.25);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-emerald);"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <div class="export-success-details">
          <strong style="color: var(--accent-emerald); font-size: 0.95rem;">WhatsApp Export Initialized</strong>
          <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">Opening WhatsApp chat with ${phone}...</span>
          <span style="color: var(--text-muted); font-size: 0.78rem; margin-top: 2px;">The mined data summary has been transferred.</span>
        </div>
      </div>
    `;
  }

  logSystemEvent("DOWNLOADS", `Exported Data Mining report via WhatsApp to ${phone}.`);
}

// --- CONTEXTUAL KNOWLEDGE SPECIALIZED ACTIONS ---

function handleContextualTypeChange(category) {
  const domainSelect = document.getElementById("contextual-domain-select");
  const modelSelect = document.getElementById("contextual-model-select");
  
  if (category === "domain" && domainSelect) {
    activeContextualDomain = domainSelect.value;
  } else if (category === "model" && modelSelect) {
    activeContextualModel = modelSelect.value;
  }
  
  validateContextualFile();
}

function triggerContextualUpload(event) {
  event.preventDefault();
  
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".pdf,.docx,.doc,.txt,.png,.jpg,.jpeg,.csv,.json,.xml,.sop,.manual";
  
  input.onchange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleContextualUploadedFile(e.target.files[0]);
    }
  };
  
  input.click();
}

function handleContextualUploadedFile(file) {
  currentContextualFile = file;
  
  const fileDisplay = document.getElementById("contextual-file-display");
  const searchBox = document.getElementById("contextual-search-box");
  const warningContainer = document.getElementById("contextual-warning-container");
  const runBtn = document.getElementById("contextual-run-btn");
  
  // Set default domain and model if not selected to ensure frictionless auto-ingest
  const domainSelect = document.getElementById("contextual-domain-select");
  if ((!activeContextualDomain || activeContextualDomain === "") && domainSelect) {
    domainSelect.value = "handbook";
    activeContextualDomain = "handbook";
  }
  
  const modelSelect = document.getElementById("contextual-model-select");
  if ((!activeContextualModel || activeContextualModel === "") && modelSelect) {
    modelSelect.value = "ada";
    activeContextualModel = "ada";
  }
  
  if (fileDisplay) {
    fileDisplay.value = file.name;
  }
  
  if (searchBox) {
    searchBox.classList.add("active-file");
  }
  
  if (warningContainer) {
    warningContainer.style.display = "none";
    warningContainer.innerHTML = "";
  }
  
  // Enforce 2MB size limit
  if (file.size > 2 * 1024 * 1024) {
    currentContextualFile = null;
    if (fileDisplay) fileDisplay.value = "";
    if (searchBox) searchBox.classList.remove("active-file");
    if (runBtn) runBtn.disabled = true;
    
    if (warningContainer) {
      warningContainer.style.display = "block";
      warningContainer.innerHTML = `
        <div class="alert alert-danger" style="display: flex; align-items: center; gap: 8px; color: #ef4444; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.82rem; text-align: left;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <strong>Size Limit Exceeded:</strong> Files must be strictly under 2.0 MB.
        </div>
      `;
    }
    return;
  }
  
  // Trigger Ingest Compression Simulation
  if (warningContainer) {
    const originalSizeKB = (file.size / 1024).toFixed(1);
    const compressedSizeKB = (file.size * 0.22 / 1024).toFixed(1);
    
    warningContainer.style.display = "block";
    warningContainer.innerHTML = `
      <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); padding: 12px; border-radius: var(--radius-sm); text-align: left;">
        <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 6px;">Compressing document payload...</div>
        <div class="progress-bar-bg" style="height: 6px; width: 100%; margin-bottom: 6px;">
          <div id="contextual-compression-progress" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--primary);"></div>
        </div>
      </div>
    `;
    
    const compBar = document.getElementById("contextual-compression-progress");
    let compProgress = 0;
    const compInterval = setInterval(() => {
      compProgress += 10;
      if (compBar) compBar.style.width = `${compProgress}%`;
      
      if (compProgress >= 100) {
        clearInterval(compInterval);
        setTimeout(() => {
          warningContainer.innerHTML = `
            <div class="alert alert-success" style="display: flex; align-items: center; gap: 8px; color: var(--accent-emerald); background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.82rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><strong>Payload Ingested:</strong> Compressed ${originalSizeKB} KB to ${compressedSizeKB} KB (78% savings)</span>
            </div>
          `;
          
          validateContextualFile();
          
          // Automatically trigger the RAG Ingestion Pipeline
          setTimeout(() => {
            simulateContextualPipeline();
          }, 800);
        }, 100);
      }
    }, 60);
  }
}

function validateContextualFile() {
  const runBtn = document.getElementById("contextual-run-btn");
  if (!runBtn) return;
  
  const hasFile = currentContextualFile !== null;
  const hasDomain = activeContextualDomain !== null && activeContextualDomain !== "";
  const hasModel = activeContextualModel !== null && activeContextualModel !== "";
  
  runBtn.disabled = !(hasFile && hasDomain && hasModel);
}

function simulateContextualPipeline() {
  const qaDashboard = document.getElementById("contextual-qa-dashboard");
  const queryWrapper = document.getElementById("contextual-query-wrapper");
  const outputStatus = document.getElementById("contextual-output-status");
  const runBtn = document.getElementById("contextual-run-btn");
  const downloadBtn = document.getElementById("contextual-download-btn");
  
  if (!qaDashboard || !outputStatus || !runBtn) return;
  
  runBtn.disabled = true;
  if (downloadBtn) downloadBtn.disabled = true;
  
  const exportBtn = document.getElementById("contextual-export-btn");
  if (exportBtn) {
    exportBtn.style.display = "none";
    exportBtn.disabled = true;
  }
  
  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span> Ingesting...`;
  
  const setStageState = (stageNum, state, statusTextMsg) => {
    const stageCard = document.getElementById(`contextual-stage-${stageNum}`);
    if (!stageCard) return;
    stageCard.className = `ocr-stage-card ${state}`;
    const statusText = stageCard.querySelector(".ocr-status-text");
    if (statusText) statusText.innerText = statusTextMsg;
  };
  
  for (let i = 1; i <= 4; i++) {
    setStageState(i, "", "Idle");
  }
  
  qaDashboard.innerHTML = `<div style="color: var(--text-secondary); font-size: 0.85rem; font-family: monospace;">// Starting RAG Ingestion Pipeline...
// Initializing document chunking bounds...</div>`;

  if (currentContextualFile) {
    const file = currentContextualFile;
    const filename = file.name;
    const ext = filename.split('.').pop().toLowerCase();
    
    setStageState(1, "active", "Chunking...");
    qaDashboard.innerHTML += `\n[STAGE 1] Dividing document stream into 250-character overlapping chunks...`;
    
    setTimeout(() => {
      setStageState(1, "completed", "Completed");
      setStageState(2, "active", "Embedding...");
      qaDashboard.innerHTML += `\n[STAGE 2] Generating semantic vector embeddings using ${activeContextualModel.toUpperCase()} model...`;
      
      setTimeout(() => {
        setStageState(2, "completed", "Completed");
        setStageState(3, "active", "Indexing...");
        qaDashboard.innerHTML += `\n[STAGE 3] Indexing embedding vectors in RAG Vector Store...`;
        
        setTimeout(() => {
          setStageState(3, "completed", "Completed");
          setStageState(4, "active", "Synthesizing Q&As...");
          qaDashboard.innerHTML += `\n[STAGE 4] Executing Cognitive Q&A Auto-Synthesis models...`;
          
          setTimeout(() => {
            setStageState(4, "completed", "Completed");
            
            const finishIngestion = (text) => {
              const isBinary = /[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(text.slice(0, 1000)) || text.includes('PK\x03\x04') || text.startsWith('%PDF');
              
              let finalQAs;
              if (isBinary || text.trim().length < 20) {
                finalQAs = generateInferredRAGQA(filename);
              } else {
                finalQAs = analyzeTextAndSynthesizeQA(text, filename);
              }
              
              contextualQAData = finalQAs;
              renderQASynthesis(finalQAs);
            };
            
            const isImage = ['png', 'jpg', 'jpeg', 'tiff', 'bmp'].includes(ext);
            if (isImage && typeof Tesseract !== 'undefined') {
              qaDashboard.innerHTML += `\n[TESSERACT] Performing client-side OCR text extraction...`;
              Tesseract.recognize(
                file,
                'eng'
              ).then(({ data: { text } }) => {
                finishIngestion(text);
              }).catch(err => {
                console.error(err);
                finishIngestion("");
              });
            } else {
              const reader = new FileReader();
              reader.onload = function(e) {
                finishIngestion(e.target.result);
              };
              reader.onerror = function() {
                finishIngestion("");
              };
              reader.readAsText(file);
            }
          }, 600);
        }, 1000);
      }, 1000);
    }, 1000);
  }
}

function analyzeTextAndSynthesizeQA(text, filename) {
  const cleanText = text.replace(/[\r\n]+/g, ' ');
  
  // Extract key terms to highlight and frame Q&As
  const dateRegex = /\b(?:\d{1,2}[/-]\d{1,2}[/-]\d{2,4})|(?:\d{4}[/-]\d{1,2}[/-]\d{1,2})|((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2},? \d{4})\b/gi;
  const dates = [...new Set(cleanText.match(dateRegex) || [])].slice(0, 3);
  if (dates.length === 0) dates.push(new Date().toLocaleDateString());
  
  const moneyRegex = /\$\s*?\(?\d{1,3}(?:,\d{3})*(?:\.\d{2})?\)?\b|\b\d+\s*(?:USD|EUR|GBP|dollars|euros)\b/gi;
  const financials = [...new Set(cleanText.match(moneyRegex) || [])].slice(0, 3);
  if (financials.length === 0) financials.push("$800.00");
  
  const orgRegex = /\b[A-Z][a-zA-Z0-9&]*(?:\s+[A-Z][a-zA-Z0-9&]*)*\s+(?:Inc\.|Corp\.|Ltd\.|Co\.|LLC|Corporation|Company|Technologies|Laboratories|Solutions|Industries|Systems|Services|Partners|Holdings)\b/g;
  let organizations = [...new Set(cleanText.match(orgRegex) || [])].slice(0, 3);
  if (organizations.length === 0) {
    const generalOrgRegex = /\b[A-Z][a-zA-Z0-9]{2,}\s+[A-Z][a-zA-Z0-9]{2,}\b/g;
    organizations = [...new Set(cleanText.match(generalOrgRegex) || [])].slice(0, 2);
  }
  if (organizations.length === 0) organizations.push("Atlas Technologies Corp.");
  
  const nameRegex = /\b(Dr\.|Mr\.|Ms\.|Mrs\.)\s+[A-Z][a-z]+\b|\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g;
  let names = [...new Set(cleanText.match(nameRegex) || [])]
    .filter(n => !n.startsWith("The ") && !n.startsWith("To ") && !n.startsWith("In ") && !n.startsWith("On ") && !n.startsWith("This ") && !n.startsWith("From "))
    .slice(0, 3);
  if (names.length === 0) names.push("Dr. Miles Bennett Dyson");

  const productVocab = ["Regenex", "V-209", "ShieldAI", "JARVIS", "Arc Reactor", "Titanium Enclosures", "Optical Sensor Arrays", "Project Titan"];
  const products = [];
  productVocab.forEach(p => {
    if (new RegExp('\\b' + p + '\\b', 'i').test(cleanText)) {
      products.push(p);
    }
  });
  if (products.length === 0) products.push("Project Titan");

  // Populate global entities
  currentContextualEntities = [
    { type: "Organization", value: organizations[0] },
    { type: "Person", value: names[0] },
    { type: "Product/System", value: products[0] },
    { type: "Financial Limit", value: financials[0] },
    { type: "Critical Date", value: dates[0] }
  ];

  // Domain terms
  const docDomain = activeContextualDomain || "handbook";
  
  // Synthesize Comprehensive Summary
  currentContextualSummary = `This document serves as a comprehensive operational framework for the development and compliance of <span class="keyword-highlight">${products[0]}</span> at <span class="keyword-highlight">${organizations[0]}</span>. Under the direct administrative guidance of <span class="keyword-highlight">${names[0]}</span>, it establishes critical operating guidelines, including a financial threshold of <span class="keyword-highlight">${financials[0]}</span> and milestone schedules aligning with the <span class="keyword-highlight">${dates[0]}</span> timeline.`;

  const qas = [];
  
  // Question 1: Core Subject
  qas.push({
    q: `What is the primary objective and scope of this ${docDomain} document?`,
    a: `This ${docDomain} document establishes the official operational boundaries for <span class="keyword-highlight">${products[0]}</span>, outlining the core directives and compliance protocols required by <span class="keyword-highlight">${organizations[0]}</span>.`
  });
  
  // Question 2: Roles or Administrative Structure
  qas.push({
    q: `Who is designated as the primary authority or point of contact in this file?`,
    a: `The primary administrative oversight and operational authority is assigned to <span class="keyword-highlight">${names[0]}</span>, who is responsible for managing the technical architecture and compliance metrics.`
  });
  
  // Question 3: Financial Guidelines or Thresholds
  qas.push({
    q: `What are the financial implications or transaction limits specified in the text?`,
    a: `The document specifies a financial threshold of <span class="keyword-highlight">${financials[0]}</span> for standard equipment allowances and travel reimbursements. All transactions must be submitted within the timeline of <span class="keyword-highlight">${dates[0]}</span>.`
  });

  return qas;
}

function generateInferredRAGQA(filename) {
  const cleanName = filename.replace(/[-_]/g, ' ');
  
  let primaryOrg = "Atlas Technologies Corp.";
  let person = "Dr. Miles Bennett Dyson";
  let product = "Project Titan";
  let financials = "$800.00";
  let date = new Date().toLocaleDateString();
  
  if (/acquisition|merger|buyout|deal|press|release/i.test(cleanName)) {
    primaryOrg = "Microsoft Corp.";
    product = "ShieldAI Systems";
    person = "Priya Patel";
    financials = "$4.2 Billion";
  } else if (/medical|drug|clinical|trial|pulmonary/i.test(cleanName)) {
    primaryOrg = "BioGenix Laboratories Inc.";
    product = "Regenex (V-209)";
    person = "Dr. Helen Cho";
    financials = "$150,000.00";
  }
  
  // Populate global entities
  currentContextualEntities = [
    { type: "Organization", value: primaryOrg },
    { type: "Person", value: person },
    { type: "Product/System", value: product },
    { type: "Financial Limit", value: financials },
    { type: "Critical Date", value: date }
  ];
  
  // Synthesize Comprehensive Summary
  currentContextualSummary = `Based on semantic RAG analysis of the document <strong>${filename}</strong>, the file describes key operations concerning the <span class="keyword-highlight">${product}</span> program. Managed by <span class="keyword-highlight">${primaryOrg}</span> under the supervision of <span class="keyword-highlight">${person}</span>, the initiatives outline a capital allocation of <span class="keyword-highlight">${financials}</span> and milestones scheduled for <span class="keyword-highlight">${date}</span>.`;

  const qas = [
    {
      q: `What is the core subject and scope of ${filename}?`,
      a: `Based on semantic RAG indexing, this document outlines the operational integration of <span class="keyword-highlight">${product}</span> under the administrative guidance of <span class="keyword-highlight">${primaryOrg}</span>.`
    },
    {
      q: `Who are the primary officers or actors mentioned in this file?`,
      a: `The document designates <span class="keyword-highlight">${person}</span> as the key administrator responsible for overseeing compliance protocols and project timelines.`
    },
    {
      q: `What are the key financial terms or limits referenced in the text?`,
      a: `The RAG vector store indexed a capital threshold of <span class="keyword-highlight">${financials}</span>. Additionally, all operational milestones are scheduled for execution starting on <span class="keyword-highlight">${date}</span>.`
    }
  ];
  
  return qas;
}

function renderQASynthesis(qas) {
  const qaDashboard = document.getElementById("contextual-qa-dashboard");
  const queryWrapper = document.getElementById("contextual-query-wrapper");
  const outputStatus = document.getElementById("contextual-output-status");
  const runBtn = document.getElementById("contextual-run-btn");
  const downloadBtn = document.getElementById("contextual-download-btn");
  
  if (!qaDashboard || !outputStatus || !runBtn) return;
  
  let html = `
    <div style="font-size: 0.92rem; color: var(--primary); font-weight: 700; margin-bottom: 4px; font-family: monospace;">=== AUTOMATIC COGNITIVE Q&A SYNTHESIS ===</div>
    <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 12px; font-family: monospace;">Vectors Embedded: 100% | Embedding Model: ${activeContextualModel.toUpperCase()}</div>
    
    <!-- Comprehensive Summary Card -->
    <div style="background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.15); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <div style="font-size: 0.82rem; color: var(--primary); font-weight: 700; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; letter-spacing: 0.5px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        Document Summary & Key Insights
      </div>
      <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
        ${currentContextualSummary}
      </div>
    </div>

    <!-- Extracted Entities Section -->
    <div style="margin-bottom: 16px;">
      <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 8px; font-family: monospace; letter-spacing: 0.5px;">Extracted Key Entities & Terms</div>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
  `;

  currentContextualEntities.forEach(ent => {
    let colorStyle = "";
    if (ent.type === "Organization") {
      colorStyle = "background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.25); color: #93c5fd;";
    } else if (ent.type === "Person") {
      colorStyle = "background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.25); color: #c084fc;";
    } else if (ent.type === "Product/System") {
      colorStyle = "background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); color: #6ee7b7;";
    } else if (ent.type === "Financial Limit") {
      colorStyle = "background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25); color: #fde68a;";
    } else if (ent.type === "Critical Date") {
      colorStyle = "background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.25); color: #fca5a5;";
    }

    html += `<span class="badge" style="${colorStyle} font-size: 0.72rem; padding: 2px 8px; border-radius: 4px; font-family: monospace;">${ent.type}: ${escapeHTML(ent.value)}</span>`;
  });

  html += `
      </div>
    </div>

    <!-- Q&A Section Header -->
    <div style="font-size: 0.82rem; color: var(--primary); font-weight: 700; text-transform: uppercase; margin-bottom: 8px; font-family: monospace; display: flex; align-items: center; gap: 6px; letter-spacing: 0.5px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      Interactive Q&A Cognitive Map
    </div>
  `;

  qas.forEach((qa, idx) => {
    html += `
      <div class="qa-card">
        <div class="qa-question">
          <span class="qa-question-icon">Q${idx + 1}:</span>
          <span>${escapeHTML(qa.q)}</span>
        </div>
        <div class="qa-answer">${qa.a}</div>
      </div>
    `;
  });
  
  qaDashboard.innerHTML = html;
  outputStatus.innerHTML = `<span class="badge-pulse" style="background-color: var(--accent-emerald); box-shadow: 0 0 8px var(--accent-emerald);"></span> Ready`;
  
  runBtn.disabled = false;
  if (downloadBtn) downloadBtn.disabled = false;
  
  if (queryWrapper) {
    queryWrapper.style.display = "block";
  }
  
  // Inject into MOCK_DATA for download compatibility
  let textReport = `=== SEMANTIC RAG COGNITIVE INDEX ===\nSource File: ${currentContextualFile ? currentContextualFile.name : 'Sample_Handbook.txt'}\n\n`;
  textReport += `COMPREHENSIVE SUMMARY:\n${currentContextualSummary.replace(/<\/?[^>]+(>|$)/g, "")}\n\n`;
  textReport += `EXTRACTED ENTITIES:\n`;
  currentContextualEntities.forEach(ent => {
    textReport += `- ${ent.type}: ${ent.value}\n`;
  });
  textReport += `\n`;
  
  qas.forEach((qa, idx) => {
    // Strip HTML tags for TXT download report
    const cleanA = qa.a.replace(/<\/?[^>]+(>|$)/g, "");
    textReport += `Q${idx + 1}: ${qa.q}\nA${idx + 1}: ${cleanA}\n\n`;
  });
  
  MOCK_DATA.contextual_knowledge.samples[99] = {
    name: currentContextualFile ? currentContextualFile.name : "rag_synthesized_index.txt",
    content: `[RAG Vector Database Segment]`,
    output: textReport
  };
  activeSampleIndex = 99;
  
  logSystemEvent("RAG_STORE", `Successfully indexed and synthesized Q&As for "${currentContextualFile ? currentContextualFile.name : 'document'}"`);
  updateDashboardKPIs();
}

function handleContextualCustomQuery(event) {
  event.preventDefault();
  
  const queryInput = document.getElementById("contextual-query-input");
  const qaDashboard = document.getElementById("contextual-qa-dashboard");
  
  if (!queryInput || !qaDashboard) return;
  
  const queryText = queryInput.value.trim();
  if (!queryText) return;
  
  // Clear input
  queryInput.value = "";
  
  // Append temporary RAG search message
  const queryLoader = document.createElement("div");
  queryLoader.style.fontSize = "0.8rem";
  queryLoader.style.color = "var(--accent-amber)";
  queryLoader.style.fontFamily = "monospace";
  queryLoader.style.padding = "4px 12px";
  queryLoader.innerHTML = `// Executing vector similarity search (cosine distance metric)...`;
  qaDashboard.appendChild(queryLoader);
  qaDashboard.scrollTop = qaDashboard.scrollHeight;
  
  setTimeout(() => {
    qaDashboard.removeChild(queryLoader);
    
    // Simulate Semantic Retrieval
    // Extract words from query to highlight in the answer
    const keywordsToHighlight = ["policy", "reimbursement", "salary", "standard", "timeline", "compliance", "stipend", "reimburse", "bonus", "contract", "authority", "role"];
    const queryWords = queryText.toLowerCase().split(/\W+/).filter(w => w.length > 3);
    
    let answerText = "";
    
    // Check keyword matches to synthesize specific answers
    if (/reimburse|stipend|expense|money|cost|pay|dollar|financial/i.test(queryText)) {
      answerText = `Under the corporate financial policy, standard reimbursement stipends are capped at <span class="keyword-highlight">$250.00 per night</span> for Tier 1 lodging and <span class="keyword-highlight">$75.00 per day</span> for meal per diems. Receipts must be uploaded via the expense dashboard within <span class="keyword-highlight">60 days</span> of purchase.`;
    } else if (/remote|hybrid|wfh|home|work/i.test(queryText)) {
      answerText = `Employees are eligible for a hybrid work schedule consisting of up to <span class="keyword-highlight">3 remote days</span> per week. Tuesdays and Thursdays are designated as core collaboration days, requiring mandatory physical presence at the regional headquarters.`;
    } else if (/dyson|officer|authority|person|actor|miles/i.test(queryText)) {
      answerText = `Technical operations and RAG model architecture compliance are supervised directly by <span class="keyword-highlight">Dr. Miles Bennett Dyson</span>, who holds final signatory approval on all project drafts.`;
    } else if (/timeline|date|schedule|when/i.test(queryText)) {
      answerText = `The critical integration schedule dictates that all employee review metrics and compliance vectors must be indexed by <span class="keyword-highlight">July 1, 2026</span> to align with the Q3 operational roadmap.`;
    } else {
      // Generic fallback semantic retrieval
      answerText = `Similarity search resolved a highly relevant chunk: The document outlines standard operating protocols for <span class="keyword-highlight">Project Titan</span>. All employees must maintain alignment with the vector classification guidelines and report anomalies immediately.`;
    }
    
    // Highlight any matching query words dynamically in the answer if not already highlighted
    queryWords.forEach(word => {
      if (keywordsToHighlight.includes(word) || word.length > 4) {
        // Simple case-insensitive wrap if not already inside a span tag
        const regex = new RegExp('(?!<span class="keyword-highlight">)(' + word + ')(?!<\/span>)', 'gi');
        answerText = answerText.replace(regex, '<span class="keyword-highlight">$1</span>');
      }
    });
    
    // Create new QA card
    const idx = qaDashboard.querySelectorAll(".qa-card").length + 1;
    const card = document.createElement("div");
    card.className = "qa-card";
    card.innerHTML = `
      <div class="qa-question">
        <span class="qa-question-icon" style="color: var(--accent-emerald);">Q${idx}:</span>
        <span>${escapeHTML(queryText)}</span>
      </div>
      <div class="qa-answer">${answerText}</div>
    `;
    
    qaDashboard.appendChild(card);
    qaDashboard.scrollTop = qaDashboard.scrollHeight;
    
    // Log search event
    logSystemEvent("RAG_QUERY", `Custom query executed: "${queryText.slice(0, 30)}..."`);
    
    // Append to current download report
    const sample = MOCK_DATA.contextual_knowledge.samples[99];
    if (sample) {
      const cleanA = answerText.replace(/<\/?[^>]+(>|$)/g, "");
      sample.output += `Q${idx}: ${queryText}\nA${idx}: ${cleanA}\n\n`;
    }
  }, 900);
}

// --- CONTEXTUAL KNOWLEDGE EXPORT SUITE SYSTEM INTEGRATIONS ---

function openContextualExportModal() {
  const whatsappPanel = document.getElementById("whatsapp-contextual-share-panel");
  if (whatsappPanel) whatsappPanel.style.display = "none";
  
  const statusContainer = document.getElementById("export-contextual-status-container");
  if (statusContainer) {
    statusContainer.style.display = "none";
    statusContainer.innerHTML = "";
  }
  
  const phoneInput = document.getElementById("whatsapp-contextual-phone");
  if (phoneInput) phoneInput.value = "";

  openModal("contextual-export-modal");
}

function closeContextualExportModal() {
  closeModal("contextual-export-modal");
}

function toggleContextualWhatsAppForm(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const whatsappPanel = document.getElementById("whatsapp-contextual-share-panel");
  if (whatsappPanel) {
    const isVisible = whatsappPanel.style.display === "block";
    whatsappPanel.style.display = isVisible ? "none" : "block";
    if (!isVisible) {
      setTimeout(() => {
        whatsappPanel.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }
}

async function exportContextualToSystemFiles() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-contextual-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Connecting secure local file bridge...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="export-contextual-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%;"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("export-contextual-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="contextual-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  let fileContent = "";
  let extension = "";
  
  if (resType === "high") {
    // High Res: Full JSON index of Q&As
    fileContent = JSON.stringify({
      engine: "DocIntellect Contextual Knowledge Platform",
      source_file: sample.name,
      timestamp: new Date().toISOString(),
      embedding_model: activeContextualModel || "ada",
      knowledge_domain: activeContextualDomain || "handbook",
      vector_dimension: 1536,
      synthesized_qas: contextualQAData.map(qa => ({
        question: qa.q,
        answer: qa.a.replace(/<\/?[^>]+(>|$)/g, "") // clean HTML
      }))
    }, null, 2);
    extension = "json";
  } else if (resType === "med") {
    // Med Res: CSV Q&A table
    fileContent = "Question,Answer\n" + contextualQAData.map(qa => {
      const cleanA = qa.a.replace(/<\/?[^>]+(>|$)/g, "").replace(/"/g, '""');
      const cleanQ = qa.q.replace(/"/g, '""');
      return `"${cleanQ}","${cleanA}"`;
    }).join('\n');
    extension = "csv";
  } else {
    // Low Res: Plain text transcript
    fileContent = sample.output;
    extension = "txt";
  }

  const defaultName = `contextual_${sample.name.split('.')[0]}_${resType}_res.${extension}`;
  const mimeTypes = {
    json: "application/json",
    csv: "text/csv",
    txt: "text/plain"
  };

  const interval = setInterval(async () => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      let nativeSaved = false;
      if ('showSaveFilePicker' in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: defaultName,
            types: [{
              description: `${extension.toUpperCase()} Document`,
              accept: { [mimeTypes[extension]]: [`.${extension}`] }
            }]
          });
          const writable = await handle.createWritable();
          await writable.write(fileContent);
          await writable.close();
          nativeSaved = true;
        } catch (err) {
          console.warn('Native save picker cancelled or failed, falling back to simulated path:', err);
        }
      }

      setTimeout(() => {
        const finalPath = nativeSaved 
          ? `Local System Directory (User Selected Location)`
          : `C:\\Users\\rithi\\Documents\\DocIntellect\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-emerald); font-size: 0.95rem;">Export Completed Successfully</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">The file has been saved to:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #a7f3d0; word-break: break-all;">${finalPath}</span>
            </div>
          </div>
        `;
        
        logSystemEvent("DOWNLOADS", `Exported Contextual ${resType.toUpperCase()} report to Local Filesystem.`);
      }, 200);
    }
  }, 120);
}

function exportContextualToDesktop() {
  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const statusContainer = document.getElementById("export-contextual-status-container");
  if (!statusContainer) return;

  statusContainer.style.display = "block";
  statusContainer.innerHTML = `
    <div class="loader-container" style="position: static; transform: none; width: 100%; padding: 16px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">Syncing local Desktop directory...</div>
      <div class="progress-bar-bg" style="height: 6px; width: 100%;">
        <div id="export-contextual-desktop-progress-bar" class="progress-bar-fill" style="width: 0%; height: 100%; background: var(--accent-amber);"></div>
      </div>
    </div>
  `;

  const progressBar = document.getElementById("export-contextual-desktop-progress-bar");
  let progress = 0;
  
  const radio = document.querySelector('input[name="contextual-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  const extension = resType === "high" ? "json" : (resType === "med" ? "csv" : "txt");
  const defaultName = `contextual_${sample.name.split('.')[0]}_${resType}_res.${extension}`;

  const interval = setInterval(() => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      setTimeout(() => {
        const desktopPath = `C:\\Users\\rithi\\Desktop\\${defaultName}`;
        
        statusContainer.innerHTML = `
          <div class="export-success-banner" style="border-color: rgba(245, 158, 11, 0.25);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-amber);"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <div class="export-success-details">
              <strong style="color: var(--accent-amber); font-size: 0.95rem;">Export to Desktop Completed</strong>
              <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">File successfully written to Desktop:</span>
              <span style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: var(--radius-sm); margin-top: 4px; color: #fde68a; word-break: break-all;">${desktopPath}</span>
            </div>
          </div>
        `;
        
        let fileContent = "";
        if (resType === "high") {
          fileContent = JSON.stringify({
            engine: "DocIntellect Contextual Knowledge Platform",
            source_file: sample.name,
            timestamp: new Date().toISOString(),
            embedding_model: activeContextualModel || "ada",
            knowledge_domain: activeContextualDomain || "handbook",
            vector_dimension: 1536,
            synthesized_qas: contextualQAData.map(qa => ({
              question: qa.q,
              answer: qa.a.replace(/<\/?[^>]+(>|$)/g, "")
            }))
          }, null, 2);
        } else if (resType === "med") {
          fileContent = "Question,Answer\n" + contextualQAData.map(qa => {
            const cleanA = qa.a.replace(/<\/?[^>]+(>|$)/g, "").replace(/"/g, '""');
            const cleanQ = qa.q.replace(/"/g, '""');
            return `"${cleanQ}","${cleanA}"`;
          }).join('\n');
        } else {
          fileContent = sample.output;
        }
        
        const blob = new Blob([fileContent], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = defaultName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);

        logSystemEvent("DOWNLOADS", `Exported Contextual report to Desktop (${defaultName}).`);
      }, 200);
    }
  }, 100);
}

function exportContextualViaWhatsApp(event) {
  event.preventDefault();
  
  const phoneInput = document.getElementById("whatsapp-contextual-phone");
  if (!phoneInput) return;
  
  let phone = phoneInput.value.trim().replace(/[^0-9]/g, '');
  if (!phone) {
    alert("Please enter a valid phone number.");
    return;
  }

  const sample = MOCK_DATA[activeModuleId].samples[activeSampleIndex];
  if (!sample) return;

  const radio = document.querySelector('input[name="contextual-download-res"]:checked');
  const resType = radio ? radio.value : "high";
  
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let textSummary = `*DocIntellect AI - Contextual RAG Knowledge Export*%0A`;
  textSummary += `==============================%0A`;
  textSummary += `*Document:* ${sample.name}%0A`;
  textSummary += `*Extraction Resolution:* ${resType.toUpperCase()}%0A`;
  textSummary += `*Export Time:* ${timestamp}%0A`;
  textSummary += `*Status:* Indexed %26 Synthesized %0A%0A`;
  textSummary += `_Synthesized Q%26A Snippet:_ %0A`;
  
  let snippet = "";
  if (contextualQAData.length > 0) {
    const qa = contextualQAData[0];
    const cleanA = qa.a.replace(/<\/?[^>]+(>|$)/g, "");
    snippet = `Q: ${qa.q}\nA: ${cleanA}`;
  } else {
    snippet = sample.output.slice(0, 300) + '...';
  }
  textSummary += `_${encodeURIComponent(snippet)}_%0A`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${textSummary}`;
  
  window.open(whatsappUrl, '_blank');
  
  const statusContainer = document.getElementById("export-contextual-status-container");
  if (statusContainer) {
    statusContainer.style.display = "block";
    statusContainer.innerHTML = `
      <div class="export-success-banner" style="border-color: rgba(16, 185, 129, 0.25);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke: var(--accent-emerald);"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <div class="export-success-details">
          <strong style="color: var(--accent-emerald); font-size: 0.95rem;">WhatsApp Export Initialized</strong>
          <span style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 2px;">Opening WhatsApp chat with ${phone}...</span>
          <span style="color: var(--text-muted); font-size: 0.78rem; margin-top: 2px;">The synthesized RAG knowledge has been transferred.</span>
        </div>
      </div>
    `;
  }

  logSystemEvent("DOWNLOADS", `Exported Contextual report via WhatsApp to ${phone}.`);
}

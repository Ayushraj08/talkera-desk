# Talkera Desk - Codebase Audit (Task 0)

Date: 30 October 2026  
Status: Read-Only Audit (No code modified)

---

## 1. Routes Inventory

The site contains **23 static page routes** and **2 Cloudflare Pages Functions API routes**:

### Static Pages (`src/pages/`)
| # | Route | Source File | Description / Purpose |
|---|---|---|---|
| 1 | `/` | `src/pages/index.astro` | Home page |
| 2 | `/about` | `src/pages/about.astro` | Company facts, leadership, origins, DRUVA GROUP |
| 3 | `/accessibility` | `src/pages/accessibility.astro` | WCAG 2.2 AA accessibility statement |
| 4 | `/ai-and-recording` | `src/pages/ai-and-recording.astro` | AI disclosure, call recording notices, compliance |
| 5 | `/cancellation` | `src/pages/cancellation.astro` | Cancellation and 30-day data retention policy |
| 6 | `/compare` | `src/pages/compare.astro` | Competitor market comparison table |
| 7 | `/cookies` | `src/pages/cookies.astro` | Cookie policy (cookieless analytics notice) |
| 8 | `/demo` | `src/pages/demo.astro` | Recorded test calls & video walkthrough demo page |
| 9 | `/dpa` | `src/pages/dpa.astro` | Data Processing Addendum (GDPR/UK DPA/DPDP) |
| 10 | `/faq` | `src/pages/faq.astro` | Frequently asked questions |
| 11 | `/how-it-works` | `src/pages/how-it-works.astro` | 3-day onboarding, architecture, workflow |
| 12 | `/integrations` | `src/pages/integrations.astro` | Calendar, CRM, webhook integrations status |
| 13 | `/legal` | `src/pages/legal.astro` | Legal entity, Udyam registration, GSTIN, governance |
| 14 | `/plumbing-hvac-electrical` | `src/pages/plumbing-hvac-electrical.astro` | Trade vertical page for plumbing, HVAC, electrical |
| 15 | `/pricing` | `src/pages/pricing.astro` | Public fee schedule, plan cards, add-ons, PlanFinder |
| 16 | `/privacy` | `src/pages/privacy.astro` | Privacy policy & international data transfers |
| 17 | `/sub-processors` | `src/pages/sub-processors.astro` | Infrastructure & sub-processor entity list |
| 18 | `/terms` | `src/pages/terms.astro` | Master service terms, billing pulse, allowances |
| 19 | `/water-damage-restoration` | `src/pages/water-damage-restoration.astro` | Restoration vertical emergency dispatch page |
| 20 | `/guides` | `src/pages/guides/index.astro` | Educational guide hub |
| 21 | `/guides/ai-receptionist-vs-answering-service-vs-hiring` | `src/pages/guides/ai-receptionist-vs-answering-service-vs-hiring.astro` | Guide article |
| 22 | `/guides/how-much-does-a-missed-call-cost-a-restoration-company` | `src/pages/guides/how-much-does-a-missed-call-cost-a-restoration-company.astro` | Guide article |
| 23 | `/guides/ten-questions-to-ask-before-you-sign-with-any-ai-receptionist` | `src/pages/guides/ten-questions-to-ask-before-you-sign-with-any-ai-receptionist.astro` | Guide article |

### API Functions (`functions/api/`)
- `/api/event` (`functions/api/event.ts`) - Telemetry / event collection endpoint
- `/api/lead` (`functions/api/lead.ts`) - Form submission endpoint

---

## 2. File Holding Plan Names, Prices, and Plan Data

### Primary Single Source of Truth
- **`content/pricing.json`** (`file:///c:/mini-project/talkera-desk/content/pricing.json`)
  - Holds `plans`: Pay As You Go (`payg`), Core (`core`), Growth (`growth`), Command (`command`).
  - Holds plan fees, included minutes, setup fees, concurrent calls, message allowances, retention days, add-ons list, pulse settings (`pulseSeconds: 60`, `freeUnderSeconds: 10`), SLA terms.
  - Read directly by:
    - `src/pages/pricing.astro`
    - `src/components/pricing/PlanFinder.astro`
    - `src/components/home/PricingGlance.astro`

### Secondary / Consumer Files Holding Hardcoded or Mirrored Plan Data
- `content/faq.json`: references Pay As You Go, Core, Growth, Command fees and retention days.
- `src/components/pricing/PlanFinder.astro`: internal calculator array mapping `payg`, `core`, `growth`, `command` with fees and rates.
- `src/components/home/StatPillars.astro`: interactive calculator referencing `payg`, `starter` ($293), `pro`, `growth`.
- `src/pages/terms.astro`: lines 40, 46 detailing billing pulses, extra minute rates ($0.60), and text quotas (Core 600, Growth 1,500, Command 3,500).
- `src/pages/privacy.astro`: line 48 audio/transcript retention days (Pay As You Go 15, Core 30, Growth 45, Command 60).
- `src/pages/water-damage-restoration.astro`: line 133 mentions Core ($293/mo) and Growth ($563/mo).
- `src/pages/guides/ten-questions-to-ask-before-you-sign-with-any-ai-receptionist.astro`: line 91 mentions Pay As You Go (1), Core (2), Growth (5), Command (8).
- `src/pages/guides/how-much-does-a-missed-call-cost-a-restoration-company.astro`: line 108 mentions Pay As You Go ($59) and Core ($293).
- `src/pages/guides/ai-receptionist-vs-answering-service-vs-hiring.astro`: line 105 mentions Pay As You Go ($59/mo, $0.60/min) and bundled plans $293 to $1,292/mo.

---

## 3. Targeted Strings Audit

Every file containing any of: `Regent`, `getregent`, `team@`, the rupee sign (`₹`), `INR`, `Starter`, `Core`, `Command`, `setup fee`, `rollover`:

| Search Term | Found In Files | Context / Notes |
|---|---|---|
| **Regent** | `docs/spec.md` (lines 165, 197, 318, 528, 675) | Spec documentation only. None found in site code (`src/**`, `content/**`, `public/**`). |
| **getregent** | `docs/spec.md` (lines 165, 197) | Spec documentation only. None found in site code. |
| **team@** | `scripts/lint-content.ts` (line 13)<br>`docs/spec.md` (lines 165, 197) | Banned pattern in lint script (`team@talkeradesk.com`). None in source copy. |
| **Rupee sign (`₹`)** | **None** across entire repository. | 0 occurrences. |
| **INR** | `docs/spec.md` (lines 11, 96, 158, 165, 197)<br>`package-lock.json` (hash line 3264) | 0 occurrences in source code or content. |
| **Starter** | `src/components/home/StatPillars.astro` (lines 170, 245, 246, 350, 352, 362, 364, 369, 415, 424, 485)<br>`docs/spec.md` (lines 66, 165, 179, 197) | Old plan name used in the Home revenue calculator. |
| **Core** | `content/pricing.json` (lines 44, 45)<br>`content/faq.json` (lines 17, 83)<br>`src/pages/pricing.astro` (line 198)<br>`src/pages/terms.astro` (line 46; also line 100 as "core software")<br>`src/pages/privacy.astro` (line 48; also line 56 as "core engineering")<br>`src/pages/water-damage-restoration.astro` (line 133)<br>`src/pages/guides/ten-questions-to-ask-before-you-sign-with-any-ai-receptionist.astro` (line 91)<br>`src/pages/guides/how-much-does-a-missed-call-cost-a-restoration-company.astro` (line 108)<br>`src/components/pricing/PlanFinder.astro` (lines 108, 122, 191, 303)<br>`docs/spec.md` (lines 136, 165, 179, 197, 642)<br>`package-lock.json` (internal package names: `@shikijs/core`, `is-core-module`, `micromark-core-commonmark`) | Old plan name in pricing, faq, terms, guides, and PlanFinder. |
| **Command** | `content/pricing.json` (lines 99, 100)<br>`content/faq.json` (lines 17, 83)<br>`src/pages/pricing.astro` (line 198)<br>`src/pages/terms.astro` (line 46)<br>`src/pages/privacy.astro` (line 48)<br>`src/pages/guides/ten-questions-to-ask-before-you-sign-with-any-ai-receptionist.astro` (line 91)<br>`src/components/pricing/PlanFinder.astro` (lines 86, 116, 305)<br>`src/pages/demo.astro` (line 61: "Command Bar" UI component)<br>`src/components/home/DemoAudioPlayer.astro` (line 11: "Command Bar" UI component)<br>`docs/spec.md` (lines 165, 179, 197)<br>`package-lock.json` (package `commander`) | Old plan name in pricing, faq, terms, guides, and PlanFinder. |
| **setup fee** | `content/pricing.json` (lines 23, 50, 77, 105: `setupFee` keys)<br>`content/faq.json` (line 59: "$99 one-time setup")<br>`src/pages/pricing.astro` (lines 90-91: `Setup (One-Time)` row)<br>`src/pages/cancellation.astro` (line 30: "zero setup fees")<br>`src/components/home/PricingGlance.astro` (line 120: "No setup fee")<br>`docs/spec.md` (lines 29, 90, 95, 107, 109, 116, 165, 191, 197, 222, 352, 360, 377, 711) | Setup fee references in pricing data, pricing table, FAQ, and cancellation. |
| **rollover** | `content/pricing.json` (lines 9, 67, 95, 123: `rolloverPct` and feature bullets)<br>`src/pages/pricing.astro` (lines 176, 195, 198: 20% Minute Rollover explainer block)<br>`src/pages/terms.astro` (line 43: Rollover policy clause)<br>`src/components/home/PricingGlance.astro` (line 134: 20% Rollover bullet)<br>`docs/spec.md` (lines 90, 95, 165, 179, 191, 197) | Rollover policy mentioned in pricing data, pricing explainer, terms, and homepage glance. |

---

## 4. Word Count of Each Page

The following counts represent the rendered visible text on each built page (excluding header navigation and footer):

| Route | Source File | Current Words (Main) | Target Budget / Status | Status vs Budget |
|---|---|---|---|---|
| `/` | `src/pages/index.astro` | 1,411 | Up to 450 words | Exceeds budget (Task 4 will reduce to 7 sections) |
| `/pricing` | `src/pages/pricing.astro` | 883 | Up to 350 words + table | To be streamlined in Task 2 |
| `/compare` | `src/pages/compare.astro` | 1,592 | Up to 250 words | To be replaced in Task 5 with U3 table & 3 lines |
| `/how-it-works` | `src/pages/how-it-works.astro` | 950 | Up to 200 words | To be streamlined in Task 5 to 3 steps & 3-day line |
| `/faq` | `src/pages/faq.astro` | 1,087 | Each FAQ answer up to 40 words | To be replaced in Task 5 with 10 questions |
| `/about` | `src/pages/about.astro` | 550 | Company (Do not touch) | Untouched per Golden Rules |
| `/demo` | `src/pages/demo.astro` | 1,157 | Under 150 words (non-list) | Clean list format + audio player |
| `/integrations` | `src/pages/integrations.astro` | 374 | Under 150 words (non-list) | Status list |
| `/water-damage-restoration` | `src/pages/water-damage-restoration.astro` | 413 | Under 150 words (non-list) | Trade vertical |
| `/plumbing-hvac-electrical` | `src/pages/plumbing-hvac-electrical.astro` | 353 | Under 150 words (non-list) | Trade vertical |
| `/legal` | `src/pages/legal.astro` | 297 | Legal (Do not touch) | Untouched per Golden Rules |
| `/terms` | `src/pages/terms.astro` | 1,170 | Legal (Do not touch) | Numbers-only edit in Task 6 |
| `/privacy` | `src/pages/privacy.astro` | 368 | Legal (Do not touch) | Numbers-only edit in Task 6 |
| `/cancellation` | `src/pages/cancellation.astro` | 354 | Legal (Do not touch) | Numbers-only edit in Task 6 |
| `/cookies` | `src/pages/cookies.astro` | 179 | Legal (Do not touch) | Untouched per Golden Rules |
| `/ai-and-recording` | `src/pages/ai-and-recording.astro` | 321 | Legal (Do not touch) | Untouched per Golden Rules |
| `/dpa` | `src/pages/dpa.astro` | 372 | Legal (Do not touch) | Untouched per Golden Rules |
| `/sub-processors` | `src/pages/sub-processors.astro` | 210 | Legal (Do not touch) | Untouched per Golden Rules |
| `/accessibility` | `src/pages/accessibility.astro` | 194 | Legal (Do not touch) | Untouched per Golden Rules |
| `/guides` | `src/pages/guides/index.astro` | 200 | SEO Guide Hub | Untouched |
| `/guides/ai-receptionist-vs-answering-service-vs-hiring` | `src/pages/guides/ai-receptionist-vs-answering-service-vs-hiring.astro` | 468 | Guide Article | Untouched |
| `/guides/how-much-does-a-missed-call-cost-a-restoration-company` | `src/pages/guides/how-much-does-a-missed-call-cost-a-restoration-company.astro` | 511 | Guide Article | Untouched |
| `/guides/ten-questions-to-ask-before-you-sign-with-any-ai-receptionist` | `src/pages/guides/ten-questions-to-ask-before-you-sign-with-any-ai-receptionist.astro` | 568 | Guide Article | Untouched |

---

## 5. Demo Button Verification

**Confirmation: The demo button plays a recorded audio demonstration and does NOT ring a live line.**

### Verification Evidence:
1. **Button Destination:**
   - In `src/layouts/MainLayout.astro` (header navigation and mobile bottom bar), the primary CTA is `<a href="/demo">Hear it work</a>`.
   - In `src/components/home/HeroStage.astro`, the button links to `<a href="#demos">Hear it work</a>`.
2. **Demo Implementation:**
   - On `/demo` and on `#demos` via `src/components/home/DemoAudioPlayer.astro`, the player loads pre-recorded audio files defined in `content/demos.json`:
     - `/demos/burst-pipe-restoration-us.mp3`
     - `/demos/boiler-breakdown-uk.mp3`
     - `/demos/ac-compressor-failure-us.mp3`
     - `/demos/sewer-backup-emergency-us.mp3`
     - `/demos/sub-panel-burning-smell-us.mp3`
     - `/demos/hot-water-burst-australia.mp3`
     - `/demos/emergency-storm-burst-us.mp3`
     - `/demos/flashing-furnace-lockout-canada.mp3`
   - Playback is handled entirely client-side via HTML5 audio / simulated state in `DemoAudioPlayer.astro`.
   - The card displays the mandatory disclosure: *"Recorded test call. AI answering for a sample business."*
   - There is no telephony dialer, WebRTC live outbound call, or live phone line trigger attached to any demo button.

---

## 6. Current Home Page Sections in Order with Word Counts

Currently, `src/pages/index.astro` renders the following sections in order:

| Section # | Component | Heading / Identifier | Word Count | Description / Role |
|---|---|---|---|---|
| **1** | `<HeroStage />` | *"AI receptionist that answers every call, 24/7."* | 235 words | Hero banner, eyebrow pill ("Turning missed calls into business"), subhead, trust chips, CTAs ("Hear it work", "Book a 15 min call"), simulated inbound call card. |
| **2** | `<StatPillars />` | *"A voicemail is not a booked job."* | 400 words | Sourced industry statistics (85% never call back, 62% unanswered, $1,200 avg job) + interactive missed-call revenue calculator with plan deduction logic. |
| **3** | `<TimelineThreeDays />` | *"Up to 3 days to live"* | 173 words | 3-day done-for-you delivery timeline (Day 1: Information Gathering & Scaffolding, Day 2: Prompt Logic & Tool Tuning, Day 3: Testing & Go-Live). |
| **4** | `<DualPhoneStage />` | *"The call is the start. Talkera Desk keeps everyone updated until the job is done."* | 222 words | Dual iPhone mockup showcasing visual call triage, instant calendar sync, and SMS updates to caller & technician. |
| **5** | `<PricingGlance />` | *"Pricing at a glance"* | 313 words | Pricing teaser with 4 plan cards, dated rate sentence, and 60-second pulse / SLA policy highlights. |
| **6** | Static Banner | *(No heading)* | 8 words | Single line: `"Serving the US, UK, Canada, Australia and India"`. |
| **7** | `<FinalCta />` | *"Ready to turn every missed call into a booked job?"* | 60 words | Final call-to-action block with "Hear it work" and "Book a 15 min call" buttons. |

**Current Home Total:** **1,411 words** across the 7 existing sections.

*(Note: Additional available components in `src/components/home/` include `FounderTransparency.astro` [182 words], `BuiltForYou.astro`, `CallMatrix.astro`, `ComparePreview.astro`, `DemoAudioPlayer.astro`, `FaqSection.astro`, `HomeHub.astro`, `ToolsMarquee.astro`, and `WhoItsFor.astro`.)*

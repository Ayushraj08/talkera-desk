# Talkera Desk Website Development Plan (final v1)

# Update pack for the live site (24 Oct 2026)

**Read this first. It wins over everything below it.** The site is live at https://www.talkeradesk.com/. The legacy Vercel preview hostname is not canonical and must redirect to the www domain. Change only what this pack names. The older spec's Part D (the heavy design direction) is not used, except the anti-slop rules in U6.

## U1. Five rules

1. **Minimal.** Visitors see only what helps them decide. Models: mulya.co, xflowpay.com, infinityapp.in, wise.com: one promise, three proofs, a clear price, one next step. Word budgets: Home up to 450 words, Pricing up to 350 plus the table, Compare up to 250, How it works up to 200, each FAQ answer up to 40 words. No paragraph above three lines. Detail lives behind a link or an accordion, never in the way.
2. **Touch only what is named.** Anything not listed in U4 stays exactly as built: layout, copy, colours, fonts, spacing, animations, legal wording. If unsure, leave it and report it.
3. **USD only.** No rupee sign, no INR, no rupee conversions anywhere (site, doc, schema, meta).
4. **Numerology scope.** Every price, included-minute count, message allowance, per-minute rate and add-on price below adds up to 5 when its digits are summed to one digit (95 is 9+5=14, 1+4=5). Retention days (15, 30, 45, 60, your choice, exempt from the rule), counts of things (calls at once, numbers, locations, changes), time units (60-second pulse, 72 hours, 3 days) and percentages stay natural. Do not show digit sums on the site.
5. **Margin** target: 50% in every case. This price list does not meet it yet: the estimated worst case is about 5% to 24% (see the margin check in U2). Re-run the cost model before publishing.

## U2. Final pricing (USD)

|  | Pay As You Go | Growth | Pro | Expansion | Custom |
| --- | --- | --- | --- | --- | --- |
| Monthly fee | **$0.59 a minute, $95 minimum** | **$383** | **$581** | **$950** | quoted |
| Included minutes | pay as you use | 743 | 1,292 | 1,994 | 5,000 and up |
| Per-minute price (fee ÷ minutes) | $0.59 | $0.516 | $0.450 | $0.476 | quoted |
| Extra minutes | $0.59 | $0.50 | $0.50 | $0.41 | quoted |
| Messages included a month | 104 | 1,040 | 1,670 | 2,750 | quoted |
| Calls at the same time | 1 | 3 | 5 | 8 | quoted |
| Numbers / locations | 1 / 1 | 2 / 2 | 3 / 3 | 5 / 5 | quoted |
| Recordings and transcripts kept | 15 days | 30 days | 45 days | 60 days | up to 60 days |
| Changes to your agent a month | 0 | 2 | 4 | 8 | quoted |
| Reviews | call log | weekly review | weekly review, monthly call | named manager, call every two weeks | quoted |
| Setup fee | none | none | none | none | quoted |

Per-minute prices: Growth $0.516, Pro $0.450, Expansion $0.476. Pro works out cheaper per minute than Expansion, so never write that the per-minute price falls at every step. \[DECIDE: this breaks the earlier rule that the rate falls as plans rise.\] Everything is one price: the agent, the phone number, the calls, texts and WhatsApp alerts (up to the allowance), the calendar or CRM connection, and upkeep. No separate bill for the number, the texts or the set-up.

**Pay As You Go, $0.59 a minute with a $95 monthly minimum.** For low or unpredictable volume. The minimum keeps your number, your agent and your alerts on and covers our fixed costs, so you never need to cancel for a quiet month. Move to a bundle at renewal. Pay As You Go has no reviews or changes.

**Which plan is cheapest, by minutes a month (checked: at each switch the two plans cost the same)**

| Minutes | Cheapest plan | Check |
| --- | --- | --- |
| Up to 649 | Pay As You Go | 0.59 x 649 = $382.91, just under Growth at $383 |
| 650 to 1,139 | Growth | 383 + 0.50 x (1,139 - 743) = $581 = Pro |
| 1,140 to 2,194 | Pro | 581 + 0.50 x (2,194 - 1,292) = $1,032 = 950 + 0.41 x (2,194 - 1,994) |
| 2,195 to 5,000 | Expansion | n/a |
| Above 5,000, or more than 8 calls at once | Custom | n/a |

**Add-ons:** extra number $5 a month; extra location $23 a month; extra call at the same time $23 a month; connection to a supported tool $59 one time (custom connections quoted); extra change to your agent $50 each; extra texts $0.05 each, WhatsApp $0.023 each; outbound callbacks at the extra-minute rate. Anything not listed in your plan or here is quoted and approved in writing first. Unused minutes do not carry over; for a quiet month use Pay As You Go.

**More callers than your plan allows, in plain words (use this on the site).** *Each caller gets their own agent. Your plan answers up to a set number of callers at once. If one more rings, they get an instant text and a call back, free. If that happens often, add an extra call at the same time for $23 a month.*

**Pulse:** billing is in 60-second blocks, so a started minute counts as a minute. Calls under 10 seconds are free.

**Margin check (worst case in policy = standard voice stack, every included minute used, messages at the allowance, 15% spam and test minutes, 10% buffer, 3% forex, 18% GST, all costs rising together, minus the 3.54% card fee; before income tax and owner pay)**

|  | Pay As You Go | Growth | Pro | Expansion |
| --- | --- | --- | --- | --- |
| Worst case (estimate) | about 5% | about 24% | about 18% | about 22% |
| Expected case | to be re-run | to be re-run | to be re-run | to be re-run |

Extra minutes at $0.59, $0.50 and $0.41 earn about 47%, 38% and 25% in the worst case. These are estimates worked back from the earlier margin table, not a fresh cost run. Assumptions: standard stack is Retell voice platform, ElevenLabs Flash voice, GPT-5.4 mini and US telephony; premium voices or models are Custom only. Worst-case cost is $0.294 a minute plus fixed costs; expected cost is $0.246 a minute.

**Where this table comes from.** Your draft (Pay As You Go $0.55 a minute with a $95 minimum, Growth $383 for 750 minutes, Pro $581 for 1,300, Expansion $945 for 2,000, extra minutes $0.55, $0.50 and $0.45) with only the smallest nudges so every number adds up to 5: $0.55 to $0.59, 750 to 743, 1,300 to 1,292, $945 to $950, 2,000 to 1,994, $0.45 to $0.41. Standby and Burst are removed because the draft had neither. Known issues you chose to keep for now: margins are far below your 50% target (see the estimates above), and Pro works out cheaper per minute than Expansion.

## U3. Compare, and why the price is higher (keep it to one table and three lines)

|  | **Talkera Desk** | Frontdesk | FirstCall AI | Voco (UK) | Smith.ai (AI-first) |
| --- | --- | --- | --- | --- | --- |
| Entry price | Pay As You Go $0.59 a minute, $95 monthly minimum | $99 a month ($79 billed annually), 200 minutes, 100 chats, 400 texts | $49 a month, 200 minutes, 1 agent | 39p a minute, no monthly fee. Starter £49 for about 136 minutes | Free for 25 calls a month. Pro $150 for 75 calls |
| Bigger plans | Growth $383 for 743 minutes, Pro $581 for 1,292, Expansion $950 for 1,994 | Custom after the one plan | Pro $99 for 500 minutes, Business $249 for 1,500 | £99 for 300 minutes, £499 for 1,719 | Enterprise $500 for 300 calls |
| Extra minutes | $0.59, $0.50 or $0.41 by plan | $0.25 a minute | Not stated | 36p, 33p or 29p by plan | Billed per call, not per minute: $2.50 on Pro, $2.17 on Enterprise |
| Texts and WhatsApp alerts | In the price, up to the allowance | 400 texts in the price, more billed from credits | Not stated | Texts and WhatsApp replies on every plan | Not stated |
| Set-up | We build it for you in up to 3 days, no fee | Not stated for this plan | Not stated | Free | Pro: you set it up with their help. Enterprise: they build it |
| A person reviews your calls | Yes, by plan | Not stated | Not stated | Not stated | Enterprise: human quality control |
| Free trial | None. Start with Pay As You Go | 7 days | Not stated | Not stated for phone plans | Free plan with 25 calls |
| Contract | None | Not stated | Not stated | None | Not stated |

Why our per-minute price is higher, in plain words under the table: on their own pages FirstCall AI works out to roughly $0.17 to $0.25 per included minute, Frontdesk about $0.50 with chat, texts and a CRM bundled, and Voco 39p, each for what that page describes. At Talkera Desk the one price also covers the agent built around your workflow in up to 3 days, the phone number and the calls, texts and WhatsApp alerts to you and your crew up to your plan's allowance, the connection to your tools, upkeep and fixes, and a person who reviews your calls. Where a competitor's page does not say it includes one of these, write "Not stated" and never "No". Small print under the table: "Prices from each company's own pricing page, checked 23 Oct 2026." Re-check each price before publishing and each quarter after. Names as plain text, never logos.

**Three lines under the table (the only persuasion on the page):**

1. We are not the cheapest per minute, and we say so. If a $99 tool does what you need, buy it.
2. Cheaper per minute is not cheaper per booked job. Your price covers a build around your workflow, the number, texts and WhatsApp alerts, the tool connection, upkeep and a person who reviews your calls.
3. Many tools sell the agent first and add the rest later. Check what any price really covers.

What competitors "don't provide" is only claimed where their page does not state it; write "not stated", never "no".

## U4. What to keep, change, add and remove on the live site

| Page | Keep exactly as built | Change | Add | Remove |
| --- | --- | --- | --- | --- |
| Home | Logo, header, Both buttons, call card and its animation, colours, fonts, footer | Eyebrow pill text becomes "Turning missed calls into business". Pricing teaser shows Pay As You Go, Growth, Pro, Expansion with U2 fees. Button label follows what it does (U5) | One small line: "Serving the US, UK, Canada, Australia and India" | Every section beyond the seven below; the revenue calculator on Home (it lives on Pricing); paragraphs over three lines; second call-to-action rows |
| Pricing | Page shell, styles, plan finder component | Plan data to U2; plan finder formulas below; average job size slider starts at $200 and defaults to $200 (top $10,000, number box takes any value); policies move into one six-row accordion (Cancel, Fixes, Storage, Calls at once, Billing pulse, Not listed) | Calls-at-once explainer (U2); a link to Compare | Old plan names and prices; setup fee rows; rollover; every rupee mention; long policy paragraphs |
| Compare | Route and styling | Content becomes the U3 table and three lines | Nothing | Everything else on the page |
| How it works | Visuals | Cut to three steps and the 3-day line | Nothing | Extra paragraphs |
| FAQ | Accordion component | Ten questions from U5 | Nothing | Other questions |
| Demo, Industries, Integrations | Everything | Any price or plan mention to U2 | Nothing | Anything over 150 words a page that is not a list |
| About, Legal, Terms, Privacy, Cookies, AI notice, DPA, Sub-processors, Accessibility, Cancellation | **Do not touch** | Only: retention days (15, 30, 45, 60), extra-minute rates, message allowances, no Standby or burst, no setup fee, no rollover; email and domain to talkeradesk.com; delete any rupee text; show the GSTIN where the site still says GST is pending | Nothing | Nothing |
| Whole site | Analytics, forms, fonts, animations | Domain, canonical, sitemap, robots, social preview, structured data (U7) | Nothing | Anything with INR or the rupee sign |

**Home, the seven sections in order:** 1 Hero. 2 Three proof facts (one line each). 3 How it works (three steps: we build it in up to 3 days; every call is answered, booked and texted; we review and fix). 4 Everyone stays in the loop (one phone visual, no paragraph). 5 Pricing teaser. 6 Trust row (registration number, GSTIN, a verify link). 7 Final call to action.

**Hero wording (decided 30 Oct 2026).** H1: AI receptionist that answers every call, 24/7. Subhead: Talkera Desk is an AI receptionist for your business. It answers your phone day and night, even when you are asleep, busy or on a job. It books the appointment into your calendar and texts you the details, so the caller never lands in voicemail and then books your competitor. We build it around your business in up to 3 days. Rule for every page: say who we are and what we do in plain words a plumber would use. No technical words, no clever lines, no "AI phone team".

**Plan finder formulas.** M = minutes (or calls a day x 30 x 4, or missed calls a day x 30 x 4). Pay As You Go = max(95, 0.59 x M). Growth = 383 + 0.50 x max(0, M - 743). Pro = 581 + 0.50 x max(0, M - 1,292). Expansion = 950 + 0.41 x max(0, M - 1,994). Cheapest plan that allows the calls at once (2, 3, 5, 8); Custom above 8 at once or 5,000 minutes. Missed-calls tab: jobs saved = missed a day x 30 x 15%; revenue = jobs x job size; profit only if a percentage is entered; net = profit minus plan cost; show negatives plainly. Tests at $200 a job: 2 a day at 40% is M 240, Pay As You Go $141.60, net +$578.40; 6 a day at 30% is M 720, Growth $383.00, net +$1,237.00; 0.5 a day at 5% is M 60, Pay As You Go $95.00, net -$72.50.

## U5. Copy to use

- **Eyebrow pill (Home):** Turning missed calls into business
- **Page title:** Talkera Desk | AI voice agents for inbound calls. **Description:** AI phone agent for service businesses. Answers calls 24/7, books jobs, keeps your caller and crew updated by text. One price, no setup fee, no contract.
- **Button rule:** decided 29 Oct 2026: the demo plays recorded calls, so the label is "Hear it work" everywhere. Remove "Experience a live demo" and never use the word live for the demo.
- **Pricing page first line:** "Updated October 2026. Pay As You Go $0.59 a minute from a $95 minimum, Growth $383, Pro $581, Expansion $950. One price, no setup fee."
- **Calls-at-once text:** as written in U2.
- **FAQ (ten, each up to 40 words):**

1. **Is it a person or an AI?** AI. It says so at the start of every call, sounds natural, and connects the caller to a person when your rules say so.
2. **Does it answer every call?** Almost every call. More callers at once than your plan allows, a hang-up, a poor line or a carrier outage can get in the way. Then the caller gets a text and you get an alert.
3. **How fast can I go live?** Up to 3 days. Day 1 we gather what is public and what you tell us and start building. Day 2 we tune it. Day 3 we test, connect your tools and go live.
4. **What does it cost?** Pay As You Go $0.59 a minute with a $95 monthly minimum, Growth $383, Pro $581, Expansion $950 a month. One price covers the agent, number, calls, texts and WhatsApp alerts, tool connection and upkeep. No setup fee.
5. **What if more calls ring at once?** The extra caller gets a text and a call back, free. You can add an extra call at the same time for $23 a month.
6. **Can I pause or cancel?** Cancel anytime. Your plan runs to the end of the period you paid for, then stops. No refund for unused days. In a quiet month, move to Pay As You Go.
7. **Who owns my number and data?** You do. If you leave, we export your data within 7 days and help you move your number.
8. **How long do you keep recordings?** 15 days on Pay As You Go, 30 on Growth, 45 on Pro, 60 on Expansion. Then they are deleted. Export before then.
9. **What if something breaks?** We start at once and fix it as soon as possible, up to 72 hours. If it is our fault and takes more than a day, each extra day is added to your plan.
10. **Where are you based?** India. Talkera Desk is a brand of DRUVA GROUP, a registered sole proprietorship. We serve the US, UK, Canada, Australia and India.

## U6. What to take from the old Part D

Take only the anti-slop rules: no stock-icon card grids that repeat, no invented testimonials or stats, real call text in the call card, reduced-motion respected, no fake logos. Skip the heavy items (for example clay-style objects, a pinned scroll story, a mega menu, scroll-animation libraries, a giant footer wordmark, new fonts). They add weight and break the minimal rule.

## U7. SEO, GEO and AEO for the US, UK, Canada, Australia and India

- **One English site.** `lang="en"`, no country folders yet, no hreflang needed. Add country pages only when search data shows demand, each with its own content.
- **Structured data:** Organization with `areaServed` set to US, GB, CA, AU and IN, `sameAs` for real profiles, `alternateName` \["Talkera", "TalkeraDesk"\]; one Offer per plan with `priceCurrency` USD only; FAQPage, BreadcrumbList.
- **Answer-first:** the Home description, FAQ 1 to 4 and the Pricing first line are the quotable facts; keep them identical everywhere. Allow Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot and PerplexityBot in robots.txt.
- **Country wording, not country pages:** US and Canada "service businesses, contractors"; UK "tradespeople"; Australia "tradies"; India "service businesses and clinics". Use them in guides and FAQ variants, not in the main copy.
- **Local trust:** the legal pages already cover the US (text-message rules), UK and Canada (privacy and marketing rules), Australia and India (data protection and GST). Do not add more to the site.
- **Off-site (what moves a new brand):** LinkedIn company page; YouTube with the demo calls and transcripts; Crunchbase now, G2 and Capterra later; genuine reviews; one useful post a week in contractor and clinic groups.
- **Speed:** Core Web Vitals in the green on mobile; compress images; no heavy libraries.
- **Measure:** Search Console and Bing Webmaster Tools; watch queries by country; track a short list per market.

## U8. Domain, typos and company facts

1. In Vercel add talkeradesk.com and www.talkeradesk.com; make www.talkeradesk.com primary; use exactly the DNS records Vercel shows for your project.
2. Permanently redirect the bare domain and the legacy Vercel preview hostname to https://www.talkeradesk.com/, keeping each page path.
3. Update site.json domain, canonical tags, social preview URL, sitemap, robots.txt, structured data and every mailto to support@talkeradesk.com.
4. Email: SPF, DKIM and DMARC before sending anything; warm up slowly.
5. **Typo and variant domains** (each totals 32 on the Chaldean table, which reduces to 5, as talkeradesk does): talkera-desk, talkeradeks, talekradesk, talkaredesk, takleradesk, tlakeradesk, talkeradsek, talkerdaesk; plus talkeradesk on .net, .co, .in and .ai. Redirect all to talkeradesk.com with a 301. Do not buy talkera.\* (another company uses it) or talkerdesk (too close to Talkdesk). Check availability and renewal prices first.
6. GST registration is granted: the Legal page and footer row show the GSTIN from site.json; remove any "in process" wording. Name decision, 29 Oct 2026: proceed with Talkera Desk and accept the TALKDESK and TALKERA risk. Optional later: attorney's opinion.

## U9. Prompt for Antigravity (Gemini Flash, medium thinking)

Paste this as the first message. Run one task at a time and approve each before the next. Flash models drift on long jobs, so the prompt forces small steps, a read-only audit first, and a report after every task.

```text
You are updating an EXISTING website for Talkera Desk (canonical domain: https://www.talkeradesk.com/). The legacy Vercel preview hostname must redirect to the canonical domain. Read /docs/spec.md, but the section called "Update pack for the live site" at the top wins over everything else in it.

GOLDEN RULES
1. Change ONLY what a task below names. Everything else stays byte-for-byte: layout, copy, colours, fonts, spacing, animations, components, legal wording, dependencies, config. Do not refactor, rename files, reformat, reorder imports or run a formatter on the repo.
2. The site must feel minimal: one promise, three proofs, a clear price, one next step. Word budgets: Home up to 450 words, Pricing up to 350 plus the table, Compare up to 250, How it works up to 200, each FAQ answer up to 40 words.
3. USD only. No rupee sign, INR, Rs, lakh, crore or rupee text anywhere.
4. No em dashes. No new libraries. No new fonts. No stock photos, robots or microphones.
5. If something is unclear or not listed, DO NOTHING and list it under "Open questions".
6. Work on a git branch named update-pack. One commit per task. Touch at most 5 files per task unless a rename of a string forces more; if so, list them first.
7. After every task, reply with exactly: Changed files | Confirmed unchanged areas | Open questions | How I verified. Then STOP and wait for my approval.

TASK 0: READ-ONLY AUDIT (no edits)
Create /docs/AUDIT.md listing: every route; which file holds plan names, prices and plan data; every file containing any of: Regent, getregent, team@, the rupee sign, INR, Starter, Core, Command, setup fee, rollover; the word count of each page; confirmation that the demo button plays a recording and does not ring a live line; every Home section in order with its word count. Do not change any code. STOP.

TASK 1: PRICING DATA (single source)
Put these values in the one file the plan components already read (create /content/pricing.json only if none exists) and wire the existing components to it without changing their markup:
payg {perMinute 0.59, minimumFee 95, extra 0.59, messages 104, calls 2, numbers 1, locations 1, retentionDays 15, changes 0}
growth {fee 383, minutes 743, extra 0.50, messages 1040, calls 3, numbers 2, locations 2, retentionDays 30, changes 2}
pro {fee 581, minutes 1292, extra 0.50, messages 1670, calls 5, numbers 3, locations 3, retentionDays 45, changes 4}
expansion {fee 950, minutes 1994, extra 0.41, messages 2750, calls 8, numbers 5, locations 5, retentionDays 60, changes 8}
custom {fromMinutes 5000}
addons {number 5, location 23, extraCall 23, toolConnection 59, change 50, extraText 0.05, extraWhatsapp 0.023}
pulseSeconds 60; freeUnderSeconds 10; billedMinutesPerCall 4; conversionRate 0.15; defaultJobSize 200; jobSizeMin 200; jobSizeMax 10000.
Per-minute price = fee / minutes, shown to 3 decimals, computed in code. STOP.

TASK 2: PRICING PAGE
Use the five plans in the order Pay As You Go, Growth, Pro, Expansion, Custom. Show fee, included minutes, per-minute price, extra minutes, calls at once, messages, how long recordings are kept. Add the calls-at-once explanation exactly as in the spec (U2). Never write that the per-minute price falls at every step. Replace the long policy paragraphs with ONE accordion of six rows: Cancel, Fixes, Storage, Calls at once, Billing pulse, Not listed. Remove setup-fee rows, rollover, old plan names (Starter, Core, Command) and every rupee mention. Keep the page shell and styles. STOP.

TASK 3: PLAN FINDER
Keep the component. Replace only its data and formulas: Pay As You Go = max(95, 0.59*M); Growth = 383 + 0.50*max(0,M-743); Pro = 581 + 0.50*max(0,M-1292); Expansion = 950 + 0.41*max(0,M-1994). M = minutes, or calls a day*30*4, or missed calls a day*30*4. Eligible by calls at once (2, 3, 5, 8); pick the cheapest; Custom above 8 at once or 5000 minutes. Average job size: slider min 200, max 10000, default 200, number box accepts any value, hover bar shows the value. Missed-calls result: jobs = missed*30*0.15; revenue = jobs*jobSize; profit only if a percentage is typed; net = profit minus plan cost; show negatives. Add unit tests: (2/day, $200, 40%) -> plan Pay As You Go 141.60, net 578.40; (6/day, $200, 30%) -> Growth 383.00, net 1237.00; (0.5/day, $200, 5%) -> Pay As You Go 95.00, net -72.50; switch points 649/650, 1139/1140, 2194/2195. STOP.

TASK 4: HOME (propose first, then edit)
First list the current Home sections with word counts and propose which to remove so exactly seven remain, in this order: Hero; three proof facts; How it works (three steps); Everyone stays in the loop (one phone visual); Pricing teaser; Trust row; Final call to action. Wait for my approval of the list. Then: change ONLY the H1 and subhead (exact words in the Hero wording paragraph of the Update pack) and the eyebrow pill text, which becomes "Turning missed calls into business"; update the pricing teaser to the four plan names and fees plus Custom; move any calculator off Home; add one small line "Serving the US, UK, Canada, Australia and India" in the footer. Keep both buttons and the call card exactly as they are. Button label: the demo plays a recording, so every demo button must read "Hear it work"; remove "Experience a live demo" and the word live wherever it describes the demo. STOP.

TASK 5: COMPARE, HOW IT WORKS, FAQ
Compare: replace the content with the table and three lines in the spec (U3). How it works: three steps and the 3-day line only. FAQ: replace with the ten questions in U5. STOP.

TASK 6: LEGAL AND CANCELLATION (numbers only)
In Terms, the Cancellation page and wherever plans are described, change ONLY: retention days to 15, 30, 45, 60 by plan; extra-minute rates; message allowances; remove any mention of Standby and burst; state no setup fee; state unused minutes do not carry over; delete rupee text; swap the email and domain to talkeradesk.com. Do not edit any other wording. Show me each changed sentence before and after. STOP.

TASK 7: DOMAIN AND SEO (code side only)
I will manage domain and DNS settings in the Vercel dashboard. In code: use https://www.talkeradesk.com/ as the canonical site; keep canonical tags, social previews, sitemap, robots.txt and structured data on that domain; allow Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot and PerplexityBot; use one USD Offer per plan. Permanently redirect the bare domain and legacy Vercel preview hostname to the matching www URL. Do not publish preview host URLs. STOP.

TASK 8: SWEEP
Search the whole repo for: the rupee sign, INR, Rs., lakh, crore, Regent, getregent, team@, Starter, Core, Command, "setup fee", rollover, "live call". For each hit, say whether it belongs to a task above; fix only those that do; list the rest. STOP.

TASK 9: VERIFY
Run the production build. Take screenshots of Home and Pricing at 390 px and 1280 px before and after. Run Lighthouse mobile on Home and Pricing. Confirm no horizontal scroll, no console errors, tab order intact, reduced motion respected. Give me the list of every file changed and the list of files confirmed untouched in the legal, about, demo and integrations areas.
```

**Before you run it:** the demo button plays a recording (decided), so make sure the recorded demo calls and your walkthrough video exist. **After it:** connect talkeradesk.com in Vercel, then test the redirects.

## Decisions and checks still open

The arbitration seat and the lawyer review of the legal pages; which social profiles exist; the typo domains' availability and prices; competitor prices re-checked each quarter; and a real cost measurement after the first 100 calls, because the worst-case margins assume the standard stack and the message allowances in U2.

Updated 23 Oct 2026. This is the complete, consolidated plan for the Talkera Desk website: positioning, pages and copy, design, pricing, plan finder, SEO, GEO and AEO, domains and typo redirects, legal pages and the build prompt for your coding agent. It replaces every earlier part. The appendices at the end keep the sourced statistics, the demo library, the law table, the legal page drafts and the sources.

## 0. Read this first

**Name gate.** Two conflicts turned up in a quick search. Talkera AI is an AI language-learning platform where learners practise speaking with AI avatars, which is in the same broad area (AI that talks). Talkdesk is a large AI contact-centre company with registered trademarks, and "Talkera Desk" reads and sounds close to "Talkdesk" in a neighbouring field (customer calls and AI agents). A quick search is not trademark clearance. Decision, 29 Oct 2026: we proceed with Talkera Desk and accept the risk. If you ever want it checked, get a trademark attorney's opinion on Talkera Desk against TALKDESK and TALKERA in classes 9, 35, 38 and 42 (US, UK, EU, India). This plan uses a single brand setting, so a different name later is a find-and-replace, not a rebuild.

| Item | Final decision |
| --- | --- |
| Brand | Talkera Desk, a brand of DRUVA GROUP. Line under the logo: "Your AI front desk, always on." Supporting line: "Turning missed calls into business." |
| Domain | talkeradesk.com |
| Contact email | support@talkeradesk.com |
| Hero | **AI receptionist that answers every call, 24/7** |
| Main button | **Hear it work** (recorded demo calls, never called "live"). Booking call: 15 minutes |
| Pricing | Pay As You Go, Growth, Pro, Expansion, Custom. No setup fee. Full table in the Update pack (U2) |
| Plan finder | Three tabs. Average job value starts at $200 |
| Cancellation | Anytime. No refund. The plan runs to the end of the paid period, then stops. No further charges |
| Fixes | As soon as possible, up to 72 hours. Each day past the first is added to your plan if the cause is ours |
| Delivery | Up to 3 days, depending on your replies |
| Storage of audio and transcripts | 15, 30, 45 and 60 days by plan (Update pack U2) |
| Currency | USD only. No rupee amounts anywhere |
| Rule for numbers | Limits, targets and estimates are written with "up to". Outcomes are never promised |

**Confirm before anyone builds:** the name clearance above; the main domain; who the contracting party is (DRUVA GROUP is a sole proprietorship, so the contract is with Ayush Raj trading as DRUVA GROUP); that every feature and integration on the site is built and tested (anything not built carries \[CONFIRM\]); that the recorded demo calls and the walkthrough video exist; and that you can staff the 72-hour fix target.

## 1. Positioning and company facts

**What we are:** your in-house phone team for service businesses that live on inbound calls. We are not a tool you manage and not a vendor you chase. We build it, connect it to your calendar or CRM, run it 24/7, review the calls and fix what is wrong. You pay one monthly price. No contract.

**For whom:** owners of restoration, plumbing, HVAC and electrical companies with 3 to 25 staff, starting in the US and Canada, who miss calls after hours or when the crew is busy.

**Why us (only what is true):**

- We set it up and run it. You do not configure software.
- We connect to the tools you already use. You do not switch anything.
- Your caller, your crew and you are updated by text from booking to rating.
- A person reviews calls and fixes mistakes.
- Prices, charges and terms are public. Month to month. You own your number and data.

**Tone:** confident, short, a little playful, never sloppy; grade 6 to 8 reading level; no jargon (no LLM, latency, STT, TTS); no hype; no em dashes.

**Name note:** Chaldean numerology: TALKERA is T4 A1 L3 K2 E5 R2 A1 = 18 and DESK is D4 E5 S3 K2 = 14, so the name totals 32, which reduces to 5.

**Company facts, exactly as on your Udyam certificate (printed 5 Oct 2026)**

| Item | What to publish | Where |
| --- | --- | --- |
| Enterprise name | DRUVA GROUP | Legal page, footer line, Terms, Privacy |
| Udyam registration number | UDYAM-BR-37-0067314 (Micro, major activity Services). Verify at udyamregistration.gov.in | Legal page |
| Date of registration | 10 October 2025. Udyam registered 18 October 2025 | Legal page |
| Business commenced | DRUVA GROUP began business on 15 April 2026, the date on the certificate | About, Legal page |
| Registered address | Flat 23, Bishunpur Taraura, PO Bhagwatpur Taraura, Patepur Road, Block Mahua, Mahua, Vaishali, Bihar 844122, India | Legal page, Terms, Privacy, DPA only |
| GST | Application in process. The GSTIN will be published when issued. Exports are invoiced without GST | Legal page |
| Team | Works remotely from Kolkata and other cities in India. Serves the US, UK, Canada, Australia and Europe | About, Legal page, FAQ |

**Move to a company:** say it plainly in three places: About ("Where we are heading"), one clause in the Terms (section 19 in Appendix D) and one line on the Legal page. Do not name the future company. A sole proprietorship has no separate identity, so nothing transfers automatically; the clause uses advance consent, 30 days' written notice, identical terms and a clean exit.

## 2. Sitemap (23 pages plus a 404)

| Path | Purpose | Primary action |
| --- | --- | --- |
| / | Who we are, what we do, proof, price, next step | Hear it work |
| /how-it-works | From first call to weekly review; up to 3 days to go live | Book a 15 min call |
| /pricing | Every plan, every charge, the plan finder | Hear it work |
| /compare | How Talkera Desk compares and the gap it fills | See pricing |
| /water-damage-restoration | First vertical page | Hear it work |
| /plumbing-hvac-electrical | Second vertical page | Hear it work |
| /integrations | Tools we connect to, with status | Book a 15 min call |
| /demo | Recorded demo calls by voice, accent and scenario; the walkthrough video | Hear it work |
| /about | Who runs this, DRUVA GROUP, dates, move to a company | Book a 15 min call |
| /faq | Answer-first FAQ | Book a 15 min call |
| /guides and 3 guides | SEO and AEO content | Hear it work |
| /legal, /terms, /privacy, /cookies, /ai-and-recording, /dpa, /sub-processors, /accessibility, /cancellation | Required, and trust-building | None |

## 3. Global elements

- **Navbar (sticky, 64px, shrinks slightly on scroll):** logo left; How it works, Pricing, Industries (dropdown: Water damage restoration, Plumbing HVAC and electrical), Compare, About, FAQ; right: pill button "Hear it work" and a text link "Book a 15 min call". Phones: logo, a hamburger opening a full-screen menu with both buttons at the bottom.
- **Sticky mobile bar (bottom, phones only):** "Hear it work" (jumps to the recorded calls) and "Book a 15 min call". Hidden while the keyboard is open.
- **Footer (deep green, white text):** column 1, brand line, one sentence on what we do, support email and WhatsApp +91 8252242179; column 2, Product (How it works, Pricing, Compare, Demo, Guides); column 3, Industries; column 4, Company and legal (About, FAQ, Legal, Terms, Privacy, Cookies, AI and recording, DPA, Sub-processors, Accessibility, Cancellation). Bottom line: "Talkera Desk is a brand of DRUVA GROUP, a sole proprietorship registered in India (Udyam registered). Our team works from India and serves clients in the US, UK, Canada, Australia and Europe." Social icons only for profiles that exist and are active (LinkedIn, YouTube for the demo calls, Facebook page, X optional). No GSTIN until one is issued; the registered address only on About and the legal pages.
- **Cookies and analytics:** cookieless analytics (Cloudflare Web Analytics). No ad pixels at launch; link to the booking page instead of embedding it so no third-party cookies load.

## 4. Design system

**Feel:** modern, energetic, premium and alive. Think a well-built fintech or product-led software site: big confident type, rounded cards, quick and clear. Not corporate, not old-school, and nothing that says "just started", "beta" or "we're new". The colour table below is unchanged: green and blue, as in your logo.

| Token | Value |
| --- | --- |
| Deep green (brand, buttons, footer) | #0E4D3A |
| Green (hover, accents) | #1C7C5B |
| Light blue (section backgrounds) | #E6F2FA |
| Sky blue (borders, highlights) | #BFE0F5 |
| White | #FFFFFF |
| Ink (body text) | #101A16 |
| Slate (secondary text) | #52625B |
| Warning (only for safety notes) | #B45309 |

Check contrast with a tool before launch. Target WCAG 2.2 AA.

**Type.** Plus Jakarta Sans for headings (700 and 800) and Inter for body, both self-hosted WOFF2 with real fallback stacks. Body 18px on desktop, 17px on phones, line height 1.6. H1 about 40 to 72px, line height about 1.05, slightly tight letter spacing. Prices and numbers in tabular figures.

**Layout and shape.** 12-column grid, content max width 1120px, text blocks max 680px. Section padding 96px on desktop, 56px on phones. Alternate deep green, light blue and white sections. Corners 20 to 28px. One idea per section, headlines of 8 words or fewer, support text of two lines or fewer.

**Components.** Primary button: solid deep green, white text, pill shape, 56px high. Secondary: outline. Plan cards: white with a 1px sky border, the plan you want to push with a 2px green border (add a "Most chosen" tag only once you have real data). Call card: a rounded phone-style card with a transcript and an audio player. Icons: simple line icons (Lucide), one weight.

**Imagery.** Phone mockups (text thread, booking in a calendar, call transcript), real product screenshots once you have them, founder photos on About, and your walkthrough video. No stock photos, robots, microphones, headsets, 3D or neon.

**Allowed so the site is not flat (and the rules that keep it quiet):** a very soft deep-green glow behind the hero visual (15% strength at most); a faint light-blue wash on one or two sections; message bubbles only inside phone mockups (the call transcript and the text thread); a waveform only inside the audio player. Never gradients on text, buttons or icons.

**Motion: alive, not noisy.** The hero sample call types in line by line, a booking card slides in, then the caller's confirmation text pops up, looping about every 18 seconds. Sections rise 16px and fade in over about 350ms, staggered 60ms. Numbers count up once. Cards lift 4px on hover. The header blurs slightly on scroll. The tools strip moves slowly (Appendix A). No more than three things animate on screen at once. Nothing autoplays with sound. Under reduced motion everything is still and complete. No parallax, no scroll hijacking, no cursor effects, no popups.

**Logo:** new mark for the new name, same green and blue. Idea: a call line arriving at a desk and becoming a booked job. Keep clear space of one "T" height, supply a white version for deep green backgrounds, a single-colour version, a 24px favicon and a 180px app icon. The old "regenT" mark is retired.

**Responsive (100%).** Mobile first. Test at 360, 390, 768, 1024, 1280 and 1536px. No sideways scrolling. Tap targets 44px or more. Tables become stacked cards on phones. Test on a real small iPhone and a mid-range Android.

**Performance.** Static pages (Astro, Eleventy or Next static export) on Cloudflare Pages. Google's "good" thresholds: LCP under 2.5s, INP under 200ms, CLS under 0.1. JavaScript under about 100KB. Images in AVIF or WebP with width and height set. Lighthouse mobile 90 or higher.

**Accessibility.** WCAG 2.2 AA, visible focus, keyboard use, alt text, labelled form fields, a visible transcript beside every audio file, captions on video.

## 5. Pages

### 5.1 Home

**Order, top to bottom:** 1 Hero with video; 2 Four facts; 3 A voicemail is not a booked job (stats and calculator, Appendix A); 4 What happens on every kind of call (section 7); 5 Everyone stays in the loop (section 7); 6 Hear it work (demo library, Appendix B); 7 Built for how you work; 8 Up to 3 days to live; 9 Tools strip (Appendix A); 10 How we compare (short, links to /compare); 11 Pricing at a glance with "nothing hidden"; 12 Who it is for; 13 Who is behind this; 14 FAQ (five questions); 15 Final call to action.

**1. Hero**

- Small label: AI phone agents for service businesses
- **H1: AI receptionist that answers every call, 24/7**
- Subhead: *Talkera Desk is an AI receptionist for your business. It answers your phone day and night, even when you are asleep, busy or on a job. It books the appointment into your calendar and texts you the details, so the caller never lands in voicemail and then books your competitor. We build it around your business in up to 3 days.*
- Chips: **24/7 answering** | **Books into your calendar or CRM** | **Updates by text** | **Pay for usage. No contract.**
- Buttons: **Hear it work** (primary), Book a 15 min call (secondary).
- Small print: "Answers almost every call. No phone system answers all of them; see why in the FAQ. 24/7 depends on phone carriers and platform providers."
- Right side: the video card, with the animated call card behind it on large screens and under it on phones. Label on any call: "Recorded test call. AI answering for a sample business."

**Hero video (your walkthrough with the dental clinic agent).** Aim for 90 to 105 seconds and never go past 2:00. Five beats: 0:00 to 0:10 hook, you to camera ("It's 10 pm. This is a clinic's phone line. Watch what happens when I call."); 0:10 to 0:40 the call, where the agent says it is an AI, asks the right questions and books; 0:40 to 1:00 the booking appears on screen; 1:00 to 1:25 the texts (confirmation, the check-in 2 to 3 hours before, the done message with a rating request, the alert to the assigned team member); 1:25 to 1:45 end card: "Built around your business in up to 3 days. Prices are public. Book 15 minutes." Add an emergency or spam clip (8 seconds each) only if good. Three cautions: (1) it is a real clinic, so use test calls with made-up patients, blur anything real and get the clinic's written permission to name it; (2) your buyers are in the US, UK, Canada, Australia and Europe, so say "Example: a dental clinic in India. Same system, built for your business", add English subtitles if the call is Hindi or Hinglish, and put English demo calls right below; (3) do not autoplay with sound and do not load the file on first paint: show a poster with a play button, load on click, host with captions and a transcript, add VideoObject structured data.

**3. A voicemail is not a booked job.** Headline and the three sourced stat cards are in Appendix A. The calculator below them asks calls missed per week, the share you would book, and average job value, which **starts at $200** and can be changed. It shows the formula and the words "estimate, not a promise".

**7. Built for how you work.** *We don't sell you a template. We build a voice agent and the systems around it (your calendar, your CRM, your texts, your rules) around how your business already runs. Tell us what you want it to say and do. We build it, test it, and keep it working.* Three blocks: Your words, Your tools, Your rules.

**8. Up to 3 days to live.** Day 1: we pull what is public about your business (website, official social pages), add what you tell us, and start building the same day. Day 2: refinement and tuning. Day 3: testing, connecting your tools and going live. It depends on how quickly you reply and give us access; we ask for answers within 2 to 3 hours.

**10. How we compare.** Three lines and a link to /compare (section 5.4).

**11. Pricing at a glance.** Four small cards from the Update pack (U2) and a link to "See every charge". Under them: "No setup fee. No maintenance fee. No card surcharge. No contract. Nothing hidden."

**12. Who it is for.** Cards for Water damage restoration and Plumbing, HVAC and electrical.

**13. Who is behind this.** Three sentences: Talkera Desk is a brand of DRUVA GROUP, a small India-based team, and we say so because you should know who runs your phones. Founder photos. Link to About.

**15. Final call to action.** "Hear it work." Two buttons: Hear it work, Book a 15 min call.

Home SEO: title "Talkera Desk: AI Front Desk That Books Jobs | No Contract"; description "AI phone agent for service businesses. Answers calls 24/7, books jobs, keeps your caller and crew updated by text. One price, no setup fee, no contract."

### 5.2 How it works

1. H1: **We build it, run it and fix it. You get on with the job.**
2. The flow of one call, as a simple diagram: call in; the agent says it is an AI and greets; asks the key questions; books the job; texts the caller to confirm; alerts you and the person assigned; checks with the caller 2 to 3 hours before the visit; handles changes; sends the done message and a rating request. It connects the caller to a person, or rings your on-call person, when your rules say so.
3. "Up to 3 days to live": the day-by-day plan from the home page.
4. "What is included": phone number, text registration for US numbers, calendar or CRM connection, updates to your caller and team, transcripts, reports, call reviews, upkeep and the changes in your plan. Nothing is charged that is not on the pricing page.
5. "What we need from you": your services, areas, hours, who gets which alerts, your emergency rules, access to your tools, and answers within 2 to 3 hours when we ask.
6. "When the agent cannot help": it takes the details and texts you, or rings your phone. Callers beyond your plan's calls-at-once limit get an instant text and a call back. We say "almost every call", not every call, and explain why.
7. "Sounds natural, says it is an AI": every call should feel like talking to a helpful person, not a machine, and the agent always says it is an AI at the start.
8. "Your data": you own it. Audio and transcripts are kept 15 to 60 days by plan. Export on request.
9. "Fixes": as soon as possible, up to 72 hours; days past the first are credited when the cause is on our side.
10. CTA: Book a 15 min call.

### 5.3 Pricing page

The full price list, add-ons, policies and the plan finder are in section 6. Page order: dated quotable line ("Updated October 2026. Pay As You Go $0.59 a minute from a $95 minimum, Growth $383, Pro $581, Expansion $950. One price, no setup fee."); the plan table; "what is included and what is not"; "every charge in one list"; the plan finder; "how billing works" (pulse and calls at once); "our rules in plain words"; how we compare in three lines; final CTA. SEO: title "Talkera Desk Pricing | From $95 a Month, No Contract"; description "Every plan and charge on one page. Four plans from $95 a month. No setup fee. Cancel anytime."

### 5.4 Compare (/compare): the table in the Update pack (U3) replaces the older one below

Format, the way payment platforms do it: one plain table, then what is missing elsewhere, then what we do, then when we are not the right fit. Show a "checked on 23 Oct 2026" line and a source link on every price. Re-check each quarter.

Prices come from each provider's own pricing page (Frontdesk, FirstCall AI, Voco and Smith.ai AI-first, copied on 30 Oct 2026). Units differ: Voco is in pounds excluding VAT, and Smith.ai bills per call, not per minute. State that under the table. Use company names as plain text, not logos, say what each does well, and give each a way to ask for a correction. Be honest on the page: on price alone you are not cheaper. Voco in the UK already includes reminders, review requests and WhatsApp on every plan, and FirstCall AI works out far cheaper per minute. You win on a build around the client's own workflow and tools, on rules the client sets (emergencies, transfers, spam), and on a person who reviews and fixes.

**What is missing elsewhere (reported in public reviews and forums; link a source for each before publishing, and keep the wording general):** wrong bookings and wrong details; nobody owns the result; weak handoff to a person; surprise bills and hard exits; AI that blocks a real person during business hours; you own nothing when you leave; lock-in contracts.

**What we do about each:** we build and fix it, we book into your tools and keep everyone updated until the job is rated, a person reviews your calls, you set the emergency, transfer, spam and after-hours rules, prices and terms are public, you own your number and data, and the agent says it is an AI.

**When Talkera Desk is not the right fit:** you only need messages taken and are happy with a $15 to $100 tool (buy it); you need a person on every call (use a human answering service); you handle regulated US health data (we do not, without a signed addendum); you get only a handful of calls a month (check the plan finder first).

Smith.ai (AI-first) is now a column in the table. Separate "Talkera Desk vs" pages for each competitor come later, one at a time, only after verifying that provider's public price and features from its own site.

### 5.5 Industry pages

**/water-damage-restoration** (first vertical): H1 "After-hours calls for water and fire restoration companies." Sections: the 2 a.m. question ("Who answers your phone at 2am?"); what the agent asks (address, type of damage, what is affected, whether it is safe to stay, urgency, insurance details, best number); the safety rule in a warning box (if anyone is in danger the agent says to call the local emergency number, then alerts you); the dispatch loop (details by text to you and the assigned technician, job in your calendar or CRM); insurance and referral-partner calls routed to a person; a sample call with transcript; plan fit; three FAQs; CTA. Publish only flows you have built.

**/plumbing-hvac-electrical:** same structure, shorter: emergency versus scheduled calls, what the agent asks per trade, booking and assignment, seasonal slowdowns (add an extra call at the same time or change plan), sample call, plan fit, FAQs, CTA. Name a field-service tool (Jobber, Housecall Pro, ServiceTitan) only after that integration is built and tested.

### 5.6 Integrations (/integrations)

One table: tool, what the agent can do with it (create a booking, update a contact, send an alert), status (**live**, **via Zapier or webhook**, **on request**). The home page tools strip and its rules are in Appendix A. Do not claim "live" for anything not built.

### 5.7 Demo (/demo)

H1 **Hear it work. Then talk to us.** The recorded demo library with filters for voice, accent and scenario (Appendix B) and the walkthrough video; a link to book a 15 minute call (a link, not an embed); a four-field form (name, business, email, phone optional); support email and WhatsApp; "We reply within one business day." \[CONFIRM\]; and a trust line: "If the free tools already fit your business, we will tell you."

### 5.8 About

1. H1 **A small team that runs your phones. Here is who we are.**
2. Why we built this: two or three honest sentences.
3. Founders: photos, names, one line each.
4. Plain facts: the company-facts table in section 1, in words. Include both dates and the former name.
5. Where we are heading: "Talkera Desk runs today as a brand of DRUVA GROUP, a sole proprietorship. We plan to move the business into a private limited company. When we do, your agreement, plan, price and data move with it, with notice and no change for you."
6. What we promise: prices published, month to month, no hidden charges, you own your number and data.
7. What we do not do: guarantee revenue, hide fees, or call or text people without consent.
8. CTA. Do not claim a US office, a US company, awards or client logos you do not have.

### 5.9 FAQ: use the ten questions in the Update pack (U5)

### 5.10 Guides and contact

Launch with three guides, each with the answer in the first two lines, a date, an author byline, short sections with question headings, a source link for every number and a link to Pricing: (1) How much does a missed call cost a restoration company? (with the calculator); (2) AI receptionist vs answering service vs hiring: what each really costs; (3) Ten questions to ask before you sign with any AI receptionist. Contact details appear on /demo and in the footer.

### 5.11 Legal pages

Nine pages: Legal and registration details, Terms, Privacy, Cookies, AI and recording notice, Data Processing Addendum, Sub-processors, Accessibility, Cancellation. Drafts are in Appendix D. A lawyer must review them before launch.

## 6. Pricing and plan finder: see the Update pack (U2 and U4)

## 7. What happens on every call, and every update

### What happens on every kind of call (home section 4)

A simple table, then five short example calls (caller John, agent Talkera Desk). Tabs on desktop, stacked on phones.

| Situation | During your working hours (default) | After hours (default) |
| --- | --- | --- |
| New job | Books it into your calendar or CRM, texts the caller to confirm, alerts you and the person assigned | Same, with the next available slot |
| Emergency (danger to life or safety) | Tells the caller to call the local emergency number first, alerts you at once by call and text, offers to connect the caller to you | Same, and rings your on-call person |
| Urgent but not dangerous (burst pipe, no heat) | Connects the caller to a person. If nobody answers, books the earliest urgent slot and alerts you | Rings your on-call person. If nobody answers, books the first urgent slot, texts you and the caller, and tries again |
| Caller wants a person (complaint, invoice, existing job) | Warm transfer. If nobody answers, takes a message, books a call back and texts both sides | Takes a message and books a call back for opening time |
| Quote or price question | Answers only what you approved, otherwise books an estimate or a call back | Same |
| Spam, sales and robocalls | Screened and ended politely, listed in your report, no alert | Same |
| Wrong number, job applicant, supplier | Politely redirected, sent to the right email or link, a note to you if it matters | Same |
| More calls at once than your plan handles | The caller gets an instant text and a call back; you get an alert | Same |

**Safe defaults, for you and for us.** Unless you tell us otherwise, the agent never diagnoses, never gives repair or safety instructions other than calling the emergency number, never quotes a price you have not approved, never promises an arrival time your calendar cannot confirm, never takes card numbers or ID numbers, and always says it is an AI. Every escalation is logged. You can change any of this: we build custom voice agents and the systems around them, so tell us once and we build and test it your way.

**Today's routing:** every call goes to the agent first, and a person takes over where your rules say so. Other routing (ring you first, after hours only) is custom work built on request. \[CONFIRM what is built before publishing it as standard.\]

**Example calls**

*New job, working hours:* John: "Hi, my AC stopped cooling." Agent: "Hi John, I'm the AI assistant for Cool Air Services. I can book a technician. What's the address?" John: "42 Oak Street." Agent: "Thanks. Tomorrow between 10 and 12 works. Shall I book it?" Result: booked, text confirmation to John, alert to the owner and to Mike, the assigned technician.

*Emergency, after hours:* John: "There's water coming through my ceiling." Agent: "I'm an AI assistant. If anyone is in danger, hang up and call 911 now. Is anyone in danger?" John: "No, but it's getting worse." Agent: "Understood. I'm alerting the on-call technician now and texting you." Result: on-call technician rung, text to John, owner alerted, earliest urgent slot held.

*Call back, after hours:* John: "I'd like a quote for a new water heater." Agent: "Happy to help. The office opens at 8. I can book a call back or an estimate visit." John: "A call back at 9, please." Result: call back booked for 9:00, text to John, task to the office.

*Person wanted, working hours:* John: "Can I speak to Sarah about my invoice?" Agent: "Of course, connecting you now." \[no answer after four rings\] "Sarah isn't free. I'll note it and she'll call you back today. Is this number best?" Result: message to Sarah, call back task, text to John.

*Spam:* Caller: "We can lower your business loan rate." Agent: "Thanks, we're not interested. Goodbye." Result: ended in seconds, listed as filtered in your report, no alert.

**Why we say "almost every call".** The service is online 24/7. It cannot answer literally every call: more callers at once than the plan allows, a caller who hangs up, a poor line, or an outage at a carrier or platform can get in the way. Each call gets its own agent: Pay As You Go handles up to 2 at a time, Growth up to 3, Pro up to 5, Expansion up to 8. Expansion is the workload of a front desk of up to 8 people on the phones at the same moment, without hiring.

### Everyone stays in the loop (home section 5)

Headline: *The call is the start. Talkera Desk keeps everyone updated until the job is done.* Show one phone mockup with a text thread that fills in step by step next to a second phone showing the team's alerts.

| Step | Your caller gets | You and your team get |
| --- | --- | --- |
| Booked | Confirmation with day, time window, address and what was booked | The assigned team member gets who, what, where, when and notes. You get a copy |
| 2 to 3 hours before the team heads out | "Still good for 3 pm? Reply YES or RESCHEDULE." | If the caller says no or does not answer, the team knows before anyone drives out |
| Reschedule or cancel | Confirmation of the new time or the cancellation | Updated calendar and an alert to the assigned person and to you |
| Details changed | Confirmation of the updated address, number or notes | The same update, at once |
| Emergency | Instant text and what to expect | A call and a text to you or your on-call person |
| Job done | Thank you and a request to rate the visit | Completion notice and the rating when it arrives |
| Every week | n/a | Summary: calls answered, jobs booked, calls filtered as spam, calls that could not be answered and why |

**Channel:** text message (the US default), or WhatsApp where it is set up for the market; email and Slack for the team where they use them. \[CONFIRM which are built. WhatsApp business messaging needs Meta business approval and message templates; US text needs carrier registration, which can take days to weeks, so tell clients before the 3-day clock starts.\] Messages count against one allowance: up to 1,800 a month on Growth, up to 5,000 on Expansion; Pay As You Go pays $0.04 per text.

**Consent and good practice:** the agent asks "Can I text you the confirmation on this number?" during the call and records the answer; every text identifies the business and honours STOP at once; messages are about the caller's own request, with no promotions; a short rating request after the job is a service follow-up with an opt-out. A lawyer should confirm the wording for the US, UK, EU, Canada and Australia.

## 8. SEO, GEO, AEO, domains, typos and link trust

### 8.1 Domain and typo redirects

**Main domain.** Set it once in site.json. My ranking for a business that wants to look established to US, UK, Canadian, Australian and EU owners: .com, then .net, then .co, then .in. Evidence: in March to May 2026 data, .net had a spam score near .com's (44 against 51), .co about twice (105), .info far worse (387). Google treats .co as a generic ending with no country signal, while .in is an India country code that can lean search toward India. Avoid .info, .online, .live, .world and .co.in. Check availability and yearly renewal price at a registrar. Do not buy or use talkera.\* domains: another company already uses the Talkera name.

**Variants and typos (redirect to the main domain):** talkeradesk on .com, .net, .co, .in and .ai; and the likely mistypes talkradesk, talkaradesk, talkerradesk, talkeradeskk, talkera-desk, talkeradesc and talkeradeks. Optional vanity: talkera.desk. Do not register "talkerdesk": it sits too close to Talkdesk and invites a dispute. Renewals recur yearly, so buy the cheapest that matter first.

**Wiring:** add each domain to Cloudflare; one Bulk Redirect list sends every variant, with path and query kept, to the main domain with a 301; keep the list in the repo as redirects.csv; registrant details identical everywhere (DRUVA GROUP or Ayush Raj, the same address and email as the Udyam certificate); optionally forward mistyped email addresses with Email Routing (it also catches spam). Canonical is the bare main domain over HTTPS; redirect http to https and www to bare; one trailing-slash style; HSTS once HTTPS works everywhere.

**What this does not do:** it catches people who type a web address wrongly. It does not change what people type into Google, and nobody can make Google or an AI assistant send a misspelled search to your site. Some searchers looking for Talkdesk will land on Talkdesk; that is a brand risk, not a redirect problem.

**What helps branded search:** the same name everywhere (title tags, bios), the handle @talkeradesk on LinkedIn, YouTube, Facebook, X and Instagram created before launch, Organization structured data with name "Talkera Desk", alternateName \["Talkera", "TalkeraDesk"\], url, logo and sameAs for real profiles, Google Search Console and Bing Webmaster Tools on day one, a complete LinkedIn company page, and a YouTube channel with the demo calls. Third-party mentions (directories, genuine reviews, guest posts) are what make a new name show up.

### 8.2 SEO, GEO and AEO

**What the evidence says.** Most advice here comes from agencies selling services. One 2026 analysis argues that llms.txt and schema have no measurable effect on AI citations (an Ahrefs test under 5%, Google saying Search ignores llms.txt, 97% of llms.txt files getting zero requests in May 2026). Other guides claim big gains I could not verify. So:

**Do first:** static, fast, mobile-friendly HTML that crawlers read without scripts; one H1 per page, a unique title under 60 characters and description under 155, clean lowercase URLs, canonical tags, XML sitemap, internal links to Pricing and Demo from every page; open every section with a direct 40 to 60 word answer under a question heading; one quotable, dated, numeric sentence near the top of key pages (the pricing line); identical facts everywhere (name, description, prices, location); robots.txt allowing Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot and PerplexityBot (training crawlers allowed unless you decide otherwise); a source link for every number; author and updated date on guides; rank in classic search first (one source says about 87% of ChatGPT citations overlap Bing's top 10 and another says 38% of AI Overview citations come from Google's top 10; treat both as direction only).

**Do, but expect no AI magic:** JSON-LD for Organization, WebSite, Service on industry pages, Offer on pricing, BreadcrumbList, Article on guides, FAQPage on /faq, AudioObject and VideoObject on demos. Google no longer shows FAQ rich results for most sites, so the value is clean data. llms.txt is optional, ten minutes of work, last priority.

**Keywords to target (validate volumes with free tools):** AI receptionist for restoration companies; after-hours answering for water damage companies; AI answering service for plumbers; AI call answering for HVAC; plus the brand terms "Talkera Desk". One phrase per page. No programmatic city pages.

**Tracking:** demo play (which call and how far), calculator and plan finder use, form submit, calendar click; reviewed weekly.

### 8.3 Making the link safe and click-worthy

- **Before anyone clicks:** SPF, DKIM and DMARC set up before sending a single email (start DMARC at monitoring, then quarantine). Send from support@\[main domain\] with a real name and a short signature (brand, DRUVA GROUP, the site, Udyam registered, a way to verify). Write the link as plain text; never use shorteners or click-tracking wrappers in outreach. Warm the domain 2 to 3 weeks and keep volume low (about 30 emails a day per mailbox, a rule of thumb). Check Google Safe Browsing and a blocklist before launch.
- **When pasted:** Open Graph and Twitter card tags (a 1200 x 630 image with the logo and "Go offline. Your phone won't."), title and one-line description; favicon and a 180px app icon. Test by pasting into LinkedIn, WhatsApp, Slack and email.
- **First-screen trust cues:** a thin line "Talkera Desk by DRUVA GROUP. Udyam registered. Serving the US, UK, Canada, Australia and Europe."; the founder's face and name; public prices; a visible Legal and registration link; a real recorded call and your video.
- **Technical safety:** HTTPS everywhere, security headers, no popups, no autoplay sound, no forced email gate; the same registrant details on every domain; auto-renew on, and two years if the registry allows.

## 9. Build prompt: use U9 in the Update pack

## 10. Build order and what is still unverified

**Order:** (1) name clearance; (2) domain, handles and email authentication; (3) record the demo calls and the walkthrough video; (4) design system, Home and Pricing; (5) other pages and legal pages; (6) lawyer review; (7) update the Udyam unit name; (8) go live; (9) apply to payment gateways with the live site; (10) file the trademark.

**Unverified, in order of risk:** the Talkera Desk name against TALKDESK and TALKERA; every integration and logo; competitor prices (re-check each quarter); all legal drafts; whether you can staff the 72-hour fix target; routing modes beyond "every call goes to the agent first"; US text carrier fees and call length assumptions behind the prices; whether the 18% GST can be claimed back; Meta WhatsApp rates outside the US; domain availability and renewal prices; the transfer tool for EU and UK data sent to India; statistics change, so re-check each one quarterly.

**Decisions only you can make:** the final name after clearance; the main domain; the arbitration seat (Patna, Kolkata or other); whether the support clock pauses on Sundays and Indian holidays; whether to move to a Pvt Ltd before launch; which social profiles exist; which demo calls are good enough to publish.

# Appendices

**A.** Sourced statistics, the missed-call section and the tools strip (rules and list). **B.** Demo call library. **C.** Laws and rules that touch the business. **D.** Legal page drafts (Legal and registration, Terms, Privacy, AI and recording notice, DPA, Sub-processors, Cookies, Accessibility). **E.** Sources. In these appendices, "Regent" is the former brand name and is being replaced by "Talkera Desk"; where the old price list appears in the legal drafts, the prices in section 6 win.

### Appendix A. A voicemail is not a booked job

**Headline:** A voicemail is not a booked job.

**Copy:** When nobody picks up, callers do not wait for you. In one 2025 survey of 1,000 US consumers, 82% said they would call a competitor if a business did not answer, and 21% said they call another business immediately. The company that answers first gets the conversation. Talkera Desk answers, books the job into your calendar or CRM, and texts your crew.

Three stat cards, then the calculator, then the button "Hear how we answer":

| Figure | What it measures | Source (show on the card, with year and link) |
| --- | --- | --- |
| 52% | Callers to home services businesses who spoke with a person (65% for calls over 15 seconds) | [Invoca Home Services Lead Conversion Benchmarks Report, July 2026](https://www.invoca.com/reports/the-invoca-home-services-lead-conversion-benchmarks-report-2026). Dataset: 70 million+ calls across 10 industries; home services covers nine trades including restoration. |
| 82% | Consumers who say they will call a competitor if you do not answer | [CallRail survey of 1,000 US consumers, 25 Sept 2025](https://www.callrail.com/blog/missed-calls-cost-businesses-more-than-ever) |
| 21% | Consumers who immediately call another business when no one answers (42% leave a voicemail, 24% turn to online chat) | Same CallRail survey |

Add under the cards: "Both companies sell call tools. These are their findings, not promises from us. Your own numbers are in the calculator." Optional fourth card from the same CallRail survey: 52% of consumers believe companies that use AI assistants after hours give superior service.

**Do not use these figures.** "85% of callers never call back", "62% of calls go unanswered", "80% will not leave a voicemail" and "$1,200 per missed call". I could not trace them to a study: the 62% comes from a 2016 test of 85 businesses across 58 industries, and the others repeat each other. Putting them on the site would fail the first background check.

Store every statistic in the content file with `source`, `url`, `year` and `lastVerified`. Re-check them each quarter.

### Appendix A, continued. Tools strip (logos and names, moving horizontally)

**Heading:** We connect to the tools you already use, and build the rest on request. **Caption under it:** Direct connections, Zapier connections and webhook connections vary by plan. See what is live today. Logos belong to their owners. No endorsement or affiliation is implied.

**Motion.** Two rows moving in opposite directions, slow and continuous: row one crosses in about 80 seconds, row two in about 95 seconds, both looping seamlessly. Pause on hover and on keyboard focus. Edge fade (white to transparent) on left and right. With reduced-motion enabled, show a static wrapped grid instead. The order is mixed on purpose: do not group by type and do not sort alphabetically. Each row ends with a text chip, **& more...**, before it loops.

**Chip design.** White chip, 1px sky-blue (#BFE0F5) border, 12px radius, 16px gap. Logo at a consistent 28px height, then the name in 15px Inter medium, slate (#52625B). Official logo files only. Keep original brand colours; some brand guidelines forbid recolouring. If a logo is not available or its guidelines do not allow use, show the name alone in the same chip.

**CSS pattern for the coding agent** (no JavaScript):

```css
.marquee{overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.track{display:flex;gap:16px;width:max-content;animation:slide 80s linear infinite}
.row-b .track{animation-duration:95s;animation-direction:reverse}
.marquee:hover .track,.marquee:focus-within .track{animation-play-state:paused}
@keyframes slide{to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){.track{animation:none;flex-wrap:wrap;width:auto}}
```

Render each list twice inside the track so the loop is seamless, and mark the duplicate copy `aria-hidden="true"`.

**What to show (mixed order, as listed in the content file).** Each entry has a status: **live** (built and tested), **zapier** (connects through Zapier, Make or webhooks), or **request** (we build it when a client needs it). Show all of them in the strip; the /integrations page shows the status. Do not claim "live" for anything not built.

| Kind | Tools |
| --- | --- |
| Field service and job management | ServiceTitan, Jobber, Housecall Pro, Workiz, FieldEdge, Service Fusion, ServiceM8, Albi, JobNimbus, DASH |
| CRM and sales | GoHighLevel, HubSpot, Salesforce, Zoho CRM, Pipedrive, Airtable, Notion |
| Calendars and booking | Google Calendar, Microsoft Outlook, Calendly, Cal.com |
| Sheets, files and email | Google Sheets, Google Drive, Gmail, Microsoft 365 |
| Team messaging | Slack, Microsoft Teams, WhatsApp Business |
| Phone systems and carriers | Twilio, Telnyx, RingCentral, Dialpad, Vonage, OpenPhone, Zoom Phone |
| Call tracking and local marketing | CallRail, CallTrackingMetrics, Google Business Profile, Google Local Services Ads, Podium, Birdeye |
| Automation | Zapier, Make, n8n |
| Accounting | QuickBooks |

These come from my understanding of what trade and restoration owners use. I did not verify that each has an open API or that its logo can be used. Check every tool's developer docs and brand guidelines before it goes in the strip, and drop any that fail. Start the strip with the four or five you will really build first.

The /integrations page is in the sitemap (section 2): one table with the tool, what the agent can do with it (create a booking, update a contact, send an alert), and status.

## Appendix B. Demo call library (voices and accents)

**Where it appears:** the hero call card (one default recording), the /demo page (full library with filters), and each industry page (the matching scenario first).

**Filters on /demo:** Voice (Female, Male), Accent (US, UK, Canadian, and whatever else you record, for example Australian), Scenario (Restoration after hours, Plumbing emergency, HVAC no cooling, Electrical outage). English only at launch.

**Each card shows:** title, voice and accent chips, scenario, duration, play button, the transcript below the player (collapsed by default, one click to open), and one result line, for example "Booked: Tuesday 8:30 am. Texts sent to the owner and the technician." Label on every card: **Recorded test call. AI answering for a sample business.**

**Launch set:** 6 to 8 recordings. For example US female, US male, UK female, UK male, Canadian female, Canadian male for restoration, plus one plumbing and one emergency handoff to a person. Publish a call only if it sounds natural and books correctly. Include one handoff example: it shows what happens when the agent should step aside, and owners trust that more than a flawless call.

**Content file** (`/content/demos.json`; the agent should read it at build time, so you only add files and rows):

```json
[
  {
    "id": "us-female-restoration-1",
    "title": "Burst pipe at 11:40 pm",
    "voice": "female",
    "accent": "US",
    "scenario": "restoration",
    "durationSec": 94,
    "audio": "/demos/us-female-restoration-1.mp3",
    "audioAlt": "/demos/us-female-restoration-1.webm",
    "result": "Booked: Tuesday 8:30 am. Texts sent to the owner and the technician.",
    "transcript": "Agent: Hi, you've reached ... I'm an AI assistant ...",
    "recordedOn": "2026-10-20",
    "featured": true
  }
]
```

**Audio rules**

- Mono speech, MP3 at 64 to 96 kbps plus a WebM/Opus copy, trimmed of dead air, volume levelled so all calls play at a similar loudness. Aim for under about 1 MB each.
- `preload="none"`. No autoplay, ever. Only one clip plays at a time.
- A simple custom player on the native audio element: play and pause, a progress bar you can drag, elapsed and total time. Keyboard operable, with labelled controls.
- Host the files on your own site. No third-party embeds.
- Log play events (which call, how far it got) in your cookieless analytics.

**Honesty and rights**

- Say plainly that the voices are AI-generated. If a demo uses a real person's recorded voice (for example you playing the caller), get their written consent, and do not use a real client's call without their written permission.
- Check the licence terms of every voice you use for commercial demos with the voice provider.
- Label accents by how the voice sounds ("US accent", "UK accent"), never as a claim about a person's nationality.
- Add `AudioObject` structured data with the transcript for each call, for search engines and AI crawlers.
- Do not splice or edit a call to hide a mistake. If it fails, re-record it.

## Appendix C. Laws and rules that touch Talkera Desk

I cannot give legal advice, and no one should treat drafts written by an AI as legal advice. I checked what I could against current sources today (17 Oct 2026) and marked each row as **checked** (I read a source on it) or **my knowledge** (from training, not re-verified today). The drafts in Appendix D follow this table. A lawyer must still review them before launch.

| Law or rule | Why it touches Talkera Desk | How the drafts handle it | Status |
| --- | --- | --- | --- |
| India: DPDP Act 2023 and DPDP Rules 2025 | You are an Indian business handling personal data. The Rules were notified on 13 Nov 2025; the main duties start 18 months later, around 13 to 14 May 2027. Processing of non-residents' data under a contract with a foreign client is exempt from the core duties (Section 17), but handling Indian visitors' data is not. | Privacy Policy says we will meet DPDP when it applies, and sets security safeguards now. | Checked ([DLA Piper summary](https://www.dlapiperdataprotection.com/?t=law&c=IN), [Legal 500](https://www.legal500.com/intelligence/india/privacy/india's-digital-personal-data-protection-act-and-the-dpdp-rules-2025-phased-commencement-core-obligations-and-a-board-ready-compliance-strategy)); exact exemption wording needs a lawyer |
| India: IT Act 2000, Section 43A and the 2011 data security rules | Reasonable security practices duty for sensitive personal data, until DPDP replaces it | Security section in Privacy Policy and DPA | My knowledge |
| India: Contract Act 1872; Arbitration and Conciliation Act 1996 | Contract validity and dispute resolution; foreign awards are enforceable in India under the New York Convention | Terms: Indian law, arbitration, English language | My knowledge |
| India: GST and exports of services | Exports of services are generally zero-rated under a Letter of Undertaking, once you hold a GSTIN | Registration page shows GST as pending; Terms say we charge no GST on exports and that your local taxes are yours | My knowledge; your CA must confirm |
| EU AI Act, Article 50 (chatbots and synthetic content) | Applies since 2 Aug 2026. People must be told they are speaking with an AI unless it is obvious. Providers of AI that generates synthetic audio must mark its output in a machine-readable way; systems already on the market before 2 Aug 2026 have until 2 Dec 2026. Fines for these duties can reach EUR 15 million or 3% of worldwide turnover. | Agent says it is an AI at the start; AI and recording notice; Terms assign duties; ask each voice provider about output marking | Checked ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force), [Technology.org, 13 Oct 2026](https://www.technology.org/2026/10/13/eu-ai-act-deadlines-after-the-digital-omnibus-what-applies-from-december-2026-to-august-2028/)) |
| EU GDPR and UK GDPR | For client call data you are a processor; for website leads you are a controller. Client contracts need processor terms. India has no EU adequacy decision as far as I know, so transfers need standard contractual clauses (EU) and the UK addendum. You may also need an EU or UK representative if you target clients there. | DPA with SCC and UK addendum references; Privacy Policy | My knowledge; lawyer must confirm transfer tools and the representative question |
| UK PECR and EU ePrivacy | Cookies and direct marketing | Cookieless analytics; cookie policy states exactly what is used | My knowledge |
| US: TCPA | AI-generated voices count as artificial voices; cold or automated calls and texts need consent | Acceptable use bans outbound calling and texting without documented consent | Checked in earlier research this session; lawyer to confirm |
| US: state call-recording and AI-disclosure laws | Several states need every party's consent to record, and some require AI disclosure | Agent announces AI and recording at the start; client confirms their legal basis | My knowledge; rules differ by state |
| US: CCPA/CPRA | Applies to larger businesses; clients may need service-provider terms | Service-provider terms in the DPA | My knowledge |
| US: HIPAA | Health data needs a BAA and a different stack | Terms exclude health data without a signed addendum | My knowledge |
| US: carrier text-message registration (A2P 10DLC) | Business texts over US local numbers must be registered; unregistered texts get blocked or fined by carriers | Pricing includes registration; Terms require the client's brand details | Checked ([Twilio docs, via a 2026 guide](https://ratedtobooked.com/missed-calls)) |
| Canada: PIPEDA, Quebec Law 25, CASL | Privacy, Quebec's stricter rules, and consent for electronic messages | DPA and Privacy Policy cover it generally | My knowledge |
| Australia: Privacy Act 1988, Spam Act 2003, Do Not Call Register Act 2006, interception and surveillance laws | Privacy, marketing consent and recording | Same approach as US and EU: announce AI and recording | My knowledge |

**What a lawyer should do before launch (give them this list)**

1. Review every page in Appendix D, and cut or fix anything that does not fit your facts.
2. Confirm the governing law, the arbitration seat and the liability cap for a sole proprietorship with foreign business clients.
3. Confirm the transfer mechanism for EU and UK data going to India, and whether you need an EU or UK representative.
4. Confirm the wording of the AI disclosure and recording notice for the US states, UK, EU, Canada and Australia you will serve.
5. Confirm how DPDP applies once it starts, and what the Section 17 exemption covers in your situation.
6. Advise on moving to a company (Pvt Ltd) earlier than your planned revenue trigger. A sole proprietor is personally liable for client claims; foreign clients may ask for a company, and a data breach or a bad call can exceed any liability cap.
7. Advise on professional indemnity and cyber insurance, and what clients' contracts will require.

If you cannot afford a full review now, pay for one hour on items 2, 3 and 4 first, and keep the site to the US and Canada until that is done.

## Appendix D. Legal page drafts, part 1

Drafts for a lawyer to review. Brackets mean a decision or fact you must fill or confirm. Replace dates when you publish. Business customers only.

### Page: Legal and registration details (/legal)

**Who we are.** Talkera Desk is a brand of DRUVA GROUP, a sole proprietorship of Ayush Raj, registered in India. When you buy from Talkera Desk, your contract is with Ayush Raj, trading as DRUVA GROUP. Our team works remotely from Kolkata and other cities in India. DRUVA GROUP began business on 15 April 2026 (the date on its Udyam certificate). The brand started as Regent on 1 September 2026 and was renamed Talkera Desk on \[date\].

| Detail | Information |
| --- | --- |
| Brand | Talkera Desk (\[main domain\]) |
| Legal business name | DRUVA GROUP |
| Legal form | Sole proprietorship. Proprietor: Ayush Raj |
| Country | India |
| Udyam registration number | UDYAM-BR-37-0067314 (Micro enterprise, major activity: Services). Verify at udyamregistration.gov.in |
| Date of registration | 10 October 2025 |
| Udyam registration date | 18 October 2025 |
| Business commenced | 15 April 2026 |
| Registered address | Flat 23, Bishunpur Taraura, PO Bhagwatpur Taraura, Patepur Road, Block Mahua, Mahua, Vaishali, Bihar 844122, India |
| Contact | support@\[main domain\]. WhatsApp: +91 8252242179 |
| GST | Registration in process. We will publish the GSTIN here when it is issued. Exports of services are invoiced without GST. |
| Other brands of the same business | Rayvanta and Urban Mitra are separate brands under DRUVA GROUP, with their own websites and services. |

Udyam is a registration with India's Ministry of Micro, Small and Medium Enterprises. It is not a licence or an endorsement. For background verification, email support@\[main domain\] and we will send the Udyam certificate and other documents directly. Last updated: \[date\].

### Page: Terms of Service (/terms)

*Effective \[date\]. These terms are for businesses. We do not sell to consumers.*

**1. Who we are.** "Talkera Desk", "we" and "us" mean Ayush Raj, trading as DRUVA GROUP, a sole proprietorship registered in India (details on our Legal and registration page). "You" means the business that signs up. Talkera Desk is not a company. The contract is with the proprietor personally.

**2. What we provide.** We build, connect, run, review and fix an AI phone agent for your business, as described on our website and in your plan. It answers calls, collects details, books jobs where connected, sends text updates to your callers and your team, and passes calls to you under your rules. We aim to have your agent live within up to 3 days of the day we have what we need from you. The time depends on your replies and access, and it is a target, not a guarantee. We do not provide emergency services, legal advice, medical advice or any guarantee of bookings or revenue. Anything not listed in your plan or on the Pricing page is not included: we quote it in writing, and we do it only after you approve it.

**3. Plans, fees and billing.**

- Prices are in US dollars and are listed on our Pricing page. The plan, fees, included minutes, extra-minute rate, texts, setup, add-ons and pass-through items shown there on the day you sign up are part of this agreement. Anything not listed in your plan or on the Pricing page is not included. We quote it in writing first, and you pay for what you approve.
- Monthly fees are charged in advance and are due whether or not you use the service. Each plan is valid for the period you paid for. There is no free trial or pilot.
- Minutes are billed in 60-second pulses: every started minute counts as a minute. Calls under 10 seconds are not billed. Included minutes are used first. Pay As You Go costs $0.59 a minute with a minimum of $95 a month, due whether or not you use the service. Extra minutes cost $0.50 each on Growth and Pro and $0.41 on Expansion. Extra minutes are billed monthly in arrears to your card on file.
- Unused included minutes do not carry over. For a quiet month, move to Pay As You Go.
- Texts to callers and your team are included up to your plan's monthly allowance (Pay As You Go 104, Growth 1,040, Pro 1,670, Expansion 2,750). Extra texts cost $0.05 each and extra WhatsApp messages $0.023 each. \[CONFIRM WhatsApp terms before offering it.\]
- We charge no card surcharge. We do not charge GST on exports of services. Taxes, duties or withholding that apply in your country are your responsibility.
- Payment is by card on file or bank transfer. If a payment fails we will tell you and retry. If an invoice stays unpaid 7 days after our written notice, we may suspend the service until it is paid.
- There is no setup fee. Fees for the current period are not refundable, except if we materially breach these terms and do not fix it within 30 days of your written notice.

**4. Price changes.** While you stay on a plan, we will not change your monthly fee, your included minutes or the extra-minute rate. We may change pass-through items (carrier, number and text charges, and similar costs charged to us by third parties) if our costs rise by more than 10%, with 30 days' written notice. If you do not accept the change you may cancel without penalty before it starts. We may change prices for new sign-ups at any time.

**5. Term, cancellation and pause.** Month to month. Cancel or pause at any time from your account or by email to support@\[main domain\]. Your plan stays active until the end of the period you have paid for, then stops, and we do not charge you again. We do not refund the unused part of a paid period. After your plan ends we keep your setup and number for 30 days at no charge so you can restart. You can keep them longer for $29 a month, up to 3 months. Two exceptions: if we cannot fix a problem on our side within 72 hours (section 6), or if you object to the move to a company (section 19), we refund the unused days of your current period. After the service ends we export your data under section 12.

**6. Support, fixes and credits.** When you report a problem, we start diagnosing at once and fix it as soon as possible, up to 72 hours at the most, depending on the problem. If the cause is on our side and the fix takes more than 24 hours, each extra day, rounded up to a whole day, is added to your plan. "Our side" means our setup, our code, our mistakes or our delays. It does not include outages at phone carriers or platform providers, your own tools or phone company, changes you made without telling us, or time spent waiting for your reply. We ask you to answer our questions within 2 to 3 hours during your business day, and the clock waits while we wait for you. If we cannot fix a problem on our side within 72 hours, you may cancel and we refund the unused days of your current period. We aim for the service to be available 24/7 and to answer almost every call, but we do not guarantee uptime or that every call will be answered. We may carry out maintenance and will give notice where we can.

**7. Your responsibilities.**

- Give us accurate information and the access we need to connect your tools.
- You are responsible for having a lawful basis for the calls and recordings your business handles, including any consent or notice your law requires, and for the telephone numbers you give us.
- Answer or act on the calls and alerts the agent passes to you. The agent is not an emergency service and must not be used to reach one. Callers in danger are told to call emergency services.
- Reply to our questions within 2 to 3 hours during your business day when we ask, so we can deliver and fix on time.
- Do not use the service to send promotional texts. The agent asks callers for permission to text them during the call and honours a STOP reply.
- Keep your own software and phone carrier accounts in good standing.

**8. Acceptable use.** You must not use the service to: make or send calls or texts without the consent the law requires; harass, deceive or impersonate; claim the agent is a human when asked; collect card numbers, government IDs, passwords or health information over the agent unless we have agreed it in writing; or break any law. We may suspend the service at once for a serious breach.

**9. AI, recording and storage.** The agent tells callers it is an AI and that calls may be recorded, as set out in our AI and recording notice. Audio and transcripts are kept for 15 days (Pay As You Go), 30 days (Growth), 45 days (Pro) or 60 days (Expansion), and then deleted. Call logs without content (time, length, result) are kept up to 12 months for billing and reports. We keep data longer only where the law requires it or a dispute makes it necessary. AI can mishear, misunderstand or give an incorrect answer. We review calls and fix mistakes, but we do not promise it will be correct every time.

**10. Third parties.** The service depends on telephone carriers, voice and language AI providers, hosting and other third parties. Their outages or changes can affect the service. Our sub-processors are listed on the Sub-processors page.

**11. Intellectual property.** You keep ownership of your business information, your numbers, your call recordings and transcripts. We keep ownership of our software, templates and know-how. Scripts and call flows built specifically for you are yours to keep, and we give you a copy under section 12. We do not use your call recordings to train AI models, and we require our providers not to where their terms allow it \[CONFIRM for each provider\].

**12. Your data on exit.** On request, within 7 days of the end of the service, we give you an export of your call data, transcripts and configuration in a common format and help you move your phone number if it is portable. We remind you 3 days before stored audio and transcripts are deleted under section 9. Other data is deleted within 30 days after the service ends, except what the law requires us to keep.

**13. Confidentiality.** Each side keeps the other's non-public information confidential and uses it only for this agreement, except where the law requires disclosure.

**14. Disclaimers.** Except where the law does not allow it, the service is provided "as is". We do not promise a number of calls answered, jobs booked, revenue or savings.

**15. Limit of liability.** To the fullest extent the law allows, our total liability for any claim is limited to the fees you paid us in the 3 months before the event. We are not liable for lost profits, lost jobs or revenue, loss of goodwill, or indirect or consequential loss. Nothing limits liability that cannot be limited by law, including for fraud. Because the contract is with a sole proprietor, nothing in these terms means a company stands behind it. \[Lawyer to review this section.\]

**16. Indemnity.** You will cover our reasonable losses from a third-party claim caused by your breach of sections 7 or 8, or by your instructions to us. We will cover your reasonable losses from a third-party claim that our service, as we provide it, infringes their intellectual property rights. \[Lawyer to review.\]

**17. Suspension and termination.** Either side may end this agreement for a material breach that is not fixed within 30 days of written notice. We may suspend or end it at once for unlawful use or non-payment after notice under section 3.

**18. Governing law and disputes.** These terms are governed by the laws of India. We will first try to resolve any dispute by good-faith discussion for 30 days. If that fails, it goes to arbitration before a sole arbitrator under the Arbitration and Conciliation Act, 1996, seated in \[Patna, Bihar or another city, CONFIRM\], in English, with hearings allowed online. Courts at \[Patna\] have exclusive jurisdiction for interim relief and to enforce an award. This section does not stop either side seeking urgent relief to protect data or confidentiality.

**19. Moving to a company.** Talkera Desk is run today as a sole proprietorship. We plan to move the business into a private limited company. When we do: (a) we will tell you in writing at least 30 days before the transfer date and give you the company's registration details; (b) your agreement, current plan, price, paid period, account history and data transfer to the company on the same terms, with no interruption to the service and no cost to you; (c) the company takes over all our duties to you, including those under the Data Processing Addendum; (d) the proprietor remains responsible for anything that happened before the transfer date; (e) by accepting these terms you agree to the transfer in advance; and (f) if you do not want to continue with the company, tell us before the transfer date and we will refund the unused days of your current period.

**20. General.** These terms are the whole agreement for the service. We may update them with 30 days' notice; if you continue after the date they take effect, you accept them. If a part is unenforceable the rest continues. Neither side may assign the agreement without the other's consent, except as set out in section 19. Neither side is liable for delays caused by events outside its reasonable control. No third party has rights under these terms. Notices go to the email addresses we hold for each other.

**21. Contact.** support@\[main domain\]. Registered address on the Legal and registration page.

## Appendix D. Legal page drafts, part 2

Same rules as Appendix D part 1: drafts for a lawyer; brackets are decisions or facts to confirm. List only the providers you really use.

### Page: Privacy Policy (/privacy)

*Effective \[date\]. This policy covers visitors to the Talkera Desk website, people who contact us, and our business customers' account details. It does not cover calls handled for our customers; see section 5.*

**1. Who is responsible.** Ayush Raj, trading as DRUVA GROUP (brand: Talkera Desk), a sole proprietorship registered in India. Address and registration details are on our Legal and registration page. Contact: support@\[main domain\].

**2. What we collect.** What you give us: name, business name, email, phone number and your message, when you use a form, book a call, email or message us on WhatsApp. For customers: billing details and the information needed to set up your service. What we collect automatically: simple visit statistics (pages viewed, device type, referring page, approximate region) from a cookieless analytics tool, and which demo calls were played. We do not run advertising trackers.

**3. Why we use it and our legal basis.** To answer your enquiry and arrange a call (our legitimate interest, or steps you ask us to take before a contract); to provide and bill the service (contract); to keep records the law requires (legal obligation); to keep the site secure and improve it (legitimate interest). Where the law requires consent, we ask for it and you can withdraw it at any time.

**4. Who we share it with.** The service providers listed on our Sub-processors page (hosting, email, scheduling, payments, analytics), our professional advisers, and authorities where the law requires. We do not sell personal data.

**5. Calls handled for our customers.** When Talkera Desk answers a call for a customer, the customer decides why the call data is used, and we process it on their instructions as their processor. Questions about those calls, or requests to see or delete that data, should go to the business you called. Our AI and recording notice explains what happens on a call.

**6. Transfers outside your country.** We are based in India. Our providers are in the United States, India and other countries. For transfers from the EU, UK or other regions that require safeguards, we use \[standard contractual clauses and the UK addendum, CONFIRM\].

**7. How long we keep it.** Enquiries: up to \[24\] months after our last contact. Customer records: while you are a customer, then for the period the law requires for tax and accounting records. Call audio and transcripts: 15, 30, 45 or 60 days by plan, as in our Terms. Call logs without content: up to 12 months.

**8. Your rights.** Depending on where you live, you may ask to see, correct, delete or move your data, object to some uses, or withdraw consent. You can also complain to your data protection authority. In India, you will have rights under the Digital Personal Data Protection Act when its main provisions start (expected around May 2027), and we will meet them. Email support@\[main domain\]. We reply within \[30\] days.

**9. Security.** We use encrypted connections (HTTPS), restrict access to people who need it, and keep our providers' security settings current. \[CONFIRM each practice you actually follow, and add multi-factor sign-in only if it is on.\] No system is perfectly secure; if there is a breach that affects you we will tell you as the law requires.

**10. Children.** Our service is for businesses. We do not knowingly collect data from anyone under 18.

**11. Changes.** We will post changes here with a new date, and tell customers by email for material changes.

**12. Complaints and grievances.** Contact: Ayush Raj, support@\[main domain\], \[postal address from the Legal page\].

### Page: AI and recording notice (/ai-and-recording)

**What happens when you call a business that uses Talkera Desk.** An AI voice agent answers. It tells you at the start that it is an AI and that the call may be recorded and transcribed. It asks what you need, can book a job or appointment, sends text confirmations, and can pass you to a person where the business has set that up. If you want a person, say so and the agent will pass you on or arrange a callback. If you do not want to be recorded, say so; the agent will \[offer a person or a callback, CONFIRM what you have built\].

**Where your call data goes.** Audio and transcripts are processed by the voice, language and telephony providers on our Sub-processors page and stored for 15 to 60 days depending on the business's plan, or as the business you called has chosen. The voice you hear is AI-generated.

**This is not an emergency service.** If anyone is in danger, hang up and call your local emergency number.

**For businesses that use Talkera Desk.** Laws on AI disclosure and call recording differ by country and US state. We set the default announcement to tell callers it is an AI and that the call may be recorded. You remain responsible for any further notice or consent your law requires. This page is not legal advice.

### Page: Data Processing Addendum (/dpa)

*This addendum forms part of the Terms between the customer ("Controller") and Ayush Raj, trading as DRUVA GROUP ("Talkera Desk", "Processor").*

1. **Roles.** The customer is the controller of call data about its callers and customers. Talkera Desk is its processor and processes the data only on the customer's documented instructions, which are these terms, the plan, and the configuration the customer approves.
2. **What is processed.** Call audio, transcripts, caller names, phone numbers, addresses and job details, for the purpose of answering calls, booking jobs and sending alerts, for as long as the service runs. Data subjects: the customer's callers and customers, and its staff. No special-category or health data unless a signed addendum allows it.
3. **Confidentiality.** People who handle the data are bound by confidentiality.
4. **Security.** Measures in Annex B, which we keep at least at that level.
5. **Sub-processors.** The customer authorises the sub-processors on our Sub-processors page. We give 30 days' notice of new ones. The customer may object on reasonable data-protection grounds; if we cannot offer an alternative, the customer may cancel without penalty. We bind sub-processors to terms no less protective than these.
6. **International transfers.** Where the customer's data is subject to the EU GDPR or UK GDPR and is transferred to India or another country without an adequacy decision, the \[EU standard contractual clauses (Module Two, controller to processor) and the UK addendum, CONFIRM\], are incorporated. Where Indian law applies, we process in line with it.
7. **Help with requests.** We help the controller answer requests from individuals and regulators, within \[10\] business days, at no extra charge for reasonable requests.
8. **Breach notice.** We tell the controller without undue delay, and in any case within \[72\] hours of becoming aware of a breach affecting its data, with the information we have.
9. **Deletion and return.** On request or when the service ends, we export the data within 7 days and delete it within \[30\] days, except where the law requires us to keep it.
10. **Audit.** The controller may ask for information showing we comply, and, no more than once a year on 30 days' notice, an audit by remote review, at its own cost.
11. **US privacy laws.** Where laws such as the California Consumer Privacy Act apply, we act as a service provider: we do not sell or share the data, we use it only for the services, we do not combine it with other data, and we tell the customer if we can no longer meet our obligations.
12. **Liability and order of precedence.** Liability follows the Terms. If this addendum conflicts with the Terms about personal data, this addendum prevails.

**Annex A: details of processing.** As in clause 2. **Annex B: security measures.** \[CONFIRM and list only what is true: encrypted connections, access limited to named staff, separate logins per person, no shared passwords, multi-factor sign-in on the accounts that hold client data, a device-security rule for the team, deletion schedules, a breach-response routine.\] **Annex C: sub-processors.** See the Sub-processors page.

### Page: Sub-processors (/sub-processors)

*Last updated \[date\]. We give customers 30 days' notice before adding a new one.*

| Provider | What it does | Where | Data involved |
| --- | --- | --- | --- |
| \[Retell AI / Vapi / ElevenLabs, whichever you use\] | Runs the voice agent | \[United States\] | Call audio, transcripts |
| \[Language model provider(s)\] | Understands and writes responses | \[United States\] | Transcript text |
| \[Twilio / Telnyx\] | Phone numbers, calls, texts | \[United States and other regions\] | Phone numbers, call metadata, text content |
| Cloudflare | Website hosting, security, cookieless analytics, \[Workers and database\] | Global | Visit data, \[job records\] |
| Google Workspace | Email, calendar, \[Sheets and Apps Script\] | Global | Business email, \[job records\] |
| \[Cal.com / Calendly\] | Booking calls with us | \[location\] | Name, email |
| \[Razorpay / Skydo / Wise\] | Collecting payments | India and \[other\] | Billing details |

### Page: Cookie Policy (/cookies)

Our site uses only the storage it needs to work, such as remembering your demo-call filter during a visit and protecting our forms from spam, and a cookieless analytics tool that does not track you across sites. We do not use advertising or tracking cookies. If we add any, we will ask for your consent first where the law requires it and update this page. Build note: link to the booking page rather than embedding a scheduler, because embeds can load third-party cookies. \[CONFIRM what your form-protection tool stores.\]

### Page: Accessibility statement (/accessibility)

We aim for this site to meet WCAG 2.2 level AA. We test with a keyboard, a screen reader and automatic checkers. Every audio demo has a transcript. If something does not work for you, email support@\[main domain\] and we will fix it or give you the information another way. Last reviewed: \[date\]. Known issues: \[list, or none\].

## Appendix E. Sources and what is still unverified

**Pages I opened in full today (17 Oct 2026)**

- [Invoca Home Services Lead Conversion Benchmarks Report 2026](https://www.invoca.com/reports/the-invoca-home-services-lead-conversion-benchmarks-report-2026): 52% of callers reach a person, 65% for calls over 15 seconds, 73% over 30 seconds; dataset of 70 million+ calls; nine home services trades including restoration. Invoca sells call tracking and an AI voice agent.
- [CallRail, "Why businesses can't afford to miss calls", 25 Sept 2025](https://www.callrail.com/blog/missed-calls-cost-businesses-more-than-ever): survey of 1,000 US consumers; 82% would call a competitor, 21% call another business immediately, 42% leave a voicemail, 24% turn to chat, 78% have abandoned a business after an unanswered call, 52% think after-hours AI assistants signal superior service. CallRail sells an AI voice assistant.
- [RatedToBooked, "How Many Calls Do Contractors Miss?"](https://ratedtobooked.com/missed-calls): an independent reading of the above, with the finding that the 85%, 80% and $1,200 figures could not be traced to a study, and that the 62% figure comes from a 2016 test of 85 businesses. Also the source of the forum findings about AI answering during business hours versus after hours (one writer's summary of public threads, not a study).

**Read in search results only (not opened in full; treat as pointers)**

- DPDP Act and Rules 2025: [DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=IN), [Legal 500](https://www.legal500.com/intelligence/india/privacy/india's-digital-personal-data-protection-act-and-the-dpdp-rules-2025-phased-commencement-core-obligations-and-a-board-ready-compliance-strategy).
- EU AI Act Article 50: [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force), [Technology.org, 13 Oct 2026](https://www.technology.org/2026/10/13/eu-ai-act-deadlines-after-the-digital-omnibus-what-applies-from-december-2026-to-august-2028/).
- AEO and GEO evidence: [Capital and Compute](https://capitalandcompute.net/blog/geo-aeo-tactics-that-work-2026/).

**Your Udyam certificate** (uploaded) is the source for every company fact in section 1 and Appendix D.

**Still unverified, in order of risk**

1. Whether your tool integrations exist and whether each logo may be used. Nothing in the tools strip is confirmed.
2. The trademark position of "Talkera Desk" against Talkdesk, Talkera and others. I did a quick search only.
3. All legal drafts. They are not reviewed by a lawyer. The transfer mechanism for data going to India, the governing-law and arbitration choice, the liability cap and the EU or UK representative question are the big ones.
4. Whether you can staff the 24-hour and 48-hour resolution targets, including Sundays and Indian holidays.
5. Coverage modes (24/7, after hours only, when busy) and the "offer a person" and "stop recording" options: promised in copy, not confirmed as built.
6. Whether the DPDP exemption for foreign-contract data covers your case.
7. Which providers sit in your sub-processor list, and whether each allows your use and your no-training promise.
8. Domain availability and renewal prices for the typo domains.
9. Statistics change. Re-check each one quarterly and update `lastVerified`.

**Decisions only you can make:** the governing-law seat (Patna, Kolkata or other); whether the support clock pauses on Sundays and holidays; whether to move to a Pvt Ltd before launch; which social profiles exist; and which of the 6 to 8 demo calls are good enough to publish.

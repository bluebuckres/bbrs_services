Create the case studies MD file
Create the case studies MD file

Create the case studies MD file
bash

cat > /home/claude/bluebuck-case-studies.md << 'ENDOFFILE'
# BlueBuck Research — Case Studies Content Brief
> Paste into your agent/code editor. Each case study is fully specified — what to write, what to diagram, what to leave as placeholder for real screenshots and testimonials.

---

## HOW TO USE THIS FILE

- `[SCREENSHOT: description]` = placeholder where a real dashboard/UI image goes
- `[TESTIMONIAL]` = placeholder where client quote goes when you have it
- `[METRIC]` = placeholder where you add a real number if you have one
- Diagrams marked `[DIAGRAM]` should be rendered as SVG/interactive on the page
- Each case study has a **tag**, **headline**, **the problem**, **what we built**, **outcome**, and **optional diagram**

---

## CASE STUDY 1 — TradeMade.in

**Tags:** FinTech · Web App · Desktop App · Dashboard
**Geography:** India
**Stack:** React · Node.js · Electron (or equivalent desktop) · Python (backtesting engine integration)

### Headline
*From spreadsheet to live algo — a full-stack trading platform built for serious Indian retail traders*

### The problem (2–3 lines for the page)
TradeMade had a powerful backtesting concept and a quant team that could build the engine — but no product layer. Traders needed a professional-grade interface: a web platform for strategy management, a dashboard for analytics, and a desktop app for live algo execution. They were using fragmented tools and manual workflows.

### What BlueBuck built
- **Marketing website** — conversion-focused, communicating a complex technical product to a non-technical trading audience
- **Strategy dashboard** — web app where users submit strategies, view backtest results, track P&L, and manage deployments
- **Desktop application** — live trading interface connecting to Zerodha, Upstox, Angel One and other brokers; real-time position monitoring, multi-account sync
- Full UI/UX design system across all three surfaces — consistent, professional, built for daily active use

### Outcome
> "I gave them a rough idea on a WhatsApp voice note. Within 6 days I had a fully coded, backtested Nifty momentum algo running on my Zerodha. The communication was crisp." — TradeMade user (platform built by BlueBuck)

[METRIC: number of active users / strategies deployed / backtests run — add when available]

### [DIAGRAM] — System surface map
Render as a clean structural SVG showing three connected surfaces:
```
[ Marketing Website ] → [ Web Dashboard ] ↔ [ Desktop App ]
                              ↕
                    [ Broker APIs: Zerodha / Upstox / Angel One ]
```
Label each box with what a user does there (not technical jargon):
- Website: "Discover and convert"
- Dashboard: "Build and backtest"
- Desktop: "Deploy and monitor live"
- Broker APIs: "Execute trades"

### [SCREENSHOTS needed]
- Dashboard UI — strategy list / backtest results view
- Desktop app — live position view
- Website homepage

---

## CASE STUDY 2 — MrMed.in

**Tags:** HealthTech · Full Platform · Design · Ongoing
**Geography:** India (Chennai HQ, 3,500+ cities served)
**Stack:** [Ask Paul — likely React/Next.js + backend + app integration]

### Headline
*Building the platform behind India's largest super-specialty pharmacy — from zero to 7,000+ medicines, 3,500 cities*

### The problem
MrMed was solving a serious access problem: cancer patients, transplant patients, people with rare conditions across India couldn't reliably source life-saving medicines at affordable prices. The founders had the supply chain and clinical knowledge. They needed a platform that could handle everything from prescription uploads to cold-chain delivery coordination — and make it feel simple for a patient in distress.

### What BlueBuck built
- **End-to-end platform design** — UX research and design from scratch, built around a patient under stress (not a casual shopper)
- **Web platform** — medicine catalogue (7,000+ SKUs), prescription upload flow, order tracking, patient assistance program access
- **Patient-facing flows** — refill reminders, medicine information, healthcare blog integration
- **Ongoing maintenance and iteration** — BlueBuck remained the technical partner post-launch

### Outcome
- Platform now serves patients across 3,500+ cities including remote areas
- FICCI Healthcare Startup of the Year award
- Strategic partnership with Eli Lilly (announced Dec 2025)
- Rs. 40+ crore saved for patients across the platform
- [TESTIMONIAL from MrMed founders if available]

### [DIAGRAM] — Patient journey (what the platform handles)
Render as a horizontal flow — NOT a generic funnel. Show the specific emotional/functional stages:
```
Diagnosis → Medicine search → Prescription upload → Price check (up to 85% off) → Order + cold chain delivery → Refill reminder → Ongoing care
```
Each stage should have a 1-line label of what the platform does at that moment (not what the patient does). E.g. "Prescription upload → Platform verifies with licensed pharmacist team"

### [SCREENSHOTS needed]
- Homepage / medicine search UI
- Order tracking screen
- Mobile app (if BlueBuck built or designed this)

---

## CASE STUDY 3 — Asteride.co

**Tags:** Consumer App · Web · Design System · Community Platform
**Geography:** India (New Delhi)
**Stack:** React (web) · Figma (design) · [confirm backend if BlueBuck touched it]

### Headline
*Website and design system for India's #1 motorcycle community app — built for riders, not just users*

### The problem
Asteride had a strong product (the app had 4.9★ on App Store, growing rider community, GSF-backed) but their web presence didn't match. The website needed to communicate a lifestyle product — not a generic SaaS — to passionate motorcyclists while converting new riders to download the app. Design consistency between web and app was also broken.

### What BlueBuck built
- **Marketing website** — designed and built for the riding community; tone, imagery direction, and copy architecture all rider-first
- **Design system** — visual language, component library, and design tokens to keep web and app consistent as the product scales
- Collaboration with the Asteride engineering team on integration handoff

### Outcome
- 4.9★ App Store rating (community product the website funnels into)
- [METRIC: website traffic / downloads attributable to web — add if available]
- [TESTIMONIAL from Asteride founders]

### [DIAGRAM] — NOT needed here
This case study is better served by visual before/afters (website screenshots) than a diagram. Skip the diagram. Use full-width website screenshots instead.

### [SCREENSHOTS needed]
- Asteride website — homepage, rides section, community section
- Design system components (if shareable)

---

## CASE STUDY 4 — eStay Hotel, Dubai

**Tags:** Hospitality · Website · Dubai · UAE
**Geography:** Dubai, UAE
**Stack:** [Confirm — likely WordPress/custom CMS or Next.js + booking integration]

### Headline
*A hospitality website that converts browsers into bookings — built for a Dubai hotel competing on OTAs*

### The problem
eStay Hotel (Al Muhaisnah, Dubai — 3-star, near Dubai International Airport) had strong reviews and good facilities (pool, gym, sports courts, family amenities) but was heavily dependent on OTA platforms like Booking.com. Their direct booking website wasn't converting. For a hotel that competes on value in a high-cost market, direct bookings mean significantly better margins.

### What BlueBuck built
- **Full website redesign** — built to convert direct bookings, not just inform
- **Room catalogue and package pages** — Standard King, Deluxe, Business, Family rooms; Rate Card program
- **Booking flow integration** — connecting to their reservation system
- **SEO architecture** — targeting "luxury hotel near Dubai airport", "best 3 star hotel Dubai", "hotel with gym and pool Dubai" keywords
- **Mobile-first build** — majority of hotel searches happen on mobile

### Outcome
- [METRIC: direct booking uplift / organic traffic growth — add if available]
- [TESTIMONIAL from eStay management]

### Note for the page
This is a referral project — a hospitality operator in Dubai came to BlueBuck through a recommendation. Good signal for the "clients refer us to other clients" positioning.

### [SCREENSHOTS needed]
- Website homepage
- Rooms page
- Booking/package page

---

## CASE STUDY 5 — Gleo.ai

**Tags:** AI Consulting · LLM Features · Productised Services · UK/Global
**Geography:** UK / Global
**Stack:** LLM (OpenAI/Anthropic) · RAG · Workflow automation

### Headline
*AI features and strategy for a platform helping service companies productise their expertise*

### The problem
Gleo.ai is building the infrastructure for productised services — helping consulting firms, agencies, and B2B service companies turn their methodology into repeatable, scalable playbooks. The platform needed AI features that felt native, not bolted on — and a team that could advise on where LLMs actually add value vs. where they create fragility.

### What BlueBuck built
- **AI feature consulting** — scoped which parts of the Gleo platform should be AI-assisted vs. human-driven; prevented premature automation
- **LLM feature development** — built specific AI-assisted features within the platform (playbook generation, session structuring, or similar — [Paul: specify what features exactly if you can])
- **Prompt architecture** — designed the prompt system and evaluation criteria for consistent output quality
- **Ongoing advisory** — embedded with the Gleo team as their AI technical partner, not a one-off delivery

### Why this case study matters for BlueBuck
This is the clearest demonstration of BlueBuck's AI/ML consulting capability — not just building software, but advising on AI strategy for a SaaS product. Different from the other case studies which are primarily build engagements.

### Outcome
- [METRIC: any feature performance data Gleo can share]
- [TESTIMONIAL from Gleo founders — this one is important, get it]

### [DIAGRAM] — AI feature architecture (conceptual, not literal)
Render as a simple 3-layer diagram:
```
Layer 1: User input (service methodology, session notes, client context)
Layer 2: BlueBuck-built prompt layer (structured extraction + LLM call)
Layer 3: Gleo platform output (structured playbook / session agenda / deliverable)
```
Label each layer with what it does, not what the tech is. This shows the thinking, not just the code.

---

## CASE STUDY 6 — CartIn AI

**Tags:** Own Product · AI · Shopify · D2C · India
**Geography:** India (D2C market)
**Stack:** Next.js · Node.js · OpenAI · PostHog · Shopify API

### Headline
*We built an AI shopping assistant for Indian D2C brands — and it's live, converting, and making money*

### The problem
Indian D2C brands on Shopify were losing customers at the product discovery and decision stage. No tool existed that understood the Indian shopper — price-sensitive, vernacular-comfortable, comparison-heavy. Existing chatbots were either too generic (Western products) or too simple (scripted FAQ bots). The gap: an AI assistant that could actually guide purchase decisions, surface the right product, and increase AOV.

### What BlueBuck built
- **CartIn AI** — a Shopify widget that embeds into any D2C store; AI-powered product discovery, cart assistance, and conversion nudges
- **Merchant dashboard** — analytics showing conversation quality, hot leads, funnel drop-off, session tracking, ROI per conversation
- **Intelligence layer** — usage nudge system, conversion funnel visualization, CSV export, latency tracking
- **PostHog integration** — full session and event analytics pipeline

### This is different
CartIn AI is BlueBuck's own product — not a client project. It means:
- Skin in the game: we built something we're accountable for in production
- Real traffic, real merchants, real revenue
- We understand Shopify/D2C deeply because we operate in it, not just build for it

### Outcome
- Live with D2C brand clients
- Generating revenue
- High session traffic, strong merchant retention
- [METRIC: number of brands / conversations processed / conversion lift — add specific numbers]

### [DIAGRAM] — How CartIn AI fits into a D2C Shopify store
Render as a simple flow:
```
Shopper lands on store → CartIn widget appears → AI conversation (product match / comparison / offer) → Add to cart → Merchant dashboard logs the conversion
```
Show this as a horizontal journey with the CartIn layer highlighted. Not a flowchart — more like a product diagram showing where it sits in the stack.

### [SCREENSHOTS needed]
- CartIn widget on a live store (conversation view)
- Merchant dashboard — analytics / funnel view
- Hot lead alert feature

---

## CASE STUDY 7 — MakeUGC

**Tags:** Own Product · Influencer Marketing · Creator Economy · India
**Geography:** India
**Stack:** Next.js · Custom dashboard · Creator database

### Headline
*We built our own influencer marketing platform — because the tools that existed weren't built for how India's creator economy actually works*

### The problem
Indian brands working with micro and nano influencers were managing everything in spreadsheets and WhatsApp groups. Existing platforms (Western tools, enterprise pricing) didn't fit the Indian market — wrong pricing, wrong creator discovery logic, wrong campaign workflow. MakeUGC was built to fill that gap.

### What BlueBuck built
- **MakeUGC platform** — full marketing website (makeugc.in) + proprietary dashboard (app.makeugc.in)
- **Creator database** — 500+ verified Indian creators, searchable by niche, audience, platform, and rate
- **Campaign management dashboard** — brands and agencies track campaigns, creator deliverables, approval workflows, and reporting
- **UGC request flow** — brief submission, creator matching, content delivery, usage rights management

### This is different
Same as CartIn AI — this is a BlueBuck-operated business, not a client project. It means:
- We understand the influencer/creator space from inside the product
- We've shipped brand campaigns (Sri Sri Tattva, VedaOil, India Runs × Redrob AI)
- The platform is live, has a real creator base, and is generating business

### Outcome
- 500+ creator database
- Live brand campaigns shipped
- [METRIC: campaigns run / brand clients / creator fees saved — add if shareable]
- [TESTIMONIAL from brand clients if available]

### [SCREENSHOT needed]
- MakeUGC dashboard (app.makeugc.in) — creator browse / campaign view
- Website homepage (makeugc.in)

---

## ANONYMOUS CASE STUDIES (already on homepage — keep as-is)

These three cards exist on the homepage and should be retained. They represent NDA-protected client work. No additional detail needed unless Paul decides to name them.

### Card 1
**Tag:** AI / Data Engineering
**Title:** AI-Powered Analytics Platform
**Outcome:** Reduced reporting latency by 87%
**Stack:** Python · LLM · Next.js

### Card 2
**Tag:** Data Engineering
**Title:** FinTech Data Pipeline
**Outcome:** 5× faster data processing at scale

### Card 3
**Tag:** AI / ML
**Title:** Custom LLM for Retail Intelligence
**Outcome:** 40% efficiency gain across operations

---

## PAGE STRUCTURE RECOMMENDATION

For the /case-studies or /work page, use this order:

1. **Filter bar** — tags: All / AI & ML / FinTech / HealthTech / Consumer App / Hospitality / Own Products
2. **Featured row** — MrMed + TradeMade (strongest named clients, most complete stories)
3. **Grid** — remaining case studies
4. **Own products section** — CartIn AI + MakeUGC in a distinct section with label: "Products we've built and operate"
5. **Anonymous cards** — at the bottom with label: "More work, shared under NDA"

---

## CONTENT GAPS TO FILL BEFORE PUBLISHING

Priority order:

| Item | From whom | Why it matters |
|---|---|---|
| Gleo.ai testimonial | Gleo founders | Only AI consulting case study — needs validation |
| TradeMade metric (users / backtests) | TradeMade team | Numbers make the dashboard case credible |
| CartIn AI metric (brands / conversations) | Internal | Your own product — you have this data |
| MrMed testimonial | Devashish or Saurab (founders) | Biggest brand, highest authority |
| Asteride testimonial | Jitesh Surana (founder) | Community product — founder voice matters |
| eStay booking uplift metric | Hotel management | Direct booking story needs a number |
| MakeUGC campaign count | Internal | Easy to add, gives the platform credibility |
| Screenshots from all 7 | Internal / clients | Most important single thing — no screenshots = weak case studies |

---

## TONE NOTES FOR THE WRITER/AGENT

- Write case studies in third person for the problem, first person plural ("we built", "we designed") for the solution
- Never use "leverage", "seamless", "robust", "cutting-edge" or "innovative"
- Every case study should name a specific tension or constraint — not just "they needed a website"
- The own products (CartIn AI, MakeUGC) should feel different from client work — more confident, more insider knowledge, "we built this because we understood the problem firsthand"
- For Indian clients (MrMed, TradeMade, Asteride, MakeUGC, CartIn AI): write for an international reader who may not know the Indian market context — one sentence of context where needed
- Dubai/Singapore readers are the secondary audience — eStay is proof of geographic reach

---

*Brief prepared for BlueBuck Research LLP. June 2026.*
ENDOFFILE
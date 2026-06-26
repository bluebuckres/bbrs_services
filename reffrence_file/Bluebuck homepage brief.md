# BlueBuck Research — Homepage Copy Brief
> For use in a code editor / AI agent. Section-by-section instructions only. Do not rewrite what isn't flagged.

---

## STATUS KEY
- 🔴 REWRITE — copy is generic or wrong, needs replacement
- 🟡 EDIT — direction is right, specific lines need changing
- 🟢 KEEP — do not touch
- ⚫ ADD — new element needed, currently missing

---

## SECTION 1: Top bar / nav strip

**Current:** `Kolkata · India · US/EU Overlap · Accepting 2 projects`

🟡 EDIT — Move the scarcity signal ("Accepting 2 projects") OUT of the nav bar. It is wasted here. Replace with just location + timezone:

```
Kolkata, India · US / EU overlap
```

The scarcity signal will be repositioned near the CTA (see Section 3).

---

## SECTION 2: Hero — Above the fold

### H1 (primary headline)
**Current:** `We partner with growth-stage companies on high-impact projects.`

🔴 REWRITE — This is the most generic possible positioning. It describes no one specifically and could belong to 500 agencies. 

**Direction:** Lead with AI/ML as the primary identity. The hero should communicate: who you are, who you're for, and what you solve — in two lines max. Do NOT explain what you do (that's the services section's job).

**Suggested angle (agent: rewrite in brand voice, do not use this verbatim):**
- Frame: "AI/ML engineering studio — built for founders who can't afford to rebuild from scratch"
- The H1 should name the buyer's context (growth-stage, technical, under pressure) and the outcome (not a vendor relationship — a build partner)
- It is correct and strategic to lead with AI/ML even though the studio does custom software too. AI/ML is the primary demand signal and the right SEO anchor. Custom software appears in the services section.

**SEO note:** The H1 is the single most important on-page SEO element. It must contain: "AI" + "ML" or "machine learning" + "engineering" + optionally "India" or "studio". Example structure: `AI & ML Engineering Studio for Growth-Stage Startups`

### Subheadline / descriptor (the 2-line body under H1)
**Current:** `A small, intentional team of engineers focused on AI/ML systems, data engineering, and custom software — for companies that can't afford to get it wrong.`

🔴 REWRITE — "Small, intentional" is soft. "Can't afford to get it wrong" is cliché and appears on dozens of agency sites.

**Direction:**
- Name the team size and what makes it structurally different (12 engineers, senior only, Kolkata-based)
- Name the buyer more precisely: Series A/growth-stage founders, technical leaders, international
- Optionally: name the risk you remove (wrong hire, wasted runway, rebuilds)
- Tone: direct, confident, no hedging. Write like a founder talking to another founder.

### Body descriptor below subheadline
**Current:** `One project at a time. Senior engineers only. No account managers.`

🔴 REWRITE — Every boutique agency says this verbatim. It has become meaningless.

**Direction:** Replace with 1–2 lines that make the same point but in a way that is specific to BlueBuck. Options:
- Reference the Kolkata engineering talent angle as a strength, not a footnote
- Reference the founder-to-founder access in human terms, not as a feature checklist
- Or drop this block entirely and let the "Why BlueBuck" section do this work

---

## SECTION 3: CTA block (first CTA)

**Current:** `Book a Discovery Call` button, repeated 3 times in the hero area.

🔴 REWRITE — Three CTAs before any proof kills conversion. Reduce to one primary CTA. Add a secondary softer CTA.

**Structure to use:**
```
[Primary CTA]  Book a Discovery Call
[Secondary]    See our work ↓
```

⚫ ADD — Scarcity signal adjacent to the CTA (moved from nav bar):
```
Currently accepting 1 more project this quarter.
```
Place this as small muted text directly above or below the CTA button. This is a high-conversion element — proximity to the action matters.

---

## SECTION 4: "Trusted by" strip

**Current:** Lists 5 countries (US, UK, Singapore, Dubai, India) with no logos, no names, no quotes.

🔴 REWRITE — Country names are not social proof. A list of geographies proves nothing.

**Direction (placeholder until assets are ready):**
- If client logos are not yet approved for display: remove this section entirely for now. An empty trust strip with countries is worse than no trust strip.
- When logos/testimonials are ready: replace with 3–5 actual client logos. If NDAs prevent naming: use industry + outcome ("FinTech, Singapore — 87% latency reduction") not just country names.
- Do not use placeholder "trusted by" language without real names or logos behind it.

**Agent note:** Leave this section as a commented-out placeholder in code until assets are confirmed.

---

## SECTION 5: Stats strip (46 projects / 12 engineers / 98% retention)

🟡 EDIT — The numbers are good. The framing is weak.

**Current labels:**
- `46+ Projects Shipped` / `Across 4 continents · 2022–present`
- `12 Senior Engineers` / `No juniors, no bench warmers`
- `98% Client Retention` / `Clients return for their next project`

**Edit these sub-labels:**
- "No juniors, no bench warmers" — cuts okay but slightly juvenile. Optional: replace with "Every engineer has shipped at production scale"
- "Clients return for their next project" — this is tautological (that's what retention means). Replace with something that explains *why* they return: "Because we hand off clean, documented, yours-from-day-one code"

🟢 KEEP the three numbers themselves — they are strong.

---

## SECTION 6: Services / "What We Build"

**Current:** 9 service areas — AI/ML, Data Engineering, Custom Software, DevOps, AI Agents, Product Design, Data Science, Cybersecurity, Technical Research.

🟡 EDIT — Do not cut services from the page (they support SEO and signal breadth). But adjust the visual/copy hierarchy:

**Change the section intro:** Current copy "Nine focused disciplines. Every engagement is handled by senior engineers who've done it before." is flat.

**Direction for intro copy:** Make it clear that AI/ML + Data Engineering + Custom Software are the core. The others are adjacent capabilities. One sentence is enough: e.g. "AI/ML and data engineering at the core. Full-stack capability around it."

🟢 KEEP all 9 service cards as-is — the tech stack tags (Spark, dbt, LangChain, etc.) are SEO-valuable and self-filter qualified visitors.

---

## SECTION 7: Case Studies / "Selected Work"

**Current:** 3 cards with project titles, one-line outcomes, and tech tags. No client names, no photos.

🟡 EDIT (temporary state) — The outcome numbers are strong ("87% latency reduction", "5×", "40%"). These should not be hidden in small card text.

**Changes:**
- Make the outcome stat the visual headline of each card, not the project title
- Project title becomes the subheading
- When client logos/names are approved: add them to each card

🟢 KEEP the tech stack tags — they are the right detail for a technical buyer scanning the page.

---

## SECTION 8: "Why BlueBuck Research"

**Current:** 6 bullet points — Senior engineers only / One project at a time / Founder-to-founder access / US/EU timezone / Full IP / Selective by design.

🟡 EDIT — The content is correct. The execution is too listy and dry.

**Specific line edits:**

1. **"We primarily serve international clients — but selectively partner with ambitious Indian companies building for global markets."**
   🔴 REWRITE THIS LINE — It reads as apologetic about being Indian and condescending toward Indian clients. Remove the "but." Own the India base as a feature, not a caveat.
   Direction: "Kolkata-based. Globally trusted. India is where our engineering talent lives — not something we footnote."

2. **"Selective by design / We take 3–4 projects per quarter. If we're full, we'll tell you — and refer you to who's right."**
   🟢 KEEP — This is the best line on the page. Honest, specific, founder-voice. More of this.

3. **"Full IP, zero lock-in / Every line of code, design file, and document belongs to you from day one. Always."**
   🟢 KEEP — Addresses international buyer's #1 concern about offshore teams.

---

## SECTION 9: FAQ

**Current:** Section is labelled "Common Questions / Before you reach out" but contains NO actual questions — just a CTA button.

🔴 REWRITE — An FAQ with no questions is a broken section. Either write real questions or remove the section label.

**5 questions to write answers for:**

1. Do you work with early-stage companies or only post-Series A?
2. How does an engagement start — what does the first two weeks look like?
3. We're in the US/EU — how do you handle timezone overlap day to day?
4. Can we see past client work if it's under NDA?
5. We already have an internal team — can you work alongside them?

**Tone for answers:** 2–4 sentences each, direct, first person ("We..."), no bullet points inside answers. These should read like how a co-founder would answer on a call.

---

## SECTION 10: Footer CTA / "Ready to build something great?"

**Current:** Repeats the Discovery Call CTA with 3 reassurance bullets.

🟡 EDIT — The 3 bullets ("Direct founder access / Response in 24 hours / India-based · globally focused") are fine but generic.

**One change:** Replace "India-based · globally focused / Same quality, competitive pricing" — the "competitive pricing" framing positions you as cheap, not premium. Remove the pricing reference entirely.

Replace with: "Kolkata engineering. Global delivery standards." or leave the sub-label blank.

---

## MISSING SECTIONS — ADD THESE

### ⚫ ADD: Founder section (above or below the stats strip)

**Why it's missing:** You sell "founder-to-founder access" as a core differentiator. There are currently no names, no faces, no bios on the page. The buyer is supposed to trust you personally — they need to see who you are.

**What to add:**
- Names + photos of both co-founders
- 2–3 lines each: background, what they built before, what they focus on at BlueBuck
- Optional: LinkedIn links

### ⚫ ADD: 1–2 client testimonials (when available)

**Placement:** Between the case studies section and the "Why BlueBuck" section.

**Format:** Pull quote, client name + title + company. If logo approved, add it. If not, name + role is enough.

Do not use generic placeholder quotes. Add when you have the real thing.

---

## SEO CHECKLIST — verify before shipping

- [ ] H1 contains: "AI" + "ML" or "machine learning" + "engineering" (and optionally "India" or "studio")
- [ ] First 200 words of body copy contain at least 2 of: "LLM fine-tuning", "RAG pipeline", "data engineering", "AI agents", "growth-stage"
- [ ] Meta title: `BlueBuck Research — AI & ML Engineering Studio | Kolkata, India`
- [ ] Meta description: 150–160 chars covering AI/ML + boutique + global clients + India
- [ ] Case study card titles contain outcome keywords, not just project names
- [ ] Tech stack tags (LangChain, Spark, dbt, etc.) remain visible in DOM — do not hide behind JS-only toggles
- [ ] Alt text on all images references the technology or project type, not generic filenames

---

## DO NOT CHANGE

- The 9 service categories (structure + tech tags)
- The 3 outcome numbers (46 projects, 12 engineers, 98% retention)
- The "Full IP, zero lock-in" promise
- The "We take 3–4 projects per quarter. If we're full, we'll tell you." line
- The timezone / location signals throughout

---

*Brief prepared for BlueBuck Research LLP. Last updated: June 2026.*
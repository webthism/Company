# Webthism — Page Sections & Animation Workflow

Order of sections as rendered in `src/app/page.tsx`, top to bottom, with every animation currently implemented per component.

---

## 0. Loading Screen — `src/components/loading-screen.tsx`

- **Desktop only.** On mobile (`max-width: 767px`) or `prefers-reduced-motion: reduce`, it's skipped entirely — the hero is shown immediately.
- Shows `/loader.png` (240×240px, `object-contain`) centered on a full-screen `#fdf6ec` overlay (`z-[200]`, covers everything).
- **Timeline:**
  1. `0ms` — image appears at scale 1, opacity 1.
  2. `2000ms` — `growing` flips true: image scales from `1 → 3.5` and fades `opacity 1 → 0` over `600ms` (ease `[0.76, 0, 0.24, 1]`).
  3. `2600ms` — the whole overlay unmounts; `AnimatePresence` fires `exit={{ opacity: 0 }}` (`300ms` fade) and calls `onComplete`, which flips `isLoading` to `false` in `page.tsx` and restores `document.body.style.overflow`.

---

## 1. Sticky Nav Bar — `src/components/sticky-bar.tsx`

- `fixed top-0 w-full z-[100]`, always visible, always sticky (no hide-on-scroll behavior).
- Listens to `window.scrollY`: when `> 10px`, background switches from `transparent` to `bg-[#fdf6ec]/90` + `backdrop-blur-xl` + border + shadow, with `padding` shrinking slightly (`py-4/5 → py-3`). Transition is a plain CSS `transition-all duration-300` (no Framer Motion).
- Contains: "Webthism" logo-text link (left) + "Book a Free Call" pill button (right, links to `#book`).

---

## 2. Hero — `src/components/hero.tsx`

- Full-viewport section (`min-h-[100svh]`), background `#fdf6ec`.
- **Ambient background blobs** (2x `motion.div`, `aria-hidden`, purely decorative):
  - Blob 1 (orange, top-left area): loops `x: [0,40,-20,0]`, `y: [0,-30,20,0]` over `16s`, `easeInOut`, `repeat: Infinity`.
  - Blob 2 (red, bottom-right area): loops `x: [0,-30,25,0]`, `y: [0,25,-20,0]` over `18s`, `easeInOut`, `repeat: Infinity`.
- **Content entrance** — a parent `container` variant staggers its children in (`staggerChildren: 0.08`, `delayChildren: 0.15`):
  1. **"Webthism" logo text** — `fadeUp` variant: `opacity 0→1`, `y: 20→0`, `600ms`, ease `[0.22,1,0.36,1]`. Sized large (`2.1rem → 4.5rem` across breakpoints) in `#c1272d`.
  2. **Headline** (`"We Build Websites That Turn Hungry Googlers Into Paying Customers"`) — each word is its own `motion.span` using the `wordVariant` (`opacity 0→1`, `y: 24→0`, `500ms`), staggered word-by-word via the parent container. Words from index 5 onward ("Hungry Googlers Into Paying Customers") are styled `italic font-serif text-[#c1272d]`. Sized smaller than the logo (`3xl → 5xl`).
  3. **CTA button** ("Book a Free 20-Min Website Strategy Call") — same `fadeUp` variant, plus `whileHover={{ scale: 1.05 }}` / `whileTap={{ scale: 0.95 }}` via Tailwind's `hover:scale-[1.05] active:scale-[0.95] transition-all`.

---

## 3. Problem — `src/components/problem.tsx` — "Sound Familiar?"

- Plain vertical section, no scroll-jacking — simple **scroll-triggered fade-ins** (`whileInView`, `viewport={{ once: true }}`):
  - Heading: `opacity 0→1`, `y: 20→0`.
  - Four pain-point cards: each `opacity 0→1`, `y: 24→0`, `500ms`, staggered by `delay: i * 0.15`.

## 4. Mechanism — `src/components/mechanism.tsx` — "The Full Plate Framework"

- **Peeking curly-haired face** (CSS-drawn circles, no image): slides/fades in from the left — `x: -30 → 0`, `opacity 0→1`, `600ms`.
- Heading fades up beside it (`opacity 0→1`, `y: 20→0`).
- Three step cards (Design / Convert / Grow) fade up in sequence: `opacity 0→1`, `y: 24→0`, `500ms`, staggered `delay: i * 0.12`.
- All triggers are `whileInView`, `once: true` (no repeat on scroll-back).

## 5. Calculator — `src/components/calculator.tsx` — "How Much Is Zomato/Swiggy Really Costing You?"

- Dark section (`bg-[#2a211c]`).
- Heading fades up on scroll into view.
- **Interactive slider** (₹50,000–₹10,00,000 monthly sales, native `<input type="range">`, track fill computed inline via `linear-gradient` based on `sliderPercent`).
- **Live count-up numbers** via a `CountUp` component: wraps the target value in a Framer Motion `useSpring` (`stiffness: 120, damping: 22`), so every digit change (current sales, monthly loss, yearly loss) animates smoothly to the new value rather than jumping.
- Derived stats recompute on every slider move: monthly loss (27% commission), yearly loss (×12), and "pays for itself in N weeks" (₹50k website ÷ monthly loss).
- CTA button: `hover:scale-[1.03]` transition.

## 6. Proof — `src/components/proof.tsx` — "Concept Work"

- Heading fades up on scroll.
- Three concept cards **rise up from further below** than other sections (`y: 60 → 0`, `600ms`, `viewport amount: 0.3` so they trigger a bit later/deeper into view), staggered `delay: i * 0.15` — mimics "each card rises into place one at a time" from the original spec, done via stagger rather than scroll-scrubbing.
- Cards are placeholder screenshots (gradient block) + concept name + caption.

## 7. Services (Funnel) — `src/components/funnel-services.tsx` — "What You Get"

- Heading fades up.
- Four service cards fade up in a 2×2 grid, staggered `delay: i * 0.1`.

> Sections 3–7 above are rendered in `page.tsx` each individually wrapped in a `motion.div` (`initial: opacity 0, y:24` → `whileInView: opacity 1, y:0`, `viewport once, amount 0.2`, `600ms`) as an extra outer fade, on top of each component's own internal animations.

---

## 8. Pricing — `src/components/pricing.tsx` — "Pick Your Plate"

- Heading fades up.
- Three tier cards (Starter / Growth / Premium) fade up staggered `delay: i * 0.1`.
- **Growth tier** is visually highlighted: dark background, `md:scale-105`, `shadow-2xl`, "Most Popular" badge — no motion difference, purely static styling.

## 9. Checklist — `src/components/checklist.tsx` — "10 Things Every Restaurant Website Must Have"

- Cream section (`bg-[#f3e9dc]`).
- Heading fades up.
- 10 checklist rows fade up individually: `y: 16→0`, staggered `delay: min(i * 0.05, 0.5)` (stagger caps out so the 10th item doesn't wait too long).
- **Lead-magnet modal** (`AnimatePresence`): clicking the CTA opens a modal —
  - Backdrop: `opacity 0→1` fade, click-outside-to-close.
  - Modal card: `opacity 0→1`, `scale 0.9→1`, `y: 20→0` on enter; reverses on exit.
  - On submit: shows a "Check your email!" success state (no exit animation change, just a content swap) after an artificial `600ms` delay (placeholder for a real email-capture backend call).
  - Explicit "X" close button and "Maybe later" text link — both close without submitting.

## 10. Testimonials (Funnel) — `src/components/funnel-testimonials.tsx` — "What Owners Say"

- Heading fades up.
- 3 video placeholders (static, no animation — just a dark box + play icon).
- 3 text testimonial cards fade up, staggered `delay: i * 0.1`.

## 11. FAQ — `src/components/faq.tsx` — "Questions, Answered"

- Heading fades up.
- Accordion: clicking a question toggles `openIndex`.
  - Chevron icon rotates `0 → 180deg` via `motion.div animate={{ rotate }}`.
  - Answer panel uses `AnimatePresence` + `height: 0→"auto"`, `opacity: 0→1`, `300ms` — a real height animation (not just opacity), so it slides open/closed.
  - First FAQ is open by default (`openIndex` initial state `0`).

## 12. Process (Funnel) — `src/components/funnel-process.tsx` — "What Happens After You Book"

- Cream section (`bg-[#f3e9dc]`).
- Heading fades up.
- 3 numbered steps (with icon + number badge) fade up staggered `delay: i * 0.12`.

## 13. Final CTA — `src/components/final-cta.tsx` — "Ready to Stop Losing Money to Aggregators?"

- Dark section (`bg-[#2a211c]`), `id="book"` (scroll target for every other CTA on the page).
- Heading fades up, subheading fades up with `delay: 0.1` right after.
- CTA button: static (no entrance animation), `hover:scale-[1.05] transition-all`.
- Calendly widget is a static placeholder box (no animation — pending real embed).

## 14. Footer — `src/components/site-footer.tsx`

- Fully static, no animation. Logo, contact links, social icons (hover color transitions only via CSS), privacy link, copyright line.

---

## Persistent / Floating Elements

### WhatsApp Button — `src/components/whatsapp-button.tsx`

- `fixed bottom-5/8 right-5/8 z-[90]`, visible across the entire page (rendered once in `page.tsx`, sits above `Hero`).
- Entrance: `opacity 0→1`, `scale 0.5→1`, delayed `1s` after mount, `400ms`, ease `backOut` (so it "pops in" shortly after the hero content settles).
- Idle state: a `<span>` ring behind the icon uses Tailwind's `animate-ping` (CSS keyframe, infinite) to pulse outward continuously.
- Interaction: `whileHover={{ scale: 1.08 }}`, `whileTap={{ scale: 0.95 }}`.

---

## Global Notes

- Almost every section uses the same `whileInView` + `viewport={{ once: true }}` pattern from Framer Motion — animations play once the first time a section scrolls into view, then stay put (no re-triggering on scroll up/down).
- No scroll-jacking or pinned/sticky scroll sections remain anywhere on the page (the earlier "laptop opens as you scroll" concept was built and then fully removed per later direction — sections 3–7 now scroll normally like the rest of the page).
- Reduced-motion users (`prefers-reduced-motion: reduce`) skip the loading screen; other sections don't yet have explicit reduced-motion overrides beyond that.

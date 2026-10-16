# Webthism — Page Sections & Animation Workflow

Dark & premium redesign. Sections as rendered in `src/app/page.tsx`, top to bottom.

---

## Global

- **Palette** (`globals.css` `@theme`): `ink #0e0a08` (page bg), `surface #1a1411` (cards), `cream #f5ece0` (text), `brand #c1272d` / `brand-bright #e23a40` (red), `ember #e8792e` (orange). Use as `bg-ink`, `text-cream/60`, etc.
- **Film grain**: `body::after` fixed SVG-noise overlay, 6% opacity.
- **Smooth scroll**: `smooth-scroll.tsx` runs Lenis (`anchors: true`, so every `#…` link glides). Skipped under `prefers-reduced-motion`. Add `data-lenis-prevent` to anything that must scroll natively (modal, booking iframe).
- **Reveal helpers** (`ui/reveal.tsx`):
  - `Reveal`: fade + lift on first scroll into view.
  - `MaskReveal`: heading lines slide up from behind a mask, staggered. Pass `play` to drive it manually (the hero waits for the loader).
  - `Eyebrow`: small orange label above headings.
- **Curtain effect**: the Hero + Problem block (rounded bottom) scrolls away to reveal the sticky Calculator. The rest of the page (rounded top) then slides up over it. Both blocks use `overflow-clip` (not `hidden`) so the pinned sections inside still work.
- **Reduced motion**: pinned and horizontal sections fall back to normal vertical stacks, and every word is fully visible.

## 0. Loading Screen — `loading-screen.tsx`
Desktop only. The avatar in a light circle on ink pops in, grows and fades at 1.0s, and unmounts at 1.5s. Then `isLoading` flips and the hero plays its entrance.

## 1. Nav — `sticky-bar.tsx`
Dark glass once scrolled past 10px. Hides on scroll down and reappears on scroll up. Section links on desktop. A thin red scroll-progress line runs along the bottom edge.

## 2. Hero — `hero.tsx`
- Eyebrow pill with a pulsing dot.
- Headline lines mask-reveal in. Desktop keeps the letter-repel effect.
- Subline, then CTAs (book a call, and "See what you're losing" → `#calculator`).
- Ambient blobs, a cursor-follow glow and a faint grid behind.
- On scroll out, the content scales to 0.9, fades and drifts down.
- Infinite marquee of restaurant types along the bottom (CSS `animate-marquee`).
- `ASSET:` slot for a hero food photo.

## 3. The 30% Problem — `problem.tsx` (`#problem`)
Pinned for 260vh. "30%" counts up over the first 30% of the pin. The three pain lines then light up word by word (30–90%).

## 4. Calculator — `calculator.tsx` (`#calculator`)
Logic unchanged (slider plus spring count-up numbers). Dark glass card with an ember glow and glowing loss figures.

## 5. How It Works — `how-it-works.tsx` (`#how`)
Merges the old Framework, Services and Process sections. Desktop: pinned for 400vh while four panels (Design / Convert / Grow / Launch) slide sideways via the `--hx` CSS var. Mobile: a vertical stack. Each panel has an `ASSET:` slot for a client screenshot.

## 6. Proof — `testimonials.tsx`
WhatsApp screenshots drift at different speeds (parallax) and straighten as they scroll through. The video sits in a framed card.

## 7. Pricing — `pricing.tsx` (`#pricing`)
Three tiers showing their top 4 features, with "+ N more included" expanding the rest. A cursor spotlight on hover. Growth is lifted, with an ember border and glow. "Custom solutions" is a slim row.

## 8. FAQ — `faq.tsx` (`#faq`)
Top 4 questions in a two-column layout. The "+" rotates into an "×" and the answer slides open.

## 9. Checklist — `checklist.tsx`
A slim "Free PDF" banner. The button opens the email-capture modal (posts to `/api/checklist-signup`).

## 10. Final CTA — `final-cta.tsx` (`#book`)
Large mask-revealed headline, then the booking button (Google Calendar link) and the embedded calendar.

## 11. Footer — `site-footer.tsx`
Dark footer with an oversized faint "Webthism" wordmark bleeding off the bottom.

---

## Waiting on assets
- **Stats strip**: add one once real numbers exist (restaurants served, ₹ saved).
- **Client screenshots**: replace the gradient visuals at the `ASSET:` slots in `how-it-works.tsx`.
- **Food photo**: hero `ASSET:` slot.

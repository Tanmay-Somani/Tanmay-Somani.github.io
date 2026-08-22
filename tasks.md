# Flip Book — status

## Round 1 fixes — DONE
- [x] Breathing room above book + controls ≥24px below.
- [x] Spine crease visible (overlay above spreads).
- [x] Page turns carry real page content.

## Multi-image galleries — DONE
- [x] 29 webps in `images/demo/`, all paths verified; 10 projects with `imgs[]` galleries.

# "Project Codex" template upgrade — DONE
- [x] JS-synthesized flips (rAF from scrollLeft) — all browsers, no Chrome gate.
- [x] Title/TOC spread (2-col, all 21, click-to-jump) + back cover colophon.
- [x] Fraunces + JetBrains Mono; dark/funky paper palettes; fancy ribbon;
      scan-overlay; corner arrows; progress row + hint.
- [x] Real screenshots in slideshows; keyboard nav; reduced-motion guards.

# Polish round 2 — DONE

## Interaction & feel
- [x] Unified turn engine: arrows/keys/TOC jumps ride a custom rAF tween
      (~600ms easeInOutCubic) instead of UA-owned smooth-scroll — identical
      flip rendering everywhere. Any direct input cancels the tween.
- [x] Landing "paper settle": incoming left sheet gets `.landed`
      (`page-settle` scaleY squash, 240ms), cleared on animationend,
      skipped under reduced motion.
- [x] TOC rows are real `<button class="toc-row">` — Enter/Space work;
      focus-visible rings on corner-nav, toc-rows, ribbon, carousel region.

## Content
- [x] 11 projects without demo assets now show a styled mock browser-window
      plate (chrome bar + URL + icon/title/tag/note) instead of bare placeholder.
- [x] All 21 summaries expanded to 2–3 sentence descriptions.
- [x] WIP stamps confirmed intentional: Native AI Browser + Snake Game AI Agent.

## Structural
- [x] `.sheet` is now flex-column with overflow-safe vertical centering
      (`.sheet-body` margin:auto trick); right-sheet bodies stretch so
      `.sheet-media { flex:1 }` finally fills the page; btn-row pins bottom.
- [x] Dead CSS removed (`timeline-scope` / `scroll-timeline --booktl`).
- [x] Spine crease anchored explicitly to the gutter (`left:50%`,
      translateX, width min(16%,140px)).
- [x] Progressive page edges: JS writes `--read` (scroll fraction);
      left edges thicken, right stack compresses/fades toward back cover.
- [x] Ribbon is a real bookmark button → jumps to Contents (hover lift,
      focus ring, tooltip).
- [x] Folios nudged to true page corners (1.35em).

## A11y & robustness
- [x] Spreads `role="group"` + aria-labels; progress track is a proper
      `role="progressbar"` with live `aria-valuenow`; label aria-hidden.
- [x] Mock plates aria-hidden (no duplicate SR reading).
- [x] FOUT already mitigated (preconnect + display=swap verified).

## Verify (hard refresh Ctrl+ShiftR)
- [ ] Arrow click = full eased page turn ending in settle bounce.
- [ ] Tab reaches carousel → arrows/Home/End turn pages; TOC buttons Enter-jump.
- [ ] Sheet text vertically centred; dense spreads clip at bottom only.
- [ ] 11 mock plates render; growth/aqi galleries fill right pages edge-to-edge.
- [ ] Edges compress as you approach the back cover; ribbon jumps to TOC.

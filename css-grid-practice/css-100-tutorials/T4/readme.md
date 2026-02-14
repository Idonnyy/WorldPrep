# T4 - Three Column Layout

This project demonstrates a basic three-column layout using CSS Grid.

## Concepts Practiced
- `display: grid`
- `grid-template-columns` with `repeat()`
- Fractional units (`fr`) for equal columns
- Gap between columns
- Column auto-placement
- Responsive-friendly layout basics

## Goal
Create a layout containing:
- Three equal-width columns across the page
- A header spanning all columns
- Use `min-height: 100vh` to fill the screen

## Files
- `index.html` — HTML structure
- `style.css` — CSS for grid layout and styling
- `appscript.js` (optional) — JavaScript for interactivity

## Notes
- Use `repeat(3, 1fr)` for cleaner, scalable column definitions.
- Let items auto-place unless you need a specific column span.
- `gap` is preferred over margins between grid items.
- `min-height:100vh` ensures the layout fills the viewport while allowing growth if content increases.

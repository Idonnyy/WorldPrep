# T5 - 2x2 Image Grid Gallery

This project demonstrates a simple 2x2 image gallery using CSS Grid.

## Concepts Practiced
- `display: grid`
- `grid-template-columns` and `grid-template-rows`
- `gap` between grid items
- Fixed row heights
- Auto-placement of items in a grid

## Goal
Create a gallery layout:
- 2 columns × 2 rows
- Images fill each grid cell
- Maintain consistent spacing between items

## Files
- `index.html` — HTML structure
- `style.css` — CSS grid styling
- `appscript.js` (optional) — JavaScript for interactivity

## Notes
- Use `grid-template-columns: repeat(2, 1fr)` for equal columns
- Use `grid-template-rows: repeat(2, 200px)` or any height that works for your images
- Use `gap` for spacing instead of margins
- This layout is a stepping stone to responsive galleries with more images

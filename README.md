# SpinRank

A static casino affiliate landing page: a hero section, a ranked list of casinos with bonus details and CTA buttons, a "how we rank" criteria grid, an FAQ, and a footer with responsible-gambling and affiliate disclosures.

## Structure

- `index.html` — page markup
- `assets/css/style.css` — styles
- `assets/js/script.js` — mobile nav toggle

## Customizing

- Casino entries live in the `<ol class="casino-list">` block in `index.html`. Each `<li class="casino-card">` is one listing — swap in real operator names, logos, bonus copy, and affiliate URLs (replace the `href="#"` on each "Claim Bonus" button).
- Colors and spacing are defined as CSS custom properties at the top of `style.css`.

## Running locally

Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

# 🍞 Foodies — Food & Bakery Landing Page

A responsive, single-page landing site for a food/bakery brand called **Foodies**, built with **HTML5**, **CSS3**, **Bootstrap 5**, and **vanilla JavaScript**. It includes a hero banner, animated stats, an about section, a menu/food showcase, a testimonial carousel, an FAQ section, and a newsletter signup — all wrapped in a warm, red/maroon color theme.

## 🔗 Live Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed navigation bar that turns solid white with a shadow once you scroll down. Collapses into a hamburger menu on mobile. |
| **Home / Hero** | Full-height banner with a background image, headline, and "Cart" / "Order Now" buttons. |
| **Counter** | Four animated statistics (Savings, Photos, Dish Types, Globes) that count up on page load. |
| **About** | Two alternating image + text blocks describing the brand and its ingredients/process. |
| **Story** | A centered quote/banner section with a full-width background image. |
| **Explore Foods** | A 3-column grid of menu item cards with images, prices, and an "Order Now" button. |
| **Testimonial** | A Bootstrap carousel cycling through customer reviews. |
| **FAQ** | A 2-column list of frequently asked questions. |
| **Book Food** | A slim call-to-action strip with a fixed ("parallax") background image. |
| **Newsletter** | An email signup form offering a discount. |
| **Footer** | Quick links, social icons, and a copyright line. |

## 🛠️ Built With

- **HTML5** — semantic page structure
- **CSS3** — custom styling with CSS variables for easy theming, plus responsive media queries
- **[Bootstrap 5.3.8](https://getbootstrap.com/)** — grid system, navbar, carousel components, and utility classes
- **[Font Awesome 7.3.1](https://fontawesome.com/)** — icons (cart, arrows, checkmarks, social icons)
- **Vanilla JavaScript** — animated counters, sticky navbar on scroll, and mobile menu auto-close
- **[Google Fonts – Roboto](https://fonts.google.com/specimen/Roboto)** — primary body font

No build tools, frameworks, or package managers are required — it's plain static HTML/CSS/JS.

## 📁 Project Structure

```
foodies/
├── index.html          # Main page markup
├── css/
│   ├── style.css        # Core theme styles (variables, layout, sections)
│   └── media.css         # Responsive breakpoints (tablet, mobile, small phones)
├── js/
│   └── main.js            # Counter animation, sticky navbar, mobile menu close
└── images/               # (not included — see "Adding Images" below)
    ├── logo.png
    ├── bg/
    │   ├── bg-1.jpg        # Hero background
    │   ├── bg-2.jpg        # Story section background
    │   └── bg-3.jpg        # Book Food section background
    ├── img/
    │   ├── img-1.png       # About section image 1
    │   ├── img-2.png       # About section image 2
    │   ├── img-3.jpg       # Menu card image
    │   ├── img-4.jpg       # Menu card image
    │   └── img-5.jpg       # Menu card image
    └── review/
        ├── review-1.jpg    # Testimonial avatar
        └── review-2.jpg    # Testimonial avatar
```

> ⚠️ **Adding Images:** This repo's markup references an `images/` folder that isn't included in this export. Create the folder structure above and drop in your own logo, background photos, food photos, and review avatars — matching the filenames referenced in `index.html` and `style.css` (or update the paths to match your own filenames).

## 🎨 Customizing the Theme

All core colors and fonts live in CSS variables at the top of `css/style.css`, so you can re-theme the whole site by editing just a few lines:

```css
:root{
    --primary-color:#a82c48;      /* brand color — buttons, links, accents */
    --secondary-color:#43121d;    /* headings */
    --third-color:#f98169;        /* reserved accent color */
    --white-color:#fff;
    --text-color:#555;            /* body text */
    --priamry-font:'Roboto',sans-serif;
    --secondary-font:'Quicksand',sans-serif;
}
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/foodies.git
   cd foodies
   ```
2. **Add your images** into an `images/` folder as described above.
3. **Open `index.html`** directly in your browser, or serve it locally, e.g.:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

No installation or build step is needed — everything is loaded via CDN (Bootstrap, Font Awesome, Popper.js) except the local `css/` and `js/` files.

## 📱 Responsiveness

The layout is fully responsive via Bootstrap's grid system plus custom breakpoints in `css/media.css`:
- `≤ 991px` — tablets: full-width text blocks, centered mobile nav
- `≤ 767px` — phones: smaller headings, stacked newsletter form, adjusted section padding
- `≤ 330px` — very small phones: extra padding on the testimonial carousel

## 🧩 Known Issues / Possible Improvements

- `.top-baner` in `media.css` is a typo and should be `.top-banner` to actually apply to the hero section.
- `.testimonial-section` is declared twice in `style.css` with overlapping rules — could be merged into one block.
- `--black-color` is referenced in the newsletter input styling but is never defined in `:root`.
- The newsletter form has no `action`/JS handler yet, so submissions currently don't go anywhere — hook it up to a backend or a service like Mailchimp/Formspree.
- Counter values are hardcoded in `main.js`; consider pulling them from data attributes in the HTML for easier editing.

## 📄 License

This project is free to use for personal or educational purposes. Add a license of your choice (e.g. MIT) if you plan to publish or share it publicly.

## 🙌 Credits

- Layout and design concept inspired by common food/bakery landing page templates.
- Icons by [Font Awesome](https://fontawesome.com/).
- UI components by [Bootstrap](https://getbootstrap.com/).

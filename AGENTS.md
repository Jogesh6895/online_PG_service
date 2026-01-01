# Agent Guidelines for Online PG Services

## Project Overview
This is a static website for "Simple PG Services" - a paying guest accommodation website. Built with HTML, CSS, and vanilla JavaScript/jQuery. No build system or framework required.

## Development Commands

Since this is a static website with no build system:

- **Run locally**: Open `home.html` in a browser or use a simple HTTP server
  ```bash
  python3 -m http.server 8000  # or
  npx serve  # if Node.js is available
  ```

- **No linting/testing**: There are no linting tools or testing frameworks configured. Code should be manually reviewed for quality.

## Code Style Guidelines

### HTML Structure
- Use semantic HTML5 elements (header, nav, section, etc.)
- Maintain single-page structure with anchor-based navigation
- Section IDs should be lowercase with underscores: `#room_types`, `#contact_us`
- Use comments to mark sections: `<!-- JG log: Section Name -->`
- Tables should use `center` tags for alignment (following existing pattern)
- Include appropriate alt text for images

### CSS Styling
**File Header Format** (required in all CSS files):
```css
/*
created on: 12th March, 2023
author: Jogesh Ghadai (jogesh.6895@gmail.com)
*/
```

**Naming Conventions:**
- Class names: kebab-case (`.slideshow-container`, `.list-item`)
- Colors: Use existing color palette from styles.css
  - Primary dark: #40513B, #609966
  - Backgrounds: #EDF1D6, #DFFFD8
  - Accent: #B3E5BE, #5D9C59
- Font families: Use project fonts (Shantell Sans, Kaushan Script, Montserrat, Merriweather, Sacramento)

**Styling Rules:**
- Global reset: `* { list-style: none; text-decoration: none; box-sizing: border-box; }`
- Smooth scrolling: `html { scroll-behavior: smooth; }`
- Use rounded corners: 4px (small), 5px (medium), 15-25px (large elements)
- Responsive design with media queries at 1300px breakpoint
- Hover transitions: 0.4s for images, 0.6-0.7s for navigation
- Animations use `@keyframes` with 1.5s duration

### JavaScript Conventions

**File Header Format** (required in all JS files):
```javascript
/*
created on: 12th March, 2023
author: Jogesh Ghadai (jogesh.6895@gmail.com)
*/
```

**Code Style:**
- Use jQuery for DOM manipulation when possible (consistent with existing code)
- Prefer `let` over `var` for variable declarations
- Function names: camelCase (`toggle_about_us_img`, `showSlides`)
- Use `"use strict";` inside jQuery callbacks
- Event listeners: `addEventListener` for vanilla JS, `.click()/.hover()` for jQuery
- No modules or ES6+ features (keep compatible with older browsers)
- Select elements using `getElementsByClassName` or jQuery `$()`

**Patterns:**
- Slideshow: Use `slideIndex` variable with `showSlides()` function
- Image toggling: Check `.endsWith('.png')` or `.endsWith('1.png')`
- Navigation: Use `slideToggle()` for mobile menu, `removeAttr('style')` for desktop
- Window resize: Check `$(window).width() > 780` for breakpoints

### Asset Management
- Images stored in `/images/` directory
- Videos in `/videos/` directory
- Use relative paths: `./images/`, `./css/`, `./scripts/`
- Image naming: lowercase with underscores (single_bed_non_ac.png)
- Static vs dynamic images: separate naming (static_map.png, map.gif)

### Error Handling
- No formal error handling in place (legacy codebase)
- Add console.log for debugging when needed
- Check element existence before manipulation: `[0]` index check

### Browser Compatibility
- Support for older browsers (no ES6+ features)
- jQuery 3.6.3 loaded via CDN
- Google Fonts for typography

### Code Organization
- Keep CSS in `css/styles.css`
- JavaScript files in `scripts/` directory by feature
  - `nav_bar.js`: Navigation functionality
  - `slide_show.js`: Gallery slideshow
  - `change_about_us_img.js`: About Us section
  - `change_contact_dyn.js`: Contact section interactions
- Main entry point: `home.html` with all script tags at bottom of body
- Forms submit to `submitted.html` (simple confirmation page)

### Performance Notes
- No optimization tools configured
- Images should be compressed before adding
- Lazy loading not implemented (consider adding for large images)
- CDN usage for jQuery and Google Fonts

### Git/Version Control
- No specific commit message conventions observed
- No .gitignore present (consider adding: .DS_Store, node_modules/, etc.)

When making changes:
1. Follow existing code patterns and conventions
2. Test in multiple browsers (Chrome, Firefox, Safari)
3. Test mobile responsiveness (viewport < 1300px)
4. Maintain consistent styling and spacing
5. Keep animations smooth (0.4-1.5s duration)
# Simple PG Services Website

A responsive single-page website for "Simple PG Services" - a paying guest accommodation service located in Balasore, Odisha, India.

## 🌟 Features

- **Single Page Application**: All content accessible through smooth-scrolling navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Image slideshow gallery with manual navigation
  - Dynamic hover effects on contact information icons
  - Mobile-friendly hamburger menu
  - Image zoom effects on hover
- **Rich Media**: Includes room photos, service demonstrations, and video tours
- **Contact Form**: Functional form with validation for inquiries
- **Customer Reviews**: Showcase of guest testimonials

## 🚀 Live Preview

To view the website locally:

```bash
# Clone the repository
git clone https://github.com/Jogesh6895/online_PG_service.git

# Navigate to the directory
cd "Online PG Services 2"

# Option 1: Open directly in browser
# Simply open home.html in your preferred web browser

# Option 2: Use a local server
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

## 📸 Screenshots

### Home Page
- Hero section with tagline
- Professional navigation bar with mobile menu

### Room Types
- Single, Double, Triple, and Quadruple bed rooms
- Room availability display
- High-quality images

### Services
- Fully Furnished Kitchen
- Hot & Cold Shower
- Terrace Recreation
- Wardrobe with Locker

### Gallery
- Interactive image slideshow
- Previous/Next navigation buttons
- Dot indicators for direct navigation

### Videos
- Video tours of the property
- Embedded video players

### Reviews
- Customer testimonials with star ratings
- Authentic guest feedback

### Contact
- Google Maps integration
- Email, phone, and timing information
- Contact form for inquiries

## 🏗️ Project Structure

```
Online PG Services 2/
├── css/
│   └── styles.css          # Main stylesheet
├── images/
│   ├── AboutUs_1.png       # About us section images
│   ├── AboutUs_2.png
│   ├── background2.png     # Header background
│   ├── main_background3.jpeg # Page background
│   ├── gal1-4.png          # Gallery images
│   ├── [room_type]_png     # Room type images
│   ├── [service]_png       # Service images
│   ├── [static/dynamic]_*.png|gif # Contact icons
│   └── pg_icon_2.png       # Favicon
├── scripts/
│   ├── nav_bar.js          # Navigation functionality
│   ├── slide_show.js       # Gallery slideshow
│   ├── change_about_us_img.js  # About us image toggle
│   └── change_contact_dyn.js  # Contact icon animations
├── videos/
│   ├── vid1.mp4            # Property tour video
│   └── vid2.mp4            # Additional tour video
├── home.html               # Main page (single-page app)
├── submitted.html          # Form submission confirmation
├── AGENTS.md               # Agent guidelines for development
├── GEMINI.md               # Project documentation
└── README.md               # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling, animations, responsive design
- **JavaScript**: Interactivity and dynamic content
- **jQuery 3.6.3**: DOM manipulation and event handling
- **Google Fonts**: Custom typography (Shantell Sans, Kaushan Script, Montserrat, Merriweather, Sacramento)

## 📱 Sections

1. **Home** - Hero section with branding
2. **Room Types** - Available accommodation options with pricing
3. **Services** - Amenities and facilities provided
4. **About Us** - Company overview and description
5. **Gallery** - Image slideshow of the property
6. **Videos** - Video tours
7. **Reviews** - Customer testimonials
8. **Contact Us** - Contact information and inquiry form

## 🎨 Color Palette

- **Primary Dark**: #40513B, #609966
- **Backgrounds**: #EDF1D6, #DFFFD8
- **Accent**: #B3E5BE, #5D9C59
- **Navigation**: #205058

## 🔧 Customization

### Changing Content
- Edit `home.html` to update text, images, and links
- Modify `css/styles.css` to adjust colors, fonts, and layout
- Update `scripts/*.js` files for behavioral changes

### Adding Images
- Place new images in the `/images/` directory
- Use lowercase with underscores for naming (e.g., `new_image.png`)
- Reference using relative paths: `./images/filename.png`

### Adding Videos
- Place videos in the `/videos/` directory
- Use MP4 format for compatibility
- Embed using the `<video>` tag as shown in `home.html:303-308`

## 📞 Contact Information

- **Email**: simplepgserviceshelpdesk@gmail.com
- **Phone**: +91-8888812345
- **Address**: Plot No.-46, Near Badminton Club, Fakir Mohan Nagar, Balasore, Odisha 756001, India
- **Business Hours**: Mon - Sun : 10:00 AM - 07:00 PM

## 🤝 Contributing

This is a personal project. For suggestions or improvements, please contact the maintainer.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Jogesh Kumar Ghadai**
- Email: jogesh6895@gmail.com
- GitHub: [@Jogesh6895](https://github.com/Jogesh6895)

---

**Simple PG Services** - A place you'll love to stay, at a price you'll love to pay! 🛌✨

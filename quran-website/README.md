# QuranLearn - Modern Quran Learning Website

A beautiful, responsive, and spiritually rich frontend website for Quran-related content built with HTML5, Tailwind CSS, and JavaScript.

## 🎯 Overview

QuranLearn is a modern platform inspired by QuranHost.com but with enhanced styling, improved layout, and visually rich Islamic design. The website provides a comprehensive platform for Quranic education with multiple learning paths and resources.

## ✨ Features

### 🧭 Navigation
- Fixed/sticky navbar with smooth transitions
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Active link highlighting based on scroll position

### 🏠 Hero Section
- Full-screen section with Islamic geometric patterns
- Beautiful Arabic Bismillah with translation
- Call-to-action buttons with ripple effects
- Scroll indicator animation

### 📖 Main Sections
1. **Quran Reading & Recitation**
   - Multiple reciters feature
   - Multi-language translations
   - Verse-by-verse navigation

2. **Online Quran Courses**
   - Beginner to Advanced levels
   - Interactive course cards
   - Pricing and enrollment options

3. **Tajweed & Tafsir Learning**
   - Proper pronunciation guidance
   - Deep understanding through scholarly commentary
   - Practical application examples

4. **Student Testimonials**
   - Auto-rotating testimonial carousel
   - Real student reviews
   - Star ratings and profiles

5. **About Us**
   - Mission and vision statements
   - Statistics and achievements
   - Platform overview

6. **Contact Section**
   - Interactive contact form with validation
   - Multiple contact methods
   - Social media integration

### 🎨 Design Features
- **Color Scheme**: Spiritual Islamic colors (green, navy, gold, beige)
- **Typography**: Arabic support with Amiri font, Inter for English
- **Patterns**: Custom Islamic geometric patterns
- **Animations**: AOS library integration, custom CSS animations
- **Responsive**: Mobile-first design approach

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with accessibility features
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **JavaScript** - Vanilla JS for interactivity and animations
- **AOS Library** - Animate On Scroll for smooth animations
- **Google Fonts** - Amiri (Arabic) and Inter (English) fonts

## 📁 Project Structure

```
quran-website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and Islamic patterns
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/             # Directory for images (to be added)
    ├── background.jpg  # Hero background image
    ├── quran1.jpg      # Section images
    └── patterns.png    # Islamic patterns
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - it's a static website

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Customization

#### Colors
The custom color palette is defined in both Tailwind config and CSS:
```javascript
colors: {
    'islamic-green': '#1B4332',
    'islamic-gold': '#D4AF37',
    'islamic-navy': '#1B2951',
    'islamic-beige': '#F7F3E9',
    'islamic-cream': '#FBF8F1'
}
```

#### Adding Images
1. Add your images to the `assets/` folder
2. Update the background images in CSS:
```css
.hero-bg {
    background-image: url('assets/your-image.jpg');
}
```

#### Content Updates
- Edit text content directly in `index.html`
- Update Arabic verses as needed
- Modify testimonials, courses, and contact information

## 🎪 Interactive Features

### Form Validation
- Real-time form validation
- Success/error notifications
- Email format validation

### Scroll Effects
- Parallax scrolling on hero section
- Fade-in animations on scroll
- Active navigation highlighting
- Scroll-to-top button

### Mobile Experience
- Responsive hamburger menu
- Touch-friendly interactions
- Optimized typography scaling

### Accessibility
- Keyboard navigation support
- Screen reader announcements
- Focus management
- High contrast support

## 🔧 Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🎨 Customization Guide

### Adding New Sections
1. Add HTML structure following the existing pattern
2. Include `data-aos` attributes for animations
3. Update navigation links
4. Add corresponding JavaScript if needed

### Modifying Animations
- AOS animations can be customized via data attributes
- Custom CSS animations are defined in `styles.css`
- JavaScript animations can be modified in `script.js`

### Color Theme Changes
1. Update Tailwind config in HTML head
2. Modify CSS custom properties
3. Update any hardcoded colors in CSS

## 🔄 Performance Optimizations

- Debounced scroll events
- Lazy loading support for images
- Efficient CSS selectors
- Optimized animations for mobile devices

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Access via provided GitHub Pages URL

### Netlify
1. Drag and drop the project folder to Netlify
2. Get instant deployment URL

### Any Static Host
Upload all files to any static hosting service (Vercel, Firebase Hosting, etc.)

## 🤝 Contributing

Feel free to contribute to this project by:
1. Adding new features
2. Improving accessibility
3. Enhancing animations
4. Optimizing performance
5. Adding more Islamic design elements

## 📄 License

This project is open source and available under the MIT License.

## 🤲 Islamic Principles

This website was built with Islamic values in mind:
- Promoting Quranic education
- Accessible learning for all Muslims
- Beautiful presentation of Islamic content
- Community-focused design

## 🎯 Future Enhancements

- [ ] Add actual Quran API integration
- [ ] Implement audio recitation player
- [ ] Add bookmark functionality
- [ ] Create user authentication system
- [ ] Mobile app version
- [ ] Offline reading capabilities

---

**May Allah bless this project and make it beneficial for the Muslim Ummah.**

*Built with ❤️ for the global Muslim community*
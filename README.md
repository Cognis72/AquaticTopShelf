# TopShelf Aquatic - Thai Balloon Fish Website

## Overview

TopShelf Aquatic is a responsive Thai-language website for selling premium balloon fish (ปลาบอลลูน). The website is built using vanilla HTML, CSS, and JavaScript without any frameworks or backend dependencies. It features a modern, mobile-friendly design with dynamic content loading from JSON data.

## System Architecture

### Frontend Architecture
- **Pure Client-Side Application**: Built with vanilla HTML5, CSS3, and ES6+ JavaScript
- **Responsive Design**: Mobile-first approach using CSS Flexbox and Grid
- **Component-Based Structure**: Modular JavaScript functions for different features
- **Static Asset Management**: Images and data stored locally in the project

### Data Management
- **JSON-Based Data Storage**: Fish product data stored in `fish-data.json`
- **Dynamic Content Loading**: Fish cards generated dynamically from JSON data
- **Client-Side Rendering**: All content rendered in the browser

## Key Components

### 1. Product Display System
- **Fish Gallery**: Dynamic card generation from JSON data
- **Image Management**: Local image storage in `/images/` directory
- **Product Information**: Thai descriptions, pricing, and contact integration

### 2. Navigation System
- **Fixed Header**: Persistent navigation with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Section Navigation**: Links to Home, About, How to Order, and Contact sections

### 3. Contact Integration
- **LINE Official Account**: Direct integration with LINE OA (@834wrclo)
- **Multiple Contact Methods**: LINE buttons, optional QR codes, and Google Maps

### 4. UI/UX Features
- **Thai Typography**: Google Fonts (Prompt) for proper Thai text rendering
- **Smooth Animations**: CSS transitions and JavaScript intersection observers
- **Loading States**: User feedback during data loading
- **Error Handling**: Graceful fallbacks for failed data loading

## Data Flow

1. **Page Load**: HTML structure loads with static header and sections
2. **Data Fetching**: JavaScript fetches fish data from `fish-data.json`
3. **Content Rendering**: Fish cards dynamically generated and inserted into DOM
4. **User Interaction**: Navigation, mobile menu, and contact actions handled by JavaScript
5. **Error Handling**: Failed data loads display appropriate error messages

## External Dependencies

### CDN Resources
- **Google Fonts**: Prompt font family for Thai language support
- **Font Awesome**: Icons for UI elements (fish logo, navigation icons)

### Third-Party Integrations
- **LINE Official Account**: Direct links to LINE chat (@834wrclo)
- **Google Maps**: Optional iframe integration for store location
- **Social Media**: Open Graph meta tags for sharing

## Deployment Strategy

### Static Hosting Compatible
- No server-side processing required
- Can be deployed on any static hosting service (GitHub Pages, Netlify, Vercel)
- All assets served directly from the file system

### File Structure
```
/
├── index.html          # Main website file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── fish-data.json      # Product data
└── images/             # Fish product images
    ├── fish1.jpg
    ├── fish2.jpg
    └── ...
```

### Performance Considerations
- Images should be optimized for web (JPEG format recommended)
- Preconnect hints for external font resources
- Lazy loading potential for images
- Minification recommended for production

## Changelog

- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
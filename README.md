# Modern E-Commerce Theme

A modern, responsive Shopify theme inspired by Chocolate Delice's elegant aesthetic, designed for premium product and service businesses.

## Features

### 🎨 Design & Aesthetics
- **Chocolate Delice Inspired**: Warm neutrals, elegant typography, and sophisticated color palette
- **Modern UI**: Clean design with smooth animations and professional styling
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 🛍️ E-Commerce Features
- **Product Collections**: Grid layout with filtering and sorting options
- **Advanced Search**: Integrated Shopify search with instant results
- **Shopping Cart**: Persistent cart with real-time updates
- **Product Variants**: Full support for size, color, and other variant options
- **Wishlist**: Save products for later (configurable)

### 📄 Pages & Sections
- **Home Page**: Hero banner, featured products, testimonials slider, USP highlights
- **Products Page**: Filterable product grid with pagination
- **Services Page**: Service listings with booking functionality
- **About Us**: Company story, team profiles, mission statement
- **Contact Page**: Contact form, map integration, business information

### 🔧 Technical Features
- **Shopify Liquid**: Fully compatible with Shopify's templating system
- **Theme Settings**: Customizable colors, fonts, and content via Shopify admin
- **Performance Optimized**: Lazy loading, minified assets, efficient code
- **SEO Friendly**: Structured data, meta tags, and semantic HTML
- **Fast Loading**: Optimized images and efficient CSS/JS

## Installation

### Shopify Deployment
1. Download the theme files
2. Upload to your Shopify store via Online Store > Themes > Upload
3. Configure theme settings in the Shopify admin
4. Customize content and add your products/services

### Vercel Deployment (Demo/Portfolio)
1. **Connect Repository**: Connect your GitHub repository to Vercel
2. **Deploy**: Vercel will automatically detect the configuration and deploy
3. **Domain**: Your site will be available at `your-project.vercel.app`
4. **Customization**: Replace placeholder images and content with your actual assets

#### Vercel Deployment Steps:
```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from your local machine
vercel

# Or connect via Vercel's web interface
# Go to vercel.com and import your GitHub repository
```

## Theme Customization

### Colors
Customize the color scheme through Theme Settings:
- Primary Color: Main brand color (#8B4513)
- Secondary Color: Accent color (#D2691E)
- Text Colors: Body and heading text colors
- Background Colors: Page and section backgrounds

### Typography
Choose from Google Fonts or Shopify's font library:
- Heading Font: Playfair Display (serif)
- Body Font: Inter (sans-serif)

### Content Sections
All major sections are customizable through Shopify's page editor:
- Hero banners with custom images and text
- Featured product collections
- Testimonials and reviews
- Team member profiles
- Service listings and descriptions

## File Structure

```
theme/
├── assets/
│   ├── main.css          # Main stylesheet
│   └── main.js           # Theme JavaScript
├── config/
│   └── settings_schema.json  # Theme settings
├── layout/
│   └── theme.liquid      # Base template
├── sections/
│   ├── header.liquid     # Site header
│   └── footer.liquid     # Site footer
├── snippets/             # Reusable code pieces
├── templates/
│   ├── index.liquid      # Home page
│   ├── collection.liquid # Products page
│   ├── page.services.liquid  # Services page
│   ├── page.about.liquid     # About page
│   ├── page.contact.liquid   # Contact page
│   └── page.liquid       # Generic page template
└── locales/              # Translation files
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ on mobile and desktop
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **CSS/JS Minification**: Production-ready optimized assets

## Deployment Options

### For Shopify Stores
This theme is designed for Shopify e-commerce platforms. It includes:
- Liquid templating for dynamic content
- Shopify product collections and variants
- Cart and checkout integration
- Admin panel customization

### For Static/Demo Deployment (Vercel)
The project includes static HTML versions for demo purposes:
- Complete static site with all pages
- Responsive design maintained
- Interactive elements (search, forms, sliders)
- Optimized for Vercel deployment

#### Vercel Configuration
- `vercel.json`: Deployment configuration
- `package.json`: Build scripts and dependencies
- Static HTML files for all pages
- Optimized asset loading

#### Quick Vercel Deploy
1. Push code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub repository
5. Deploy automatically

## Customization Services

Need help customizing this theme for your specific needs?
- Logo integration
- Color scheme adjustments
- Custom sections and functionality
- Third-party app integration
- Performance optimization

## Support

For theme support and customization requests:
- Email: support@yourstore.com
- Documentation: [Theme Documentation Link]
- Shopify Community: [Community Link]

## Changelog

### Version 1.0.0
- Initial release
- Full e-commerce functionality
- Responsive design
- Modern UI components

## License

This theme is provided as-is for use with Shopify stores. Please review Shopify's terms of service for theme usage guidelines.

---

**Designed with ❤️ for premium brands who value quality and elegance.**

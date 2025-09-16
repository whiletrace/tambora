# Tambora - Interactive Historical Narrative

An immersive educational web application that tells the story of Mount Tambora's catastrophic 1815 volcanic eruption through an interactive carousel-style narrative experience. This project combines historical education with modern web technologies to create an engaging learning experience.

## Features

- **Interactive Carousel Navigation** - 9 story chapters with smooth 3D flip transitions
- **Typewriter Animation** - Dynamic text animation that enhances storytelling
- **Historical Narrative** - Presented as diary entries chronicling the discovery and eruption
- **Visual Storytelling** - Chapter-specific background images and vintage aesthetic
- **Responsive Design** - Optimized for all devices and screen sizes
- **Educational Content** - Historically accurate information about the 1815 eruption

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Libraries**: 
  - jQuery 2.1.0 (Google CDN)
  - TypeType.js (typewriter animation)
  - Custom Flip Carousel plugin v1.5
  - HTML5 Shiv v3.6.2 (IE compatibility)
- **Design**: Custom CSS with vintage postcard aesthetic
- **Browser Support**: Modern browsers with IE9+ fallback support

## Historical Background

The story follows the discovery and catastrophic eruption of Mount Tambora in 1815, covering:

1. **Discovery Phase** - Arrival at Sumbawa Island, Indonesia
2. **Exploration** - Finding the dormant volcano
3. **The Eruption** - The devastating 1815 explosion
4. **Global Impact** - Climate effects and the "Year Without a Summer" of 1816

## Installation & Setup

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection (for CDN resources)
- Web server (recommended for development)

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/whiletrace/tambora.git
   cd tambora
   ```

2. **Serve the files:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. **Access the application:**
   Open your browser to `http://localhost:8000` or directly open `index.html`

## Project Structure

```
tambora/
├── index.html              # Main application entry point
├── css/
│   └── proj1.css          # Custom styling and responsive design
├── js/
│   ├── script.js          # TypeType animation configuration
│   ├── flip-carousel.js   # Custom carousel plugin
│   └── html5shiv.js       # IE compatibility layer
├── image/                 # Visual assets (9 PNG files)
│   ├── Homebackground.png # Title screen background
│   ├── Tamboratype.png    # Logo/title text
│   ├── HomeMt.png         # Mountain silhouette
│   ├── 1Postcard.png      # Story backgrounds
│   ├── BChap1-4.png       # Chapter dividers
│   └── table.png          # Body texture
└── LICENSE.MIT.md         # MIT license
```

## Story Chapters

### Chapter 1: Discovery
Arrival at Sumbawa Island and first encounters with the dormant volcano.

### Chapter 2: Exploration  
Detailed exploration of Mount Tambora before the eruption.

### Chapter 3: The Eruption
The catastrophic explosion of April 10, 1815 - one of history's most powerful volcanic eruptions.

### Chapter 4: Aftermath
Global climate impact, agricultural failure, and the "Year Without a Summer."

## Technical Features

### Carousel Configuration
```javascript
$('article').flipcarousel({
    pagination: true,
    loader: false,
    itemsperpage: 1,
    randomizer: 0.7
});
```

### TypeType Animation
- **Error Rate**: 0 (perfect typing simulation)
- **Typing Speed**: 25-30ms between keystrokes
- **Chapter-Specific Timing**: Varied pacing for narrative flow

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoints**: 480px, 600px, 768px, 992px
- **Flexible Images**: Scalable graphics and backgrounds

## Browser Compatibility

- **Modern Browsers**: Full functionality with all animations
- **Internet Explorer 9+**: Supported with HTML5 Shiv
- **Mobile Devices**: Responsive design with touch support
- **Graceful Degradation**: Fallbacks for older browsers

## Dependencies

### External CDN Resources
- jQuery 2.1.0: `https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js`
- TypeType.js: `https://iamdanfox.github.io/typetype/jquery.typetype.min.js`

### Local Assets
- Custom Flip Carousel Plugin v1.5
- HTML5 Shiv v3.6.2 for IE compatibility
- 9 high-quality PNG images (~4.6MB total)

## Educational Value

This project serves as:
- **Historical Education** - Learn about volcanic eruptions and climate impact
- **Interactive Learning** - Engaging narrative format enhances retention
- **Web Development Example** - Demonstrates modern frontend techniques
- **Responsive Design Showcase** - Mobile-first development approach

## Performance

- **Lightweight Code**: Minimal JavaScript footprint
- **Optimized Images**: Compressed PNG files for web delivery
- **CDN Usage**: Fast loading of external libraries
- **Caching**: Browser caching for improved performance

## Development

### Customization
The carousel and animation settings can be modified in:
- `js/script.js` - TypeType animation configurations
- `css/proj1.css` - Styling and responsive breakpoints
- `js/flip-carousel.js` - Carousel behavior settings

### Adding Content
To add new chapters:
1. Add new `<article>` element in `index.html`
2. Create corresponding background image
3. Configure TypeType animation in `script.js`
4. Update CSS for chapter-specific styling

## Browser Testing

Tested and verified on:
- Chrome 60+
- Firefox 55+
- Safari 10+
- Edge 15+
- Internet Explorer 9+

## License

MIT License - See LICENSE.MIT.md for details.

## Author

**Trace Harris**
- Educational web developer
- Historical content researcher

## Acknowledgments

- Historical data sourced from geological and meteorological records
- Typography enhanced with Adobe Typekit fonts
- Educational content designed for academic use

---

*An interactive journey through one of history's most significant volcanic eruptions, combining education with modern web technology.*
# BRAZY Portfolio - Style Guide

## 🎨 **Brand Identity**

### Logo
- **Primary Logo**: `BRAZY`
- **Font**: JetBrains Mono, 800 weight
- **Style**: Uppercase, 2px letter spacing
- **Effect**: Gradient text with animated underline
- **Usage**: Header navigation, hero section emphasis

### Brand Voice
- **Tone**: Bold, confident, innovative
- **Personality**: Mad, hot, cutting-edge, creative
- **Messaging**: "Creating Digital Magic" / "Let's Create Something BRAZY!"

---

## 🌈 **Color Palette**

### Primary Colors
```css
--accent-primary: #ff0080    /* Electric Pink */
--accent-secondary: #8000ff  /* Electric Purple */
--accent-tertiary: #00ff80   /* Electric Green */
```

### Dark Theme Colors
```css
--bg-primary: #0a0a0a       /* Deep Black */
--bg-secondary: #111111     /* Dark Gray */
--bg-tertiary: #1a1a1a      /* Medium Gray */
--text-primary: #ffffff     /* Pure White */
--text-secondary: #b4b4b4   /* Light Gray */
--text-muted: #666666       /* Muted Gray */
--border-color: #2a2a2a     /* Border Gray */
--shadow: rgba(255, 0, 128, 0.1) /* Pink Shadow */
```

### Light Theme Colors
```css
--bg-primary: #ffffff       /* Pure White */
--bg-secondary: #f8f9fa     /* Light Gray */
--bg-tertiary: #e9ecef      /* Medium Light Gray */
--text-primary: #1a1a1a     /* Dark Black */
--text-secondary: #4a4a4a   /* Dark Gray */
--text-muted: #999999       /* Muted Gray */
--border-color: #e0e0e0     /* Light Border */
```

### Gradient Combinations
```css
--gradient-1: linear-gradient(135deg, #ff0080, #8000ff)  /* Pink to Purple */
--gradient-2: linear-gradient(135deg, #8000ff, #00ff80)  /* Purple to Green */
--gradient-3: linear-gradient(135deg, #00ff80, #ff0080)  /* Green to Pink */
```

---

## 📝 **Typography**

### Font Families
- **Primary**: `'Inter', sans-serif`
- **Secondary (Logo/Code)**: `'JetBrains Mono', monospace`

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800
- **Black**: 900

### Typography Scale

#### Headings
```css
/* Hero Title */
h1: clamp(3rem, 8vw, 8rem) - Weight: 900
/* Section Titles */
h2: clamp(2rem, 5vw, 4rem) - Weight: 800
/* Card Titles */
h3: 1.5rem - Weight: 700
```

#### Body Text
```css
/* Primary Body */
body: 1rem - Weight: 400 - Line Height: 1.6
/* Large Text */
.hero-subtitle: clamp(1.2rem, 3vw, 2rem) - Weight: 300
/* Description Text */
.description: 1.1rem - Weight: 400 - Line Height: 1.7
```

---

## 📐 **Layout & Spacing**

### Grid System
```css
/* Main Container */
max-width: 1400px
padding: 0 2rem

/* Grid Layouts */
.skills-grid: repeat(auto-fit, minmax(300px, 1fr))
.projects-grid: repeat(auto-fit, minmax(400px, 1fr))
```

### Spacing Scale
```css
/* Extra Small */ 0.5rem (8px)
/* Small */ 1rem (16px)
/* Medium */ 2rem (32px)
/* Large */ 4rem (64px)
/* Extra Large */ 8rem (128px)
```

### Section Padding
- **Desktop**: `8rem 2rem`
- **Mobile**: `4rem 1rem`

---

## 🎭 **Components**

### Buttons

#### Primary Button
```css
.btn-primary {
    background: var(--gradient-1);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
}
```

#### Secondary Button
```css
.btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--border-color);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
}
```

### Cards

#### Skill Card
```css
.skill-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    border-top: 4px solid var(--gradient-1);
}
```

#### Project Card
```css
.project-card {
    background: var(--bg-primary);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 15px var(--shadow);
}
```

### Navigation

#### Header
```css
header {
    position: fixed;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-color);
}
```

#### Navigation Links
```css
.nav-links a {
    color: var(--text-secondary);
    font-weight: 500;
    transition: all 0.3s ease;
}
```

---

## ✨ **Animations & Effects**

### Keyframe Animations
```css
/* Glow Effect */
@keyframes glow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
}

/* Float Animation */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

/* Pulse Effect */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
```

### Hover Effects
- **Buttons**: `translateY(-3px)` + shadow
- **Cards**: `translateY(-10px)` + enhanced shadow
- **Navigation**: `translateY(-2px)` + underline animation

### Transitions
- **Standard**: `all 0.3s ease`
- **Fast**: `all 0.2s ease`
- **Slow**: `all 0.6s ease`

---

## 📱 **Responsive Breakpoints**

### Desktop First Approach
```css
/* Large Desktop */
@media (min-width: 1400px) { /* Full experience */ }

/* Desktop */
@media (max-width: 1200px) { /* Standard desktop */ }

/* Tablet */
@media (max-width: 768px) {
    /* Hamburger menu */
    /* Single column layouts */
    /* Adjusted typography */
}

/* Mobile */
@media (max-width: 480px) {
    /* Compact spacing */
    /* Smaller typography */
    /* Touch-optimized buttons */
}
```

### Mobile Adaptations
- Navigation becomes hamburger menu
- Grid layouts switch to single column
- Typography scales down appropriately
- Cursor effects disabled
- Reduced animation complexity

---

## 🎯 **Interactive Elements**

### Custom Cursor
```css
.cursor {
    width: 20px;
    height: 20px;
    background: var(--accent-primary);
    border-radius: 50%;
    mix-blend-mode: difference;
}
```

### Theme Toggle
- **Dark Mode**: 🌙 icon
- **Light Mode**: ☀️ icon
- **Animation**: Smooth color transitions

### Social Links
```css
.social-link {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
}
```

---

## 🚀 **Performance Guidelines**

### Optimization Rules
- Use `transform` and `opacity` for animations
- Implement `will-change` for animated elements
- Minimize DOM manipulations
- Use `IntersectionObserver` for scroll animations
- Disable complex animations on low-end devices

### Loading Strategy
- Critical CSS inlined
- Non-critical animations delayed
- Progressive enhancement approach
- Graceful fallbacks for older browsers

---

## 🎨 **Visual Hierarchy**

### Primary Focus
1. **Hero Section**: Largest typography, gradient text
2. **Logo**: Prominent positioning, animated underline
3. **CTA Buttons**: Bright gradients, hover effects

### Secondary Elements
1. **Section Titles**: Large typography, gradient text
2. **Navigation**: Clean, minimal styling
3. **Card Headers**: Medium weight, clear contrast

### Supporting Elements
1. **Body Text**: Readable, sufficient contrast
2. **Tech Tags**: Small, subtle background
3. **Footer**: Muted colors, smaller text

---

## 🔧 **Technical Specifications**

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Graceful Degradation**: Basic functionality on older browsers
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

### Accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus States**: Visible keyboard navigation
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alternatives

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

---

## 📋 **Usage Guidelines**

### Do's
✅ Use gradient text for primary headings  
✅ Maintain consistent spacing scale  
✅ Apply hover effects to interactive elements  
✅ Use the brand colors consistently  
✅ Implement smooth transitions  

### Don'ts
❌ Mix different animation durations randomly  
❌ Use colors outside the defined palette  
❌ Override the responsive breakpoints  
❌ Disable animations completely  
❌ Use system fonts instead of brand fonts  

---

## 🎪 **Special Effects**

### Floating Elements
- **Purpose**: Add visual interest and movement
- **Behavior**: Continuous vertical floating animation
- **Customization**: Random positioning and timing

### Glitch Effect
- **Trigger**: Logo hover
- **Duration**: 0.3s
- **Style**: Subtle position shifts

### Ripple Effect
- **Trigger**: Button clicks
- **Animation**: Expanding circle with fade
- **Color**: Semi-transparent white

---

*This style guide ensures consistency and maintains the BRAZY brand identity across all design decisions. Keep it bold, keep it innovative, keep it BRAZY! 🚀*
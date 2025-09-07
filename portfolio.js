// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  setTimeout(() => {
    cursorFollower.style.left = e.clientX + "px";
    cursorFollower.style.top = e.clientY + "px";
  }, 100);
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
    themeIcon.textContent = "☀️";
  } else {
    body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "🌙";
  }
});

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    navLinks.classList.remove("active");
  });
});

// Floating Elements Animation
function createFloatingElement() {
  const element = document.createElement("div");
  element.className = "floating-element";
  element.style.left = Math.random() * 100 + "vw";
  element.style.animationDelay = Math.random() * 10 + "s";
  element.style.animationDuration = Math.random() * 10 + 15 + "s";

  const shapes = ["10px", "50%"];
  element.style.borderRadius = shapes[(Math.random() * shapes.length) | 0];

  document.querySelector(".floating-elements").appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 25000);
}

// Create floating elements periodically
setInterval(createFloatingElement, 3000);

// Scroll Effects
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.style.background =
      body.getAttribute("data-theme") === "dark"
        ? "rgba(10, 10, 10, 0.95)"
        : "rgba(255, 255, 255, 0.95)";
  } else {
    header.style.background =
      body.getAttribute("data-theme") === "dark"
        ? "rgba(10, 10, 10, 0.8)"
        : "rgba(255, 255, 255, 0.8)";
  }
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-bg");
  const rate = scrolled * -0.5;

  if (heroBackground) {
    heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
  }
});

// Add glitch effect on logo hover
const logo = document.querySelector(".logo");
logo.addEventListener("mouseenter", () => {
  logo.style.animation = "glitch 0.3s ease";
  setTimeout(() => {
    logo.style.animation = "";
  }, 300);
});

// Add glitch keyframes to CSS
const glitchStyles = `
            @keyframes glitch {
                0%, 100% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
            }
        `;

const styleSheet = document.createElement("style");
styleSheet.textContent = glitchStyles;
document.head.appendChild(styleSheet);

// Dynamic gradient animation
let gradientAngle = 0;
setInterval(() => {
  gradientAngle += 1;
  document.documentElement.style.setProperty(
    "--gradient-1",
    `linear-gradient(${gradientAngle}deg, #ff0080, #8000ff)`
  );
  document.documentElement.style.setProperty(
    "--gradient-2",
    `linear-gradient(${gradientAngle + 120}deg, #8000ff, #00ff80)`
  );
  document.documentElement.style.setProperty(
    "--gradient-3",
    `linear-gradient(${gradientAngle + 240}deg, #00ff80, #ff0080)`
  );
}, 100);

// Add click effects to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let ripple = document.createElement("span");
    let rect = this.getBoundingClientRect();
    let size = Math.max(rect.width, rect.height);
    let x = e.clientX - rect.left - size / 2;
    let y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: ripple 0.6s linear;
                `;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation
const rippleStyles = `
            @keyframes ripple {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;

const rippleStyleSheet = document.createElement("style");
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);

// Typewriter effect for hero subtitle
const subtitle = document.querySelector(".hero-subtitle");
const subtitleText = "Creating Digital Magic ✨";
subtitle.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < subtitleText.length) {
    subtitle.textContent += subtitleText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Start typewriter effect after page loads
window.addEventListener("load", () => {
  setTimeout(typeWriter, 1000);
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Performance optimization - reduce animations on low-end devices
if (navigator.hardwareConcurrency < 4) {
  document.querySelectorAll(".floating-element").forEach((el) => {
    el.style.display = "none";
  });
}

console.log(`
        ██████╗ ██████╗  █████╗ ███████╗██╗   ██╗
        ██╔══██╗██╔══██╗██╔══██╗╚══███╔╝╚██╗ ██╔╝
        ██████╔╝██████╔╝███████║  ███╔╝  ╚████╔╝ 
        ██╔══██╗██╔══██╗██╔══██║ ███╔╝    ╚██╔╝  
        ██████╔╝██║  ██║██║  ██║███████╗   ██║   
        ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   
        
        Welcome to the BRAZY experience! 🚀
        Built with pure HTML, CSS & JavaScript
        `);

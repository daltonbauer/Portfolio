document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    const yearSpan = document.getElementById("current-year")
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString()
    }
  
    // Navigation scroll effect
    const nav = document.querySelector("nav")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled")
      } else {
        nav.classList.remove("scrolled")
      }
    })
  
    // Custom cursor logic
    const cursorDot = document.getElementById("cursor-dot")
    const cursorOutline = document.getElementById("cursor-outline")
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX
      const posY = e.clientY
      cursorDot.style.left = `${posX}px`
      cursorDot.style.top = `${posY}px`
      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" },
      )
    })
  
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".reveal")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
  
    revealElements.forEach((el) => observer.observe(el))
  
    // Dynamically load gallery items from JSON file
    const loadGallery = async () => {
      const galleryGrid = document.getElementById("gallery-grid")
      if (!galleryGrid) return
  
      try {
        const response = await fetch("./portfolio-images.json")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
  
        galleryGrid.innerHTML = "" // Clear any existing content
  
        data.images.forEach((image) => {
          const galleryItem = document.createElement("div")
          // Use the size from JSON, default to 'standard' if not provided
          const sizeClass = image.size || "standard"
          galleryItem.className = `gallery-item ${sizeClass} reveal`
  
          const img = document.createElement("img")
          img.src = image.path
          img.alt = image.alt || "Portfolio piece"
  
          galleryItem.appendChild(img)
          galleryGrid.appendChild(galleryItem)
        })
  
        // Re-run the observer for the newly added elements
        const newRevealElements = galleryGrid.querySelectorAll(".reveal")
        newRevealElements.forEach((el) => observer.observe(el))
      } catch (error) {
        console.error("Error loading gallery images:", error)
        galleryGrid.innerHTML = '<p class="error-message">Could not load portfolio. Please try again later.</p>'
      }
    }
  
    loadGallery()
  
    // Simple hero background animation
    const heroBg = document.getElementById("hero-background")
    if (heroBg) {
      const starCount = 200
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.style.position = "absolute"
        star.style.width = `${Math.random() * 2 + 1}px`
        star.style.height = star.style.width
        star.style.backgroundColor = "white"
        star.style.borderRadius = "50%"
        star.style.top = `${Math.random() * 100}%`
        star.style.left = `${Math.random() * 100}%`
        star.style.animation = `twinkle ${Math.random() * 5 + 3}s linear infinite`
        heroBg.appendChild(star)
      }
      const keyframes = `@keyframes twinkle { 
          0% { opacity: ${Math.random()}; } 
          50% { opacity: ${Math.random()}; } 
          100% { opacity: ${Math.random()}; } 
      }`
      const styleSheet = document.createElement("style")
      styleSheet.type = "text/css"
      styleSheet.innerText = keyframes
      document.head.appendChild(styleSheet)
    }
  })
  
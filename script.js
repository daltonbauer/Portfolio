// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Navigation scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav")
  if (window.scrollY > 50) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

// Reveal animations on scroll
const revealElements = () => {
  const elements = document.querySelectorAll(".reveal")

  elements.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active")
    }
  })
}

window.addEventListener("scroll", revealElements)
window.addEventListener("load", revealElements)

// Dynamically load portfolio items from the images/portfolio directory
const loadPortfolio = async () => {
  const portfolioGrid = document.getElementById("portfolio-grid")

  // This is where we would normally fetch a list of images from the server
  // Since we're using GitHub Pages, we'll simulate this with a predefined list
  // In reality, you would just add images to your repository and they would appear

  // Sample portfolio items - replace these with your actual work
  const portfolioItems = [
    {
      image: "images/portfolio/1.jpg",
      title: "Brand Identity",
      description: "Corporate rebrand for tech startup",
    },
    {
      image: "images/portfolio/2.jpg",
      title: "Digital Campaign",
      description: "Social media assets for product launch",
    },
    {
      image: "images/portfolio/3.webp",
      title: "Print Design",
      description: "Magazine layout and editorial design",
    }
  ]

  // Create portfolio items
  portfolioItems.forEach((item) => {
    // For GitHub Pages, we'll use placeholder images until real ones are added
    const placeholderUrl = `https://source.unsplash.com/random/600x400?design,${item.title.toLowerCase().replace(" ", "")}`

    const portfolioItem = document.createElement("div")
    portfolioItem.className = "portfolio-item reveal"

    portfolioItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="portfolio-item-overlay">
        <h3 class="portfolio-item-title">${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `

    portfolioGrid.appendChild(portfolioItem)
  })
}

// Load portfolio when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadPortfolio)

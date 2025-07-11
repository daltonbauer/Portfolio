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

// Dynamically load gallery items from the images/portfolio directory
const loadPortfolio = async () => {
  const galleryGrid = document.getElementById("gallery-grid")

  // For GitHub Pages, we'll use placeholder images until real ones are added
  // In a real scenario, you would just add images to your repository folder

  // Create an array of 12 placeholder images
  const placeholderCount = 12
  const placeholders = []

  for (let i = 1; i <= placeholderCount; i++) {
    placeholders.push(`https://source.unsplash.com/random/600x${400 + i * 10}?design,graphic${i}`)
  }

  // Create gallery items with modular sizing
  const portfolioImages = getImagesFromDirectory('images/portfolio/');
  
  portfolioImages.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    
    // Assign modular sizing classes based on image properties or pattern
    if (image.width > image.height * 1.5) {
      galleryItem.className = "gallery-item wide reveal";
    } else if (image.height > image.width * 1.5) {
      galleryItem.className = "gallery-item tall reveal";
    } else if (index % 7 === 0) {
      galleryItem.className = "gallery-item large reveal";
    } else {
      galleryItem.className = "gallery-item reveal";
    }
    
    galleryItem.innerHTML = `<img src="${image.path}" alt="Gallery item">`;
    galleryGrid.appendChild(galleryItem);
  });

  // In a real implementation, you would scan the images/portfolio directory
  // and create gallery items for each image found

  // Example of how this would work with real files:
  /*
  // This would be server-side code or use the File System API if available
  const portfolioImages = getImagesFromDirectory('images/portfolio/');
  
  portfolioImages.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    
    // Assign modular sizing classes based on image properties or pattern
    if (image.width > image.height * 1.5) {
      galleryItem.className = "gallery-item wide reveal";
    } else if (image.height > image.width * 1.5) {
      galleryItem.className = "gallery-item tall reveal";
    } else if (index % 7 === 0) {
      galleryItem.className = "gallery-item large reveal";
    } else {
      galleryItem.className = "gallery-item reveal";
    }
    
    galleryItem.innerHTML = `<img src="${image.path}" alt="Gallery item">`;
    galleryGrid.appendChild(galleryItem);
  });
  */
}

// Load portfolio when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadPortfolio)

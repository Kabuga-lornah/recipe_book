
// Function to toggle the mobile menu
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// Function to set the active link based on the current page
function setActiveLink() {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Get all the links
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const recipesLink = document.getElementById('recipes-link');
    const startLink = document.getElementById('start-link');

    // Remove the active class from all links
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    recipesLink.classList.remove('active');
    startLink.classList.remove('active');

    // Add the active class to the current page link
    if (currentPage === 'index.html' || currentPage === '') {
        homeLink.classList.add('active');
    } else if (currentPage === 'about.html') {
        aboutLink.classList.add('active');
    } else if (currentPage === 'recipes.html') {
        recipesLink.classList.add('active');
    } else if (currentPage === 'start-here.html') {
        startLink.classList.add('active');
    }
}

// Call the function when the page loads
window.onload = setActiveLink;




document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
  
    if (dropdown) { // Check if the dropdown exists
      dropdown.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent the click from closing the dropdown immediately
          this.classList.toggle('active'); // Toggle a class to control the dropdown
      });
  
      // Close the dropdown when clicking outside
      document.addEventListener('click', function(e) {
          if (!dropdown.contains(e.target)) {
              dropdown.classList.remove('active');
          }
      });
    }
  });

  function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
  }
  
  
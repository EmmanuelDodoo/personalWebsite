
// Hamburger button animation and functionality
const hamburgerButton = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");

hamburgerButton.addEventListener("click", () => {
    const hamburgerIsOpened = hamburgerButton.getAttribute("aria-expanded");
    
    if (hamburgerIsOpened === "true") {
        hamburgerButton.setAttribute("aria-expanded", "false");
        navList.setAttribute("data-visible", "false");
    }
    else {
        hamburgerButton.setAttribute("aria-expanded", "true");
        navList.setAttribute("data-visible", "true");

    }
})

// 


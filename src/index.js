
// Sticky-ish navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}




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


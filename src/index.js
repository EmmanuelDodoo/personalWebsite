
// Sticky-ish navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}




// Hamburger button animation and functionality
const hamburgerFunctionality = () => {

    const hamburgerButton = document.querySelector(".mobile-nav-toggle");
    const navList = document.querySelector(".nav-list");
    const navItems = document.querySelectorAll(".nav-item");

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

        navItems.forEach((ni) => {
            ni.addEventListener("click", () => {
                hamburgerButton.setAttribute("aria-expanded", "false");
                navList.setAttribute("data-visible", "false");

            })
        })

    })
}

// draggable element
const draggable = () => {
    var draggableElement = document.querySelector(".draggable");
    var initialX;
    var initialY;

    draggableElement.addEventListener("mousedown", function (event) {
        initialX = event.clientX;
        initialY = event.clientY;
        draggableElement.style.zIndex = "9999"; // Ensures the draggable element is on top
        draggableElement.style.transition = "none"; // Disable transition during drag
    });

    document.addEventListener("mousemove", function (event) {
        if (initialX === undefined || initialY === undefined) {
            return; // Exit early if mouse down event didn't occur on the draggable element
        }

        var offsetX = event.clientX - initialX;
        var offsetY = event.clientY - initialY;

        draggableElement.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
    });

    document.addEventListener("mouseup", function () {
        if (initialX === undefined || initialY === undefined) {
            return; // Exit early if mouse down event didn't occur on the draggable element
        }

        draggableElement.style.transition = "transform 0.3s ease"; // Enable transition after drag
        draggableElement.style.transform = "none"; // Reset transform to snap back to original position

        initialX = undefined;
        initialY = undefined;
    });
}

hamburgerFunctionality()
draggable()
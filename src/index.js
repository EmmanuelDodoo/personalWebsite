// --------------------------- Nav Stickiness -----------------------------

const nav = document.querySelector("#nav")
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "")
nav.before(scrollWatcher)

const navObserver = new IntersectionObserver((entries) => {
    nav.classList.toggle("stick", !entries[0].isIntersecting)
}, { rootMargin: "0px 0px 0px 0px" })

navObserver.observe(scrollWatcher)


// ----------------------- Nav Active Section ------------------------------

function addSectionObserver(id) {
    const navbar = document.querySelector("#nav")
    const section = document.querySelector("#" + id)

    const options = { rootMargin: "100px 0px -100px 0px" }

    const sectionObserver = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;

        const currentActive = navbar.querySelector(".active")
        currentActive?.classList.remove("active")

        navbar?.querySelector("#nav-" + id)?.classList.add("active")
    }, options)

    sectionObserver.observe(section)
}

addSectionObserver("about")
addSectionObserver("projects")
addSectionObserver("contact")


// ----------------------------- Hamburger btn -----------------------------

const btn = document.querySelector("#mobile-nav-btn")
const wrapper = document.querySelector("#nav-wrapper")
const sections = document.querySelectorAll(".nav-section")
const header = document.querySelector("#header")

//Functionality
btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded")

    if (isOpen === "true") {
        btn.setAttribute("aria-expanded", "false");
        nav.setAttribute("data-visible", "false")
        wrapper.setAttribute("data-backdrop", "false")
    }
    else {
        btn.setAttribute("aria-expanded", "true")
        nav.setAttribute("data-visible", "true")
        wrapper.setAttribute("data-backdrop", "true")
    }

    sections.forEach((section) => {
        section.addEventListener("click", () => {
            btn.setAttribute("aria-expanded", "false")
            nav.setAttribute("data-visible", "false")
            wrapper.setAttribute("data-backdrop", "false")
        })
    })
})

// Layover coloring
const layoverWatcher = document.createElement("div")
layoverWatcher.setAttribute("data-layoutObserver", "")
header.appendChild(layoverWatcher)

new IntersectionObserver((entries) => {
    btn.classList.toggle("btn-layover", !entries[0].isIntersecting)
}, {
    rootMargin: "-25px 0px 0px 0px"
}).observe(layoverWatcher)

// Auto close nav on outside click
document.addEventListener("click", (event) => {
    const isOpen = btn.getAttribute("aria-expanded")

    if (isOpen === "true" && !(nav.contains(event.target) || btn.contains(event.target))) {
        btn.setAttribute("aria-expanded", "false");
        nav.setAttribute("data-visible", "false")
        wrapper.setAttribute("data-backdrop", "false")
    }
})

const navbar = document.querySelector("#nav")
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "")
navbar.before(scrollWatcher)

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle("stick", !entries[0].isIntersecting)
}, { rootMargin: "0px 0px 0px 0px" })

navObserver.observe(scrollWatcher)

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

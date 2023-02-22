
//-------------Mouse follow
const MouseFollow = () => {
    const mouse = document.getElementById("mouse")

    window.onmousemove = e => {
        const x = e.clientX - mouse.offsetWidth / 2;
        const y = e.clientY - mouse.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px)`
        }

        mouse.animate(keyframes, {
            duration: 800,
            fill: `forwards`

        })

    }
};


//-------------Bubbles---------------
const Bubbles = () => {
    const bubbles = document.querySelectorAll(".bubble")

    const randomColor = (elem) => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        elem.style.setProperty('--color', `rgb(${r}, ${g}, ${b})`)
    }

    const randomStartPos = (elem) => {
        const width = document.documentElement.clientWidth
        const height = document.documentElement.clientHeight

        const top = Math.floor(Math.random() * height * 0.75)
        const left = Math.floor(Math.random() * width * 0.75)
        elem.style.setProperty('top', `${top}px`)
        elem.style.setProperty('left', `${left}px`)

    }

    const randomMotion = (elem) => {

        const period = Math.floor(Math.random() * 1500) + 5500

        setInterval(() => {
            const randomX = Math.floor(Math.random() * 200) - 100;
            const randomY = Math.floor(Math.random() * 400) - 200;

            elem.animate(
                {
                    transform: `translate(${randomX}px, ${randomY}px)`
                },
                {
                    duration: period,
                    fill: `forwards`,
                }
            )
        }, period)
    }

    //start moving on page load
    const initMove = () => {
        const inner = (elem) => {
            const x = Math.floor(Math.random() * 200) - 100;
            const y = Math.floor(Math.random() * 400) - 200;

            elem.animate(
                {
                    transform: `translate(${x}px, ${y}px)`
                },
                {
                    duration: 7000,
                    fill: `forwards`
                }
            )

        }

        bubbles.forEach(bubble => inner(bubble))
    }
    document.onload = initMove();


    bubbles.forEach((bubble) => {
        randomColor(bubble)
        randomStartPos(bubble)
        randomMotion(bubble)
    })
};


//-------------------Theme------------
const Theme = () => {
    //unchecked if dark mode since dark mode is default
    const themeInput = document.getElementById("theme-input")

    //store theme
    const storeTheme = () => {
        localStorage.setItem("theme", themeInput.checked)
    }

    const getTheme = () => {
        const temp = localStorage.getItem("theme")
        if (temp === "true") {
            themeInput.checked = true;
            //fallback
            document.documentElement.classList.add("lightmode")
        }
        else {
            themeInput.checked = false;
            //fallback
            document.documentElement.classList.remove("lightmode")
        }
    }

    document.onload = getTheme();
    themeInput.addEventListener('click', () => {
        storeTheme();
        getTheme();
    })


}



//--------------Main---------------
Bubbles();
Theme();



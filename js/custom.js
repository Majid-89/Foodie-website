//navbar active//

// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 20) {
//         nav.classList.add("scroll.on")
//     } else {
//         nav.classList.remove("scroll.on")
//     }
// }


//navbar hide//
let navbar = document.querySelectorAll(".nav-link")
let navCollpase = document.querySelector(".navbar-collapse.collapse")
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollpase.classList.remove("show")
    })
})






//Counter Design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range))
        timeer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer)
            }
        }, step)
    }
    counter("count1", 0, 465, 3000)
    counter("count2", 100, 6465, 2500)
    counter("count3", 0, 5465, 3000)
    counter("count4", 0, 4565, 3000)
})

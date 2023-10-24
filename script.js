
//Self-Invoking Function
(function() {

    let el = document.querySelectorAll('li img')
    let bg = document.querySelector('.convered')
    let txt = document.querySelector('.text')

    for (let i = 0; i < el.length; i++) {

        el[i].addEventListener('click', function() {

            txt.style.display = "none"

            bg.style.background = "url(" + this.getAttribute("src") + ") no-repeat top center"
            bg.style.backgroundSize = "cover"
            bg.style.height = "100vh"

        })

    }
})()
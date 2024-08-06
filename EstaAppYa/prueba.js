const main_img = document.querySelector('.main_img')
const main_html = document.querySelector('.main_html')
const thumbail = document.querySelectorAll('.card')
const content = document.querySelector('.title')



thumbail.forEach(thumb => {
    thumb.addEventListener('mouseover', 
        function() {      
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
    })
})
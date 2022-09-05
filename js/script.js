$('.page-scroll').on('click', function(e){
    const href = $(this).attr('href')
    const top = $(href)

    $('html, body').animate({
        scrollTop: top.offset().top - 80
    }, 1000, 'easeInOutExpo')

     e.preventDefault()
})

function togle() {
    $('.html').toggleClass('dark')
}

$('.show-fotoguru-btn').on('click', function(e) {
    $('.foto-guru').toggleClass('show')
    const btn = document.querySelector('.show-fotoguru-btn')
    if ( btn.classList[2] == 'selengkapnya' ) {
        btn.classList.remove('selengkapnya')
        btn.classList.add('sembunyikan')
        btn.textContent = 'sembunyikan'
    }

    else if ( btn.classList[2] == 'sembunyikan' ) {
        btn.classList.remove('sembunyikan')
        btn.classList.add('selengkapnya')
        btn.textContent = 'selengkapnya'
    }

    e.preventDefault()
})

const imgSwitch = [0, 1, 2, 3]
let index = 0

setInterval(function(){
    index = index + 1
    const imgLength = imgSwitch.length
    
    $('.image-switch').attr('src', `img/0${index}.jpg`)

    if ( index == imgLength ) {
        index = 0
    }

}, 4000)

$('.image-3d').tilt( {
    max: 25,
    speed: 400
});
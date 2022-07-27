
$(document).ready(function(){
    
    //Header top menu
    const toggleTopMenuButton = document.getElementById('toggleTopMenuButton');
    const toggleTopMenu = document.getElementById('toggleTopMenu');

    if (toggleTopMenuButton) {
        toggleTopMenuButton.addEventListener('click', () => {
            if (toggleTopMenu.classList.contains('active')) {
                toggleTopMenu.classList.remove('active');
                return;
            }
            toggleTopMenu.classList.add('active');
        })
    }

    //Header top menu
    const subpageNavButton = document.getElementById('subpageNavToggle');
    const subpageNav = document.getElementById('subpageNav');
    if (subpageNavButton) {
        subpageNavButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (subpageNav.classList.contains('active')) {
                subpageNav.classList.remove('active');
                return;
            }
            subpageNav.classList.add('active');
        })
    }

    //Header menu middle
    const centerHeaderMenuButton = document.getElementById('centerHeaderMenuButton');
    const centerHeaderMenu = document.getElementById('centerHeaderMenu');

    centerHeaderMenuButton.addEventListener('click', () => {
        if (centerHeaderMenu.classList.contains('open')) {
            centerHeaderMenu.classList.remove('open');
            return;
        }
        centerHeaderMenu.classList.add('open');
    })

    const disciplinesCarousel = $('.disciplines-carousel');

    disciplinesCarousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,

        responsive:{
            0:{
                items:1,
                margin: 0,
                dots: true,
            },
            991:{
                items:2
            },
            1200: {
                items: 3
            }
        }
    })

    $('.disciplines-next').click(function() {
        disciplinesCarousel.trigger('next.owl.carousel');
    })

    $('.disciplines-prev').click(function() {
        disciplinesCarousel.trigger('prev.owl.carousel');
    })

    const galleryCarousel = $('.gallery-carousel');

    galleryCarousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,

        responsive:{
            0:{
                items:1,
                dots: true,
            },
            576:{
                items:2,
                margin: 10,
                dots: true,
            },
            776:{
                items:3
            },
            991:{
                items:4
            },
            1200: {
                items: 4
            },
            1300: {
                items: 5
            }
        }
    })

    $('.gallery-next').click(function() {
        galleryCarousel.trigger('next.owl.carousel');
    })

    $('.gallery-prev').click(function() {
        galleryCarousel.trigger('prev.owl.carousel');
    })

    const chronicleCarousel = $('.chronicle-carousel');

    chronicleCarousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,

        responsive:{
            0:{
                items:1,
                margin: 0,
                dots: true,
            },
            776: {
                items:2,
            },
            991:{
                items:3
            },
            1200: {
                items: 4
            }
        }
    })

    $('.chronicle-next').click(function() {
        chronicleCarousel.trigger('next.owl.carousel');
    })

    $('.chronicle-prev').click(function() {
        chronicleCarousel.trigger('prev.owl.carousel');
    })

})

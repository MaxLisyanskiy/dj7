document.addEventListener("DOMContentLoaded", function() {


    new Mmenu( "#my-menu", {
        extensions: [
            "theme-black",
            "position-right",
            "fx-menu-slide",
            "pagedim-black",
            "border-none",
        ],
        navbar: {
            title: '<img class="mm-navbar__logo" src="images/logo-1.svg" alt="Салон красоты Смитлер">'
        },
        hooks: {
            "open:finish": () => {
                let openPanel = document.querySelector('.hamburger');
                openPanel.classList.add('is-active');
            },
            "close:finish": () => {
                let closePanel = document.querySelector('.hamburger');
                closePanel.classList.remove('is-active');
            }
        }
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService();
        }, 100);

    })
    $('.carousel-services').owlCarousel({
        navigation: true,
        // loop: true,
        nav: true,
        smartSpeed: 700,
        navSpeed: 700,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    $('.carousel-services__content').equalHeights();

    function carouselService() {
        $('.carousel-services__item').each( function () {
            let height = $(this).find('.carousel-services__content').outerHeight();

            let heightImage = $(this).find('.carousel-services__image').css('min-height', height);
        });
    }

    $('.carousel-services__h3').each( function () {
        $(this).html( $(this).html().replace(/(\S+)\s*$/, "<span>$1</span>") );
    });
    $('section .h2').each( function () {
        $(this).html( $(this).html().replace(/^(\S+)/, "<span>$1</span>") );
    });

    // $('select').selectize({
    //     create: true,
    // });

    // Resize Window
    // function onResize() {
    //     $('.carousel-services__content').equalHeights();
    // }
    // window.onresize = function () {
    //     onResize();
    // }

    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


});

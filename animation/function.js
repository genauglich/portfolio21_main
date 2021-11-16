$(document).ready(function () {

    function flipCarts() {
        document.querySelector("header").classList.toggle("headerUp");
        document.getElementById("bothCards").classList.toggle("flip");
    }

    var btn = document.getElementById("contactBtn");
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(flipCarts, 300);
    }, false);



    window.onscroll = function () {
        header.classList.add('noTransition'); // Disable transitions
        stickyheader()
        header.offsetHeight; // Trigger a reflow, flushing the CSS changes
        header.classList.remove('noTransition'); // Re-enable transitions
    };

    var header = document.getElementById("header");
    var sticky = 50;

    console.log(sticky);

    function stickyheader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }



    let $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });


    let filterButtonList = document.querySelectorAll('.filterButton');
    for (let button of filterButtonList) {
        button.addEventListener('click', () => {
            let filterOption = button.dataset.filter;
            console.log(filterOption);
            $grid.isotope({
                filter: filterOption,
            })
        })
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        //        slides[slideIndex - 1].style.display = "block";
    }

    //    // If cookie is set, scroll to the position saved in the cookie.
    //    if ($.cookie("scroll") !== null) {
    //        $(document).scrollTop($.cookie("scroll"));
    //    }
    //
    //    // When a button is clicked...
    //    $('.element-item').on("click", function () {
    //
    //        // Set a cookie that holds the scroll position.
    //        $.cookie("scroll", $(document).scrollTop());
    //
    //    });
});

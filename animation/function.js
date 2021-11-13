$(document).ready(function () {

    var btn = document.getElementById("contactBtn");
    btn.addEventListener("click", function () {
        document.getElementById("bothCards").classList.toggle("flip");
        document.querySelector("header").classList.toggle("headerUp");
    }, false);


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

        slides[slideIndex - 1].style.display = "block";
    }

    // If cookie is set, scroll to the position saved in the cookie.
    if ($.cookie("scroll") !== null) {
        $(document).scrollTop($.cookie("scroll"));
    }

    // When a button is clicked...
    $('.element-item').on("click", function () {

        // Set a cookie that holds the scroll position.
        $.cookie("scroll", $(document).scrollTop());

    });
});

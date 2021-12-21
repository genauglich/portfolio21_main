$(document).ready(function () {
    const backToTopBtn = document.querySelector('#backtotop');
    backToTopBtn.addEventListener('click', () => {
        console.error('top')
        window.scrollTo(0, 0);
    });

    var btn = document.getElementById("contactBtn");
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.querySelector("header").classList.toggle("headerUp");
        document.getElementById("bothCards").classList.toggle("flip");
        document.getElementById("contactBtn").classList.toggle("hidden-cv");
    }, false);


    window.onscroll = function () {
        header.classList.add('noTransition'); // Disable transitions
        stickyheader()
        showbtt()
        header.offsetHeight; // Trigger a reflow, flushing the CSS changes
        header.classList.remove('noTransition'); // Re-enable transitions
    };

    var header = document.getElementById("header");

    var scrollTop = $(window).scrollTop(),
        elementOffset = $('header').offset().top,
        sticky = (elementOffset - scrollTop);

    var sticky = 0;

    function stickyheader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    function showbtt() {
        if (window.pageYOffset > 1000) {
            document.getElementById("backtotop").classList.add("bttDown");
        } else {
            document.getElementById("backtotop").classList.remove("bttDown");

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
            });
            window.scrollTo(0, 0);
        })
    }

    // change is-checked class on buttons
    $('.btn-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });





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
});

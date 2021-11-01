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
});

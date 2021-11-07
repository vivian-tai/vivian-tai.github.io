(function () {
    'use strict';
    console.log("reading js");

    //fade in webpage on load
    document.body.style.opacity = 1;

    //declare variables
    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');

    //on click, open specific overlay
    for (const eachBtn of openBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const thisBtn = event.target.parentElement.id;
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
        });
    }

    //on click, hide specific overlay
    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    //press escape key to hide specific overlay
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });

    //scroll horizontally when mouse or trackpad is scrolling vertically
    const scrollContainer = document.querySelector("#gallery");

    scrollContainer.addEventListener("wheel", function(event) {
        event.preventDefault();
        scrollContainer.scrollLeft = scrollContainer.scrollLeft + event.deltaY;
    });

})();
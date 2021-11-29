(function () {
    'use strict';
    console.log("reading js");

    window.alert("Hi! Thanks for taking the time to look this over. Please feel free to watch the mini animation on load (may need to refresh again since you're reading this), click through each graphic, use the nav bar, and close overlays. I appreciate any feedback you may have!");


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

    //smooth scroll
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();

        const targetID = event.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);

        const original = Math.floor(targetAnchor.getBoundingClientRect().left);
        window.scrollBy({ top: 0, left: original, behavior: 'smooth' });
        console.log(original);
    };

})();
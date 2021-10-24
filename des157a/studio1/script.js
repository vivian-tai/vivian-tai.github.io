(function() {
    'use strict';
    console.log('reading js');

    var myForm = document.querySelector('#myForm');
    var madlib = document.querySelector('#container1');

    myForm.addEventListener('submit', function(event){
        this.style['display'] = 'none';
        document.body.style.background = "black url('images/MadLibsBookDragonblue.jpg') no-repeat center top ";
        event.preventDefault();
        var word1 = document.querySelector('#word1').value;
        var word2 = document.querySelector('#word2').value;
        var word3 = document.querySelector('#word3').value;
        var word4 = document.querySelector('#word4').value;
        var word5 = document.querySelector('#word5').value;

        var myText;

        if (word1 && word2 && word3 && word4 && word5) {
            var myText = `<div id="left2"></div>
            <div id="right2">
            <p>Once upon a time, in a land far away, there lived a ${word1} dragon,
            who one day stumbled upon and stole a magical ${word2}.
            Little did the dragon know it had the power to conjure ${word3},
            unleashing chaos upon the land until a hero named ${word4} sought to restore balance to the world.
            The hero traveled through ${word5} to find the dragon and return the magic to its rightful place. Will the hero succeed?
            </p></div>`;
        } else {
            myText = "Please complete the form!"
        }

        madlib.innerHTML = myText;
      });

})();
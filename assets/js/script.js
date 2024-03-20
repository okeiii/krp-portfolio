// Typewriter effect
document.addEventListener('DOMContentLoaded',function(event){
    // String array for texts to implement typewriter effect
    var dataText = [ "Weaving code into creativity and functionality." ];
    
    function typeWriter(text, i, fnCallback) {
        // If text isn't complete yet
        if (i < (text.length)) {
            // Add the next letter
        document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // Slight delay
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    }
        // Once text is complete
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // Typewriter animation thingy
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function(){
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
            });
        }
    }

    // Call typewriter
    StartTextAnimation(0);
});
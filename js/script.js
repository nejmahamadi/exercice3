(function() { //IIFE
    var leCheckBox = document.querySelector("input");
    var lesBoutons = document.querySelectorAll(".menu a");
    var nbBoutons = lesBoutons.length;		
    console.log(nbBoutons);
    
    for (var i = 0; i < nbBoutons; i++) {
        lesBoutons[i].addEventListener("click", function() {
            console.log(leCheckBox.checked);
            leCheckBox.checked = false;
        }, false);
    }
})();
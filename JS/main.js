var x = 0;

$('html').mousemove(function () {
    $('#paragrafKropek').text('Przebyłeś(aś) na tej stronie ' + x + ' kropek lub wykonałeś(aś) tyle ślizgnięć.');
    x++;

    if (x === 100) {
        $('#paragrafKropek').fadeIn('200').fadeOut('200').fadeIn('200').fadeOut('200').fadeIn('200').fadeOut('200').fadeIn('200').fadeOut('200').fadeIn('200').fadeOut('200').fadeIn('200');
    } else if (x === 500) {

$('nav').fadeIn(150).fadeOut('150').fadeIn(150).fadeOut('150').fadeIn(150).fadeOut('150').fadeIn(150).fadeOut('150').fadeIn('150');
                
    } else if (x === 1000) {
        alert('tysiak');
    } else if (x === 10000) {
        alert('10 tysiaków, pędź do miliona bohaterze!');
    } else if (x === 100000) {
        alert('100 tysiaków, pędź do miliona bohaterze!');
    } else if (x === 1000000) {
        alert('Podmieniłeś wartość x. Zaczynasz od zera.');
        x = 0;
    }


});




// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

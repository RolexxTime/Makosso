// ANIMATION TYPING

var typed = new Typed(".typing",{
    strings:["","Pasteur","Influenceur","Homme d'affaires"],
    typeSpeed:100,
    BackSpeed:60,
    loop: true
})

// MESSAGE FLASHY 
window.addEventListener("load", function() {
    var f = document.getElementById('Foo');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);

}, false);
// LOADER

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

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


// REVEAL

const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})

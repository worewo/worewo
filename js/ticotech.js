AOS.init({duration:1200,})

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Information')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Education')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Technology')
    .pauseFor(2500)
    .start();
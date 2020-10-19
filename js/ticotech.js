AOS.init({ duration: 1200, })

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


//----------- mail link ------------ //
var mail = document.getElementById('mailto');

mail.onclick = function () {
    window.location.href = "mailto:worewoedu@gmail.com";
}

//----------- backtohome link ------------ //
var backtohome = document.getElementById('backtohomepage');

backtohome.onclick = function () {

    window.location.href = "https://worewo.cf";
}

//----------- backtocontactus link ------------ //
var backtocontact = document.getElementById('backtocontactus');

backtocontact.onclick = function () {
    window.location.href = "https://worewo.cf#contact";
}

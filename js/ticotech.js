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

let userlist=[];
const adduser = (data)=>{
    data.preventDefault();
    let user = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value
    }
    userlist.push(user);
    document.forms[0].reset();

    localStorage.setItem('WoreWouserlist', JSON.stringify(userlist));
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#submit').addEventListener('click', adduser);
});


//--------------------form submit alert popup design-----------------------------

  var formsubmit = document.getElementById("form_submit");

 formsubmit.onclick = function () {
   alert("Thank You for Your Submission :) You'll Receive a Confirmation Message Shortly   ");
    }
    
//--------------------form submit alert popup design-----------------------------






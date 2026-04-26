const contactForm = document.getElementById("contactForm");
const disInButton1 = document.getElementById("displayInfoButton1");
const disInButton2 = document.getElementById("displayInfoButton2");
const blockquote   = document.getElementById("quote");
const homebody     = document.getElementById("homebody");


function validateInput(){
    var name = document.getElementById("name");
    var email= document.getElementById("email");
    var massg= document.getElementById("massg");
    if (name.value.trim() === "" || email.value.trim() ==="" || massg.value.trim() ==="" ){
        event.preventDefault();
        window.alert("Please fill out all required fields. ")
    }
}



function displayProjectInfo(info){
    var description = document.getElementById(info);
    if (description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}

function interactiveQuote(){
    var blockquote = document.getElementById("quote");
    blockquote.style.backgroundColor="rgb(136, 77, 77)";
}

function interactiveQuote2(){
    var blockquote = document.getElementById("quote");
    blockquote.style.backgroundColor="antiquewhite";
}

function loadDate(){
    var p = document.createElement("p");
    var date = new Date();
    var text = document.createTextNode("Page loaded on: "+date.toLocaleString())
    p.appendChild(text);
    document.getElementById("footer").appendChild(p);
    
}

if (disInButton1) {
    disInButton1.addEventListener("click", function() {
        displayProjectInfo("info1");
    });
}

if (disInButton2) {
    disInButton2.addEventListener("click", function() {
        displayProjectInfo("info2");
    });
}
if (contactForm) {
    contactForm.addEventListener("submit", validateInput);
}

if (blockquote) {
    blockquote.addEventListener("mouseover",interactiveQuote)

}

if (blockquote) {
    blockquote.addEventListener("mouseout",interactiveQuote2)
}

if (homebody) {
    window.addEventListener("load",loadDate)
}


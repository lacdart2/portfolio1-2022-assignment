
/* navigation background color changing on scroll */

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    let windowPosition = window.scrollY > 0;

    header.classList.toggle("scroll-nav", windowPosition > 0);
});
// scroll reveal 

const scroll = ScrollReveal({
    distance: "50px",
    duration: 1200,
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
})


scroll.reveal(".scroll-reveal-top", { origin: "bottom" });
scroll.reveal(".scroll-reveal-top-menu", { origin: "bottom" });

scroll.reveal(".scroll-reveal-left", { origin: "left" });
scroll.reveal(".scroll-reveal-right", { origin: "right" });

scroll.reveal("h2", { origin: "top" });
scroll.reveal(".first-p", { origin: "bottom" }, { interval: 100 });
scroll.reveal("p", { origin: "bottom" }, { interval: 150 });
scroll.reveal(".scroll-reveal-top-details", { origin: "top" }, { interval: 450 });

scroll.reveal(".tech-stack-item", { interval: 250 });
scroll.reveal(`.section-title, .section-subtitle-container`, {
    origin: "top",
    interval: 250
});
scroll.reveal(".portfolio-card", { interval: 500 });
scroll.reveal(`.form-container, .footer`, {
    origin: "top",

});
// hamburger menu
let header = document.querySelector("header");
let menu = document.querySelector(".menu-links");
let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu");
let navLinks = document.querySelectorAll(".nav-link");


// open hamburger menu
openMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
    openMenu.style.visibility = "hidden";
    closeMenu.style.visibility = "visible";


});

// close hamburger menu
closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
    openMenu.style.visibility = "visible";
    closeMenu.style.visibility = "hidden";
});


// redirect to page sections from active navigation links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => {
    link.addEventListener("click", function () {

        menu.classList.remove("active");

        openMenu.style.visibility = "visible";
        closeMenu.style.visibility = "hidden";

    })


});

// logo typing 

class TypeWriter {
    constructor(txtElement, words, wait = 1000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 7);
        this.type();
        this.isDeleting = false;


    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;


        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 100;

        }

        setTimeout(() => this.type(), typeSpeed);
    }

}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}



/// canvas project image


const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

console.log(ctx);
let posX = 100,
    posY = 0;
canvas.addEventListener('mousemove', e => {

    posX = e.offsetX;
    posY = e.offsetY;

})

function anim() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = "#b0fe76";
    ctx.rect(posX - 100, 0, 150, 316);
    ctx.clip()
    ctx.drawImage(document.querySelector(".show-image"), 0, 0, canvas.width, canvas.height)

    ctx.restore()
    requestAnimationFrame(anim)
}

anim()

// canvas project 2 :


const canvasTwo = document.querySelector(".canvas-2");

const ctx2 = canvasTwo.getContext("2d");

console.log(ctx2);

let posX2 = 100,
    posY2 = 0;

canvasTwo.addEventListener('mousemove', e => {

    posX2 = e.offsetX;
    posY2 = e.offsetY;
    console.log(posX2, posY2);
})

function animTwo() {

    ctx2.clearRect(0, 0, canvasTwo.width, canvasTwo.height);

    ctx2.save()
    ctx2.beginPath()

    ctx2.rect(posX2 - 100, 0, 150, 316);

    ctx2.clip()


    ctx2.drawImage(document.querySelector(".show-image-2"), 0, 0, canvasTwo.width, canvasTwo.height)

    ctx2.restore()

    requestAnimationFrame(animTwo)
}

animTwo()

// canvas project 3 :


const canvasThree = document.querySelector(".canvas-3");

const ctx3 = canvasThree.getContext("2d");

console.log(ctx3);



let posX3 = 100,
    posY3 = 0;



canvasThree.addEventListener('mousemove', e => {

    posX3 = e.offsetX;
    posY3 = e.offsetY;
    console.log(posX3, posY3);
})

function animThree() {

    ctx3.clearRect(0, 0, canvasThree.width, canvasThree.height);

    ctx3.save()
    ctx3.beginPath()

    ctx3.rect(posX3 - 100, 0, 150, 316);

    ctx3.clip()


    ctx3.drawImage(document.querySelector(".show-image-3"), 0, 0, canvasThree.width, canvasThree.height)

    ctx3.restore()

    requestAnimationFrame(animThree)
}

animThree()



// form validation :

const form = document.querySelector(".contact-form");
const contactName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const submitBtn = document.querySelector(".form-button");
const messageSent = document.querySelector(".message-sent");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(contactName.value, 4) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(message.value, 6) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if ((checkLength(contactName.value, 4) === true) && (validateEmail(email.value) === true) && (checkLength(message.value, 6) === true)) {
        messageSent.classList.add("display");

        submitBtn.innerHTML = "MESSAGE SENT";
        contactName.value = "";
        email.value = "";
        message.value = "";
    } else {
        messageSent.classList.remove("display");

        submitBtn.innerHTML = "SEND MESSAGE";
    }

}

submitBtn.addEventListener("click", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



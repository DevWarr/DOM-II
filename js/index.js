// Your code goes here

//Give first selector in the main container a new class:
document.querySelector('.container section').classList.add("normal-content");


const index = {

    // The full index page
    all: document.querySelector('body'),

    // The nav bar and the elements inside
    nav: {
        heading: document.querySelectorAll('.logo-heading'), 
        links: document.querySelectorAll('.nav-link')
    },
    get nav() {
        return document.querySelector('.nav-container');
    },

    // The header and elements inside 
    header: {
        img: document.querySelector('header img'),
        heading: document.querySelector('header h2'),
        text: document.querySelector('header p')
    },
    get header() {
        return document.querySelector('header');
    },

    // The first section and elements inside:
    'section1': {
        heading: document.querySelector('.normal-content h2'),
        text: document.querySelectorAll('.normal-content p'),
        imgContainer: document.querySelector('.normal-content .img-content'),
        img: document.querySelector('.normal-content .img')
    },
    get section1() {
        return document.querySelector('.normal-content');
    },

    // The second section and elements inside:
    'section2': {
        heading: document.querySelector('.inverse-content h2'),
        text: document.querySelectorAll('.inverse-content p'),
        imgContainer: document.querySelector('.inverse-content .img-content'),
        img: document.querySelector('.inverse-content .img')
    },
    get section2() {
        return document.querySelector('.inverse-content');
    },

    // The top destination section and elements inside:
    'section3': {
        heading: document.querySelector('.content-destination h2'),
        text: document.querySelectorAll('.content-destination p')
    },
    get section3() {
        return document.querySelector('.content-destination');
    },

}

console.log(index['section1']);

index['section3'].heading.addEventListener('click', event => {
    console.log(event.target);
})
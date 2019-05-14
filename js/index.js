// Your code goes here

//========================Class/Function Defining========================//

//Give first section in the main container a new class:
document.querySelector('.container section').classList.add("normal-content");

/* The darkMode function.
 * HOW TO USE IN CODE:
 * Simply call the darkMode() function with each element you want to change inside an array.
 * Happy day!
 */
function darkMode(array) {
    array.forEach(element => {
        element.style.color = "#aaaaaa";
        element.style.backgroundColor = "#333333";
    });
}

function lightMode(array) {
    array.forEach(element => {
        element.style.color = "";
        element.style.backgroundColor = "";
    });
}





/* Object notation:
 *
 * For a single property, use typical syntax
 * -- Example: index.header.heading
 *
 * For a larger container, use All
 * -- Example: index.headerAll
 */
const index = {

    // The full index page
    all: document.querySelector('body'),

    // The nav bar and the elements inside
    nav: {
        heading: document.querySelectorAll('.logo-heading'),
        links: document.querySelectorAll('.nav-link')
    },
    get navAll() {
        return document.querySelector('.nav-container');
    },

    // The header and elements inside 
    intro: {
        img: document.querySelector('.intro img'),
        heading: document.querySelector('.intro h2'),
        text: document.querySelector('.intro p')
    },
    get introAll() {
        return document.querySelector('.intro');
    },

    // The first section and elements inside:
    'section1': {
        heading: document.querySelector('.normal-content h2'),
        text: document.querySelectorAll('.normal-content p'),
        imgContainer: document.querySelector('.normal-content .img-content'),
        img: document.querySelector('.normal-content img')
    },
    get section1All() {
        return document.querySelector('.normal-content');
    },

    // The second section and elements inside:
    'section2': {
        heading: document.querySelector('.inverse-content h2'),
        text: document.querySelectorAll('.inverse-content p'),
        imgContainer: document.querySelector('.inverse-content .img-content'),
        img: document.querySelector('.inverse-content img')
    },
    get section2All() {
        return document.querySelector('.inverse-content');
    },

    // The top destination section and elements inside:
    'section3': {
        heading: document.querySelector('.content-destination h2'),
        text: document.querySelectorAll('.content-destination p'),
        img: document.querySelector('.content-destination img')
    },
    get section3All() {
        return document.querySelector('.content-destination');
    },

    // The destination divs are slightly different.
    // All containers, headings, text, and buttons will have their own nodeList.
    // ALL ARE PLURAL!!!
    destinations: document.querySelectorAll(".destination"),
    destinationHeadings: document.querySelectorAll(".destination h4"),
    destinationTexts: document.querySelectorAll(".destination p"),
    destinationButtons: document.querySelectorAll(".destination .btn"),

    // The footer
    footerAll: document.querySelector(".footer"),
    footerText: document.querySelector(".footer p"),
}


//========================The animation for images========================//
function imgMove(element, interval = 25) {
    // sh = shrink
    // gr = grow
    element.classList.add("animate");
    let width = 100;

    // shrinking the image
    function shrink() {
        if (width == 80) {
            clearInterval(sh);
            gr = setInterval(grow, interval)
        } else {
            width--;
            element.style.width = width + "%";
        }
    }

    // growing the image
    function grow() {
        if (width == 100) {
            element.classList.remove("animate");
            clearInterval(gr);
        } else {
            width++;
            element.style.width = width + "%";
        }
    }

    //Using intervals for the animation
    let gr = clearInterval();
    let sh = setInterval(shrink, interval)
}





//========================EVENTS========================//

if (window.location.href == "index.html") {

    //========================MOUSEENTER========================//
    // When mousing over the image of section 1,
    // The image will move.
    index['section1'].imgContainer.addEventListener('mouseenter', event => {
        if (!index['section1'].img.classList.contains("animate")) {
            event.stopPropagation();
            console.log(`we doin' it boss`);
            event.preventDefault();
            event.stopPropagation();
            imgMove(index['section1'].img);
        }
    })



    //========================CLICK========================//
    // When clicking the image of section 1,
    // The image will move.
    index['section2'].imgContainer.addEventListener('click', event => {
        if (!index['section2'].img.classList.contains("animate")) {
            console.log(`we doin' it boss`);
            event.preventDefault();
            event.stopPropagation();
            imgMove(index['section2'].img);
        }
    })

    let space = false
    //========================MOUSEDOWN========================//
    // If the mousebutton is pushed down on the intro image, 
    // we activate dark mode.
    index.intro.img.addEventListener('mousedown', event => {
        space = true;
        console.log(`ye got dark mode boss`);
        event.preventDefault();
        darkMode([index.all, index.introAll, ...Array.from(index.nav.links), index.footerAll, index.footerText])
    })
    // Reset the space variable if mouse goes up ANYWHERE on the page.
    document.addEventListener('mouseup', event => {
        space = false;
    })


    //========================MOUSEUP========================//
    // If the mousebutton is released on the intro image, 
    // we activate light mode.
    index.intro.img.addEventListener('mouseup', event => {
        console.log(`ye got light mode boss`);
        event.preventDefault();
        lightMode([index.all, index.introAll, ...Array.from(index.nav.links), index.footerAll, index.footerText])
    })

    //========================DBLCLICK========================//
    // If we double click on any destination text,
    // The text will become purple.
    index.destinationTexts.forEach(element => {
        element.addEventListener('dblclick', event => {
            console.log(`ye got ye favourite colo' boss`)
            element.style.color = "purple";
        })
    })


    //========================DRAGSTART========================//
    // If we drag ANYTHING in the document, 
    // The initial document text/image will become slightly transparent.
    index.all.addEventListener("dragstart", event => {
        console.log(`we draggin' it boss`)
        event.target.style.opacity = 0.5
    })


    //========================DRAGEND========================//
    // If we drag ANYTHING in the document, 
    // The initial document text/image will become slightly transparent.
    index.all.addEventListener("dragend", event => {
        console.log(`we dun draggin' boss`)
        event.target.style.opacity = "";
    })


    let scroll;
    //========================SCROLL========================//
    // Whenscrolling through the webpage,
    // The text will become transparent.
    window.addEventListener("scroll", event => {
        clearTimeout(scroll)
        index.all.style.opacity = 0.6;

        // Here, we're setting a time out.
        // After a set time, this function will run and the opacity will be reset.
        // HOWEVER, because the timeout keeps being cleared above, it isn't until we 
        // STOP scrolling that this function will actually run!
        scroll = setTimeout(function () {
            console.log(`we dun scrolled boss`);
            index.all.style.opacity = "";
        }, 66)
    })



    //========================KEYDOWN========================//
    // IF, and only if, the user holds down the mouseclick on the fun bus and presses space,
    // We will navigate to reveal.html
    document.addEventListener("keydown", event => {
        if (event.key == " " && space) {
            window.location.href = "reveal.html"
        }
    })

}


//========================MOUSEOVER========================//
// IF, and only if, the user hovers the pointer over the body of the page and presses "B",
// We will navigate back to the index.html page
index.introAll.addEventListener("mouseenter", event => {
    event.stopPropagation();
    console.log(`Reading clear boss`);
    if (window.location.href == "reveal.html") {
        console.log(`Ready to warp boss`);
        bKey = true;
    }
})
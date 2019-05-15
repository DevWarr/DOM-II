// Your code goes here

// //////////(1) DBLCLICK///////////////
// const picClick = document.querySelector('header img');
// picClick.addEventListener('dblclick', element => {
//     alert('YES it is indeed a very fun bus!')
// });

// //////////(2) MOUSEOVER///////////////
// const logoMouseOver = document.querySelector('header h1');
// logoMouseOver.addEventListener('mouseover', element => {
//     logoMouseOver.style.color = 'red'
// });

// //////////(3) MOUSEOUT///////////////
// const logoMouseOut = document.querySelector('header h1');
// logoMouseOut.addEventListener('mouseout', element => {
//     logoMouseOut.style.color = 'black'
// });

// /////////////////////rainbow/////////////////////////
// const welcomeMouseOver = document.querySelector('header h2');
// welcomeMouseOver.addEventListener('mouseover', element => {
//     welcomeMouseOver.style.color = 'orange'
// });

// const welcomePMouseOver = document.querySelector('header p');
// welcomePMouseOver.addEventListener('mouseover', element => {
//     welcomePMouseOver.style.color = 'yellow'
// });

// const goMouseOver = document.querySelector("body > div > section:nth-child(2) > div.text-content > h2");
// goMouseOver.addEventListener('mouseover', element => {
//     goMouseOver.style.color = 'green'
// });

// const goPMouseOver = document.querySelector("body > div > section:nth-child(2) > div.text-content > p:nth-child(2)");
// goPMouseOver.addEventListener('mouseover', element => {
//     goPMouseOver.style.color = 'blue'
// });

// const goPtwoMouseOver = document.querySelector("body > div > section:nth-child(2) > div.text-content > p:nth-child(3)");
// goPtwoMouseOver.addEventListener('mouseover', element => {
//     goPtwoMouseOver.style.color = 'blue'
// });

// const adventureMouseOver = document.querySelector("body > div > section.content-section.inverse-content > div.text-content > h2");
// adventureMouseOver.addEventListener('mouseover', element => {
//     adventureMouseOver.style.color = 'purple'
// });

// const adventurePMouseOver = document.querySelector("body > div > section.content-section.inverse-content > div.text-content > p:nth-child(2)");
// adventurePMouseOver.addEventListener('mouseover', element => {
//     adventurePMouseOver.style.color = 'pink'
// });

// const adventurePtwoMouseOver = document.querySelector("body > div > section.content-section.inverse-content > div.text-content > p:nth-child(3)");
// adventurePtwoMouseOver.addEventListener('mouseover', element => {
//     adventurePtwoMouseOver.style.color = 'pink'
// });

// const pickMouseOver = document.querySelector("body > div > section.content-destination > h2")
// pickMouseOver.addEventListener('mouseover', element => {
//     pickMouseOver.style.color = 'red'
// });

// const pickPMouseOver = document.querySelector("body > div > section.content-destination > p");
// pickPMouseOver.addEventListener('mouseover', element => {
//     pickPMouseOver.style.color = 'orange'
// });


// //////////(4) KEYDOWN///////////////
//   window.addEventListener('keydown', event => {
//   switch (event.keyCode) {
//       case 49: // 1
//         setBackgroundColor('red');
//         break;
//       case 50: // 2
//         setBackgroundColor('green');
//         break;
//       case 51: // 3
//         setBackgroundColor('blue');
//         break;
//       case 52: // 4
//         setBackgroundColor('yellow');
//         break;
//       case 53: // 5
//         setBackgroundColor('black');
//         break;
//       case 54: // 6
//         setBackgroundColor('white');
//         break;
//       case 55: // 7
//         setBackgroundColor('purple');
//         break;
//       case 56: // 8
//         setBackgroundColor('#333');
//   }
// });

// function setBackgroundColor(color) {
//     document
//       .querySelector('body')
//       .style
//       .backgroundColor = color;
// }

// //////////(5) WHEEL///////////////
// const wheelThing = document.querySelector('p');
// wheelThing.addEventListener('wheel', myFunction);

// function myFunction() {
//     this.style.fontSize = '35px';
// }

//////////(6) DRAG///////////////
let shiftX, shiftY

const dragged = document.querySelector('.img-content')
dragged.addEventListener('dragstart', dragStart);
dragged.addEventListener('dragend', dragDrop);
function dragStart() {
  shiftX = event.clientX - dragged.getBoundingClientRect().left;
  shiftY = event.clientY - dragged.getBoundingClientRect().top;
  console.log(`The image is dragged`)
}

function dragDrop(event) {
  dragged.style.position = 'absolute';
  dragged.style.top = event.clientY - shiftY + 'px';
  dragged.style.left = event.clientX - shiftX + 'px';
  console.log(event.clientX);
  console.log(event.clientY);
  console.log(`The image is dropped`)//couldn't figure out the drop
}

// //////////(7) LOAD///////////////
// window.addEventListener("load", function(event) {
//     console.log("All resources finished loading!");
// });

// //////////(8) FOCUS///////////////
// const form = document.getElementById("form");
// form.addEventListener("focus", function(event) {
//   event.target.style.background = "yellow";    
// }, true);
// form.addEventListener("blur", function( event ) {
//   event.target.style.background = "";    
// }, true);

// //////////(9) SCROLL///////////////
// document.addEventListener("scroll", event => {
//     console.log("oh look we're rapidly scrolling!");
// });

// ////////(10) SELECT///////////////
// const textOpacity = document.querySelectorAll('p');
// textOpacity.forEach(item => item.addEventListener('select', function(event) {
//   event.target.style.opacity = '0.4';
// }))

/////////////PREVENT DEFAULT/////////////
// const homeTag = document.querySelector('#home-tag')
// homeTag.addEventListener('click', (event) =>{
//     event.preventDefault()
// })

/////////CLICK///////////////
// const funInTheSunSignIn = document.querySelector('.destination .btn')
// funInTheSunSingIn.addEventListener('click', (event) => {
//     console.log('User Sign up clicked')
//  })

///////PROPOGATION////////
// funInTheSunSignIn.addEventListener('click', (event)=>{
//     console.log(event.target.parentNode);
//     event.target.parentNode.style.color = 'white';
//     event.stopPropagation();
//     console.log ("Button was clicked!")
//     })

//     const parentNode = document.querySelector('.destination')
//     parentNode.addEventListener('click', (event) =>{
//         console.log ("Parent was clicked!")
//     })

  
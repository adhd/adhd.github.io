/*
Create webpage with two side-by-side panels that change width based on the 
user's mouse or touch movement.
*/

// retrieves the DOM element with the ID "left-side" (first div)
const left = document.getElementById("left-side");

const handleMove = e => {
    // sets width based on the horizontal position of user's cursor 
    // pct value is then used to set the width property of left
    left.style.width = `${e.clientX / window.innerWidth * 100}%`; 
}

// when mouse/touch moves, call handleMove 
document.onmousemove = e => handleMove(e);
document.ontouchmove = e => handleMove(e.touches[0]);
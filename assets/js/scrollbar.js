// making the scrollbar effect
scrollbar = document.querySelector('.scrollbar');
arrow = document.querySelector('.scrollbar #scroll-arrow');
topline = document.querySelector('.scrollbar .line#top');
bottomline = document.querySelector('.scrollbar .line#bottom');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let can_drag = false;

// drag arrow to scroll
arrow.addEventListener('mousedown', function(event) {
    can_drag = true;
    if (event.which == 1) {
      addEventListener('mousemove', moved);
      event.preventDefault(); // Prevent selection
    }
});

arrow.addEventListener('mouseup', () => {
    can_drag = false;
})
  
function buttonPressed(event) {
    // not all browsers support event.which for mousemove, but
    // all major browsers support buttons or which
    if (event.buttons == null)
      return event.which != 0;
    else
      return event.buttons != 0;
}

function moved(e) {
    let newScroll = e.clientY / scrollbar.offsetHeight * totalHeight;
    window.scrollTo({
        top: newScroll,
    });
    if(!buttonPressed(e)) {
        removeEventListener('mousemove', moved);
    }
}



// scroll animation
window.addEventListener('scroll', ()  => {
    let progress = (document.documentElement.scrollTop / totalHeight) * 100;
    arrow.style.top = `${scrollToX(progress)}%`;
})

// click to scroll
scrollbar.addEventListener('click', (e) => {
    let newScroll = e.clientY / scrollbar.offsetHeight * totalHeight;
    window.scrollTo({
        top: newScroll,
        behavior: 'smooth'
    })
})

// function to scroll to position
function scrollToX(x) {
    x =  Math.min(Math.max(x, 1.5), 95);
    // positionning the arrow
    arrow.style.top = x + "%";
    // set top line height
    topline.style.height = "calc("+ x +"% - 2rem)";
    // set bottom line height
    bottom.style.top = "calc("+ x + "% + 3.1rem";
    bottomline.style.height = "calc("+ (100 - x) +"% - 3.1em)";
}
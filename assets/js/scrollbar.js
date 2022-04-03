// making the scrollbar effect
scrollbar = document.querySelector('.scrollbar');
arrow = document.querySelector('.scrollbar #scroll-arrow');
topline = document.querySelector('.scrollbar .line#top');
bottomline = document.querySelector('.scrollbar .line#bottom');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// drag arrow to scroll
arrow.addEventListener('mousedown', function(event) {
    if (event.which == 1) {
      addEventListener('mousemove', moved);
      event.preventDefault(); // Prevent selection
    }
});
  
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
    // equal to the side gap in % in main.scss
    x =  Math.min(Math.max(x, 0), 100);
    // positionning the arrow
    arrow.style.top = x + "%";
    topline.style.height = "calc(" + x + "% + -2rem)";
    bottomline.style.height = "calc(100% - " + x + "% - 2rem)";
}

function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
};
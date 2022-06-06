// making the scrollbar effect
scrollbar = document.querySelector(".scrollbar");
arrow = document.querySelector(".scrollbar #scroll-arrow");
topline = document.querySelector(".scrollbar .line#top");
bottomline = document.querySelector(".scrollbar .line#bottom");
scrollup = document.querySelector(".scroll");

// scroll up button
scrollup.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// scroll animation
window.addEventListener("scroll", () => {
  let progress =
    (document.documentElement.scrollTop /
      document.documentElement.clientHeight) *
    100;
  arrow.style.top = `${scrollToX(progress)}`;
  scrollToX(progress);
});

// click to scroll
scrollbar.addEventListener("click", (e) => {
  let newScroll =
    (e.clientY / scrollbar.offsetHeight) *
    document.documentElement.clientHeight;
  window.scrollTo({
    top: newScroll,
    behavior: "smooth",
  });
  scrollToX(newScroll);
});

// function to scroll to position
function scrollToX(x) {
  // equal to the side gap in % in main.scss
  x = Math.min(Math.max(x, 0), 100);
  // positionning the arrow
  arrow.style.top = x + "%";
  topline.style.height = "calc(" + x + "% + -2rem)";
  bottomline.style.height = "calc(100% - " + x + "% - 2rem)";
}

function isTouchScreendevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}

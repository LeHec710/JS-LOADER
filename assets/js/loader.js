// --------------- LOADER ---------------
const loader  = document.querySelector(".loader-container");
const loaderImage  = document.querySelector(".loader-container .loader");

// show the loader image
setTimeout(() => {
    loaderImage.classList.add("enabled");
}, 1000);

// hide loader image
setTimeout(() => {
    loaderImage.classList.remove("enabled"); 
    loaderImage.classList.add("disabled"); 
}, 3500);

// remove loader container
setTimeout(() => {
    loader.classList.remove("enabled");
    loader.classList.add("disabled");
}, 4500);

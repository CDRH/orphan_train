// Used for the slideshow features
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
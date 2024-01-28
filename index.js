let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

const textName = document.querySelector(".name-text");
const textEmail = document.querySelector(".email-text");
const btnSend = document.querySelector(".btn-send");

btnSend.addEventListener("click", function() {
    textEmail.value = "";
    textName.value = "";
    alert("Спасибо за участие!");
});

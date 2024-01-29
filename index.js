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
const inputScrin = document.querySelector(".scrin-input");
const textEmail = document.querySelector(".email-text");
const scrinText = document.querySelector(".scrin-text");
const btnSend = document.querySelector(".btn-send");

function fullScrinForm(){
    if(inputScrin.value !== ""){
        scrinText.innerHTML = "Ваш скриншот: " + inputScrin.value
    }
    else{
    }
}
inputScrin.addEventListener("change", fullScrinForm)
function registrForm(){
    if(textEmail.value === "" && textName.value === "" && inputScrin.value === ""){
        alert("Вы не заполнили поля!")
    }
    else if(textEmail.value === ""){
        alert("Заполните поле 'E-mail'")
        textEmail.value = "";
        textName.value = "";
    }
    else if(textName.value === ""){
        alert("Заполните поле 'Имя'")
        textEmail.value = "";
        textName.value = "";
    }
    else if(inputScrin.value === ""){
        alert("Вы не прикрпили скриншот!")
        textEmail.value = "";
        textName.value = "";
    }
    else{
        textEmail.value = "";
        textName.value = "";
        inputScrin.value = "";
        scrinText.innerHTML = "Прикрепите скриншот";
        alert("Спасибо за участие!");
    }
}
btnSend.addEventListener("click", () => {
    registrForm();
});

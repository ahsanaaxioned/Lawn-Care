// global variable declaration start here
const hamburger = document.querySelector(".hamburger"),
    navbar = document.querySelector(".navbar"),
    html = document.querySelector("html"),
    galleryItem = document.querySelectorAll(".gallery-img"),
    form = document.querySelector(".connect-form"),
    fullName = document.querySelector(".full-name"),
    email = document.querySelector(".email-input"),
    feedbackMsg = document.querySelector(".message"),
    subject = document.querySelector(".subject"),
    successSpan = document.querySelector(".succes-span"),
    scrollUp = document.querySelector(".scroll-up"),
    nameRegex = /^[A-Za-z]+$/,
    msgRegex = /^[A-Za-z0-9.]{5,50}$/,
    emailRegex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
    modal = document.querySelector(".modal");
// global variable declaration end here
// hamburger event start here
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    html.classList.add("remove-scroll")
});
// hamburger event end here

// scroll-up start here
window.addEventListener("scroll",()=>{
    if(window.scrollY > scrollUp.offsetHeight + 25){
        scrollUp.style.display ="block";
    }else{
        scrollUp.style.display ="none";
    }
});
// scroll-up end here

// modal for gallery page start her
// modal structure start here
modal.innerText = "";
div = document.createElement("div");
div.classList.add("modal-content");
div.innerHTML = `<div class="modal-close">
<span class="modal-bar rotate1">bar</span>
<span class="modal-bar hide">bar</span>
<span class="modal-bar rotate2">bar</span>
</div>
<figure class="modal-figure">
<img src="" alt="Modal Image" class="modal-image">
</figure>`
modal.appendChild(div);
const modalClose = div.children[0];
// modal structure end here
// add and remove class function for moda start here
function appearClass() {
    if (modal && html) {
        modal.classList.add("appear");
        html.classList.add("remove-scroll");
    }
};
function removeClass() {
    if (modal && html) {
        modal.classList.remove("appear");
        html.classList.remove("remove-scroll");
    }
};
// add and remove class function for modal start here
// Modal function start here
galleryItem.forEach(function (image, index) {
    image.addEventListener("click", function () {
        const modalImg = document.querySelector(".modal-image"),
            galleryImage = document.querySelectorAll(".gallery-image");
        if (modalImg && galleryImage) {
            modalImg.src = galleryImage[index].src;
            appearClass();
        }
    });
});
modalClose.addEventListener("click", function () {
    removeClass();
});
// Modal function end here
//  event for outside click and escape btn start here

modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        removeClass();
    };
});

window.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        removeClass();
    };
});
//  event for outside click and escape btn start here
// modal for gallery page end her

// form validation for contact page start here
// form submit event start here
form.addEventListener("submit", function (e) {
    e.preventDefault();
    inputValidate();
});
// form submit event end here
// input validate function start here
function inputValidate() {
    const errorLenght = document.querySelectorAll(".fail");
    if ((fullName.value) && (email.value) && (subject.value) &&
        (feedbackMsg.value) && (errorLenght.length === 0)) {
        successSpan.classList.add("success");
        successSpan.innerText = "Your message was sent, thank you..!"
        setTimeout(function () {
            successSpan.classList.remove("success");
        }, 2000);
        fullName.value = "";
        email.value = "";
        subject.value = "";
        feedbackMsg.value = "";
    } else {
        validation(fullName, nameRegex);
        validation(email, emailRegex);
        validation(subject, nameRegex);
        validation(feedbackMsg, msgRegex);
    }
};
// input validate function end here
// validation function start here 
function validation(input, regex) {
    const formInput = input.parentElement;
    errorMsg = formInput.querySelector(".error");
    str = input.value;
    if (str == "") {
        errorMsg.classList.add("fail");
        formInput.classList.add("fail");
        errorMsg.innerText = "*please enter your " + input.name;
    } else if (!regex.test(str)) {
        errorMsg.classList.add("fail");
        formInput.classList.add("fail");
        errorMsg.innerText = "*please eneter a valid " + input.name;
    } else if (str.length < 4) {
        errorMsg.classList.add("fail");
        formInput.classList.add("fail");
        errorMsg.innerText = "*it should be atleast 4 character";
    } else {
        errorMsg.classList.remove("fail");
        formInput.classList.add("success");
        formInput.classList.remove("fail");
    }
};
// validation function start here 
// input event start here
fullName.addEventListener("blur", () => {
    validation(fullName, nameRegex)
});
email.addEventListener("blur", () => {
    validation(email, emailRegex)
});
feedbackMsg.addEventListener("blur", () => {
    validation(feedbackMsg, msgRegex)
});
subject.addEventListener("blur", () => {
    validation(subject, nameRegex)
});
// input event end here
// form validation for contact page end here



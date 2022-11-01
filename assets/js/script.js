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
  feedbackList = document.querySelector(".feedback-lis"),
  nameRegex = /^[A-Za-z\s]+$/,
  msgRegex = /^[A-Za-z0-9.\s]{5,50}$/,
  emailRegex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
  modalWrapper = document.querySelector(".wrapper-large");
// global variable declaration end here
// hamburger event start here
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  html.classList.toggle("remove-scroll")
});
// hamburger event end here

// scroll-up start here
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
window.addEventListener("scroll", () => {
  if (window.scrollY > scrollUp.offsetHeight + 25) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

// scroll-up end here

// slider start here
if (feedbackList) {
  $(".feedback-lis").slick({
    dots: true,
    infinite: false,
    speed: 300,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
}
// slider end here

// modal for gallery page start her
// modal structure start here
galleryItem.forEach(function (image, index) {
  image.addEventListener("click", function () {
    galleryImage = document.querySelectorAll(".gallery-image");
    const modalImg = galleryImage[index].src;
    div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `<div class="modal-content"><div class="modal-close">
<span class="modal-bar rotate1">bar</span>
<span class="modal-bar hide">bar</span>
<span class="modal-bar rotate2">bar</span>
</div>
<figure class="modal-figure">
<img src="${modalImg}" alt="Modal Image" class="modal-image">
</figure></div>`;
    modalWrapper.appendChild(div);
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal-close");
    modalClose.addEventListener("click", function () {
      div.remove();

    });
    modal.addEventListener("click", function (e) {
      if (e.target == modal) {
        div.remove();
      };
    });
    window.addEventListener("keydown", function (e) {
      if (e.key == "Escape") {
        div.remove();
      };
    });
  
  });
});
// Modal function end here
// modal for gallery page end her

// form validation for contact page start here
// form submit event start here
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    inputValidate();
  });
};
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
if(form){
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
}
// input event end here
// form validation for contact page end here



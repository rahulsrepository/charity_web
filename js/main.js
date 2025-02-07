let menu = document.querySelector(".nav .links-container .toggle-menu");
let links = document.querySelector(".nav .links");
let spansToggle = document.querySelectorAll(
  ".nav .links-container .toggle-menu span"
);

//----------------------------navbar-------------------------
menu.addEventListener("click", (e) => {
  links.classList.toggle("open");
  if (links.classList.contains("open")) {
    spansToggle[0].style.cssText = "top: 0px;transform: rotate(45deg);";
    spansToggle[1].style.cssText = "opacity: 0;";
    spansToggle[2].style.cssText = "top: 0px; transform: rotate(-45deg);";
  } else {
    spansToggle[0].style.cssText = "top: 0px;transform: rotate(0);";
    spansToggle[1].style.cssText = "opacity: 1;";
    spansToggle[2].style.cssText = "top: 20px; transform: rotate(0);";
  }
});
//--------------------landing-----------------------------------
let landing = document.querySelector(".landing");
let leftIcon = document.querySelector(".landing .icon-left");
let rightIcon = document.querySelector(".landing .icon-right");
leftIcon.addEventListener("click", autoBG);
rightIcon.addEventListener("click", autoBG);
var x = 0;
let LandingBgImages = ["landing01.jpg", "landing02.jpg", "landing03.jpg"];

var intervalImageBg = setInterval(autoBG, 5000);
landing.onmouseover = function () {
  clearInterval(intervalImageBg);
};
landing.onmouseleave = function () {
  setInterval(autoBG, 5000);
};

let content = document.querySelector(".landing .content");
let h1 = document.querySelector(".landing .content h1");
let p = document.querySelector(".landing .content p");
var h1s = ["Humanity", "be a Kind Heart", "Non-profit"];
let ps = [
  "Please tell your friends about our website",
  "Professional charity theme based on Bootstrap 5.2.2",
  "You can support us to grow more",
];
function autoBG() {
  x++;
  if (x == LandingBgImages.length) x = 0;
  landing.style.backgroundImage = `url(images/slide/${LandingBgImages[x]})`;
  h1.innerHTML = h1s[x];
  p.innerHTML = ps[x];
}
//-------------------------------------About-----------------------------------
let numbers = document.querySelectorAll(".about .col_3 div span.increase");
let mySection = document.getElementById("about");
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= mySection.offsetTop - 200) {
    if (!started) {
      numbers.forEach((number) => {
        startCount(number);
      });
    }
    started = true;
  }
});
function startCount(el) {
  let stop = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;

    if (el.textContent == stop) {
      clearInterval(counter);
    }
  }, 1000 / stop);
}

//---------------------all scroll ----------------------------

let allLinks = document.querySelectorAll(".nav .links > li ");
function scrollIntoSection(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
      activeLink(element);
    });
  });
}
scrollIntoSection(allLinks);

//---------------------------all-------------------------------------
let lis = document.querySelectorAll(".nav .links > li");
const sections = document.querySelectorAll([
  ".landing",
  ".about",
  ".cuses",
  ".contact",
  ".volunteer_2",
]);
function activeLink(li) {
  lis.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};
//--------------------- scroll to news ----------------------------
let liNews = document.querySelector(".nav .links .new ");
let sectionNews = document.querySelector(".news");
window.addEventListener("scroll", function () {
  let secTop = sectionNews.offsetTop;
  let heightSectonNews = sectionNews.offsetHeight;

  if (
    window.scrollY >= sectionNews.offsetTop &&
    window.scrollY < secTop + heightSectonNews
  ) {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    liNews.classList.add("active");
  }
});
//-------------------------Happy-------------------------

let divImgs = document.querySelectorAll(".happy .container .imgs img");
var opinion = document.querySelector(".happy .container .opinion ");
var firstName = document.querySelector(".happy .container div span.fn");
var lastName = document.querySelector(".happy .container div span.ls");

function changeimg(divImgs) {
  divImgs.forEach((divImg) => {
    divImg.addEventListener("click", (e) => {
      active(divImgs);
      //clearInterval(intervalAvatar);
      if (e.target == divImgs[1]) {
        (opinion.innerHTML =
          "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci"),
          (firstName.innerHTML = "Thomas");
        lastName.innerHTML = ", Partner";
      } else if (e.target == divImgs[2]) {
        opinion.innerHTML =
          "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme";
        firstName.innerHTML = "Jane";
        lastName.innerHTML = ", Advisor";
      } else if (e.target == divImgs[3]) {
        opinion.innerHTML =
          "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci";
        firstName.innerHTML = "Bob";
        lastName.innerHTML = ", Entreprenuer";
      }
    });
  });
}
changeimg(divImgs);
let j = 0;
var firstNames = ["Maria", "Thomas", "Jane", "Bob"];
var lastNames = [", Boss", ", Partner", ", Advisor", ", Entreprenuer"];
var opinions = [
  "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme",
  "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci",
  "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme",
  "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci",
];

var intervalAvatar = setInterval(autoAvatar, 5000);
function autoAvatar() {
  opinion.innerHTML = opinions[j];
  firstName.innerHTML = firstNames[j];
  lastName.innerHTML = lastNames[j];

  divImgs.forEach((img) => img.classList.remove("active"));
  divImgs[j].classList.add("active");

  j++;
  if (j == opinions.length) j = 0;
}

function active(array) {
  array.forEach((element) => {
    element.addEventListener("click", (e) => {
      array.forEach((ele) => {
        ele.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  });
}

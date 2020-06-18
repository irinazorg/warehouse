"use strict";

function openCloseFunction(mainBlock, closeBtn, openBtn) {
  // Открываем менб
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    mainBlock.classList.toggle("open");
  });

  // Закрываем блок по клику на кнопке
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (mainBlock.classList.contains("open")) {
      mainBlock.classList.remove("open");
    }
  });

  // Закрываем блок по клику вне блока
  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == mainBlock || mainBlock.contains(target);
    const its_btnMenu = target == openBtn;
    const menu_is_active = mainBlock.classList.contains("open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
      mainBlock.classList.remove("open");
    }
  });

  // ЗАкрываем меню по клику на Esc
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
      mainBlock.classList.remove("open");
    }
  });
}

// Открытие и закрытие главного меню
const closeMenuBtn = document.querySelector(".warehouse-links-item.close-btn");
const mainMenu = document.querySelector(".main-naw-wrap");
const homeMenuBtn = document.querySelector(".main-nav-item--home");
openCloseFunction(mainMenu, closeMenuBtn, homeMenuBtn);

// Отрытие и закрытие блока поиска
const openSearchBlock = document.querySelector(".search-menu-btn");
const searchBlock = document.querySelector(".search-wrap");
const closeSearchBtn = document.querySelector(".search-close-btn");
openCloseFunction(searchBlock, closeSearchBtn, openSearchBlock);

function Sliders(o) {
  "use strict";
  var time = o.time || 500,
    autoTime = o.autoTime || 5000,
    selector = o.selector,
    width_height = o.width_height || 100 / 70,
    sliders = document.querySelectorAll(selector),
    i;
  function css(elm, prop, val) {
    elm.style[prop] = val;
    prop = prop[0].toUpperCase() + prop.slice(1);
    elm.style["webkit" + prop] = elm.style["moz" + prop] = elm.style[
      "ms" + prop
    ] = elm.style["o" + prop] = val;
  }
  function anonimFunc(slider) {
    var buttonLeft = document.querySelector(".slider-back"),
      buttonRight = document.querySelector(".slider-next"),
      ul = slider.children[0],
      li = ul.children,
      activeIndex = 0,
      isAnimate = false,
      i,
      s;
    ul.style.paddingTop = 100 / width_height + "vh";
    for (i = 0; i < li.length; i += 1) {
      css(li[i], "animationDuration", time + "ms");
    }
    li[activeIndex].classList.add("active");
    function left() {
      if (isAnimate) {
        return;
      }
      clearTimeout(s);
      isAnimate = true;
      var nextIndex = activeIndex < li.length - 1 ? activeIndex + 1 : 0;
      li[nextIndex].classList.add("next");
      li[activeIndex].classList.add("left");
      li[nextIndex].classList.add("active");
      setTimeout(function () {
        li[activeIndex].classList.remove("active");
        li[activeIndex].classList.remove("left");
        li[nextIndex].classList.remove("next");
        li[nextIndex].classList.add("active");
        activeIndex = nextIndex;
        isAnimate = false;
        s = setTimeout(left, autoTime);
      }, time);
    }
    function right() {
      if (isAnimate) {
        return;
      }
      clearTimeout(s);
      isAnimate = true;
      var nextIndex = activeIndex > 0 ? activeIndex - 1 : li.length - 1;
      li[nextIndex].classList.add("previous");
      li[activeIndex].classList.add("right");
      li[nextIndex].classList.add("active");
      setTimeout(function () {
        li[activeIndex].classList.remove("active");
        li[activeIndex].classList.remove("right");
        li[nextIndex].classList.remove("previous");
        li[nextIndex].classList.add("active");
        activeIndex = nextIndex;
        isAnimate = false;
        s = setTimeout(right, autoTime);
      }, time);
    }
    buttonLeft.addEventListener("click", left);
    buttonRight.addEventListener("click", right);
    s = setTimeout(right, autoTime);
  }
  for (i = 0; i < sliders.length; i += 1) {
    anonimFunc(sliders[i]);
  }
}

var sliders = new Sliders({
  selector: ".slider",
  time: 500,
  autoTime: 50000000,
  width_height: 350 / 250,
});

// Меняем цвет фона по клику на кнопку
const colorsArr = ["#f8c255", "#bfe79e", "#ff9b6d", "#7dd5c9"];
let currentColor = 0;
const background = document.querySelector(".top-section-slider-wrap");
const btnSliders = document.querySelectorAll(".slider-control");

const iconArr = [
  "img/spice.svg",
  "img/wineglass.svg",
  "img/eat.svg",
  "img/bathroom.svg",
];
let currentIcon = 0;
const icon = document.querySelector(".slider-category-icon");

let sliderChangeColorAndIcon = function (currentBox, arr, changeSetting) {
  currentBox = 0;
  currentBox++;
  if (currentBox > arr.length - 1) currentBox = 0;
  changeSetting = arr[currentBox];
};

if (window.matchMedia("(min-width: 576px)").matches) {
  for (let i = 0; i < btnSliders.length; i++) {
    btnSliders[i].addEventListener("click", function () {
      currentColor++;
      if (currentColor > colorsArr.length - 1) currentColor = 0;
      background.style.borderTopColor = colorsArr[currentColor];

      currentIcon++;
      if (currentIcon > iconArr.length - 1) currentIcon = 0;
      icon.src = iconArr[currentIcon];
    });
  }
} else {
  for (let i = 0; i < btnSliders.length; i++) {
    btnSliders[i].addEventListener("click", function () {
      currentColor++;
      if (currentColor > currentColor.length - 1) currentColor = 0;
      background.style.borderLeftColor = colorsArr[currentColor];

      currentIcon++;
      if (currentIcon > iconArr.length - 1) currentIcon = 0;
      icon.src = iconArr[currentIcon];
    });
  }
}

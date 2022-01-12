// general variables & constants

const image1 = document.querySelectorAll(".small-image-1"),
  image2 = document.querySelectorAll(".small-image-2"),
  image3 = document.querySelectorAll(".small-image-3");

let countDate = new Date("Apr, 2022 00:00:00").getTime();

// Scroll

window.onscroll = () => {
  navbar.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
};

// Animating The Logo

let logo = "FASHION.";

let cIndex = 0;

let logoIn = setInterval(() => {
  txt.innerHTML += logo[cIndex++];
  if (cIndex == logo.length) {
    clearInterval(logoIn);
  }
}, 300);

// Coloring The Logo
setTimeout(() => {
  txt.style.color = "var(--orange-color)";
}, 2350);

// navbar
menu.onclick = () => {
  navbar.classList.toggle("active");
};

cross.onclick = () => {
  navbar.classList.remove("active");
};

// Dark And Light Mode

theme.onclick = () => {
  theme.classList.toggle("fa-sun");
  if (theme.classList.contains("fa-sun")) {
    document.querySelector("body").classList.add("active");
  } else {
    document.querySelector("body").classList.remove("active");
  }
};

// Changing Images onClick

image1.forEach((image) => {
  image.onclick = () => {
    document.querySelector(".big-image-1").src = image.getAttribute("src");
  };
});

image2.forEach((image) => {
  image.onclick = () => {
    document.querySelector(".big-image-2").src = image.getAttribute("src");
  };
});

image3.forEach((image) => {
  image.onclick = () => {
    document.querySelector(".big-image-3").src = image.getAttribute("src");
  };
});

// Deal counting

const countDown = () => {
  let now = new Date().getTime();
  gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
};

setInterval(() => {
  countDown();
}, 1000);

// swiper.js

var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

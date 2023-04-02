const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navMenu.addEventListener("click", ({ target }) => {
  if (
    target.classList.contains("nav__icon") ||
    target.classList.contains("nav__link")
  ) {
    navMenu.classList.remove("show-menu");
  }
});

const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");
const skillsContainer = document.querySelector(".skills__container");

skillsContainer.addEventListener("click", ({ target }) => {
  if (target.closest(".skills__header")) {
    skillsContent.forEach((item) => {
      if (
        target.closest("div[data-skills]").dataset.skills ===
          item.dataset.skills &&
        !item.classList.contains("skills__open")
      ) {
        item.classList.add("skills__open");
      } else {
        item.classList.remove("skills__open");
      }
    });
  }
});

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

const modal = (index) => {
  modalViews[index].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modal(index);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

const swiperPortfolio = new Swiper(".portfolio__swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

const footerYear = document.querySelector(".footer__date");
footerYear.textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const currentAnchor = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      currentAnchor.classList.add("active-link");
    } else {
      currentAnchor.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

const scrollHeader = () => {
  const nav = document.getElementById("header");
  if (window.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

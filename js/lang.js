const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["en", "ru"];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "en";

const text = {
  tab__title: {
    en: "Vitaly Bochkarev's Website",
    ru: "Сайт Виталия Бочкарёва",
  },
  nav__logo: {
    en: "Vitaly Bochkarev",
    ru: "Виталий Бочкарёв",
  },
  nav__link__home: {
    en: "Home",
    ru: "Главная",
  },
  nav__link__about: {
    en: "About",
    ru: "Обо мне",
  },
  nav__link__skills: {
    en: "Skills",
    ru: "Навыки",
  },
  nav__link__services: {
    en: "Services",
    ru: "Услуги",
  },
  nav__link__portfolio: {
    en: "Portfolio",
    ru: "Портфолио",
  },
  nav__link__contact: {
    en: "Contact",
    ru: "Контакты",
  },
  home__title: {
    en: "Hi, my name is Vitaly",
    ru: "Привет, меня зовут Виталий",
  },
  home__subtitle: {
    en: "I am freelancer, web-developer",
    ru: "Я фрилансер, веб-разработчик",
  },
  home__description: {
    en: "I develop websites and web applications",
    ru: "Разрабатываю сайты и веб-приложения",
  },
  button__contact: {
    en: "Contact Me",
    ru: "Свяжитесь со мной",
  },
  home__scroll: {
    en: "scroll down",
    ru: "прокрутить вниз",
  },
  section__title__about__me: {
    en: "About Me",
    ru: "Обо мне",
  },
  section__subtitle__introduction: {
    en: "my features",
    ru: "мои качества",
  },
  about__description: {
    en: "I build a workflow to achieve an excellent result, I have experience in working in a development team, I find a compromise in any situation, I complete all tasks on time.",
    ru: "Выстраиваю рабочий процесс для достижения отличного результата, имею опыт работы в команде разработчиков, нахожу компромисс в любой ситуации, выполняю все задачи в  установленные сроки.",
  },
  about__info__years: {
    en: "years",
    ru: "лет",
  },
  about__info__experience: {
    en: "experience",
    ru: "опыта",
  },
  about__info__completed: {
    en: "completed",
    ru: "завершенных",
  },
  about__info__project: {
    en: "project",
    ru: "проектов",
  },
  about__info__companies: {
    en: "companies",
    ru: "компаниях",
  },
  about__info__worked: {
    en: "worked",
    ru: "работал",
  },
  button__download: {
    en: "Download CV",
    ru: "Скачать резюме",
  },
  section__title__skills: {
    en: "Skills",
    ru: "Навыки",
  },
  section__subtitle__level: {
    en: "my technical level",
    ru: "мой технический уровень",
  },
  skills__title__frontend: {
    en: "Frontend",
    ru: "Фронтенд",
  },
  skills__subtitle__frontend: {
    en: "more than 1 year",
    ru: "более 1 года",
  },
  skills__title__backend: {
    en: "Backend ",
    ru: "Бэкенд",
  },
  skills__subtitle__backend: {
    en: "less than 1 year",
    ru: "менее 1 года",
  },
  skills__title__tools: {
    en: "Tools",
    ru: "Инструменты",
  },
  skills__subtitle__tools: {
    en: "less than 1 year",
    ru: "менее 1 года",
  },
  section__title__qualification: {
    en: "Qualification",
    ru: "Квалификация",
  },
  section__subtitle__personal: {
    en: "my personal way",
    ru: "мой личный путь",
  },
  education: {
    en: "Education",
    ru: "Образование",
  },
  work: {
    en: "Work",
    ru: "Работа",
  },
  qualification__title__profession: {
    en: "Profession: Junior Frontend Developer",
    ru: "Профессия: Младший Фронтенд-разработчик",
  },
  qualification__subtitle__petersburg: {
    en: "Result School - Saint Petersburg",
    ru: "Result School - Санкт-Петербург",
  },
  qualification__subtitle__stepik: {
    en: "Stepik - Online",
    ru: "Stepik - Онлайн",
  },
  qualification__subtitle__hyperskill: {
    en: "Hyperskill - Online",
    ru: "Hyperskill - Онлайн",
  },
  qualification__title__frontend: {
    en: "Frontend Developer",
    ru: "Фронтенд-разработчик",
  },
  qualification__subtitle__technologies: {
    en: "Interactive Learning Technologies, LLC. - Saint Petersburg",
    ru: "ООО «Интерактивные обучающие технологии» - Санкт-Петербург",
  },
  qualification__title__front: {
    en: "Frontend Developer",
    ru: "Фронтенд-разработчик",
  },
  qualification__subtitle__freelance: {
    en: "Freelance - Novokuznetsk",
    ru: "Фриланс - Новокузнецк",
  },
  qualification__calendar__present: {
    en: "Present",
    ru: "настоящее время",
  },
  qualification__title__administrator: {
    en: "Site administrator",
    ru: "Администратор сайта",
  },
  qualification__subtitle__woodmen: {
    en: "Woodmen Mebel, LLC. - Moscow",
    ru: "ООО «ВУДМЭНМЕБЕЛЬ» - Москва",
  },
  section__title__services: {
    en: "Services",
    ru: "Услуги",
  },
  section__subtitle__offer: {
    en: "what I offer",
    ru: "что я предлагаю",
  },
  services__view_wl: {
    en: "view more",
    ru: "подробнее",
  },
  services__view_spa: {
    en: "view more",
    ru: "подробнее",
  },
  services__view_fs: {
    en: "view more",
    ru: "подробнее",
  },
  services__modal__layout: {
    en: "Web layout",
    ru: "Веб-вёрстка",
  },
  services__modal__1: {
    en: "of any complexity",
    ru: "любой сложности",
  },
  services__modal__2: {
    en: "based on Figma design layouts",
    ru: "на основе дизайнерских макетов Figma",
  },
  services__modal__3: {
    en: "adaptive, accessible, responsive",
    ru: "адаптивная, доступная, отзывчивая",
  },
  services__modal__4: {
    en: "with use of crossbrowser compatibility and animation",
    ru: "с использованием кроссбраузерной совместимости и анимации",
  },
  services__modal__spa: {
    en: "Single Page Application",
    ru: "Одностраничное приложение",
  },
  services__modal__s1: {
    en: "development of the client side of web projects",
    ru: "разработка клиентской части веб-проектов",
  },
  services__modal__s2: {
    en: "creation of working pages according to designer's layouts",
    ru: "создание рабочих страниц по макетам дизайнера",
  },
  services__modal__s3: {
    en: "primary testing of the developed code",
    ru: "первичное тестирование разрабатываемого кода",
  },
  services__modal__s4: {
    en: "migration of a site to a modern React or Vue library",
    ru: "миграция сайта в современную библиотеку React или Vue",
  },
  services__modal__fs: {
    en: "Full-Stack Application",
    ru: "Полнофункциональное приложение",
  },
  services__modal__fs1: {
    en: "development of client and server software",
    ru: "разработка клиентского и серверного программного обеспечения",
  },
  services__modal__fs2: {
    en: "automation and request processing",
    ru: "автоматизация и обработка запросов",
  },
  services__modal__fs3: {
    en: "creation of models and routes structures",
    ru: "создание моделей и структур роутов",
  },
  services__modal__fs4: {
    en: "testing and deployment of the project",
    ru: "тестирование и развертывание проекта",
  },
  section__title__portfolio: {
    en: "Portfolio",
    ru: "Портфолио",
  },
  section__subtitle__portfolio: {
    en: "most recent work",
    ru: "самые недавние работы",
  },
  portfolio__description__financme: {
    en: "The full-stack application for tracking expenses and income of the user. Adaptable for all devices, with registration, analytics and advanced features.",
    ru: "Полнофункциональное приложение для отслеживания расходов и доходов пользователя. Адаптируется под все устройства, с регистрацией, аналитикой и расширенными функциями.",
  },
  section__subtitle__vuework: {
    en: "The full-stack application for easy work on tasks in a team. From creation to result, with admin panel, current issue status and advanced features.",
    ru: "Полнофункциональное приложение для удобной работы над задачами в команде. От создания до получения результата, с панелью администратора, текущим статусом задач и расширенными функциями.",
  },
  section__subtitle__fc: {
    en: "The full-stack application for speed dating. Adaptable for all devices, with chat, registration and complex functionality.",
    ru: "Полнофункциональное приложение для быстрых знакомств. Адаптируется под все устройства, с чатом, регистрацией и сложным функционалом.",
  },
  section__subtitle__pizza: {
    en: "The full-stack application for a pizzeria, in which visitors make pizza from ingredients, form and send an order themselves.",
    ru: "Полнофункциональное приложение для пиццерии, в которой посетители сами составляют пиццу из ингредиентов, формируют и отправляют заказ.",
  },
  portfolio__description__dt: {
    en: "The single page application representing the development team. Adding a team member is fully automated. It is possible to manage the «Favorites» section.",
    ru: "Одностраничное приложение, представляющее команду разработчиков. Добавление члена команды полностью автоматизировано. Имеется возможность управлять разделом «Избранное».",
  },
  portfolio__description__cm: {
    en: "The single page application based on the context menu. By pressing the right mouse button, you can change the background of the page, add a random figure, count the number of clicks in 3 seconds, find out the prediction for today and launch the magic panel.",
    ru: "Одностраничное приложение на основе контекстного меню. Нажав правую кнопку мыши, вы сможете изменить фон страницы, добавить произвольную фигуру, подсчитать количество кликов за 3 секунды, узнать предсказание на сегодня и запустить волшебную панель.",
  },
  portfolio__description__note: {
    en: "The single page application with classic functions: create, store, edit and delete notes.",
    ru: "Одностраничное приложение с классическими функциями: создание, хранение, редактирование и удаление заметок.",
  },
  project__title__q: {
    en: "Do you have a new project?",
    ru: "У вас новый проект?",
  },
  project__description__a: {
    en: "I will be glad to participate.",
    ru: "Я буду рад принять в нем участие.",
  },
  button__contact__1: {
    en: "Contact Me",
    ru: "Свяжитесь со мной",
  },
  button__contact__2: {
    en: "Contact Me",
    ru: "Свяжитесь со мной",
  },
  section__subtitle__2: {
    en: "my contacts",
    ru: "мои контакты",
  },
  contact__title__tel: {
    en: "Call Me",
    ru: "Позвоните мне",
  },
  contact__title__email: {
    en: "Email",
    ru: "Электронная почта",
  },
  contact__title__location: {
    en: "Location",
    ru: "Расположение",
  },
  contact__title__l: {
    en: "Russia, Novokuznetsk",
    ru: "Россия, Новокузнецк",
  },
  footer__title: {
    en: "Vitaly Bochkarev",
    ru: "Виталий Бочкарёв",
  },
  footer__subtitle: {
    en: "Web developer",
    ru: "Веб-разработчик",
  },
  footer__links__1: {
    en: "Services",
    ru: "Услуги",
  },
  footer__links__2: {
    en: "Portfolio",
    ru: "Портфолио",
  },
  footer__links__3: {
    en: "Contacts",
    ru: "Контакты",
  },
  footer__copy: {
    en: "Vitaly Bochkarev",
    ru: "Виталий Бочкарёв",
  },
};

function changeLang() {
  for (const key in text) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = text[key][currentLang];
    }
  }
}
changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__btn_active")) {
      currentLang = event.target.dataset.btn;
      localStorage.setItem("language", event.target.dataset.btn);
      resetActiveClass(langButtons, "header__btn_active");
      btn.classList.add("header__btn_active");
      changeLang();
    }
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case "ru":
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("header__btn_active");
      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;

    default:
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("header__btn_active");
      break;
  }
}
checkActiveLangButton();

function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

function Download() {
  const url =
    currentLang === "en" ? "./assets/pdf/CV.pdf" : "./assets/pdf/resume.pdf";
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "");
  aTag.download;
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}

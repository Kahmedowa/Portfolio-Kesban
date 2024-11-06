const translations = {
  en: {
    "portfolio": "Home",
    "about-link": "About Me",
    "projects-link": "Projects",
    "certifications-link": "Certifications",
    "contact-link": "Contact",
    "projects-title": "Projects",
    "project1-title": "Lucky Game",
    "project1-text": "A JavaScript-based game that tests your luck. Try your hand at winning!",
    "view-project-btn1": "View Project",
    "project2-title": "Visit Bulgaria",
    "project2-text": "A website promoting tourism in Bulgaria with attractive visuals and travel information.",
    "view-project-btn2": "View Project",
    "project3-title": "Hotel Berlin Booking",
    "project3-text": "A hotel booking website built with HTML, CSS, and JavaScript.",
    "view-project-btn3": "View Project",
    "project4-title": "Umweltschutz Blog",
    "project4-text": "A blog about environmental protection built with HTML and CSS, promoting eco-friendly practices.",
    "view-project-btn4": "View Project",
    "project5-title": "BMI Calculator",
    "project5-text": "A BMI calculator built with HTML, CSS, and JavaScript to help users track their health.",
    "view-project-btn5": "View Project",
    "project6-title": "Bulgaria Crime Data Dashboard",
    "project6-text": "An interactive crime data dashboard for Bulgaria, created with R for visualizing and analyzing crime statistics.",
    "view-project-btn6": "View Project",
    "footer-text": "&copy; 2024 Kesban Ahmedova. All rights reserved."
  },
  bg: {
    "portfolio": "Старт",
    "about-link": "За Мен",
    "projects-link": "Проекти",
    "certifications-link": "Сертификати",
    "contact-link": "Контакт",
    "projects-title": "Проекти",
    "project1-title": "Игра на Късмета",
    "project1-text": "Игра, базирана на JavaScript, която тества вашия късмет. Опитайте своя шанс!",
    "view-project-btn1": "Вижте Проекта",
    "project2-title": "Посетете България",
    "project2-text": "Уебсайт, който насърчава туризма в България с атрактивни визуални материали и информация за пътуване.",
    "view-project-btn2": "Вижте Проекта",
    "project3-title": "Резервация на Хотел Берлин",
    "project3-text": "Уебсайт за резервации на хотели, създаден с HTML, CSS и JavaScript.",
    "view-project-btn3": "Вижте Проекта",
    "project4-title": "Блог за Опазване на Околната Среда",
    "project4-text": "Блог за опазване на околната среда, създаден с HTML и CSS, който насърчава екологичните практики.",
    "view-project-btn4": "Вижте Проекта",
    "project5-title": "Калкулатор на ИТМ",
    "project5-text": "Калкулатор на ИТМ, създаден с HTML, CSS и JavaScript, който помага на потребителите да следят здравето си.",
    "view-project-btn5": "Вижте Проекта",
    "project6-title": "Интерактивно Табло за Престъпления в България",
    "project6-text": "Интерактивно табло за данни за престъпления в България, създадено с R за визуализиране и анализ на статистиката за престъпления.",
    "view-project-btn6": "Вижте Проекта",
    "footer-text": "&copy; 2024 Кесбан Ахмедова. Всички права запазени."
  },
  de: {
    "portfolio": "Startseite",
    "about-link": "Über Mich",
    "projects-link": "Projekte",
    "certifications-link": "Zertifikate",
    "contact-link": "Kontakt",
    "projects-title": "Projekte",
    "project1-title": "Glücksspiel",
    "project1-text": "Ein JavaScript-basiertes Spiel, das dein Glück testet. Versuche dein Glück!",
    "view-project-btn1": "Projekt Ansehen",
    "project2-title": "Besuchen Sie Bulgarien",
    "project2-text": "Eine Website, die den Tourismus in Bulgarien mit attraktiven visuellen und Reiseinformationen fördert.",
    "view-project-btn2": "Projekt Ansehen",
    "project3-title": "Hotel Berlin Buchung",
    "project3-text": "Eine Hotelbuchungs-Website, die mit HTML, CSS und JavaScript erstellt wurde.",
    "view-project-btn3": "Projekt Ansehen",
    "project4-title": "Umweltschutz Blog",
    "project4-text": "Ein Blog über Umweltschutz, der mit HTML und CSS erstellt wurde und umweltfreundliche Praktiken fördert.",
    "view-project-btn4": "Projekt Ansehen",
    "project5-title": "BMI-Rechner",
    "project5-text": "Ein BMI-Rechner, der mit HTML, CSS und JavaScript erstellt wurde, um Benutzern zu helfen, ihre Gesundheit zu verfolgen.",
    "view-project-btn5": "Projekt Ansehen",
    "project6-title": "Kriminalitätsdaten-Dashboard für Bulgarien",
    "project6-text": "Ein interaktives Dashboard für Kriminalitätsdaten in Bulgarien, erstellt mit R zur Visualisierung und Analyse von Kriminalstatistiken.",
    "view-project-btn6": "Projekt Ansehen",
    "footer-text": "&copy; 2024 Kesban Ahmedova. Alle Rechte vorbehalten."
  }
};


function changeLanguage(language) {
  currentLanguage = language;
  document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[language] && translations[language][key]) {
          element.innerHTML = translations[language][key];
      }
  });
  document.getElementById("languageDropdown").textContent = language.toUpperCase();
}

document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  darkModeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('dark-mode', 'enabled');
          darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
          localStorage.setItem('dark-mode', 'disabled');
          darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
  });

  // Set the initial language to English
  changeLanguage('en');
});

const translations = {
  en: {
      "about-link": "About Me",
      "projects-link": "Projects",
      "certifications-link": "Certifications",
      "contact-link": "Contact",
      "autor-name": "Kesban Ahmedova",
      "contact-mail": "Email:",
      "hero-lead": "Junior Web Developer & Data Analyst",
      "hero-subtext": "Ready to tackle new challenges and bring creativity to each project.",
      "about-title": "About Me",
      "about-about-text": "I’m Kesban Ahmedova, a dedicated Web Developer who started her journey in web development, mastering technologies like HTML, CSS, JavaScript, React, Bootstrap, and TypeScript. Later, I expanded my skill set to include data analysis, learning to process and analyze data with modern tools and techniques. I am passionate about blending my web development expertise with data-driven insights to create impactful projects and innovative solutions.",
      "projects-title": "Projects",
      "certifications-title": "Certifications",
      "contact-title": "Contact",
      "portfolio": "Home",
      "footer-text": "&copy; 2024 Kesban Ahmedova. All rights reserved."


  },
  bg: {
      "about-link": "За Мен",
      "projects-link": "Проекти",
      "certifications-link": "Сертификати",
      "contact-link": "Контакт",
      "autor-name": "Кесбан Ахмедова",
      "contact-mail": "Имейл:",
      "hero-lead": "Младши Уеб Разработчик и Анализатор на Данни",
      "hero-subtext": "Готова да поема нови предизвикателства и да приложа креативност в проектите.",
      "about-title": "За Мен",
      "projects-title": "Проекти",
      "certifications-title": "Сертификати",
      "contact-title": "Контакт",
      "portfolio": "Старт",
      "footer-text": "&copy; 2024 Кесбан Ахмедова. Всички права запазени.",
      "about-about-text": "Аз съм Кесбан Ахмедова, отдаден уеб разработчик, който започна своя път в уеб разработката, усъвършенствайки технологии като HTML, CSS, JavaScript, React, Bootstrap и TypeScript. По-късно разширих уменията си, като включих и анализ на данни, като се научих да обработвам и анализирам данни с модерни инструменти и техники. Страстна съм към комбинирането на моите умения в уеб разработката с анализ на данни, за да създавам въздействащи проекти и иновативни решения."
  },
  de: {
      "portfolio": "Startseite",
      "about-link": "Über Mich",
      "projects-link": "Projekte",
      "certifications-link": "Zertifikate",
      "contact-link": "Kontakt",
      "autor-name": "Kesban Ahmedova",
      "about-title": "Über Mich",
      "projects-title": "Projekte",
      "certifications-title": "Zertifikate",
      "contact-title": "Kontakt",
      "about-about-text": "Ich bin Kesban Ahmedova, eine engagierte Webentwicklerin, die ihre Reise in der Webentwicklung begann und sich Fähigkeiten in Technologien wie HTML, CSS, JavaScript, React, Bootstrap und TypeScript aneignete. Später erweiterte ich mein Fachwissen um Datenanalyse, wobei ich lernte, Daten mit modernen Tools und Techniken zu verarbeiten und zu analysieren. Ich bin leidenschaftlich daran interessiert, meine Expertise in der Webentwicklung mit datengesteuerten Einblicken zu verbinden, um wirkungsvolle Projekte und innovative Lösungen zu schaffen.",
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

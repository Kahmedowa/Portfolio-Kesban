const translations = {
    en: {
        "portfolio": "Home",
        "about-link": "About Me",
        "projects-link": "Projects",
        "certifications-link": "Certifications",
        "contact-link": "Contact",
        "contact-title": "Contact",
        "contact-name-label": "Your Name",
        "contact-email-label": "Your Email",
        "contact-subject-label": "Subject",
        "contact-message-label": "Message",
        "contact-send-button": "Send Message",
        "form-success": "Your message has been sent successfully!",
        "form-error": "An error occurred. Please try again later.",
        "footer-text": "&copy; 2024 Kesban Ahmedova. All rights reserved."
    },
    bg: {
        "portfolio": "Старт",
        "about-link": "За Мен",
        "projects-link": "Проекти",
        "certifications-link": "Сертификати",
        "contact-link": "Контакт",
        "contact-title": "Контакт",
        "contact-name-label": "Вашето име",
        "contact-email-label": "Вашият имейл",
        "contact-subject-label": "Тема",
        "contact-message-label": "Съобщение",
        "contact-send-button": "Изпрати съобщение",
        "form-success": "Вашето съобщение беше изпратено успешно!",
        "form-error": "Възникна грешка. Моля, опитайте отново по-късно.",
        "footer-text": "&copy; 2024 Кесбан Ахмедова. Всички права запазени."
    },
    de: {
        "portfolio": "Startseite",
        "about-link": "Über Mich",
        "projects-link": "Projekte",
        "certifications-link": "Zertifikate",
        "contact-link": "Kontakt",
        "contact-title": "Kontakt",
        "contact-name-label": "Ihr Name",
        "contact-email-label": "Ihre E-Mail",
        "contact-subject-label": "Betreff",
        "contact-message-label": "Nachricht",
        "contact-send-button": "Nachricht senden",
        "form-success": "Ihre Nachricht wurde erfolgreich gesendet!",
        "form-error": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
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

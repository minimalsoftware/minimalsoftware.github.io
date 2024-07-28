let darkMode = false;

function toggleDarkMode() {
    if (!darkMode) {
        document.documentElement.style.setProperty('--mainBackgroundColor', '#000000');
        document.documentElement.style.setProperty('--mainColor', '#c6dee3');
        document.documentElement.style.setProperty('--componentColor', '#212121');
        document.documentElement.style.setProperty('--mainTextColor', '#FFFFFF');

        let blackIcons = document.querySelectorAll(".icon--invert");
        for (let i = 0; i < blackIcons.length; i++) {
            blackIcons[i].style.filter = "invert(100%)";
        }
        let iconsBlue = document.querySelectorAll(".icon--blue");
        for (let i = 0; i < iconsBlue.length; i++) {
            iconsBlue[i].style.filter = "brightness(0) saturate(100%) invert(86%) sepia(18%) saturate(194%) hue-rotate(143deg) brightness(98%) contrast(93%)";
        }

        document.querySelector(".logo__icon").src = "../graphics/logo--dark.png";
        document.querySelector(".dark-mode-button img").src = "../graphics/svg/light_mode.svg";

        localStorage.setItem("darkMode", true);

        darkMode = true;
    } else {
        document.documentElement.style.setProperty('--mainBackgroundColor', '');
        document.documentElement.style.setProperty('--mainColor', '');
        document.documentElement.style.setProperty('--componentColor', '');
        document.documentElement.style.setProperty('--mainTextColor', '');

        let blackIcons = document.querySelectorAll(".icon--invert");
        for (let i = 0; i < blackIcons.length; i++) {
            blackIcons[i].style.filter = "";
        }
        let iconsBlue = document.querySelectorAll(".icon--blue");
        for (let i = 0; i < iconsBlue.length; i++) {
            iconsBlue[i].style.filter = "";
        }

        document.querySelector(".logo__icon").src = "../graphics/logo.png";
        document.querySelector(".dark-mode-button img").src = "../graphics/svg/dark_mode.svg";

        localStorage.setItem("darkMode", false);

        darkMode = false;
    }
}

function toggleDarkModeIndex() {
    if (darkMode) {
        document.querySelector(".logo__icon").src = "../graphics/logo--dark.png";
        document.querySelector(".banner__mockup").src = "../graphics/cw-banner--dark.png";
    } else {
        document.querySelector(".logo__icon").src = "../graphics/logo.png";
        document.querySelector(".banner__mockup").src = "../graphics/cw-banner--light.png";
    }
}


window.addEventListener("load", () => {
    console.log('load');
    setTimeout(() => {
        document.querySelector("body").classList.add("animated");
    }, 500);
    darkMode = localStorage.getItem("darkMode");
    darkMode = darkMode !== "true";
    toggleDarkMode();

    // console.log("zmiana" + darkMode);
});
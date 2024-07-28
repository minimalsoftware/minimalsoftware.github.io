window.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.querySelector("#theme-select");
    
    function updateTheme() {
        let theme = themeSelect.value;
        
        if (theme === "auto") {
            localStorage.setItem('preferredTheme', "auto");
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme = "dark";
            } else {
                theme = "light";
            }
        } else {
            localStorage.setItem('preferredTheme', theme);
        }

        if (theme === "dark") {
            document.documentElement.style.setProperty('--mainBackgroundColor', '#000000');
            document.documentElement.style.setProperty('--mainColor', '#FFFFFF');
            document.documentElement.style.setProperty('--secondColor', '#0f1724');
            document.documentElement.style.setProperty('--componentColor', '#212121');
            document.documentElement.style.setProperty('--mainTextColor', '#FFFFFF');
            document.documentElement.style.setProperty('--secondTextColor', '#E0E0E0');
            document.documentElement.style.setProperty('--mainBorderColor', '#424242');
            
            const blackIcons = document.querySelectorAll(".icon--invert");
            for (let i = 0; i < blackIcons.length; i++) {
                blackIcons[i].style.filter = "invert(100%)";
            }
            
            document.querySelector(".logo__icon img").src = "graphics/minimal-software-logo--dark.png";
            document.querySelector(".banner").style.backgroundImage = 'url("../graphics/grid-dark.svg")';
            document.querySelector(".banner__mockup-section img").src = "graphics/android-mockup--dark.png"
            
            const pricingPlansFeaturesIconsCheck = document.querySelectorAll(".icon--check");
            for (let i = 0; i < pricingPlansFeaturesIconsCheck.length; i++) {
                pricingPlansFeaturesIconsCheck[i].src = "graphics/google-icons/check_circle--white.svg";
            }
            const pricingPlansFeaturesIconsCancel = document.querySelectorAll(".icon--cancel");
            for (let i = 0; i < pricingPlansFeaturesIconsCancel.length; i++) {
                pricingPlansFeaturesIconsCancel[i].src = "graphics/google-icons/cancel_filled--dark.svg";
            }
        } else {
            document.documentElement.style.setProperty('--mainBackgroundColor', '');
            document.documentElement.style.setProperty('--mainColor', '');
            document.documentElement.style.setProperty('--secondColor', '');
            document.documentElement.style.setProperty('--componentColor', '');
            document.documentElement.style.setProperty('--mainTextColor', '');
            document.documentElement.style.setProperty('--secondTextColor', '');
            document.documentElement.style.setProperty('--mainBorderColor', '');
            
            const blackIcons = document.querySelectorAll(".icon--invert");
            for (let i = 0; i < blackIcons.length; i++) {
                blackIcons[i].style.filter = "";
            }
            
            document.querySelector(".logo__icon img").src = "graphics/minimal-software-logo.png";
            document.querySelector(".banner").style.backgroundImage = 'url("../graphics/grid-light.svg")';
            document.querySelector(".banner__mockup-section img").src = "graphics/android-mockup.png"

            const pricingPlansFeaturesIconsCheck = document.querySelectorAll(".icon--check");
            for (let i = 0; i < pricingPlansFeaturesIconsCheck.length; i++) {
                pricingPlansFeaturesIconsCheck[i].src = "graphics/google-icons/check_circle--main-color.svg";
            }
            const pricingPlansFeaturesIconsCancel = document.querySelectorAll(".icon--cancel");
            for (let i = 0; i < pricingPlansFeaturesIconsCancel.length; i++) {
                pricingPlansFeaturesIconsCancel[i].src = "graphics/google-icons/cancel_filled--main-color.svg";
            }
        }
    }
    
    function initializeTheme() {
        themeSelect.value = localStorage.getItem('preferredTheme') || "auto";
        updateTheme()
    }
    
    themeSelect.addEventListener("change", updateTheme);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        updateTheme()
    });
    initializeTheme()
});
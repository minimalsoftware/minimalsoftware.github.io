document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("language-select");

    function updateLanguage() {
        const selectedLanguage = languageSelect.value;
        const translation = translations[selectedLanguage];

        document.querySelector(".translation--get_weather").textContent = translation["get_weather"];
        document.querySelector(".translation--weather_banner_title").textContent = translation["weather_banner_title"];
        document.querySelector(".translation--weather_banner_subtitle").textContent = translation["weather_banner_subtitle"];
        document.querySelector(".translation--get_weather_by_minimal_software_on_huawei_app_gallery").innerHTML = translation["get_weather_by_minimal_software_on_huawei_app_gallery"];
        document.querySelector(".translation--weather_at_a_glance").innerHTML = translation["weather_at_a_glance"];
        document.querySelector(".translation--weather_feature_1_title").innerHTML = translation["weather_feature_1_title"];
        document.querySelector(".translation--weather_feature_1_description").innerHTML = translation["weather_feature_1_description"];
        document.querySelector(".translation--weather_feature_2_title").innerHTML = translation["weather_feature_2_title"];
        document.querySelector(".translation--weather_feature_2_description").innerHTML = translation["weather_feature_2_description"];
        document.querySelector(".translation--weather_feature_3_title").innerHTML = translation["weather_feature_3_title"];
        document.querySelector(".translation--weather_feature_3_description").innerHTML = translation["weather_feature_3_description"];
        document.querySelector(".translation--weather_feature_4_title").innerHTML = translation["weather_feature_4_title"];
        document.querySelector(".translation--weather_feature_4_description").innerHTML = translation["weather_feature_4_description"];
        document.querySelector(".translation--weather_language_availability").innerHTML = translation["weather_language_availability"];
        document.querySelector(".translation--pricing_title").innerHTML = translation["pricing_title"];
        document.querySelector(".translation--pricing_subtitle").innerHTML = translation["pricing_subtitle"];
        document.querySelector(".translation--about-company").innerHTML = translation["about_company"];
        document.querySelector(".translation--products").innerHTML = translation["products"];
        // document.querySelector(".translation--company").innerHTML = translation["company"];
        document.querySelector(".translation--copyright").innerHTML = translation["copyright"];
        document.querySelector(".translation--pricing_plan_1_description").innerText = translation["pricing_plan_1_description"];
        document.querySelector(".translation--free").innerText = translation["free"];
        document.querySelector(".translation--coming_soon").innerText = translation["coming_soon"];
        document.querySelector(".translation--buy_on_huawei_app_gallery").innerText = translation["buy_on_huawei_app_gallery"];
        const translationsLifetime = document.querySelectorAll(".translation--lifetime");
        for (let i = 0; i < translationsLifetime.length; i++) {
            translationsLifetime[i].innerText = translation["lifetime"];
        }
        document.querySelector(".translation--pricing_plan_1_feature_1").innerText = translation["pricing_plan_1_feature_1"];
        document.querySelector(".translation--pricing_plan_1_feature_2").innerText = translation["pricing_plan_1_feature_2"];
        document.querySelector(".translation--pricing_plan_1_feature_3").innerText = translation["pricing_plan_1_feature_3"];
        document.querySelector(".translation--pricing_plan_1_feature_4").innerText = translation["pricing_plan_1_feature_4"];
        document.querySelector(".translation--pricing_plan_2_description").innerText = translation["pricing_plan_2_description"];
        document.querySelector(".translation--pricing_plan_2_feature_1").innerText = translation["pricing_plan_2_feature_1"];
        document.querySelector(".translation--pricing_plan_2_feature_2").innerText = translation["pricing_plan_2_feature_2"];
        document.querySelector(".translation--pricing_plan_2_feature_3").innerText = translation["pricing_plan_2_feature_3"];
        document.querySelector(".translation--pricing_plan_2_feature_4").innerText = translation["pricing_plan_2_feature_4"];

        localStorage.setItem('preferredLanguage', selectedLanguage);
    }

    function initializeLanguage() {
        languageSelect.value = localStorage.getItem('preferredLanguage') || navigator.language;
        updateLanguage();
    }

    languageSelect.addEventListener("change", updateLanguage);
    initializeLanguage();
});
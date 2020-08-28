const openMenuBtn = document.querySelector(".button.is-open-menu");
const closeMEnuBtn = document.querySelector(".button.is-close-menu");
const navigation = document.querySelector(".app-navigation");

const init = () => {
    openMenuBtn.addEventListener("click", (event) => {
        if(!navigation.classList.contains("is-open")) {
            navigation.classList.add("is-open");
            openMenuBtn.setAttribute("style", "display:none;");
        }  
    });

    closeMEnuBtn.addEventListener("click", (event) => {
        navigation.classList.remove("is-open");
        openMenuBtn.setAttribute("style", "display:block;");
    });
}

if(navigation){
    init();
}
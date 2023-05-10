const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

const navItemAll = document.querySelectorAll("#nav-item");
navBtn.onclick = () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = "./image/Nav-close.svg";
        addClassActive;
    }else{
        navBtnImg.src = "./image/NAV-open.svg";

    }
} 
const addClassActive = navItemAll.forEach(i => {
    i.addEventListener('click', function () {
        navItemAll.forEach(e => e.classList.remove("active"));

        this.classList.add("active");
    }) 
});

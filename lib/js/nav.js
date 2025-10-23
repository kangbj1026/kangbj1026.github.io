import {CreateTag,CreateI} from "./create.js";
import {Map,appEndChild,toggleBtnClick,urlGo} from "./function.js";

function navItems() {
    let links = [
        ['Home', './'],
		['board', './board'],
        // ['Projects', './projects'],
        ['UrlGo', '#'],
        ['React', '/react1026']
    ];

    let nav = document.querySelector('.nav');
    let navLogoDiv = CreateTag('nav_logo','div');
    let navLogoI = CreateI("fa-solid", "fa-code");
    let navLogoLink = CreateTag("nav_logo_link","a", " Portfolio","./");
    let navMenu = CreateTag('nav_menu','ul');
    let navToggleBtn = CreateTag("nav_toggleBtn","div");
    let navToggleI = CreateI("fa-solid", "fa-bars");

    Map(navMenu, links, 'a');

    const navLogoChildren = [[navLogoI],[navLogoLink]];
    appEndChild(navLogoDiv,navLogoChildren,2);

    const navChildren = [[navLogoDiv],[navMenu],[navToggleBtn]];
    appEndChild(nav,navChildren,3);

    navToggleBtn.appendChild(navToggleI);
};
navItems();

const toggleBtn = document.querySelector(".nav_toggleBtn");
toggleBtnClick(toggleBtn);

const navItem = document.querySelector(".nav_menu");
navItem.addEventListener('click',(e)=>{
    navItem.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    toggleBtn.children[0].classList.remove("fa-x");
    toggleBtn.children[0].classList.add("fa-bars");
});
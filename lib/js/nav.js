import {CreateTag,CreateI} from "./create.js";
import {Map,appEndChild,toggleBtnClick} from "./function.js";

function navItems() {
    let links = [
        ['Home', './'],
        ['Projects', './#projects'],
        ['Spring Boot MVC Portfolio', './portfolio']
    ];

    let nav = document.querySelector('.nav');
    let navLogoDiv = CreateTag('nav_logo','div');
    let navLogoI = CreateI("fa-solid", "fa-code");
    let navLogoLink = CreateTag("nav_logo_link","a", " Coding Portfolio","./");
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
import {CreateTag} from "./create.js";

/* 자식 추가 */
export function appEndChild(parents,children,count) {
    for (let i = 0; count > i; i++) {
        parents.appendChild(children[i][0]);
    }
}
/* li 배열 추가 */
export function Map(ul,list,tag) {
    list.map((list) => {
        let liName = "";
        if (ul.className == "nav_menu") liName = 'nav_item';
        let itemsLi = CreateTag(liName,"li");
        let reTag = document.createElement(tag);

        reTag.innerHTML = list[0];
        if (tag == 'a') reTag.href = list[1];
        else reTag.innerHTML += list[1];

        itemsLi.appendChild(reTag);
        ul.appendChild(itemsLi);
    });
}

/* toggleBtn Click */
export function toggleBtnClick(toggleBtn) {
    const section = document.querySelector('section');
    const navMenu = document.querySelector('.nav_menu');
    toggleBtn.addEventListener( 'click', (eve) => {
        section.classList.toggle('active');
        navMenu.classList.toggle('active');
        toggleBtn.classList.toggle('active');
        if (toggleBtn.classList.length == 2) {
            toggleBtn.children[0].classList.remove("fa-bars");
            toggleBtn.children[0].classList.add("fa-x");
        } else {
            toggleBtn.children[0].classList.remove("fa-x");
            toggleBtn.children[0].classList.add("fa-bars");
        }
    })
}
/* MouseOver & MouseOut*/
export function Event(eve,fDiv1,h1) {
    const fDiv1Style = fDiv1.style;
    const h1Style = h1.style;
    if (eve.type == "mouseover") {
        EventStyle(fDiv1Style,h1Style,"0","1.5s","800%","#000000");
    } else if (eve.type == "mouseout") {
        EventStyle(fDiv1Style,h1Style,"1","1.5s","500%","#000000");
    }
}
/* EventStyle */
function EventStyle(fDivStyle,h1Style,opOn,tr,fs,co) {
    fDivStyle.opacity = opOn;
    fDivStyle.transitionDuration = tr;
    h1Style.fontSize = fs;
    h1Style.transitionDuration = tr;
    h1Style.opacity = opOn;
    h1Style.color = co;
}
export function Map(ul,list) {
    list.map((list) => {
        const itemsLi = document.createElement('li');
        itemsLi.classList.add("ex-item");
        let span = document.createElement('span');

        span.innerHTML = list[0] + list[1];
        itemsLi.appendChild(span);
        ul.appendChild(itemsLi);
    });
}
/* div MouseOver & MouseOut*/
export function Event(eve,fDiv1,h1) {
    const fDiv1Style = fDiv1.style;
    const h1Style = h1.style;
    if (eve.type == "mouseover") {
        EventStyle(fDiv1Style,h1Style,"0","1.5s","1300%","#00ff2a");
    } else if (eve.type == "mouseout") {
        EventStyle(fDiv1Style,h1Style,"1","1.5s","1100%","#282583");
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
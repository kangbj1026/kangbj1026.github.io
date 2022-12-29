import {CreateDiv,CreateH1,CreateUl,CreateLi,CreateALink} from "./Create.js";
import {Map,Event} from "./function.js";

export function articleDivFirst() {
    const articleDiv = CreateDiv("articleFirst");
    return articleDiv;
}
export function articleFirst() {
    const articleFirst = document.querySelector(".articleFirst");
    Div1(articleFirst);
    Div2(articleFirst);

    return articleFirst;
}

/* Div1 */
function Div1(articleFirst) {
    const fDiv1 = CreateDiv("f_div1");
    const fh1 = CreateH1("fh1","Introduce");
    fDiv1.appendChild(fh1);

    EventMouse(fDiv1,fh1);

    articleFirst.appendChild(fDiv1);
}
/* Div2 */
function Div2(articleFirst) {
    /* articleFirst f_div2 Info1 */
    const fDiv2 = CreateDiv("f_div2");
    const fDiv2Info1 = CreateDiv("f_div_info1");
    const fDiv2InfoUl = CreateUl("f_div_info1_ul");
    const fDiv2InfoList = ["강 병 주\n Kang Byung Ju","1987.06.06","010-7666-0276","kangbj1987@gmail.com","https://github.com/kangbj1026","https://kangbj1026.github.io","인천 계양구", "웹 개발 1년"];

    for (let i = 0; fDiv2InfoList.length > i; i++) {
        const fDiv2InfoLi = CreateLi("info"+i,fDiv2InfoList[i]);
        if (i == 4 || i == 5) {
            fDiv2InfoLi.innerText = null;
            const aList = CreateALink("info_a"+i,fDiv2InfoList[i],fDiv2InfoList[i]);
            fDiv2InfoLi.appendChild(aList);
        }
        fDiv2InfoUl.appendChild(fDiv2InfoLi);
        fDiv2Info1.appendChild(fDiv2InfoUl);
    }
    fDiv2.appendChild(fDiv2Info1);

    /* articleFirst f_div2 Info2 */
    const fDiv2Info2 = CreateDiv("f_div_info2");

    /* articleFirst f_div2 Info2 Experience */
    const fDiv2Experience = CreateDiv("f_div_experience");
    const fDiv2ExTitle = CreateH1("f_div_experience","Experience");
    const fDivExLists = CreateUl("experience_ul");
    let exList = [
        ['2021.05 ~ 2022.07 두드림\n', 'FRONT END / BACK END 개발\n User 페이지 내 작동하는 기능 구축 및 개발\n 컨펌 된 디자인을 기반으로 웹사이트 내 Publishing 진행']
    ];
    Map(fDivExLists,exList);

    fDiv2Experience.appendChild(fDiv2ExTitle);
    fDiv2Experience.appendChild(fDivExLists);

    /* articleFirst f_div2 Info2 Skills */
    const fDiv2Skills = CreateDiv("f_div_skills");
    const fDiv2SkTitle = CreateH1("skills_h1","Skills");
    const fDivSkLists = CreateUl("skills_ul");
    const skList = [
        ['FRONT END : ',"HTML, CSS, JavaScript, JQuery, React(초급)"],
        ['BACK END : ',"PHP, JAVA, Python(기초) "],
        ['Framework : ',"Spring, Spring Boot, STS, Codeigniter"],
        ['Setting : ',"Github, AWS, Tomcat, jdk, PuTTy, PostgreSQL"]
    ];
    Map(fDivSkLists,skList);

    fDiv2Skills.appendChild(fDiv2SkTitle);
    fDiv2Skills.appendChild(fDivSkLists);

    fDiv2Info2.appendChild(fDiv2Experience);
    fDiv2Info2.appendChild(fDiv2Skills);
    fDiv2.appendChild(fDiv2Info2);

    articleFirst.appendChild(fDiv2);
}

/* EventMouse */
function EventMouse(div,h1) {
    div.addEventListener("mouseover", (e) => {
        Event(e,div,h1);
    });
    div.addEventListener("mouseout", (e) => {
        Event(e,div,h1);
        // fDiv1.style.removeProperty("opacity");
    });
}
/* Info a click event */
// function LinkGo() {
// const myGht = document.querySelector(".info_a4");
// const f_div_info = document.querySelector(".f_div_info");
// // myGht.parentElement.style.opacity = "0";
// f_div_info.addEventListener('click', ()=>{
//     window.open(myGht.href,'_blank');
//     alert(myGht);
// })
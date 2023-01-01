import {CreateTag} from "./create.js";
import {Map,Event,appEndChild} from "./function.js";

export function articleDivFirst() {
    const articleDiv = CreateTag("articleFirst","div");
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
    const fDiv1 = CreateTag("f_div1","div");
    const fh1 = CreateTag("fh1","h1","INTRODUCE");
    fDiv1.appendChild(fh1);

    EventMouse(fDiv1,fh1);

    articleFirst.appendChild(fDiv1);
}
/* Div2 */
function Div2(articleFirst) {
    /* articleFirst f_div2 Info1 */
    const fDiv2 = CreateTag("f_div2","div");
    const fDiv2Info1 = CreateTag("f_div_info1","div");
    const fDiv2Info1Title = CreateTag("f_div_info1_title","h1","INTRODUCE");
    const fDiv2InfoUl = CreateTag("f_div_info1_ul","ul");
    const fDiv2InfoList = ["강 병 주 ( Kang Byung Ju )","1987.06.06","010-7666-0276","kangbj1987@gmail.com","https://github.com/kangbj1026","https://kangbj1026.github.io"];

    for (let i = 0; fDiv2InfoList.length > i; i++) {
        const fDiv2InfoLi = CreateTag("info"+i,"li",fDiv2InfoList[i]);
        if (i == 4 || i == 5) {
            fDiv2InfoLi.innerText = null;
            const aList = CreateTag("info_a"+i,"a",fDiv2InfoList[i],fDiv2InfoList[i]);
            fDiv2InfoLi.appendChild(aList);
        }
        fDiv2InfoUl.appendChild(fDiv2InfoLi);
    }
    const fDiv2Info1Children = [[fDiv2Info1Title],[fDiv2InfoUl]];
    appEndChild(fDiv2Info1,fDiv2Info1Children,2);

    /* articleFirst f_div2 Info2 */
    const fDiv2Info2 = CreateTag("f_div_info2","div");

    /* articleFirst f_div2 Info2 Experience */
    const fDiv2Experience = CreateTag("f_div_experience","div");
    const fDiv2ExTitle = CreateTag("experience_h1","h1","EXPERIENCE");
    const fDivExLists = CreateTag("experience_ul","ul");
    let exList = [
        ['2021.05 ~ 2022.07 두드림\n', 'FRONT END / BACK END 개발\n User 페이지 내 작동하는 기능 구축 및 개발\n 컨펌 된 디자인을 기반으로 웹사이트 내 Publishing 진행']
    ];
    Map(fDivExLists,exList,'span');

    const fDiv2ExperienceChildren = [[fDiv2ExTitle],[fDivExLists]];
    appEndChild(fDiv2Experience,fDiv2ExperienceChildren,2);

    /* articleFirst f_div2 Info2 Skills */
    const fDiv2Skills = CreateTag("f_div_skills","div");
    const fDiv2SkTitle = CreateTag("skills_h1","h1","SKILLS");
    const fDivSkLists = CreateTag("skills_ul","ul");
    const skList = [
        ['FRONT END : ',"HTML, CSS, JavaScript, JQuery, React(초급)"],
        ['BACK END : ',"PHP, JAVA, Python(기초) "],
        ['Framework : ',"Spring, Spring Boot, STS, Codeigniter"],
        ['Setting : ',"Github, AWS, Tomcat, jdk, PuTTy, PostgreSQL"]
    ];
    Map(fDivSkLists,skList,'span');

    const fDiv2SkillsChildren = [[fDiv2SkTitle],[fDivSkLists]];
    appEndChild(fDiv2Skills,fDiv2SkillsChildren,2);

    const fDiv2Info2Children = [[fDiv2Experience],[fDiv2Skills]];
    appEndChild(fDiv2Info2,fDiv2Info2Children,2);

    const fDiv2Children = [[fDiv2Info1],[fDiv2Info2]];
    appEndChild(fDiv2,fDiv2Children,2);;

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
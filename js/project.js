import {CreateDiv,CreateH1,CreateUl,CreateLi,CreateALink} from "./Create.js";
import {Map,Event} from "./function.js";

export function articleDivSecond() {
    const articleDiv = CreateDiv("articleSecond");
    articleDiv.id = "projects";
    return articleDiv;
}
export function articleSecond() {
    const articleSecond = document.querySelector(".articleSecond");
    DivTitle(articleSecond);
    Div1(articleSecond);
    Div2(articleSecond);
    Div3(articleSecond);
    DivPrevBtn(articleSecond);
    DivNextBtn(articleSecond);
    DivPagination(articleSecond);

    // 슬라이크 전체 크기(width 구하기)
    let slideWidth = articleSecond.clientWidth;

    // 버튼 엘리먼트 선택하기
    const prevBtn = document.querySelector(".s_div_prev_button");
    const nextBtn = document.querySelector(".s_div_next_button");

    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    const slideItems = document.querySelectorAll(".slide_item");
    // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
    const maxSlide = slideItems.length;

    // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
    let currSlide = 1;

    // 페이지네이션 생성
    const pagination = document.querySelector(".s_div_pagination");
    for (let i = 0; i < maxSlide; i++) {
        if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
        else pagination.innerHTML += `<li>•</li>`;
    }

    const paginationItems = document.querySelectorAll(".s_div_pagination > li");

    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    nextBtn.addEventListener("click", () => {
        // 이후 버튼 누를 경우 현재 슬라이드를 변경
        currSlide++;
        addEventListenerClick(nextBtn,currSlide,maxSlide,slideWidth,slideItems,paginationItems);
    });
    prevBtn.addEventListener("click", () => {
        currSlide--;
        addEventListenerClick(prevBtn,currSlide,maxSlide,slideWidth,slideItems,paginationItems);
    });

    // 브라우저 화면이 조정될 때 마다 slideWidth 를 변경하기 위해
    window.addEventListener("resize", () => {
        slideWidth = articleSecond.clientWidth;
    });

    // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
    for (let i = 0; i < maxSlide; i++) {
        paginationItems[i].addEventListener("click", () => {
            currSlide = i + 1;
            const offset = currSlideOffSet(slideWidth, currSlide);
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        });
    }

    return articleSecond;
}
function DivTitle(articleSecond) {
    const sDiv1 = CreateDiv("s_div_title");
    const projectTitle = CreateH1("title_h1","PORTFOLIO");
    sDiv1.appendChild(projectTitle);
    articleSecond.appendChild(sDiv1);
}
function Div1(articleSecond) {
    const p1Text = "Language : PHP, JavaScript\n" +
        "library : Jquery, Jsp, Ajax, Bootstrap\n" +
        "DB : MySQL\n" +
        "API : Tmap, kakaomap\n" +
        "개발환경 : Windows10, cafe24\n" +
        "Editor : Visual Studio Code, Edit Plus\n" +
        "Open Source : 그누보드";
    const p2Text = "스틸하우스 & 목조주택의 홈페이지로 사용하는 웹 쇼핑몰 사이트입니다.\n" +
        "상품을 판매하고 문의하는 사이트로 판매 물품은 자재건축 내외장재 입니다.\n" +
        "\n" +
        "쇼핑몰 사이트 재구성\n" +
        "검색 시 자동 완성 , 상품 상세 정보 추가개발\n" +
        "관리자 페이지 카테고리 추가 개발 및 페이지 구성";
    const sDiv = CreateDivs("s_div1","네스틸코리아(주) 2021.11 ~ 2022.01","./img/nesteelMain.png","s_div_ds1","s_div_p1",p1Text,"s_div_ds2","s_div_p2",p2Text);
    articleSecond.appendChild(sDiv);
}
function CreateDivs(div1,divTitle,divImg,divDs1,divDs1P1,p1Text,divDs2,divDs2P2,p2Text) {
    const sDiv1 = CreateDiv(div1);
    sDiv1.classList.add("slide_item");
    const sDiv1Name = CreateH1("s_div_name",divTitle);
    const sDiv1Img = document.createElement("img");
    sDiv1Img.src = divImg;
    const sDiv1Ds1 = CreateDiv(divDs1);
    const sDiv1DsP1 = document.createElement("p");
    sDiv1DsP1.classList.add(divDs1P1);
    sDiv1DsP1.innerHTML = p1Text;
    const sDiv1Ds2 = CreateDiv(divDs2);
    const sDiv1DsP2 = document.createElement("p");
    sDiv1DsP2.classList.add(divDs2P2);
    sDiv1DsP2.innerHTML = p2Text;
    sDiv1Ds1.appendChild(sDiv1DsP1);
    sDiv1Ds2.appendChild(sDiv1DsP2);
    sDiv1.appendChild(sDiv1Ds1);
    sDiv1.appendChild(sDiv1Ds2);
    sDiv1.appendChild(sDiv1Img);
    sDiv1.appendChild(sDiv1Name);
    return sDiv1;
}
function Div2(articleSecond) {
    const p1Text = "Language : PHP, JavaScript\n" +
        "library : Jquery, Jsp, Ajax, Bootstrap\n" +
        "DB : MySQL\n" +
        "API : Google Calendar API\n" +
        "개발환경 : Windows10, cafe24\n" +
        "Editor : Visual Studio Code, Edit Plus\n" +
        "Open Source : 그누보드";
    const p2Text = "메리트int 직원들을 위한 건물관리 보고서 홈페이지로 사용되는 웹 사이트입니다.\n" +
        "건물 안내문 및 공지문 설치, 하자보수 , 지하실/옥상 등을 점검 후 일일업무 기록하고 확인하는 플랫폼입니다.\n" +
        "\n" +
        "javaScript 캘린더로 메인 페이지 달력 구현\n" +
        "해당 날짜 클릭시 원하는 목록에 게시글이 나오도록 Ajax 구현\n" +
        "Jquery를 사용하여 입력 시 합산이 되어 총합에 출력 되도록 구현";
    const sDiv = CreateDivs("s_div1","메리트int 2022.01 ~ 2022.03","./img/meritintMain.png","s_div_ds1","s_div_p1",p1Text,"s_div_ds2","s_div_p2",p2Text);
    articleSecond.appendChild(sDiv);}
function Div3(articleSecond) {
    const p1Text = "Language : PHP, JavaScript\n" +
        "library : Jquery, Jsp, Ajax, Bootstrap\n" +
        "DB : MySQL\n" +
        "API : LottoNumber(로또 회차 번호)\n" +
        "개발환경 : Windows10, cafe24\n" +
        "Editor : Visual Studio Code, Edit Plus\n" +
        "Open Source : 그누보드";
    const p2Text = "고객분들께 로또 번호를 추첨 및 당첨 여부까지 확인해주는 웹 사이트입니다.\n" +
        "고객의 번호로 가입 후 추첨 받은 번호의 당첨 여부까지 고객이 직접 확인 할 수 있습니다.\n" +
        "\n" +
        "동행복권사이트에서 로또 최신회차 확인 후 프로젝트 웹 사이트 최신회차 게시글이 등록되지 않았을 경우 자동으로 등록 되도록 구현\n" +
        "동행복권사이트에서 입력된 로또 최신 회차별 당첨번호를 확인하여,\n 등수/당첨 인원/당첨 금액 등을 크롤링 하여 프로젝트 웹 사이트 메인에 출력\n" +
        "관리자 페이지에서 랜덤으로 6자리 숫자를 등록된 모든 회원들에게 총 10회 다르게 입력되도록 구현\n" +
        "최신회차번호 게시글과 회원 추첨번호를 모두 비교하여 당첨여부 구현";
    const sDiv = CreateDivs("s_div1","로또사이트 2022.04 ~ 2022.05","./img/lottohMain.png","s_div_ds1","s_div_p1",p1Text,"s_div_ds2","s_div_p2",p2Text);
    articleSecond.appendChild(sDiv);
}
function DivPrevBtn(articleSecond) {
    const prevBtn = CreateDiv("s_div_prev_button");
    prevBtn.classList.add("slide_button");
    prevBtn.innerText = "《";
    articleSecond.appendChild(prevBtn);
}
function DivNextBtn(articleSecond) {
    const nextBtn = CreateDiv("s_div_next_button");
    nextBtn.classList.add("slide_button");
    nextBtn.innerText = "》";
    articleSecond.appendChild(nextBtn);
}
function DivPagination(articleSecond) {
    const pagination = CreateUl("s_div_pagination");
    articleSecond.appendChild(pagination);
}


function addEventListenerClick(btn,currSlide,maxSlide,slideWidth,slideItems,paginationItems) {

    if (btn.classList.item(0) == "s_div_next_button") {
        // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
        if (currSlide <= maxSlide) {
            // 슬라이드를 이동시키기 위한 offset 계산
            currSlideOffSet(slideWidth, currSlide,slideItems,paginationItems);
        }
    } else {
        if (currSlide > 0) {
            currSlideOffSet(slideWidth, currSlide,slideItems,paginationItems);
        }
    }
}
function currSlideOffSet(slideWidth,currSlide,slideItems,paginationItems) {
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
}
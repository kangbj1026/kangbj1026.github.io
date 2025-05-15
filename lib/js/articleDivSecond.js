import {CreateTag} from "./create.js";
import {Map,Event,appEndChild} from "./function.js";

export function articleDivSecond() {
	const articleDiv = CreateTag("articleSecond","div");
	articleDiv.id = "projects";
	return articleDiv;
}
export function articleSecond() {
	const articleSecond = document.querySelector(".articleSecond");
	const Title = DivTitle();
	const div1 = Divs(1);
	const div2 = Divs(2);
	const div3 = Divs(3);
	const div4 = Divs(4);
	const div5 = Divs(5);
	const div6 = Divs(6);
	const createPrevBtn = DivSlideBtn( "s_div_prev_button", "《");
	const createNextBtn = DivSlideBtn( "s_div_next_button", "》");
	const paginationBtn = CreateTag("s_div_pagination","ul");
	const articleSecondChildren = [[Title],[div1],[div2],[div3],[div4],[div5],[div6],[createPrevBtn],[createNextBtn],[paginationBtn]];
	appEndChild(articleSecond,articleSecondChildren,articleSecondChildren.length);

	return articleSecond;
}
function DivTitle() {
	const sDiv1 = CreateTag("s_div_title","div");
	const projectTitle = CreateTag("title_h1","h1","PORTFOLIO");
	sDiv1.appendChild(projectTitle);
	return sDiv1;
}
function Divs(length) {
	let p1Text = "", p2Text = "", sDiv;
	switch (length) {
		case 1:
			p1Text = "Language : PHP, JavaScript\n" +
				"library : Jquery, Jsp, Ajax \n" +
				"DB : MySQL\n" +
				"API : Tmap, kakaomap\n" +
				"개발환경 : Windows10, cafe24\n" +
				"Editor : Visual Studio Code, Edit Plus\n" +
				"Open Source : 그누보드, Bootstrap";
			p2Text = "스틸하우스 & 목조주택의 홈페이지로 사용하는 웹 쇼핑몰 사이트입니다.\n" +
				"상품을 판매하고 문의하는 사이트로 판매 물품은 자재건축 내외장재 입니다.\n" +
				"\n" +
				"쇼핑몰 사이트 재구성\n" +
				"검색 시 자동 완성 , 상품 상세 정보 추가개발\n" +
				"관리자 페이지 카테고리 추가 개발 및 페이지 구성";
			sDiv = CreateDivs(length,"네스틸코리아(주) 2021.11 ~ 2022.01","nesteelMain",p1Text,p2Text)
			break;
		case 2:
			p1Text = "Language : PHP, JavaScript\n" +
				"library : Jquery, Jsp, Ajax \n" +
				"DB : MySQL\n" +
				"API : Google Calendar API\n" +
				"개발환경 : Windows10, cafe24\n" +
				"Editor : Visual Studio Code, Edit Plus\n" +
				"Open Source : 그누보드, Bootstrap";
			p2Text = "메리트int 직원들을 위한 건물관리 보고서 홈페이지로 사용되는 웹 사이트입니다.\n" +
				"건물 안내문 및 공지문 설치, 하자보수 , 지하실/옥상 등을 점검 후 일일업무 기록하고 확인하는 플랫폼입니다.\n" +
				"\n" +
				"javaScript 캘린더로 메인 페이지 달력 구현\n" +
				"해당 날짜 클릭시 원하는 목록에 게시글이 나오도록 Ajax 구현\n" +
				"Jquery를 사용하여 입력 시 합산이 되어 총합에 출력 되도록 구현";
			sDiv = CreateDivs(length,"메리트int 2022.01 ~ 2022.03","meritintMain",p1Text,p2Text);
			break;
		case 3:
			p1Text = "Language : PHP, JavaScript\n" +
				"library : Jquery, Jsp, Ajax \n" +
				"DB : MySQL\n" +
				"API : LottoNumber(로또 회차 번호)\n" +
				"개발환경 : Windows10, cafe24\n" +
				"Editor : Visual Studio Code, Edit Plus\n" +
				"Open Source : 그누보드, Bootstrap";
			p2Text = "고객분들께 로또 번호를 추첨 및 당첨 여부까지 확인해주는 웹 사이트입니다.\n" +
				"고객의 번호로 가입 후 추첨 받은 번호의 당첨 여부까지 고객이 직접 확인 할 수 있습니다.\n" +
				"\n" +
				"동행복권사이트에서 로또 최신회차 확인 후 프로젝트 웹 사이트 최신회차 게시글이 등록되지 않았을 경우 자동으로 등록 되도록 구현\n" +
				"동행복권사이트에서 입력된 로또 최신 회차별 당첨번호를 확인하여,\n 등수/당첨 인원/당첨 금액 등을 크롤링 하여 프로젝트 웹 사이트 메인에 출력\n" +
				"관리자 페이지에서 랜덤으로 6자리 숫자를 등록된 모든 회원들에게 총 10회 다르게 입력되도록 구현\n" +
				"최신회차번호 게시글과 회원 추첨번호를 모두 비교하여 당첨여부 구현";
			sDiv = CreateDivs(length,"로또사이트 2022.04 ~ 2022.05","lottohMain",p1Text,p2Text);
			break;
		case 4:
			p1Text = "Language : JavaScript\n" +
				"library : Jquery, Ajax \n" +
				"DB : MySQL\n" +
				"API : kakao api, naver login api, hectofinancial \n" +
				"개발환경 : Windows10 \n" +
				"Editor : Visual Studio Code, Edit Plus\n" +
				"Open Source : node.js, GitLab, Sourcetree, Bootstrap ";
			p2Text = "중국비자 신청 사이트입니다.\n" +
				"여러가지 비자를 선택하여 기간, 횟수 등의 선택사항을 체크하면 선택한 비자에 맞는 가격을 측정해주며, \n" +
				"측정된 가격에 맞는 결제가 되는 시스템입니다. 결제 결과를 확인할 수 있으며, 결제가 되지 않은 데이터는 검색할 수 없습니다.";
			sDiv = CreateDivs(length,"중국비사 2023.05 ~ 2023.07","nicevisa",p1Text,p2Text);
			break;
		case 5:
			p1Text = "Language : Java \n" +
				"library : thymeleaf, lombok, jpa, webmvc \n" +
				"DB : MySQL\n" +
				"API : Goolg Map \n" +
				"개발환경 : Windows10 \n" +
				"Editor : Eclipse, Stpring Boot, Spring Tool Suite \n" +
				"Open Source : gradle, GitLab, Sourcetree, Bootstrap ";
			p2Text = "AI 에의 한 기술들을 홍보하는 사이트입니다.\n" +
				"AI 박람회 참가 등록 시스템 구축, 관리자 페이지에서 등록된 고객들의 신청목록을 확인 가능하며, \n" +
				"각종 게시판을 여러게로 나누어 하나의 데이터베이스의 테이블에서 관리할 수 있도록 개발하였습니다.";
			sDiv = CreateDivs(length,"에어리스 2023.09 ~ 2023.11","airis",p1Text,p2Text);
			break;
		case 6:
			p1Text = "Language : Java \n" +
				"library : thymeleaf, lombok, jpa \n" +
				"DB : MSSQL\n" +
				"API : API Development \n" +
				"개발환경 : Windows10 \n" +
				"Editor : Eclipse, Stpring Boot, Spring Tool Suite \n" +
				"Open Source : gradle, GitLab, Sourcetree, Bootstrap ";
			p2Text = "cafe24 쇼핑몰에 대한 데이터를 수집 및 갱신.\n" +
				"API 를 통해 쇼핑몰 상품에 대한 정보를 저장하고 업데이트 해주는 시스템이며, \n" +
				"기존에 존재하던 쇼핑몰 리뉴얼하여 매장에 POS와 cafe24의 연동을 하기 위한 API 개발하였습니다.";
			sDiv = CreateDivs(length,"폴리파크 2023.12 ~ 2024.02","smile",p1Text,p2Text);
			break;
	}
	return sDiv;
}
function DivSlideBtn(name,text) {
	const Btn = CreateTag(name,"div",text);
	Btn.classList.add("slide_button");
	return Btn;
}

function CreateDivs(num,divTitle,divImg,p1Text,p2Text) {
	const sDiv1 = CreateTag("div"+num,"div");
	const sDiv = "s_div_";
	sDiv1.classList.add("slide_item");
	const sDiv1Ds0 = CreateTag(sDiv+"ds0","div");
	const sDiv1Name = CreateTag(sDiv+"name","h1",divTitle);
	const sDiv1Img = CreateTag(divImg,"img",null,null,"./lib/img/"+divImg+".png");
	sDiv1Ds0.appendChild(sDiv1Name);
	const sDiv1Ds1 = CreateTag(sDiv+"ds1","div");
	const sDiv1DsP1 = CreateTag(sDiv+"p1","p",p1Text);
	sDiv1Ds1.appendChild(sDiv1DsP1);
	const sDiv1Ds2 = CreateTag(sDiv+"ds2","div");
	const sDiv1DsP2 = CreateTag(sDiv+"p2","p",p2Text);
	sDiv1Ds2.appendChild(sDiv1DsP2);
	const sDiv1Children = [[sDiv1Ds0],[sDiv1Ds1],[sDiv1Ds2],[sDiv1Img],[sDiv1Name]];
	appEndChild(sDiv1,sDiv1Children,4);
	return sDiv1;
}
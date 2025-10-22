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
	const createPrevBtn = DivSlideBtn( "s_div_prev_button", "《");
	const createNextBtn = DivSlideBtn( "s_div_next_button", "》");
	const paginationBtn = CreateTag("s_div_pagination","ul");
	const articleSecondChildren = [[Title],[div1],[div2],[div3],[div4],[createPrevBtn],[createNextBtn],[paginationBtn]];
	appEndChild(articleSecond,articleSecondChildren,articleSecondChildren.length);

	return articleSecond;
}
function DivTitle() {
	const sDiv1 = CreateTag("s_div_title","div");
	const projectTitle = CreateTag("title_h1","h1","PROJECT");
	sDiv1.appendChild(projectTitle);
	return sDiv1;
}
function Divs(length) {
	let p1Text = "", p2Text = "", sDiv;
	switch (length) {
		case 1:
			p1Text = "Language : Java \n" +
				"library : thymeleaf, lombok, jpa \n" +
				"DB : MYSQL\n" +
				"API : API Development \n" +
				"개발환경 : Windows10 \n" +
				"Editor : Eclipse, Stpring Boot, Spring Tool Suite \n" +
				"Open Source : gradle, GitLab, Sourcetree, Bootstrap , Jenkins";
			p2Text = "Cafe24 쇼핑몰을 운영하는 클라이언트는 ERP 시스템과 쇼핑몰 간 상품 정보 및 재고 데이터를 수동으로 관리하였습니다.\n" + 
				"이에 따라 재고 불일치와 업데이트 지연 문제가 발생했으며, 업무 효율 향상이 필요했습니다.\n" + 
				"이를 해결하기 위해 클라이언트 요구사항에 맞춰, Cafe24에서 제공하지 않는 기능을 포함한 맞춤형 REST API를 개발하였습니다.\n" + 
				"이해당 API는 어드민 페이지를 통해 실시간으로 ERP와 쇼핑몰 간 상품 정보를 수집, 갱신, 동기화할 수 있도록 설계되었습니다.";
			sDiv = CreateDivs(length,"무냐무냐 2025.02 ~ 2025.05","bunny",p1Text,p2Text);
			break;
		case 2:
			p1Text = "Language : Java \n" +
				"library : thymeleaf, lombok, jpa \n" +
				"DB : MSSQL\n" +
				"API : API Development \n" +
				"개발환경 : Windows10 \n" +
				"Editor : Eclipse, Stpring Boot, Spring Tool Suite \n" +
				"Open Source : gradle, GitLab, Sourcetree, Bootstrap , Jenkins";
			p2Text = "오프라인 매장에서 POS 시스템을 운영 중인 클라이언트가 온라인 쇼핑몰을 새롭게 오픈하면서,\n" +
				"매장온·오프라인 재고를 통합 관리할 수 있는 시스템이 필요했습니다.\n" +
				"기존 쇼핑몰을 리뉴얼하고, 매장 POS와 Cafe24 쇼핑몰을 실시간으로 연동하여 재고 및 매출 데이터를 동기화하는 API를 개발했습니다.";
			sDiv = CreateDivs(length,"폴리파크 2024.12 ~ 2025.02","polypark",p1Text,p2Text);
			break;
		case 3:
			p1Text = "Language : Java \n" +
				"library : thymeleaf, lombok, jpa \n" +
				"DB : Oracle\n" +
				"API : API Development \n" +
				"개발환경 : Windows10 \n" +
				"Editor : Eclipse, Stpring Boot, Spring Tool Suite \n" +
				"Open Source : gradle, GitLab, GitHub, Sourcetree, Bootstrap , Jenkins";
			p2Text = "화장품 브랜드 사이트 이용자들이 자신에게 맞는 제품을 찾기 어려워하는 문제를 해결하기 위해,\n" +
				"사용자의 MBTI 성격 유형 테스트를 기반으로 개인 맞춤형 화장품을 추천하는 시스템을 구축했습니다.\n" +
				"사용자의 성향과 피부 타입 데이터를 수집하여 16가지 MBTI 유형별 최적의 제품을 추천합니다.";
			sDiv = CreateDivs(length,"LG 빌리프 2024.03 ~ 2024.07","smile",p1Text,p2Text);
			break;
		case 4:
			p1Text = "Language : JavaScript\n" +
				"library : Jquery, Ajax \n" +
				"DB : MySQL\n" +
				"API : kakao api, naver login api, hectofinancial \n" +
				"개발환경 : Windows10 \n" +
				"Editor : Visual Studio Code, Edit Plus\n" +
				"Open Source : Node.js, GitLab, Sourcetree, Bootstrap ";
			p2Text = "중국비자 신청 사이트입니다.\n" +
				"중국 비자를 신청하려는 고객들이 비자 종류, 기간, 입국 횟수 등 복잡한 옵션을 선택하고\n" +
				"입국정확한 비용을 확인하기 어려운 문제가 있었습니다.\n" +
				"온라인에서 비자 종류를 선택하고 즉시 견적을 확인한 후 결제까지 완료할 수 있는 플랫폼을 개발했습니다.\n" +
				"Node.js 기반 백엔드와 JavaScript를 활용한 프론트엔드 개발을 담당했으며, 결제 시스템 연동 및 사용자 인증 기능을 구현했습니다.";
			sDiv = CreateDivs(length,"나이스비자 2023.05 ~ 2023.07","nicevisa",p1Text,p2Text);
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
	//const sDiv1Img = CreateTag(divImg,"img",null,null,"./lib/img/"+divImg+".png");
	sDiv1Ds0.appendChild(sDiv1Name);
	const sDiv1Ds1 = CreateTag(sDiv+"ds1","div");
	const sDiv1DsP1 = CreateTag(sDiv+"p1","p",p1Text);
	sDiv1Ds1.appendChild(sDiv1DsP1);
	const sDiv1Ds2 = CreateTag(sDiv+"ds2","div");
	const sDiv1DsP2 = CreateTag(sDiv+"p2","p",p2Text);
	sDiv1Ds2.appendChild(sDiv1DsP2);
	const sDiv1Children = [[sDiv1Ds0],[sDiv1Ds1],[sDiv1Ds2],[sDiv1Name]];
	appEndChild(sDiv1,sDiv1Children,4);
	return sDiv1;
}
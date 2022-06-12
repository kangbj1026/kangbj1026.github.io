let para = document.location.href.split("/");
// let linkName = para[3].replace(/(.html)$/,''); // localhost 적용
let linkName = para[3].replace(/(.html)$/,''); // github 적용
console.log(para[2]+"/img/bz.png");
let wrapper = document.getElementById('wrapper');

let wrapperDivLeft	= document.createElement('div');
wrapperDivLeft.classList.add('wrapper-left');

let wrapperDivRight = document.createElement('div');
wrapperDivRight.classList.add('wrapper-right');

let leftListContent = document.createElement('span');

let RightListDiv = document.createElement('div');
RightListDiv.classList.add('rigth-div');

let RightListIntroduction = document.createElement('h1');
let RightListMyName = document.createElement('p');
let RightListDateBirth = document.createElement('p');
let RightListResidence = document.createElement('p');
let RightListCareer = document.createElement('p');
let RightListSkills = document.createElement('h1');
let RightListFrontLanguage = document.createElement('h3');
let RightListFrontLanguageList = document.createElement('p');
let RightListBackLanguage = document.createElement('h3');
let RightListBackLanguageList = document.createElement('p');


let RightProjects = document.createElement("h1");
let RightProjectsDiv = document.createElement("div");
RightProjectsDiv.classList.add("project_data");


let RightListEmail = document.createElement('p');
let RightListPhone = document.createElement('p');
let RightListGithub = document.createElement('span');
let RightListLink = document.createElement('a');

if (linkName == "contact") {
	leftListContent.innerHTML = "<h3>"+linkName+"</h3>";

	RightListEmail.innerHTML = "Email : kangbj1026@naver.com";

	RightListPhone.innerHTML = "Phone : 010-7666-0276";

	RightListGithub.innerHTML = "Github : ";
	RightListLink.style.color = "#0400ff";
	RightListLink.href = "https://github.com/kangbj1026";
	RightListLink.innerHTML = "https://github.com/kangbj1026";

	RightListGithub.appendChild(RightListLink);
} else if (linkName == "projects") {
	leftListContent.innerHTML = "<h3>"+linkName+"</h3>";
	RightProjects.innerText = "projects";

	let projectDivFirst = document.createElement("div");
	projectDivFirst.classList.add("project");
	projectDivFirst.classList.add("project_first");
	let projectDivSecond = document.createElement("div");
	projectDivSecond.classList.add("project");
	projectDivSecond.classList.add("project_second");
	let projectDivThird = document.createElement("div");
	projectDivThird.classList.add("project");
	projectDivThird.classList.add("project_third");

	let infoText1 = projectExp("스틸하우스 & 목조주택의 홈페이지로 사용하는 웹 쇼핑몰 사이트입니다. 상품을 판매하고 문의하는 사이트로 판매 물품은 자재건축 내외장재 입니다. <hr> <h4>주요 기능</h4> 쇼핑몰 사이트 재구성 <br> 검색 시 자동 완성 , 상품 상세 정보 추가개발 <br> 관리자 페이지 카테고리 추가 개발 및 페이지 구성");
	RightProjectsDiv.appendChild(projectData("네스틸코리아",2021.11+" ~ "+2022.01,infoText1,"http://nesteel.cafe24.com","/img/nesteelMain.png",projectDivFirst));

	let infoText2 = projectExp("메리트int 직원들을 위한 건물관리 보고서 홈페이지로 사용되는 웹 사이트입니다. 건물 안내문 및 공지문 설치, 하자보수 , 지하실/옥상 등을 점검 후 일일업무 기록하고 확인하는 플랫폼입니다.<hr> <h4>주요 기능</h4> javaScript 캘린더로 메인 페이지 달력 구현 해당 날짜 클릭시 원하는 목록에 게시글이 나오도록 Ajax 구현 <br> Jquery를 사용하여 입력 시 합산이 되어 총합에 출력 되도록 구현");
	RightProjectsDiv.appendChild(projectData("메리트Int",2022.01+" ~ "+2022.03,infoText2,"https://meritint.cafe24.com","/img/nesteelMain.png",projectDivSecond));

	let infoText3 = projectExp("고객분들께 로또 번호를 추첨 및 당첨 여부까지 확인해주는 웹 사이트입니다. 고객의 번호로 가입 후 추첨 받은 번호의 당첨 여부까지 고객이 직접 확인 할 수 있습니다.<hr> <h4>주요 기능</h4> 동행복권사이트에서 로또 최신회차 확인 후 프로젝트 웹 사이트 최신회차 게시글이 등록되지 않았을 경우 자동으로 등록 되도록 구현 <br> 동행복권사이트에서 입력된 로또 최신 회차별 당첨번호를 확인하여, 등수/당첨 인원/당첨 금액 등을 크롤링 하여 프로젝트 웹 사이트 메인에 출력관리자 페이지에서 랜덤으로 6자리 숫자를 등록된 모든 회원들에게 총 10회 다르게 입력되도록 구현 <br> 최신회차번호 게시글과 회원 추첨번호를 모두 비교하여 당첨여부 구현");
	RightProjectsDiv.appendChild(projectData("로또사이트",2022.04+" ~ "+2022.05,infoText3,"https://lottoh.cafe24.com","/img/nesteelMain.png",projectDivThird));
} else {
	leftListContent.innerHTML = "<h3>Hello :) </h3>";

	RightListIntroduction.innerHTML = "Introduction";
	RightListMyName.innerHTML = " 이름 : 강 병 주 ( 姜 秉 周 ) ";
	RightListDateBirth.innerHTML = "생년월일 : 1987.06.06 ( 만35 )";
	RightListResidence.innerHTML = "주소 : 인천 계양구";
	RightListCareer.innerHTML = "경력 : 웹 개발 1년";

	RightListSkills.innerHTML = "Skills";
	RightListFrontLanguageList.innerText = "FRONT END \n[ HTML, CSS, JavaScript, JQuery ]\n";
	RightListFrontLanguage.appendChild(RightListFrontLanguageList);
	RightListBackLanguageList.innerText = "BACK END \n[ PHP, JSP, Python(기초), Kotlin(기초) ]\n";
	RightListBackLanguage.appendChild(RightListBackLanguageList);
}

wrapperAll();

function wrapperAll() {
	wrapperLeftLine();
	wrapperRightLine();

	wrapper.appendChild(wrapperDivLeft);
	wrapper.appendChild(wrapperDivRight);
}

function wrapperIndex() {
	RightListDiv.appendChild(RightListIntroduction);
	RightListDiv.appendChild(RightListMyName);
	RightListDiv.appendChild(RightListDateBirth);
	RightListDiv.appendChild(RightListResidence);
	RightListDiv.appendChild(RightListCareer);
	RightListDiv.appendChild(RightListSkills);
	RightListDiv.appendChild(RightListFrontLanguage);
	RightListDiv.appendChild(RightListBackLanguage);
}

function wrapperProjects() {
	RightListDiv.appendChild(RightProjects);
	RightListDiv.appendChild(RightProjectsDiv);
}

function projectData(name,date,explanation,url,imgUrl,sequence) {
	let projectDivLeft = document.createElement("div");
	projectDivLeft.classList.add("project_left");
	let img = document.createElement("img");
	img.classList.add("project_img");
	let projectDivRight = document.createElement("div");
	projectDivRight.classList.add("project_right");
	img.src = imgUrl;
	projectDivLeft.appendChild(img);
	projectDivRight.innerHTML = projectInformation(name,date,explanation,url);
	let projecData;
	projecData = projectReturn(sequence,projectDivLeft,projectDivRight);

	return projecData;
}

function projectReturn(projec,left,right) {
	projec.appendChild(left);
	projec.appendChild(right);

	return projec;
}

function projectInformation(name,date,explanation,url) {
	let data = "";
	data += "<span>"+name+"</span>";
	data += "<p>"+date+"</p>"
	data += "<p>"+explanation+"</p>"
	data += "<a class='project_url' href='"+url+"'>"+url+"</a>";
	return data;
}

function projectExp(text) {
	let exp = text;
	return exp;
}

function wrapperContact() {
	RightListDiv.appendChild(RightListEmail);
	RightListDiv.appendChild(RightListPhone);
	RightListDiv.appendChild(RightListGithub);
	RightListDiv.appendChild(RightListLink);
}

function wrapperLeftLine() {
	wrapperDivLeft.appendChild(leftListContent);
}

function wrapperRightLine() {
	wrapperDivRight.appendChild(RightListDiv);

	if (linkName == "contact") wrapperContact();
	else if (linkName == "projects") wrapperProjects();
	else wrapperIndex();
}
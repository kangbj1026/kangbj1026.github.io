document.title = "ByungJu Kang's Portfolio";
let para = document.location.href.split("/");
// let linkName = para[3].replace(/(.html)$/,''); // localhost 적용
let linkName = para[3].replace(/(.html)$/,''); // github 적용

let wrapper = document.getElementById('wrapper');

let wrapperDivLeft	= document.createElement('div');
wrapperDivLeft.classList.add('wrapper-left');

let wrapperDivRight = document.createElement('div');
wrapperDivRight.classList.add('wrapper-right');

let leftListContent = document.createElement('span');

let rightListDiv = document.createElement('div');
rightListDiv.classList.add('rigth-div');

let rightListIntroduction = document.createElement('h1');
let rightListMyName = document.createElement('p');
let rightListDateBirth = document.createElement('p');
let rightListResidence = document.createElement('p');
let rightListCareer = document.createElement('p');
let rightListSkills = document.createElement('h1');
let rightListFrontLanguage = document.createElement('h3');
let rightListFrontLanguageList = document.createElement('p');
let rightListBackLanguage = document.createElement('h3');
let rightListBackLanguageList = document.createElement('p');


let rightProjects = document.createElement("h1");
let rightProjectsDiv = document.createElement("div");
rightProjectsDiv.classList.add("project_data");


let rightListEmail = document.createElement('p');
let rightListPhone = document.createElement('p');
let rightListGithub = document.createElement('span');
let rightListLink = document.createElement('a');


let rigntStudyIngLanguage = document.createElement('h2');
let studyLecture = document.createElement('p');
let studyLectureUrl = document.createElement('a');


if (linkName == "contact") {
	leftListContent.innerHTML = "<h3>"+linkName+"</h3>";

	rightListEmail.innerHTML = "Email : kangbj1026@naver.com";

	rightListPhone.innerHTML = "Phone : 010-7666-0276";

	rightListGithub.innerHTML = "Github : ";
	rightListLink.style.color = "#0400ff";
	rightListLink.href = "https://github.com/kangbj1026";
	rightListLink.innerHTML = "https://github.com/kangbj1026";

	rightListGithub.appendChild(rightListLink);
} else if (linkName == "projects") {
	// leftListContent.innerHTML = "<h3>"+linkName+"</h3>";
	rightProjects.innerText = "PROJECTS";

	let projectDivFirst = document.createElement("div");
	projectDivFirst.classList.add("project");
	projectDivFirst.classList.add("project_first");
	let projectDivSecond = document.createElement("div");
	projectDivSecond.classList.add("project");
	projectDivSecond.classList.add("project_second");
	let projectDivThird = document.createElement("div");
	projectDivThird.classList.add("project");
	projectDivThird.classList.add("project_third");

	let tx = "<h4>주요 기능</h4> 그누보드5 사용 <br>";
	let text1 = "스틸하우스 & 목조주택의 홈페이지로 사용하는 웹 쇼핑몰 사이트입니다. <br>";
	text1 += "상품을 판매하고 문의하는 사이트로 판매 물품은 자재건축 내외장재 입니다. <br>";
	text1 += "주문시스템은 직접 고객의 전화문의 받는 시스템으로 주문에 번거러움이 발생합니다. 규격 및 길이 등을 직접 입력하여 주문하면 전화문의를 하지 않아도 판매자가 확인하고 상품을 배송해줄수 있는 시스템이 좋은 방법이라고 클라이언트에게 요청 했지만, 무조건 전화문의를 받아야한다는 요구에 주문시스템은 개발하지 못하였습니다. <hr>";
	text1 += tx;
	text1 += "쇼핑몰 사이트 재구성 <br> 검색 시 자동 완성 , 상품 상세 정보 추가개발 <br>";
	text1 += "Tab을 이용하여 고객이 상품마다 어떤 종류의 상품을 구매할 수 있는지 확인가능 <br>";
	text1 += "kakaomap API 이용하여 회사사이트 위치를 구현하고 Tmap,kakaomap길찾기를 통해서 앱에서 바로 길을 찾도록 구현<br>";
	text1 += "관리자 페이지 카테고리 추가 개발 및 페이지 구성";
	let infoText1 = projectExp(text1);
	rightProjectsDiv.appendChild(projectData("네스틸코리아",2021.11+" ~ "+2022.01,infoText1,"http://nesteel.cafe24.com","/img/nesteelMain.png",projectDivFirst));

	let text2 = "메리트int 직원들을 위한 건물관리 보고서 홈페이지로 사용되는 웹 사이트입니다. <br>";
	text2 += "건물 안내문 및 공지문 설치, 하자보수 , 지하실/옥상 등을 점검 후 일일업무 기록하고 확인하는 플랫폼입니다. <br>";
	text2 += "메인페이지에서는 직원마다 일정을 추가한 부분만 보이도록 하고 최고관리자는 모두 보이도록 하였습니다.<hr>";
	text2 += tx;
	text2 += "javaScript 캘린더로 메인 페이지 달력 구현 해당 날짜 클릭시 원하는 목록에 게시글이 나오도록 Ajax 구현 <br>";
	text2 += "그누보드 자체 기능 썸네일 사용 <br>";
	text2 += "Excel download <br>";
	text2 += "Jquery를 사용하여 입력 시 합산이 되어 총합에 출력 되도록 구현";
	let infoText2 = projectExp(text2);
	rightProjectsDiv.appendChild(projectData("메리트Int",2022.01+" ~ "+2022.03,infoText2,"https://meritint.cafe24.com","/img/meritintMain.png",projectDivSecond));

	let text3 = "고객분들께 로또 번호를 추첨 및 당첨 여부까지 확인해주는 웹 사이트입니다. <br>";
	text3 += "고객의 번호로 가입 후 추첨 받은 번호의 당첨 여부까지 고객이 직접 확인 할 수 있습니다. <hr>";
	text3 += tx;
	text3 += "동행복권사이트에서 로또 최신회차 및 당첨번호를 크롤링 하여 프로젝트 웹 사이트에 뿌려주고 최신회차 게시글이 등록되지 않았을 경우 자동으로 등록 되도록 구현 <br>";
	text3 += "관리자페이지 회원관리에서 랜덤으로 6자리 숫자를 등록된 모든 회원들에게 다르게 입력되도록 구현 <br>";
	text3 += "메인페이지에서 회차마다 1~5등까지 정보를 확인 할 수 있도록 Ajax로 구현 <br>";
	text3 += "최신회차번호 게시글과 회원 추첨번호를 모두 비교하여 당첨여부 구현";
	let infoText3 = projectExp(text3);
	rightProjectsDiv.appendChild(projectData("로또사이트",2022.04+" ~ "+2022.05,infoText3,"https://lottoh.cafe24.com","/img/lottohMain.png",projectDivThird));
} else if (linkName == "studying") {
	leftListContent.innerHTML = "<h3>"+linkName+"</h3>";

	rigntStudyIngLanguage.innerHTML = "Python";
	studyLectureUrl.classList.add("study_url");
	studyLectureUrl.innerText = "https://youtu.be/kWiCuklohdY";
	studyLectureUrl.href = studyLectureUrl.text;
	studyLecture.innerHTML = "파이썬 코딩 무료 강의 (기본편) / 나도코딩 강좌 / ";
	studyLecture.appendChild(studyLectureUrl);
} else {
	leftListContent.innerHTML = "<h3>Hello :) </h3>";

	rightListIntroduction.innerHTML = "Introduction";
	rightListMyName.innerHTML = " 이름 : 강 병 주 ( 姜 秉 周 ) ";
	rightListDateBirth.innerHTML = "생년월일 : 1987.06.06 ( 만35 )";
	rightListResidence.innerHTML = "주소 : 인천 계양구";
	rightListCareer.innerHTML = "경력 : 웹 개발 1년";

	rightListSkills.innerHTML = "Skills";
	rightListFrontLanguageList.innerText = "FRONT END \n[ HTML, CSS, JavaScript, JQuery ]\n";
	rightListFrontLanguage.appendChild(rightListFrontLanguageList);
	rightListBackLanguageList.innerText = "BACK END \n[ PHP, JSP, Python(기초), Kotlin(기초) ]\n";
	rightListBackLanguage.appendChild(rightListBackLanguageList);
}

wrapperAll();

function wrapperAll() {
	wrapperLeftLine();
	wrapperRightLine();

	wrapper.appendChild(wrapperDivLeft);
	wrapper.appendChild(wrapperDivRight);
}

function wrapperIndex() {
	rightListDiv.appendChild(rightListIntroduction);
	rightListDiv.appendChild(rightListMyName);
	rightListDiv.appendChild(rightListDateBirth);
	rightListDiv.appendChild(rightListResidence);
	rightListDiv.appendChild(rightListCareer);
	rightListDiv.appendChild(rightListSkills);
	rightListDiv.appendChild(rightListFrontLanguage);
	rightListDiv.appendChild(rightListBackLanguage);
}

function wrapperProjects() {
	rightListDiv.appendChild(rightProjects);
	rightListDiv.appendChild(rightProjectsDiv);
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
	data += "<h4>"+name+"</h4>";
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
	rightListDiv.appendChild(rightListEmail);
	rightListDiv.appendChild(rightListPhone);
	rightListDiv.appendChild(rightListGithub);
	rightListDiv.appendChild(rightListLink);
}

function wrapperStudyIng() {
	rightListDiv.appendChild(rigntStudyIngLanguage);
	rightListDiv.appendChild(studyLecture);
}

function studyLanguage() {

}

function wrapperLeftLine() {
	wrapperDivLeft.appendChild(leftListContent);
}

function wrapperRightLine() {
	wrapperDivRight.appendChild(rightListDiv);

	if (linkName == "contact") wrapperContact();
	else if (linkName == "projects") wrapperProjects();
	else if (linkName == "studying") wrapperStudyIng();
	else wrapperIndex();
}
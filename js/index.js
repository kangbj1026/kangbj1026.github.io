let para = document.location.href.split("/");
// let linkName = para[4].replace(/(.html)$/,''); // localhost 적용
let linkName = para[3].replace(/(.html)$/,''); // github 적용

let wrapper = document.getElementById('wrapper');

let wrapperDivLeft	= document.createElement('div');
wrapperDivLeft.classList.add('wrapper-left');

let wrapperDivRight = document.createElement('div');
wrapperDivRight.classList.add('wrapper-right');

let leftListContent = document.createElement('span');

let RightList 		= document.createElement('p');

let RightListIntroduction = document.createElement('h1');
let RightListMyName = document.createElement('p');
let RightListDateBirth = document.createElement('p');
let RightListResidence = document.createElement('p');
let RightListCareer = document.createElement('p');
let RightListLanguageOfUse = document.createElement('h1');

let RightListEmail 	= document.createElement('p');
let RightListPhone 	= document.createElement('p');
let RightListGithub = document.createElement('span');
let RightListLink	= document.createElement('a');

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

} else {
	leftListContent.innerHTML = "<h3>Hello :) </h3>";

	RightListIntroduction.innerHTML = "소개";
	RightListMyName.innerHTML = "이름 : 강 병 주 ( 姜 秉 周 )";
	RightListMyName.style.fontSize = "1.5rem";
	RightListDateBirth.innerHTML = "생년월일 : 1987 / 06 / 06 ( 만35 )";
	RightListResidence.innerHTML = "주소 : 인천 계양구";
	RightListCareer.innerHTML = "경력 : 웹 개발 1년";

	RightListLanguageOfUse.innerHTML = "사용 언어";
}

wrapperAll();

function wrapperAll() {
	wrapperLeftLine();
	wrapperRightLine();

	wrapper.appendChild(wrapperDivLeft);
	wrapper.appendChild(wrapperDivRight);
}

function wrapperLeftLine() {
	wrapperDivLeft.appendChild(leftListContent);
}

function wrapperRightLine() {
	wrapperDivRight.appendChild(RightList);

	RightList.appendChild(RightListIntroduction);
	RightList.appendChild(RightListMyName);
	RightList.appendChild(RightListDateBirth);
	RightList.appendChild(RightListResidence);
	RightList.appendChild(RightListCareer);
	RightList.appendChild(RightListLanguageOfUse);

	RightList.appendChild(RightListEmail);
	RightList.appendChild(RightListPhone);
	RightList.appendChild(RightListGithub);
	RightList.appendChild(RightListLink);
}

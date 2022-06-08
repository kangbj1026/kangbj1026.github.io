let para = document.location.href.split("/");
// let linkName = para[4].replace(/(.html)$/,''); // localhost 적용
let linkName = para[3].replace(/(.html)$/,''); // github 적용

let wrapper = document.getElementById('wrapper');

let wrapperDivLeft	= document.createElement('div');
wrapperDivLeft.classList.add('wrapper-left');

let wrapperDivRight = document.createElement('div');
wrapperDivRight.classList.add('wrapper-right');

let RightList 		= document.createElement('p');
let leftListContent = document.createElement('span');

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
	RightList.appendChild(leftListContent);
} else {
	leftListContent.innerHTML = "<h3>Hello :) </h3>";
	RightList.appendChild(leftListContent);
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

	RightList.appendChild(RightListEmail);
	RightList.appendChild(RightListPhone);
	RightList.appendChild(RightListGithub);
	RightList.appendChild(RightListLink);
}
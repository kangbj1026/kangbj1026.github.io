$("#hd_wrapper").click(function() {
	let colorCode = "#"+Math.round(Math.random() * 0xffffff).toString(16);
	$("#hd_wrapper").css("background",colorCode);
});

// hd ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function hdWrapperLink(name) {
	let mainH2 = document.createElement('h2');
	let mainLink = document.createElement('a');
	mainLink.href = "https://kangbj1026.github.io";
	mainLink.innerText = name;
	mainH2.appendChild(mainLink);

	return mainH2;
}

function hdWrapperText(text) {
	let simpleDiv = document.createElement('div');
	let simpleText = document.createElement('span');
	simpleText.innerHTML = text;
	simpleDiv.appendChild(simpleText);

	return simpleDiv;
}

let hdWrapper = document.getElementById("hd_wrapper");
hdWrapper.appendChild(hdWrapperLink("강 병 주"));
hdWrapper.appendChild(hdWrapperText(" 모르면 배워야하는 생각 "));

// hd wrapper ~~~~~~~~~~~~~~~~~~~~~~~~~~~
let para = document.location.href.split("/");
// let linkName = para[4].replace(/(.html)$/,''); // localhost 적용
let linkName = para[3].replace(/(.html)$/,''); // github 적용

let wrapper = document.getElementById('wrapper');
let wrapperDivLeft = document.createElement('div');
wrapperDivLeft.classList.add('wrapper-left');
let wrapperDivRight = document.createElement('div');
wrapperDivRight.classList.add('wrapper-right');
let leftList = document.createElement('p');
let leftListGithub = document.createElement('span');
let leftListLink = document.createElement('a');
let leftListContent = document.createElement('span');

if (linkName == "contact") {
	leftListGithub.innerHTML = "Github : ";
	leftListLink.style.color = "#0400ff";
	leftListLink.href = "https://github.com/kangbj1026";
	leftListLink.innerHTML = "https://github.com/kangbj1026";
	leftListContent.innerHTML = "<h3>"+linkName+"</h3>";
	leftListGithub.appendChild(leftListLink);
	leftList.appendChild(leftListContent).appendChild(leftListLink);
} else if (linkName == "projects") {
	leftListContent.innerHTML = "<h3>"+linkName+"</h3>";
	leftList.appendChild(leftListContent);
} else {
	leftListContent.innerHTML = "<h3>Hello :) </h3>";
	leftList.appendChild(leftListContent);
}

wrapperDivLeft.appendChild(leftList);

wrapper.appendChild(wrapperDivLeft);
wrapper.appendChild(wrapperDivRight);

// Footer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let footer = document.getElementById("ft");
const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth()+1)).slice(-2);
const day = ('0' + (today.getDate())).slice(-2);
const date = year + "-" + month + "-" + day;

let footerContents = document.createElement('p');
// footerContents.setAttribute("id","day");
// footerContents.classList.add("day");
footerContents.innerHTML = date;
footer.appendChild(footerContents);

// $(".day").text(date);
// $(".day").text(footerContents);

// function FooterContents() {
// 	let footerContents = document.createElement('p');
// 	footerContents.addClass("a");

// 	return footerContents;
// }
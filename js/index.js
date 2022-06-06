$("#hd_wrapper").click(function() {
	let colorCode = "#"+Math.round(Math.random() * 0xffffff).toString(16);
	$("#hd_wrapper").css("background",colorCode);
});

// hd ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function hdWrapperLink() {
	let mainH2 = document.createElement('h2');
	let mainLink = document.createElement('a');
	mainLink.href = "https://kangbj1026.github.io";
	mainLink.innerText = "강 병 주";
	mainH2.appendChild(mainLink);

	return mainH2;
}

function hdWrapperText() {
	let simpleDiv = document.createElement('div');
	let simpleText = document.createElement('span');
	simpleText.innerHTML = " 모르면 배워야하는 생각 ";
	simpleDiv.appendChild(simpleText);

	return simpleDiv;
}

let hdWrapper = document.getElementById("hd_wrapper");
hdWrapper.appendChild(hdWrapperLink());
hdWrapper.appendChild(hdWrapperText());

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
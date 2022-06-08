$("#hd_wrapper").click(function() {
	let colorCode = "#"+Math.round(Math.random() * 0xffffff).toString(16);
	$("#hd_wrapper").css("background",colorCode);
});

let hdWrapper = headerWrapper();

function headerWrapper() {
	let hdWrapper = document.getElementById("hd_wrapper");
	hdWrapper.appendChild(hdWrapperLink("강 병 주"));
	hdWrapper.appendChild(hdWrapperText(" 모르면 배워야하는 생각 "));

	return hdWrapper;
}

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
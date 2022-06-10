$("#hd_wrapper").click(function() {
	let colorCode = "#"+Math.round(Math.random() * 0xffffff).toString(16);
	$("#hd_wrapper").css("background",colorCode);
});

let hdWrapper = headerWrapper();

function headerWrapper() {
	let hdWrapper = document.getElementById("hd_wrapper");
	hdWrapper.appendChild(hdWrapperLink("ByungJu Kang's Portfolio"));
	hdWrapper.appendChild(hdWrapperText(" 채워넣지 못하면 영원히 텅빈 HeadArray "));

	return hdWrapper;
}

function hdWrapperLink(name) {
	let mainDiv = document.createElement('div');
	let mainH2 = document.createElement('h2');
	let mainLink = document.createElement('a');
	mainLink.href = "https://kangbj1026.github.io";
	mainLink.innerText = name;
	mainH2.appendChild(mainLink);
	mainDiv.appendChild(mainH2);
	mainDiv.classList.add("header_href");
	
	return mainDiv;
}

function hdWrapperText(text) {
	let simpleDiv = document.createElement('div');
	let simpleText = document.createElement('span');
	simpleText.innerHTML = text;
	simpleDiv.appendChild(simpleText);

	return simpleDiv;
}

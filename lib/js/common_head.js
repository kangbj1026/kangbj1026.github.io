function createCommonHead() {

	const head = document.head;
	// title 설정
	const title = document.createElement('title');
	let textTitle = "";
	if (location.pathname.includes("") && location.pathname.includes("index"))
	{
		textTitle = "Bunny Portfolio";
	}
	else if (location.pathname.includes("love"))
	{
		textTitle = "Bunny Love";
	}
	else if (location.pathname.includes("about"))
	{
		textTitle = "Bunny About";
	}

	title.textContent = textTitle;
	head.appendChild(title);

	// 문자 인코딩 설정
	const charsetMeta = document.createElement('meta');
	charsetMeta.setAttribute('charset', 'UTF-8');
	head.appendChild(charsetMeta);

	// IE 호환성 설정
	const xUaCompatibleMeta = document.createElement('meta');
	xUaCompatibleMeta.setAttribute('http-equiv', 'X-UA-Compatible');
	xUaCompatibleMeta.setAttribute('content', 'IE=edge');
	head.appendChild(xUaCompatibleMeta);

	const contentSecurityPolicy = document.createElement('meta');
	contentSecurityPolicy.setAttribute('http-equiv', 'Content-Security-Policy');
	head.appendChild(contentSecurityPolicy);

	// 뷰포트 설정
	const viewportMeta = document.createElement('meta');
	viewportMeta.name = 'viewport';
	viewportMeta.content = 'width=device-width, initial-scale=1.0';
	head.appendChild(viewportMeta);

	// Open Graph 태그 (링크 스트랩)
	const ogTypeMeta = document.createElement('meta');
	ogTypeMeta.setAttribute('property', 'og:type');
	ogTypeMeta.setAttribute('content', 'website');
	head.appendChild(ogTypeMeta);

	const ogTitleMeta = document.createElement('meta');
	ogTitleMeta.setAttribute('property', 'og:title');
	ogTitleMeta.setAttribute('content', 'Bunny Portfolio');
	head.appendChild(ogTitleMeta);

	const ogUrlMeta = document.createElement('meta');
	ogUrlMeta.setAttribute('property', 'og:url');
	ogUrlMeta.setAttribute('content', 'https://kangbj1026.github.io/');
	head.appendChild(ogUrlMeta);

	const ogDescriptionMeta = document.createElement('meta');
	ogDescriptionMeta.setAttribute('property', 'og:description');
	ogDescriptionMeta.setAttribute('content', '신입 주니어 개발자 포트폴리오');
	head.appendChild(ogDescriptionMeta);

	const ogImageMeta = document.createElement('meta');
	ogImageMeta.setAttribute('property', 'og:image');
	ogImageMeta.setAttribute('content', '/lib/img/rabbit.png');
	head.appendChild(ogImageMeta);

	const ogSiteNameMeta = document.createElement('meta');
	ogSiteNameMeta.setAttribute('property', 'og:site_name');
	ogSiteNameMeta.setAttribute('content', 'BunnyPortfolio');
	head.appendChild(ogSiteNameMeta);

	// Font Awesome 아이콘 스크립트
	const fontAwesomeScript = document.createElement('script');
	fontAwesomeScript.src = 'https://kit.fontawesome.com/cb4e95a142.js';
	fontAwesomeScript.setAttribute('crossorigin', 'anonymous');
	head.appendChild(fontAwesomeScript);

	// Google Fonts 글꼴 연결
	const googleFontsPreconnect1 = document.createElement('link');
	googleFontsPreconnect1.setAttribute('rel', 'preconnect');
	googleFontsPreconnect1.setAttribute('href', 'https://fonts.googleapis.com');
	head.appendChild(googleFontsPreconnect1);

	const googleFontsPreconnect2 = document.createElement('link');
	googleFontsPreconnect2.setAttribute('rel', 'preconnect');
	googleFontsPreconnect2.setAttribute('href', 'https://fonts.gstatic.com');
	googleFontsPreconnect2.setAttribute('crossorigin', '');
	head.appendChild(googleFontsPreconnect2);

	const googleFontsLink = document.createElement('link');
	googleFontsLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
	googleFontsLink.setAttribute('rel', 'stylesheet');
	head.appendChild(googleFontsLink);

	// jQuery 라이브러리
	const jqueryScript = document.createElement('script');
	jqueryScript.src = 'lib/js/jquery-3.6.0.min.js';
	head.appendChild(jqueryScript);

	// 메인 스타일 시트
	const mainStyleLink = document.createElement('link');
	mainStyleLink.setAttribute('rel', 'stylesheet');
	mainStyleLink.setAttribute('href', 'lib/css/mainStyle.css');
	head.appendChild(mainStyleLink);

	// 게시판 스타일 시트
	const boardStyleLink = document.createElement('link');
	boardStyleLink.setAttribute('rel', 'stylesheet');
	boardStyleLink.setAttribute('href', 'lib/css/board.css');
	head.appendChild(boardStyleLink);

	// 파비콘
	const faviconLink = document.createElement('link');
	faviconLink.setAttribute('rel', 'icon');
	faviconLink.setAttribute('href', 'lib/img/rabbit.png');
	head.appendChild(faviconLink);

	// CODE 라이브러리
	const codeStyleLink = document.createElement('link');
	codeStyleLink.setAttribute('rel', 'stylesheet');
	codeStyleLink.setAttribute('href', 'lib/css/prism-tomorrow.min.css');
	head.appendChild(codeStyleLink);

}

createCommonHead();
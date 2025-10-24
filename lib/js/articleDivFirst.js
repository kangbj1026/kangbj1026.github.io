import {CreateTag} from "./create.js";
import {Map,Event,appEndChild} from "./function.js";

export function articleDivFirst() {
    const articleDiv = CreateTag("articleFirst","div");
    return articleDiv;
}
export function articleFirst() {
    const articleFirst = document.querySelector(".articleFirst");
    Div1(articleFirst);
    Div2(articleFirst);

    return articleFirst;
}

/* Div1 */
function Div1(articleFirst) {
    const fDiv1 = CreateTag("f_div1","div");

    const intro = CreateTag('section', 'div');
	intro.classList.add('introduce-section'); // 나중에 CSS에서 flex 스타일 지정

	// 텍스트 부분을 감싸는 div
    const introText = CreateTag('div', 'div');
    introText.classList.add('introduce-text');
    introText.appendChild(CreateTag('', 'h2', '📌 INTRODUCE'));

	// ul 생성
	const introList = CreateTag('', 'ul');

	// li 목록 생성
	['Name: Kang Byung Ju', 
	'Date of Birth: 1987.06.06', 
	'Phone: 010-7666-0276', 
	'Email: kangbj1987@gmail.com', 
	'GitHub: https://github.com/kangbj1026', 
	'Portfolio: https://kangbj1026.github.io',
	'Residence: 인천'
	]
	.forEach(text => {
		const li = CreateTag('', 'li', text);
		li.innerHTML = text.replace(/(https:\/\/github.com\/kangbj1026|https:\/\/kangbj1026.github.io)/g, '<a href="$1" style="color: #1900ff;">$1</a>'); // 정규표현식 사용으로 모든 Java를 감쌈
		m(li);
		li.onclick = spinAndDisappear;
		introList.appendChild(li);
	});

	// ul을 introText에 추가
	introText.appendChild(introList);

	// 이미지 태그 생성
    const introImg = CreateTag('introduce-photo', 'img');
    introImg.src = './lib/img/my.jpg'; // 여기에 실제 사진 경로 넣기
    introImg.alt = 'Kang Byung Ju Photo';

	introImg.onclick = imgClick;
    // intro에 텍스트, 이미지 div 모두 추가
    intro.appendChild(introText);
    intro.appendChild(introImg);

    fDiv1.appendChild(intro);

    const about = CreateTag('section', 'div');
    about.appendChild(CreateTag('', 'h2', '💡 ABOUT ME'));
	const aboutList = CreateTag('', 'ul');
	const kbd = CreateTag('', 'kbd','Java');

	['현재는 Java/Spring Boot 기반으로 백엔드 개발을 하고 있습니다. 이전에는 PHP와 Node.js로 웹 서비스를 개발하며 다양한 기술 스택을 경험했습니다.',
	'엔트위즈소프트에서 2년 6개월간 근무하며 Cafe24 연동 시스템과 ERP 이벤트 관리 플랫폼 등을 개발했고, RESTful API 설계부터 데이터 처리, 유지보수까지 백엔드 전반의 실무를 경험했습니다.', 
	'개발은 클라이언트의 요구를 이해하고 문제를 분석하는 것에서 출발한다고 생각합니다. 기획부터 구현까지 시스템 전체 흐름을 고민하며, 선임 개발자들과 소통해 더 나은 방향을 찾고 실제로 작동하는 솔루션을 만드는 데 집중합니다.', 
	'읽기 쉽고 유지보수가 편한 코드를 지향하며, 새로운 기술을 배우는 것을 즐깁니다. 앞으로도 끊임없이 성장하며 팀과 함께 발전하는 개발자가 되고 싶습니다.']
	.forEach(text => {
		const li = CreateTag('', 'li', text);
		li.innerHTML = text.replace(/(Java|Spring Boot|API)/g, '<kbd>$1</kbd>'); // 정규표현식 사용으로 모든 Java를 감쌈
		m(li);
		li.onclick = spinAndDisappear;
		aboutList.appendChild(li);
	});

	about.appendChild(aboutList);

    fDiv1.appendChild(about);

	// EXPERIENCE 섹션
	const experience = CreateTag('section', 'div');
	experience.appendChild(CreateTag('', 'h2', '💼 EXPERIENCE : 경력 3년 8개월'));

	const experienceList = CreateTag('', 'ul');
	[
		"🏢 두드림 ( 2021.05 ~ 2022.07 ) - Frontend / Backend Developer. 사용자 페이지 기능 개발, 웹사이트 퍼블리싱.",
		"🏢 엔트위즈소프트 ( 2023.01 ~ 2025.06 ) - Frontend / Backend Developer.",
		"Cafe24 쇼핑몰 API를 사용하여 클라이언트 맞춤형 API 설계 및 개발.",
		"클라이언트가 Cafe24 플랫폼에서 필요한 데이터를 효율적으로 조회, 생성, 수정할 수 있도록 API 제공.",
		"인증 및 보안 고려하여 안전한 API 설계 및 구현.",
		"클라이언트 요청에 따라 추가 기능을 유연하게 반영하여 유지보수."
	].forEach(text => {
		const li = CreateTag('', 'li', text);
		m(li);
		li.onclick = spinAndDisappear;
		experienceList.appendChild(li);
	});
	experience.appendChild(experienceList);
	fDiv1.appendChild(experience);

	// SKILLS 섹션
	const skills = CreateTag('section', 'div');
	skills.appendChild(CreateTag('', 'h2', '🛠 SKILLS'));

	const skillsList = CreateTag('', 'ul');
	[
		'Backend: Java, Python ( 기초 ) , Kotlin ( 학습중 )',
		'Frontend: HTML, CSS, JavaScript, JQuery, React ( 기초 )',
		'Frameworks: Spring, Spring Boot, STS, CodeIgniter, Node.js',
		'Tools & Platforms: API, GitHub, GitLab, AWS, Tomcat, JDK, PuTTy, PostgreSQL, MySQL, MSSQL, Oracle, JPA, Thymeleaf, Sourcetree, Postman, Linux, Ubuntu, swagger, Jenkins'
	].forEach(text => {
		const li = CreateTag('', 'li', text);
		m(li);
		li.onclick = spinAndDisappear;
		skillsList.appendChild(li);
	});
	skills.appendChild(skillsList);
	fDiv1.appendChild(skills);

	// STRENGTHS 섹션
	const strengths = CreateTag('section', 'div');
	strengths.appendChild(CreateTag('', 'h2', '📈 STRENGTHS'));

	const strengthsList = CreateTag('', 'ul');
	[
		'새로운 기술 학습에 빠르고 실무 적용 능력 우수',
		'클라이언트 요구사항을 파악하여 최적의 솔루션 제공',
		'효율적인 코드 작성과 유지보수 가능한 아키텍처 설계',
	].forEach(text => {
		const li = CreateTag('', 'li', text);
		m(li);
		li.onclick = spinAndDisappear;
		strengthsList.appendChild(li);
	});
	strengths.appendChild(strengthsList);
	fDiv1.appendChild(strengths);

    articleFirst.appendChild(fDiv1);
}
/* Div2 */
function Div2(articleFirst) {
    /* articleFirst f_div2 Info1 */
    const fDiv2 = CreateTag("f_div2","div");
    const fDiv2Info1 = CreateTag("f_div_info1","div");
    const fDiv2Info1Title = CreateTag("f_div_info1_title","h1","INTRODUCE");
    const fDiv2InfoUl = CreateTag("f_div_info1_ul","ul");
    const fDiv2InfoList = ["강 병 주 ( Kang Byung Ju )","1987.06.06","010-7666-0276","kangbj1987@gmail.com","https://github.com/kangbj1026","https://kangbj1026.github.io"];

    for (let i = 0; fDiv2InfoList.length > i; i++) {
        const fDiv2InfoLi = CreateTag("info"+i,"li",fDiv2InfoList[i]);
        if (i == 4 || i == 5) {
            fDiv2InfoLi.innerText = null;
            const aList = CreateTag("info_a"+i,"a",fDiv2InfoList[i],fDiv2InfoList[i]);
            fDiv2InfoLi.appendChild(aList);
        }
        fDiv2InfoUl.appendChild(fDiv2InfoLi);
    }
    const fDiv2Info1Children = [[fDiv2Info1Title],[fDiv2InfoUl]];
    appEndChild(fDiv2Info1,fDiv2Info1Children,2);

    /* articleFirst f_div2 Info2 */
    const fDiv2Info2 = CreateTag("f_div_info2","div");

    /* articleFirst f_div2 Info2 Experience */
    const fDiv2Experience = CreateTag("f_div_experience","div");
    const fDiv2ExTitle = CreateTag("experience_h1","h1","EXPERIENCE");
    const fDivExLists = CreateTag("experience_ul","ul");
    let exList = [
        ['2021.05 ~ 2022.07 두드림\n', 'FRONT END / BACK END \n User 페이지 내 작동하는 기능 구축 및 개발\n 컨펌 된 디자인을 기반으로 웹사이트 내 Publishing 진행'],
		['\n2023.01 ~ 엔트위즈소프트\n', 
			"FRONT END / BACK END \n " + 
			"Cafe24 쇼핑몰 API를 사용하여 클라이언트 요구에 맞는 맞춤형 API를 설계 및 개발. \n " + 
			"클라이언트가 Cafe24 플랫폼에서 필요한 데이터를 효율적으로 조회, 생성, 수정할 수 있도록 API 제공. \n " + 
			"인증 및 보안 고려하여 안전한 API 설계 및 구현. \n " + 
			"클라이언트 요청에 따라 추가 기능을 유연하게 반영하여 유지보수. \n "	
		]
    ];
    Map(fDivExLists,exList,'span');

    const fDiv2ExperienceChildren = [[fDiv2ExTitle],[fDivExLists]];
    appEndChild(fDiv2Experience,fDiv2ExperienceChildren,2);

    /* articleFirst f_div2 Info2 Skills */
    const fDiv2Skills = CreateTag("f_div_skills","div");
    const fDiv2SkTitle = CreateTag("skills_h1","h1","SKILLS");
    const fDivSkLists = CreateTag("skills_ul","ul");
    const skList = [
        ['FRONT END : ',"HTML, CSS, JavaScript, JQuery, React(초급)"],
        ['BACK END : ',"PHP, JAVA, Python(기초)"],
        ['Framework : ',"Spring, Spring Boot, STS, Codeigniter, node"],
        ['Setting : ',"Github, GitLab, AWS, Tomcat, jdk, PuTTy, PostgreSQL, MySQL, MSSQL, thymeleaf, Sourcetree, Postman"]
    ];
    Map(fDivSkLists,skList,'span');

    const fDiv2SkillsChildren = [[fDiv2SkTitle],[fDivSkLists]];
    appEndChild(fDiv2Skills,fDiv2SkillsChildren,2);

    const fDiv2Info2Children = [[fDiv2Experience],[fDiv2Skills]];
    appEndChild(fDiv2Info2,fDiv2Info2Children,2);

    const fDiv2Children = [[fDiv2Info1],[fDiv2Info2]];
    appEndChild(fDiv2,fDiv2Children,2);;

    // articleFirst.appendChild(fDiv2);
}

/* EventMouse */
function EventMouse(div,h1) {
    div.addEventListener("mouseover", (e) => {
        Event(e,div,h1);
    });
    div.addEventListener("mouseout", (e) => {
        Event(e,div,h1);
        // fDiv1.style.removeProperty("opacity");
    });
}
/* Info a click event */
// function LinkGo() {
// const myGht = document.querySelector(".info_a4");
// const f_div_info = document.querySelector(".f_div_info");
// // myGht.parentElement.style.opacity = "0";
// f_div_info.addEventListener('click', ()=>{
//     window.open(myGht.href,'_blank');
//     alert(myGht);
// })

function m(div)
{
	const magnifier = document.getElementById('magnifier');
	const magnifierContent = magnifier.querySelector('.magnifier-content');

	div.addEventListener('mouseenter', () => {
	magnifier.style.display = 'block';
	magnifierContent.innerHTML = div.innerHTML;
	});

	div.addEventListener('mouseleave', () => {
	magnifier.style.display = 'none';
	});

	div.addEventListener('mousemove', (e) => {
	const rect = div.getBoundingClientRect();
	const mouseX = e.clientX - rect.left;
	const mouseY = e.clientY - rect.top;

	const zoom = 1.5;
	magnifier.style.left = e.pageX + 15 + 'px';
	magnifier.style.top = e.pageY + 15 + 'px';

	// 확대 텍스트 위치 조정
	magnifierContent.style.transform = `translate(${-mouseX * zoom + magnifier.offsetWidth / 2}px, ${-mouseY * zoom + magnifier.offsetHeight / 2}px)`;
	magnifierContent.style.fontSize = 15 * zoom + 'px';
	});
}

function spinAndDisappear() {
	// 클릭된 요소의 위치를 고정하여 애니메이션 자연스럽게
	const rect = this.getBoundingClientRect();
	this.style.position = 'absolute';
	this.style.left = rect.left + 'px';
	this.style.top = rect.top + 'px';

	// 애니메이션 클래스 추가
	this.classList.add('disappearing');

	// 애니메이션 종료 후 요소 제거
	this.addEventListener('animationend', () => {
		this.remove();
	});
}

// 이미지 배열 (순차적으로 보여줄 이미지들)
const imageSequence = [
    './lib/img/my2.jpg',
    './lib/img/my1.jpg',
    './lib/img/my.jpg',
];

let currentIndex = 0;

function imgClick() {
    // 1단계: 이미지가 사라지는 애니메이션 시작
    // dissolve 애니메이션을 0.6초 동안 실행 (확대→블러→페이드아웃)
    // forwards: 애니메이션 완료 후 마지막 상태 유지
    this.style.animation = 'dissolve 0.6s ease-out forwards';
    
    // 0.6초 후 (dissolve 애니메이션이 끝나는 시점)
    setTimeout(() => {
        // 2단계: 다음 이미지로 변경
        // currentIndex를 1 증가시키고, 배열 길이로 나눈 나머지로 순환
        // (마지막 이미지 다음엔 첫 번째 이미지로 돌아감)
        currentIndex = (currentIndex + 1) % imageSequence.length;
        
        // jQuery를 사용해 이미지 src 속성을 다음 이미지로 변경
        $(this).attr('src', imageSequence[currentIndex]);
        
        // 3단계: 새 이미지가 나타나는 애니메이션 시작
        // appear 애니메이션을 0.6초 동안 실행 (블러→축소→회전→선명)
        this.style.animation = 'appear 0.6s ease-out forwards';
        
        // 0.6초 후 (appear 애니메이션이 끝나는 시점)
        setTimeout(() => { 
            // 4단계: 애니메이션 속성 제거 (초기 상태로 복귀)
            // 다음 클릭을 위해 animation 스타일 초기화
            this.style.animation = '';
        }, 600);
    }, 600);
}

// CSS 추가 필요
const style = document.createElement('style');
style.textContent = `
@keyframes dissolve {
    0% { transform: scale(1); filter: blur(0px); opacity: 1; }
    50% { transform: scale(1.1); filter: blur(10px); opacity: 0.5; }
    100% { transform: scale(0.9); filter: blur(20px); opacity: 0; }
}
@keyframes appear {
    0% { transform: scale(1.1) rotate(-5deg); filter: blur(20px); opacity: 0; }
    100% { transform: scale(1) rotate(0deg); filter: blur(0px); opacity: 1; }
}
`;
document.head.appendChild(style);
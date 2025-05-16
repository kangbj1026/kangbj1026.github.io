import {CreateTag} from "./create.js";

document.addEventListener('DOMContentLoaded', function() {
	const section = document.querySelector('section');

	// 프로젝트 내용 생성
	createProjectContent(section);

	// 모달 오버레이 생성 및 이벤트 리스너 추가
	setupModalAndListeners();
});

// 프로젝트 내용을 생성하는 함수
function createProjectContent(section) {
	// 제목 추가
	const title = CreateTag('project-title', 'h1', 'Project List');
	section.appendChild(title);

	// 갤러리 컨테이너 생성
	const project = CreateTag('project', 'div');
	section.appendChild(project);

	// 갤러리 아이템 데이터
	const projectItems = [
		{ bg: 'url(/lib/img/nesteelMain.png)', caption: '네스틸코리아(주)' },
		{ bg: 'url(/lib/img/meritintMain.png)', caption: '메리트int' },
		{ bg: 'url(/lib/img/lottohMain.png)', caption: '로또사이트' },
		{ bg: 'url(/lib/img/nicevisa.png)', caption: '나이스비자' },
		{ bg: 'url(/lib/img/airis.png)', caption: '에어리스' },
		{ bg: 'url(/lib/img/smile.png)', caption: '폴리파크' },
	];

	// 갤러리 아이템 생성
	projectItems.forEach(item => {
		const projectItem = CreateTag('project-item', 'div');
		projectItem.setAttribute('data-caption', item.caption);
		projectItem.setAttribute('data-background', item.bg);
		projectItem.setAttribute('data-background-size', 'cover');
		
		const projectItemInner = CreateTag('project-item-inner', 'div');
		projectItemInner.style.backgroundImage = item.bg;
		
		projectItem.appendChild(projectItemInner);
		project.appendChild(projectItem);
	});
}

// 모달 오버레이와 이벤트 리스너 설정
function setupModalAndListeners() {
	const section = document.querySelector('section');

	// 모달 오버레이 생성
	const modalOverlay = CreateTag('modal-overlay', 'div');
	section.appendChild(modalOverlay);

	// 모달 콘텐츠 생성
	const modalContent = CreateTag('modal-content', 'div');
	modalOverlay.appendChild(modalContent);

	// 닫기 버튼 생성
	const closeButton = CreateTag('close-button', 'button', '×');
	modalContent.appendChild(closeButton);

	// 모달 이미지 생성 (div로 대체)
	const modalImage = CreateTag('modal-image', 'div');
	modalContent.appendChild(modalImage);

	// 이미지 캡션 생성
	const imageCaption = CreateTag('image-caption', 'div');
	modalContent.appendChild(imageCaption);

	// 갤러리 아이템 클릭 이벤트 리스너
	const projectItems = document.querySelectorAll('.project-item');
	projectItems.forEach(item => {
		item.addEventListener('click', function() {
		const bg = this.getAttribute('data-background');
		const caption = this.getAttribute('data-caption');
		const bs = this.getAttribute('data-background-size');
		
		// 모달 이미지와 캡션 설정
		modalImage.style.background = bg;
		modalImage.style.backgroundSize = bs;
		imageCaption.innerText = caption;
		
		// 모달 표시
		modalOverlay.classList.add('active');
		
		// 스크롤 방지
		document.body.style.overflow = 'hidden';
		});
	});

	// 닫기 버튼 클릭 이벤트
	closeButton.addEventListener('click', closeModal);

	// 오버레이 클릭 이벤트
	modalOverlay.addEventListener('click', function(e) {
		if (e.target === modalOverlay) {
		closeModal();
		}
	});

	// Esc 키 누를 때 이벤트
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
		closeModal();
		}
	});

	// 모달 닫기 함수
	function closeModal() {
		modalOverlay.classList.remove('active');
		document.body.style.overflow = '';
		
		// 이미지가 전환될 때 깜빡임 방지를 위해 일정 시간 후 초기화
		setTimeout(function() {
		modalImage.style.background = '';
		imageCaption.innerText = '';
		}, 300);
	}
}
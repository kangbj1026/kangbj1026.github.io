import { getPostContent, getPostCode } from './post-data.js';
	// 샘플 게시판 데이터 배열
	let posts = [
		{
			id: 1,
			title: "프로그래밍 언어 Java, 왜 배워야 할까요?",
			content: getPostContent(1),
			author: "Rabbit",
			date: "2025-05-19",
			image: "lib/img/java_basics.png",
			code: getPostCode(1)
		},
		{
			id: 2,
			title: "Spring & Spring Boot: 더 쉽고 빠른 웹 개발 비결",
			content: getPostContent(2),
			author: "Rabbit",
			date: "2025-05-25",
			image: "lib/img/spring_boot.png",
			code: getPostCode(2)
		},
		{
			id: 3,
			title: "객체 지향 언어 (OOP) 쉽게 이해하기",
			content: getPostContent(3),
			author: "Rabbit",
			date: "2025-05-28",
			image: "lib/img/oop.png",
			code: getPostCode(3)
		},
		{
			id: 4,
			title: "어노테이션(Annotation)은 무엇인가요?",
			content: getPostContent(4),
			author: "Rabbit",
			date: "2025-06-03",
			image: "lib/img/annotation.png",
			code: getPostCode(4)
		},
		{
			id: 5,
			title: "WebMvcConfigurer로 웹 설정 커스터마이징",
			content: getPostContent(5),
			author: "Rabbit",
			date: "2025-06-08",
			image: "lib/img/webmvcconfigurer.png",
			code: getPostCode(5)
		},
		{
			id: 6,
			title: "JWT (JSON Web Token) 개념과 활용",
			content: getPostContent(6),
			author: "Rabbit",
			date: "2025-06-12",
			image: "lib/img/jwt.png",
			code: getPostCode(6)
		},
		{
			id: 7,
			title: "CORS (교차 출처 리소스 공유) 이해하기",
			content: getPostContent(7),
			author: "Rabbit",
			date: "2025-06-19",
			image: "lib/img/cors.png",
			code: getPostCode(7)
		},
		{
			id: 8,
			title: "Spring SecurityConfig로 보안 설정하기",
			content: getPostContent(8),
			author: "Rabbit",
			date: "2025-06-25",
			image: "lib/img/securityconfig.png",
			code: getPostCode(8)
		},
		{
			id: 9,
			title: "Java 21의 혁신: 가상 스레드(Virtual Threads) Deep Dive",
			author: "Rabbit",
			date: "2025-06-29",
			image: "lib/img/virtual_threads.png",
			content: getPostContent(9),
			code: getPostCode(9)
		},
		{
			id: 10,
			title: "JVM의 심장, Garbage Collection(GC) 동작 원리 파헤치기",
			author: "Rabbit",
			date: "2025-07-03",
			image: "lib/img/jvm_gc.png",
			content: getPostContent(10),
			code: getPostCode(10)
		},
		{
			id: 11,
			title: "품질 향상을 위한 TDD(테스트 주도 개발) with JUnit & Mockito",
			author: "Rabbit",
			date: "2025-07-10",
			image: "lib/img/tdd_junit.png",
			content: getPostContent(11),
			code: getPostCode(11)
		},
		{
			id: 12,
			title: "Java Stream API 심화: 데이터 처리를 우아하게",
			author: "Rabbit",
			date: "2025-07-17",
			image: "lib/img/stream_api.png",
			content: getPostContent(12),
			code: getPostCode(12)
		},
		{
			id: 13,
			title: "Kotlin, 왜 매력적인 언어일까?",
			author: "Rabbit",
			date: "2025-09-10",
			image: "lib/img/kotlin.jpg",
			content: getPostContent(13),
			code: getPostCode(13)
		},
	];

	// 현재 페이지와 페이지당 게시글 수를 설정합니다.
	let currentPage = 1;
	const postsPerPage = 5;

	/**
	 * 게시판 UI를 렌더링하는 메인 함수입니다.
	 * 목록, 글쓰기 폼, 페이지네이션을 포함한 전체 게시판을 화면에 그립니다.
	 * @param {HTMLElement} container - 게시판이 추가될 부모 HTML 요소입니다.
	 */
	function renderBoard(container) {
		// 기존 내용을 초기화합니다.
		container.innerHTML = '';

		// 게시판 전체를 감싸는 컨테이너를 생성합니다.
		const boardContainer = document.createElement('div');
		boardContainer.className = 'board-container';

		// 게시판 제목을 추가합니다.
		const title = document.createElement('h2');
		title.textContent = 'Tech Study';
		boardContainer.appendChild(title);

		// 게시글 목록 및 상세보기를 표시할 컨테이너를 생성합니다.
		const contentContainer = document.createElement('div');
		contentContainer.className = 'content-container';
		boardContainer.appendChild(contentContainer);

		// 글쓰기 폼을 표시할 컨테이너를 생성합니다.
		// const postFormContainer = document.createElement('div');
		// postFormContainer.className = 'post-form-container';
		// boardContainer.appendChild(postFormContainer);

		// 생성된 게시판 컨테이너를 부모 요소에 추가합니다.
		container.appendChild(boardContainer);

		// 초기 화면으로 게시글 목록을 렌더링합니다.
		renderPostList();
		// 글쓰기 폼을 렌더링합니다.
		// renderPostForm();
	}

	/**
	 * 게시글 목록과 페이지네이션을 렌더링합니다.
	 */
	function renderPostList() {
		const contentContainer = document.querySelector('.content-container');
		// const formContainer = document.querySelector('.post-form-container');

		// 컨테이너 내용을 초기화합니다.
		contentContainer.innerHTML = '';
		// formContainer.style.display = 'block'; // 글쓰기 폼 다시 표시

		// 게시글을 ID 기준으로 내림차순 정렬합니다.
		posts.sort((a, b) => b.id - a.id);

		// 현재 페이지에 표시할 게시글을 계산합니다.
		const startIndex = (currentPage - 1) * postsPerPage;
		const endIndex = startIndex + postsPerPage;
		const paginatedPosts = posts.slice(startIndex, endIndex);

		// 게시글 목록 테이블을 생성합니다.
		const tableResponsiveDiv = document.createElement('div');
		tableResponsiveDiv.className = 'table-responsive';
		const table = document.createElement('table');
		table.className = 'post-table';
		tableResponsiveDiv.appendChild(table);

		// 테이블 헤더를 생성합니다.
		const thead = document.createElement('thead');
		thead.innerHTML = `
			<tr>
				<th>번호</th>
				<th>이미지</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일</th>
			</tr>
		`;
		table.appendChild(thead);

		// 테이블 본문을 생성하고 게시글 데이터를 채웁니다.
		const tbody = document.createElement('tbody');
		if (paginatedPosts.length > 0) {
			paginatedPosts.forEach((post, index) => {
				const row = document.createElement('tr');
				row.innerHTML = `
					<td>${startIndex + index + 1}</td>
					<td><a href="#" class="post-image-link" data-id="${post.id}"><img src="${post.image}" alt="${post.title}" class="post-thumbnail"></a></td>
					<td><a href="#" class="post-title-link" data-id="${post.id}">${post.title}</a></td>
					<td class="fwb">${post.author}</td>
					<td class="fwb">${post.date}</td>
				`;
					// <td>
					//     <button class="edit-btn" data-id="${post.id}">수정</button>
					//     <button class="delete-btn" data-id="${post.id}">삭제</button>
				// </td>
				tbody.appendChild(row);
			});
		} else {
			const row = document.createElement('tr');
			row.innerHTML = `<td colspan="6"> 게시글이 없습니다.</td>`;
			tbody.appendChild(row);
		}
		table.appendChild(tbody);
		contentContainer.appendChild(tableResponsiveDiv); // tableResponsiveDiv를 추가

		// 페이지네이션 컨테이너를 생성하고 렌더링합니다.
		const paginationContainer = document.createElement('div');
		paginationContainer.className = 'pagination-container';
		contentContainer.appendChild(paginationContainer);
		renderPagination(paginationContainer);

		// 버튼들에 이벤트 리스너를 추가합니다.
		addEventListenersToButtons();
	}

	/**
	 * 게시글 상세 내용을 렌더링합니다.
	 * @param {number} postId - 상세 보기할 게시글의 ID.
	 */
	function renderPostDetail(postId) {
		const post = posts.find(p => p.id === postId);
		if (!post) return;

		const contentContainer = document.querySelector('.content-container');
		// const formContainer = document.querySelector('.post-form-container');
		contentContainer.innerHTML = ''; // 목록 컨테이너 초기화
		// formContainer.style.display = 'none'; // 글쓰기 폼 숨기기

		const detailContainer = document.createElement('div');
		detailContainer.className = 'post-detail-container';

		// 상세 내용 HTML 구성
		const titleElement = document.createElement('h3');
		titleElement.className = 'post-detail-title';
		titleElement.textContent = post.title;
		detailContainer.appendChild(titleElement);

		const metaDiv = document.createElement('div');
		metaDiv.className = 'post-detail-meta';
		const authorSpan = document.createElement('span');
		authorSpan.textContent = `작성자 : ${post.author}`;
		authorSpan.style.fontWeight = 'bold';
		metaDiv.appendChild(authorSpan);
		const dateSpan = document.createElement('span');
		dateSpan.textContent = `작성일 : ${post.date}`;
		dateSpan.style.fontWeight = 'bold';
		metaDiv.appendChild(dateSpan);
		detailContainer.appendChild(metaDiv);

		const imageElement = document.createElement('img');
		imageElement.src = post.image;
		imageElement.alt = post.title;
		imageElement.className = 'post-detail-image';
		detailContainer.appendChild(imageElement);

		const contentDiv = document.createElement('div');
		contentDiv.className = 'post-detail-content';
		// parseAndStyleContent 함수를 사용하여 내용을 파싱하고 스타일링하여 추가
		contentDiv.appendChild(parseAndStyleContent(post.content));
		detailContainer.appendChild(contentDiv);

		// 코드 블록 추가: 게시글에 코드가 있는 경우에만 코드 블록을 생성하여 상세 페이지에 추가합니다.
		if (post.code) {
			// 코드 블록을 감싸는 div 요소를 생성하고 클래스를 지정합니다.
			const codeBlock = document.createElement('div');
			codeBlock.className = 'post-detail-code';

			// pre와 code 요소를 생성하여 코드 내용을 담습니다.
			const pre = document.createElement('pre');
			const code = document.createElement('code');
			code.className = 'language-java'; // Prism.js가 코드를 하이라이팅할 수 있도록 언어 클래스를 지정합니다.
			code.textContent = post.code; // 코드 내용을 요소에 할당합니다.

			// 생성된 요소들을 조립합니다.
			pre.appendChild(code);
			codeBlock.appendChild(pre);
			detailContainer.appendChild(codeBlock);

			// Prism.js를 사용하여 코드 하이라이팅을 적용합니다.
			if (window.Prism) {
				Prism.highlightElement(code);
			}
		}

		const backButton = document.createElement('button');
		backButton.className = 'back-to-list-btn';
		backButton.textContent = '목록으로';
		backButton.addEventListener('click', () => {
			renderPostList();
		});
		detailContainer.appendChild(backButton);

		contentContainer.appendChild(detailContainer);
	}

	/**
	 * 문자열을 파싱하여 영어, 숫자, 특정 특수 기호를 굵게 스타일링한 DOM 요소를 반환합니다.
	 * @param {string} contentString - 원본 게시글 내용 문자열.
	 * @returns {DocumentFragment} 스타일링된 내용을 담은 DocumentFragment.
	 */
	function parseAndStyleContent(contentString) {
		const fragment = document.createDocumentFragment();
		const lines = contentString.split('\n');

		const keywordsToEmphasize = ['Java', 'Spring', 'Boot', 'Framework', 'OOP', 'WebMvcConfigurer', 'JWT', 'CORS', 'SecurityConfig', 'Tomcat', 'JSON', 'API', 'SPA', 'HTTP', 'CSRF', 'CSS', 'Script', 'Docker', 'Jar', 'file', 'gradlew', 'Stream', 'Map', 'TDD', 'JVM', 'Thread', 'Rx', 'Callback', 'Platform', 'flat', 'Collectors', 'to', 'parallel'];

		lines.forEach(line => {
			const p = document.createElement('p');
			const br = document.createElement('br');
			let styledLine = line; // 초기화

			// 영어 단어, 숫자, 괄호, #, *를 먼저 <strong> 태그로 감쌉니다.
			styledLine = styledLine.replace(/([a-zA-Z]+|\d+|[()#*])/g, '<strong>$&</strong>');

			// 특정 키워드들을 반복문으로 처리하여 emphasis 클래스를 추가합니다.
			keywordsToEmphasize.forEach(keyword => {
				// 이미 <strong> 태그로 감싸진 키워드를 찾아서 emphasis 클래스를 추가합니다.
				// 정규식에서 대소문자를 구분하지 않도록 'i' 플래그를 사용하고, 단어 경계를 \b로 지정합니다.
				// $1은 정규식의 첫 번째 캡처 그룹(여기서는 keyword)을 참조합니다.
				const regex = new RegExp(`(<strong>)?(${keyword})(<\/strong>)?`, 'gi');
				styledLine = styledLine.replace(regex, `<strong class="emphasis">$2<\/strong>`);
			});

			p.innerHTML = styledLine; // innerHTML을 사용하여 <strong> 태그 적용
			fragment.appendChild(br);
			fragment.appendChild(p);
		});
		return fragment;
	}

	/**
	 * 페이지네이션 버튼을 생성하고 렌더링합니다.
	 * @param {HTMLElement} container - 페이지네이션 버튼이 추가될 컨테이너입니다.
	 */
	function renderPagination(container) {
		const totalPages = Math.ceil(posts.length / postsPerPage);

		if (totalPages <= 1) {
			container.innerHTML = '';
			return;
		}

		container.innerHTML = '';
		for (let i = 1; i <= totalPages; i++) {
			const pageButton = document.createElement('button');
			pageButton.textContent = i;
			pageButton.className = 'page-btn';
			if (i === currentPage) {
				pageButton.classList.add('active');
			}
			pageButton.addEventListener('click', () => {
				currentPage = i;
				renderPostList();
			});
			container.appendChild(pageButton);
		}
	}

	/**
	 * 글쓰기 또는 수정 폼을 렌더링합니다.
	 * @param {object} [postToEdit=null] - 수정할 게시글 객체 (수정 시에만 사용).
	 */
	function renderPostForm(postToEdit = null) {
		const container = document.querySelector('.post-form-container');
		container.innerHTML = '';

		const formTitle = document.createElement('h3');
		formTitle.textContent = postToEdit ? '게시글 수정' : '새 글 작성';
		container.appendChild(formTitle);

		const form = document.createElement('form');
		form.className = 'post-form';
		form.innerHTML = `
			<input type="text" id="post-title" placeholder="제목" value="${postToEdit ? postToEdit.title : ''}" required>
			<input type="text" id="post-author" placeholder="작성자" value="${postToEdit ? postToEdit.author : ''}" required>
			<input type="text" id="post-image" placeholder="이미지 URL (e.g., lib/img/your_image.png)" value="${postToEdit ? postToEdit.image : ''}" required>
			<textarea id="post-content" placeholder="내용 (줄바꿈은 \\n으로 입력)" required>${postToEdit ? postToEdit.content : ''}</textarea>
			<div class="form-buttons">
				<button type="submit">${postToEdit ? '수정 완료' : '글쓰기'}</button>
				${postToEdit ? '<button type="button" class="cancel-edit-btn">취소</button>' : ''}
			</div>
		`;
		container.appendChild(form);

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const title = document.getElementById('post-title').value;
			const author = document.getElementById('post-author').value;
			const content = document.getElementById('post-content').value;
			const image = document.getElementById('post-image').value;

			if (postToEdit) {
				updatePost(postToEdit.id, title, content, author, image);
			} else {
				createPost(title, content, author, image);
			}
		});

		if (postToEdit) {
			const cancelBtn = form.querySelector('.cancel-edit-btn');
			cancelBtn.addEventListener('click', () => {
				// renderPostForm(); // 수정 취소 시 폼을 초기화
			});
		}
	}

	/**
	 * 새 게시글을 생성합니다.
	 */
	function createPost(title, content, author, image) {
		const newPost = {
			id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
			title,
			content,
			author,
			image,
			date: new Date().toISOString().split('T')[0]
		};
		posts.unshift(newPost);
		currentPage = 1;
		renderPostList();
		// renderPostForm(); // 폼 초기화
	}

	/**
	 * 기존 게시글을 수정합니다.
	 */
	function updatePost(id, title, content, author, image) {
		const postIndex = posts.findIndex(p => p.id === id);
		if (postIndex > -1) {
			posts[postIndex] = { ...posts[postIndex], title, content, author, image };
		}
		renderPostList();
		// renderPostForm(); // 폼 초기화
	}

	/**
	 * 게시글을 삭제합니다.
	 */
	function deletePost(id) {
		if (confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
			posts = posts.filter(p => p.id !== id);
			const totalPages = Math.ceil(posts.length / postsPerPage);
			if (currentPage > totalPages) {
				currentPage = totalPages > 0 ? totalPages : 1;
			}
			renderPostList();
		}
	}

	/**
	 * 모든 버튼에 이벤트 리스너를 추가하는 함수입니다.
	 */
	function addEventListenersToButtons() {
		// 이미지 링크
		document.querySelectorAll('.post-image-link').forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const postId = parseInt(e.target.parentNode.dataset.id);
				renderPostDetail(postId);
			});
		});
		// 제목 링크
		document.querySelectorAll('.post-title-link').forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const postId = parseInt(e.target.dataset.id);
				renderPostDetail(postId);
			});
		});

		// 수정 버튼
		document.querySelectorAll('.edit-btn').forEach(button => {
			button.addEventListener('click', (e) => {
				const postId = parseInt(e.target.dataset.id);
				const postToEdit = posts.find(p => p.id === postId);
				renderPostForm(postToEdit);
				window.scrollTo(0, document.body.scrollHeight); // 수정 폼으로 스크롤 이동
			});
		});

		// 삭제 버튼
		document.querySelectorAll('.delete-btn').forEach(button => {
			button.addEventListener('click', (e) => {
				const postId = parseInt(e.target.dataset.id);
				deletePost(postId);
			});
		});
	}

	// about.html의 <section> 태그에 게시판을 렌더링하도록 export 합니다.
	export function initBoard() {
		const boardSection = document.querySelector('section');
		if (boardSection) {
			renderBoard(boardSection);
		}
	}
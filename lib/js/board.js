	// 게시판 데이터를 관리하고, CRUD 기능을 수행하며, 페이지네이션 및 상세 보기를 처리하는 JavaScript 파일입니다.

	// 게시글 내용을 ID에 따라 반환하는 통합 함수
	function getPostContent(id) {
		switch (id) {
		case 1:
			return `'Java'라는 이름, 커피 브랜드로 오해하시는 분들도 많지만, 사실은 전 세계 수많은 웹사이트와 애플리케이션을 움직이는 핵심 프로그래밍 언어입니다. 비개발자분들을 위해 Java가 무엇인지, 그리고 왜 중요한지 쉽고 재미있게 설명해 드릴게요!
			### Java는 어떤 언어인가요?\nJava는 컴퓨터에게 일을 시키기 위한 '대화 방법' 중 하나라고 생각하시면 쉽습니다. 1995년에 처음 등장해서 지금까지도 꾸준히 사랑받는 이유는 바로 '어디서든 잘 통하는 만능 언어'이기 때문입니다.
			*  플랫폼 독립성: Java로 만든 프로그램은 윈도우, 맥, 리눅스 등 어떤 운영체제에서든 약간의 수정만 거치면 거의 동일하게 작동합니다. '한 번만 만들면 어디서든 실행된다'는 Java의 가장 큰 장점이죠.\n*  안정성: 문법이 비교적 엄격하고, 프로그램 실행 중 발생할 수 있는 오류를 미리 방지하는 기능들이 잘 갖춰져 있어 대규모의 중요한 시스템(예: 은행, 증권사 시스템)을 만드는 데 많이 사용됩니다.\n*  풍부한 라이브러리: '라이브러리'는 다른 개발자들이 미리 만들어 놓은 유용한 기능들의 모음집입니다. Java는 오랜 역사만큼이나 방대하고 검증된 라이브러리를 갖추고 있어, 개발자들이 복잡한 기능을 빠르고 쉽게 만들 수 있도록 도와줍니다.
			### 왜 Java를 배워야 할까요?\n만약 프로그래밍의 세계에 첫발을 내딛는다면, Java는 아주 훌륭한 선택지가 될 수 있습니다.
			1. 객체 지향 개념 학습: Java는 '객체 지향 프로그래밍(OOP)'이라는 현대적인 프로그래밍 방식을 제대로 배울 수 있는 가장 좋은 언어 중 하나입니다. 세상을 역할과 책임에 따라 여러 '객체'로 나누어 보는 이 방식은, 복잡한 문제를 체계적으로 해결하는 능력을 길러줍니다.\n2. 높은 취업 시장 수요: 안드로이드 앱 개발부터 웹 서버, 빅데이터, 인공지능에 이르기까지 Java는 정말 다양한 분야에서 사용됩니다. 그만큼 Java 개발자를 필요로 하는 기업이 많다는 의미이기도 합니다.\n3. 강력한 커뮤니티: 오랜 시간 동안 사랑받아온 언어인 만큼, 전 세계에 수많은 Java 개발자들이 있습니다. 개발하다가 막히는 부분이 생기면 온라인 커뮤니티나 자료를 통해 쉽게 도움을 얻을 수 있습니다.
			프로그래밍을 배운다는 것은 단순히 기술을 익히는 것을 넘어, 논리적으로 생각하고 문제를 해결하는 능력을 키우는 과정입니다. 그 첫걸음을 Java와 함께 시작해보는 것은 어떨까요?`;
		case 2:
			return `웹사이트나 앱을 만들 때, 개발자들은 매번 비슷한 작업들을 반복해야 합니다. 예를 들어 로그인 기능, 데이터베이스 연결, 보안 설정 같은 것들이죠. Spring은 이런 귀찮고 반복적인 작업들을 미리 만들어 제공해서, 개발자들이 더 중요하고 창의적인 기능 개발에 집중할 수 있도록 도와주는 '거대한 도구 상자'와 같습니다.
			### Spring Framework: 튼튼한 기본기\nSpring은 Java를 이용한 웹 개발을 위한 표준 기술이라고 할 수 있습니다. 오랜 기간 동안 수많은 개발자들에게 사용되며 안정성과 성능을 검증받았죠. 하지만 기능이 워낙 많고 정교하다 보니, 초보자가 사용하기에는 설정이 다소 복잡하고 어렵게 느껴질 수 있었습니다.
			### Spring Boot: 더 가볍고 빠르게!\n그래서 등장한 것이 바로 Spring Boot입니다. Spring Boot는 복잡했던 Spring의 설정을 대부분 자동으로 처리해주는 '마법 같은 도구'입니다. 개발자들은 더 이상 복잡한 설정 파일과 씨름할 필요 없이, 꼭 필요한 핵심 코드 몇 줄만 작성하면 곧바로 웹 애플리케이션을 실행할 수 있게 되었습니다.
			*  자동 설정: 개발에 필요한 수많은 설정을 자동으로 구성해줍니다.\n*  내장 서버: Tomcat 같은 웹 서버를 따로 설치하고 설정할 필요 없이, 프로그램 자체에 내장되어 있어 실행이 간편합니다.\n*  간결한 코드: 기존 Spring보다 훨씬 적은 양의 코드로 동일한 기능을 구현할 수 있습니다.
			결론적으로, Spring Boot는 튼튼하고 안정적인 Spring의 장점은 그대로 가져오면서, 개발 과정을 훨씬 더 쉽고 빠르게 만들어주는 혁신적인 도구입니다. 오늘날 많은 Java 기반 웹 서비스들이 Spring Boot를 사용하여 만들어지고 있습니다.`;
		case 3:
			return `객체 지향 프로그래밍(OOP)은 컴퓨터 프로그램을 만들 때, 실제 세상의 사물처럼 '객체'라는 단위로 나누어 생각하고 만드는 방식입니다. 마치 레고 블록처럼, 각각의 객체들이 자기 역할을 하고 서로 협력하면서 하나의 큰 프로그램을 완성하는 것이죠.
			### 왜 객체 지향이 중요한가요?\n1.재사용성: 한 번 만든 객체는 다른 프로그램에서도 재사용할 수 있어 개발 시간을 줄여줍니다.\n2.유지보수: 문제가 생겼을 때 해당 객체만 고치면 되므로, 전체 프로그램을 수정할 필요가 없어 편리합니다.\n3.확장성: 새로운 기능이 필요할 때 기존 객체를 건드리지 않고 새로운 객체를 추가하여 기능을 확장할 수 있습니다.
			Java는 대표적인 객체 지향 언어로, 이 개념을 이해하는 것이 Java 개발의 핵심입니다.`;
		case 4:
			return `프로그래밍에서 '어노테이션(Annotation)'은 코드에 특별한 의미나 기능을 추가하는 일종의 '꼬리표' 또는 '주석'입니다. 하지만 일반 주석과는 다르게, 어노테이션은 프로그램이 실행될 때나 컴파일될 때 특별한 동작을 하도록 지시하는 역할을 합니다.
			### 어노테이션은 왜 사용하나요?\n어노테이션을 사용하면 복잡한 설정이나 반복적인 코드를 줄이고, 코드를 더 깔끔하고 읽기 쉽게 만들 수 있습니다. 예를 들어, Spring Boot에서 @RestController라는 어노테이션을 사용하면, 이 클래스가 웹 요청을 처리하는 컨트롤러라는 것을 명확히 알려주고, 자동으로 웹 응답을 JSON 형태로 만들어주는 등의 기능을 수행하게 됩니다.
			개발자는 어노테이션 덕분에 '무엇을 할지'에 집중하고, '어떻게 할지'에 대한 복잡한 구현은 프레임워크(Spring 등)에 맡길 수 있게 됩니다.`;
		case 5:
			return `웹 애플리케이션을 개발하다 보면, 때로는 웹 서버의 기본 설정을 변경하거나, 특정 요청이 들어왔을 때 특별한 처리를 하고 싶을 때가 있습니다. Spring Framework에서 'WebMvcConfigurer'는 바로 이런 웹 관련 설정을 개발자가 직접 커스터마이징할 수 있도록 도와주는 인터페이스입니다.
			### WebMvcConfigurer로 무엇을 할 수 있나요?\n* 인터셉터 추가: 특정 웹 요청이 처리되기 전이나 후에 추가적인 작업을 하고 싶을 때 사용합니다. (예: 로그인 여부 확인, 로그 기록)\n* 뷰 컨트롤러 설정: 특정 URL로 접속했을 때 바로 특정 화면(HTML 파일)을 보여주고 싶을 때 사용합니다.\n* 정적 리소스 핸들링: 이미지, CSS, JavaScript 파일처럼 웹 페이지에 필요한 정적인 파일들의 경로를 설정할 때 사용합니다.
			WebMvcConfigurer를 사용하면 Spring 웹 애플리케이션의 동작 방식을 세밀하게 제어하고, 개발자의 요구사항에 맞게 유연하게 확장할 수 있습니다.`;
		case 6:
			return `JWT는 'JSON Web Token'의 줄임말로, 웹에서 정보를 안전하게 주고받기 위한 암호화된 문자열입니다. 마치 신분증처럼, 사용자가 누구인지, 어떤 권한을 가지고 있는지 등의 정보를 담고 있습니다. 하지만 이 신분증은 위조하기 어렵고, 필요한 정보만 최소한으로 담고 있어 효율적입니다.
			### JWT는 왜 사용하나요?\n기존에는 사용자가 로그인할 때마다 서버가 세션(Session)이라는 것을 만들어서 관리했습니다. 하지만 사용자가 많아지거나 여러 서버를 사용할 경우 세션 관리가 복잡해지는 문제가 있었습니다. JWT는 이런 세션 방식의 단점을 보완합니다.
			* 무상태(Stateless): 서버가 사용자 정보를 따로 저장할 필요가 없어 서버 부담이 줄어듭니다.\n* 확장성: 여러 서버에서 동일한 JWT를 사용하여 인증할 수 있어 서비스 확장이 용이합니다.\n* 보안성: 토큰이 암호화되어 있어 중간에 가로채더라도 내용을 쉽게 알 수 없습니다.
			JWT는 주로 모바일 앱이나 SPA(Single Page Application)와 같은 최신 웹 환경에서 사용자 인증 및 권한 부여에 널리 사용됩니다.`;
		case 7:
			return `웹 브라우저에서 웹사이트를 이용할 때, 보안상의 이유로 다른 도메인(주소)에 있는 자원(데이터, 이미지 등)에 함부로 접근하지 못하도록 막는 규칙이 있습니다. 이것을 '동일 출처 정책(Same-Origin Policy)'이라고 합니다. 하지만 때로는 의도적으로 다른 도메인의 자원을 가져와야 할 필요가 있는데, 이때 발생하는 보안 문제를 해결하기 위한 메커니즘이 바로 'CORS(Cross-Origin Resource Sharing)'입니다.
			### CORS는 왜 필요한가요?\n예를 들어, 'naver.com'에서 실행되는 웹 페이지가 'google.com'에 있는 데이터를 직접 가져오려고 하면, 브라우저는 보안을 위해 이를 기본적으로 차단합니다. 만약 이런 차단이 없다면, 악성 웹사이트가 사용자 모르게 다른 사이트의 개인 정보를 빼가는 등의 위험이 발생할 수 있습니다.
			CORS는 서버가 '이 도메인에서는 내 자원에 접근해도 괜찮아!'라고 허락해주는 방식으로 동작합니다. 서버가 특정 HTTP 헤더를 통해 허용된 도메인을 알려주면, 브라우저는 그에 따라 요청을 허용하거나 차단합니다.
			CORS는 웹 보안을 유지하면서도 웹 애플리케이션이 다양한 출처의 자원을 유연하게 사용할 수 있도록 돕는 중요한 기술입니다.`;
		case 8:
			return `Spring Security에서 'SecurityConfig'는 웹 애플리케이션의 보안 설정을 담당하는 핵심 부분입니다. 마치 건물의 보안 책임자가 어떤 사람이 들어올 수 있고, 어디까지 접근할 수 있는지 규칙을 정하는 것과 비슷합니다.
			### SecurityConfig로 무엇을 설정하나요?\n* 인증(Authentication): 사용자가 누구인지 확인하는 과정입니다. (예: 아이디와 비밀번호로 로그인)\n* 인가(Authorization): 인증된 사용자가 특정 자원(페이지, 기능)에 접근할 권한이 있는지 확인하는 과정입니다. (예: 관리자만 접근 가능한 페이지)\n* 로그인/로그아웃 처리: 로그인 페이지 경로, 로그인 성공/실패 시 이동할 페이지 등을 설정합니다.\n* CSRF 방어: 웹 취약점 중 하나인 CSRF(Cross-Site Request Forgery) 공격을 방어하는 설정을 합니다.
			SecurityConfig를 통해 개발자는 웹 애플리케이션의 보안 정책을 유연하고 강력하게 제어할 수 있으며, 사용자 데이터를 안전하게 보호할 수 있습니다.`;
			default:
				return "게시글 내용을 불러올 수 없습니다.";
		}
	}

	// 게시글 코드를 ID에 따라 반환하는 함수
	function getPostCode(id) {
		switch (id) {
		case 7:
			return `
@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") // 모든 경로에 대해 CORS 설정을 적용합니다.
			.allowedOrigins("http://localhost:3000") // 허용할 오리진(프론트엔드 주소)을 지정합니다.
			.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메소드를 지정합니다.
			.allowedHeaders("*") // 모든 HTTP 헤더를 허용합니다.
			.allowCredentials(true); // 쿠키와 같은 자격 증명을 허용합니다.
	}
}`;
		case 8:
			return `
@Configuration  // Spring 설정 클래스임을 명시
@EnableWebSecurity  // Spring Security 웹 보안 활성화
public class SecurityConfig {

    /**
     * HTTP 보안 필터 체인을 구성하는 메서드
     * Spring Security의 핵심 보안 설정을 정의
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // HTTP 요청에 대한 인가(Authorization) 규칙 설정
            .authorizeHttpRequests(authorize -> authorize
                // "/login", "/register" 경로는 인증 없이 접근 허용 (회원가입, 로그인 페이지)
                .requestMatchers("/login", "/register").permitAll()
                // "/admin/**" 경로는 ADMIN 권한을 가진 사용자만 접근 가능
                .requestMatchers("/admin/**").hasRole("ADMIN")
                // 나머지 모든 요청은 인증된 사용자만 접근 가능
                .anyRequest().authenticated()
            )
            // 폼 기반 로그인 설정
            .formLogin(formLogin -> formLogin
                // 사용자 정의 로그인 페이지 경로 설정
                .loginPage("/login")
                // 로그인 성공 후 리다이렉트할 기본 URL (강제 리다이렉트)
                .defaultSuccessUrl("/home", true)
                // 로그인 페이지에 모든 사용자 접근 허용
                .permitAll()
            )
            // 로그아웃 설정
            .logout(logout -> logout
                // 로그아웃 요청을 처리할 URL
                .logoutUrl("/logout")
                // 로그아웃 성공 후 리다이렉트할 URL
                .logoutSuccessUrl("/login?logout")
                // 로그아웃 기능에 모든 사용자 접근 허용
                .permitAll()
            );
        
        // 설정된 HttpSecurity 객체를 빌드하여 SecurityFilterChain 반환
        return http.build();
    }

    /**
     * 비밀번호 암호화를 위한 PasswordEncoder 빈 등록
     * BCrypt 해시 알고리즘을 사용하여 비밀번호를 안전하게 저장
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCrypt 암호화 방식 사용 (단방향 해시, 솔트 자동 생성)
        return new BCryptPasswordEncoder();
    }
}`;
		default:
			// 해당하는 코드가 없으면 빈 문자열을 반환합니다.
			return "";
		}
	}

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
		}
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
				// <th>관리</th>
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

		const keywordsToEmphasize = ['Java', 'Spring', 'Boot', 'Framework', 'OOP', 'WebMvcConfigurer', 'JWT', 'CORS', 'SecurityConfig', 'Tomcat', 'JSON', 'API', 'SPA', 'HTTP', 'CSRF', 'CSS','Script'];

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
import { PYTHON_SCRIPT } from './python_script_content.js';
import { BACKEND_GUIDE } from './backend_guide_content.js';
import { CONFIG } from './config.js';
import * as UI from './study_guide_ui.js';

// 전역 상태 및 함수 노출
window.currentMode = 'non';
window.toggleCard = UI.toggleCard;
window.switchTab = UI.switchTab;
window.setGlobalMode = UI.setGlobalMode;
window.filterTopics = UI.filterTopics;
window.toggleCheck = UI.toggleCheck;
window.copyCode = UI.copyCode;

export async function init() {
    try {
        const response = await fetch('http://localhost:1026/api/v1/study-guide', {
            headers: {
                'Authorization': `Bearer ${CONFIG.AUTH_TOKEN}`
            }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        renderContent(data);
        document.getElementById('loading').style.display = 'none';

        // 렌더링 후 공통 상호작용 초기화 (체크 상태 복원 등)
        UI.restoreCheckState();
        UI.initScrollIndicator();

    } catch (error) {
        console.error('Data fetch error:', error);
        
        // 로딩 오버레이 숨김
        const loadingEl = document.getElementById('loading');
        if (loadingEl) loadingEl.style.display = 'none';
        
        // 메인 컨텐츠 영역에 에러 메시지 표시
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            const ddlSql = `CREATE TABLE study_category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL COMMENT '카테고리명 (예: Java Core)',
    icon VARCHAR(10) COMMENT '이모지 아이콘 (예: ☕)',
    badge_color VARCHAR(20) DEFAULT 'bg-orange' COMMENT '배지 CSS 클래스',
    dot_color VARCHAR(20) DEFAULT 'java' COMMENT '점 CSS 클래스',
    display_order INT DEFAULT 0 COMMENT '정렬 순서',
    createdAt DATETIME(6) DEFAULT NULL,
    updatedAt DATETIME(6) DEFAULT NULL
);

CREATE TABLE study_topic (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL COMMENT 'FK: study_category.id',
    scroll_id VARCHAR(10) NOT NULL COMMENT '스크롤용 ID (예: s1, s2)',
    title VARCHAR(255) NOT NULL COMMENT '주제 제목',
    search_keywords VARCHAR(255) COMMENT '검색용 키워드 (data-title)',
    
    -- 비전공자용 데이터
    non_analogy_title VARCHAR(255) COMMENT '비전공자 비유 제목',
    non_analogy_text TEXT COMMENT '비전공자 비유 본문',
    non_points JSON COMMENT '비전공자 핵심 포인트 리스트 (JSON Array)',
    
    -- 전공자용 데이터
    major_desc TEXT COMMENT '전공자 요약 설명',
    major_code_header VARCHAR(255) COMMENT '전공자 코드 블록 제목',
    major_code_content TEXT COMMENT '전공자 코드 본문',
    major_table JSON COMMENT '전공자용 비교 테이블 데이터 (JSON Object)',
    major_key_points JSON COMMENT '전공자용 핵심 체크 포인트 (JSON Array)',
    
    display_order INT DEFAULT 0 COMMENT '카테고리 내 정렬 순서',
    createdAt DATETIME(6) DEFAULT NULL,
    updatedAt DATETIME(6) DEFAULT NULL,
    FOREIGN KEY (category_id) REFERENCES study_category(id) ON DELETE CASCADE
);`;

            mainContent.innerHTML = `
                <div style="padding: 40px 20px; max-width: 900px; margin: 0 auto; color: #333;">
                    <div style="text-align: center;">
                        <div style="font-size: 64px; margin-bottom: 20px;">🔌</div>
                        <h2 style="color: #e74c3c; margin-bottom: 10px; font-size: 28px;">서버 연결 실패</h2>
                        <p style="margin-bottom: 40px; color: #666; font-size: 16px;">
                            데이터베이스 서버가 응답하지 않습니다.<br>
                            아래 절차를 따라 데이터베이스 환경을 구축해주세요.
                        </p>
                    </div>

                    <!-- STEP 1: 테이블 생성 -->
                    <div class="step-box" style="margin-bottom: 50px;">
                        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; font-size: 18px;">
                            <span style="background:#2c3e50; color:#fff; padding:4px 10px; border-radius:4px; font-size:14px; margin-right:8px; vertical-align: text-bottom;">STEP 1</span>
                            테이블 생성 (DDL)
                        </h3>
                        <p style="margin-bottom: 15px; color: #555;">
                            MySQL 데이터베이스에서 아래 SQL을 실행하여 테이블을 생성하세요.
                        </p>
                        <div class="code-block" style="text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                            <div class="code-header">
                                <span class="code-lang">SQL — create_tables.sql</span>
                                <button class="copy-btn" onclick="copyDDL()">복사</button>
                            </div>
                            <pre><code id="ddlCode" class="language-sql">${ddlSql.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                        </div>
                    </div>

                    <!-- STEP 2: 데이터 생성 -->
                    <div class="step-box" style="margin-bottom: 50px;">
                        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; font-size: 18px;">
                            <span style="background:#2c3e50; color:#fff; padding:4px 10px; border-radius:4px; font-size:14px; margin-right:8px; vertical-align: text-bottom;">STEP 2</span>
                            데이터 추출 및 적재
                        </h3>
                        <div style="background:#f8f9fa; padding:20px; border-radius:8px; margin-bottom:20px; border:1px solid #eee;">
                            <ol style="margin:0; padding-left:25px; line-height:1.8; color:#444;">
                                <li style="margin-bottom: 8px;">
                                    데이터 추출의 원본이 되는 
                                    <button onclick="downloadStaticHtml()" style="cursor:pointer; display:inline-block; text-decoration:none; background:#2c3e50; color:white; padding:2px 10px; border-radius:4px; font-size:13px; margin:0 5px; font-weight:bold; border:none;">
                                        📄 java_spring_study_guide.html 다운로드
                                    </button> 
                                    를 클릭하여 같은 폴더에 저장합니다.
                                </li>
                                <li>같은 폴더에 <b>extract_data.py</b> 파일을 생성합니다.</li>
                                <li>아래 코드를 복사하여 붙여넣고 저장합니다.</li>
                                <li>터미널에서 <code style="background:#e9ecef; padding:2px 6px; border-radius:4px; font-weight:bold; color:#d63384;">python extract_data.py</code> 명령어를 실행합니다.</li>
                                <li>생성된 <b>sql.md</b> 파일에 있는 INSERT 문을 복사하여 DB에서 실행합니다.</li>
                            </ol>
                        </div>
                        <div class="code-block" style="text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                            <div class="code-header">
                                <span class="code-lang">Python — extract_data.py</span>
                                <button class="copy-btn" onclick="copyFailCode()">복사</button>
                            </div>
                            <pre><code id="failCode" class="language-python">${PYTHON_SCRIPT.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                        </div>
                    </div>

                    <!-- STEP 3: 백엔드 구축 -->
                    <div class="step-box">
                        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; font-size: 18px;">
                            <span style="background:#2c3e50; color:#fff; padding:4px 10px; border-radius:4px; font-size:14px; margin-right:8px; vertical-align: text-bottom;">STEP 3</span>
                            백엔드 구현 가이드 (Spring Boot)
                        </h3>
                        <p style="margin-bottom: 20px; color: #555; line-height: 1.6;">
                            DB와 프론트엔드 연동을 위한 Spring Boot 백엔드 핵심 코드(Entity, Controller, Service 등)가 포함된 가이드 문서입니다.<br>
                            아래 버튼을 눌러 문서를 다운로드하고 프로젝트에 적용하세요.
                        </p>
                        <button onclick="downloadBackendGuide()" style="cursor:pointer; display:inline-block; text-decoration:none; background:#27ae60; color:white; padding:12px 24px; border-radius:30px; font-weight:bold; box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3); transition: transform 0.2s, box-shadow 0.2s; border:none; font-size:16px;">
                            📥 Backend Guide 다운로드 (.md)
                        </button>
                    </div>
                </div>
            `;
            
            // Prism 하이라이팅 적용
            if (window.Prism) {
                window.Prism.highlightElement(document.getElementById('ddlCode'));
                window.Prism.highlightElement(document.getElementById('failCode'));
            }
            
            // 전역 복사/다운로드 함수 등록
            window.copyDDL = () => {
                navigator.clipboard.writeText(ddlSql).then(() => alert('SQL 코드가 복사되었습니다.'));
            };
            window.copyFailCode = () => {
                navigator.clipboard.writeText(PYTHON_SCRIPT).then(() => alert('Python 코드가 복사되었습니다.'));
            };
            window.downloadBackendGuide = () => {
                const blob = new Blob([BACKEND_GUIDE], { type: 'text/markdown;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'backend_guide.md';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            };
            window.downloadStaticHtml = async () => {
                const urls = [
                    'java_spring_study_guide.html',
                    'https://kangbj1026.github.io/java_spring_study_guide.html'
                ];
                let content = null;
                for (const url of urls) {
                    try {
                        const response = await fetch(url);
                        if (response.ok) { content = await response.text(); break; }
                    } catch (e) { console.warn('Fetch failed:', url); }
                }
                if (content) {
                    const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url; a.download = 'java_spring_study_guide.html';
                    document.body.appendChild(a); a.click();
                    document.body.removeChild(a); URL.revokeObjectURL(url);
                } else {
                    alert('파일을 찾을 수 없습니다.');
                }
            };
        }
    }
}

function renderContent(categories) {
    const sidebarContent = document.getElementById('sidebar-content');
    const mainContent = document.getElementById('main-content');
    if (!sidebarContent || !mainContent) return;

    sidebarContent.innerHTML = '';
    mainContent.innerHTML = '';

    categories.forEach(cat => {
        // 사이드바 카테고리
        const navCat = document.createElement('div');
        navCat.className = 'nav-category';
        navCat.innerHTML = `<div class="nav-category-label">${cat.icon} ${cat.name}</div>`;
        
        // 메인 섹션
        const section = document.createElement('div');
        section.className = 'section';
        section.id = `cat-${cat.id}`;
        section.innerHTML = `
            <div class="section-header">
                <div class="section-icon" style="background:rgba(255,166,87,.12)">${cat.icon}</div>
                <div class="section-title">${cat.name}</div>
                <span class="section-badge ${cat.badgeColor}">${cat.topics.length} Topics</span>
            </div>
        `;

        cat.topics.forEach(topic => {
            // 사이드바 링크
            const link = document.createElement('a');
            link.className = 'nav-link';
            link.dataset.target = topic.scrollId;
            link.innerHTML = `<span class="dot ${cat.dotColor}"></span>${topic.title}`;
            link.onclick = (e) => {
                e.preventDefault();
                UI.scrollToTarget(topic.scrollId);
            };
            navCat.appendChild(link);

            // 메인 토픽 카드
            const card = createTopicCard(topic, cat.dotColor);
            section.appendChild(card);
        });

        sidebarContent.appendChild(navCat);
        mainContent.appendChild(section);
    });

    // 렌더링 후 진척도 초기 계산
    UI.updateProgress();
}

function createTopicCard(topic, colorClass) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.scrollId;
    card.dataset.title = topic.searchKeywords || '';

    const nonPoints = typeof topic.nonPoints === 'string' ? JSON.parse(topic.nonPoints || '[]') : (topic.nonPoints || []);
    const majorTable = typeof topic.majorTable === 'string' ? JSON.parse(topic.majorTable || 'null') : (topic.majorTable || null);
    const majorKeyPoints = typeof topic.majorKeyPoints === 'string' ? JSON.parse(topic.majorKeyPoints || '[]') : (topic.majorKeyPoints || []);

    card.innerHTML = `
        <div class="topic-header" onclick="toggleCard('${topic.scrollId}')">
            <div class="topic-checkbox" id="cb-${topic.scrollId}" onclick="event.stopPropagation();toggleCheck('${topic.scrollId}')"></div>
            <span class="topic-title">${topic.title}</span>
            <span class="topic-toggle c-orange">▼</span>
        </div>
        <div class="topic-body">
            <div class="exp-tabs">
                <button class="exp-tab non-major active" onclick="switchTab(this,'non','${topic.scrollId}')">👶 비전공자 설명</button>
                <button class="exp-tab major" onclick="switchTab(this,'maj','${topic.scrollId}')">🎓 전공자 설명</button>
            </div>
            <div class="exp-panel non-panel visible" data-panel="non-${topic.scrollId}">
                <div class="analogy-box">
                    <div class="analogy-label">${topic.nonAnalogyTitle || '💡 개념 이해'}</div>
                    <div class="analogy-text">${topic.nonAnalogyText || ''}</div>
                </div>
                <div class="simple-points">
                    ${nonPoints.map(p => `
                        <div class="simple-point"><span class="emoji">${p.emoji}</span> <span><b>${p.bold}</b> — ${p.text}</span></div>
                    `).join('')}
                </div>
            </div>
            <div class="exp-panel major-panel" data-panel="maj-${topic.scrollId}">
                ${topic.majorDesc ? `<p class="topic-desc">${topic.majorDesc}</p>` : ''}
                ${topic.majorCodeContent ? `
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">${topic.majorCodeHeader || 'Code'}</span><button class="copy-btn" onclick="copyCode(this)">복사</button></div>
                        <pre><code>${topic.majorCodeContent}</code></pre>
                    </div>
                ` : ''}
                ${majorTable ? `
                    <table>
                        <thead><tr>${majorTable.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                        <tbody>${majorTable.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
                    </table>
                ` : ''}
                ${majorKeyPoints.length > 0 ? `
                    <div class="key-points">
                        ${majorKeyPoints.map(kp => `<div class="key-point">${kp}</div>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    return card;
}

window.addEventListener('DOMContentLoaded', init);

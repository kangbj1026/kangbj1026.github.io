// 학습 가이드 공통 UI 및 로직 모듈

// 1. 카드 토글 (열기/닫기)
export function toggleCard(id) {
    const card = document.getElementById(id);
    if (card) {
        card.classList.toggle('open');
    }
}

// 2. 탭 전환 (비전공자/전공자)
export function switchTab(btn, mode, topicId) {
    const card = document.getElementById(topicId);
    if (!card) return;

    // 버튼 활성화 상태 변경
    const tabs = card.querySelectorAll('.exp-tab');
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    // 패널 표시 변경
    const panels = card.querySelectorAll('.exp-panel');
    panels.forEach(p => p.classList.remove('visible'));
    
    const targetPanel = card.querySelector(`[data-panel="${mode}-${topicId}"]`);
    if (targetPanel) targetPanel.classList.add('visible');
}

// 3. 전체 모드 전환 (전체 비전공자/전공자)
export function setGlobalMode(mode) {
    window.currentMode = mode;
    
    // 버튼 스타일 업데이트
    const btnNon = document.getElementById('btn-non');
    const btnMaj = document.getElementById('btn-maj');
    
    if (mode === 'non') {
        btnNon?.classList.add('active-non');
        btnMaj?.classList.remove('active-maj');
    } else {
        btnNon?.classList.remove('active-non');
        btnMaj?.classList.add('active-maj');
    }

    // 모든 카드에 반영
    document.querySelectorAll('.topic-card').forEach(card => {
        const topicId = card.id;
        const targetTab = card.querySelector(mode === 'non' ? '.non-major' : '.major');
        if (targetTab) switchTab(targetTab, mode, topicId);
    });
}

// 4. 검색 필터링
export function filterTopics(query) {
    const q = query.toLowerCase();
    const cards = document.querySelectorAll('.topic-card');

    cards.forEach(card => {
        const title = card.querySelector('.topic-title')?.innerText.toLowerCase() || "";
        const keywords = card.getAttribute('data-title')?.toLowerCase() || "";
        
        if (title.includes(q) || keywords.includes(q)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // 섹션 타이틀 처리
    document.querySelectorAll('.section').forEach(sec => {
        const hasVisible = Array.from(sec.querySelectorAll('.topic-card')).some(c => c.style.display !== 'none');
        sec.style.display = hasVisible ? 'block' : 'none';
    });
}

// 5. 학습 완료 체크 및 진척도 업데이트
export function toggleCheck(id) {
    const checkbox = document.getElementById(`cb-${id}`);
    const card = document.getElementById(id);
    if (!checkbox || !card) return;

    const isChecked = checkbox.classList.toggle('checked');
    card.classList.toggle('done', isChecked);
    
    localStorage.setItem(`check-${id}`, isChecked);
    updateProgress();
}

export function updateProgress() {
    const total = document.querySelectorAll('.topic-card').length;
    const checked = document.querySelectorAll('.topic-checkbox.checked').length;
    
    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');
    
    if (fill) fill.style.width = total > 0 ? `${(checked / total) * 100}%` : '0%';
    if (text) text.innerText = `${checked} / ${total} 완료`;
}

// 6. 초기 로드 시 체크 상태 복원
export function restoreCheckState() {
    document.querySelectorAll('.topic-card').forEach(card => {
        const id = card.id;
        const isChecked = localStorage.getItem(`check-${id}`) === 'true';
        if (isChecked) {
            const checkbox = document.getElementById(`cb-${id}`);
            if (checkbox) checkbox.classList.add('checked');
            card.classList.add('done');
        }
    });
    updateProgress();
}

// 7. 코드 복사 기능
export function copyCode(btn) {
    const pre = btn.parentElement.nextElementSibling;
    const code = pre.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const oldText = btn.innerText;
        btn.innerText = '복사됨!';
        setTimeout(() => btn.innerText = oldText, 2000);
    });
}

// 8. 스크롤 인디케이터 초기화
export function initScrollIndicator() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const indicator = document.getElementById('scroll-indicator');
        if (indicator) indicator.style.width = scrolled + '%';
    });
}

// 9. 정적 사이드바 링크 부드러운 스크롤 초기화
export function initSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// 10. 특정 요소로 부드러운 스크롤 이동
export function scrollToTarget(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

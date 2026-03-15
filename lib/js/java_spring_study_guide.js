// ── 전체 모드 전환 ──
let globalMode = 'non';

window.setGlobalMode = function(mode) {
    globalMode = mode;
    document.getElementById('btn-non').className = 'mode-btn' + (mode === 'non' ? ' active-non' : '');
    document.getElementById('btn-maj').className = 'mode-btn' + (mode === 'maj' ? ' active-maj' : '');

    document.querySelectorAll('.topic-card').forEach(card => {
        const nonBtn = card.querySelector('.exp-tab.non-major');
        const majBtn = card.querySelector('.exp-tab.major');
        const nonPanel = card.querySelector('[data-panel^="non-"]');
        const majPanel = card.querySelector('[data-panel^="maj-"]');
        if (!nonBtn) return;
        if (mode === 'non') {
            nonBtn.classList.add('active');
            majBtn.classList.remove('active');
            nonPanel.classList.add('visible');
            majPanel.classList.remove('visible');
        } else {
            majBtn.classList.add('active');
            nonBtn.classList.remove('active');
            majPanel.classList.add('visible');
            nonPanel.classList.remove('visible');
        }
    });
};

// ── 카드 내 탭 전환 ──
window.switchTab = function(btn, mode, cardId) {
    const card = document.getElementById(cardId);
    card.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    card.querySelector('[data-panel^="non-"]').classList.toggle('visible', mode === 'non');
    card.querySelector('[data-panel^="maj-"]').classList.toggle('visible', mode === 'maj');
};

// ── 카드 토글 ──
window.toggleCard = function(id) {
    document.getElementById(id).classList.toggle('open');
};

// ── 체크박스 (로컬 스토리지 연동) ──
let checked = new Set();
const STORAGE_KEY = 'java_spring_study_progress';

// 진행도 업데이트 함수
function updateProgressUI() {
    const total = document.querySelectorAll('.topic-card').length;
    const pct = Math.round(checked.size / total * 100);
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressText) progressText.textContent = checked.size + ' / ' + total + ' 완료 (' + pct + '%)';
}

// 저장 함수
function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
}

// 불러오기 함수
function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const savedArray = JSON.parse(saved);
        checked = new Set(savedArray);
        
        // UI에 반영
        checked.forEach(cardId => {
            const card = document.getElementById(cardId);
            const cb = document.getElementById('cb-' + cardId);
            if (card && cb) {
                card.classList.add('done');
                cb.classList.add('checked');
            }
        });
    }
    updateProgressUI();
}

window.toggleCheck = function(cardId) {
    const cb = document.getElementById('cb-' + cardId);
    const card = document.getElementById(cardId);
    
    if (checked.has(cardId)) {
        checked.delete(cardId);
        cb.classList.remove('checked');
        card.classList.remove('done');
    } else {
        checked.add(cardId);
        cb.classList.add('checked');
        card.classList.add('done');
    }
    
    saveProgress();
    updateProgressUI();
};

// ── 검색 ──
window.filterTopics = function(q) {
    q = q.toLowerCase();
    document.querySelectorAll('.topic-card').forEach(card => {
        card.style.display = card.dataset.title.toLowerCase().includes(q) ? '' : 'none';
    });
};

// ── 네비게이션 스크롤 ──
window.scrollToSection = function(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

// ── 초기화 실행 ──
document.addEventListener('DOMContentLoaded', () => {
    // 진행도 불러오기
    loadProgress();

    // 스크롤 인디케이터 설정
    const main = document.getElementById('main');
    if (main) {
        main.addEventListener('scroll', () => {
            const pct = (main.scrollTop / (main.scrollHeight - main.clientHeight)) * 100;
            const scrollIndicator = document.getElementById('scroll-indicator');
            if (scrollIndicator) scrollIndicator.style.width = pct + '%';
        });
    }
});

// ── Ctrl+Enter: 전체 카드 열기/닫기 ──
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'Enter') {
        document.querySelectorAll('.topic-card').forEach(c => c.classList.toggle('open'));
    }
});

// ── 코드 복사 ──
window.copyCode = function(btn) {
    const pre = btn.parentElement.nextElementSibling;
    const text = pre.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '복사됨!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
};
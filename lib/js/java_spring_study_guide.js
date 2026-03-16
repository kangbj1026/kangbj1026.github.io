import * as UI from './study_guide_ui.js';

// 전역 상태 및 함수 노출 (UI 모듈의 함수를 그대로 윈도우 객체에 연결)
window.currentMode = 'non';
window.toggleCard = UI.toggleCard;
window.switchTab = UI.switchTab;
window.setGlobalMode = UI.setGlobalMode;
window.filterTopics = UI.filterTopics;
window.toggleCheck = UI.toggleCheck;
window.copyCode = UI.copyCode;

document.addEventListener('DOMContentLoaded', () => {
    // 1. 체크 상태 복원 및 진척도 업데이트
    UI.restoreCheckState();
    
    // 2. 사이드바 링크 부드러운 스크롤 초기화
    UI.initSmoothScroll();

    // 3. 상단 스크롤 인디케이터 초기화
    UI.initScrollIndicator();
});

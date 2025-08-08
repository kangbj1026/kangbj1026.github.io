/**
 * 이 스크립트는 야간 모드와 흰색 모드를 전환하기 위한 토글 버튼을 만듭니다.
 * 또한 로컬 저장소에서 사용자의 선호도를 절약할 수 있습니다.
 */
document.addEventListener('DOMContentLoaded', () => 
{
    const toggleButton = document.createElement('button');
    toggleButton.id = 'night-mode-toggle';
    toggleButton.innerHTML = '🌙'; // Initial icon
    document.body.appendChild(toggleButton);

    const body = document.body;
    const savedMode = localStorage.getItem('themeMode');

    // 초기 모드 아이콘 및 테마 설정
    if (savedMode === 'night') 
    {
        body.classList.add('night-mode');
        toggleButton.innerHTML = '☀️'; // Sun icon for light mode
    }
    else 
    {
        toggleButton.innerHTML = '🌙'; // Moon icon for night mode
    }

    toggleButton.addEventListener('click', () =>
    {
        body.classList.toggle('night-mode');

        if (body.classList.contains('night-mode')) 
        {
            localStorage.setItem('themeMode', 'night');
            toggleButton.innerHTML = '☀️';
        }
        else 
        {
            localStorage.setItem('themeMode', 'white');
            toggleButton.innerHTML = '🌙';
        }
    });
});


const javaWords = [
    "Java", "Class", "Object", "Method", "Variable", "Loop", "Array", "String",
    "Integer", "Boolean", "Public", "Private", "Static", "Void", "Return",
    "If", "Else", "For", "While", "Do", "Switch", "Case", "Break", "Continue",
    "Try", "Catch", "Finally", "Throw", "Throws", "New", "This", "Super",
    "Extends", "Implements", "Interface", "Abstract", "Final", "Synchronized",
    "Volatile", "Transient", "Native", "Assert", "Enum", "Package", "Import",
    "System", "Out", "Print", "Line", "Main", "Args", "Exception", "Error",
    "Thread", "Runnable", "Concurrent", "Collection", "List", "Set", "Map",
    "Queue", "Stack", "Iterator", "Generic", "Annotation", "Reflection", "IO",
    "File", "Stream", "Socket", "Server", "Client", "Database", "SQL", "JDBC",
    "Servlet", "JSP", "JPA", "Spring", "Hibernate", "Maven", "Gradle", "JVM", "JDK",
    "JRE", "Bytecode", "Compiler", "Runtime", "Garbage", "Collector", "Heap",
    "Stack", "Polymorphism", "Inheritance", "Encapsulation", "Abstraction"
];

const javaWordsLower = javaWords.map(word => word.toLowerCase());

const targetArea = document.getElementById('target-area');
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score-display');
const checkButton = document.getElementById('check-button');
const clearButton = document.getElementById('clear-button');
const trashCan = document.getElementById('trash-can');
const cleanButton = document.getElementById('clean-button');
const correctWordsDisplay = document.getElementById('correct-words-display');


let score = 0;

let draggedElement = null;
let offsetX, offsetY; // Offset of mouse from element's top-left corner
let isDragging = false; // 드래그 중인지 여부를 나타내는 플래그
let isCleanButtonClicked = false; // Clean 버튼 클릭 여부를 나타내는 플래그

// 물리 시뮬레이션 변수
const gravity = 0.5; // 중력 가속도
const bounceFactor = 0.7; // 반발 계수 (0.0 ~ 1.0, 1.0에 가까울수록 더 높이 튕김)
const friction = 0.98; // 마찰 계수 (0.0 ~ 1.0, 1.0에 가까울수록 덜 멈춤)

// 각 글자의 물리 상태를 저장할 Map
const letterPhysics = new Map();

// 버튼 초기 숨김
checkButton.style.display = 'none';
clearButton.style.display = 'none';

gameContainer.addEventListener('click', (event) => {
    if (isDragging) { // 드래그가 방금 끝났다면 클릭 이벤트를 무시
        isDragging = false; // 플래그 초기화
        return;
    }

    if (isCleanButtonClicked) { // Clean 버튼이 클릭되었다면 알파벳 생성 방지
        isCleanButtonClicked = false; // 플래그 초기화
        return;
    }

    // 랜덤 알파벳 생성
    const randomCharCode = Math.floor(Math.random() * 26) + 97; // 'a' (97) to 'z' (122)
    const randomLetter = String.fromCharCode(randomCharCode);

    const letterSpan = document.createElement('span');
    letterSpan.classList.add('bouncing-rolling-letter');
    letterSpan.textContent = randomLetter; // 랜덤 알파벳 할당

    const containerRect = gameContainer.getBoundingClientRect();
    letterSpan.style.left = `${event.clientX - containerRect.left}px`;
    letterSpan.style.top = `${event.clientY - containerRect.top}px`; // 초기 top 위치 직접 설정

    gameContainer.appendChild(letterSpan);

    // 물리 시뮬레이션 시작
    startBouncing(letterSpan);

    // 드래그 기능 추가
    letterSpan.addEventListener('mousedown', handleDragStart);
    letterSpan.addEventListener('touchstart', handleDragStart);

    // 새로 추가: 글자 클릭 시 랜덤 알파벳으로 변경
    letterSpan.addEventListener('click', (e) => {
        e.stopPropagation(); // gameContainer의 클릭 이벤트가 발생하지 않도록 중단
        if (isDragging) { // 드래그 중이었다면 클릭 이벤트 무시
            isDragging = false; // 플래그 초기화
            return;
        }
        const newRandomCharCode = Math.floor(Math.random() * 26) + 97;
        letterSpan.textContent = String.fromCharCode(newRandomCharCode);
    });
});

gameContainer.addEventListener('mousemove', handleDrag);
gameContainer.addEventListener('touchmove', handleDrag);

gameContainer.addEventListener('mouseup', handleDragEnd);
gameContainer.addEventListener('touchend', handleDragEnd);

function handleDragStart(e) {
    e.preventDefault(); // 기본 터치/마우스 이벤트 방지
    draggedElement = this; // 'this'는 이벤트 리스너가 추가된 letterSpan
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;

    offsetX = clientX - draggedElement.getBoundingClientRect().left;
    offsetY = clientY - draggedElement.getBoundingClientRect().top;
    draggedElement.style.cursor = 'grabbing';
    isDragging = false; // 새로운 드래그 시작 시 플래그 초기화

    // 드래그 시작 시 물리 시뮬레이션 일시 중지
    if (letterPhysics.has(draggedElement)) {
        letterPhysics.get(draggedElement).isDragging = true;
    }
}

function handleDrag(e) {
    if (draggedElement) {
        e.preventDefault(); // 기본 터치/마우스 이벤트 방지
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;

        const containerRect = gameContainer.getBoundingClientRect();
        let newX = clientX - containerRect.left - offsetX;
        let newY = clientY - containerRect.top - offsetY;

        const maxX = gameContainer.offsetWidth - draggedElement.offsetWidth;
        const maxY = gameContainer.offsetHeight - draggedElement.offsetHeight;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        draggedElement.style.left = `${newX}px`;
        draggedElement.style.top = `${newY}px`;
        isDragging = true; // 마우스가 움직이면 드래그 중으로 간주
    }
}

function handleDragEnd() {
    if (draggedElement) {
        const currentDraggedElement = draggedElement; // 참조 저장
        currentDraggedElement.style.cursor = 'grab';

        // 글자가 target-area 내부에 있는지 확인
        const targetAreaRect = targetArea.getBoundingClientRect();
        const letterRect = currentDraggedElement.getBoundingClientRect();

        const isInsideTargetArea = (
            letterRect.left >= targetAreaRect.left &&
            letterRect.right <= targetAreaRect.right &&
            letterRect.top >= targetAreaRect.top &&
            letterRect.bottom <= targetAreaRect.bottom
        );

        // 글자가 trash-can 내부에 있는지 확인
        const trashCanRect = trashCan.getBoundingClientRect();
        const isInsideTrashCan = (
            letterRect.left >= trashCanRect.left &&
            letterRect.right <= trashCanRect.right &&
            letterRect.top >= trashCanRect.top &&
            letterRect.bottom <= trashCanRect.bottom
        );

        if (isInsideTargetArea) {
            // target-area 내부에 놓이면 고정
            if (letterPhysics.has(currentDraggedElement)) {
                letterPhysics.get(currentDraggedElement).isFixed = true; // 고정 상태 플래그
                letterPhysics.get(currentDraggedElement).velocityY = 0;
                letterPhysics.get(currentDraggedElement).velocityX = 0;
            }
            currentDraggedElement.style.cursor = 'default'; // 드래그 불가능하게
            currentDraggedElement.style.position = 'static'; // target-area 내에서 흐름에 맞게 배치
            currentDraggedElement.style.transform = 'none'; // roll 애니메이션 제거
            currentDraggedElement.classList.remove('bouncing-rolling-letter');
            targetArea.appendChild(currentDraggedElement); // target-area로 이동

            // 버튼 표시
            checkButton.style.display = 'inline-block';
            clearButton.style.display = 'inline-block';

        } else if (isInsideTrashCan) {
            // trash-can 내부에 놓이면 삭제
            currentDraggedElement.remove();
            letterPhysics.delete(currentDraggedElement); // 물리 상태에서도 제거
        } else {
            // target-area 및 trash-can 외부에 놓이면 물리 시뮬레이션 재개
            if (letterPhysics.has(currentDraggedElement)) {
                letterPhysics.get(currentDraggedElement).isDragging = false;
                letterPhysics.get(currentDraggedElement).velocityY = 0; // 초기 수직 속도 0
                letterPhysics.get(currentDraggedElement).velocityX = 0; // 초기 수평 속도 0
            }
            startBouncing(currentDraggedElement); // 다시 튕김 시뮬레이션 시작
        }

        draggedElement = null;
    }
}

function resetTargetAreaLetters() {
    const lettersInTargetArea = Array.from(targetArea.children).filter(child => child.tagName === 'SPAN');
    lettersInTargetArea.forEach(letterSpan => {
        // 현재 위치를 gameContainer 기준으로 계산
        const currentLeft = letterSpan.offsetLeft + targetArea.offsetLeft;
        const currentTop = letterSpan.offsetTop + targetArea.offsetTop;

        // targetArea에서 제거하고 gameContainer로 다시 추가
        letterSpan.remove();
        gameContainer.appendChild(letterSpan);

        // 위치 재설정
        letterSpan.style.position = 'absolute';
        letterSpan.style.left = `${currentLeft}px`;
        letterSpan.style.top = `${currentTop}px`;
        letterSpan.style.transform = 'none'; // 혹시 모를 transform 제거

        // 물리 시뮬레이션 재개
        letterSpan.classList.add('bouncing-rolling-letter');
        if (letterPhysics.has(letterSpan)) {
            letterPhysics.get(letterSpan).isFixed = false;
            letterPhysics.get(letterSpan).isDragging = false;
            letterPhysics.get(letterSpan).velocityY = 0; // 초기 속도 0으로 시작
            letterPhysics.get(letterSpan).velocityX = (Math.random() - 0.5) * 5; // 무작위 수평 속도
            letterPhysics.get(letterSpan).currentY = currentTop;
            letterPhysics.get(letterSpan).currentX = currentLeft;
        }
        startBouncing(letterSpan);
    });
    // 버튼 숨기기
    checkButton.style.display = 'none';
    clearButton.style.display = 'none';
}

checkButton.addEventListener('click', () => {
    let formedWord = '';
    const lettersInTargetArea = Array.from(targetArea.children).filter(child => child.tagName === 'SPAN');
    lettersInTargetArea.forEach(letterSpan => {
        formedWord += letterSpan.textContent;
    });

    if (javaWordsLower.includes(formedWord.toLowerCase())) {
        const children = correctWordsDisplay.childNodes; // 모든 자식 노드
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeType === 1) { // 요소 노드만
                console.log(children[i].textContent);
                if (children[i].textContent.includes(formedWord)) {
                    alert(`이미 정답이 존재!! ${formedWord}`);
                    return;
                }
            }
        }
        
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        // 정답일 경우 글자들을 점수 밑으로 날리기
        const scoreRect = scoreDisplay.getBoundingClientRect();
        lettersInTargetArea.forEach((letterSpan, index) => {
            // 현재 위치를 gameContainer 기준으로 계산
            const currentLeft = letterSpan.offsetLeft + targetArea.offsetLeft;
            const currentTop = letterSpan.offsetTop + targetArea.offsetTop;

            letterSpan.remove();
            gameContainer.appendChild(letterSpan);

            letterSpan.style.position = 'absolute';
            letterSpan.style.left = `${currentLeft}px`;
            letterSpan.style.top = `${currentTop}px`;
            letterSpan.style.transform = 'none'; // 기존 transform 제거

            // 물리 시뮬레이션 중지
            if (letterPhysics.has(letterSpan)) {
                letterPhysics.get(letterSpan).isFixed = true; // 고정 상태로 설정하여 물리 시뮬레이션 중지
            }

            // Score 표시 영역의 중앙으로 이동하는 벡터 계산
            const targetX = scoreRect.left + scoreRect.width / 2 - (currentLeft + letterSpan.offsetWidth / 2);
            const targetY = scoreRect.top + scoreRect.height / 2 - (currentTop + letterSpan.offsetHeight / 2);

            // fly-to-score 애니메이션 적용
            letterSpan.style.setProperty('--dx', `${targetX}px`);
            letterSpan.style.setProperty('--dy', `${targetY}px`);
            letterSpan.style.animation = `fly-to-score 1s ease-out forwards ${index * 0.05}s`;
            letterSpan.addEventListener('animationend', () => {
                letterSpan.remove(); // 애니메이션 끝난 후 DOM에서 제거
            }, { once: true });
        });
        const originalWordIndex = javaWordsLower.indexOf(formedWord.toLowerCase());
        const displayWord = originalWordIndex !== -1 ? javaWords[originalWordIndex] : formedWord; // 원래 대소문자 형태 사용
        const wordDiv = document.createElement('div');
        wordDiv.textContent = displayWord;
        correctWordsDisplay.appendChild(wordDiv);
        alert(`정답! ${formedWord}`);
    } else {
        alert(`오답! ${formedWord}`);
        resetTargetAreaLetters(); // 오답이면 글자들을 다시 떨어뜨림
    }

    // 버튼 숨기기 (정답인 경우 애니메이션이 끝난 후 숨겨지므로 여기서는 필요 없음)
    // checkButton.style.display = 'none';
    // clearButton.style.display = 'none';
});

clearButton.addEventListener('click', () => {
    resetTargetAreaLetters(); // X 버튼 클릭 시 글자들을 다시 떨어뜨림
});

cleanButton.addEventListener('click', () => {
    isCleanButtonClicked = true; // Clean 버튼 클릭 시 플래그 설정
    const allLetters = document.querySelectorAll('.bouncing-rolling-letter');
    allLetters.forEach(letter => {
        letter.remove();
        letterPhysics.delete(letter);
    });
    checkButton.style.display = 'none';
    clearButton.style.display = 'none';
});

function startBouncing(letterElement) {
    let velocityY = 0; // 초기 수직 속도
    let velocityX = (Math.random() - 0.5) * 5; // 초기 수평 속도 (무작위)
    let currentY = letterElement.offsetTop;
    let currentX = letterElement.offsetLeft;

    // 물리 상태 저장
    letterPhysics.set(letterElement, { velocityY, velocityX, currentY, currentX, isDragging: false, isFixed: false });

    function animate() {
        const physicsState = letterPhysics.get(letterElement);
        if (!physicsState || physicsState.isDragging || physicsState.isFixed) {
            return; // 드래그 중이거나 고정되었거나 요소가 없으면 애니메이션 중지
        }

        // 중력 적용
        physicsState.velocityY += gravity;
        physicsState.currentY += physicsState.velocityY;
        physicsState.currentX += physicsState.velocityX;

        // 바닥 충돌 처리
        const floorY = gameContainer.offsetHeight - letterElement.offsetHeight;
        if (physicsState.currentY >= floorY) {
            physicsState.currentY = floorY; // 바닥에 고정
            physicsState.velocityY *= -bounceFactor; // 속도 반전 및 감쇠
            physicsState.velocityX *= friction; // 수평 마찰 적용

            // 튕김이 거의 멈췄으면 수직 이동 멈춤
            if (Math.abs(physicsState.velocityY) < 1 && Math.abs(physicsState.velocityX) < 0.5) {
                physicsState.velocityY = 0;
                physicsState.velocityX = 0;
                return; // 애니메이션 루프 종료
            }
        }

        // 좌우 벽 충돌 처리
        const wallX = gameContainer.offsetWidth - letterElement.offsetWidth;
        if (physicsState.currentX <= 0 || physicsState.currentX >= wallX) {
            physicsState.velocityX *= -1; // 속도 반전
            physicsState.currentX = Math.max(0, Math.min(physicsState.currentX, wallX)); // 경계 안으로 고정
        }

        letterElement.style.top = `${physicsState.currentY - 15}px`;
        letterElement.style.left = `${physicsState.currentX}px`;

        requestAnimationFrame(animate);
    }

    // 기존 CSS 애니메이션 제거 (falling-letter만 제거)
    letterElement.style.animation = 'none';
    letterElement.classList.remove('falling-letter');
    letterElement.classList.add('bouncing-rolling-letter'); // roll 애니메이션을 위해 추가

    // 초기 속도 설정 후 애니메이션 시작
    requestAnimationFrame(animate);
}
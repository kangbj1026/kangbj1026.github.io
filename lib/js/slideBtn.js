const articleSecond = document.querySelector(".articleSecond");
// 슬라이크 전체 크기(width 구하기)
let slideWidth = articleSecond.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".s_div_prev_button");
const nextBtn = document.querySelector(".s_div_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".slide_item");

// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".s_div_pagination");
for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".s_div_pagination > li");

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
	if (currSlide >= maxSlide)
	{
		currSlide = 1;
	}
	else
	{
		currSlide++;
	}
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    addEventListenerClick(nextBtn,currSlide,maxSlide,slideWidth,slideItems,paginationItems);
});
prevBtn.addEventListener("click", () => {
	if (currSlide == 1)
	{
		currSlide = maxSlide;
	}
	else
	{
		currSlide--;
	}
    addEventListenerClick(prevBtn,currSlide,maxSlide,slideWidth,slideItems,paginationItems);
});

// 브라우저 화면이 조정될 때 마다 slideWidth 를 변경하기 위해
window.addEventListener("resize", () => {
    slideWidth = articleSecond.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
    paginationItems[i].addEventListener("click", () => {
        currSlide = i + 1;
        let offset = slideWidth * (currSlide - 1);
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    });
}

function addEventListenerClick(btn,currSlide,maxSlide,slideWidth,slideItems,paginationItems) {

    if (btn.classList.item(0) == "s_div_next_button") {
        // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
        if (currSlide <= maxSlide) {
            // 슬라이드를 이동시키기 위한 offset 계산
            currSlideOffSet(slideWidth, currSlide, slideItems, paginationItems);
        }
		
    } else {

		if (currSlide > 0) {
            currSlideOffSet(slideWidth, currSlide, slideItems, paginationItems);
        }
    }
}
function currSlideOffSet(slideWidth,currSlide,slideItems,paginationItems) {
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((a) => {
        a.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
	if (paginationItems[currSlide - 1])
	{
		paginationItems[currSlide - 1].classList.add("active");
	}
}
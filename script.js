const items = [
    { category: "점심 메뉴", name: "매콤한 제육볶음" },
    { category: "점심 메뉴", name: "뜨끈한 쌀국수" },
    { category: "점심 메뉴", name: "간편한 편의점 도시락" },
    { category: "할 일", name: "30분 동안 산책하기" },
    { category: "할 일", name: "밀린 방 청소하기" },
    { category: "할 일", name: "보고 싶었던 영화 보기" },
    { category: "간식", name: "달콤한 아이스 아메리카노" },
    { category: "간식", name: "바삭한 초코 쿠키" }
];

const categoryDisplay = document.getElementById('category');
const recommendationDisplay = document.getElementById('recommendation');
const btn = document.getElementById('random-btn');

btn.addEventListener('click', () => {
    // 버튼 클릭 시 애니메이션 효과 (선택사항)
    recommendationDisplay.style.opacity = 0;

    setTimeout(() => {
        // 랜덤 인덱스 생성
        const randomIndex = Math.floor(Math.random() * items.length);
        const selected = items[randomIndex];

        // 화면에 표시
        categoryDisplay.textContent = selected.category;
        recommendationDisplay.textContent = selected.name;
        recommendationDisplay.style.opacity = 1;
    }, 200);
});
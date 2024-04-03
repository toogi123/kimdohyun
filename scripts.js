// script.js

// YouTube 링크로 이동하는 함수
function redirectToYouTube() {
    window.open('https://www.youtube.com/watch?v=jUmeh5yvy0M', '_blank');
}

// 갤러리 섹션으로 스크롤 이동하는 함수
function scrollToGallery() {
    const gallerySection = document.getElementById('gallery');
    const yOffset = -100; // 갤러리 섹션보다 위쪽으로 100px 이동
    const y = gallerySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// 문서가 로드되면 이벤트 핸들러 추가
document.addEventListener('DOMContentLoaded', function() {
    // 엉덩이 버튼에 클릭 이벤트 핸들러 추가
    document.querySelector('.nav-btn:nth-child(3)').addEventListener('click', scrollToGallery);

    // 똥 버튼에 클릭 이벤트 핸들러 추가
    document.querySelector('.nav-btn:nth-child(1)').addEventListener('click', redirectToYouTube);

    // 방구 버튼에 클릭 이벤트 핸들러 추가
    document.querySelector('.nav-btn:nth-child(2)').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// script.js

// 초기 빅 사진 URL 저장
let bigImageSrc = '';

// 스몰 사진 클릭 시 빅 사진으로 바꾸는 함수
function changeBigImage(event) {
    const smallImage = event.target; // 클릭된 스몰 사진 요소
    const bigImage = document.getElementById('big'); // 빅 사진 요소

    // 클릭된 스몰 사진의 src 속성을 빅 사진의 src 속성으로 설정
    bigImage.src = smallImage.src;

    // 클릭된 스몰 사진의 alt 속성을 빅 사진의 alt 속성으로 설정
    bigImage.alt = smallImage.alt;
}

// 문서가 로드되면 이벤트 핸들러 추가
document.addEventListener('DOMContentLoaded', function() {
    // 초기 빅 이미지 URL 저장
    bigImageSrc = document.getElementById('big').src;

    // 모든 스몰 사진 요소들을 선택하여 클릭 이벤트 핸들러 추가
    const smallImages = document.querySelectorAll('.small');
    smallImages.forEach(function(image) {
        image.addEventListener('click', changeBigImage);
    });
    
    // 빅 사진 클릭 시 초기 빅 이미지로 변경하는 이벤트 핸들러 추가
    const bigImage = document.getElementById('big');
    bigImage.addEventListener('click', function() {
        bigImage.src = bigImageSrc;
    });
});

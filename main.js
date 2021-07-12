
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 3000 // 3초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  pagination: { 
    el: '.promotion .swiper-pagination', 
    clickable: true 
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', 
    nextEl: '.promotion .swiper-next' 
  } 
})


// modal
function button1_click() {
  console.log("버튼1을 누르셨습니다.");
}

function openModal(){
  $("#modal").show();
}

function closeModal(){
  $("#modal").hide();
}

function test1(){
  alert("test1");
}

function test2(){
  alert("test2");
}
const toTopEl =document.querySelector('#to-top');
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})
// 아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
// 태그명이 acrticle인 요소를 찾아서 저장
const article = circle.querySelectorAll("article");

// article의 전체 갯수만큼 반복을 돌면서 mouseenter, louseleave 이벤트 연결
for (let el of article){
  // article에 마우스를 올리면 부모인 #circle의 animation-plat-state값을 "paused"로 변경
  el.addEventListener("mouseenter", e => {
    circle.style.animationPlayState = "paused";
  });

  // article에서 마우스가 떠나면 부모인 #circle의 animation-play-state 값을 "running"으로 변경
  el.addEventListener("mouseleave", e=> {
    circle.style.animationPlayState = "running";
  });
}
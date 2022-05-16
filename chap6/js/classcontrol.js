const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");

// 태그에 인라인 형태로 삽입된 스타일 구문은 우선순위가 높아서
// 잘못하면 기존 css 파일에 적용된 스타일 우선순위에 문제가 발생할 수도 있음
// wrap.addEventListener("click", () => {
//   box.style.backgroundColor = "hotpink";
// });

// 자바스크립트로 클래스 제어하기 2
// 스클립트 활용해서 클릭시 클래스에 on추가
// wrap.addEventListener("click", () => {
//   wrap.classList.add("on");
// });

// 자바스크립트로 클래스 제어하기 3
// on박스가 있으면 treu, 없으면 false를 반환
// wrap.addEventListener("click", () => {
//   let isOn = wrap.classList.contains("on"); 
//   console.log(isOn);
// });

// 자바스크립트로 클래스 제어하기 4
// on박스가 있으면 treu, 없으면 false를 반환
// 이후 이 요소에 클래스 on을 추가해주는 구문 
// wrap.addEventListener("click", () => {
//   let isOn = wrap.classList.contains("on"); 
//   console.log(isOn);
//   wrap.consoleList.add(on);
// });

// 자바스크립트로 클래스 제어하기 5
// 조건문을 사용해 클래스 on의 유무에 따라 분기 처리
// wrap.addEventListener("click", () => {
//   let isOn = wrap.classList.contains("on"); 
//   console.log(isOn);
  
//   if(isOn) {
//     wrap.classList.remove("on");
//   }else {
//     wrap.classList.add("on");
//   }
// });

// 자바스크립트로 클래스 제어하기 6
// toggle -> 선택한 요소에 클래스 있으면 제거해주고 없으면 추가하라는 의미
wrap.addEventListener("click", () => {
  wrap.classList.toggle("on");
});

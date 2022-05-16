// 요소 여러개 선택하기
// const items = document.querySelectorAll("#wrap article");
// console.log(items);

// for문 사용하기 1)
// const items = document.querySelectorAll("#wrap article");
// for (let item of items) {
//   console.log(item);
// }

// for문 사용하기 2)
const items = document.querySelectorAll("#wrap article");
for (let i=0; i<items.length; i++) {
  console.log(items[i]);
}
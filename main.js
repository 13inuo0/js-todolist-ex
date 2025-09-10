// window.addEventListener("load", function () {});
// 모든 이미지 HTML 문서 동영상을 모든 리소스가 로드한 후 실행
// window.addEventListener("DOMContentLoaded", function () {});
// HTML문서 완료후 실행 (이미지 영상 기다리지 않음)
// window.onload = function () {
//   alert("a");
// };

window.addEventListener("DOMContentLoaded", function () {
  const btn = this.document.getElementById("btn");
  const inputField = this.document.querySelector(".inputField");
  const addValue = this.document.querySelector("#addValue");
  const result = this.document.querySelector("#result");
  const allclear = this.document.querySelector("#allClear");
  inputField.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoValue = addValue.value.trim();
    // console.log(todoValue);
    // 입력창에 내용을 입력하지 않았을 때
    if (todoValue === "") {
      alert("내용을 입력해주세요!");
      return; //함수 종료
    }
    // li 만들기
    const list = document.createElement("li");
    console.log(list);
    list.innerHTML = `${todoValue} <button class="del-btn">X</button>`;
    result.append(list);
    // 입력된 내용 빈 문자열로 만들기
    addValue.value = "";
    // 입력한 포커스
    addValue.focus();
    // 삭제하기
    const delBtn = document.querySelector(".del-btn");
    delBtn.addEventListener("click", function () {
      // console.log(e.target.parentElement);
      list.remove();
    });
    // li 클릭시 완료 기능
    list.addEventListener("click", function () {
      //   list.classList.toggle("completed");
      if (list.classList.contains("completed")) {
        list.remove();
      } else {
        list.classList.add("completed");
      }
    });
  });
  //   전체삭제
  allclear.addEventListener("click", function () {
    // result.innerHTML = ""
    if (result.innerHTML === "") {
      alert("삭제할  목록이 없습니다.");
    } else {
      result.innerHTML === "";
    }
  });
});

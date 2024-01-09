const addForm = document.querySelector(".add");
const list = document.querySelector(".memos");
const alertmsg = document.querySelector("#alertmsg");
const search = document.querySelector(".search input");

const saveMemo = (memotext) => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${memotext}</span><i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
  addForm.add.value = "";
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const memo = addForm.add.value;

  //비어있는 메모 방지
  if (memo) {
    saveMemo(memo);
    alertmsg.classList.add("hidden");
  } else {
    alertmsg.classList.remove("hidden");
  }
});

// 메모 삭제
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterMemo = (memo) => {
  Array.from(list.children).forEach((memotext) => {
    const hasMemo = memotext.textContent.includes(memo);
    memotext.classList.toggle("filtered", !hasMemo);
  });
  //   Array.from(list.children)
  //     // 검색어가 포함되지 않은 것
  //     .filter((memotext) => !memotext.textContent.includes(memo))
  //     // 을 지워준다
  //     .forEach((memotext) => memotext.classList.add("filtered"));

  //   Array.from(list.children)
  //     .filter((memotext) => memotext.textContent.includes(memo))
  //     .forEach((memotext) => memotext.classList.remove("filtered"));
};

// 메모 검색
search.addEventListener("keyup", (e) => {
  const searchText = search.value;
  list.innerHTML;
  filterMemo(e.target.value);
});

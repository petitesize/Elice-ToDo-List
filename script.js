const addForm = document.querySelector(".add");
const list = document.querySelector(".memos");
const alertmsg = document.querySelector("#alertmsg");

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

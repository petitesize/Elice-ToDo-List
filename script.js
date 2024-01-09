const addForm = document.querySelector(".add");
const list = document.querySelector(".memos");

const saveMemo = (memotext) => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${memotext}</span><i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const memo = addForm.add.value;
  saveMemo(memo);
});

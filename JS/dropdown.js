const profileButton = document.querySelector(".header__container-avatar");
profileButton.addEventListener("click", function () {
  const dropdown = document.querySelector(".header__dropdown");
  dropdown.classList.toggle("isOpen");
});

const searchButton = document.querySelector(".header__search-button");
searchButton.addEventListener("click", function () {
  const input = document.querySelector(".header__search-wrap");
  input.classList.toggle("isOpen");
});

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", function () {
  const open = document.querySelector(".overlay");
  open.classList.add("open");
});

const modalClose = document.querySelector(".modal__close");
modalClose.addEventListener("click", function () {
  const close = document.querySelector(".overlay");
  close.classList.remove("open");
});

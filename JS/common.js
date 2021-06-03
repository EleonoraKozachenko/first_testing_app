function redirect(path) {
  window.location.href = `/ELeonoraWork/Brain/testing_app${path}.html`;
}

const link = document.querySelector(".aside__link");
link &&
  link.addEventListener("click", () => {
    link.classList.toggle("active");
  });

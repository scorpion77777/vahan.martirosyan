function updateList() {
  const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });

  document
    .querySelectorAll(".selected-circle")
    .forEach((c) => c.classList.remove("selected-circle"));

  document
    .querySelectorAll(".nav-dot")
    [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add(
      "selected-circle"
    );
}

//Mobile menu

updateList();
window.addEventListener("scroll", () => {
  updateList();
});

// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

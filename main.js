window.onload = function() {
  const buttons = document.querySelectorAll("#main-menu button");
  const pages = document.querySelectorAll(".page");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const pageToShow = button.getAttribute("data-page");

      pages.forEach(page => {
        if (page.id === pageToShow) {
          page.classList.remove("hidden");
        } else {
          page.classList.add("hidden");
        }
      });
    });
  });
};

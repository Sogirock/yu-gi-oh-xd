document.querySelectorAll("#main-menu button").forEach(button => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.page;

    // Cache toutes les pages
    document.querySelectorAll(".page").forEach(page => {
      page.classList.add("hidden");
    });

    // Affiche la page sélectionnée
    document.getElementById(pageId).classList.remove("hidden");
  });
});

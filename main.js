window.onload = function() {
  // 1. On récupère tous les boutons du menu
  const buttons = document.querySelectorAll("#main-menu button");
  
  // 2. On récupère toutes les pages (les divs avec la classe 'page')
  const pages = document.querySelectorAll(".page");

  // 3. Pour chaque bouton, on ajoute un écouteur d'événement au clic
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // 4. On récupère l'ID de la page à afficher depuis l'attribut 'data-page' du bouton
      const pageId = btn.getAttribute("data-page");

      // 5. On cache toutes les pages (en ajoutant la classe 'hidden')
      pages.forEach(p => p.classList.add("hidden"));

      // 6. On affiche uniquement la page qui correspond au bouton cliqué (en retirant la classe 'hidden')
      const page = document.getElementById(pageId);
      if (page) page.classList.remove("hidden");
    });
  });
};

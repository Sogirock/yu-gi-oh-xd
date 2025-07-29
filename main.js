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
  // Affiche les cartes dans la page "cartes"
function afficherCartes() {
  const container = document.getElementById("cartes");
  container.innerHTML = "<h2>Voici tes cartes possédées :</h2>";

  cards.forEach(carte => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("carte");

    cardDiv.innerHTML = `
      <img src="${carte.image}" alt="${carte.nom}" />
      <h3>${carte.nom}</h3>
      <p>Type : ${carte.type}</p>
      ${carte.type === "monstre" ? `<p>ATK : ${carte.atk} | DEF : ${carte.def}</p>` : ""}
      ${carte.effet ? `<p><em>${carte.effet}</em></p>` : ""}
    `;

    container.appendChild(cardDiv);
  });
}

document.addEventListener("DOMContentLoaded", afficherCartes);

});

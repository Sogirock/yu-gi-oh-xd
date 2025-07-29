import { cards } from "./data/cards.js";

function renderCards() {
  const container = document.getElementById("cartes");
  container.innerHTML = "";

  cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    cardDiv.innerHTML = `
      <img src="${card.image}" alt="${card.nom}" />
      <h3>${card.nom}</h3>
      <p>Type : ${card.type}</p>
      ${card.type === "monstre" ? `<p>ATK : ${card.atk} / DEF : ${card.def}</p>` : ""}
      <p>${card.effet || ""}</p>
    `;

    container.appendChild(cardDiv);
  });
}

document.querySelectorAll("#main-menu button").forEach(button => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.page;

    // Cache toutes les pages
    document.querySelectorAll(".page").forEach(page => {
      page.classList.add("hidden");
    });

    // Affiche la page sélectionnée
    document.getElementById(pageId).classList.remove("hidden");

    // Si page "cartes", affiche les cartes
    if (pageId === "cartes") {
      renderCards();
    }
  });
});

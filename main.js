import { cards } from "./data/cards.js";

let playerDeck = [];

window.onload = () => {
  showPage("shop");
};

window.showPage = function (pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");

  if (pageId === "deck") {
    renderAvailableCards();
    renderPlayerDeck();
  }
};

function renderAvailableCards() {
  const container = document.getElementById("available-cards");
  container.innerHTML = "";

  cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
      <img src="${card.image}" alt="${card.nom}" />
      <h3>${card.nom}</h3>
      <p>Type: ${card.type}</p>
      ${card.type === "monstre" ? `<p>ATK: ${card.atk} / DEF: ${card.def}</p>` : ""}
      <p>${card.effet || ""}</p>
      <button>Ajouter</button>
    `;

    cardDiv.querySelector("button").addEventListener("click", () => addToDeck(card));
    container.appendChild(cardDiv);
  });
}

function addToDeck(card) {
  const count = playerDeck.filter(c => c.id === card.id).length;

  if (playerDeck.length >= 40) {
    alert("Ton deck est plein (40 cartes max) !");
    return;
  }

  if (count >= 3) {
    alert("Tu ne peux pas avoir plus de 3 exemplaires de cette carte !");
    return;
  }

  playerDeck.push(card);
  renderPlayerDeck();
}

function renderPlayerDeck() {
  const container = document.getElementById("player-deck");
  container.innerHTML = "";

  playerDeck.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
      <img src="${card.image}" alt="${card.nom}" />
      <h3>${card.nom}</h3>
      <p>Type: ${card.type}</p>
      <button>Retirer</button>
    `;

    cardDiv.querySelector("button").addEventListener("click", () => {
      playerDeck.splice(index, 1);
      renderPlayerDeck();
    });

    container.appendChild(cardDiv);
  });

  document.getElementById("deck-count").textContent = `${playerDeck.length} / 40 cartes`;
}

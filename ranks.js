"use strict";

const playerNames = [
  "Amalia3",
  "Fotsis",
  "Juohmaru",
  "McKueen",
  "Qn Khaleesi",
  "SenoritaMeli",
  "Vetchris",
  "wwooddyy",
  "ZitaNitsa",
  "12john34",
  "aleoo22",
  "BABIS o FLU",
  "Barovios83",
  "BatGoonie69",
  "Beren2112",
  "BlackFlower1",
  "Capucho",
  "Crepoulis",
  "D1VER",
  "Dr Kogiot",
  "EragonCY",
  "FILIPPOSCY",
  "I   Ajax",
  "Lady B",
  "Lady Nantia",
  "lord exarxos",
  "Loukrittia",
  "Mpoumpou",
  "Mrs Foxx",
  "okounoupis",
  "PetrosK7",
  "Scotos",
  "Selinora",
  "Sir Mak",
  "Tazious13",
  "Thanos93GR",
  "TheButcher13",
  "Vasilissa21",
  "vourakla",
  "1BigBadWolf7",
  "Aswtos",
  "Aeroxol",
  "Afthartos",
  "Aimotrafis",
  "Antys 00357",
  "Arkidooo",
  "B1ack eagles",
  "Bellac1ao",
  "Ksekatinaki",
  "Burn out 3",
  "ChiefKostas",
  "chocolatess",
  "Deadly7Sins",
  "Deathito",
  "Getsuka",
  "GR POWER 13",
  "Holly driver",
  "Jimmys",
  "John8 GR",
  "JokerGR27",
  "Karaolaki",
  "Lakonas07",
  "Larnakiotis",
  "Lord Sak7",
  "m1st",
  "Nikolaos13",
  "Nikos9",
  "Palaloss",
  "panagosjunox",
  "Partig1ano",
  "Pirgos",
  "provataki",
  "Salamadras78",
  "Shipboy",
  "Sir Arxontas",
  "Sir Panaghs",
  "Sixaman",
  "skoudouflis",
  "Sokolatenios",
  "Sotiris7",
  "T Angel",
  "teo79",
  "Tifano",
  "TNG A3 GR",
  "To vouno",
  "WhiteFlower1",
  "xMRTx",
  "xXLupenXx",
  "simpathelab",
  "Prick Pan",
  "Cavouras",
];
playerNames.sort();
const divPlayerNames = document.querySelector(`.player-names`);
const calcRanks = document.querySelector(`.calc-ranks`);

for (let i = 0; i < playerNames.length; i++) {
  const input = document.createElement("input");
  const label = document.createElement("label");
  const div = document.createElement("div");
  input.type = "checkbox";
  input.classList.add(`player-${i}`, "form-check-input");
  input.name = `player${i}`;
  label.classList.add("form-check-label");
  div.classList.add(
    `div${i}`,
    "d-flex",
    "flex-column",
    "align-items-center",
    "checkbox-container"
  );
  label.textContent = playerNames[i];
  divPlayerNames.appendChild(div);
  document.querySelector(`.div${i}`).appendChild(label);
  document.querySelector(`.div${i}`).appendChild(input);
}

calcRanks.addEventListener(`click`, function () {
  let scores,
    caps,
    hits,
    wonder,
    shield,
    kvk,
    totalRally,
    totalCaps,
    totalWonder,
    totalHits,
    totalKVK,
    totalShields;

  !localStorage.getItem("scores")
    ? (scores = [])
    : (scores = JSON.parse(localStorage.getItem("scores")));
  !localStorage.getItem("caps")
    ? (caps = [])
    : (caps = JSON.parse(localStorage.getItem("caps")));
  !localStorage.getItem("hits")
    ? (hits = [])
    : (hits = JSON.parse(localStorage.getItem("hits")));
  !localStorage.getItem("shield")
    ? (shield = [])
    : (shield = JSON.parse(localStorage.getItem("shield")));
  !localStorage.getItem("wonder")
    ? (wonder = [])
    : (wonder = JSON.parse(localStorage.getItem("wonder")));
  !localStorage.getItem("kvk")
    ? (kvk = [])
    : (kvk = JSON.parse(localStorage.getItem("kvk")));
  !localStorage.getItem("totalRally")
    ? (totalRally = 0)
    : (totalRally = JSON.parse(localStorage.getItem("totalRally")));
  !localStorage.getItem("totalCaps")
    ? (totalCaps = 0)
    : (totalCaps = JSON.parse(localStorage.getItem("totalCaps")));
  !localStorage.getItem("totalHits")
    ? (totalHits = 0)
    : (totalHits = JSON.parse(localStorage.getItem("totalHits")));
  !localStorage.getItem("totalWonder")
    ? (totalWonder = 0)
    : (totalWonder = JSON.parse(localStorage.getItem("totalWonder")));
  !localStorage.getItem("totalKVK")
    ? (totalKVK = 0)
    : (totalKVK = JSON.parse(localStorage.getItem("totalKVK")));
  !localStorage.getItem("totalShields")
    ? (totalShields = 0)
    : (totalShields = JSON.parse(localStorage.getItem("totalShields")));

  const capChecked = document.getElementById("cappedRally").checked;
  const hitChecked = document.getElementById("hitRally").checked;
  const wonderChecked = document.getElementById("wonderRally").checked;
  const shieldChecked = document.getElementById("shieldRally").checked;
  const kvkChecked = document.getElementById("kvkRally").checked;
  for (let i = 0; i < playerNames.length; i++) {
    const playerClassChecked = document.querySelector(`.player-${i}`).checked;

    if (playerClassChecked && scores.length < playerNames.length) {
      if (capChecked) {
        caps.push(1);
      } else {
        caps.push(0);
      }
      if (hitChecked) {
        hits.push(1);
      } else {
        hits.push(0);
      }
      if (wonderChecked) {
        wonder.push(1);
      } else {
        wonder.push(0);
      }
      if (shieldChecked) {
        shield.push(1);
      } else {
        shield.push(0);
      }
      if (kvkChecked) {
        kvk.push(1);
      } else {
        kvk.push(0);
      }
      scores.push(1);
    } else if (!playerClassChecked && scores.length < playerNames.length) {
      scores.push(0);
      caps.push(0);
      hits.push(0);
      wonder.push(0);
      shield.push(0);
      kvk.push(0);
    } else if (playerClassChecked && scores.length === playerNames.length) {
      scores[i]++;
      if (capChecked) caps[i]++;
      if (hitChecked) hits[i]++;
      if (wonderChecked) wonder[i]++;
      if (shieldChecked) shield[i]++;
      if (kvkChecked) kvk[i]++;
    }
  }
  if (capChecked) totalCaps++;
  if (hitChecked) totalHits++;
  if (wonderChecked) totalWonder++;
  if (kvkChecked) totalKVK++;
  if (shieldChecked) totalShields++;

  totalRally++;
  localStorage.setItem("scores", JSON.stringify(scores));
  localStorage.setItem("caps", JSON.stringify(caps));
  localStorage.setItem("hits", JSON.stringify(hits));
  localStorage.setItem("wonder", JSON.stringify(wonder));
  localStorage.setItem("shield", JSON.stringify(shield));
  localStorage.setItem("kvk", JSON.stringify(kvk));
  localStorage.setItem("totalRally", JSON.stringify(totalRally));
  localStorage.setItem("totalCaps", JSON.stringify(totalCaps));
  localStorage.setItem("totalHits", JSON.stringify(totalHits));
  localStorage.setItem("totalWonder", JSON.stringify(totalWonder));
  localStorage.setItem("totalKVK", JSON.stringify(totalKVK));
  localStorage.setItem("totalShields", JSON.stringify(totalShields));
  // window.location.href = "/tables.html";
});

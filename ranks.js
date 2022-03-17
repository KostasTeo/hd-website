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
];
playerNames.sort();

const divPlayerNames = document.querySelector(`.player-names`);
const calcRanks = document.querySelector(`.calc-ranks`);

for (let i = 0; i < playerNames.length; i++) {
  const input = document.createElement("input");
  const label = document.createElement("label");
  const br = document.createElement(`br`);
  input.type = "checkbox";
  input.classList.add(`player-${i}`);
  input.name = `player${i}`;
  label.textContent = playerNames[i];
  divPlayerNames.appendChild(input);
  divPlayerNames.appendChild(label);
  divPlayerNames.appendChild(br);
}

calcRanks.addEventListener(`click`, function () {
  let scores, caps, hits, wonder, shield, kvk, totalRally;

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

  for (let i = 0; i < playerNames.length; i++) {
    const playerClassChecked = document.querySelector(`.player-${i}`).checked;
    const capChecked = document.getElementById("cappedRally").checked;
    const hitChecked = document.getElementById("hitRally").checked;
    const wonderChecked = document.getElementById("wonderRally").checked;
    const shieldChecked = document.getElementById("shieldRally").checked;
    const kvkChecked = document.getElementById("kvkRally").checked;
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
  totalRally++;
  localStorage.setItem("scores", JSON.stringify(scores));
  localStorage.setItem("caps", JSON.stringify(caps));
  localStorage.setItem("hits", JSON.stringify(hits));
  localStorage.setItem("wonder", JSON.stringify(wonder));
  localStorage.setItem("shield", JSON.stringify(shield));
  localStorage.setItem("kvk", JSON.stringify(kvk));
  localStorage.setItem("totalRally", JSON.stringify(totalRally));
});

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
const scores = JSON.parse(localStorage.getItem("scores"));
const caps = JSON.parse(localStorage.getItem("caps"));
const hits = JSON.parse(localStorage.getItem("hits"));
const shield = JSON.parse(localStorage.getItem("shield"));
const wonder = JSON.parse(localStorage.getItem("wonder"));
const kvk = JSON.parse(localStorage.getItem("kvk"));
const totalRally = JSON.parse(localStorage.getItem("totalRally"));

const tableRow = function (num) {
  const row = document.createElement("tr");
  row.classList.add(`tr-${num}`);
  document.querySelector(".rally-table").appendChild(row);
};

const tableCell = function (num) {
  const index = document.createElement("th");
  const namesTd = document.createElement("td");
  const scoresTd = document.createElement("td");
  const capsTd = document.createElement("td");
  const hitTd = document.createElement("td");
  const shieldTd = document.createElement("td");
  const wonderTd = document.createElement("td");
  const kvkTd = document.createElement("td");
  const tRow = document.querySelector(`.tr-${num}`);
  index.textContent = num + 1;
  namesTd.textContent = playerNames[num];
  scoresTd.textContent = scores[num];
  capsTd.textContent = caps[num];
  hitTd.textContent = hits[num];
  shieldTd.textContent = shield[num];
  wonderTd.textContent = wonder[num];
  kvkTd.textContent = kvk[num];
  tRow.appendChild(index);
  tRow.appendChild(namesTd);
  tRow.appendChild(scoresTd);
  tRow.appendChild(capsTd);
  tRow.appendChild(hitTd);
  tRow.appendChild(shieldTd);
  tRow.appendChild(wonderTd);
  tRow.appendChild(kvkTd);
};

for (let i = 0; i < playerNames.length; i++) {
  tableRow(i);
  tableCell(i);
}

for (let i = 0; i < playerNames.length; i++) {
  const average = Math.trunc((scores[i] / totalRally) * 100);
  if (average > 25) {
    const row = document.createElement("tr");
    row.classList.add(`tr${i}`);
    document.querySelector(".recommend").appendChild(row);
    const tRow = document.querySelector(`.tr${i}`);
    const namesTd = document.createElement("td");
    const averageTd = document.createElement("td");
    namesTd.textContent = playerNames[i];
    averageTd.textContent = `${average}%`;
    // tRow.appendChild(index);
    tRow.appendChild(namesTd);
    tRow.appendChild(averageTd);
  }
}

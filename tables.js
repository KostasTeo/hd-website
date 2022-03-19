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
const scores = JSON.parse(localStorage.getItem("scores"));
const caps = JSON.parse(localStorage.getItem("caps"));
const hits = JSON.parse(localStorage.getItem("hits"));
const shield = JSON.parse(localStorage.getItem("shield"));
const wonder = JSON.parse(localStorage.getItem("wonder"));
const kvk = JSON.parse(localStorage.getItem("kvk"));
const totalRally = JSON.parse(localStorage.getItem("totalRally"));
const totalCaps = JSON.parse(localStorage.getItem("totalCaps"));
const totalHits = JSON.parse(localStorage.getItem("totalHits"));
const totalShields = JSON.parse(localStorage.getItem("totalShields"));
const totalWonder = JSON.parse(localStorage.getItem("totalWonder"));
const totalKVK = JSON.parse(localStorage.getItem("totalKVK"));

const totalTable = function () {
  const firstTable = document.querySelector(`.total-rallies`);
  const row = document.createElement("tr");
  const totalRallies = document.createElement("td");
  const totalCapedRallies = document.createElement("td");
  const totalWonderRallies = document.createElement("td");
  const totalHitRallies = document.createElement("td");
  const totalShieldRallies = document.createElement("td");
  const totalKVKRallies = document.createElement("td");
  totalRallies.textContent = totalRally;
  totalCapedRallies.textContent = totalCaps;
  totalHitRallies.textContent = totalHits;
  totalShieldRallies.textContent = totalShields;
  totalKVKRallies.textContent = totalKVK;
  totalWonderRallies.textContent = totalWonder;
  totalRallies.classList.add("text-center");
  totalCapedRallies.classList.add("text-center");
  totalWonderRallies.classList.add("text-center");
  totalHitRallies.classList.add("text-center");
  totalShieldRallies.classList.add("text-center");
  totalKVKRallies.classList.add("text-center");
  firstTable.appendChild(row);
  row.appendChild(totalRallies);
  row.appendChild(totalCapedRallies);
  row.appendChild(totalWonderRallies);
  row.appendChild(totalHitRallies);
  row.appendChild(totalShieldRallies);
  row.appendChild(totalKVKRallies);
};
totalTable();
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
  index.classList.add("text-center");
  namesTd.classList.add("text-center");
  scoresTd.classList.add("text-center");
  capsTd.classList.add("text-center");
  hitTd.classList.add("text-center");
  shieldTd.classList.add("text-center");
  wonderTd.classList.add("text-center");
  kvkTd.classList.add("text-center");
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
let indexvalue = 1;
for (let i = 0; i < playerNames.length; i++) {
  const average = Math.trunc((scores[i] / totalRally) * 100);

  if (average > 18) {
    const row = document.createElement("tr");
    const index = document.createElement("th");
    row.classList.add(`tr${i}`);
    document.querySelector(".recommend").appendChild(row);
    const tRow = document.querySelector(`.tr${i}`);
    const namesTd = document.createElement("td");
    const averageTd = document.createElement("td");
    index.textContent = indexvalue;
    namesTd.textContent = playerNames[i];
    averageTd.textContent = `${average}%`;
    index.classList.add("text-center");
    namesTd.classList.add("text-center");
    averageTd.classList.add("text-center");
    tRow.appendChild(index);
    tRow.appendChild(namesTd);
    tRow.appendChild(averageTd);
    indexvalue++;
  }
}

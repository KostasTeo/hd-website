"use strict";

const rank3 = [
  "12john34",
  "1bigbadwolf7",
  "Afthartos",
  "Barovios83",
  "BatGoonie69",
  "BlackFlower1",
  "Capucho",
  "ChinaT0wn69",
  "Dr Kogiot",
  "FILIPPOSCY",
  "John8 GR",
  "Karaolaki",
  "I Ajax",
  "LadY B",
  "Lady Nantia",
  "Lakonas07",
  "lords exarxos",
  "Mpoumpou",
  "Mrs Foxx",
  "Petrosk7",
  "Prick Pan",
  "RedFlower1",
  "RedVillageCy",
  "Selinora",
  "simpathelab",
  "Sir Mak",
  "Sixaman",
  "Sokolatenios",
  "Tazious13",
  "Thanos93GR",
  "TNG A3 GR",
  "Valkyriez",
  "Vasilissa21",
  "vourakla",
  "whiteFlower1",
  "xMrTx",
];
const rank2s = [
  "Aswtos",
  "Aimotrafis",
  "aleoo22",
  "Antys00357",
  "Arkidoo",
  "Black eagles",
  "B1ack eagles",
  "Babis o Flu",
  "Bellac1ao",
  "Beren2112",
  "BlacknYellow",
  "Burn out 3",
  "ChiefKostas",
  "chocolatess",
  "crepoulis",
  "D1VER",
  "Getsuka",
  "GR POWER 13",
  "Holly driver",
  "Jimmys",
  "JokerGR27",
  "Katinaki",
  "Larnakiotis",
  "Loukritia",
  "McMalia",
  "Nikolaos13",
  "Nikos9",
  "okounoupis",
  "Partig1ano",
  "Pirgos",
  "Poumbas",
  "provataki",
  "salamadras78",
  "scotos",
  "sir arxontas",
  "sir panaghs",
  "skoudouflis",
  "Sotiris7",
  "Starlord GR",
  "T Angel",
  "teo79",
  "TheButcher13",
  "Tifano",
  "To Vouno",
  "xxLupenxx",
  "xxSamasXx",
];
const rank4s = [
  "Amalia3",
  "Fotsis",
  "Juohmaru",
  "McKueen",
  "Qn Khaleesi",
  "SenoritaMeli",
  "Vetchris",
  "wwooddyy",
  "ZitaNitsa",
];
const rallyLeaders = [
  "ChinaT0wn69",
  "Prick Pan",
  "BatGoonie69",
  "Sir Mak",
  "Selinora",
  "Thanos93GR",
  "12john34",
  "BlackFlower1",
  "Fotsis",
  "wwooddyy",
];
const playerNames = [
  ...new Set([...rank3, ...rank2s, ...rank4s, ...rallyLeaders]),
];
console.log(playerNames);
playerNames.sort();
const initStats = {
  stats: {
    totalRallies: 0,
    totalCaps: 0,
    totalHits: 0,
    totalKvk: 0,
    totalWonder: 0,
    totalShields: 0,
  },
  members: {},
};

const divPlayerNames = document.querySelector(`.player-names`);
const calcRanks = document.querySelector(`.calc-ranks`);
const resetRanks = document.querySelector(`.reset-ranks`);
const playerNameSanitize = function (playerName) {
  return playerName.replace(/[ ]/g, "_");
};
const createForm = function () {
  for (const player of playerNames) {
    const sanitizedName = playerNameSanitize(player);
    const input = document.createElement("input");
    const label = document.createElement("label");
    const div = document.createElement("div");
    input.type = "checkbox";
    input.classList.add(`player-${sanitizedName}`, "form-check-input");
    input.name = `player${sanitizedName}`;
    label.classList.add("form-check-label");
    div.classList.add(
      `div${sanitizedName}`,
      "d-flex",
      "flex-column",
      "align-items-center",
      "checkbox-container"
    );
    label.textContent = player;
    divPlayerNames.appendChild(div);
    document.querySelector(`.div${sanitizedName}`).appendChild(label);
    document.querySelector(`.div${sanitizedName}`).appendChild(input);
  }
};

const getStatsFromLS = function () {
  let activeStats;
  try {
    activeStats = JSON.parse(localStorage.getItem("stats")) || initStats;
  } catch (error) {
    activeStats = initStats;
  }
  return activeStats;
};
const generateTables = function () {
  const storageObj = getStatsFromLS();
  const totalTable = function () {
    const firstTable = document.querySelector(`.total-rallies`);
    const row = document.createElement("tr");
    const totalRallies = document.createElement("td");
    const totalCapedRallies = document.createElement("td");
    const totalWonderRallies = document.createElement("td");
    const totalHitRallies = document.createElement("td");
    const totalShieldRallies = document.createElement("td");
    const totalKVKRallies = document.createElement("td");

    totalRallies.textContent = storageObj.stats.totalRallies;
    totalCapedRallies.textContent = storageObj.stats.totalCaps;
    totalHitRallies.textContent = storageObj.stats.totalHits;
    totalShieldRallies.textContent = storageObj.stats.totalShields;
    totalKVKRallies.textContent = storageObj.stats.totalKvk;
    totalWonderRallies.textContent = storageObj.stats.totalWonder;
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
  const playerTables = function () {
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
      if (storageObj.members[playerNames[num]]) {
        scoresTd.textContent = storageObj.members[playerNames[num]].score;
        capsTd.textContent = storageObj.members[playerNames[num]].caps;
        hitTd.textContent = storageObj.members[playerNames[num]].hits;
        shieldTd.textContent = storageObj.members[playerNames[num]].shield;
        wonderTd.textContent = storageObj.members[playerNames[num]].wonder;
        kvkTd.textContent = storageObj.members[playerNames[num]].kvk;
      }
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
  };
  const recommended = function () {
    let indexvalue = 1;
    for (let i = 0; i < playerNames.length; i++) {
      if (
        storageObj.members[playerNames[i]].average > 18 &&
        !storageObj.members[playerNames[i]].rank4 &&
        !storageObj.members[playerNames[i]].rallyLeader
      ) {
        const row = document.createElement("tr");
        const index = document.createElement("th");
        row.classList.add(`tr${i}`);
        document.querySelector(".recommend").appendChild(row);
        const tRow = document.querySelector(`.tr${i}`);
        const namesTd = document.createElement("td");
        const averageTd = document.createElement("td");
        index.textContent = indexvalue;
        namesTd.textContent = playerNames[i];
        averageTd.textContent = `${
          storageObj.members[playerNames[i]].average
        }%`;
        index.classList.add("text-center");
        namesTd.classList.add("text-center");
        averageTd.classList.add("text-center");
        tRow.appendChild(index);
        tRow.appendChild(namesTd);
        tRow.appendChild(averageTd);
        indexvalue++;
      }
    }
  };
  totalTable();
  playerTables();
  recommended();
};
if (calcRanks) {
  calcRanks.addEventListener(`click`, function () {
    const storageObj = getStatsFromLS();
    const capChecked = document.getElementById("cappedRally").checked;
    const hitChecked = document.getElementById("hitRally").checked;
    const wonderChecked = document.getElementById("wonderRally").checked;
    const shieldChecked = document.getElementById("shieldRally").checked;
    const kvkChecked = document.getElementById("kvkRally").checked;
    if (capChecked) storageObj.stats.totalCaps += 1;
    if (hitChecked) storageObj.stats.totalHits += 1;
    if (wonderChecked) storageObj.stats.totalWonder += 1;
    if (shieldChecked) storageObj.stats.totalShields += 1;
    if (kvkChecked) storageObj.stats.totalKvk += 1;
    storageObj.stats.totalRallies += 1;
    for (const player of playerNames) {
      if (!storageObj.members[player])
        storageObj.members[player] = {
          score: 0,
          caps: 0,
          hits: 0,
          wonder: 0,
          shield: 0,
          kvk: 0,
        };

      const playerClassChecked = document.querySelector(
        `.player-${playerNameSanitize(player)}`
      ).checked;

      if (playerClassChecked) {
        if (capChecked) storageObj.members[player].caps += 1;

        if (hitChecked) storageObj.members[player].hits += 1;
        if (wonderChecked) storageObj.members[player].wonder += 1;
        if (shieldChecked) storageObj.members[player].shield += 1;
        if (kvkChecked) storageObj.members[player].kvk += 1;
        storageObj.members[player].score += 1;
      }

      if (rank4s.includes(player)) storageObj.members[player].rank4 = true;
      if (rallyLeaders.includes(player))
        storageObj.members[player].rallyLeader = true;
      storageObj.members[player].average =
        Math.trunc(
          (storageObj.members[player].score / storageObj.stats.totalRallies) *
            100
        ) || 0;
    }

    localStorage.setItem("stats", JSON.stringify(storageObj));
  });
  resetRanks.addEventListener(`click`, function () {
    localStorage.setItem("stats", JSON.stringify(initStats));
    window.location.reload();
  });
}

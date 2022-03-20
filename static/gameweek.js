const mainTable = document.getElementById("main-table");
const table = document.getElementById("table");
const gameweek = document.getElementById("gw");
const spinnerDiv = document.getElementById("spinner-item");
const url = `https://vickfplmanager.deta.dev/yute/ranks/archive?gameweek=${gameweek.textContent}`;

document.addEventListener("DOMContentLoaded", () => {
  spinnerDiv.style.visibility = 'visible';
  mainTable.style.visibility = 'hidden';
  fetchGW();
});

const fetchGW = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const d = data[0]
      if (data) {
        d.value.map((player) => {
          const teamName = player["entry_name"];
          const point = player["event_total"];
          const playerName = player["player_name"];
          const link = player["link_to_team"];
          table.innerHTML += `
          <tr>
              <td class="column1"><a href=${link} target="_blank">${teamName}</a></td>
              <td class="column2"><a href=${link} target="_blank">${point}</a></td>
              <td class="column3"><a href=${link} target="_blank">${playerName}</a></td>
          </tr>
          `;
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      spinnerDiv.style.visibility = 'hidden';
      mainTable.style.visibility = 'visible';
    }
};
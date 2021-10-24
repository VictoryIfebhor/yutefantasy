// IMPORTANT

// IF ANY UPDATE IS DONE TO THIS JS FILE
// INCREMENT THE QUERY PARAMETER OF THE LINK TO THIS JS FILE.

const data = [];
const id = 107557;
const table = document.getElementById("table");
const loading = document.getElementById("loading");

const url = `https://vickfplmanager.deta.dev/league/${id}/managers/highest`;

document.addEventListener("DOMContentLoaded", () => {
  fetchFPL();
});

const fetchFPL = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data) {
      loading.textContent = "";
    }
    data.data.map((player) => {
      const teamName = player["entry_name"];
      const point = player["event_total"];
      const playerName = player["player_name"];
      const link = player["link_to_team"];
      table.innerHTML += `
      <tr>
        <td class="column1"><a href=${link} target="_blank">${teamName}</a></td>
        <td class="column2"><a href=${link} target="_blank>${point}</a></td>
        <td class="column3">${playerName}</td>
      </tr>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};

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
      table.innerHTML += `
        <tr>
          <td>${teamName}</td>
          <td>${point}</td>
        </tr>`;
    });
  } catch (error) {
    console.log(error);
  }
};

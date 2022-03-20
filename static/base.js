const mainTable = document.getElementById("main-table");
const table = document.getElementById("table");
const spinnerDiv = document.getElementById("spinner-item");
const url = "https://vickfplmanager.deta.dev/yute/ranks/archive"


document.addEventListener("DOMContentLoaded", () => {
    spinnerDiv.style.visibility = 'visible';
    mainTable.style.visibility = 'hidden';
    fetchGWs();
});

const fetchGWs = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        data.map((gws) => {
          const gw = gws["key"];
          const highest = gws["value"][0]["entry_name"]
          const highest_score = gws["value"][0]["event_total"]
          table.innerHTML += `
          <tr>
            <td class="column2">${highest}</td>
            <td class="column3">${highest_score}</td>
            <td class="column1"><a href="/yutefantasy/gw/${gw}">${gw}</a></td>
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

const table = document.getElementById("table");
const loading = document.getElementById("loading");

const url = "https://vickfplmanager.deta.dev/yute/ranks/archive"


document.addEventListener("DOMContentLoaded", () => {
    fetchGWs();
});

const fetchGWs = async () => {
    try {
      let latestgw;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data) {
        loading.setAttribute("hidden", "true");
      }
      data.map((gws) => {
        const gw = gws["key"];
        const highest = gws["value"][0]["entry_name"]
        const highest_score = gws["value"][0]["event_total"]
        table.innerHTML += `
        <tr>
          <td class="column1"><a href="/yutefantasy/gw/${gw}">${gw}</a></td>
          <td class="column2">${highest}</td>
          <td class="column3">${highest_score}</td>
        </tr>
        `;
      });
      table.innerHTML
    } catch (error) {
      console.log(error);
    }
};

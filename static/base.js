const table = document.getElementById("table");

const url = "https://vickfplmanager.deta.dev/yute/ranks/archive"


document.addEventListener("DOMContentLoaded", () => {
    fetchGWs();
});

const fetchGWs = async () => {
    try {
      let latestgw;
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        for (let i = 0; i < 10; i++){
            const loading = document.getElementById("loading");
            loading.remove();
        }
      }
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
    } catch (error) {
      console.log(error);
    }
};

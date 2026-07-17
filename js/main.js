const singerData = {
  singers: [
    {
      name: "Davido",
      country: "Nigeria",
      bestSong: "Aye, Electricity",
    },
    {
      name: "Sauti Sol",
      country: "Kenya",
      bestSong: "Finale, Suzanna",
    },
    {
      name: "Ariana Grande",
      country: "USA",
      bestSong: "7 Rings, Dangerous Woman",
    },
    {
      name: "Nicki Minaj",
      country: "USA",
      bestSong: "Super Bass, Moment 4 Life",
    },
    {
      name: "Diamond Platnumz",
      country: "Tanzania",
      bestSong: "Enjoy, Kidogo",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("singerTableBody");

  singerData.singers.forEach((singer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${singer.name}</td>
      <td>${singer.country}</td>
      <td>${singer.bestSong}</td>
    `;
    tableBody.appendChild(row);
  });
});

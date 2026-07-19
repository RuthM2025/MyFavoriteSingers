const singerData = {
  singers: [
    {
      name: "Davido",
      country: "Nigeria",
      bestSong: "Aye, Electricity",
      dob: "11/21/1992",
    },
    {
      name: "Sauti Sol",
      country: "Kenya",
      bestSong: "Finale, Suzanna",
      dob: "05/25/1987",
    },
    {
      name: "Ariana Grande",
      country: "USA",
      bestSong: "7 Rings, Dangerous Woman",
      dob: "06/26/1993",
    },
    {
      name: "Nicki Minaj",
      country: "USA",
      bestSong: "Super Bass, Moment 4 Life",
      dob: "12/08/1982",
    },
    {
      name: "Diamond Platnumz",
      country: "Tanzania",
      bestSong: "Enjoy, Kidogo",
      dob: "10/02/1989",
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
      <td>${singer.dob}</td>
    `;
    tableBody.appendChild(row);
  });
});

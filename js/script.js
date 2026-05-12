/* fetch("https://zelda.fanapis.com/api/games?limit=2")
.then(response => {
    if(!response.ok){
       throw new Error("Could not fetch resource"); 
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error)); */

/* Fetch's the data from the Zelda fanAPI and displays it */
async function fetchData() {
  try {
    const search = document.getElementById("search").value;
    const response = await fetch(
      `https://zelda.fanapis.com/api/games?name=${search}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    // ConsoleLogs the results
    console.log(data.data);

    // Displays the results
    const info = document.getElementById("info");
    info.innerHTML = data.data.length
      ? data.data
          .map(
            (g) =>
              `<p>${g.name}:</p> <p>Released: ${g.released_date}</p> <p>Description: </br> ${g.description}</p> </br></br>`,
          )
          .join("")
      : "<p>No results found</p>";
      
  } catch (error) {
    console.error(error);
  }
}

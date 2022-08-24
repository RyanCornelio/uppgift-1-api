async function tellMeAJoke() {
   

    let response = await fetch("http://localhost:3001/api/joke");  // async await när du använder fetch...
    let result = await response.json(); // Får rätt datatyp...
    /* getComedian = await fetch("http://localhost:3001/api/comedian") */
console.log(result)
    const getJoke = document.getElementById("jokeSetup");
    const getJokePuncline = document.getElementById("jokePunchline");
    const author = document.getElementById("comedian");

  /*   const getComedian = async (event => {
        try {
            const response = await fetch("http://localhost:3001/api/comedian");
            const body = await response.json()
        }
    }) */

    /* document.getElementById("addComedian").addEventListener() */

    getJoke.innerText = result.setup;
    getJokePuncline.innerText = result.punchline;
    author.innerText = result.author.name;


    console.log(result);

    
}

/* function addComedian() {
     let getComedian = await fetch("./index.js/comedians"); 
    let resultComedian = await response.json(); // Får rätt datatyp... 
     const currentComedian = document.getElementById("comedian") 
     const comedian = document.getElementById("comedian")
    currentComedian.innerText = result.comedian
    console.log(result.comedian); 
} */

let btn = document.getElementById("btn");
btn.addEventListener("click", btn);

async function getHallOfFame() {
    console.log("Kommer in")
    let response = await fetch("http://localhost:3001/api/comedians")
    let result = await response.json();
    console.log(result);
    
    const list = document.getElementById("listan");
    
    for (let index = 0; index < result.length; index++) {
        const comedian = result[index];
        console.log(comedian.name);
        // Skapa en div eller h1 och i den h1 eller div lägga till comedian.name
        // som innertext...
        // Appenda div eller h1 till list.

   
        /*         author.innerText = result.author.name; */
        let item = document.createElement("li")
        item.innerText = comedian.name
        list.append(item)
    
    }
}

/* async function addToHallOfFame() {
    const comedianToAdd = document.getElementById("hallOfFame");
    let result = await response.json(comedian);
} */

//window.addEventListener("load",  tellMeAJoke);
window.addEventListener("load", getHallOfFame , tellMeAJoke);
/* document.getElementById('btn').addEventListener('click', addToHallOfFame) */







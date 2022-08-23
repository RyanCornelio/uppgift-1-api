async function tellMeAJoke() {
   

    let response = await fetch("http://localhost:3001/api/joke");  // async await när du använder fetch...
    let result = await response.json(); // Får rätt datatyp...
    /* getComedian = await fetch("http://localhost:3001/api/comedian") */

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
    author.innerText = result.author;

    console.log(result.setup);
    console.log(result.punchline);
    console.log(result.author);

    console.log(result);
    console.log(response);
    
}

/* function addComedian() {
     let getComedian = await fetch("./index.js/comedians"); 
    let resultComedian = await response.json(); // Får rätt datatyp... 
     const currentComedian = document.getElementById("comedian") 
     const comedian = document.getElementById("comedian")
    currentComedian.innerText = result.comedian
    console.log(result.comedian); 
} */

window.addEventListener("load", tellMeAJoke);







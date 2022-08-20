async function tellMeAJoke() {
   

    let response = await fetch("http://localhost:3001/api/joke");  // async await när du använder fetch...
    let result = await response.json(); // Får rätt datatyp...

    const getJoke = document.getElementById("jokeSetup");
    const getJokePuncline = document.getElementById("jokePunchline");

    getJoke.innerText = result.setup;
    getJokePuncline.innerText = result.punchline;

    console.log(result.setup);
    console.log(result.punchline);

    console.log(result);
    console.log(response);
    
}

window.addEventListener("load", tellMeAJoke);







async function tellMeAJoke() {
    /* fetch("http://localhost:3001/api/joke"), ({
        method: 'GET'
    }).then => response.json()
    .then((json) => {
        let jokeHeader = document.getElementById('jokeHeader');
        console.log(jokeHeader);
    }) */

    // async await när du använder fetch...

    let response = await fetch("http://localhost:3001/api/joke");
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


/* btn.addEventListener("click").addEventListener(tellMeAJoke()) */

window.addEventListener("load", tellMeAJoke);







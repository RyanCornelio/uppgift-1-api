function tellMeAJoke() {
    fetch('http://localhost:3001/api/joke', {
        method: 'GET'
    }).then((response) => response.json())
    .then((json) => {
        let showSign = document.getElementById('showSign');
        showSign.innerText = json;
        console.log(showSign);
    })
}




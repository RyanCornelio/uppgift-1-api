async function tellMeAJoke() {
    let response = await fetch("http://localhost:3001/api/joke");  
    let result = await response.json(); 

    console.log(result)
    const getJoke = document.getElementById("jokeSetup");
    const getJokePuncline = document.getElementById("jokePunchline");
    const author = document.getElementById("comedian");

    getJoke.innerText = result.setup;
    getJokePuncline.innerText = result.punchline;
    author.innerText = result.author.name;

}

    let btn = document.getElementById("btn");
    btn.addEventListener("click", btn);

    async function getHallOfFame() {
    let response = await fetch("http://localhost:3001/api/comedians");
    let result = await response.json();
    console.log(result);
    
    const list = document.getElementById("listan");
    
    for (let index = 0; index < result.length; index++) {
        const comedian = result[index];
      
        let item = document.createElement("li")
        item.innerText = comedian.name + " " + comedian.age + " years old";
        list.append(item)
        
    }
}

    async function addToHallOfFame(e) {

    const comedianToAdd = document.getElementById("name").value;
    const ageToAdd = document.getElementById("age").value
/*     console.log(comedianToAdd); */
    const newName = {name: comedianToAdd, age: ageToAdd}
    console.log(newName);
    const status = await fetch("http://localhost:3001/api/comedians", {
        method: "POST", 
        body: JSON.stringify(newName),
        headers: {"Content-Type": "application/json"}
    })

}

window.addEventListener("load", getHallOfFame , tellMeAJoke);
document.getElementById('btn').addEventListener('click', addToHallOfFame)






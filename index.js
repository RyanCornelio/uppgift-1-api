import express from 'express';
import axios from "axios";
const app = express();
const port = 3001;

app.get("/api/joke", (req, res) => {
  
    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'X-RapidAPI-Key': '0a532778f1mshcb21fbf60fd9551p13eebajsn5e929d80bd2d',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data.body[0]);
        //
        res.json(response.data.body[0])
    }).catch(function (error) {
        console.error(error);
    });
})


app.get("/api/:test", (req, res) => {
    https://dad-jokes.p.rapidapi.com/random/joke
    req.params.test
    console.log("TESTING...")
    res.send('api'); // för text.
    // res.json för object.
})
// .then väntar på svar innan de skickar svar.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



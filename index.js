import express from 'express';
import axios from "axios";
import cors from "cors";
import { nanoid } from 'nanoid'
const app = express();
const port = 3001;

app.use("/", express.static("client"))
app.use(cors());
app.use(express.json())

app.get("/api/joke", (req, res) => {
  try {

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
} catch(error) {
    console.log(error);

}
})

let comedians = [
    {
        id: nanoid(),
        name: "Dave Chappelle",
        age: 40
    },
    {
        id: nanoid(),
        name: "Bill Burr",
        age: 42
    },
    {
        id: nanoid(),
        name: "Kat Williams",
        age: 34
    },
];

app.get("/api/comedians", (req, res) => {
    res.json(comedians)
})

app.post("/api/comedians", ( req, res ) => {

    comedians.push({...req.body, ...{id: nanoid()}}) 
    res.json({status: "New comedian added!"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



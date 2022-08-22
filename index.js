import express from 'express';
import axios from "axios";
const app = express();
const port = 3001;
import cors from "cors";
import { nanoid } from 'nanoid'

app.use(cors()); // Help to set apart ports... Kinda...
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


app.get("/api/:test", async (req, res) => {
    try {
        const resp = await axios.get("https://dad-jokes.p.rapidapi.com/random/joke")
        req.params.test
        console.log("TESTING...")
        res.send('api'); // för text.
    } catch {
        console.log(error.err)
    }
    // res.json för object.
})
// .then väntar på svar innan de skickar svar.

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

app.get("/comedians", (req, res) => {
    res.json(comedians)
})

app.post("/", (req, res) => {
    try {
        if(!req.body || !req.body.name || !req.body.age) {
            throw new Error("No user info...")
        }
    } catch {   
        req.json({status: "New user added!"})
    }
});

app.use(express.json());
app.use("/", express.static("client"))

app.post("/comedians", ( req, res ) => {
    console.log(req.body)
    
    res.json({})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



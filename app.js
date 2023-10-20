const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/movie", async (req,res)=>{
    const result = await axios.get("https://dummyapi.online/api/movies");
    res.send(result.data);
});

app.get("/pokemon" , async(req,res)=>{
    const result = await axios.get("https://dummyapi.online/api/pokemon");
    res.send(result.data);
});

app.get("/product" , async (req, res)=>{
    const result = await axios.get("https://dummyapi.online/api/products");
    res.send(result.data)
})

app.listen(5050, ()=>{
    console.log("API is running on 5050 Port...");
});
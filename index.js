const express = require("express");
const app = express();
const Schedule = require("./models/Cowboys")
const parser = require("body-parser")
const cors = require("cors");

app.use(parser.json());
app.use(cors());

app.get("/", (req,res)=> {
    res.json({
        content: "If you a Cowboys fan click the link below to see the 2018-2019 Season",
        link: "http://localhost:3000/schedule"
    })
})

// list route ( read )
app.get("/schedule",(req,res)=> {
    Schedule.find({}).then(schedule =>{
        res.json(schedule)
    })
})

// Detail route and search by id ( read )
app.get("/schedule/:id",(req,res)=> {
    Schedule.findById(req.params.id).then(schedule =>{
        res.json(schedule)
    })
})
//create post ( create )
app.post("/schedule",(req,res)=> {
    console.log("new schedule", req.body)
    Schedule.create(req.body).then(schedule =>{
        res.json(schedule)
    })
})

//PUT route ( update )

app.put("/schedule/:id",(req,res)=> {
    Schedule.findOneAndUpdate({_id: req.params.id}),
    req.body,{new:true}
    .then(schedule=>{res.json(schedule)})
})

//Delete route ( delete )

app.delete("/schedule/:id",(req,res)=> {
    Schedule.findOneAndRemove(
        {_id: req.params.id})
    .then(schedule => {
        res.json(schedule)
    })
})


app.listen(3000,()=>{
    console.log("your app serve is listening on 3000")
})
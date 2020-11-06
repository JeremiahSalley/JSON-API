const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const homeTeam = new Schema({
    team: String,
    score: Number,
    scoreQ1: Number,
    scoreQ2: Number,
    scoreQ3: Number,
    scoreQ4: Number,
    overtime: Number,
    result: String
})

const awayTeam = new Schema({
    team: String,
    score: Number,
    scoreQ1: Number,
    scoreQ2: Number,
    scoreQ3: Number,
    scoreQ4: Number,
    overtime: Number,
    result: String
})


let cowboysSchedule = new Schema({
    gameDay: {
        week: String,
        dayOfWeek: String,
        seasonYear: Number,
        seasonType: String,
        finished: Boolean
    },
    home:[homeTeam],
    away:[awayTeam]
})


module.exports = mongoose.model("Cowboys",cowboysSchedule);
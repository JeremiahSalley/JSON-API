const Cowboys = require("../models/Cowboys")
const data = require("./schedule.json")



const cowboysData = data.map(week => {
    let teamInfo = {
        gameDay:{
            week: week.week,
            dayOfWeek: week.dayOfWeek,
            seasonYear: week.seasonYear,
            finished: week.finished,
        },
        home:{
            team: week.homeTeam.team,
            score: week.homeTeam.score,
            scoreQ1: week.homeTeam.scoreQ1,
            scoreQ2: week.homeTeam.scoreQ2,
            scoreQ3: week.homeTeam.scoreQ3,
            scoreQ4: week.homeTeam.scoreQ4,
            result: week.homeTeam.result
        },
        away: {
            team: week.awayTeam.team,
            score: week.awayTeam.score,
            scoreQ1: week.awayTeam.scoreQ1,
            scoreQ2: week.awayTeam.scoreQ2,
            scoreQ3: week.awayTeam.scoreQ3,
            scoreQ4: week.awayTeam.scoreQ4,
            result: week.awayTeam.result
        }

    }
    return teamInfo

})
Cowboys.deleteMany({}).then(() => {
    Cowboys.create(cowboysData).then((cowboys) => {
        
        console.log(cowboys)
        process.exit()
    })
})





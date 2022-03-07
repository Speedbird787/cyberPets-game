let initQuestions = [
    {
        type:"list",
        name: "type",
        message:"heyooo fellow extinct pet keeper! Which beast will you try to befriend today?",
        choices: ["Saber Tooth", "Dodo Bird", "Megalodon Shark"]
    },

    {
        type: "input",
        name: "name",
        message: "Please pick a Name for your Extinct beast!"
    },
]

let sToothQuestions = [
    {
        type: "list",
        name: "action",
        message: "Pick an action to show them love and care",
        choices: ["drink", "feed", "sleep", "clean", "relieve", "hunt", "play", "groom"]
    }
]
let birdQuestions = [
    {
        type: "list",
        name: "action",
        message: "Pick an action to show them love and care",
        choices: ["drink", "feed", "sleep", "clean", "relieve", "socialise", "play", "chill"]
    }
]
let megQuestions = [
    {
        type: "list",
        name: "action",
        message: "Pick an action to show them love and care",
        choices: ["drink", "feed", "sleep", "clean", "swim", "hunt", "trance"]
    }
]

module.exports = {initQuestions,sToothQuestions,birdQuestions,megQuestions};
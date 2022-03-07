const inquirer = require ("inquirer");
let { pets, sTooth, Bird, meg }= require ("./pet");
let { initQuestions, sToothQuestions, birdQuestions, megQuestions }= require ("./questions");
let myPet
let ui = new inquirer.ui.BottomBar()



const inital =  async () =>{
    let response = await inquirer.prompt(initQuestions)
   
    if (response.type === "Saber Tooth"){
      myPet = new sTooth (response.name)
      sToothGameLoop()
      ui.log.write(
        `${myPet.name} |Life: ${myPet.life}| Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Toilet: ${myPet.hygiene} | Hunt:${myPet.sToothHunt} | Play: ${myPet.sToothPlay} | Groom: ${myPet.sToothGroom}`
    )
    } else if (response.type === "Dodo Bird"){
    myPet = new Bird (response.name)
    birdGameLoop()
    ui.log.write(
        `${myPet.name} |Life: ${myPet.life} | Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Socialise: ${myPet.birdSocialise} | Play: ${myPet.birdPlay} | Chill: ${myPet.birdChill}`
        )
    } else {
    myPet = new meg (response.name)
    megGameLoop()
    ui.log.write(
        `${myPet.name} |Life: ${myPet.life}| Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Swim: ${myPet.megSwim} | Hunt: ${myPet.megHunt} | Trance: ${myPet.megTrance}`
    )
     } 
    };
    

const sToothGameLoop = async () => {
    try {
        if(myPet.life <=0 || myPet.hunger <=0){
            console.log("GAME OVER")
            return
        }
        
myPet.time()
    let response = await inquirer.prompt(sToothQuestions)
    // console.log(response)
// saber actions
// if(myPet.thirst <=0){
//     myPet.thirst = 0;
//     sToothGameLoop()
//   } 
    if (response.action === "drink"){
        myPet.drink()
    }else if (response.action === "feed"){
        myPet.feed()
    }else if (response.action === "sleep"){
        myPet.sleep()
    }else if (response.action === "clean"){
        myPet.clean()
    }else if(response.action === "relieve"){
        myPet.relieve()
    }else if(response.action === "hunt"){
        myPet.hunt()
    }else if(response.action === "play"){
        myPet.play()
    }else if(response.action === "groom"){
        myPet.groom()
    }

    ui.log.write(
        `${myPet.name} |Life: ${myPet.life}| Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Toilet: ${myPet.hygiene} | Hunt:${myPet.sToothHunt} | Play: ${myPet.sToothPlay} | Groom: ${myPet.sToothGroom}`
    )
   
    sToothGameLoop()
    }catch (error){
        console.log(error)
    }
}

const birdGameLoop = async () => {
    try {
        if(myPet.life <=0 || myPet.hunger <=0){
            console.log("GAME OVER")
            return
        }
        
myPet.time()
    let response = await inquirer.prompt(birdQuestions)
    // console.log(response)

    if (response.action === "drink"){
        myPet.drink()
    }else if (response.action === "feed"){
        myPet.feed()
    }else if (response.action === "sleep"){
        myPet.sleep()
    }else if (response.action === "clean"){
        myPet.clean()
    }else if(response.action === "relieve"){
        myPet.relieve()
    }else if(response.action === "socialise"){
        myPet.socialise()
    }else if(response.action === "play"){
        myPet.play()
    }else if(response.action === "chill"){
        myPet.chill()
    }

    ui.log.write(
        `${myPet.name} |Life: ${myPet.life} | Thirst: ${myPet.thirst} | Hunger: ${myPet.hunger} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Socialise: ${myPet.birdSocialise} | Play: ${myPet.birdPlay} | Chill: ${myPet.birdChill}`
        )
    birdGameLoop()
    } catch (error){
        console.log(error)
    }
}

const megGameLoop = async () => {
    try {
        if(myPet.life <=0 || myPet.hunger <=0){
            console.log("GAME OVER")
            return
        }
myPet.time()
    let response = await inquirer.prompt (megQuestions)
    // console.log(response)

    if (response.action === "drink"){
        myPet.drink()
    }else if (response.action === "feed"){
        myPet.feed()
    }else if (response.action === "sleep"){
        myPet.sleep()
    }else if (response.action === "clean"){
        myPet.clean()
    }else if(response.action === "relieve"){
        myPet.relieve()
    }else if(response.action === "swim"){
        myPet.scratch()
    }else if(response.action === "hunt"){
        myPet.paddle()
    }else if(response.action === "trance"){
        myPet.trance()
    }

    ui.log.write(
        `${myPet.name} |Life: ${myPet.life} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene} | Swim: ${myPet.megSwim} | Hunt: ${myPet.megHunt} | Trance: ${myPet.megTrance}`
    )

    megGameLoop()
    } catch (error){
        console.log(error)
    }
};
inital();
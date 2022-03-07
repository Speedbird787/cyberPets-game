class pets {
constructor(name){
this.name = name
this.life = 100 // 0= pet dies
this.thirst = 5
this.hunger = 70 
this.energy = 70 
this.hygiene = 20 
this.toilet = 65

}

drink(){
  this.life += 5
  this.thirst -= 5
  this.hunger -= 5
  this.energy += 5
  this.toilet -= 5

}
feed(){
  this.life += 5
  this.hunger += 5
  this.energy += 5
  this.thirst -= 5
  this.toilet -= 5
}
sleep(){
  this.life += 5 
  this.energy += 5
  this.hunger += 5
  this.thirst += 3
}

clean () {
  this.hygiene += 5
  this.life += 2
}
relieve (){
  this.toilet += 5
  this.hunger -= 2
  this.hygiene -= 2
}

time(){
  this.life -= 3
  this.thirst -= 3
  this.hunger -= 3
  this.energy -= 3
  this.hygiene -= 3
  this.toilet -= 3
}
}

// 10 = maximum satisfaction for each animal action currently set to 0
class sTooth extends pets {
constructor(name){
    super(name)
    this.sToothHunt = 1 
    this.sToothPlay = 1 
    this.sToothGroom = 3 
}
hunt(){
  this.sToothHunt += 2
  this.sToothPlay += 1
  this.sToothGroom -= 1
  this.life -= 1
}
play(){
  this.sToothPlay += 2
  this.life += 2
}
groom(){
  this.sToothGroom += 2
  this.hygiene += 3
  this.life += 1
}
}

class Bird extends pets {
constructor(name){
    super(name)
    this.birdSocialise = 1 
    this.birdPlay = 1 
    this.birdChill = 1 
}
socialise(){
  this.birdSocialise += 2
  this.birdPlay += 1
}
play(){
  this.birdPlay += 2
  this.life += 1

}
chill(){
  this.birdChill += 2
  this.hunger -= 2
}
}

class meg extends pets {
constructor(name){
    super(name)
    this.megSwim = 0 
    this.megHunt = 0 
    this.megTrance = 0 
}
scratch(){
  this.megSwim += 2
  this.hunger -= 2
}
paddle(){
  this.megHunt += 2
  this.hunger -= 2
  this.life += 2
}
trance(){
  this.megTrance += 2
}
};

module.exports = {pets, sTooth, Bird, meg};


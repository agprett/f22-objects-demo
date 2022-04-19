//Declaring new objects

let me = {
  firstName: 'Alec',
  lastName: 'Prettman',
  age: 22
}

//accessing and editting

let attribute = 'lastName'

me['lastName'] = 'Prettyman'

delete me.age

// console.log(me.firstName)
// console.log(me[attribute])
// console.log(me)

let meal = {
  appetizer: 'Cactus Blossom',
  entree: 'Steak',
  drink: 'Water',
}

meal.dessert = 'Fried ice cream'

//Destructuring

// let appetizer = meal.appetizer
// let drink = meal.drink
let {appetizer, drink} = meal

// let takeHome = meal.entree
let {entree: takeHome} = meal
// let {entree} = meal

// console.log(entree)

//For in loop

// for(let attribute in me){
//   console.log(attribute, me[attribute])
// }

// for(let "key stand-in" in "object to loop through"){
//   what you want it to do
// }

//Classes

class Pet {
  constructor(name, color, age){
    this.name = name,
    this.color = color,
    this.age = age
  }

  howOld() {
    console.log(`${this.name} is ${this.age} years old.`)
  }
}

class Dog extends Pet {
  constructor(name, color, age, breed){
    super(name, color, age)
    this.breed = breed,
    this.trainingLevel = 0
  }

  train(){
    this.trainingLevel += 1
    console.log(`${this.name}'s training level is now ${this.trainingLevel}`)
  }
}

class Cat extends Pet {
  constructor(name, color, age, breed, temperament){
      super(name, color, age)
      this.breed = breed,
      this.temperament = temperament
  }
}

let myPet = new Dog('Gus Gus', 'Black and grey', 1, 'Bernedoodle')

myPet.train()

//template for classes

// class ClassName {
//   constructor(any params you want){
//     set the key value pairs here
//   }

//   method(params){
//     code block
//   }

//   anotherMethod(params){
//     code block
//   }
// }

// let instance = new ClassName(params)

// instance.method()
// instance.key
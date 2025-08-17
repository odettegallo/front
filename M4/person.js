class Person {
    constructor(first, last, age, gender, interests) { 
this.name = { 
'first': first, 
'last' : last 
}; 
this.age = age; 
this.gender = gender; 
this.interests = interests; 
    }

bio() { 
 
console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' 
+ this.interests[0] + ' and ' + this.interests[1] + '.'); 
}; 

greeting() { 
console.log('Hi! I\'m ' + this.name.first + '.'); 
}; 
}

const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
const myGreeting = person1.greeting();
const myBio = person1.bio();

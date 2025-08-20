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
let myGender = this.gender;
if (myGender === 'male') { 
myGender = 'He';
}
else if (myGender === 'female') { 
myGender = 'She';
}
else {
myGender = 'undefined';
}

let myInterests = this.interests;
if (myInterests.length > 2) {
myInterests = myInterests.slice(0, 2).join(' and ') + ' and others';
}
else if (myInterests.length === 2) {
myInterests = myInterests.join(' and ');
}
else if (myInterests.length === 1) {
myInterests = myInterests[0];
}

console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ` years old. ${myGender} likes ` 
+ this.interests[0] + this.interests[1] + '.'); 
}; 

greeting() { 
console.log('Hi! I\'m ' + this.name.first + '.'); 
}; 
}

const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'reading', 'gaming']);
const person2 = new Person('Bo', 'Smith', 32, 'female', ['music', 'skiing']);

const myGreeting = person1.greeting();
const myBio = person1.bio();
const myBio2 = person2.bio();
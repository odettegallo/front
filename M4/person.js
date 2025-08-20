class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  bio() {
    let pronoun;
    if (this.gender === 'male') {
      pronoun = 'He';
    } else if (this.gender === 'female') {
      pronoun = 'She';
    } else {
      pronoun = 'They'; // Usar 'They' para un género no especificado, es más inclusivo.
    }

    let interestsList;
    if (this.interests.length > 2) {
      const firstTwoInterests = this.interests.slice(0, 2).join(' and ');
      interestsList = `${firstTwoInterests} and others`;
    } else if (this.interests.length === 2) {
      interestsList = this.interests.join(' and ');
    } else if (this.interests.length === 1) {
      interestsList = this.interests[0];
    } else {
      interestsList = 'nothing in particular';
    }

    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. ${pronoun} likes ${interestsList}.`);
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}.`);
  }
}

const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'reading', 'gaming']);
const person2 = new Person('Bo', 'Smith', 32, 'female', ['music', 'skiing']);
const person3 = new Person('Alex', 'Doe', 28, 'non-binary', ['drawing']);
const person4 = new Person('Sam', 'Jones', 45, 'male', []);

person1.bio();
person2.bio();
person3.bio();
person4.bio();
person1.greeting();
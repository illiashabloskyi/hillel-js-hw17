class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showPersonInfo() {
    return `name: ${this.name}\nage: ${this.age}`;
  }
}

class Automobile {
  constructor(brand, model, yearRelease, carNumber, color) {
    this.brand = brand;
    this.model = model;
    this.yearRelease = yearRelease;
    this.carNumber = carNumber;
    this.color = color;
  }

  setOwner(owner) {
    if (owner instanceof Person && owner.age >= 18) {
      this.owner = owner;
      console.log(
        `${this.owner.name} is car owner: ${this.brand} ${this.model}`
      );
    } else {
      console.log(
        `${this.brand} ${this.model} don't set owner, he/she so young`
      );
    }
  }

  showFullInfo() {
    if(this.owner !== undefined){
      console.log(
        `Owner info\n${this.owner.showPersonInfo()}\nAuto info\nbrand: ${
          this.brand
        }\nmodel: ${this.model}\nyear: ${this.yearRelease}\ncar number: ${
          this.carNumber
        }\ncolor: ${this.color}`
      );
    }else{
      console.log(
        `Owner info\nThis car no owner\nAuto info\nbrand: ${
          this.brand
        }\nmodel: ${this.model}\nyear: ${this.yearRelease}\ncar number: ${
          this.carNumber
        }\ncolor: ${this.color}`
      );
    }
  }
}

const person1 = new Person("Tom", 21);
const person2 = new Person("John", 17);
const person3 = new Person("Emma", 30);
const person4 = new Person("Alex", 45);

console.log(person1.showPersonInfo());

const auto1 = new Automobile("BMW", "M5", 2020, "8565", "red");
const auto2 = new Automobile("Tesla", "model-s", 2020, "9456", "black");
const auto3 = new Automobile("Volkswagen", "Golf", 2012, "4565", "silver");
const auto4 = new Automobile("Mercedes", "gle", 2023, "3284", "white");

auto1.setOwner(person1);
auto2.setOwner(person2);
auto3.setOwner(person3);
auto4.setOwner(person4);

auto1.showFullInfo()
auto2.showFullInfo()
auto3.showFullInfo()
auto4.showFullInfo()
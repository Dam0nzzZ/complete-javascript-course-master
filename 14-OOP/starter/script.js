'use strict';

const Person = function (firstName, bitrhYear) {
    this.firstName = firstName;
    this.bitrhYear = bitrhYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log(jonas instanceof Person);

Person.prototype.calcAge = function () {
    console.log(2023 - this.bitrhYear);
};

console.log(Person.prototype);
jonas.calcAge();

console.log(jonas.__proto__.__proto__);

Person.prototype.height = 180;
console.log(jonas.height);
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed + 'km/h';
};
Car.prototype.accelerate = function () {
  this.speed = parseFloat(this.speed) + 10 + 'km/h';
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed = parseFloat(this.speed) - 5 + 'km/h';
  console.log(this.speed);
};
const bmw = new Car(12, 60.1);
bmw.accelerate();
bmw.brake();
bmw.brake();
*/
////////////////////////
class PersonCL {
    constructor(firstName, bitrhYear) {
        this.firstName = firstName;
        this.bitrhYear = bitrhYear;
    }
    calcAge() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        this.age = year - this.bitrhYear;
        console.log(year, this.age);
    }
}

const John = new PersonCL('John', 2001);
John.calcAge();

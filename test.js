"use strict";

class Polygon {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Squera extends Polygon {
    constructor(sideLength){
        super(sideLength, sideLength);
    }

    getArea() {
        return this.width * this.height;
    }

    setSideLength(value) {
        //this.sideLength = value;
        this.width = value;
        this.height = value;
    }
}

var squera = new Squera(2);

console.log(squera.getArea());
squera.setSideLength(3);
console.log(squera.getArea());

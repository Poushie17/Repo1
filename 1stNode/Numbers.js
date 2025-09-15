"use strict";

const points = 475;
console.log(points);
console.log(points.toFixed(2));
console.log(points.toPrecision(5));

const bonusPoints = new Number(125);
console.log(bonusPoints.toString());
console.log(bonusPoints.toFixed(4));
console.log(bonusPoints.toPrecision(4));

const bigNumber = 50000000;
console.log(bigNumber.toLocaleString());
console.log(bigNumber.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-9));

console.log(Math.round(5.3));
console.log(Math.round(5.7));

console.log(Math.ceil(6.2));
console.log(Math.floor(6.8));

console.log(Math.min(4,7,1,8,2));
console.log(Math.max(12,45,8,32,100));

console.log(Math.random());
console.log(Math.random() * 20);
console.log((Math.random() * 20) + 5);

const lower = 15;
const upper = 25;

console.log(Math.random() * (upper - lower + 1));
console.log(Math.floor(Math.random() * (upper - lower + 1)));

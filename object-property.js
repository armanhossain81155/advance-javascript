const students = [
{id : 20, name : "amir khan"},
{id : 30, name : "salman khan"},
{id : 40, name : "shahrukh khan"},
{id : 50, name : "sakib khan"},
{id : 60, name : "irfan khan"}
];
const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s=> s.id > 40);
const biggerOne = students.find( s=> s.id > 40);
console.log(biggerOne);
//console.log('my fist project');

let objArr=[
    {
        name: 'Ali' ,
        age: 21 ,
        gender: 'Male'
    },
    {
        name: 'Munaza',
        age: 21 ,
        gender: 'Female'
    },
    {
        name: 'Amna' ,
        age: 24 ,
        gender: 'Female'
    }
];

// console.log("First object in the array using the [] notation: ");
// console.log(objArr[0]);

let names = objArr.map(person => person.name);
console.log(names);
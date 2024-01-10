
const myObj = {
    name: 'Fedor',
    age: 32,
    famyle: {
        wife: {
            name: 'Anna',
            age: 21
        },
        chieldren: {
            name: 'Max',
            age: 1
        }
    },

    houses: [
        {id: 1, addres: 'New Yourk'},
        {id: 2, addres: 'Moscow'},
        {id: 3, addres: 'Paris'},
    ]
}

const newObj = {
    ...myObj,
    famyle: {
        ...myObj.famyle,
         wife:{...myObj.famyle.wife}
        },
    houses: [...myObj.houses]
        
        
}

newObj.name = 'Edvard'
console.log(myObj, '1');
console.log(newObj, '2');

console.log(newObj.famyle.chieldren);
console.log(myObj.famyle.chieldren);

newObj.famyle.chieldren = 23
console.log('1', myObj.famyle.chieldren);
console.log('2', newObj.famyle.chieldren);

newObj.famyle.wife.name = 'Maria'
console.log(newObj.famyle.wife);
console.log(myObj.famyle.wife);

newObj.houses[3] = { id: 5 }
console.log(myObj.houses);
console.log(newObj.houses);

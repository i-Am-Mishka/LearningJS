export const myObj = {
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

// console.log(myObj.famyle.chieldren.name)
// console.log(myObj.famyle.wife.age)

// console.log(myObj.houses[1].addres)

myObj.famyle.chieldren={
    chield1: {
        name: 'Max',
        age: 1
    },
    chield2: {
        name: 'repa',
        age: 67
    }
    
}

// console.log(myObj.famyle.chieldren.chield2.name);

myObj.money=(sum)=>{
    // console.log('ваша зарплата:' + sum);
    myObj.cash=sum
}


myObj.cash=0
myObj.money(100000)
// console.log(myObj.cash);

myObj.famyle.chieldren.kr = () => {
    // console.log(myObj.cash / 10);
    let allKr = myObj.cash / 10
    myObj.famyle.chieldren.chieldrenCash = Math.floor(allKr / 12)
    // console.log(myObj.famyle.chieldren.chieldrenCash);
}

myObj.famyle.chieldren.kr()
myObj.famyle.chieldren.chieldrenCash = 0
// console.log(myObj);







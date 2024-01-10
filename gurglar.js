import { myObj } from "./Obj.js"

Math.random()

console.log(Math.random() * 3)
console.log(Math.random() * 3)
console.log(Math.random() * 3)
console.log(Math.random() * 3)
console.log(Math.random() * 3)

Math.floor()

console.log(Math.floor(Math.random() * 3))
console.log(Math.floor(Math.random() * 3))
console.log(Math.floor(Math.random() * 3))
console.log(Math.floor(Math.random() * 3))
console.log(Math.floor(Math.random() * 3))

Math.ceil()

console.log(Math.ceil(Math.random() * 3));
console.log(Math.ceil(Math.random() * 3));
console.log(Math.ceil(Math.random() * 3));
console.log(Math.ceil(Math.random() * 3));

const arr = ['orenge', 'apple', 'blackberry', 'chery']
const arr1 = ['orenge', 'apple', 'blackberry', 'chery']
const arr2 = ['orenge', 'apple', 'blackberry', 'chery']

const randomNum = Math.floor(Math.random() * 4)

let randomFruit = () => {
    let one = arr[Math.floor(Math.random() * 4)]
    let two = arr1[Math.floor(Math.random() * 4)]
    let three = arr2[Math.floor(Math.random() * 4)]
    let result = one + ', ' + two + ', ' + three
    // let result = 'orenge, orenge, orenge,'

    if(result === 'orenge, orenge, orenge' ) { 
       myObj.cash = myObj.cash + 200
      return `${result}, 'Your win 200$'`
    } else if (result === 'apple, apple, apple'){
      myObj.cash = myObj.cash + 150
      return  `${result}, 'Your win 150$'`
    } else if(result === 'blackberry, blackberry, blackberry') {
      myObj.cash = myObj.cash + 100
      return  `${result}, 'Your win 100$'`
    } else if(result === 'chery, chery, chery'){
      myObj.cash = myObj.cash + 50
      return  `${result}, 'Your win 50$'`
    } else {
      myObj.cash = myObj.cash - 50
      return   `${result}, 'Try again!'`
    } 

} 
 
console.log(randomFruit());
console.log(myObj.cash);
console.log(randomFruit());
console.log(myObj.cash);
console.log(randomFruit());
console.log(myObj.cash);
console.log(randomFruit());
console.log(myObj.cash);
console.log(randomFruit());
console.log(myObj.cash);
console.log(randomFruit());
console.log(myObj.cash);
console.log(randomFruit());
console.log(myObj.cash);

//let brechna = `${"hren"}`
const bla =(hren)=>{
  let brechna = `hello ${hren}`
console.log(brechna);

}
bla("mir")

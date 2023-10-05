const arr = [12,23,34,56];

const black = () => {
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (!(arr[i] % 2)) {
        console.log(arr[i], '<--')
    } else {
        console.log(arr[i], '>++')   }
}

}
black()
console.log(2%2)
console.log(3%2)
console.log(false == 0)
console.log(false === 0)
console.log(true == 2)
console.log(2 === 1)
console.log(2 == 2)
console.log(false == true)

const arr2 = [-1, -5 , 0, 3, 4, 1.4, -10]

const yellow = () => {
    for (let i = 0; i < arr2.length; i++) {
        //  console.log(arr2[i])
         if(arr2[i] > 0) {
            console.log(arr2[i])
         }
    }
}
yellow()

// console.log(arr2[0])
// console.log(arr2[1])
// console.log(arr2[2])
// console.log(arr2[3])
// console.log(arr2[4])
// console.log(arr2[5])

const orenge = [2, 'five',  8, 'nine', false, 'one']

const rose = () => {

    for (let i = 0; i < orenge.length; i++) {
        // console.log(typeof orenge[i] === 'string' )
        if(typeof orenge[i] === 'string') {
            console.log (orenge[i])
        }
    }
}
rose()


// однорукий бандит!

const bandit = () =>{
    let random = Math.floor(Math.random() * 10)
    return  random
}

console.log(bandit())
console.log(bandit())
console.log(bandit())
console.log(bandit())

const pes = ["два", "три", "пять"]
const pen = [6,8,4,9,3]
const per = ["один", "синий", 7, 
777, null, true, false]

console.log (pes)
console.log (pen)
console.log (per)

const string = (a,b,c) =>{
    // console.log(a)
    let jhgf = a.join(", ")
    let red = b.join(", ")
    let acc = c.join(", ")
    // return jhgf
    console.log(jhgf)
    console.log(red)
    console.log(acc)

    

}
string(pes, pen, per)

let str = 'one trhee five four seven ten'

const trasform = (str) => {
    let asd = str.split(" ")
    let result = []
    for(let i = 0; i < asd.length; i++ ){
        console.log(asd[i].length)
        if(asd[i].length > result.length) {
            result[0] += asd[i]
        }
    }
    return result
}

console.log(trasform(str))
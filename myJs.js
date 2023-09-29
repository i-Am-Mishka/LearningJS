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
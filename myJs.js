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
    console.log(asd)
    let result = ''
    for(let i = 0; i < asd.length; i++ ){
        console.log(asd[i].length)
        if(asd[i].length > result.length) {
            result = asd[i]
        }
    }
    return result
}

console.log(trasform(str))

const k = (a, b, c) => {
if(c==="*"){ return a*b}

if(c==="+"){return a+b}

if(c==="/"){return a/b}

if(c==="-"){return a-b}
     return "неверный опер11"
}
console.log(k(2,6,'*'))
console.log(k(2,6,'+'))
console.log(k(2,6,'-'))
console.log(k(2,6,'/'))
console.log(k(2,6,'*/'))

let strings = 'жили были дед да баба'

let arrs = strings.split(' ')
console.log(arrs)
arrs[0] = 'слыли'
//arrs.unshift('слыли')
console.log(arrs)
//let arrss = arrs.slice(0, 1)(2,6)
//console.log(arrss)
const myFunct = (arr, str) => {
    let result = [...arr]
    result[0] = str
    return result

}

function add () {

}
console.log(myFunct(arrs, 'Эдуард молодец!'))
console.log(arrs)
let copyArr = myFunct(arrs,"fg")
console.log(Array.isArray(copyArr) )

console.log(Array.isArray(myFunct(arr, 'Эдуард молодец!')))

function edvard (arr, number) {

let result = [...arr]
result.unshift(number)
return result

}

console.log(edvard([3,8,6], 23))
console.log(Array.isArray(edvard([3,8,6], 23)) )



const someWord = 'one two three four five six seven'

function rosaria (text){
let arrText = text.split(' ')
    console.log(arrText)

    for (let i = 0; i < arrText.length; i++){
        if(i % 2){
            console.log('++')
            arrText[i]= arrText[i].toUpperCase()
        }
    }
    return arrText
}

console.log(rosaria(someWord))

const someWordUpper = 'ONE TWO THREE FOUR FIVE SIX SEVEN'

function taiti (par){
let arrSl = par.split(' ')
for (let i = 0; i < arrSl.length; i++){
    if(!(i % 2)){
arrSl[i] = arrSl[i].toLowerCase()
console.log('>>>', arrSl[i])
    }
}

// console.log(arrSl[0].toLowerCase())

return arrSl


}

console.log(taiti(someWordUpper))

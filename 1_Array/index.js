//fill
console.log("fill")
let nItems = new Array(10).fill(1)
console.log(nItems)

//from
console.log("\n")
console.log("from")
let nItems1 = Array.from({ length: 15 }, (_, i) => i + 1)

console.log("\n")
console.log("nItems1", nItems1)
let nItems2 = Array.from('string')

console.log("nItems2", nItems2)

//acces iterators 
console.log("\n")
console.log("acces iterators")
const objArr = [{ firtsname: "akrem", lastName: "hchaichi" }]

console.log("firtsname", objArr[0].firtsname)
console.log("firtsname", objArr[0]['firtsname'])

//keys and values
console.log("\n")
console.log("keys and values")
const nameArr = ['akrem', 'insaf', 'ghazi']

console.log("keys", Array.from(nameArr.keys()))
console.log("values", Array.from(nameArr.values()))
console.log("entries", Array.from(nameArr.entries()))

//toString 
console.log("\n")
console.log("toString")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(numbers.toString())

//join
console.log("\n")
console.log("toString")
const names = ['akrem', 'insaf', 'ghazi']
console.log(names.join('-'))


//toLocaleString
console.log("\n")
console.log("toLocaleString")
const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(prices.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))

//splice 'remove and add'
console.log("\n")
console.log("toLocaleString")
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.splice(4)
console.log("arr.splice(4)", arr)

arr.splice(2, 1)
console.log("arr.splice(4,2)", arr)

arr.splice(2, 0, 'a', 'b')
console.log("arr.splice(2,0,'a','b')", arr)


//concat spread operator
console.log("\n")
console.log("concat spread operator")
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5]

console.log("concat", arr1.concat(arr2))
console.log("spread operator", [...arr1, ...arr2])

const arr3 = [{ n: 1 }, { n: 2 }, { n: 3 }]
const arr3Copy = [...arr3] //JSON.parse(JSON.stringify(arr3))
arr3[0].n = 15
console.log("arr3", arr3)
console.log("arr3Copy", arr3Copy)

//foreach
console.log("\n")
console.log("foreach")
const animals = ['sheep', 'sheep', 'dog', 'sheep', 'cat', 'sheep', 'fish', 'sheep']
function countSheeps(animal) {
    if (animal === 'sheep') {
        this.sheeps += 1
    } else {
        this.nonSheeps += 1
    }
}

const count = { sheeps: 0, nonSheeps: 0 }

animals.forEach(countSheeps, count)
console.log("count", count)

//map
console.log("\n")
console.log("map")
const users = [
    { _id: 1, firtsname: "akrem", lastName: "hchaichi", age: 27 },
    { _id: 2, firtsname: "insaf", lastName: "sassi", age: 26 }
]

console.log("map", users.map(user => {
    return {
        _id: 1, firtsname: user.firtsname, lastName: user.lastName
    }
}))

//flat
console.log("\n")
console.log("flat")
const multiArr = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [[1, 2, 3, 4, 5, 6, 7, 8, 9]]]

console.log("flat", multiArr.flat(1))

//flatMap
console.log("\n")
console.log("flatMap")
const multiArr1 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]]

console.log("flatMap", multiArr1.flatMap(a => a.slice(0, 4)))

//reduce
console.log("\n")
console.log("reduce")
const animals1 = ['sheep', 'sheep', 'dog', 'sheep', 'cat', 'sheep', 'fish', 'sheep']
console.log("reduce", animals1.reduce((acc, animal) => {
    if (acc[animal]) {
        acc[animal] += 1
    } else {
        acc[animal] = 1
    }
    return acc
}, {}))

const ages = [15, 28, 93, 104, 55, 56, 17, 28, 39]
console.log("reduce", ages.reduce((acc, age) => {
    return acc + age
}, 0))
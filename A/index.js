/**
 * A1
 */

let input = [2, 3, -5, -2, 4]
const adjacentElementsProduct = (inputArray) => {
   let biggestProduct = 0
   for (let i = 0; i < inputArray.length; i++) {
      let product = inputArray[i] * inputArray[i + 1]
      if (product > biggestProduct) {
         biggestProduct = product
      }
   }
   return console.log(biggestProduct)
}

adjacentElementsProduct(input)
/**
 * A2
 */
const INPUTA2 = [60, 40, 55, 75, 64]
const getSumOfArr = (arr) => {
   return arr.reduce((prev, curr) => prev + curr)
}
const alternatingSums = inputArr => {
   let teamA = []
   let teamB = []
   for (let i = 0; i < inputArr.length; i++) {
      if (i % 2 !== 0) {
         teamB.push(inputArr[i])
      }
      else teamA.push(inputArr[i])
   }

   return console.log([getSumOfArr(teamA), getSumOfArr(teamB)])
}
alternatingSums(INPUTA2)
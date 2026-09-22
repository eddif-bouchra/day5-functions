let count = 0
const counter = () => count++
function makeCounter() {
  return counter()
}
console.log(makeCounter())
console.log(makeCounter())
console.log(makeCounter())
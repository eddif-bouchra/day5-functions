function makeGreeter() {
    return () => "Hi!"
}
const greet = makeGreeter()
console.log(greet())
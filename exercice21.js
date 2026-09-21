const classify = n => {
    if (n > 0)
        return "positive"
    return "non-positive"
}
let geet = classify(-2)
console.log(geet)
const describeAge = (age) => {
    if (age > 18) {
        return "adult";
    }
    return "minor"
}
console.log("You are a(n)", describeAge(20))
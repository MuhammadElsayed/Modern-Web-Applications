String.prototype.filterWords = function(words) {
    return this.split(" ").map(word => words.includes(word) ? "***" : word).join(" ");
}

console.log("This house is nice!".filterWords(["house", "nice"]));
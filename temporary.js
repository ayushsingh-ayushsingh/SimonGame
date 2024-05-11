const prompt = require("prompt-sync")();

var max = prompt("Enter the maximum value : ");
var numbers = [];

for (i = 0; i < max; i++) {
    numbers[i] = Math.floor(Math.random() * 4) + 1;
}

for (i = 0; i < max; i++) {
    console.log(numbers[i]);
}
console.log()

var count = 0;

for(i = 0; i < max; i++) {
    for(j = 0; j <= i; j++) {
        console.log(numbers[j]);
    }
    console.log();
    for(j = 0; j <i; j++) {
        var input = prompt();
        if(input != numbers[j]) {
            console.log("You made a mistake!!!");
            console.log("Game Over");
            count++;
            break;
        }
    }
    console.log();
    if(count > 0) {
        break;
    }
}

if(count == 0) {
    console.log("You won");
}
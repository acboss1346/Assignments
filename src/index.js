const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

const lines = data.trim().split('\n');

let sum = 0;
for (const line of lines) {
    const parts = line.split(' '); 
    const num = Number(parts[1]);  
    sum += num;
}

console.log(sum)
const fs = require('fs'); 
const { get } = require('http');

async function puzzleOne() {
    var input = await fs.promises.readFile('sample.txt', 'utf-8');
    var data = input.split("\n").map(input => input.trim());

    console.log(typeof(data));
    console.log((data[0].includes("ecl")));

    var count = 0;
    var i = 0;
    
    for (var obj in data) {
        console.log(i++);
        console.log(data[obj]);
        if(data[obj] === '') {
            
            break;
        }
        else {
            if(data[obj].includes("byr") && data[obj].includes("iyr") && data[obj].includes("eyr") && data[obj].includes("hgt") && data[obj].includes("hcl") && data[obj].includes("ecl") && data[obj].includes("pid")) {
                
            }
        }
    }

    console.log(count);
    
    
}

puzzleOne();


async function puzzleTwo(array) {
    var input = await fs.promises.readFile('sample.txt', 'utf-8');
    var data = input.split("\n").map(input => input.trim());

    
}

// puzzleTwo();
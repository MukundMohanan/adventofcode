<<<<<<< HEAD
const fs = require('fs'); 
const { get } = require('http');

async function puzzleOne() {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n").map(input => input.trim());
    // console.log(data);
    //console.log(data.length);
    var row = column = count = 0;
    //console.log(data[0][2]);
    while(row < data.length -1){
        row += 1;
        //console.log(row);
        column += 3;
        if(data[row][column%data[0].length] === '#') {
            count += 1;
            // console.log(row,column);
        }
        
    }
    console.log(count);
    
}

puzzleOne();


async function puzzleTwo(array) {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n").map(input => input.trim());

    // console.log(data);
    // console.log(data.length);
    var row = column = count = 0;
    // console.log(data[0][2]);
    while(row < data.length -1){
        row += Number(array[2]);
        // console.log(row);
        column += Number(array[0]);

        if(data[row][column%data[0].length] === '#') {
            count += 1;
            // console.log(row,column);
        }
        
    }
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(count);
        }, 200);
      });
}

var getmeresults = async function(){
    var result = 1;
    // WHILE SENDING OBJECTS AS ARRAY, IM NOT ABLE TO ACCESS THE AS AN ARRAY AS IT IS A STRING. PS: I DIDNT TRY TO split(",") BUT STILL DIDNT WORK. WHAT A BUMMER;
    var arrays = {
        slop1: [1,1],
        slop2: [3,1],
        slop3: [5,1],
        slop4: [7,1],
        slop5: [1,2]
    };
    for(const i in arrays){
        result *= await puzzleTwo(`${arrays[i]}`);
    }
    console.log(result);
}

=======
const fs = require('fs'); 
const { get } = require('http');

async function puzzleOne() {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n").map(input => input.trim());
    // console.log(data);
    //console.log(data.length);
    var row = column = count = 0;
    //console.log(data[0][2]);
    while(row < data.length -1){
        row += 1;
        //console.log(row);
        column += 3;
        if(data[row][column%data[0].length] === '#') {
            count += 1;
            // console.log(row,column);
        }
        
    }
    console.log(count);
    
}

puzzleOne();


async function puzzleTwo(array) {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n").map(input => input.trim());

    // console.log(data);
    // console.log(data.length);
    var row = column = count = 0;
    // console.log(data[0][2]);
    while(row < data.length -1){
        row += Number(array[2]);
        // console.log(row);
        column += Number(array[0]);

        if(data[row][column%data[0].length] === '#') {
            count += 1;
            // console.log(row,column);
        }
        
    }
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(count);
        }, 200);
      });
}

var getmeresults = async function(){
    var result = 1;
    // WHILE SENDING OBJECTS AS ARRAY, IM NOT ABLE TO ACCESS THE AS AN ARRAY AS IT IS A STRING. PS: I DIDNT TRY TO split(",") BUT STILL DIDNT WORK. WHAT A BUMMER;
    var arrays = {
        slop1: [1,1],
        slop2: [3,1],
        slop3: [5,1],
        slop4: [7,1],
        slop5: [1,2]
    };
    for(const i in arrays){
        result *= await puzzleTwo(`${arrays[i]}`);
    }
    console.log(result);
}

>>>>>>> ccb31d54a5d9a842e25d7b3c192b572576977cab
getmeresults();
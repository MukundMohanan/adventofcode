const fs = require('fs'); 
const { exit } = require('process');


async function puzzleOne() {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n");
    var num = data.map(data => {
        return (Number(data));
    });
    
    // var set = new Set(num);
    // console.log(num.length);
    // console.log(set.size);
    // Since the length/size are same we dont have to create a set.
    
    var store = [];
    // console.log(num);
    num.forEach(i => {
        var diff = 2020 - i;
        if(num.includes(diff)){
            store.push(diff);
        };
    });
    //console.log(store);
    // We know there are 2 numbers to be multiplied so Im gonna directly multiply them instead of iterate over the array "store"

    var result = store[0] * store[1];
    console.log(result);
}

puzzleOne();

async function puzzleTwo() {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n");
    var num = data.map(data => {
        return (Number(data));
    });
    
    var store = [];
    // console.log(num);
    num.forEach(i => {
        num.forEach(j => {
            if((i+j)<2020) {
                var diff = 2020 - (i+j);
                if(num.includes(diff)){
                    store.push(i,j,diff);
                    // console.log(i,j,diff);
                }
            }
        })
    });
    var set = new Set(store);
    console.log(store[0]*store[1]*store[2]);

}

puzzleTwo();
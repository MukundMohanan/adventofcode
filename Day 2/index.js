const fs = require('fs'); 

async function puzzleOne() {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n");
    var result = 0;
    for(var i = 0; i < data.length; i++){
        var count = 0;
        var tempArray = data[i].split(" ");
        tempArray[1] = tempArray[1].replace(":","");
        var limit = tempArray[0].split("-");
        var letter = tempArray[1];
        for(var j = 0; j < tempArray[2].length; j++){
            if(tempArray[2][j] === letter){
                count++;
            }
            
        }
        if((limit[0]<=count) && (limit[1]>=count)){
            result++;
        }
    }
    
    console.log("result " + result);

}

puzzleOne();

async function puzzleTwo() {
    var input = await fs.promises.readFile('input.txt', 'utf-8');
    var data = input.split("\n");
    var result = 0;
    for(var i = 0; i < data.length; i++){
        var leftCount = rightCount = 0;
        var tempArray = data[i].split(" ");
        tempArray[1] = tempArray[1].replace(":","");
        var limit = tempArray[0].split("-");
        var letter = tempArray[1];
        if(tempArray[2][(limit[0])-1] === letter){
            leftCount++;
        }
        if(tempArray[2][(limit[1])-1] === letter){
            rightCount++;
        }
        // PS: I KNOW XOR SHOULD BE USED FOR THIS VALIDATION BUT NAH
        if(leftCount == 1 && rightCount == 0){
            result++;
        }
        if(leftCount == 0 && rightCount == 1){
            result++;
        }
    }
    console.log(result);

}

puzzleTwo();
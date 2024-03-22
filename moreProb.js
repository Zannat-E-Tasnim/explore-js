// Feet to Mile conversion
function feetToMile(num){
    return num*0.000189394;
}
console.log(feetToMile(10000));

//calculate wood - for chair 1 cb, for table 3 cb, for bed 5 cb
function woodCalculator(chairNo,tableNo,bedNo){
    return chairNo + tableNo * 3 + bedNo * 5;
}
console.log(woodCalculator(6,1,3));

/** calculate brick --- height of 1st 10 floor = 15 feet, 
 *                      height of 11 to 20 floor = 12 feet,
 *                      height of more than 20 floor = 10 feet.
 * for each feet of height 1000 brick needed.
*/
function brickClaculator(floorNo){
    let noOfBrick;
    if(floorNo<=10){
        noOfBrick = (floorNo*15)*1000;
        return noOfBrick;
    }
    else if(floorNo>10 && floorNo<=20){
        noOfBrick = (150 + (floorNo-10)*12)*1000;
        return noOfBrick;
    }
    else{
        noOfBrick = (150 + 120 + (floorNo-20)*10)*1000;
        return noOfBrick;
    }
}
console.log(brickClaculator(30));


// find the smallest string of a string array
function tinyFriend(name){
    let min = name[0].length;
    let minFriend = name[0];
    for(let i=0;i<name.length;i++){
        if(name[i].length < min){
            min = name[i].length;
            minFriend = name[i];
        }
    }
    return minFriend;
}
let nameOfFriends = ["Tasnim","Polin","Lamiya","Moumi","Rahi","Hemel","Sajol","Raisa"];
console.log(tinyFriend(nameOfFriends));
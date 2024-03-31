import inquirer from "inquirer";

let myBalance = 10000; // Dollar;
 let myPin = 1234;


 let pinAnswer = await inquirer.prompt([{
name:"pin",
type:"number",
message:"Enter your pin code:"}]);


// for correct pin;
if (pinAnswer.pin === myPin){
console.log("Correct pin code!")
  

// for list of options;
let operationAns = await inquirer.prompt([{
name:"options",
type:"list",
message:"Please select options:",
choices:["Withdraw" , "Checkbalance" , "Fastcash"]
}]);


// for withdraw;
if (operationAns.options === "Withdraw" ){
 let amountAns = await inquirer.prompt([{
name:"amount",
type:"number",
message:"Enter your amount:"}]);


// if you enter amount greater than your balance;
if(amountAns.amount > myBalance)
        {console.log("Insufficient balance!");}


        //when you deduct amount less than my balance;
 else if (myBalance -= amountAns.amount){
                console.log(`Your remaining balance is: ${myBalance}.`);
        }};


// for Checkbalance;
if(operationAns.options === "Checkbalance"){
console.log("Your current balance is 10000.");}


// for fastcash list;
if (operationAns.options === "Fastcash"){
let operationAns2 = await inquirer.prompt([{
name:"options2",
type:"list",
message:"Please select amount:",
choices:[2000 , 4000 , 6000 , 8000]
}]);


// for 2000 fastcash;
 if(operationAns2.options2 === 2000){
        myBalance -= operationAns2.options2;
        console.log("Your remaining balance is 8000.");}


// for 4000 fastcash;
else if(operationAns2.options2 === 4000){
myBalance -= operationAns2.options2;
console.log("Your reamianing balance is:6000.");}


// for 6000 fastcash;
else if(operationAns2.options2 === 6000){
    myBalance -= operationAns2.options2;
    console.log("Your remaining balance is:4000.");}


    // for 8000 fastcash;
   else if(operationAns2.options2 === 8000){
        myBalance -= operationAns2.options2;
        console.log("Your remaining balance is:2000.")};}}

        
//when you enter incorrect pin;
        else {
                console.log("Incorrect pin code!")
        };

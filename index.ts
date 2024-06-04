#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import {differenceInSeconds} from "date-fns";

console.log(chalk.red("COUNTDOWN TIMER IS STARTING.....\n"));
let uInput= await inquirer.prompt([
 {
    name:"ans",
    type:"number",
    message:"Enter your time in seconds :",
 }
]);
let time=uInput.ans;
function startT (val:number){
 let initTime=new Date();
 let timeInterval=new Date ().setSeconds(initTime.getSeconds() + (val+2))
 let intFormat=new Date(timeInterval)
        
       setInterval (()=>{
       let currentTime=new Date();
       let timeDiff= differenceInSeconds(intFormat,currentTime)
    //    console.log(timeDiff)  
      if (timeDiff<=0){
        process.exit();
    }
         let minutes=Math.floor(timeDiff/60)
         let seconds=Math.floor(timeDiff%60)
          console.log(chalk.green(`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`));         
        },1000) // miliseconds
    
}
startT(time);
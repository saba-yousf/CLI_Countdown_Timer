import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const responce = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: " Please enter the number of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "second must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = responce.userInput;
function startTime(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds()
        + value);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log("Timer has expire");
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);

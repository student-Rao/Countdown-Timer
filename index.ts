import inquirer from "inquirer";
const timeInSeconds=await inquirer.prompt({
    message:"Enter the second :",
    name:"second",
    type:"input"
})
function countdown(seconds: number): void {
    let intervalId = setInterval(() => {
        if (seconds > 0) {
            console.log(`Time remaining: ${seconds} seconds`);
            seconds--;
        } else {
            // clearInterval(intervalId);
            console.log("Time's up!");
            process.exit()
        }
    }, 1000);
}

// Start the countdown
// const timeInSeconds = 10; // Set your desired countdown time here
countdown(timeInSeconds.second);

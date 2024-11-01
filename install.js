const { execSync } = require('child_process');

const delay = 600; // Delay in seconds
function sleep(seconds) {
  execSync(`sleep ${seconds}`);
}

console.log(`Sleeping for ${delay} seconds...`);
sleep(delay); 
console.log("Woke up! Continuing installation...");

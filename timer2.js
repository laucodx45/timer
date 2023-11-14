const readline = require('readline');
// This interface allow us to read the input without user pressing enter
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = (input) => {
  return setTimeout(() => {
    process.stdout.write('\x07');
  }, input * 1000);
};
// everytime a new timer is set it updates the timerId
let timeoutId;

process.stdin.on('data', (chunk) => {
  const input = chunk.toString().trim().toLowerCase();
  let regex = /[1-9]/;

  if (input === 'b') {
    process.stdout.write('\x07');
  }
  // when input is 1 - 9
  if (regex.test(input)) {
    const num = Number(input);
    // clear the last timerId
    clearTimeout(timeoutId);
    timeoutId = timer(num);
    console.log(` setting timer for ${num} seconds`);
  }
  if (input === '\u0003') {
    console.log("Thanks for using me, ciao!");
    rl.close();
    process.exit();
  }
});
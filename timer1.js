// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments
// process.stdout.write('\x07') beep sound
const inputFromCI = process.argv.slice(2);

const timer = (arrayOfSeconds) => {
  for (const seconds of arrayOfSeconds) {
    // edge cases
    
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
};

timer(inputFromCI);

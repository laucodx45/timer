const inputSeconds = process.argv.slice(2);

const timer = (arrayOfSeconds) => {
  
  if (arrayOfSeconds.length === 0) {
    console.log('invalid input: No time duration provided');
    return;
  }

  // input arg is number but wrapped in ''
  const secondsAsNumber = arrayOfSeconds.map((element) => Number(element));

  for (const seconds of secondsAsNumber) {

    if (isNaN(seconds)) {
      console.log(`invalid input, input must be a number`);
      continue;
    }

    if (seconds <= 0) {
      console.log(`invalid input: ${seconds} , input must be a positive number`);
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
    
  }
};

timer(inputSeconds);
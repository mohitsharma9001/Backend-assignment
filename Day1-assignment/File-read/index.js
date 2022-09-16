const fs = require("fs");

// const method = process.argv[2];
// const path = process.argv[3];
// const content = process.argv[4];

const readFile = fs.readFileSync("input.txt",{
    encoding : 'utf-8'
})
console.log(readFile)


fs.appendFile('input.txt', 'First line added!', 'utf-8', err => {
    if (err) {
      throw err;
    }
    console.log('First line written.');
    
  });
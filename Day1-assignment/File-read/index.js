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

  const create = fs.createWriteStream("input.txt")
  console.log("file created")

 const rename = fs.renameSync("input.txt","text.txt")
 console.log("File rename success")
//   const deleate = fs.unlinkSync("input.txt")
//   console.log("deleated file")
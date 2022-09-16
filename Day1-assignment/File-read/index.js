const fs = require("fs");

// Read file function

const readFile = fs.readFileSync("input.txt",{
    encoding : 'utf-8'
})
console.log(readFile)

// Append data function

fs.appendFile('input.txt', 'First line added!', 'utf-8', err => {
    if (err) {
      throw err;
    }
    console.log('First line written.');
    
  });

  // Create file function

  const create = fs.createWriteStream("input.txt")
  console.log("file created")


// rename file function

 const rename = fs.renameSync("input.txt","text.txt")
 console.log("File rename success")


 // delete file function

   const deleate = fs.unlinkSync("input.txt")
  console.log("deleated file")
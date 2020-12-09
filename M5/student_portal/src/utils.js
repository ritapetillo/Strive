const path = require("path");
const fs = require("fs");

const readFile = (folderPath,file) => {
const folder = path.join(__dirname,folderPath);
  //I get the path
  const filePath = path.join(folder, file);
  //I read the file
  const buf = fs.readFileSync(filePath);
  //I get the string version of the file
  const content = buf.toString();
  //I convert and return the string into JSON
  return JSON.parse(content);
};

const writeFile = (folderPath,fileToWrite,JSONFile) => {
  const folder = path.join(__dirname, folderPath);
  //I get the path
  const filePath = path.join(folder, fileToWrite);
    fs.writeFileSync(filePath,JSON.stringify(JSONFile));

}

module.exports = {readFile,writeFile}
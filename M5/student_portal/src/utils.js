const path = require("path");
const fs = require("fs");
const {writeJSON,readJSON,write} = require("fs-extra");



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

const readFileAsync = async (filePath) => {
  try {
    let file = await readJSON(filePath)
    return file
  } catch (err) {
    throw new Error('There was a problem reading the file')
  }
}

const writeFileAsync = async(filePath, content) => {
  try { 
    console.log(content)
    await writeJSON(filePath,content)
  } catch (err) {
        throw new Error("There was a problem saving the content");

  }
}
const writeImages = async (filePath, content) => {
  try {
    console.log(content);
    await write(filePath, content);
  } catch (err) {
    throw new Error("There was a problem saving the content");
  }
};


module.exports = {
  readFile,
  writeFile,
  readFileAsync,
  writeFileAsync,
  writeImages,
};
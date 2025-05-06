const fs = require("fs");
const filePath = "sample.txt";

if (!fs.existsSync(filePath)) {
  //checks if the file exists , else creates with the given initial content
  fs.writeFileSync(filePath, "Hello, my name is Vedant Gadge");
  console.log(`File created  ${filePath}`);
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error while reading file: ", err);
  }
  console.log("File content: \n", data);
  const newContent =
    "Hello, my name is Vedant Gadge \n I am a SY CSE(DS) student";
  fs.writeFile(filePath, newContent, (err) => {
    if (err) {
      console.log("Error while reading file: ", err);
    }
    console.log("File content changed");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error while reading file: ", err);
      }
      console.log("File content: \n", data);
    });
  });
});

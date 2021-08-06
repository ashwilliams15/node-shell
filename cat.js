const fs = require("fs");

const cat = function (fileName) {
  fs.readFile(`./${fileName}`, "utf8", function (err, data) {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  });
};

module.exports = cat;
//turn cmd into an array

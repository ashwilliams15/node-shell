const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim().split(" ");
  let fileName = cmd[1];
  cmd = cmd[0];

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat") {
    cat(fileName);
  } else if (cmd === 'curl') {
    curl(fileName);
  }  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

module.exports = pwdPrint;

const pwdPrint = function () {
  return process.stdout.write(process.cwd());

  //process.stdout.write("\nprompt > ");
};

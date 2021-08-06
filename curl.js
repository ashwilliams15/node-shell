const request = require('request')

const curl = function (site) {
  request(`${site}`, function (err, response, body) {
    if (err) throw err;
    process.stdout.write(body)
    process.stdout.write("\nprompt > ")
  })
}

module.exports = curl;

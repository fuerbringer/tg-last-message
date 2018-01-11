const request = require('request')
const fs = require('fs')
var conf = require('./tg-config.json')

var url = 'https://api.telegram.org/bot' + conf.token + '/getUpdates'

request({url: url, qs: {'limit': 100, 'offset': conf.counter}}, (err, res, body) => {
  if (err) {
    console.log('ERROR')
    return console.error(err)
  }
  var msgs = JSON.parse(body).result

  getLastTxtMsg(msgs)
})

function getLastTxtMsg (msgs) {
  var type = ''
  if (msgs[msgs.length - 1].message === undefined) {
    type = 'edited_message'
  } else {
    type = 'message'
  }

  if (msgs[msgs.length - 1][type].text !== undefined) {
    var str = msgs[msgs.length - 1][type].text.split('\n').join(' / ')
    console.log(str)
    conf.counter = msgs[msgs.length - 1].update_id
    fs.writeFileSync('./tg-config.json', JSON.stringify(conf))
  } else {
    msgs.splice(-1, 1)
    getLastTxtMsg(msgs)
  }
}

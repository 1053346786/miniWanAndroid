var config = require('../utils/config.js');
let request = (type, url, data) => new Promise((resole, reject) => {
  wx.request({
    method: type, 
    url: url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'cookie': wx.getStorageInfoSync('sessionid')
    },
    success: function(res) {
      console.log(res.data)
      if (res.data.errorCode == 0) {
        if (url == config.login || url == config.register) {
          wx.setStorageSync("sessionid", res.header['Set-Cookie'])
        }
        resole(res.data)
      } else {
        reject(res.data)
      }
    },
    fail: function(err) {
      console.log(err)
      reject(err)
    }
  })
})

module.exports = {
  request: request
}
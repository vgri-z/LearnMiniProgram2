//app.js
// App({
//   onLaunch: function () {
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               if (this.userInfoReadyCallback) {
//                 this.userInfoReadyCallback(res)
//               }
//             }
//           })
//         }
//       }
//     })
//   },
//   globalData: {
//     userInfo: null
//   }
// })

const TOKEN = "token";

App({
  globalData: {
    token: ""
  },
  onLaunch(options) {
    // 验证token，从缓存中取出token
    const token = wx.getStorageSync(TOKEN);
    // 判断token是否有值
    if (token && token.length !== 0) { //已经有token，验证token是否过期
      this.check_token(token)
    } else { //没有token，进行登录操作
      this.login()
    }
  },
  check_token(token) {
    console.log("执行了验证token的操作")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "post",
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          console.log("token有效")
          this.globalData.token = token;
        } else {
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log("执行了登录操作")
    wx.login({
      // code只有五分钟的有效期
      success: (res) => {
        // 1.获取code
        const code = res.code;

        // 2.将code发送到服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token;

            // 2.将token保存到globalData中
            this.globalData.token = token;

            // 3.进行本地存储，将token存储到storage里面
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
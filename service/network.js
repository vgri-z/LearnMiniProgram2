export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      methods: options.method || "get",
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}

// export default function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       methods: options.method || "get",
//       data: options.data || {},
//       success: (res) => {
//         resolve(res)
//       },
//       fail: (res) => {
//         reject(res)
//       }
//     })
//   })
// }
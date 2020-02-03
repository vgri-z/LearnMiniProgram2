// pages/home/home.js
Page({
  data: {
    title: "Hello World"
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=vgri&age=22&height=1.84',
    })
  }
})
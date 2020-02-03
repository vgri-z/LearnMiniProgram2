// pages/detail/detail.js
Page({
  onLoad: function(options) {
    console.log(options)
  },
  onUnload: function() {
    // 1.获取首页的页面对象
    // getCurrentPages()获取当前所有栈的页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2];
    // console.log(pages)
    // 2.调用页面对象的setData()
    home.setData({
      title: "World Hello"
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: '1'
    })
  }
})
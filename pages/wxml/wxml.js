// pages/wxml/wxml.js
Page({
  data: {
    message: "你好，小程序",
    firstName: "Monica",
    lastName: "Galler",
    age: 19,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 44,
    movies: ["大话西游", "肖申克的救赎", "阿甘正传"],
    nums:[[12,13,14],[32, 34, 52], [79, 89, 10]],
    letters: ['vgri', 'vae', 'siri']
  },
  onLoad () {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score += 6
    })
  }
})
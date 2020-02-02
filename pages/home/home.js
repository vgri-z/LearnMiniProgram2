// pages/home/home.js
import request from "../../service/network.js"

Page({
  data:{

  },

  onLoad: function (options) {
    // 原生的方式发送网络请求
    this.get_data_origin()

    // 2.使用封装的request发送请求
    request({
      url: "http://106.54.54.237:8000/api/hy/recommend"
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    // 发送网络请求
    // 1.发送简单地get请求
    // wx.request({
    //   url: 'http://106.54.54.237:8000/api/hy/recommend',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // 2.get请求，并且携带参数
    // wx.request({
    //   url: 'http://106.54.54.237:8000/api/hy/home/data',
    //   data: {
    //     type: "sell",
    //     page: 1
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // 3.post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   data: {
    //     name: "vgri",
    //     age: 22
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fail: (err) => {
    //     console.log(err)
    //   }
    // })
  }
})
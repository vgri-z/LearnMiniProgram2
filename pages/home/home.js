// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      icon: "loading",
      duration: 2000,
      mask: true,
      success: () => {
        console.log("展示弹窗成功")
      },
      fail: () => {
        console.log("展示弹窗失败")
      },
      complete: () => {//showToast调用成功与失败都会执行
        console.log("完成showToast的调用")
      }
    })
  },
  handlleShowModal() {
    wx.showModal({
      title: 'title',
      content: 'content',
      cancelText: "quit",
      cancelColor: 'red',
      success: (res) => {
        console.log(res)
        if(res.cancel) {
          console.log("用户点击了取消按钮")
        }
        if(res.confirm) {
          console.log("用户点击了确定按钮")
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: 'loading',
      mask: true
    }),

    setTimeout(() => {
      //必须手动hideLoading才可以让loading消失
      wx.hideLoading()
    }, 3000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'lime',
      success: (res) => {
        console.log(res)
      }
    })
  },
  onShareAppMessage: function (options) {
    return {
      title: "Hello World",
      path: "pages/about/about",
      imageUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2726287664,3762141500&fm=26&gp=0.jpg"
    }
  }
})
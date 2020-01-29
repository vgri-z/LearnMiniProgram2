// pages/image/image.js
Page({
  data: {
    imagePath: ""
  },
  handleChooseAlbum() {
    // 要调用系统的API，让用户在相册中选择图片或者拍照
    wx.chooseImage({
      success: (res) => {
        // 1.从res中取出并保存路径
        const path = res.tempFilePaths[0];

        // 2.将路径保存到imagePath里面
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad() {
    console.log("imageLoad")
  }
})
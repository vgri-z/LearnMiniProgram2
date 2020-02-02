// pages/home/home.js
Page({
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log('---------', event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event.detail)
  },
  handleSelIncrement() {
    // 最终目的: 修改my-sel中的counter
    // 1.获取组件对象
    const my_sel = this.selectComponent(".sel-class");
    console.log(my_sel);

    // 通过setData修改组件中的数据不合理，组件中的数据应由组件自己的方法来修改
    // my_sel.setData({
    //   counter: my_sel.data.counter + 5
    // })

    // 3.通过my-sel里的方法对数据进行修改
    my_sel.selIncrement(5)
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})
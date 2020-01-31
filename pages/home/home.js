// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '鞋子', '帽子']
  },
  handleBtnClick() {
    console.log("按钮发生点击")
  },
  handleTouchStart() {
    console.log("handleTouchStart")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleTap() {
    console.log("handleTap")
  },
  handlelongPress() {
    console.log("handlelongPress")
  },
  // -----------------事件对象分析
  handleEventClick(event) {
    console.log("--------", event)
  },
  handleEventEnd(event) {
    console.log("++++++++", event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleInner(event) {
    console.log(event)
  },
  // -----------事件的传递参数
  handleItemClikc(event) {
    console.log(event);
    const data = event.currentTarget.dataset;
    console.log(data.index);
    console.log(data.item);
  },
  // ----------------事件冒泡与事件捕获
  handleCaptureOuter() {
    console.log("handleCaptureOuter")
  },
  handleBulbleOuter() {
    console.log("handleBulbleOuter")
  },
  handleCaptureMiddle() {
    console.log("handleCaptureMiddle")
  },
  handleBulbleMiddle() {
    console.log("handleBulbleMiddle")
  },
  handleCaptureInner() {
    console.log("handleCaptureInner")
  },
  handleBulbleInner() {
    console.log("handleBulbleInner")
  }
})
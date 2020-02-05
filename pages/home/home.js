// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from "../../service/home.js" //不可用绝对路径

const TOP_DISTANCE = 1000;
const currentType = ["pop", "new", "sell"];

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行' , '新款', '精选'],
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    currentType: "pop",
    isBackTopShow: false,
    isTabFixed: false,
    tabScrollTop: 0
  },
  onLoad () {
    // 请求轮播图与推荐的数据
    this._getMultiData();
    // 请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },
  onShow() {
    // 在onshow里面获取到的组件的scrollTop是不准确的，因为这个时候页面虽然已经显示好了，但是图片并不一定全部加载完成，所以获取到的scrollTop是不准确的，可以在图片加载完成后再相应的回调函数里面获取scrollTop，或是搞一个定时器
  //  setTimeout(() => {
  //    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
  //      console.log(rect.top)
  //    }).exec()
  //  },1000)
  },
  // -------------网络请求相关的函数------------------
  _getMultiData() {
    getMultiData().then(res => {
      // 取出data
      const data = res.data.data;
      // console.log(data)
      // 将取出的数据保存到data里面
      this.setData({
        banners: data.banner.list,
        recommends: data.recommend.list
      })
    })
  },
  _getGoodsData(type) {
    const page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then(res => {
      const data = res.data.data.list;
      // console.log(data);

      const oldList = this.data.goods[type].list;
      oldList.push(...data);

      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  //-----------------------事件处理相关的函数------------------
  handleItemClick(options) {
    const index = options.detail.index;

    this.setData({
      currentType: currentType[index]
    })
  },
  
  // 监听上拉加载更多
  onReachBottom() {
    this._getGoodsData(this.data.currentType)
  },

  // 监听推荐图片的加载完成，来获取tab-control正确的scrollTop
  handleImageLoad() {
    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
      const scrollTop = rect.top;

      this.setData({
        tabScrollTop: scrollTop
      })
    }).exec()
  },

  // 控制back-top的隐藏于消失
  onPageScroll(options) {
    const scrollTop = options.scrollTop;

    // 官方：不建议在滚动函数的回调中频繁的调用this.setData()
    const flag1 = scrollTop >= TOP_DISTANCE;
    if(flag1 !== this.data.isBackTopShow) {
      this.setData({
        isBackTopShow: flag1
      })
    }

    // 控制tab-control是否固定定位
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2 !== this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }
})
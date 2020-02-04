// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from "../../service/home.js"

const TOP_DISTANCE = 1000;
const types = ['pop', 'new', 'sell']

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] }
    },
    currentType: "pop",
    isShowBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },
  onLoad: function () {
    // 请求轮播图与推荐的数据
    this._getMultiData();

    // 请求商品的数据
    this._getGoodsData("pop");
    this._getGoodsData("new");
    this._getGoodsData("sell");
  },
  // -------------------网络请求相关的方法------------------
  _getGoodsData(type) {
    // 获取页码
    const page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then(res => {
      // console.log(res);
      // 取出数据
      const list = res.data.data.list;

      // 将数据保存到对应的goods里面的list里面
      const oldList = this.data.goods[type].list;
      oldList.push(...list);

      // 将数据设置到data中的goods里面
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,//这里需要加[]
        [pageKey]: page
      })
    })
  },
  _getMultiData() {
    getMultiData().then(res => {
      const data = res.data.data;
      this.setData({
        banners: data.banner.list,
        recommends: data.recommend.list
      })
    })
  },
  // --------------事件监听相关的方法-----------------------
  handleItemClick(event) {
    // 取出index
    const index = event.detail.index;
    // console.log(index);

    this.setData({
      currentType: types[index]
    })
  },

  // 上拉加载更多
  onReachBottom() {
    // console.log("滚到了底部")
    this._getGoodsData(this.data.currentType);
  },

  // 点击backTop回到顶部
  handleBackTop() {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },

  // 图片加载完成后计算tab-control的scrollTop
  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.setData({
        tabScrollTop: rect.top
      })
    }).exec()
  },

  // 监听页面的滚动
  onPageScroll(options) {
    const scrollTop = options.scrollTop;

    // 官方：不要在滚动函数调用中频繁地调用this.setData()，每滚动一次就要计算一次，所以消耗性能
    let flag1 = scrollTop >= TOP_DISTANCE;
    if (flag1 !== this.data.isShowBackTop) {
      this.setData({
        isShowBackTop: flag
      })
    }

    let flag2 = scrollTop >= this.data.tabScrollTop
    if(this.data.isTabFixed !== flag2) {
      this.setData({
        isTabFixed: flag2
      })
    } 
  }
})
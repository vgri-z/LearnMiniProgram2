// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad() {
      if(this.data.isLoad) {
        this.triggerEvent("imageLoad")
        this.data.isLoad = false;
      }
    }
  }
})

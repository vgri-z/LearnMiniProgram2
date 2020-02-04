// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    itemClick(event) {
      // 1.取出index
      const index = event.currentTarget.dataset.index;

      // 2.将currentIndex值修改为indexo
      this.setData({
        currentIndex: index
      })

      // 3.通知页面内部的点击事件
      this.triggerEvent('itemClick', {index, titles: this.properties.titles[index]}, {})
    }
  }
})

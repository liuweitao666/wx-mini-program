// components/backtop/backtop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  externalClasses:['position'],
  /**
   * 组件的方法列表
   */
  methods: {
    backtop() {
      console.log(123)
      this.triggerEvent('handlebacktop')
    }
  }
})

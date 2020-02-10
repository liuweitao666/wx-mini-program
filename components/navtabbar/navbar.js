// components/navtabbar/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },
  externalClasses: ['activeback','content'],
  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0,
    type: ['pop','sell','new']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeclass(e){
      var index =  e.currentTarget.dataset.index
      this.setData({
        currentindex:index
      })
      this.triggerEvent('itemclick', { index, type: this.data.type[index]})
    }
  }
})

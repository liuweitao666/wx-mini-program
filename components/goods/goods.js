// components/goods/goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsitem:{
      type:Array,
      value:[]
    }
  },
  pageLifetimes:{
    show(){
      console.log('创建完成')
      console.log(this.properties.goodsitem)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navgodetail(e){
      const iid=e.currentTarget.dataset.iid
      this.triggerEvent('gotodetail', { iid: iid})
    }
  }
})

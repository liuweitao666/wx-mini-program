// pages/home/home.js
const app = getApp()
const userinfo = app.globalData.name
import {request} from '../../network/home/home.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    bannerlist:[],
    // 推荐数据
    recommendlist:[],
    // 请求商品的类型
    type:'pop',
    // 保存请求到的数据
    goods:{
      "pop":{page:0,list:[]},
      "sell": {page:0,list:[]},
      "new":{page:0,list:[]}
    },
    // 回到顶部
    top:{},
    // 控制下拉加载更多的动画
    isload:false,
    // 控制导航栏的显示
    isnav:false,
    // 优化图片加载变量
    imgload:false,
    navscrolltop:0
  },
  handleTabclick(e){
    this.setData({
      type:e.detail.type
    })
    const index = e.detail.index
    const fixednav = this.selectComponent('.fixednav')
    const navcontrol = this.selectComponent('.navcontrol')
    fixednav.setData({
      currentindex: index
    })
    navcontrol.setData({
      currentindex:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网络请求，获取轮播图数据
    // console.log(options)
    this.gethomedatalist()
    this.getGoods('pop')
    this.getGoods('sell')
    this.getGoods('new')
  },
  // 获取轮播图数据和推荐数据
  gethomedatalist(){
    request({
      url: '/home/multidata'
    }).then(res=>{
      res.data.data.banner.list.forEach((item,index)=>{
        item.id =  index
      })
      // console.log(res)
      this.setData({
        bannerlist:res.data.data.banner.list,
        recommendlist: res.data.data.recommend.list
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  // 获取商品数据
  getGoods(type){
    const oldpage = "goods."+type+".page"
    this.setData({
      [oldpage]: this.data.goods[type].page+1
    })
    const page = this.data.goods[type].page
    // console.log(page)
    request({
      url:'/home/data',
      data: {
          type,
          page
        }
    }).then(res=>{
      this.setData({
        isload: false
      })
      res.data.data.list.forEach(item=>{
        this.data.goods[type].list.push(item)
      })
      const list = this.data.goods[type].list
      const oldlist = 'goods.'+type+'.list'
      this.setData({
        [oldlist]:list
      })
    }).catch(err=>{ 
      console.log(err)
    })

  },
  // 回到顶部
  backtop(){
    this.setData({
      "top.scrollTop":0
    })
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  // 图片加载完成获取nav的offsettop
  imageload(){
    if (!this.data.imgload){
      // 获取导航栏距离顶部的高度
      const query = wx.createSelectorQuery()
      query.select('.navcontrol').boundingClientRect(rect => {
        this.setData({
          navscrolltop: rect.top
        })
      }).exec()
      this.data.imgload = true
    }

  },
  // 跳转到detail页面
  gotodetail(e){
    const iid = e.detail.iid
    // console.log(iid)
    const type = this.data.type
    const page = this.data.goods[type].page
    // console.log(page)
    wx.navigateTo({
      url: '/pages/detail/detail?iid=' + iid + '&&type=' + type + '&&page=' + page
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log(123)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (e) {

  },

  onPageScroll: function(e){
    // console.log(e)
      this.setData({
        top: e
      })
 
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isload:true
    })
    this.getGoods(this.data.type)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
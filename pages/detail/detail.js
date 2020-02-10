// pages/detail/detail.js
import {
  requestdetail,
  request
} from "../../network/home/home.js"
import {
  Goods,
  ShopInfo,
  DetailInfo,
  ItemParams
} from "../../common/DetailData/detail.js"
import { formatTime} from "../../utils/util.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 详情页轮播图的数据
    topImages: [],
    Dgoods: {},
    // 详情页的数据
    DShopInfo: {},
    // tabbar
    title: ['图文详情', '商品参数', '热卖推荐'],
    detailinfos: {},
    detailimg: [],
    itemParams: {},
    // 推荐数据展示
    goodsitem: [],
    // 监听滑动的高度
    scrolltop: 0,
    navscrolltop: [],
    length: 0,
    item1:0,
    item2:0,
    item3:0,
    flag:false,
    rate:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const type = options.type
    const page = options.page
    const iid = options.iid
    this.getDetail(iid)
    this.getrecommend(type, page)
  },

  // 获取详情页的数据
  getDetail(iid) {
    requestdetail({
      url: '/detail',
      data: {
        iid
      }
    }).then(res => {
      console.log(res)
      const data = res.data.result
      const itemInfo = data.itemInfo
      const columns = data.columns
      const goods = new Goods(itemInfo, columns)
      const shopInfo = new ShopInfo(data.shopInfo)
      const detailInfo = new DetailInfo(data.detailInfo)
      const itemParams = new ItemParams(data.itemParams)
      data.rate.list.forEach(item=>{
        const date = new Date(item.created * 1000)
        item.created  = formatTime(date)
      }
      )
      const rate = data.rate.list
      this.setData({
        Dgoods: goods,
        topImage: goods.topImages,
        DShopInfo: shopInfo,
        detailinfos: detailInfo,
        itemParams: itemParams,
        rate: rate
      })
      // console.log(this.data.rate)
    }).catch(err => {
      console.log(err)
    })
  },
  // 获取推荐数据
  getrecommend(type, pages) {
    const page = parseInt(pages) + 1
    // console.log(page)
    request({
      url: '/home/data',
      data: {
        type,
        page
      }
    }).then(res => {
      this.setData({
        goodsitem: res.data.data.list
      })
      // console.log(this.data.goodsitem)
    }).catch(err => {
      console.log(err)
    })
  },
  // 点击导航到相应位置
  itemclick(e) {
    const index = e.detail.index
    wx.pageScrollTo({
      scrollTop: this.data.navscrolltop[index],
    })
  },
  // 监听详情图片加载
  Dimgload() {
    const query = wx.createSelectorQuery()
    const length = this.data.detailinfos.detailImage.length
    this.setData({
      length: this.data.length + 1
    })
    if (this.data.length === length) {
      query.select('#dnav').boundingClientRect(rect => {
        this.setData({
          item1:rect.top
        })
      }).exec()
      query.select('.itemPramas').boundingClientRect(rect => {
        this.setData({
          item2: rect.top
        })
      }).exec()
      query.select('#recommend').boundingClientRect(rect => {
        this.setData({
          item3: rect.top
        })
      }).exec()

    }



  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },
  // 回到顶部事件
  handlebacktop() {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  // 监听用户滑动
  onPageScroll(e) {
    this.setData({
      scrolltop: e.scrollTop
    })
    if(!this.data.flag){
      var darr = []
      // console.log(this.data.item2)
      darr.push(this.data.item1)
      darr.push(this.data.item2)
      darr.push(this.data.item3)
      this.setData({
        navscrolltop: darr
      })
      this.setData({
        flag: true
      })
    }
    // console.log(this.data.scrolltop)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
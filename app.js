//app.js
const TOKEN = 'token'
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // const token = wx.getStorageSync(TOKEN)
    // if(token && token.length !== 0){
    //   // console.log('验证token')
    //   this.check_token(token)
    // }else{
    //   this.login()
    // }

    // console.log(this.globalData.token,123)
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    name :'刘六',
    token:''
  },
  // 登录的方法
  // login(){
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //       const code = res.code
  //       wx.request({
  //         url: 'http://123.207.32.32:3000/login',
  //         method: 'POST',
  //         success: res => {
  //           this.globalData.token = res.data.token
          
  //           wx.setStorageSync(TOKEN, this.globalData.token)
  //           console.log('执行了登录操作')
  //         }
  //       })

  //     }
  //   })
  // },
  // 验证token是否过期
  // check_token(token){
  //       wx.request({
  //       url: 'http://123.207.32.32:3000/auth',
  //       data: '',
  //       header: {
  //         token
  //       },
  //       method: 'POST',
  //       dataType: 'json',
  //       responseType: 'text',
  //       success: function(res) {
  //         // console.log(res)
  //       },
  //       fail:function(res){
  //         console.log(res)
  //       }
  //     })
  // }
})
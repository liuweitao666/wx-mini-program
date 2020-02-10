export  function request(options){
  return new Promise((resole,reject)=>{
    wx.request({
      url: 'http://123.207.32.32:8000/api/hy'+options.url,
      data: options.data,
      method:options.method ||'GET',
      dataType: 'json',
      success: resole,
      fail: reject,
    })
  })
}
export  function requestdetail(options) {
  return new Promise((resole, reject) => {
    wx.request({
      url: 'http://106.54.54.237:8000/api/hy' + options.url,
      data: options.data,
      method: options.method || 'GET',
      dataType: 'json',
      success: resole,
      fail: reject,
    })
  })
}
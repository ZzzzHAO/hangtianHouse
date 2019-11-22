// component/other-login/other-login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    /**
    * 获取手机号回调
    */
    getPhoneNumber(e) {
      wx.login({
        success(res) {
          if (res.code) {
            let params = {
              code: res.code,
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv
            }
            //发起网络请求
            wx.request({
              // url:'http://2d73692y13.qicp.vip:40168/blind-date/auth/sign',
              url: 'http://2d73692y13.qicp.vip:40168/blind-date/auth/login/wx',
              data: params,
              method: 'get',
              dataType: 'json',
              success: (res) => {

              },
              fail: (err) => {
                console.log('api fail:', err)
              },
              complete(res) {
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    },
  }
})

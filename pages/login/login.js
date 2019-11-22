// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:'',
    userName:'',
    placeholderStyle:"color: rgba(238, 238, 238, 0.5);font-size: 40rpx;font-family: 'PingFangSC-Regular'",
    disabled:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 输入框change
   */
  change(e){
    let val = e.detail;
    let key = e.currentTarget.dataset.key;
    this.setData({
      [key]:val,
    })
    if(this.data.userName!=='' && this.data.password!==''){
      this.setData({disabled:false})
    }else{
      this.setData({disabled:true})
    }
  },
  /**
   * 获取手机号回调
   */
  getPhoneNumber (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData);
    wx.login({
      success (res) {
        if (res.code) {
          let params ={
            code:res.code,
            encryptedData:e.detail.encryptedData,
            iv:e.detail.iv
          }
          //发起网络请求
          wx.request({
            // url:'http://2d73692y13.qicp.vip:40168/blind-date/auth/sign',
            url:'http://2d73692y13.qicp.vip:40168/blind-date/auth/login/wx',
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
  /**
   * 获取手机号回调
   */
  getUserInfo (e) {
    console.log(e.detail)
  },
  /**
   * 跳转到注册页
   */
  goRegister(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  /**
   * 登录
   */
  submit(){
    wx.switchTab({
      url: '/pages/recommend-list/recommend-list',
    })
  }
})
// pages/register/register.js
import request from '../../helper/service'
import api from '../../helper/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: '',
    userName: '',
    passwordConfirm: '',
    placeholderStyle: "color: rgba(238, 238, 238, 0.5);font-size: 40rpx;font-family: 'PingFangSC-Regular'",
    disabled: true
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
  change(e) {
    let val = e.detail;
    let key = e.currentTarget.dataset.key;
    this.setData({
      [key]: val,
    })
    if (this.data.userName !== '' && this.data.password !== '' && this.data.passwordConfirm !== '' && this.data.password == this.data.passwordConfirm) {
      this.setData({ disabled: false })
    } else {
      this.setData({ disabled: true })
    }
  },
  /**
   * 跳转到登录页
   */
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 注册
   */
  register() {
    const { userName, password, passwordConfirm } = this.data;
    const params = {
      userName,
      password,
      passwordConfirm
    }
    request(api.REGISTER, params).then(res => {
      if(res && res.data && res.data.returnCode === '000000') {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    })
  }
})
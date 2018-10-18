// pages/bonusDetails/bonusDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boundList:[
      {
        'company': '香港捷运集团有限公司',
        'time':'2018-09-22',
        'orderman': '张三',
        'moneylist':[
          { 'num': 51860, 'type': '奖励金总额(¥)'},
          { 'num': 51860, 'type': '已结算(¥)' },
          { 'num': 51860, 'type': '未结算(¥)' }
        ]
      },
      {
        'company': '香港捷运集团有限公司',
        'time': '2018-09-22',
        'orderman': '张三',
        'moneylist': [
          { 'num': 51860, 'type': '奖励金总额(¥)' },
          { 'num': 51860, 'type': '已结算(¥)' },
          { 'num': 51860, 'type': '未结算(¥)' }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '奖励金明细',
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

  }
})
// pages/hisclew/hisclew.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hisclewList:[
      {
        'company':'香港捷运集团有限公司',
        'time':'2018-09-22',
        'des': 'orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodbibendum laoreet.',
        'img': ['../../image/index9.png', '../../image/index10.png','../../image/index11.png'],
        'type':'有效线索'
      },
      {
        'company': '香港捷运集团有限公司',
        'time': '2018-09-22',
        'des': 'orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodbibendum laoreet.',
        'img': ['../../image/index9.png', '../../image/index10.png', '../../image/index11.png'],
        'type': '有效线索'
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '历史线索',
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
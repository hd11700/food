Page({
  data: {
    body: "阴虚质",
    recommend: [],
    showIndex: 0,
    effect:[],
    suitpeople:[],
    make:[],
  },

  onLoad: function () {
    this.applyData()
    
    wx.showModal({
        title: '膳食膳行',
        content: '请设置你的体质信息，方便系统为你推荐合理膳食',
        showCancel: true,
        confirmText: '前往设置',
        success: function (res) {
            if (res.confirm) {
                // 点击确认按钮后的操作
                // 可以跳转到食谱详情页面或者其他相关页面
                wx.navigateTo({
                    url: '/pages/info/info' // 跳转到食谱详情页面
                  });
            }else if (res.cancel) {
                // 点击关闭按钮后的操作
              }
        }
    });
  },
  applyData() {
    wx.cloud.database().collection('recipe').get().then(res => {
      let newlist = []
      let a = Math.floor(Math.random() * (res.data.length + 1))
      let b = Math.floor(Math.random() * (res.data.length + 1))
      let c = Math.floor(Math.random() * (res.data.length + 1))
      while (a == b) {
         b = Math.floor(Math.random() * (res.data.length + 1))
      }
      while (c == b || c == a) {
         c = Math.floor(Math.random() * (res.data.length + 1))
      }
      //  a=0
      //  b=0
      //  c=0
      newlist.push(res.data[a])
      newlist.push(res.data[b])
      newlist.push(res.data[c])
      this.setData({
        recommend: newlist,
        effect: newlist[0].effect.split('。'),
        suitpeople: newlist[0].suitpeople.split('。'),
        make: newlist[0].make.split('。')
      })
      
    })
  },
  change: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      let rec = this.data.recommend
      console.log(rec)
      this.setData({
        showIndex: e.currentTarget.dataset.index,
        effect: this.data.recommend[e.currentTarget.dataset.index].effect.split('。'),
        suitpeople: this.data.recommend[e.currentTarget.dataset.index].suitpeople.split('。'),
        make: this.data.recommend[e.currentTarget.dataset.index].make.split('。')
      })
    }
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

})
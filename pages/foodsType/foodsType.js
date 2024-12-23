Page({
 
    /**
     * 页面的初始数据
     */
    data: {
      lists: [
        "健康营养", "慢病管理", "减肥轻食"
      ],
      lists_r0: [
        {
            imgUrl:'/images/助眠食谱.jpg',
            text:"轻养助眠营养食谱",
            text2:"助眠"
        }, 
        {
            text:"主类1的子类2"
        }, 
        {
            text:"主类1的子类3"
        }, 
        {
            text:"主类1的子类4"
        }
      ],
      lists_r1: [
        {
            imgUrl:'/images/抗血脂食谱.jpg',
            text:"抗高血脂全天食谱",
            text2:"平衡血脂"
        }, 
        {
            text:"主类2的子类2"
        }, 
        {
            text:"主类2的子类3"
        }, 
        {
            text:"主类2的子类4"
        }
      ],
      lists_r2: [
        {
            imgUrl:'/images/减肥食谱.jpg',
            text:"CRD平衡膳食法食谱",
            text2:"好碳水"
        }, 
        {
            text:"主类3的子类2"
        }, 
        {
            text:"主类3的子类3"
        }, 
        {
            text:"主类3的子类4"
        }
      ],
      indexId: 0,
      indexIdr0: 0,
      indexIdr0: 1,
      indexIdr0: 2,
    },
    // 左侧点击事件
    jumpIndex(e) {
      let index = e.currentTarget.dataset.menuindex
      let that = this
      that.setData({
        indexId: index
      });
    },
  
    jumpIndexR0(e) {
      let index = e.currentTarget.dataset.menuindex
      let that = this
      that.setData({
        indexIdr0: index
      });
    },
  
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      var that = this
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            winHeight: res.windowHeight
          });
        }
      });
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
    onHide: function() {
   
    },
   
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
  
  
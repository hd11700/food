Page({
    data: {
      select_all: false,//是否全选
      list: [
        {name: '补肾'},
        {name: '祛湿消肿'},
        {name: '舒缓压力'},
        {name: '增强免疫力'},
        {name: '精力充沛'},
        {name: '好气色'},
        {name: '养肺益气'},
        {name: '养脾胃'},
        {name: '养肝护肝'},
        {name: '好睡眠'},
        {name: '抗衰老'},
        {name: '儿童健康'},
        {name: '减重健身'},
        {name: '孕妇健康'},
      ],
      choseNames: '', //选中的名字列表
    },
  
    //全选与反全选
    selectall: function (e) {
      var arr = []; //存放选中id的数组
      for (let i = 0; i < this.data.list.length; i++) {
  
        this.data.list[i].checked = (!this.data.select_all)
  
        if (this.data.list[i].checked == true) {
          // 全选获取选中的值
          arr = arr.concat(this.data.list[i].name.split(','));
        }
      }
      this.setData({
        list: this.data.list,
        select_all: (!this.data.select_all),
        choseNames: arr
      })
    },
  
    // 单选
    checkboxChange: function (e) {
      console.log(e.detail.value)
      this.setData({
        choseNames: e.detail.value, //单个选中的值
      })
      if (this.data.choseNames.length == this.data.list.length) {
        this.setData({
          select_all: true
        })
      } else {
        this.setData({
          select_all: false
        })
      }
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
  submit(){
    wx.setStorageSync('choseNames',this.data.choseNames)
    wx.navigateBack()
  }
})
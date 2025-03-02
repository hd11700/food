const app = getApp()
Page({
 data: {
   navbar: ['笔记', '食谱'],
   currentTab: 0,
   nodeData:[],
   applyData:[]
 },
 navbarTap: function(e){
   this.setData({
     currentTab: e.currentTarget.dataset.idx
   })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://localhost:8080/news',
      method: 'GET',
      success: function (res) {
        let list=[]
        for (let i = 0; i < app.globalData.fvnews.length; i++) {
          list.push(res.data.data[app.globalData.fvnews[i]-1]);
        }
        that.setData({
          nodeData: list
        })
      }
    })
    let prefer=app.getFavoritesRecipes()
    wx.request({
      url: 'http://localhost:8080/api/recipes',
      method: 'GET',
      success: function(res) {
        const filteredData = res.data.filter(item => prefer.includes(item.name));
        that.setData({
          applyData:filteredData
        })
      }
    })
    
  },
  gotodetail:function(e){
    wx.navigateTo({
        url: '/pages/fooddetail/fooddetail?name='+ e.currentTarget.dataset.name,
    })

},
  //  打开新闻详情页事件
  onPostTap: function (event) {
    // 获取新闻的postId
    var id = event.currentTarget.dataset.id;
    // 跳转到子页面，新闻详情界面
    wx.navigateTo({
      // 将新闻块的postid穿进去
      url: '../post-detail/post-detail?id=' + id,
    })
  },

})
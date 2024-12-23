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
    // db.collection('node').where({
    //   user:_.eq(app.getOpenid())
    // }).get().then(res=>{
    //   console.log(res.data)
    //   this.setData({
    //     nodeData:res.data
    //   })
    // })
    // db.collection('recipe').where({
    //   user:_.eq(app.getOpenid())
    // }).get().then(res =>{
    //   console.log(res.data)
    //   this.setData({
    //     applyData:res.data
    //   })
    // })
  },
  gotodetail:function(e){
    wx.navigateTo({
        url: '/pages/fooddetail/fooddetail?name='+ e.currentTarget.dataset.name,
    })

},

})
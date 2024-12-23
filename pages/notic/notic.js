const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
name:'',
nodeData:[]
  },
  check() {
    wx.navigateTo({
      url: '../check/check',
    })
  },


  onLoad: function () {
    // db.collection('dietitian').where({
    //   _openid: app.getOpenid()
    // }).get().then(res => {
    //   if (res.data[0].using) {
    //     this.setData({
    //       isNutritionist: res.data[0].using,
    //     })
    //     db.collection('node').where({
    //       _openid: app.getOpenid()
    //     }).get().then(res=>{
    //       console.log(res)
    //       this.setData({
    //         nodeData:res.data
    //       })
    //     })
    //     db.collection('recipe').where({
    //       _openid: app.getOpenid()
    //     }).get().then(res=>{
    //       console.log(res)
    //       this.setData({
    //         applyData:res.data
    //       })
    //     })
    //     // wx.navigateTo({
    //     //   url: '../dietitian/dietitian',
    //     // })

    //   }
    // })
  },
  publishArticle: function () {
    // 处理发布文章逻辑
    // 这里可以添加相应的功能代码
    console.log('发布文章');
    wx.navigateTo({
      url: '../put_out/put_out',
    })
  },
  publishrecipe() {
    console.log('发布食谱');
    wx.navigateTo({
      url: '../publishrecipe/publishrecipe',
    })
  },
})
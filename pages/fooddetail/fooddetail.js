const app = getApp();
Page({
  data: {
    arrlylist: [],
    effect:[],
    suitpeople:[],
    make:[],
    collected:false,
  },
  onLoad(options) {
    wx.cloud.database().collection('recipe').where({
      name: options.name
    }).get().then(res => {
      try{
      if(res.data[0].user.includes(app.getOpenid())){
        this.setData({
          collected: true
        })
      }
    }catch(error){
      console.log(error)
    }
      this.setData({
        arrlylist: res.data[0],
        effect:res.data[0].effect.split('。'),
        suitpeople:res.data[0].suitpeople.split('。'),
        make:res.data[0].make.split('。')
      })
    })
  },
   // 点击收藏按钮
   onCollectionTap: function() {
     if(!app.getOpenid()){
     this.login()
     return
     }
    // 更新数据绑定变量，实现切换图片
    let postCollected=!this.data.collected
    this.setData({
        collected: postCollected
      }),
      // 收藏成功提示
      wx.showToast({
        title: postCollected ? '收藏成功' : '取消成功',
        // 设置出现时间长度
        duration: 1000,
        // 设置出现图标
        icon: 'success',
      })
      // if(this.data.collected){
      //   console.log(app.getOpenid())
      //   db.collection('recipe').doc(this.data.arrlylist._id).update({
      //     data:{
      //       user:_.push(app.getOpenid())
      //     }
      //   })
      // }else{
      //   db.collection('recipe').doc(this.data.arrlylist._id).update({
      //     data:{
      //       user: _.pull(app.getOpenid())
      //     }
      //   })
      // }
  },


// 分享按钮点击事件
onShareTap: function(event) {
  var itemList = [
    "分享给微信好友",
    "分享到朋友圈",
    "分享到QQ",
    "分享到微博"
  ]
  wx.showActionSheet({
    itemList: itemList,
    // 设置字体颜色
    itemColor: "405f80",
    success: function(res) {
      // res.cancel 用户是不是点击了取消
      // res.tapIndex 数组元素的序号，从0开始
      wx.showModal({
        title: '用户分享到了 ' + itemList[res.tapIndex],
        content: "用户选择是否取消？" + res.cancel + "现在还不能实现分享功能，什么时候能支持呢？"
      })
    }
  })
},
login() {
  wx.getUserProfile({
      desc: '必须授权才能继续使用', // 必填 声明获取用户个人信息后的用途，后续会展示在弹窗中
      success:(res)=> { 
          console.log('授权成功', res);
          wx.setStorageSync('user',res.userInfo)
          this.setData({ 
              userInfo:res.userInfo
          })
              // 获取openid
              wx.cloud.callFunction({
                name: 'login'
              }).then(res => {
                // console.log("openid:", res.result.openid);
                app.globalData.openid = res.result.openid
                this.data.openid = res.result.openid
              }).catch(err => {
                console.log(err);
              })
      },
      fail:(err)=> {
          console.log('授权失败', err);
      }
  })
},

})
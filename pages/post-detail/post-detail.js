// 定义一个变量来接受 posts_data.js文件输出的对象
// 注意：require 只能使用相对路径！
var postsData = require('../../data/posts-data.js')
// var postsData = require('../../utils/posts-data.js')
var app = getApp();
Page({
  data: {
    id:'',
    collected:false
  },

  onLoad: function(option) {
    // 接收post.js传进来的id值。
    var Id = option.id;
// db.collection('node').doc(Id).get().then(res=>{
//   try{
//     if(res.data.user.includes(app.getOpenid())){
//       this.setData({
//         collected: true
//       })
//     }
//   }catch(error){
//     console.log("错",error)
//   }
//   this.setData(
//     {
//       postData:res.data,
//       id:option.id
//     },
//   )
// })


  },



  // 点击收藏按钮
  onCollectionTap: function(event) {
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
      //  if(this.data.collected){
      //    console.log(app.getOpenid())
      //    db.collection('node').doc(this.data.id).update({
      //      data:{
      //        user:_.push(app.getOpenid())
      //      }
      //    })
      //  }else{
      //    db.collection('node').doc(this.data.id).update({
      //      data:{
      //        user: _.pull(app.getOpenid())
      //      }
      //    })
      //  }
  },

  // 异步
  getPostsCollectedAsy: function() {
    var that = this;
    wx.getStorage({
      key: 'posts_collected',
      success: function(res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId];
        // 收藏变成未收藏，未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected;
        that.showToast(postCollected, postsCollected);
      }
    })
  },

  // 同步
  getPostsCollectedSyc: function() {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postCollected, postsCollected);
  },


  showModal: function(postCollected, postsCollected) {
    var that = this;
    wx.showModal({
      title: '收藏',
      content: postCollected ? '收藏该文章' : '取消收藏该文章',
      showCancel: 'true',
      cancelText: '取消',
      cancelColor: '#333',
      confirmText: '确认',
      confirmColor: '#405f80',
      success: function(res) {
        if (res.confirm) {
          // 更新文章的缓存值
          wx.setStorageSync('posts_collected', postsCollected);
          // 更新数据绑定变量，实现切换图片
          that.setData({
            collected: postCollected
          })
        }
      },
    })
  },


  showToast: function(postCollected, postsCollected) {
    // 更新文章的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    // 更新数据绑定变量，实现切换图片
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


})
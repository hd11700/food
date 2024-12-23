const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    fileIDs: [],
    title: '',
    content: '',
    chongfu:true,//设置的timeout定时器防止短时间重复点击
    imgt:[],//图片压缩路径
    address:{}//使用request获取的地理位置信息
  },
  onLoad(options) {
 
  },
  title_input(e) {
   var title = e.detail.value
    console.log(title)
    this.setData({
      title: title
    })
  },
  content_input(e) {
   var content = e.detail.value
    console.log(content)
    this.setData({
      content: content
    })
  },
  //选择图片
  ChooseImage() {
    var that = this
    var promise1 = new Promise((resolve, reject) => {
      wx.chooseImage({
        count: 1, //默认9,我们这里最多选择6张
        sizeType: ['compressed'], //可以指定是原图还是压缩图，这里用压缩
        sourceType: ['album', 'camera'], //从相册选择
        success: (res) => {
          if (that.data.imgList.length != 0) {
            that.setData({
              imgList: that.data.imgList.concat(res.tempFilePaths)
            })
          } else {
            that.setData({
              imgList: res.tempFilePaths
            })
          }
          console.log("路径", that.data.imgList)
          console.log("选择图片成功", res)
          resolve()
        }
      });

    })
    Promise.all([promise1, ]).then(res => {
      for (var i = 0; i < that.data.imgList.length; i++) {
        wx.compressImage({ //图片压缩
          src: that.data.imgList[i], // 图片路径
          quality: 50 // 压缩质量
        }).then(res => {
          console.log("压缩成功", res)
          that.setData({
            imgt: that.data.imgt.concat(res.tempFilePath)
          })
          if (that.data.imgList.length - 1 == i)
            that.setData({
              imgList: that.data.imgt
            })
        })
      }
    })

  },
  //删除图片
  DeleteImg(e) {
    wx.showModal({
      title: '要删除这张照片吗？',
      content: '',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
 setnode(event){
console.log(wx.getStorageSync('user'),(new Date()).toLocaleString( ))
let userInfo=wx.getStorageSync('user')
// db.collection('node').add({
//   data:{
//     title:event.detail.value.title,
//     detail:event.detail.value.detail,
//     image:this.data.imgt[0],
//     dateTime:(new Date()).toLocaleString(),
//     author:userInfo.nickName,
//     img_author:userInfo.avatarUrl,
//     _openid:app.getOpenid()
//   }
// }).then(res=>{
//   wx.showToast({
//     title: '发布成功',
//     icon: 'true'
//   })
// })
wx.navigateBack()
 },

})
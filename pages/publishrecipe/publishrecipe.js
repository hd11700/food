const app = getApp();
Page({
  data: {

      image: '',
      name: '',
      effect: '',
      suitpeople: '',
      make: '',
      imgList:[],
      imgt:[],//图片压缩路径
      array: ['选择食谱类型', '下饭菜', '家常菜', '汤', ],
      index: 0,

  },

  uploadImage(event) {
    const imageFile = event.detail.files[0];
    // 处理图片上传逻辑，可以调用小程序的上传图片 API，将图片上传到服务器并获取图片路径
    // 这里只是简单的设置图片路径，实际应用中需要根据服务器返回的路径来设置
    this.setData({
      'formData.image': imageFile.tempFilePath
    });
  },

  inputName(event) {
    this.setData({
      'formData.name': event.detail.value
    });
  },

  inputEffect(event) {
    this.setData({
      'formData.effect': event.detail.value
    });
  },

  inputSuitPeople(event) {
    this.setData({
      'formData.suitpeople': event.detail.value
    });
  },

  submitForm(event) {
    // 处理表单提交逻辑，可以将 formData 发送到服务器保存
    console.log(event.detail.value);
    // db.collection('recipe').add({
    //   data:{
    //     name:event.detail.value.name,
    //     effect:event.detail.value.effect,
    //     suitpeople:event.detail.value.suitpeople,
    //     price:event.detail.value.price,
    //     sell:event.detail.value.sell,
    //     make:event.detail.value.make,
    //     category:this.data.array[this.data.index],
    //     img:this.data.imgt[0],
    //     _openid:app.getOpenid()
    //   }
    // })
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
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
})
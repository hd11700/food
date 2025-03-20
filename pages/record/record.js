const app = getApp()
Page({
  data: {
    // addrArray:util.replacePhone(mydata.userData().addrs,true),
    img:"../../images/添加.png",
    addrIndex: 0,
    date: '2024-03-13',
    time: '12:00',
    bookToastHidden: true,
    type: '',
    imgB64: '',
    types: ['主食类', '肉蛋类', '果蔬类']
  },
  onLoad: function (options) {
    // this.setData({
    //   artype:options.artype
    // })   
  },
  // 地址选择
  bindAddrPickerChange: function (e) {
    console.log('Addrpicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },
  //表单提交
  formSubmit: function (e) {
    console.log(e)
    if (!e.detail.value.foodname) {
      wx.showToast({
        icon: 'error',
        title: '食品名称不能为空',
      })
      return
    }
    if (!e.detail.value.keeptime) {
      wx.showToast({
        icon: 'error',
        title: '保质期不能为空',
      })
      return
    }
    if (!this.data.type) {
      wx.showToast({
        icon: 'error',
        title: '类别不能为空',
      })
      return
    }
    if (this.data.img=="../../images/添加.png") {
      wx.showToast({
        icon: 'error',
        title: '请上传图片',
      })
      return
    }

   const newItem={
    foodname:e.detail.value.foodname,
    keeptime:e.detail.value.keeptime,
    type:this.data.types[e.detail.value.type],
    ps:e.detail.value.ps,
    date:this.data.date,
    img:this.data.img
  }
// 获取页面栈
const pages = getCurrentPages();
// 获取上一个页面
const prevPage = pages[pages.length - 2];

// 将新数据添加到上一个页面的 data 中
if (prevPage) {
  const updatedGoods = prevPage.data.goods.concat(newItem);
  prevPage.setData({
    goods: updatedGoods
  });
}
  //   db.collection('fridge').add({
  // data:{
  //   openid:openid,
  //   foodname:e.detail.value.foodname,
  //   keeptime:e.detail.value.keeptime,
  //   type:this.data.types[e.detail.value.type],
  //   ps:e.detail.value.ps,
  //   date:this.data.date,
  //   img:this.data.img
  // }
  //   }).then(res => {
  //     wx.showToast({
  //       title: '保存成功',
  //     })
  //   })
    wx.navigateBack({
      delta:1
    })
  },
  hideToast: function () {
    this.setData({
      bookToastHidden: true
    })
  },
  // 日期选择
  bindDateChange: function (e) {
    console.log('date picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 时间选择
  bindTimeChange: function (e) {
    console.log('time picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  // 类别选择
  bindTypeChange(e) {
    this.setData({
      type : e.detail.value
    })

  },
  //识别菜品
  foodTap: function (e) {
    var that = this
    that.getToken(function (token) {
      that.getResult(token);
    });
  },
  getToken: function (callback) {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=laVgfleAVTKrRUo8F9o31gGC&client_secret=YG3kUDg6C2HbkdmSwIRaq7QUlxPX84GN',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        var token = res.data.access_token;
        return callback(token);
      }
    });
  },
  getResult: function (token) {
    var that = this
    wx.request({
      url: 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish?access_token=' + token,
      method: "post",
      data: {
        image: that.data.imgB64,
        baike_num: 1,
        top_num: 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res)
        that.setData({
          dishName: res.data.result[0].name,
          calorie: res.data.result[0].calorie,
          probability: res.data.result[0].probability,
          description: res.data.result[0].baike_info.description,
          image_url: res.data.result[0].baike_info.image_url,
          baike_url: res.data.result[0].baike_info.baike_url
        });
        wx.showModal({
          title: '菜品为' + that.data.dishName,
          content: '热量为' + that.data.calorie + '是否查看详情',
          success(res) {
            if (res.confirm) {
              that.setData({
                ishow: true
              })
            } else {
              return
            }
          }

        })

      }
    });
  },
  getB64ByUrl: function (url) {
    var that = this
    const FileSystemManager = wx.getFileSystemManager();
    FileSystemManager.readFile({
      filePath: url,
      encoding: 'base64',
      success(res) {
        that.setData({
          imgB64: res.data
        });
      }
    })
  },
  chooseImg: function () {
    this.setData({
      ishow: false,
      content: ''
    });
    var that = this
    wx.chooseMedia({
      count: 1,
      success(res) {
        console.log(res.tempFiles[0].tempFilePath)
        that.setData({
          img: res.tempFiles[0].tempFilePath
        })
        that.getB64ByUrl(that.data.img);
        that.foodTap()

      }
    })
  },


})
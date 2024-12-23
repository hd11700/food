const app = getApp()
Page({
  data: {
    num_input: "",
    usr: "admin",
    key: "123456",
  },
  confirmNum: function () {
    var usr = this.data.user_input;
    var pwd = this.data.num_input;
    var that = this
    if (pwd == "" || usr == "") {
      wx.showToast({
        title: '请输入姓名和',
        icon: 'none',
        duration: 2000
      })
    } else if (pwd != this.data.key || usr != this.data.usr) {
      wx.showToast({
        title: '账号或密码错误',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '验证通过',
        icon: 'success',
        duration: 2000
      })
      wx.setStorage({
        key: "123456",
        data: pwd,
      })
      wx.navigateTo({
        url: '../dietitian/dietitian',
      })
    }
  },
  onLoad: function (options) {

  },
  formSubmit(e) {
    if (e.detail.value.name == "" || e.detail.value.num == "" || e.detail.value.phone == "") {
      wx.showToast({
        title: '请完整填写信息',
        icon: 'none',
        duration: 2000
      })
      return
    }
    // db.collection('dietitian').add({
    //   data: {
    //     openid: app.getOpenid(),
    //     name:e.detail.value.name,
    //     num:e.detail.value.num,
    //     phone:e.detail.value.phone,
    //     using:false
    //   }
    // }).then(res=>{
    //   wx.showToast({
    //     title: '已提交',
    //     icon: 'true',
    //     duration: 2000
    //   })
    // })
  }


})
const app = getApp()
Page({
  data: {
    num_input: "",
    usr: "admin",
    key: "123456",
    chat:true
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
    //申请营养师
    wx.request({
      url: 'http://localhost:8080/system/user',
      method: 'post',
      data:{
        deptId: 200,
        nickName:e.detail.value.name,
        userName:e.detail.value.userid,
        password:e.detail.value.password,
        phonenumber:e.detail.value.phone,
        remark:e.detail.value.num,
        status:1

      },
      success: function(res) {
        console.log(res.data)
      }
      })

  }


})
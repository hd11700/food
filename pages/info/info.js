const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '从化区'],
    userName: "",
    age: "",
    sex: "",
    areaPicker: "",
    allergy: "",
    disease: "",
    height: "",
    weight: "",
    openid: "",
    selectedIndex: 0,
    preferences: ['请选择', '减肥', '增肌', '增脂', '养胃', '增强抵抗力'],
    prefer:'请选择'
  },
  //表单提交按钮
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // if (!e.detail.value.name) {
    //   wx.showToast({
    //     title: '姓名不能为空',
    //     icon: 'none',
    //   });
    //   return;
    // }
    // if (!e.detail.value.age) {
    //   wx.showToast({
    //     title: '年龄不能为空',
    //     icon: 'none',
    //   });
    //   return;
    // }
    // if (!e.detail.value.sex) {
    //   wx.showToast({
    //     title: '性别不能为空',
    //     icon: 'none',
    //   });
    //   return;
    // }
    // if (!e.detail.value.height) {
    //   wx.showToast({
    //     title: '身高不能为空',
    //     icon: 'none',
    //   });
    //   return;
    // }
    // if (!e.detail.value.weight) {
    //   wx.showToast({
    //     title: '体重不能为空',
    //     icon: 'none',
    //   });
    //   return;
    // }
    // if (this.data.selectedIndex==0) {
    //   wx.showToast({
    //     title: '请选择养生喜好',
    //     icon: 'none',
    //   });
    //   return;
    // }
    wx.request({
      url: 'http://localhost:8080/system/user/update',
      method: 'PUT',
      data: {
        openid: this.data.openid,
        userName: e.detail.value.name,
        sex: e.detail.value.sex,
        age: e.detail.value.age,
        height: e.detail.value.height,
        weight: e.detail.value.weight,
        preferences: this.data.prefer,
      },
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '保存成功',
          icon: 'success',
        });
        setTimeout(function() {
          wx.navigateBack({
            delta: 1 
          });
        }, 2000); 
      }
    })

  },




  onLoad: function (options) {
    this.data.openid = app.getOpenid()
    this.getUser()
  },

  getUser(){
    let that=this
    const url=`http://localhost:8080/system/user/info/${this.data.openid}`;
    //测试
    wx.request({
      url: url,
      method: 'GET',
      success: function(res) {
        console.log(res.data)
        that.setData({
          userName: res.data.data.userName,
          sex: res.data.data.sex,
          age: res.data.data.age,
          height: res.data.data.height,
          weight: res.data.data.weight,
          prefer: res.data.data.preferences,
        })
      }
      })
  },

  goInterest(e) {
    this.setData({
      prefer: this.data.preferences[e.detail.value],
    })
  },
  goCondition() {
    wx.navigateTo({
      url: '../condition/condition',
    })
  }
})
Page({
    gotofood: function(event) {
      // 点击"我的食材"按钮时触发的事件处理函数
      wx.navigateTo({
        url: '/pages/food/food',
    })
    },
  
    gotoshanbu: function(event) {
      // 点击"膳食膳补"按钮时触发的事件处理函数
      wx.navigateTo({
        url: '/pages/recipe/recipe',
    })
    },
  
    gotopaizhao: function(event) {
      // 点击"拍照识图"按钮时触发的事件处理函数
      wx.navigateTo({
        url: '/pages/photo/photo',
    })
    },
  
    gotomore: function(event) {
      // 点击"更多功能"按钮时触发的事件处理函数
      wx.navigateTo({
        url: '/pages/fridge/add/add',
    })
    }
  })
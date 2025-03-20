App({
  globalData: {
    fvnews:[1],
    recipes:[]
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户openid，确定用户唯一标识
    const that = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.request({
            url: 'http://localhost:8080/api/getOpenId',
            method: 'POST',
            data: {
              code: res.code
            },
            success: function(response) {
              console.log(response.data);
              that.globalData.openid=response.data.openid
              that.globalData.session_key=response.data.session_key
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });

    //测试
    wx.request({
      url: 'http://localhost:8080/api/recipes',
      method: 'GET',
      success: function(res) {
      }
      })

  },
  getOpenid() {
    return this.globalData.openid
  },
  getUserInfo() {
    return this.globalData.userInfo
  },
  getIntake(){
    return this.globalData.intake
  },
  getConsumption(){
    return this.globalData.consumption
  },
  getSession(){
    return this.globalData.session_key
  },
  getFavoritesNews(){
    return this.globalData.fvnews
  },
  getFavoritesRecipes(){
    return this.globalData.recipes
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

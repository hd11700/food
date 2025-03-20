const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      MENU :[
        {
          id: 1,
          imgUrl: "../../images/icon_mine_health.png",
          title: "健康信息",
          path: "../info/info",
        },
        {
          id: 2,
          imgUrl: "../../images/icon_mine_diet.png",
          title: "营养师",
          path: "../check/check",
        },
        {
          id: 3,
          imgUrl: "../../images/icon_mine_course.png",
          title: "我的收藏",
          path: "../order/order",
        },
        // {
        //   id: 4,
        //   imgUrl: "../../images/icon_mine_sport.png",
        //   title: "我的运动计划",
        //   path: "/pages/sport/clock/index",
        // },
        {
          id: 5,
          imgUrl: "../../images/icon_mine_environment.png",
          title: "关于我们",
          path: "../about/about",
        },
      ],
      //图片存储链接
      bodyIntroduce:"人体阳气化生不足，温煦作用下降生里寒。",
      userInfo: {},
      hasUserInfo: false, 
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      canIUseGetUserProfile: false,
      canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),
      prefer:''
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let user = wx.getStorageSync('user')

      this.data.openid = app.getOpenid()
      console.log(this.data.openid)
      this.getUser()
    },

  
    getUser(){
      let that=this
      const url=`http://localhost:8080/system/user/info/${this.data.openid}`;
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
  // 退出登录
  loginOut(){
      this.setData({ 
          userInfo:''
      })
      // 清空缓存
      wx.setStorageSync('user',null)
  },
  handleMenuNavigation({ currentTarget }) {
    const { url = "" } = currentTarget.dataset;
    if (!url) return;
    wx.navigateTo({ url });
  },
   
    goSign_in(){
      wx.navigateTo({
        url: '../sign_in/sign_in',
      })
    },
    goMedal(){
      wx.navigateTo({
          url: '../medal/medal',
      })
   },

 clickDrinks:function(){
  wx.navigateTo({
    url: '/pages/drinks/drinks',
  })
},
  
  })
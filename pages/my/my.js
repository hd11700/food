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
          path: "../notic/notic",
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
      canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let user = wx.getStorageSync('user')
      // db.collection('dietitian').where({
      //   _openid:app.getOpenid()
      // }).get().then(res=>{
      //   console.log(res)
      //   if(res.data[0].using){
          // this.setData({
          //   admin:res.data[0].using
          // })
      //   }
      // })
      // this.setData({
      //   userInfo: user
      // })
      this.login()
    },
    login() {

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
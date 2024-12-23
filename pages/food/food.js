const app = getApp()
Page({
  data: {
    navbar: [
      '全部',
      '主食类',
      '肉蛋类',
      '果蔬类',
    
    ],
     goods: [{
        "imgUrl": "https://img0.baidu.com/it/u=2600546611,2357283768&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "name": "猪肉",
        "date": "9月8",
        "end": "5"
    },
    {
        "imgUrl": "https://img2.baidu.com/it/u=1137302766,2345018209&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
        "name": "谷物",
        "date": "2023",
        "end": "8"
    },
    {
        "imgUrl": "https://img2.baidu.com/it/u=3046610453,3465992196&fm=253&fmt=auto&app=138&f=JPEG?w=748&h=500",
        "name": "蔬菜",
        "date": "2023",
        "end": "3"
    }

],

    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  gotokeep:function(){
    wx.navigateTo({
        url: '/pages/record/record',
    })
  },
  onLoad:function(){
    // db.collection('fridge').where({
    //   _openid:app.getOpenid()
    // }).get().then(res=>{
    //   let list=res.data
    //   for(var i=0;i<list.length;i++){
    //     var newdate=parseInt((Date.parse(new Date().toLocaleDateString()) - Date.parse(list[i].date) +28800000)/86400000)
    //     var end=list[i].keeptime-newdate
    //     list[i].end=end
    //   }
    //   this.setData({
    //     goods:list
    //   })
    // })

  },

})
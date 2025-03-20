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
        "img": "https://th.bing.com/th/id/OIP.K8uiY2DVghqdbfPP2jc7rwHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7",
        "foodname": "提拉米苏",
        "date": "2024-04-13",
        "type":'主食类',
        "end": "5"
    },
    {
        "img": "https://th.bing.com/th/id/OIP.iD2EbVg8YW9DC8lSlSMLPwHaE8?w=304&h=203&c=7&r=0&o=5&pid=1.7",
        "foodname": "鸡蛋",
        "date": "2024-03-13",
        "type":'肉蛋类',
        "end": "8"
    },
    {
        "img": "https://img2.baidu.com/it/u=3046610453,3465992196&fm=253&fmt=auto&app=138&f=JPEG?w=748&h=500",
        "foodname": "番薯叶",
        "date": "2024-04-13",
        "type":'果蔬类',
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
  onLoad:function(options){
 // 检查是否有新数据传递过来
 if (options.newItem) {
  const newItem = JSON.parse(options.newItem);
  // 合并新数据到 goods 数组
  const updatedGoods = this.data.goods.concat(newItem);
  this.setData({
    goods: updatedGoods
  });
}

  },

})
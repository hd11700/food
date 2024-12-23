Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[
      {
        id:'1',
        title:"学校召开转设复评工作动员大会",
        poster:"../../images/p1.png",
        add_data:'2022-9-29'
      },
      {
        id:'2',
        title:"廿载启新程，广软再出发——学校召开20周年校庆筹备工作专题会",
        poster:"../../images/p2.png",
        add_data:'2022-9-22'
      },
      {
        id:'3',
        title:"心中有信仰、行动有方向、肩上有担当——广州软件学院举行2022级新生开学典礼",
        poster:"../../images/p3.png",
        add_data:'2022-9-21'
      }
    ],
    },
    goToDetail:function(e){
      //获取携带data-id的数据
      let id = e.currentTarget.dataset.id
      //携带新闻ID进行页面跳转
      wx.navigateTo({
          url:'../info01/info01?id='+id,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "/images/swiper01.png"
        },
        {
          "id": 2,
          "imgurl": "/images/swiper02.png"
        },
        {
          "id": 3,
          "imgurl": "/images/swiper03.png"
        },
        {
          "id": 4,
          "imgurl": "/images/swiper04.png"
        }
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
//获取新闻列表
function getNewList() {
let list = [];
for(var i = 0; i < news.length; i++) {
  let obj = {};
  obj.id = news[i].id;
  obj.poster = news[i].poster;
  obj.content = news[i].detail;
  obj.add_date = news[i].add_date;
  obj.title = news[i].title;
  // console.log('obj',obj);
  list.push(obj);
}
return list;
}
//获取新闻内容
function getNewsDetail(newsID) {
  let message = {
    code: '404',
    news: {}
  };
  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) {
      message.code = '200',
        message.news = news[i];
      break;
    }
  }
  return message;
  }
module.exports = {
getNewList : getNewList,
getNewsDetail : getNewsDetail
}

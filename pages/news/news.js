// pages/news/news.js
//引入模块 
var foodsData = require('../../utils/foodsData');
var cookData = require('../../utils/cookData');
var newsData = require('../../utils/newsData');
var postsData = require('../../data/posts-data.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tabs: ['膳识笔记', '膳识食谱'],
    tabs: ['膳识笔记'],
    itemWidth: 0,
    windowWidth: 0,
    tabIndex: 0,
    sliderLeft: 0,
    sliderOffset: 0,
    sliderOffsets: [],
    foodsType: foodsData,
    cookType: cookData,
    ArticleList: [],
  },

  onLoad() {

    let that = this;

    wx.request({
      url: 'http://localhost:8080/news',
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          ArticleList: res.data
        })
      }
    })

    this.setData(
      // 替换发现前端的数据
      {
        posts_key: postsData.postList
      }
    );


    // 计算
    wx.getSystemInfo({
      success: function (res) {
        // 每个item应占的宽度向上取整，限tab栏不会滑动的情况。
        let windowWidth = res.windowWidth;
        let itemWidth = Math.ceil(windowWidth / that.data.tabs.length);
        // 初始化每个项目的偏移量，存入数组
        let tempArr = [];
        for (let i in that.data.tabs) {
          tempArr.push(itemWidth * i);
        }

        // 32是两个字体（16px）的宽度。tab中字数不同的话需要调整...
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - 32) / 2,
          sliderOffsets: tempArr,
          sliderOffset: 0,
          itemWidth: itemWidth,
          windowWidth: windowWidth,

        });
      }
    });
  },

  // 处理点击tab
  onTabClick(e) {
    let id = e.currentTarget.id;
    // 取新的偏移，完成transition和transform的参数
    let newOffset = this.data.sliderOffsets[id];
    this.setData({
      tabIndex: id,
      sliderOffset: newOffset
    })
  },

  // 处理swiper改变
  swiperChange(e) {
    this.setData({
      sliderOffset: this.data.sliderOffsets[e.detail.current],
      tabIndex: e.detail.current,
    })
  },

  //  处理手动滑动swiper-item.可以进一步对滚动条进行动画优化，但并不推荐。需要的话将注释放开即可
  swiperTran(e) {
    console.log("滑动tab中...")
  },

  // 滑动动画完毕后执行的方法(不管滑动是否完成切换)
  animationfinish(e) {
    console.log("动画执行完毕触发animationfinish")
  },
  //点击食物信息---进入对应的食物分类的列表信息展示=======
  foodsType: function (e) {
    wx.navigateTo({
      url: '../foodsType/foodsType?itemId=' + e.currentTarget.dataset.mark,
    })
  },
  //点击菜肴信息---进入寻找做法=======
  cookType: function (e) {
    wx.navigateTo({
      url: '../cookType/cookType?itemId=' + e.currentTarget.dataset.mark,
    })
  },
  /**
   * 进入文章详情界面
   */
  gotoArticleDetail: function (event) {
    // 当前要跳转到另一个界面，但是会保留现有界面
    wx.navigateTo({
      url: `../article-detail/article-detail?articleid=${event.currentTarget.dataset.articleid}`
    })
  },

  //  打开新闻详情页事件
  onPostTap: function (event) {
    // 获取新闻的postId
    var id = event.currentTarget.dataset.id;
    // 跳转到子页面，新闻详情界面
    wx.navigateTo({
      // 将新闻块的postid穿进去
      url: '../post-detail/post-detail?id=' + id,
    })
  },

  viewDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  getsearch(event) {
    console.log(event.detail.value)
    // db.collection('node').where(_.or(
    //   [{
    //     title:db.RegExp({
    //       regexp:event.detail.value,
    //       options:'i'
    //     })
    //   },{
    //     detail:db.RegExp({
    //       regexp:event.detail.value,
    //       options:'i'
    //     })
    //   }]
    // )).get().then(res=>{
    //   // console.log(res)
    //   this.setData({
    //     ArticleList:res.data
    //   })
    // })
  },
})
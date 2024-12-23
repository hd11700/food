Page({
    /**
     * 页面的初始数据
     */
    data: {
      applyData:[],
      tabCur: 0, //当前项
      rightCur: 0, // 用于实现左边联动右边
      goodsList: [{
          title: '老火靓汤',
          id: 1,
          list:[{
            name:'茯苓牛骨汤',
            img: 'https://img1.baidu.com/it/u=862862660,660358202&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500://img2.baidu.com/it/u=3616759465,2727399041&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=375&amp;h=500',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'山药鸡汤',
            img: 'https://5b0988e595225.cdn.sohucs.com/images/20180101/de2d7861818c40628915e7f4140a891c.jpeg',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'番茄蛋汤',
            img: 'https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180121/c97898535a504de6930200104a4f3a1a.jpeg',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'当归猪脚',
            img: 'https://photo.tuchong.com/4916249/f/882115937.jpg',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'番茄蛋汤',
            img: 'https://5b0988e595225.cdn.sohucs.com/images/20180101/1cf1cfff44ca4dd79e3509992f860f57.jpeg',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'青菜汤',
            img: 'https://5b0988e595225.cdn.sohucs.com/images/20180121/b70f15ba57e649a6bd8f15769f952cef.jpeg',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          }
          ]
        }, {
          title: '家常菜',
          id: 2,
          list:[{
            name:'菠萝咕噜肉',
            img: 'https://img1.baidu.com/it/u=3009031976,814354524&fm=253&fmt=auto&app=138&f=JPEG?w=891&h=500',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'香辣鸡翅',
            img: 'https://img2.baidu.com/it/u=1035665903,3096959728&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'黄瓜炒蛋',
            img: 'https://img0.baidu.com/it/u=2848829268,2927086808&fm=253&fmt=auto&app=138&f=JPEG?w=685&h=468',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'狼牙土豆',
            img: 'https://img0.baidu.com/it/u=2848829268,2927086808&fm=253&fmt=auto&app=138&f=JPEG?w=685&h=468',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'青椒肉片',
            img: 'https://img0.baidu.com/it/u=2848829268,2927086808&fm=253&fmt=auto&app=138&f=JPEG?w=685&h=468',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'豌豆炒肉',
            img: 'https://img2.baidu.com/it/u=3952004210,1245597&fm=253&fmt=auto&app=138&f=JPEG?w=666&h=500',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          }
          ]
        },
        {
          title: '下饭菜',
          id: 3,
          list:[{
            name:'菠萝咕噜肉',
            img: 'https://img1.baidu.com/it/u=3009031976,814354524&fm=253&fmt=auto&app=138&f=JPEG?w=891&h=500',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'香辣鸡翅',
            img: 'https://img2.baidu.com/it/u=1035665903,3096959728&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'黄瓜炒蛋',
            img: 'https://img0.baidu.com/it/u=2848829268,2927086808&fm=253&fmt=auto&app=138&f=JPEG?w=685&h=468',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'狼牙土豆',
            img: 'https://img0.baidu.com/it/u=2848829268,2927086808&fm=253&fmt=auto&app=138&f=JPEG?w=685&h=468',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'青椒肉片',
            img: 'https://img0.baidu.com/it/u=2848829268,2927086808&fm=253&fmt=auto&app=138&f=JPEG?w=685&h=468',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          },
          {
            name:'豌豆炒肉',
            img: 'https://img2.baidu.com/it/u=3952004210,1245597&fm=253&fmt=auto&app=138&f=JPEG?w=666&h=500',
            sell: '收藏：88',
            price: '所需食材：牛骨，茯苓'
          }
          ]
        },
      ]
    },
    onLoad: function () {
      this.getApplyData();
    },

    gotodetail:function(e){
        wx.navigateTo({
            url: '/pages/fooddetail/fooddetail?name='+ e.currentTarget.dataset.name,
        })

    },
    gl(e) {
      this.setData({
        tabCur: e.currentTarget.id,
        rightCur: e.currentTarget.id,
      })
    },
    scrollLink(e) {
      let list = this.data.goodsList
      let itemHeight = 0;
      for (let i = 0; i < list.length; i++) {
        //拿到每个元素
        let els = wx.createSelectorQuery().select("#scroll-" + i);
        els.fields({
          size: true
        }, function (res) {
          list[i].top = itemHeight;
          itemHeight += res.height;
          list[i].bottom = itemHeight
        }).exec()
      }
  
      // 拿到滚动的高度
      let scrollTop = e.detail.scrollTop;
      for (let i = 0; i < list.length; i++) {
        if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
          this.setData({
            tabCur: i,
          })
          return false
        }
      }
    },
    getApplyData(){
      let that=this
      wx.request({
        url: 'http://localhost:8080/api/recipes',
        method: 'GET',
        success: function(res) {
          console.log(res.data);
          let title=res.data[0].category;
          let list=[];
          let dist={}
          let reclist=[]
          let id=1
          dist.title=title
          dist.id=1
          dist.list=[]
          for (let i=0;i<res.data.length;i++){
           if (title!=res.data[i].category){
             dist.list=reclist
             list.push(dist)
             dist={}
             reclist=[]
            title=res.data[i].category
            id+=1
            dist.title=title
            dist.id=id
           }
           reclist.push(res.data[i])
          }
          dist.list=reclist
          list.push(dist)
          console.log(list)
          that.setData({
            applyData:list
          })
        }
        })
  },

  getsearch(event){
    console.log(event.detail.value)
    // db.collection('recipe').where(_.or(
    //   [{
    //     name:db.RegExp({
    //       regexp:event.detail.value,
    //       options:'i'
    //     })
    //   },{
    //     price:db.RegExp({
    //       regexp:event.detail.value,
    //       options:'i'
    //     })
    //   }]
    // )).get().then(res=>{
    //   let title=res.data[0].category;
    //   let list=[];
    //   let dist={}
    //   let reclist=[]
    //   let id=1
    //   dist.title=title
    //   dist.id=1
    //   dist.list=[]
    //   for (let i=0;i<res.data.length;i++){
    //    if (title!=res.data[i].category){
    //      dist.list=reclist
    //      list.push(dist)
    //      dist={}
    //      reclist=[]
    //     title=res.data[i].category
    //     id+=1
    //     dist.title=title
    //     dist.id=id
    //    }
    //    reclist.push(res.data[i])
    //   }
    //   dist.list=reclist
    //   list.push(dist)
    //   this.setData({
    //     applyData:list
    //   })
    // })
  },

  })
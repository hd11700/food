const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '从化区'],
    diet_tips: "朝朝盐水，晚晚蜜汤。\n菊黄蟹肥秋正浓。\n秋之燥，菊花茶滋阴润燥。",
    sprit_tips: "露寒万物，汤暖你心。\n露寒霜重，心中暖意更重。",
    solarTerm: [
      {
        date: 1733414400000,
        name: "大雪",
        eng: "Major Snow",
        olddate: "十一月初六",
        title: "进补的时节，可根据体质进补。",
        diet_tips:"大雪时节，气温逐渐降低，气候干燥；应多吃一些滋阴润燥的食物，如银耳、蜂蜜、芝麻等；",
        sprit_tips:"大雪皑皑，初心不改。愿你在困境中坚守，待春来绽放绚烂光彩 。"
      },
      {
        date: 1734700800000,
        name: "冬至",
        eng: "Winter Solstice",
        olddate: "十一月廿一",
        title: "养肾固元。",
        diet_tips:"冬至时节，是全年白昼最短的一天，阴气最盛；应多吃一些温补型的食物，如羊肉、牛肉、鸡肉等；",
        sprit_tips:"冬至阳生，希望萌动。愿你在漫长黑夜后，迎来属于自己的光明 。"
      },
      {
        date: 1735595551000,
        name: "小寒",
        eng: "Slight Cold",
        olddate: "腊月初四",
        title: "敛阴护阳为主，可根据体质进补。",
        diet_tips:"小寒时节，气温逐渐降低，气候干燥；应多吃一些滋阴润燥的食物，如银耳、蜂蜜、芝麻等；",
        sprit_tips:"小寒虽冷，热情不灭。愿你用如火热情，驱散寒意，迎接春天 。"
      },
      {
        date: 1737002392000,
        name: "大寒",
        eng: "Great Cold",
        olddate: "腊月十九",
        title: "注意精神调养，注意养护脾胃，调养肝血。",
        diet_tips:"大寒时节，是一年中最冷的时期；应多吃一些温补型的食物，如羊肉、牛肉、鸡肉等；",
        sprit_tips:"大寒到顶点，春日在眼前。愿你熬过艰难，迎来繁花似锦的未来 。"
      },
      {
        date: 1738116613000,
        name: "立春",
        eng: "Start of Spring",
        olddate: "正月初六",
        title: "春节养生要顺应春天阳气生发，万物始生的特点，注意保护阳气。借阳气上升，万物萌生，人体新陈代谢旺盛之机，通过适当的调摄，使春阳之气得以宣达，代谢机体得以正常运行。",
        diet_tips:"立春时节，万物复苏，是养生的大好时机；这时，我们可以多吃一些辛温发散的食物，如韭菜、大蒜、葱、姜、胡萝卜等，以助阳气生发；",
        sprit_tips:"立春阳气转，希望破土生。愿你如破土幼苗，无畏困难，开启活力新程 。"
      },
      {
        date: 1739524778000,
        name: "雨水",
        eng: "Rain Water",
        olddate: "正月廿一",
        title: "春季气候转暖，然而又风多物燥，故应多吃新鲜蔬果、多汁水果以补充人体水分。",
        diet_tips:"雨水时节，气候转暖，但湿气较重；应多吃一些健脾利湿的食物，如薏米、扁豆、南瓜、茯苓等；",
        sprit_tips:"雨水润大地，滋养梦想芽。愿你以坚韧之力，化解难题，让生命茁壮成长。"
      },
      {
        date: 1740854822000,
        name: "惊蛰",
        eng: "Awakening of Insects",
        olddate: "二月初六",
        title: "惊蛰是要保阴潜阳，多吃清淡食物，如糯米、芝麻、蜂蜜、乳制品、豆腐、鱼、蔬菜等。",
        diet_tips:"惊蛰时节，春雷响动，万物复苏；此时，可以适量食用一些助阳的食物，如核桃、杏仁、花生等坚果类食物；",
        sprit_tips:"惊蛰惊雷响，潜能待释放。鼓足勇气冲破束缚，定能一鸣惊人 。"
      },
      {
        date: 1742259674000,
        name: "春分",
        eng: "Spring Equinox",
        olddate: "二月廿一",
        title: "春分节气平分了昼夜、寒暑，人们在保健养生时应注意保持人体的阴阳平衡状态。阴阳平衡是养生的一条重要法则。",
        diet_tips:"饮春分时节，阴阳平衡，应保持饮食的多样性，多吃蔬菜水果，如豆芽、菠菜、草莓、苹果等；食",
        sprit_tips:"春分昼夜均，生活需平衡。愿你兼顾各方，稳健前行，收获圆满人生 。"
      },
      {
        date: 1743597701000,
        name: "清明",
        eng: "Pure Brightness",
        olddate: "三月初七",
        title: "防风邪和寒邪，调理肝、脾为主。",
        diet_tips:"清明时节，气温逐渐升高，气候干燥；应多吃一些滋阴润燥的食物，如银耳、蜂蜜、芝麻等；",
        sprit_tips:"清明景明，心亦澄澈。愿你抛开迷茫，坚守信念，大步迈向未来 。"
      },
      {
        date: 1745013345000,
        name: "谷雨",
        eng: "Grain Rain",
        olddate: "三月廿二",
        title: "养肝祛湿气，忌焦虑防过敏。",
        diet_tips:"谷雨时节，是春季的最后一个节气；应多吃一些利水渗湿的食物，如赤小豆、薏米、扁豆等；",
        sprit_tips:"谷雨润百谷，耕耘正当时。愿你努力付出，收获满满，实现心中所想 。"
      },
      {
        date: 1746237417000,
        name: "立夏",
        eng: "Start of Summer",
        olddate: "四月初八",
        title: "养心活血、祛湿健脾。",
        diet_tips:"立夏时节，气温升高，心阳旺盛；应多吃一些养心安神的食物，如莲子、红枣、小麦等；",
        sprit_tips:"立夏万物盛，朝气满心田。愿你如蓬勃夏木，积极进取，绽放无限光彩 。"
      },
      {
        date: 1747643663000,
        name: "小满",
        eng: "Grain Buds",
        olddate: "四月廿三",
        title: "健脾利湿、清新祛暑、和胃养阴。",
        diet_tips:"小满时节，雨水增多，湿气较重；应多吃一些健脾利湿的食物，如薏米、扁豆、南瓜等；",
        sprit_tips:"小满未满，未来可盼。愿你保持谦逊，持续进步，拥抱美好未来 。"
      },

    ],
    countdownTitle: '', // 倒计时标题
    countdownTimer: '', // 倒计时显示
    list: [{
        "text": "首页",
        dot: true
      },
      {
        "text": "设置",
        badge: 'New'
      }
    ],
    scanitem: ['', '', '']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countdown()
    this.getWeather()
    this.getopenid()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  clickDrinks: function () {
    wx.navigateTo({
      url: '/pages/drinks/drinks',
    })
  },
  // 倒计时函数
  countdown: function () {

    // wx.request({
    //   url: 'http://172.16.9.12:8080/logins',
    //   method: 'POST',
    //   data: {
    //     username: 'admin',
    //     password: 'admin123',
    //   },
    //   success: (res) => {
    //     console.log('请求后端：', res);
    //   },
    //   fail: (err) => {
    //     console.error('请求失败：', err);
    //   }
    // });
    // wx.request({
    //   url: 'http://localhost:8080/system/user/wx',
    //   method: 'POST',
    //   data: {
    //     userName: 'zhangsan',
    //     password: 'password123',
    //   },
    //   success: function (res) {
    //     console.log('请求后端：', res.data);
    //   },
    //   fail: function (err) {
    //     console.error('请求失败：', err);
    //   }
    // });

    let now = new Date()
    let solarTerms = this.data.solarTerm
    for (let i = 0; i < solarTerms.length; i++) {
      let solarTermDate = solarTerms[i].date
      // 如果当前日期小于节气日期，则计算倒计时
      if (now < solarTermDate) {
        let countdownTime = Math.round((solarTermDate - now) / 1000) // 倒计时的总秒数
        let countdownDay = Math.floor(countdownTime / (24 * 60 * 60)) // 倒计时的天数
        let countdownHour = Math.floor((countdownTime % (24 * 60 * 60)) / (60 * 60)) // 倒计时的小时数
        let countdownMinute = Math.floor((countdownTime % (60 * 60)) / 60) // 倒计时的分钟数
        let countdownSecond = Math.floor(countdownTime % 60) // 倒计时的秒数
        let countdownTimer = countdownDay + '天' + countdownHour + '小时' + countdownMinute + '分' + countdownSecond + '秒' // 倒计时显示
        let countdownTitle = solarTerms[i].name // 倒计时标题

        this.setData({
          countdownTitle: countdownTitle,
          countdownTimer: i
        })
        break
      }
    }
  },

  dianji() {
    this.countdown()
    console.log(this.data.countdownTitle, this.data.countdownTimer)
  },
  getWeather: function () {
    var that = this;
    var getid = require('../../utils/util.js');
    that.setData({
      locationid: getid.getLocationID(that.data.region[1])
    });
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data: {

        location: that.data.locationid,
        key: '748df8e4205c4ed9b949c51f6ff96c19'
      },
      //替换成开发者申请到的 key
      success: function (res) {
        console.log(res.data);
        that.setData({
          now: res.data.now
        })
      }
    })
  },
  getopenid() {

  }
})
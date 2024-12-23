const app=getApp()
Page({
  data: {
    openid:'',
    date: '' ,
    count:0,
    Milk:0,
    Vegetables:0,
    Fruits:0,
    Grains:0,
    Potatoes:0,
    Meat:0,
    Eggs:0,
    Soy:0,
    Oil:0,
  },
  onLoad: function() {
    this.data.openid=app.getOpenid()
    let timestamp = new Date().toISOString().split('T')[0]
    // 设置当前日期为初始值
    this.setData({
      date: timestamp
    });
    wx.request({
      url: 'http://localhost:8080/newMemo',
      method: 'GET',
      data: {
        openid: this.data.openid,
        timestamp: timestamp
      },
      success: (res) =>  {
        const intakeData = res.data.data.Intake[0];

        // 检查 Intake 数组是否有数据
        if (intakeData) {
          this.setData({
            count:Number(intakeData.intake),
            Milk:Number(intakeData.milk),
            Vegetables:Number(intakeData.vegetables),
            Fruits:Number(intakeData.fruits),
            Grains:Number(intakeData.grains),
            Potatoes:Number(intakeData.potatoes),
            Meat:Number(intakeData.meat),
            Eggs:Number(intakeData.eggs),
            Soy:Number(intakeData.soy),
            Oil:Number(intakeData.oil)
          })
        }
      }
    })



  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    });
  },
  increment: function(e) {
    if(e.currentTarget.dataset.value=="Milk"){
    this.setData({Milk: this.data.Milk + 50,count:this.data.count+31});
  }else if(e.currentTarget.dataset.value=="Vegetables"){
    this.setData({Vegetables: this.data.Vegetables + 100,count:this.data.count+17});
  }else if(e.currentTarget.dataset.value=="Fruits"){
    this.setData({Fruits: this.data.Fruits + 100,count:this.data.count+35});
  }else if(e.currentTarget.dataset.value=="Grains"){
    this.setData({Grains: this.data.Grains + 25,count:this.data.count+86});
  }else if(e.currentTarget.dataset.value=="Potatoes"){
    this.setData({Potatoes: this.data.Potatoes + 50,count:this.data.count+51});
  }else if(e.currentTarget.dataset.value=="Meat"){
    this.setData({Meat: this.data.Meat + 50,count:this.data.count+89});
  }else if(e.currentTarget.dataset.value=="Eggs"){
    this.setData({Eggs: this.data.Eggs + 50,count:this.data.count+70});
  }else if(e.currentTarget.dataset.value=="Soy"){
    this.setData({Soy: this.data.Soy + 25,count:this.data.count+96});
  }else if(e.currentTarget.dataset.value=="Oil"){
    this.setData({Oil: this.data.Oil + 10,count:this.data.count+90});
  }

  },
  decrement: function(e) {
    const value=e.currentTarget.dataset.value
    if (this.data[value] > 0) { 
      if(e.currentTarget.dataset.value=="Milk"){
        this.setData({Milk: this.data.Milk - 50,count:this.data.count-31});
      }else if(e.currentTarget.dataset.value=="Vegetables"){
        this.setData({Vegetables: this.data.Vegetables - 100,count:this.data.count-17});
      }else if(e.currentTarget.dataset.value=="Fruits"){
        this.setData({Fruits: this.data.Fruits - 100,count:this.data.count-35});
      }else if(e.currentTarget.dataset.value=="Grains"){
        this.setData({Grains: this.data.Grains - 25,count:this.data.count-86});
      }else if(e.currentTarget.dataset.value=="Potatoes"){
        this.setData({Potatoes: this.data.Potatoes - 50,count:this.data.count-51});
      }else if(e.currentTarget.dataset.value=="Meat"){
        this.setData({Meat: this.data.Meat - 50,count:this.data.count-89});
      }else if(e.currentTarget.dataset.value=="Eggs"){
        this.setData({Eggs: this.data.Eggs - 50,count:this.data.count-70});
      }else if(e.currentTarget.dataset.value=="Soy"){
        this.setData({Soy: this.data.Soy - 25,count:this.data.count-96});
      }else if(e.currentTarget.dataset.value=="Oil"){
        this.setData({Oil: this.data.Oil - 10,count:this.data.count-90});
      }
    }
  },
check(){
  let timestamp=new Date().toISOString().split('T')[0]
  wx.request({
    url: 'http://localhost:8080/newMemo',
    method: 'POST',
    data:{
      openid:this.data.openid,
      intake:this.data.count,
      milk:this.data.Milk,
      vegetables:this.data.Vegetables,
      fruits:this.data.Fruits,
      grains:this.data.Grains,
      potatoes:this.data.Potatoes,
      meat:this.data.Meat,
      eggs:this.data.Eggs,
      soy:this.data.Soy,
      oil:this.data.Oil,
      timestamp: timestamp
    },
    success: function(res) {
      console.log(res.data)
    }
    })
  const app=getApp()
  app.globalData.intake=this.data.count

  wx.showToast({
    title: '保存成功',
    icon: 'success',
  });
  setTimeout(function() {
    wx.navigateBack({
      delta: 1 
    });
  }, 2000); 
},

  reset(){
    this.setData({
      count:0,
      Milk:0,
      Vegetables:0,
      Fruits:0,
      Grains:0,
      Potatoes:0,
      Meat:0,
      Eggs:0,
      Soy:0,
      Oil:0,
    })
  }


});
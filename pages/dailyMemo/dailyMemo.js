const app = getApp()
Page({

  data: {
    intake: 0,
    consumption: 0,
    oldMemo: [],
    date: '',
    count: 0,
    step: 0,
    Running: 0,
    Hiking: 0,
    Cycling: 0,
    Jumping: 0,
    Swimming: 0,
    Others: 0,
  },

  onLoad(options) {
    this.data.openid = app.getOpenid()
    let timestamp = new Date().toISOString().split('T')[0]
    wx.request({
      url: 'http://localhost:8080/newMemo',
      method: 'GET',
      data: {
        openid: this.data.openid,
        timestamp: timestamp
      },
      success: (res) => {
        console.log(res.data)
        wx.setStorage({
          key: "Consumption",
          data: res.data.data.Consumption[0],
        });
        wx.setStorage({
          key: "Intake",
          data: res.data.data.Intake[0],
        });
        const intakeData = res.data.data.Intake;
        const consumptionData = res.data.data.Consumption;
        // 检查 Intake 数组是否有数据
        if (intakeData && intakeData.length > 0) {
          app.globalData.intake = intakeData[0].intake;
        }

        // 检查 Consumption 数组是否有数据
        if (consumptionData && consumptionData.length > 0) {
          app.globalData.consumption = consumptionData[0].consumption;
        } else {
          // 检查用户是否授权
          wx.getSetting({
            success: (res) => {
              if (!res.authSetting['scope.werun']) {
                // 请求授权
                wx.authorize({
                  scope: 'scope.werun',
                  success: () => {
                    // 用户同意授权后获取步数
                    this.getWeRunData();
                  },
                  fail: () => {
                    // 用户拒绝授权后的处理
                    wx.showModal({
                      title: '提示',
                      content: '请授权获取微信运动步数',
                      showCancel: false
                    });
                  }
                });
              } else {
                // 已经授权，直接获取步数
                this.getWeRunData();
              }

            }
          });

        }
        this.setData({
          intake: app.getIntake(),
          consumption: app.getConsumption(),
        })
      }
    })
    setTimeout(() => {
      wx.request({
        url: 'http://localhost:8080/AllnewMemo',
        method: 'GET',
        data: {
          openid: this.data.openid
        },
        success: (res) => {
          console.log(res.data.data);
          this.setData({
            oldMemo: res.data.data
          });
        }
      });
    }, 1500);
  },
  check() {
    let openid = app.getOpenid()
    app.globalData.consumption = this.data.count
    let timestamp = new Date().toISOString().split('T')[0]
    wx.request({
      url: 'http://localhost:8080/consumption',
      method: 'POST',
      data: {
        openid: openid,
        consumption: this.data.consumption,
        step: this.data.step,
        running: this.data.Running,
        hiking: this.data.Hiking,
        cycling: this.data.Cycling,
        jumping: this.data.Jumping,
        swimming: this.data.Swimming,
        others: this.data.Others,
        timestamp: timestamp
      },
      success: function (res) {
        
      }
    })
  },
  getWeRunData: function () {
    const that = this;
    wx.getWeRunData({
      success(res) {
        const encryptedData = res.encryptedData;
        const iv = res.iv;
        const sessionKey = app.getSession()
        wx.request({
          url: 'http://localhost:8080/api/decryptWeRunData',
          method: 'POST',
          data: {
            encryptedData: encryptedData,
            iv: iv,
            sessionKey: sessionKey
          },
          success(response) {
            let step = response.data.data.stepInfoList[response.data.data.stepInfoList.length - 1].step
            let count = Number(step) / 20
            app.globalData.consumption = count;
            that.setData({
              consumption: count
            })
          that.check()
          }

        });
      }
    });
  },

  onShow() {
    this.setData(({
      intake: app.getIntake(),
      consumption: app.getConsumption()
    }))

  },
  tonewMemo() {
    wx.navigateTo({
      url: '../newMemo/newMemo',
    })
  },
  toConsumption() {
    wx.navigateTo({
      url: '../consumption/consumption',
    })
  },

})
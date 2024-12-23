const app = getApp()
Page({

  data: {
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
      success: (res) => {
        const consumptionData = res.data.data.Consumption[0];

        // 检查 consumptionData 数组是否有数据
        if (consumptionData) {
          this.setData({
            count: Number(consumptionData.consumption),
            step: Number(consumptionData.step),
            Running: Number(consumptionData.running),
            Hiking: Number(consumptionData.hiking),
            Cycling: Number(consumptionData.cycling),
            Jumping: Number(consumptionData.jumping),
            Swimming: Number(consumptionData.swimming),
            Others: Number(consumptionData.others)
          })
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
            that.setData({
              step: step,
              count: count
            })
          }
        });
      }
    });
  },

  increment: function (e) {
    if (e.currentTarget.dataset.value == "step") {
      this.setData({
        step: this.data.step + 100,
        count: Number(this.data.count) + 5
      });
    } else if (e.currentTarget.dataset.value == "Running") {
      this.setData({
        Running: Number(this.data.Running) + 15,
        count: Number(this.data.count) + 175
      });
    } else if (e.currentTarget.dataset.value == "Hiking") {
      this.setData({
        Hiking: this.data.Hiking + 15,
        count: Number(this.data.count) + 75
      });
    } else if (e.currentTarget.dataset.value == "Cycling") {
      this.setData({
        Cycling: this.data.Cycling + 15,
        count: Number(this.data.count) + 125
      });
    } else if (e.currentTarget.dataset.value == "Jumping") {
      this.setData({
        Jumping: this.data.Jumping + 15,
        count: Number(this.data.count) + 211
      });
    } else if (e.currentTarget.dataset.value == "Swimming") {
      this.setData({
        Swimming: this.data.Swimming + 15,
        count: Number(this.data.count) + 137.5
      });
    } else if (e.currentTarget.dataset.value == "Others") {
      this.setData({
        Others: this.data.Others + 15,
        count: Number(this.data.count) + 15
      });
    }

  },
  decrement: function (e) {
    const value = e.currentTarget.dataset.value
    if (this.data[value] > 0) {
      if (e.currentTarget.dataset.value == "step") {
        this.setData({
          step: Math.max(this.data.step - 100, 0),
          count: (this.data.count - 5).toFixed(2)
        });
      } else if (e.currentTarget.dataset.value == "Running") {
        this.setData({
          Running: Math.max(this.data.Running - 15, 0),
          count: (this.data.count - 175).toFixed(2)
        });
      } else if (e.currentTarget.dataset.value == "Hiking") {
        this.setData({
          Hiking: Math.max(this.data.Hiking - 15, 0),
          count: (this.data.count - 75).toFixed(2)
        });
      } else if (e.currentTarget.dataset.value == "Cycling") {
        this.setData({
          Cycling: Math.max(this.data.Cycling - 15, 0),
          count: (this.data.count - 125).toFixed(2)
        });
      } else if (e.currentTarget.dataset.value == "Jumping") {
        this.setData({
          Jumping: Math.max(this.data.Jumping - 15, 0),
          count: (this.data.count - 211).toFixed(2)
        });
      } else if (e.currentTarget.dataset.value == "Swimming") {
        this.setData({
          Swimming: Math.max(this.data.Swimming - 15, 0),
          count: (this.data.count - 137.5).toFixed(2)
        });
      } else if (e.currentTarget.dataset.value == "Others") {
        this.setData({
          Others: Math.max(this.data.Others - 15, 0),
          count: (this.data.count - 15).toFixed(2)
        });
      }
    }
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
        consumption: this.data.count,
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
        console.log(res.data)
      }
    })
    wx.showToast({
      title: '保存成功',
      icon: 'success',
    });
    setTimeout(function () {
      wx.navigateBack({
        delta: 1
      });
    }, 2000);
  },

  reset() {
    this.setData({
      count: this.data.step / 20,
      Running: 0,
      Hiking: 0,
      Cycling: 0,
      Jumping: 0,
      Swimming: 0,
      Others: 0,
    })
  },
  selectstep(e) {
    const inputValue = parseFloat(e.detail.value) || 0
    const stepValue = this.data.step;
    let calorieChange;
    if (inputValue > stepValue) {
      calorieChange = this.data.count + (inputValue - stepValue) * 0.05;
    } else {
      calorieChange = this.data.count - (stepValue - inputValue) * 0.05;
    }
    this.setData({
      step: Number(e.detail.value),
      count: Number(calorieChange.toFixed(2))
    })
  },
  selectRunning(e) {
    const inputValue = parseFloat(e.detail.value) || 0
    const stepValue = this.data.Running;
    let calorieChange;
    if (inputValue > stepValue) {
      calorieChange = this.data.count + (inputValue - stepValue) * 11.66;
    } else {
      calorieChange = this.data.count - (stepValue - inputValue) * 11.66;
    }
    this.setData({
      Running: Number(e.detail.value),
      count: Number(calorieChange.toFixed(2))
    })
  },
  selectHiking(e) {
    const inputValue = parseFloat(e.detail.value) || 0
    const stepValue = this.data.Hiking;
    let calorieChange;
    if (inputValue > stepValue) {
      calorieChange = this.data.count + (inputValue - stepValue) * 5;
    } else {
      calorieChange = this.data.count - (stepValue - inputValue) * 5;
    }
    this.setData({
      Hiking: Number(e.detail.value),
      count: Number(calorieChange.toFixed(2))
    })
  },
  selectCycling(e) {
    const inputValue = parseFloat(e.detail.value) || 0
    const stepValue = this.data.Cycling;
    let calorieChange;
    if (inputValue > stepValue) {
      calorieChange = this.data.count + (inputValue - stepValue) * 8.33;
    } else {
      calorieChange = this.data.count - (stepValue - inputValue) * 8.33;
    }
    this.setData({
      Cycling: Number(e.detail.value),
      count: Number(calorieChange.toFixed(2))
    })
  },
  selectJumping(e) {
    const inputValue = parseFloat(e.detail.value) || 0
    const stepValue = this.data.Jumping;
    let calorieChange;
    if (inputValue > stepValue) {
      calorieChange = this.data.count + (inputValue - stepValue) * 14.06;
    } else {
      calorieChange = this.data.count - (stepValue - inputValue) * 14.06;
    }
    this.setData({
      Jumping: Number(e.detail.value),
      count: Number(calorieChange.toFixed(2))
    })
  },
  selectSwimming(e) {
    const inputValue = parseFloat(e.detail.value) || 0
    const stepValue = this.data.Swimming;
    let calorieChange;
    if (inputValue > stepValue) {
      calorieChange = this.data.count + (inputValue - stepValue) * 9.16;
    } else {
      calorieChange = this.data.count - (stepValue - inputValue) * 9.16;
    }
    this.setData({
      Swimming: Number(e.detail.value),
      count: Number(calorieChange.toFixed(2))
    })
  },
  selectOthers(e) {
    const inputValue = parseFloat(e.detail.value) || 0
    const stepValue = this.data.Others;
    let calorieChange;
    if (inputValue > stepValue) {
      calorieChange = this.data.count + (inputValue - stepValue);
    } else {
      calorieChange = this.data.count - (stepValue - inputValue);
    }
    this.setData({
      Others: Number(e.detail.value),
      count: Number(calorieChange.toFixed(2))
    })
  },



})
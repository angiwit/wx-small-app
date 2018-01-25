Page({
    data: {
      date: "2016-09-01",
      time: "12:01"
    },
    payResult: function () {
      wx.navigateTo({
        url: '../pay_succ/pay_succ',
      })
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        // this.requestData("newlist");
    },
    bindDateChange: function (e) {
      this.setData({
        date: e.detail.value
      })
    },
    bindTimeChange: function (e) {
      this.setData({
        time: e.detail.value
      })
    },
    requestData: function (a) {
        var that = this;
        wx.request({
            url: 'http://api.budejie.com/api/api_open.php',
            data: {
                a: a,
                c: "data",
                maxTime: that.maxTime,
                type:'41'
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            success: function (res) {
                    console.log(res.data.list);
                    that.setData({
                        dataList:that.data.dataList.concat(res.data.list)
                    });
            },
            fail: function () {
                that.setData({
                    isHiddenModal: false
                });
            },
            complete: function () {
                that.setData({
                    isHiddenLoading: true,
                    isHiddenToast: false
                });
            }
        })
    },
    closeToast:function(){
        this.setData({
            isHiddenToast:true
        });
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
})
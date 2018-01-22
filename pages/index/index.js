//index.js
//获取应用实例
var base64 = require("../../dist/example/images/base64.js");
var app = getApp()
Page( {
  data: {
    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    icon: ""
  },
 

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    this.setData({
      icon: base64.icon20
    });

  },
  requestData: function( a ) {
    var that = this;
    //  请求数据
    wx.request( {
      url: "http://api.budejie.com/api/api_open.php",
      data: {
        a: a,
        c: "data",
        maxtime: that.data.maxtime,
        type: 29
      },
      method: "GET",
      success: function( res ) {
        console.log( res );
        that.setData( {
          isHiddenLoading: true,
          dataList: res.data.list,
          maxtime: res.data.info.maxtime,
          isHiddenToast: false
        });
        console.log( "成功了" );
      },
      fail: function() {
        console.log( "失败了" );
      }
    });
  },
  // 下拉刷新
  upper: function( e ) {
    console.log( "下拉刷新了" );
    this.requestData( "newlist" );
  },
  // 加载 
  lower: function( e ) {
    console.log( "加载更多了" );
    this.requestData( "list" );
  },
  closeToast: function( e ) {
    this.setData( {
      isHiddenToast: true
    });
  }
})

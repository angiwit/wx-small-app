Page({
  data:{
    testResult: ""
    // text:"这是一个页面"
  },
  healing: function () {
    console.log("1213232323233333333333333333333333333")
    wx.navigateTo({
      url: '../healing/healing',
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      testResult: options.myTestResult
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
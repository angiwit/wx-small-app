// pages/illtest-page/testill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemDetail: [{
      "topic_name": "题目一",
      "topic_answer": [{
        "topic_answer_id": 1,
        "topic_id": 20,
        "answer_name": "答案aaaa",
        "is_standard_answer": 0,
        "checked": true
      }, {
        "topic_answer_id": 2,
        "topic_id": 20,
        "answer_name": "正确答案",
        "is_standard_answer": 0,
        "checked": false
      }, {
        "topic_answer_id": 3,
        "topic_id": 20,
        "answer_name": "答案cccc",
        "is_standard_answer": 0,
        "checked": false
      }, {
        "topic_answer_id": 4,
        "topic_id": 20,
        "answer_name": "答案dddd",
        "is_standard_answer": 1,
        "checked": false
      }]
    }, {
      "topic_name": "题目二",
      "topic_answer": [{
        "topic_answer_id": 5,
        "topic_id": 21,
        "answer_name": "答案A",
        "is_standard_answer": 1,
        "checked": false
      }, {
        "topic_answer_id": 6,
        "topic_id": 21,
        "answer_name": "答案B",
        "is_standard_answer": 0,
        "checked": false
      }, {
        "topic_answer_id": 7,
        "topic_id": 21,
        "answer_name": "正确答案",
        "is_standard_answer": 0,
        "checked": false
      }, {
        "topic_answer_id": 8,
        "topic_id": 21,
        "answer_name": "答案D",
        "is_standard_answer": 0,
        "checked": false
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
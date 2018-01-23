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
        "answer_name": "答案aaaa",
        "checked": false
      }, {
        "topic_answer_id": 2,
        "answer_name": "正确答案",
        "checked": false
      }, {
        "topic_answer_id": 3,
        "answer_name": "答案cccc",
        "checked": false
      }, {
        "topic_answer_id": 4,
        "answer_name": "答案dddd",
        "checked": false
      }]
    }, {
      "topic_name": "题目二",
      "topic_answer": [{
        "topic_answer_id": 1,
        "answer_name": "答案A",
        "checked": false
      }, {
        "topic_answer_id": 2,
        "answer_name": "答案B",
        "checked": false
      }, {
        "topic_answer_id": 3,
        "answer_name": "正确答案",
        "checked": false
      }, {
        "topic_answer_id": 4,
        "answer_name": "答案D",
        "checked": false
      }]
    }],
    answerResult: [
      {
        key: ["1","1"],
        value: "恭喜你，你很健康"  
      },
      {
        key: ["1", "2"],
        value: "你是亚健康"  
      },
      {
        key: ["2", "1"],
        value: "你有精神病"
      },
      {
        key: ["2", "2"],
        value: "你没救了"
      }
    ],
    otherAnswerResult: "刚才没看清，你再走两步"
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
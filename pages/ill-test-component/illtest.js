// pages/ill-test/illtest.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemDetail: {
      type: Object,
      value: ""
    },
    answerResult:{
      type: Object,
      value: ""
    },
    otherAnswerResult: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    questionNum: 0,
    itemDetail: "",
    choosedNum: "",
    answers:[]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addQuestionNum: function()
    {
      console.log("当前的choosedNum值为", this.data.choosedNum)
      this.setData({
        showTopTips: true,
        questionNum: this.data.questionNum + 1
      });
      this.data.answers.push(this.data.choosedNum)
      console.log(this.data.answers)
    },
    
    submitAnswer: function(){
      this.data.answers.push(this.data.choosedNum)
      var answers = this.data.answers
      var answerResult = this.properties.answerResult
      var testResult;
      for (var i = 0, len = answerResult.length; i < len; ++i)
      {
        if (answerResult[i].key.toString() == answers.toString())
        {
          testResult = answerResult[i].value
          wx.setStorageSync('myTestResult', answerResult[i].value)
        }
      }
      wx.navigateTo({
        url: '../../ill-test-result/result?myTestResult=' + testResult
      })
    },
    radioChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);
      var itemDetail = this.data.itemDetail;
      var radioItems = this.data.itemDetail[this.data.questionNum].topic_answer;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].topic_answer_id == e.detail.value;
      }

      this.setData({
        itemDetail: itemDetail,
        choosedNum: e.detail.value
      });
    
    }
  }
})

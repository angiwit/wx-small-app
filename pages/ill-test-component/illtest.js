// pages/ill-test/illtest.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemDetail: {
      type: Object,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    questionNum: 0,
    itemDetail: ""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showTopTips: function () {
      var that = this;
      this.setData({
        showTopTips: true,
        questionNum: this.data.questionNum + 1
      });
      setTimeout(function () {
        that.setData({
          showTopTips: false
        });
      }, 3000);
    },
    submitAnswer: function(){
      //提交答案的逻辑
    },
    radioChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);
      var itemDetail = this.data.itemDetail;
      var radioItems = this.data.itemDetail[this.data.questionNum].topic_answer;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        // console.log("11", radioItems[i], radioItems[i].topic_answer_id == e.detail.value);
        radioItems[i].checked = radioItems[i].topic_answer_id == e.detail.value;
      }

      this.setData({
        itemDetail: itemDetail
      });
    },
    checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);

      var checkboxItems = this.data.itemDetail, values = e.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }

      this.setData({
        itemDetail: checkboxItems
      });
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
    bindCountryCodeChange: function (e) {
      console.log('picker country code 发生选择改变，携带值为', e.detail.value);

      this.setData({
        countryCodeIndex: e.detail.value
      })
    },
    bindCountryChange: function (e) {
      console.log('picker country 发生选择改变，携带值为', e.detail.value);

      this.setData({
        countryIndex: e.detail.value
      })
    },
    bindAccountChange: function (e) {
      console.log('picker account 发生选择改变，携带值为', e.detail.value);

      this.setData({
        accountIndex: e.detail.value
      })
    },
    bindAgreeChange: function (e) {
      this.setData({
        isAgree: !!e.detail.value.length
      });
    }
  }
})

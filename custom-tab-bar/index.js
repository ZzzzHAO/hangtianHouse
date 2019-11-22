Component({
  data: {
    selected: 0,
    color: "#999",
    selectedColor: "#796ffe",
    list: [{
      pagePath: "/pages/recommend-list/recommend-list",
      iconPath: "/images/icon/like.png",
      selectedIconPath: "/images/icon/like_fill.png",
      text: "推荐"
    }, {
      pagePath: "/pages/message-list/message-list",
      iconPath: "/images/icon/message.png",
      selectedIconPath: "/images/icon/message_fill.png",
      text: "消息"
    }, {
      pagePath: "/pages/personal-center/personal-center",
      iconPath: "/images/icon/people.png",
      selectedIconPath: "/images/icon/people_fill.png",
      text: "我"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      console.log(data.index)
      this.setData({
        selected: data.index
      })
    }
  }
})
// miniprogram/pages/editAccount/editAccount.js
const db = wx.cloud.database() // 云数据库
// 快速解决存储问题 
// 小程序本地， 小是为了用完即走 社区团购 老人家， 
// 到了云端 
// collection mysql table 
const photos = db.collection('cover_photos')

Page({

  /**
   * 页面的初始数据 MVVM 
   */
  
  data: {
    images: [],
    account: {
      value: '王殿虎'
    }
  },
  save() {
    let i = 5,
    coverUrl = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2994811507,2005865352&fm=26&gp=0.jpg'
    // 若没修改 则为之前的value
    let inputValue = this.data.inputValue 

    wx.showLoading({
      title: '正在保存'
    })
    db
      .collection('accounts')
      .add({
        data: {
          coverUrl,
          title: inputValue
        }
      }).then(res => {
        console.log(res);
        wx.hideLoading();
      })

    
  },
  selectThis(e) {

  },
  // MVVM 页面是数据驱动的， 
  // 负责数据和界面的一致
  getInput(e) {
    console.log(e);
    let account = this.data.account;
    account.value = e.detail.value;
    this.setData({
      account: account
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 此时此刻适合取数据
    // DB select 
    wx.showLoading({
      title: '正在请求中...'
    }) // 正在请求中...
    photos.get({
      /*成功取回来后 回调函数 */
      success: res => {
        console.log(res);
        this.setData({
          images: res.data
        })
        wx.hideLoading() // 隐藏
      }
    })
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
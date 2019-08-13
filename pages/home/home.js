
import baseNetwork from "../../utils/baseNetwork.js";
var network = require('../../utils/network.js');
var configurl = require('../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页轮播图数据
    bannerData: [],
    indicatorDots: false,
    interval: 3000,
    duration: 800,

    homeData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner();
    this.getHomeData();
  },

  getBanner(){
    var that = this;
    //首页轮播图
    baseNetwork.getHomeBanner().then(
      function (res) {
        that.setData({
          bannerData: res.data
        })
      })

  },

  getHomeData(){
    var that = this;
    //首页轮播图
    baseNetwork.getHomeList(0).then(
      function (res) {
        that.setData({
          homeData: res.data.datas
        })
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
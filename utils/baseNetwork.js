var config = require('../utils/config.js');
var network = require('../utils/network.js');

export default {

  //首页轮播图
  getHomeBanner(params) {
    const result = network.request("GET",config.bannerUrl, params);
    return result;
  },

  //首页列表
  getHomeList(page,params) {
    const result = network.request("GET", config.homeListUrl + page+'/json', params);
    return result;
  },
  

}
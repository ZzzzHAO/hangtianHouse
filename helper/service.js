import { handleResCookie, getReqHeader } from '../helper/business';
const app = getApp();
const env = app.globalData.env;
/**
 * @function
 * @name request
 * @description ajax请求
 * @param {string} url 请求路径
 * @param {object} data 请求参数
 * @param {string} method 请求方式
 * @param {boolean} needLoading 是否需要loading
 * @return {promise}
*/
export default function (url, data, method = (env === 'dev' ? 'GET' : 'POST'), needLoading = true) {
  needLoading && wx.showLoading({ title: '获取中', icon: 'none', mask: true });
  const urlReg = /(http|https):\/\/(www.)?([\w|-]+(\.)?)+/;
  let domain = url.match(urlReg) && url.match(urlReg)[0];
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: getReqHeader(domain),
      method,
      success(res) {
        console.log('--------------success--------------');
        let cookies = res.header['Set-Cookie'] || res.header['set-cookie']; // IOS下是Set-Cookie，安卓下是set-cookie
        handleResCookie(domain, cookies);
        resolve(res);
      },
      fail(err) {
        console.log('--------------fail--------------');
        reject(err);
      },
      complete() {
        needLoading && wx.hideLoading();
      }
    })
  })
}
/**
 * @module business
 * @description 业务逻辑封装
 * @author zhanghao
 */
import cookie from './cookie'
/**
 * @function handleResCookie
 * @description 处理服务返回的cookie
 * @author zhanghao
 * @param {string} cookies
 */
export function handleResCookie(domain = location.origin, cookies = '') {
    if (cookies) {
        cookies = cookies.replace(/\=(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s*\,/g, '=$1').split(','); //分割cookie字段
        cookies = cookies.map(cookie => {
            let obj = {};
            cookie.split(';').forEach((val, key) => {
                let tempArr = val.split('='); // 键对值
                if (key === 0) { //只取第一个键值对和max-age
                    obj.name = tempArr[0];
                    obj.value = tempArr[1];
                }
                if (tempArr[0].trim() === 'Max-Age') {
                    obj['max-age'] = tempArr[1];
                }
            });
            return obj;
        })
        cookies.forEach(v => {
            cookie.setCookie(domain, v.name, v.value, v['max-age'])
        })
    }
}
/**
 * @function getReqHeader
 * @description 获取请求头部
 * @author zhanghao
 * @return {object} header
 */
export function getReqHeader(domain = location.origin) {
    let header = { 'content-type': 'application/json' };
    if (cookie.getCookie(domain).length) {
        let cookie = '';
        let arr = cookie.getCookie(domain).map(v => `${v.name}=${v.value}`);
        cookie = arr.join(';');
        if (cookie) header.cookie = cookie;
    }
    return header;
}
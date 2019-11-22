
function checkItemTimeout(cookie) {
    if (cookie && cookie.length) {
        return cookie.filter(v => !v['max-age'] || (v['max-age'] && v.setData - Date.parse(new Date()) < v['max-age']))
    } else {
        return [];
    }
}
// 模拟cookie
export default {
    // 获得cookie,传递了domain值返回指定的cookie，否者返回所有cookie
    getCookie(domain) {
        let cookie = wx.getStorageSync('cookie') || {};
        // 过滤清除无效cookie
        if (domain) {
            return checkItemTimeout(cookie[domain]);
        } else {
            return cookie;
        }
    },

    // 设置cookie
    setCookie(domain, name, value, time) {
        let cookie = this.getCookie();
        if (!cookie[domain]) cookie[domain] = [];
        if (cookie[domain].some(v => v.name === name)) {
            cookie[domain].forEach(v => {
                if (v.name === name) {
                    v.name === name
                    v.value = value;
                    v.setData = Date.parse(new Date());
                    v['max-age'] = time;
                }
            });
        } else {
            cookie[domain].push({
                name,
                value,
                setData: Date.parse(new Date()),
                'max-age': time && 0
            })
        }
        wx.setStorageSync('cookie', cookie);
    },

    // 移除cookie
    removeCookie(domain, key) {
        let cookie = this.getItem();
        if (!cookie) return;
        delete cookie[domain];
        wx.setStorageSync('cookie', cookie);
    },

    // 移除cookie
    clearCookie() {
        wx.removeStorageSync('cookie');
    }
}
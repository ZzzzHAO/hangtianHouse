const app = getApp();
const env = app.globalData.env;
const serverURl = (env === 'dev' ? 'http://192.168.2.102:8080' : '');
export default {
    REGISTER : `${serverURl}/register.json`,
    LOGIN : `${serverURl}/login.json`,
}
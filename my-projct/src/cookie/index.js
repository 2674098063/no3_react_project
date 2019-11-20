/* ----------------------   cookie相关   ---------------------- */
/*获取需要的cooki*/
const getCookie = function getcookie(key) {
    let str = document.cookie; ////uid=2; username=malin123
    let arr = str.split('; '); //['uid=2','username=malin123']
    for (let item of arr) {
        let arr2 = item.split('='); //['uid','2']
        if (key === arr2[0]) {
            return arr2[1];
        }
    }
}

/* 设置cookie */
const setCookie = function setcookie(key, val, iday) {
    let now = new Date();
    now.setDate(now.getDate() + iday);
    document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

/* 删除cookie */
const deletCookie = function removecookie(key) {
    this.setCookie(key, '', -1);
}


const getSession = (key) => {
    return window.sessionStorage.getItem(key);
}

const setSession = (key, val) => {
    window.sessionStorage.setItem(key, val)
}
const delSession = (key) => {
    window.sessionStorage.removeItem(key)
}

const delallcookie = function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}
const cookie = {
    getCookie,
    setCookie,
    deletCookie,
    getSession,
    setSession,
    delSession,
    delallcookie
}
export default cookie
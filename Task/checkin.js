
const $ = Env('每日任务')
let cookie;


/*加密*/
let fs = require('fs');
const crypto = require('crypto');


!(async () => {
  await all();
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function all() {

  $.log("【jztt withdraw】");
  let TokenArr = ['O6GONkCyQYhnIkLnO5ZxuGEucVllpRgJ','lYj5N1IgwRVkrQ6Wneiztc9CPkSeUAo2', 'BXpKAZrCgX8vIx_XFYrwQjziaX2eRxJv','g9szPKNsn7r17kq9lmWMa1YWvz3lvums','sP7fthKGM28pfyvjX2NeZGuxFqThWOA7','3Cga15GWdE6MGe3u5l1hayika-IRmbBL'];

  for (let i = 0; i < TokenArr.length; i++) {
    $.log(`开始执行第${i + 1}个账号`);
    Token = TokenArr[i];
    await CashAD();
    await $.wait(1000);
    await NineWithDraw();
    await $.wait(1000);
  }
  $.log("【中青3提现】");
  await YouthWithdraw();


  $.log("【机场签到】");

  encrypted = "da6030b09dec3f19f4290f2f85e2ef4a36d59ac83b18bd506f4e17d173e63a087bca2c989ffe41160a0d694836cadd5aea47401b0270997d860464e6b77938f3";
  key = process.env.ENCRYPT_KEY;
  body = aesDecrypt(encrypted, key);

  encrypted = "0721e95e0b7305f6f925a7bd219325136edb73b13bfaae8fb0a090aeb01e9b2c";
  url1 = aesDecrypt(encrypted, key);

  encrypted = "0721e95e0b7305f6f925a7bd219325131dfb41f4134f19efe1ae0356f344019f";
  url2 = aesDecrypt(encrypted, key);

  encrypted = "0721e95e0b7305f6f925a7bd2193251397978a9e37c0e29646d56d25890b08c7ff8e3193cfe5874dd849506254eb2a70";
  url3 = aesDecrypt(encrypted, key);

  cookie = await login();
  if (cookie != 0) {
    $.log("正在签到...");
    await checkin();
    await traquery();
  }



}


function taskget() {
  return new Promise((resolve, reject) => {
       const url = "http://user.gaoqingdianshi.com/api/v3/user/info";
       const headers = {
  "Accept-Encoding": "gzip, deflate",
  "AppVerCode": "236",
  "userid": "62d5897fae73120cda6cae02e53f6739",
  "language": "zh_CN",
  "Host": "user.gaoqingdianshi.com",
  "AppVerName": "1.96",
  "hwModel": "iPhone11,2",
  "hwBrand": "iPhone",
  "countryCode": "CN",
  "ssid": "f051e12e-b7d5-4381-84e8-e28c4f2ff5a9",
  "Connection": "close",
  "uuid": "b963e558667e44ea908663230a232e82",
  "Cache-Control": "no-cache",
  "ispId": "",
  "Accept-Language": "zh-Hans;q=1",
  "User-Agent": "Dsj/Client1.2",
  "MarketChannelName": "Iphone",
  "hwMac": "",
  "Generation": "com.dianshijia.mobile.ios",
  "Accept": "*/*",
  "Authorization": "T1RWaE56VTJZelk1TnpneU16QXhNMkprWkRNMllXUm1ZekE0Tm1GbU4yRT18MTYzMDk5MDgxMzc4MTA0MzA1OHw0MjMxMDkyMmFmZDVjYjFlZjM2YjkzODMzYmM4MzZiZDM2N2U3NmNi",
  "appId": "19227f89ea1a166451593601eb8a1b4f",
  "cityCode": "420100",
  "erid": "93363",
  "routerMac": "f88c215fb96d",
  "ethMac": "",
  "areaCode": "420000",
  "cuuid": "adcda99dee6aa9d7981c962071150ba9",
  "gpsCityCode": "420100"
};
      const request = {
          url: url,
          headers: headers
      };

      $.get(request, async(error, response, data) => {
          try {
              $.log(data);
          } catch (e) {
              $.log(e)
          }
          resolve();
      })
  })
}














function NineWithDraw() {
  return new Promise((resolve, reject) => {
    const url = "https://api.st615.com/v1/cash/withdraw-new";
    const headers = {};
    const body = `token=${Token}&type=1&money=0.3`;
    const request = {
      url: url,
      headers: headers,
      body: body
    };

    $.post(request, async (error, response, data) => {
      try {
        let result = JSON.parse(data);
        $.log(`【提现结果】${result.msg}`)
      } catch (e) {
        $.log(e)
      }
      resolve();
    })
  })
}


function CashAD() {
  return new Promise((resolve, reject) => {
    const url = `https://api.st615.com/v1/cash/ads?token=${Token}&source=cash`;
    const headers = {};
    const request = {
      url: url,
      headers: headers
    };

    $.get(request, async (error, response, data) => {
      try {
        //$.log(data);
        let result = JSON.parse(data);
        $.log(`【提现视频】${result.msg}`)
      } catch (e) {
        $.log(e)
      }
      resolve();
    })
  })
}
function YouthWithdraw() {
  return new Promise((resolve, reject) => {
    const url = "https://ios.baertt.com/v5/wechat/withdraw2.json";
    const headers = {};
    const body = "p=9NwGV8Ov71o%3DnXy4DSepUrpNij1znriwLz5F0xxoMfi_RJhf9fnYS9ABFPJMOM7jEx17_kYTNFAQDTA49cgTFsNZgF7AFE8jBxQebg2oGNXJXdhtbydx6aGWryTes-AMT1VJT5fEQHzrx6SAZ_nUMDu_xjD5MFyUyh9o-uttQZUQDeUDUG2YjNLrAANQd-3v-gToRHhbFxMgU8_UObscA5rYMX4jbiVS7VtjO_dB7fEjYS80yG1JqAB21VTqvwo2T13H6vePX0XK5T5HWboq5opcbwUcyDuOd7ZZLihn44NvW3cnJ_OAIJx-XWiCo4uNXQIheUDvWzBM_EO5jP6y90KDIOS_si11mVFy4H26xjHn2oLmW_70L3-9v4aLbu0MBN24UIS1aY_T2UhVCKRzrJT8H9jHB-BJIBC3L8X3rQNzAj2fYqXx03cMzfY7Zh4t0nnczPKJs5FvOmfpgN5kk8DK5MXfTQTC27YfvuehFTc_m8Ojx4mDocmc7rf0unPWWh3EIw_C0SK3pnhjPWlh8Bh49u916f606XVZaZBAfiv0MD4ACBoxQ7kBmaVS7fFFNJtMNjf0E8cj5-81xA_JMa-WMmQwMOSEDC_6_YN_O7x-RStrPsFhzkSc4tAZvcuAEbWInp4BAX29tqbGeO2meZVVr4qe19R3EDBTl9tAUqAsvCb8t_fnfRrxv-JjwVdJWpmJEEdIFul6sQK_jo05VwT1yKyb89z2VljcnmENlHh-2H2T0pPNGXqWZ_WMKSJkHfrzOPKIl76_3KBjioZnPW-fEidpwPeFrEGSQNeNpi2Cjct7gqy_V8PjHIdhxuqxzZS-s92XLOzy0qFmNk1s7xpxsCXP0pJ4Bw%3D%3D";
    const request = {
      url: url,
      headers: headers,
      body: body
    };

    $.post(request, async (error, response, data) => {
      try {
        //$.log(data);
        let result = JSON.parse(data);
        $.log(`【提现结果】${result.message}`);
      } catch (e) {
        $.log(e)
      }
      resolve();
    })
  })
}




function login() {
  return new Promise((resolve, reject) => {
    const request = {
      url: url1,
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: body,
      timeout: 60000,
    };
    $.post(request, function (error, request, data) {
      try {
        $.log(JSON.parse(data).msg);

      } catch (e) {
        $.log(e)
      }
      if (JSON.parse(data).code == 200)
        resolve(request.headers['set-cookie']);
      else
        resolve(0);
    });
  });
}


function checkin() {
  return new Promise((resolve, reject) => {
    const request = {
      url: url2,
      headers: cookie,
      body: "",
      timeout: 60000,
    };
    $.post(request, function (error, request, data) {
      try {
        $.log(JSON.parse(data).msg);
      } catch (e) {
        $.log(e)
      }
      resolve();
    });
  });
}

function traquery() {
  return new Promise((resolve, reject) => {
    const request = {
      url: url3,
      headers: cookie,
      timeout: 60000,
    };

    $.get(request, function (error, response, data) {
      try {
        $.log("今日已用流量" + JSON.parse(data).data.now + "，剩余流量" + JSON.parse(data).data.over + "，总共使用流量" + JSON.parse(data).data.old);
      } catch (e) {
        $.log(e)
      }
      resolve();
    });
  });
}









function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }





const jobname = 'dsjtx'
const $ = Env(jobname)
var sd = require('silly-datetime');
let id

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
    console.log(`${sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')}:倒计时提现开始`);     
        var time = sd.format(new Date(), 'HH:mm:ss'); 
        //console.log(time); 
        while(time != "12:00:00" && time != "20:00:00") 
        {
            time = sd.format(new Date(), 'HH:mm:ss'); 
        } 
        withdrawal7();
        withdrawal8();      
        withdrawal1();
        withdrawal2();
        withdrawal3();
        withdrawal4();
        withdrawal5();
        withdrawal6();

        console.log(`${sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')}:倒计时提现结束`);
}





  

function withdrawal1() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx000041&rs=G3PAeCNWfk&sign=ab2e4b422b23c3b4aec8194a1cff7195";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "8e055dfa9fe6d485dd8631cc35efd97e",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
    "AppVerName": "1.96",
    "hwModel": "iPhone 6s",
    "hwBrand": "iPhone",
    "countryCode": "",
    "ssid": "711f16dc-16a6-47c8-9006-fa50426d2e53",
    "Connection": "close",
    "uuid": "02f7c325094e43d9a2c9e6581a461f71",
    "Cache-Control": "no-cache",
    "ispId": "",
    "Accept-Language": "zh-Hans;q=1",
    "User-Agent": "Dsj/Client1.2",
    "MarketChannelName": "Iphone",
    "hwMac": "",
    "Generation": "com.dianshijia.mobile.ios",
    "Accept": "*/*",
    "Authorization": "TmpBd05tRXhZekF6T0RZek5qUmxPV1E1T1dVNFpUSm1Zak13TlRJMllqVT18MTYzMzY5MjQ2NzE5NjQwNDk2NHw3ZTgxOGMzMGY1NjdiZTc4NTM5M2Q3MWJhMTEzZGI2MTZjNGYzNWQ4",
    "appId": "19227f89ea1a166451593601eb8a1b4f",
    "cityCode": "420100",
    "erid": "17985",
    "routerMac": "",
    "ethMac": "",
    "areaCode": "420000",
    "cuuid": "73610ea1120523a64931c4ec6d8ac3e9",
    "gpsCityCode": ""
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function withdrawal2() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx00025&rs=fd3DkcHjI&sign=7e76e02e038fbb18bdb15237131ca221";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "2cac3df05528157d79516675975b6f5a",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
    "AppVerName": "1.96",
    "hwModel": "iPhone 6s",
    "hwBrand": "iPhone",
    "countryCode": "",
    "ssid": "cc44451a-83ba-4c6d-8e12-bd336e66baa4",
    "Connection": "close",
    "uuid": "02f7c325094e43d9a2c9e6581a461f71",
    "Cache-Control": "no-cache",
    "ispId": "",
    "Accept-Language": "zh-Hans;q=1",
    "User-Agent": "Dsj/Client1.2",
    "MarketChannelName": "Iphone",
    "hwMac": "",
    "Generation": "com.dianshijia.mobile.ios",
    "Accept": "*/*",
    "Authorization": "TmpnNFpqTTRZakUxTXpJMllXSmhOemcyWVdReE16ZGxZelEyWXpBMU5Eaz18MTYzMzY5MzE5NTc1ODkxOTYyNHwzYTgzODVjYjYxODIyMmU5OWZhODZlYjhlZmU1ZDA0MmQ2YmE4ZWQx",
    "appId": "19227f89ea1a166451593601eb8a1b4f",
    "cityCode": "420100",
    "erid": "78552",
    "routerMac": "",
    "ethMac": "",
    "areaCode": "420000",
    "cuuid": "145c9ba82450411bab689cc3ee6e9e00",
    "gpsCityCode": ""
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function withdrawal3() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx00025&rs=wZMclsqnBQwaIaELs9MSNvqNsOk5&sign=4d2b92f2245803123e877ffa3dc897a5";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "a92f4a163810a4d57bdff9b33e0d1bab",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
    "AppVerName": "1.96",
    "hwModel": "iPhone 6s",
    "hwBrand": "iPhone",
    "countryCode": "",
    "ssid": "2eb76feb-a9f5-4386-85fc-76550ac17b40",
    "Connection": "close",
    "uuid": "02f7c325094e43d9a2c9e6581a461f71",
    "Cache-Control": "no-cache",
    "ispId": "",
    "Accept-Language": "zh-Hans;q=1",
    "User-Agent": "Dsj/Client1.2",
    "MarketChannelName": "Iphone",
    "hwMac": "",
    "Generation": "com.dianshijia.mobile.ios",
    "Accept": "*/*",
    "Authorization": "WXpJek4yUXhORGsyTnpKbVpHSTBZekF3TjJaa00yRXpaVFZrT0RRMk56UT18MTYzMzgyOTEzNDA2NTQ5MDI2OHwxOTJmODQyMTU2MzQxMjM0ZjQwZmQ2NGEzZWY3OGFhNzlkMWQ3ZWNj",
    "appId": "19227f89ea1a166451593601eb8a1b4f",
    "cityCode": "420100",
    "erid": "81663",
    "routerMac": "",
    "ethMac": "",
    "areaCode": "420000",
    "cuuid": "145c9ba82450411bab689cc3ee6e9e00",
    "gpsCityCode": ""
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function withdrawal4() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx00025&rs=iRplfn3EEiM8z&sign=210f6054550fedc3e92d86afc45de08e";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "1798e35861e49e3550a7bcec96e196b7",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
    "AppVerName": "1.96",
    "hwModel": "iPhone 6s",
    "hwBrand": "iPhone",
    "countryCode": "",
    "ssid": "65889e51-0b5f-418a-81de-382bb5b1becb",
    "Connection": "close",
    "uuid": "02f7c325094e43d9a2c9e6581a461f71",
    "Cache-Control": "no-cache",
    "ispId": "",
    "Accept-Language": "zh-Hans;q=1",
    "User-Agent": "Dsj/Client1.2",
    "MarketChannelName": "Iphone",
    "hwMac": "",
    "Generation": "com.dianshijia.mobile.ios",
    "Accept": "*/*",
    "Authorization": "WkRkak5qRXpNMkV4TmpBNU1XVTBaVEUyTkRWbFpqTXdZVEJpWVRBeE4yTT18MTYzMzgyOTM4NTk4MTMyMTkwNnxmY2VhYjcyNThhMDVkNDRiMGZhZDExZTk2ZDQ1OGQ2ZDU2YmU5MDY4",
    "appId": "19227f89ea1a166451593601eb8a1b4f",
    "cityCode": "420100",
    "erid": "63836",
    "routerMac": "",
    "ethMac": "",
    "areaCode": "420000",
    "cuuid": "145c9ba82450411bab689cc3ee6e9e00",
    "gpsCityCode": ""
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function withdrawal5() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx00005&rs=xJp4OmJxegBv8bEWjhwkgQ6bTc3NkJE&sign=7870cb83244601573dd29f4fce7105e1";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "a57d51031aadf7c9fbfa0a914d3b169d",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
    "AppVerName": "1.96",
    "hwModel": "iPhone 6s",
    "hwBrand": "iPhone",
    "countryCode": "",
    "ssid": "d0471c90-5e9f-4f61-960a-b9804942f656",
    "Connection": "close",
    "uuid": "02f7c325094e43d9a2c9e6581a461f71",
    "Cache-Control": "no-cache",
    "ispId": "",
    "Accept-Language": "zh-Hans;q=1",
    "User-Agent": "Dsj/Client1.2",
    "MarketChannelName": "Iphone",
    "hwMac": "",
    "Generation": "com.dianshijia.mobile.ios",
    "Accept": "*/*",
    "Authorization": "TVRNMk56STRaRFEwWmpKaE0yVTVZMlpoT0ROaE1qQXlNRGxtTjJSak4yTT18MTYzMzgzMDIwMDg4ODcwMTU0NnxiMzc4MThjMGZjZDdiOTRlODVlZDI3YTE0NzFiNzgwMDM3OTIzYmVm",
    "appId": "19227f89ea1a166451593601eb8a1b4f",
    "cityCode": "420100",
    "erid": "16264",
    "routerMac": "",
    "ethMac": "",
    "areaCode": "420000",
    "cuuid": "145c9ba82450411bab689cc3ee6e9e00",
    "gpsCityCode": ""
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
 

function withdrawal6() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx00025&rs=apNN51TEQB9mFoFK4C6&sign=4efb4623d5491b4f70912c51f3cbc3b5";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "f0f60ce2f62cb6972af6af7068e27651",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
    "AppVerName": "1.96",
    "hwModel": "iPhone 6s",
    "hwBrand": "iPhone",
    "countryCode": "",
    "ssid": "3a607f03-05ea-490c-8ab0-06125208334d",
    "Connection": "close",
    "uuid": "02f7c325094e43d9a2c9e6581a461f71",
    "Cache-Control": "no-cache",
    "ispId": "",
    "Accept-Language": "zh-Hans;q=1",
    "User-Agent": "Dsj/Client1.2",
    "MarketChannelName": "Iphone",
    "hwMac": "",
    "Generation": "com.dianshijia.mobile.ios",
    "Accept": "*/*",
    "Authorization": "WldKaU5XUXlZamhoT0Raa1pEVmhPVE15TnpZMlpHRmlNbUppTnpSaU5qTT18MTYzMzgzMDg0Nzg0NDQ3OTczMHxkYzdmNTRlMWU3NzNmM2U4YmU0MjFjZjA3MzU2ZTYzZjgwNTJlZGI5",
    "appId": "19227f89ea1a166451593601eb8a1b4f",
    "cityCode": "420100",
    "erid": "91044",
    "routerMac": "",
    "ethMac": "",
    "areaCode": "420000",
    "cuuid": "145c9ba82450411bab689cc3ee6e9e00",
    "gpsCityCode": ""
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function withdrawal7() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx0030&rs=0aS2kCQBAszuYBoTto9&sign=9dd04c69b31a4f9da40d65e4bf91286f";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "eb9d5e94cdd73a9f1911a739b55d87d7",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
    "AppVerName": "1.96",
    "hwModel": "iPhone 6s",
    "hwBrand": "iPhone",
    "countryCode": "",
    "ssid": "42b9ff8f-a3fc-4cb0-95ed-b1c166fcf72f",
    "Connection": "close",
    "uuid": "02f7c325094e43d9a2c9e6581a461f71",
    "Cache-Control": "no-cache",
    "ispId": "",
    "Accept-Language": "zh-Hans;q=1",
    "User-Agent": "Dsj/Client1.2",
    "MarketChannelName": "Iphone",
    "hwMac": "",
    "Generation": "com.dianshijia.mobile.ios",
    "Accept": "*/*",
    "Authorization": "WVdGaU1EazRaR0l3WkRnMU16UTRaamsyWXpnNVlqbGpPR1ZqTWpNMU56VT18MTYzNDk1Mzk0OTU2MjYwMzYyM3xlZTEwZGFkYjU3MjY0ODcwYTNlNjk3N2VkMGVlYjZmYzQ2Mjc3MDMy",
    "appId": "19227f89ea1a166451593601eb8a1b4f",
    "cityCode": "420100",
    "erid": "65113",
    "routerMac": "",
    "ethMac": "",
    "areaCode": "420000",
    "cuuid": "145c9ba82450411bab689cc3ee6e9e00",
    "gpsCityCode": ""
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
    

function withdrawal8() {
    return new Promise((resolve, reject) => {
         const url = "http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx000041&rs=4YvT4V4lLlvrMNnj&sign=5e2c12c10cd50ef8b08bd8aeaffad803";
         const headers = {
    "Accept-Encoding": "gzip, deflate",
    "AppVerCode": "236",
    "userid": "62d5897fae73120cda6cae02e53f6739",
    "language": "zh_CN",
    "Host": "api.gaoqingdianshi.com",
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
    "cityCode": "340100",
    "erid": "61352",
    "routerMac": "658814c668",
    "ethMac": "",
    "areaCode": "340000",
    "cuuid": "3612f9316166d5a162accea960c34881",
    "gpsCityCode": "340100"
};
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async(error, response, data) => {
            try {
              if(error){
            	   $.log('请求失败');
            	 }
            	else
            	{
                $.log(data);
              }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  


function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}

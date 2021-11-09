const { randomInt } = require('crypto');



const $ = new Env('金手指阅读');
let jszhdArr = [
  {"Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://uio.sahaj.cn","Referer": "http://uio.sahaj.cn/?d=Tue%20Oct%2019%202021%2013:14:19%20GMT+0800%20(CST)%27","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a2a) NetType/WIFI Language/zh_CN","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2U1YjBlZS05ZWU1LTQ2N2UtODMxMi1iNWM1NmFkYTQ3MTYiLCJpYXQiOjE2MzQ2MjAwOTUsImV4cCI6MTYzNzIxMjA5NX0.FsWp_jPJG7gn4sWSRKxq4kLJgjUW9N30YJlwhE-IalX3ZJY7WLFl2h2sPmmhFLaA1iJfBzXQuZx5V0xsRXQ1NQ"},
  { "Accept-Encoding": "gzip, deflate", "Origin": "http://qwe.51haoquan.top", "Connection": "close", "Content-Type": "application/json;charset=UTF-8", "Accept": "application/json", "Host": "apponlie.sahaj.cn", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a2a) NetType/WIFI Language/zh_CN", "Referer": "http://qwe.51haoquan.top/", "Accept-Language": "zh-cn", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiMjRhMzJmNC0zOTQ2LTQ4YjktOGQ4Yy00Mjk3N2Y3ZmI1MWIiLCJpYXQiOjE2MzE5ODk4ODEsImV4cCI6MTYzNDU4MTg4MX0.YDQKKTkoQ1UPT-cxqf8mLNeHVxVrbwIW4zaMDbd-beTHjRmd2tnOaR_DviWHuxUio_w3cDRZYheUZFpX9gq6VA" },
  { "Accept": "application/json", "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-cn", "Connection": "close", "Content-Length": "44", "Content-Type": "application/json;charset=UTF-8", "Host": "apponlie.sahaj.cn", "Origin": "http://qwe.51haoquan.top", "Referer": "http://qwe.51haoquan.top/", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a2a) NetType/WIFI Language/zh_CN", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2U1YjBlZS05ZWU1LTQ2N2UtODMxMi1iNWM1NmFkYTQ3MTYiLCJpYXQiOjE2MzIwMTc1MTYsImV4cCI6MTYzNDYwOTUxNn0.D2g2YDz8rL-wWwxCb4srL0yB1A5gXHIgLLPZTztJbGhE9Ldf3tBz7V2xD4FSapifRcuU_4wtSf9P1tjsf18slA" },
  { "Accept": "application/json", "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-cn", "Connection": "close", "Content-Length": "44", "Content-Type": "application/json;charset=UTF-8", "Host": "apponlie.sahaj.cn", "Origin": "http://qwe.51haoquan.top", "Referer": "http://qwe.51haoquan.top/", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a2a) NetType/WIFI Language/zh_CN", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNzkxZjUxNC0wZDBlLTQxZDgtYmZjOC0yYzlmNDc2ZmYzOWQiLCJpYXQiOjE2MzIwMTc4MzgsImV4cCI6MTYzNDYwOTgzOH0.u5Ocpg-UJ-_on9YBsM07OrDyy-ExKVwJx6AaF4NnPsOqhBgwvHpEufBSW2bhnSnekqmV89j4DmBSvZ-Tw8mQmA" },
  { "Accept": "application/json", "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-cn", "Connection": "close", "Host": "apponlie.sahaj.cn", "Origin": "http://qwe.51haoquan.top", "Referer": "http://qwe.51haoquan.top/", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.13(0x18000d31) NetType/WIFI Language/zh_CN", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NTc4ZTk0My1kYzExLTRlODQtYjk3Yi1kMDg0Y2M5NGI2ODgiLCJpYXQiOjE2MzIwMzM2MzIsImV4cCI6MTYzNDYyNTYzMn0.nDoYGVLgIn4klIiNhlUP0XYT6dErX7WrJGB3HfApTqO7HlMg6tqEza231i44IqfXvSvIQ85BgEmfj7iy2Pa-Mw" },
  { "Accept": "application/json", "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-cn", "Connection": "close", "Host": "apponlie.sahaj.cn", "Origin": "http://qwe.51haoquan.top", "Referer": "http://qwe.51haoquan.top/", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.13(0x18000d31) NetType/WIFI Language/zh_CN", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkOGFiZGIzMC1jODUzLTRjYzAtYTcxMi1jZDI2NGY4NTFiYzkiLCJpYXQiOjE2MzIwMzQwMTcsImV4cCI6MTYzNDYyNjAxN30.BCZmL2FkQxG6hCI8lQ_HY3MZNF_mjSBAPS5I42h0xMgpkkFG2dq-0tI0Vm9V4ilPjUGJgVkD3JZNV-NZf5WW8w" },
  { "Accept": "application/json", "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-cn", "Connection": "close", "Host": "apponlie.sahaj.cn", "Origin": "http://qwe.51haoquan.top", "Referer": "http://qwe.51haoquan.top/?code=081hH5000Z9LrM1le7300ARZC11hH506&openId=oiDdr5_WCQe9zCDiPN8qHIsnmBLU#/", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.13(0x18000d31) NetType/WIFI Language/zh_CN", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNDEwZjIxNy1kNmQ1LTQ0ZTItOTcyMy1mNjUyNjJjNmI0MDIiLCJpYXQiOjE2MzIwMzQ0NjcsImV4cCI6MTYzNDYyNjQ2N30.yPD-IAlB8SPkECb6pM9ju4_QLZftMGHOPtDyBR9p-ticbymucFwMbA_jKTD8WMMiiaBORTSvOqRwGfleD9rKng" },
  { "Accept": "application/json", "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-cn", "Connection": "close", "Host": "apponlie.sahaj.cn", "Origin": "http://qwe.51haoquan.top", "Referer": "http://qwe.51haoquan.top/?code=041nneGa1tvaMB0jmAIa1KBzcM1nneGG&openId=oiDdr5_WCQe9zCDiPN8qHIsnmBLU#/", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.13(0x18000d31) NetType/WIFI Language/zh_CN", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2NmJkOTk5Ni0wYWNjLTRkZDAtOTRkZC0xNjZhNGZiZTQ5NDgiLCJpYXQiOjE2MzIwMzQ2OTcsImV4cCI6MTYzNDYyNjY5N30.DJ1guEdHkT-NpFtXH5yUs_b0TCNnPXxgew__RMJmXkhQgofp6n4gUgepAMJmCs6yEigR9LDliAiEl5MnI_vcnA" },
  { "Accept": "application/json", "Accept-Encoding": "gzip, deflate", "Accept-Language": "zh-cn", "Connection": "close", "Host": "apponlie.sahaj.cn", "Origin": "http://qwe.51haoquan.top", "Referer": "http://qwe.51haoquan.top/?code=011eep1w37wi6X2D294w3tt5lI0eep1S&openId=oiDdr5_WCQe9zCDiPN8qHIsnmBLU", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.13(0x18000d31) NetType/WIFI Language/zh_CN", "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzYzkzMDIyMC1jZTNjLTQ0YWUtOTFmMy1jN2MxOGZmOThhYmIiLCJpYXQiOjE2MzIwMzQ4NTMsImV4cCI6MTYzNDYyNjg1M30.MWE-ThbhjxTlclUtQisuFq0uqJdfOTgWv6ApCV0vAkn-qChZbhei4tW1ifdqTgvUnP5bYErRsy7PZ_auYdEI-A" },
  { "Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://qasdd.sahaj.cn","Referer": "http://qasdd.sahaj.cn/?code=061QUvll2QWZQ74vwqml2K0Wv01QUvl7&openId=oiDdr58Nkn6NmUdbZ2SP5Wlul55w","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001233) NetType/WIFI Language/zh_CN","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYTRkMjY3Mi04ZDAyLTQxZmUtYjE3OC0zODkyYjc4YmRjZGEiLCJpYXQiOjE2MzI5MjIwODAsImV4cCI6MTYzNTUxNDA4MH0.J9QJoG2mQHGjBOJkfc4K0lF0hc5-y2lvEipxoYg1iqRSmJ1Icf9cWeOBHlWiKv36kpj119dRMb6MEBHUPZYaYw"},
  { "Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://qasdd.sahaj.cn","Referer": "http://qasdd.sahaj.cn/?code=0118hdHa1aIjSB072FFa1Zu9kD48hdHW&openId=oiDdr59z_K2PN9nbH3PKfTldMSow","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a2a) NetType/WIFI Language/zh_CN","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTRmYzliNy02NWZmLTQxM2QtYTdlMC1lYzI1ZmJlYWU0YzUiLCJpYXQiOjE2MzM0ODcxMzQsImV4cCI6MTYzNjA3OTEzNH0.BGAJ6H0g30hWGd8aP87DD0uMRwo90NgrTdo7ArZFuSWGgJMbdmBxqfRMrNxsOH-zBtZKBqdbqKIKfboQhD9V7w"},
  { "Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://qasdd.sahaj.cn","Referer": "http://qasdd.sahaj.cn/","User-Agent": "Mozilla/5.0 (Linux; Android 10; PDYT20 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/045811 Mobile Safari/537.36 MMWEBID/3123 MicroMessenger/8.0.15.2020(0x28000F35) Process/tools WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1MWU2NjBhYi02MzZlLTQzNDYtOTdiNi05NWJjZjJlODQ5YzQiLCJpYXQiOjE2MzM4MjM5NzAsImV4cCI6MTYzNjQxNTk3MH0.6EaF9KAzpryqTrpx50lOY1aEgsY2ndXqQu3ucP1kEskpzlzevwMfwTeJDGvrLO_2KQZHizgXGLcq7sl35UqULw"},
  { "Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://qasdd.sahaj.cn","Referer": "http://qasdd.sahaj.cn/","User-Agent": "Mozilla/5.0 (Linux; Android 10; PDYT20 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/045811 Mobile Safari/537.36 MMWEBID/3699 MicroMessenger/8.0.15.2020(0x28000F35) Process/tools WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2YThhNjRiMC04YTEzLTQ2OTAtYjM5MS04NmVlMTE3MDc1YTAiLCJpYXQiOjE2MzM4MjQ2MDMsImV4cCI6MTYzNjQxNjYwM30.-def7rs118wJkmng8owCWYY16l9WWZSZqPUlmeHTflQAiYlYI5WhaisqjlUHosprqpGCXEmwcW6RdvL4EOIr1w"},
  { "Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://qasdd.sahaj.cn","Referer": "http://qasdd.sahaj.cn/","User-Agent": "Mozilla/5.0 (Linux; Android 10; PDYT20 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/045811 Mobile Safari/537.36 MMWEBID/4527 MicroMessenger/8.0.15.2020(0x28000F35) Process/tools WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3YjFkOGFmMi1lNzU0LTRjNDgtODBmZi1lMTcxYTNkOWUyMTQiLCJpYXQiOjE2MzM4MjQ3MzQsImV4cCI6MTYzNjQxNjczNH0.9CI5Dn6tLaQEH6qdTG1hoEoiMp5O64uPpnrHH9bVQrN2D11cvjSX4sF4bslDr0yZ0xP4lhZDo2lQGPbpbWFkdA"},
  { "Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://qasdd.sahaj.cn","Referer": "http://qasdd.sahaj.cn/?code=081zvn000DLCzM1e2o40010lvD2zvn06&openId=oiDdr50HG69xLFoLUt-1WNSnlBQ0","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.13(0x18000d37) NetType/4G Language/zh_CN","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMzM0ZWI4ZC00NmMwLTRiZmUtOWJlZC1jYTY5ZjA3YzQ3YjYiLCJpYXQiOjE2MzM4MzAzODAsImV4cCI6MTYzNjQyMjM4MH0.1nHNmeqPVwDu65eD5fl2Wp47rP-YgImDFb3RoPgc_c4hcjfTChfR5EWKNwKRca2DJxumsCPHTezAk9QZmcrrcA"},
  { "Accept": "application/json","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Host": "apponlie.sahaj.cn","Origin": "http://qasdd.sahaj.cn","Referer": "http://qasdd.sahaj.cn/?code=071VhJkl2zaYT74dtVnl2LK7Pq4VhJks&openId=oiDdr50HG69xLFoLUt-1WNSnlBQ0","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.13(0x18000d37) NetType/4G Language/zh_CN","token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1ZGNlZGEzMi0zZjYyLTRkMTItODlkOC04MWNjMjViMDI0NjMiLCJpYXQiOjE2MzM4MzA0NzIsImV4cCI6MTYzNjQyMjQ3Mn0.hM52LGfd0pOarwRS8f-isjE6F9GtfgM7da4utXabttkDfHa3QR6-VX7ERbux1F12K1sWjxeUwSheNkE1xiNvhA"}
]

let theCurrentCount;//本次阅读次数
let theRandomCount;//本轮随机阅读次数


!(async () => {


  for (let k = 0; k < jszhdArr.length; k++) {
    
    jszhd = jszhdArr[k]
    $.index = k + 1;
    console.log(`\n开始【金手指阅读${$.index}】`)
    await myInfo()
    theCurrentCount=0;
    therandomCount=randomInt(10,20);
    await task()
    await $.wait(1000)
  }

}
)()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())



async function myInfo() {
  return new Promise((resolve) => {
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/user/myInfo`,
      headers: jszhd,
    }
    $.get(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          console.log(`【账户昵称】` + result.data.nameNick) 
          console.log(`【账户信用】` + result.data.credit)
          $.goldNow = result.data.goldNow
          console.log(`【账户余额】` + result.data.goldNow)
          num = $.goldNow / 4000 * 0.35

          $.log("【可提金额】" + num.toFixed(1))
        /*  if ($.goldNow >= 5000) {
            $.log("\n=====开始提现=====")
            txnum = $.goldNow / 4000 * 0.35
            txnum = txnum.toFixed(1)
            const CryptoJS = require('crypto-js')
            var key = CryptoJS.enc.Utf8.parse("5kosc7jy2w0fxx3s")
            var plaintText = `{"moneyPick":${txnum}}`
            var js = CryptoJS.AES.encrypt(plaintText, key, {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7
            })
            await $.wait(15000)
            await tx(js)
          }*/
        } else {
          console.log(`\n数据获取失败`)
        }
      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}

async function task() {
  return new Promise((resolve) => {
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/task/fetchTask?taskType=1`,
      headers: jszhd,
    }
    $.get(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)

        if (result.code == 0) {
          taskId = result.data.taskId
          completeTodayCount = result.data.completeTodayCount
          completeTodayGold = result.data.completeTodayGold
          console.log(`\n【今日金币】${completeTodayGold}\n【阅读次数】${completeTodayCount}`)

          if (completeTodayCount >= 25) {
            await taskSeq(1)
          }
          if (completeTodayCount >= 70) {
            await taskSeq(2)
          }
          const CryptoJS = require('crypto-js')
          var key = CryptoJS.enc.Utf8.parse("5kosc7jy2w0fxx3s")
          var plaintText = `{"taskId":${taskId}}}`
          var js = CryptoJS.AES.encrypt(plaintText, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          })
          if (taskId !== null) {
            await $.wait(21000)
            await completeTask(js)
          }
          if (taskId == null && result.data.bizCode == 30) {
            console.log('【阅读失败】获取任务失败，下批文章将在24小时后到来')
            await $.wait(1000)
            //console.log('【自主检测】开始执行自主检测')
            //await fetchSelfCheck()
          }
          if (taskId == null && result.data.bizCode == 11) {
            console.log('【阅读失败】获取任务失败，当天达到上限')
          }
          if (taskId == null && result.data.bizCode == 10) {
            console.log('【阅读失败】获取任务失败，下批文章将在60分钟后到达')
          }
        } else {
          console.log(`\n数据获取失败或者  今日阅读次数已满 请明天再来`)
        }

      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}

async function taskSeq(type) {
  return new Promise((resolve) => {
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/sign/todayAwardGain?taskSeq=${type}`,
      headers: jszhd,
    }
    $.post(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          console.log(`【任务奖励】任务${type}领取金币成功`)
        } else {
          console.log(`【任务奖励】今日任务${type}奖励已领取明日再来`)
        }
      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}



async function completeTask(body) {
  return new Promise((resolve) => {
    tk = jszhd
    token = tk.token
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/task/completeTask`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "apponlie.sahaj.cn",
        "Origin": "http://qasdd.sahaj.cn",
        "Referer": "http://qasdd.sahaj.cn",
        "token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/4G Language/zh_CN"
      },
      body: `${body}`,
    }
    $.post(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          console.log(`【阅读文章】阅读完成，获得金币：${result.data.goldAward}`)
          theCurrentCount++
          //console.log(`【本轮阅读】${theCurrentCount}次`)
          //console.log(`【本轮限制】${therandomCount}次`)
          //if(theCurrentCount>therandomCount)
          //  return
          await $.wait(3000)
          await task()
        } else {
          console.log(`【阅读文章】阅读失败`)
          theCurrentCount++
         // console.log(`【本轮阅读】${theCurrentCount}次`)
         // console.log(`【本轮限制】${theRandomCount}次`)
        }
      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}




async function tx(body) {
  return new Promise((resolve) => {
    tk = jszhd
    token = tk.token

    let plant6_url = {
      url: `http://apponlie.sahaj.cn/user/pickAuto`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "apponlie.sahaj.cn",
        "Origin": "http://qasdd.sahaj.cn",
        "Referer": "http://qasdd.sahaj.cn",

        "token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/4G Language/zh_CN"
      },
      body: `${body}`,

    }
    $.post(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {

          console.log(`\n=====提现成功=====`)


        } else {


          console.log(`\n数据获取失败`)


        }

      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}


function fetchSelfCheck() {
  return new Promise((resolve, reject) => {
    const url = "http://apponlie.sahaj.cn/check/fetchSelfCheck";
    const request = {
      url: url,
      headers: jszhd
    };

    $.get(request, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          taskId = result.data.taskId;
          const CryptoJS = require('crypto-js')
          var key = CryptoJS.enc.Utf8.parse("5kosc7jy2w0fxx3s")
          var plaintText = `{"taskId":${taskId}}}`
          var js = CryptoJS.AES.encrypt(plaintText, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          })
          if (taskId !== null) {
            await $.wait(65000)
            await completeSelfCheck(js)
          }
        }
        else
        {
          console.log(`【自主检测】${result.msg}`)
        }
      } catch (e) {
        $.log(e)
      }
      resolve();
    })
  })
}


function completeSelfCheck(abody) {
  return new Promise((resolve, reject) => {
    token = jszhd.token
    const url = "http://apponlie.sahaj.cn/check/completeSelfCheck";
    const request = {
      url: url,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "apponlie.sahaj.cn",
        "Origin": "http://qasdd.sahaj.cn",
        "Referer": "http://qasdd.sahaj.cn",
        "token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/4G Language/zh_CN"
      },
      body: `${abody}`,
    };

    $.post(request, async (error, response, data) => {
      try {
      } catch (e) {
        $.log(e)
      }
      resolve();
    })
  })
}







function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

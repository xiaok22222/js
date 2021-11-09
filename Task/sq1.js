

const jobname = 'shuqi'
const $ = Env(jobname)


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
    //nodejs运行
    await dailysign();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        await vedioreward();
        await $.wait(1000);
        await vediorewarddraw();
        await $.wait(1000);
        await drawreward();
    }
    await $.wait(1000);
    await read();
    await $.wait(1000);
    await share();
    await $.wait(1000);
    await receive();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(1000);
    await jsvedioreward20();
    await $.wait(1000);
    await jsvedioreward10();
    await $.wait(1000);
    await jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    for (let i = 0; i < 10; i++) {
        await vedioreward426();
        await $.wait(1000);
    }
    await $.wait(1000);
    await read426();

}

function vedioreward426() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Content-Length": "4717",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "{\"message\":\"2T4KF51KH9JUhj9n77RqbdMShmTnQ\\/klmmXFKxWWdwy1N0zkcdGdu6FtG6psxnH6SJde11iQheCVVwR5Ix475m5BTUPdtnEpkPOWUwbubUrn3tacV2fwkoOmdZPSNjSsmjEEB+YAhw7kOisLnhrz4CJ8Y\\/sm3GU+Hc\\/10weUPCLwWoxdOXTHYIiFbSz9X1yeX0r61GdT9t6kN6gAFif4JqMaQFX1C01LRPFXhhGNp37Z56FRR4riLsJfx+xwq+lWdjOEzxNyK9bMExX1\\/8uqN0N1mo2tupPlp8zVxTEzdhGNTZpCzq5PSmbrExM18LXkSXqmA4idzRHHPS1Ok4Lbi4jSdQrmIUfPu\\/8O8YGCZ6k5c+hOJoLgRxijlCPuXfVZfPAW4S3d9YVTlewnnL99XTMHe6MOWgh32gf2RBKkk5u4VgHYCUfa2ZGAruAROaHP6L71c8KU7nZuWwxyBNfMRgzV4UOFTNh3ZKMlBja5F6tmrkyJIIJ9bzJVuzkDNZ+yScZQoIZswHpbucpUCdH+RC3IrKI6Qhbc\\/qmVUQpQ0mAiVheMpI4zyNzCbNtgIOpULuzHc3Bnt6PHU0bn2nuoHzfkpG\\/H9b24r3BIEtIEyVg6+2S42S+UqWDM9Q8QHZagKzoH9F6bLXBFEF4ig1yHFjPmASGZkjUUmMB86Re\\/Hb6u6cK3XsYZWTax2MtugujkuPdV8LuPS85wjEbNRvugpJ0TPym1feV5pG4Dr8aSY5N41aDIemZdKN9IxFw+KZ\\/2\\/IJofJaYVlTLtfn+55EWNaZNF+gmnU+IvNsdK\\/TxHx+FhyGgdltgTVBdPNM96pLz1E7iW3FBb3IqpFfYVAuGJ56le\\/PoQW6CBT8eKydMxxbCefUAZ7Rx4oab5zL3F7GTW4Z\\/fUxVDDa\\/elUoVNecYi4GHeAxApNlIPdP+2rGHZiRieyGA25SBIfpEufbZ+2mT\\/pC7BXS1IveeqgWLDKdRfnQWE1c3nBUQW1HoVFSNRY0zK299e9ZT1DfTdGiTMPYs3n1PQkG9t4fqDrp1OlHOd40T6steLhKS96qRVRr1a5OisyQc1GWBEnu4Sv1fsQ+UwcuMNX+2LHF08mnRiKv2md7ptzs1u6\\/sxbcGLeietBRf+5eGmMc9jlikg03yAmzBiLFqJLXhsu1Gw9FTXdEzuVzzFQHYFaGlRuU7iJ+7mugf5YDffQzSZp1HJVVUdRqUDTvYog7KtlctkPgsxV+EvxR9N08ZN9AJuRcl0kHjYpgVtQ920SYJDImHsEzt3Hg5gWzS7X1\\/oDXiXKdkY\\/YBDkO1Wp1nC0\\/aW8QnOhf1vm4PviY1bKPonTDnUKmgvUAruVyG1tpO87E2d\\/MwXVFm2yRet9UGE9zeLSI\\/rvtgrmp5oLrcCW6v8TeRkd8GQl7qM3LYyUH8HjajczBHBg1o5hBT9fjegGQf62dwKcFgYYBJhobIEtRZJe7GMeSaMyrIj+hGi9dnzy0ise1O9tnHg9BcoYP1Mc3x4+sJRb3M9PeUQmfjZu7NIERvlXIXll2C8wTOaFptK+nfuU9T9c+wBEx8L4Mbp9IU5Y6yaWZSHG1CPDgSN6rMMbv6cxg+KuL5zKmk03kP+lDOWi7IBvV8sIk0Yn0MzzD27xBHnjFFSUF6OorZclixAZs5hAaHnYofc2dWcNI3Cd1XJaaGcKlp1b9riMCpk3izL+zwA8MEewdPAjacm\\/8pOphO8Kd15rkqQyNxTI5Zd4lhA9iGTFRVQihpfN7cDntm7oeB11x3vobqoy9nfuzy+4YG0OHgWWwNUtqgVce6yVtEHGro3CFYLVCezqe4CRND8jfmZUFcrgwW\\/48YiDad6NnWHNDIfbTVVfCYvP0hZqvP6K9JBEooDHfXgFwfvCGUYrDXKOQyMq5OayK+nkTEvYA9NRC0bCqKoP8yCrKxnzzC6EZqlqOz8NFVeCZjOtzqrRCouYqmdOdAGRRUiOl0n8PGuBgKOuIbjG9R\\/5eVDNmzYgywCj8i3Fhb77HImGRpdgH+JLGPqOzcmwXjg1gd26ZqtqohxdP5LA7rAemcCU8uFpybdLfSWrtfN3blGIhSOns4zuBRbyHhZ93m6s9Irqr0mLr96LG3aQUEqG10aZRaDjiVr8eiKZDX1wgF4vblmexydkHss14qTvwvlz\\/Pm\\/0FnwYRKa6xuVF85hJGRxdg7FIMbomg1Rg22GZRneKk+vA8xJbIDOt0mbvzEtM0ErxbTdrwB03SF+SM0Tmp5yvGu6YNtuwudcGx2hCy8zKA+9ErCEFhC5UrM7Noyw3cpOGon6JicrvuZC4rmMNjHGbV6zrhygum49RxsQEHqM1tGF9VDv5HFR6PuLFg\\/L\\/Sx9DoO9N+f14n47W3NingT6QJnFy\\/Fsb\\/TgcM6BE8HzNHE2d636VvwHLxCNLnl\\/PJPGT8DMMsslfq0mfHzdszhJRQhyhOt57C6gAgjZZFwuT3v2mynE6UTtEVXuRwJNp5wvyPTtnRwHZYL0VYolCB2K+GO5BOH7+vVEx4jL\\/nMtDzBWSLehNSc6akEe004djfkUif626om5yWcmMlBzhY52q+9GPV8IWGMZjKVoof591KvsVmYZGar+XMYpqUAW\\/044SAtPls4N\\/iMJ1WuAzJGY0H4EKcpcF\\/ZMqQitbOrLcqfLhSYtHN24WntoqT6WGmlgYgv2UaV6pzxH+hngbxqHYuG5K2eNAssuMPnGEVkBt3Xrgh\\/ZJhQM0TTzNyw0ptmUdmFh1cXIgGBSKylnPijGdYniIw02hk7SqYWrqWHMxQSJt0cnMQFUwB1GvW3BfwgezAPxMLF4iwK2Wt4vy8Ay0qWVJzBAtNbltLAwrBjd8RAjRqisxrQvJbo7v8\\/apFwThABXj5B1nBuRH+BKdk7p2QTAZpLdQDIx9rRINBkB2ECo3LuOsKeF93TEtQYgfh+5kHzkdyeGyEkkwba6ExhAZVFSPhabADZh1ZLSgTLeIUPDZcTrhs+hE6sclCzGsVXqT1AZeX2vP2vpTAh7IB1RppIH32zqxKWxLtO10GOnvcmnAqmUGsBWIG47hG7jG8dwpA9i\\/E48eWh4Hwlkxp44UMqsi3QwUzBBggBE1CjWgDns0\\/17nPxYHxgK4F7\\/j3weRsbDEX0nftEx\\/EBnw4bHwFcEE8WR7eckb0ybtyeHwVuIcXP61pfGbSIiZa+fZZgzhpsFjnoo48qU6izBaoW0kvm1ecT8nmmKH\\/ADm34iJLduDQ+uIHUfxo6N5NjHyB6M8Dw+q1efUEVA7T0Fmqy8TTspY4AlZOHQedOOyBJ8ifIGgXIBAxbIR79q+sBu2PMBZLFgSIoK3w7bxIxah195TG5aAggZWVcXJlS\\/g4oBl+tQvZRPVYXn+BZN8wT2K5GOge5TEuA1dTLpLTnjIkWIt5l7H\\/5rUy0SkBMNTVSLR\\/dMR4CVDjrLXfIj\\/95IFgTkXwUWtxnr10TWI6eIOlFBjFMZJdHuk4+M8ACHHmKGjB7T+nfueGjUjWAaCOXJYGSWqU5fSLCd20GgnGDW1U8iP1yKHE1jc\\/CJvsLo4LpKptpZPyM5coLx+u8unBB087C5m1E5ULNpErrXb14nWqQGWd7nleKigc\\/uLdyeuKTuDDunRQQSTD1JQvmJgfLtYeULCAqE6XdczJMAhR1if5XzxRDr3FLTgvTNAYK7Uc+F4CExRU7A9Wq+wetpHCZPe+Q+CzLvGa12dBgB3WiaPFfkq4iUneTm6GoVisAU8zW3eHtgC6dj\\/WFGvy\\/B8VyRyVWXZGhDVC0TnnVIERXL+XmYwr9GAhn8U4iWfJvq+jyJZeS\\/zMjDUZepjYVvVkf1JLOZO45yWkepbhI0XA2yfo9ULasMjk32frw1T5wMEfhqJbjWpB7mXfkW9VFgXITB1djUrrm499kuBnFaZh9lQ4jToMd3L6EdGyQECRUvXYQ8QNeUOpHmHQI3NK725AZ8+YIDlaTUgrignaphrqQ7YRpqNTabVlEPygM3ljhS3JXAqn4Y9wG5EFdTiB8nvdoa3SUGVIW68MhKo9WgVr\\/IlafxxMGwBCr4Ov38EVB7MPPH25\\/MFi3v4pnS8NLDKX0+Ob\\/XJuK\\/VY3mqSfVvSOCHDm527qC2SOS4fGBf1J+vSJCvJ26V3v+up1OaA\\/erWOEK8A6PFFmbpZwudx\\/8qwiMI2bOrSYNDzWSjmtQaMnD0VlRmlnIPiNc39bKpv\\/x8\\/R68ldA8vaRpUhy4j93twMyjhvtf1DlU2rKsgllLQASioLPGvbFpIy0u0YHMS1dC1G2Do5OOQspnXLyHuebLLHKs2jwOQrOyioFs5Ke1GqFY0swargrFXqRZN8Vu+pFlUBsRlo8tFqlTmHGdmasHjb79RknjrtKHdcLoxHIkmjODMAxW\\/ZwKGIBkX3au9BFgDGhWbl9\\/SLQOe7fjig+wyrCUG\\/atsPFCfQvrISj8EaUCTqKG0CwacDlMr3\\/BYh\\/XljHR2MBkLeHbtXpLA\\/6ggKX4VIEkhCt38bjUYiNWQczT9KqUDV8s2JcvOZeSvLGiKlVu\\/GBQ4KTHcCjEAfYWy\\/JTX2VcsZJQErfI3pM0l30fEuyqwrWEKVK4jcuRhgJDqkPrLl4cOz4YXWiqdUdCHnj7fkbOYkRw\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function read426() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BJWVwCP9WMjvbHw07CngquuyrpVPkkmkfsWvxRc6UIxbbrdg3-LsdoA8PvRY9WFc; cna=wVmjGXEJsiUCAXAfvZEK/5zJ",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.2.6 (iPad; iOS 13.2.2; Scale/2.00)",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "_public=skinId%3D999%26idfa%3D021BC905-6AFA-424D-8B50-99F11074780F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwwan%26umidtoken%3DYRxruFbmacIDADjqvrFJgz0i%26user_id%3D2916901745%26sn%3D2C6C8B4E89B5253B7A6EFE559CF0C08C1229D01C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA06F6AB9661003A1DA723B28A1AF20643BB3296%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiQkEwNkY2QUI5NjYxMDAzQTFEQTcyM0IyOEExQUYyMDY0M0JCMzI5NiIsInNuIjoiMkM2QzhCNEU4OUI1MjUzQjdBNkVGRTU1OUNGMEMwOEMxMjI5RDAxQyIsImV4cCI6MTYyOTc3MTE1NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTI1Mjc1Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.PPT_1Wimc2dL141NpVNCweAfe-uJOvy18_UxEwg7VAF-amgti--izqVsPN0QJFuvT5YCojiB8Pn8lvupwboHSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPad4G%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYRxruFbmacIDADjqvrFJgz0i%26utype%3Dvip%26sdk%3D13.2.2&deliveryId=531&key=sq_app_ad&miniWua=HHnB_xPXK19arARvcrQepQw5tGVMuA1Q9DUHiWCJm9nGcwpspzMwcskQhXo2LQ7esM7LHlgp9UFCSNJIaB/azua2UywuDTc9nzfZGax3GHldNa//kamdwqXBX0bf4bK4u6k6c&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0FA00ADC614941171F259622F0234BDB&timestamp=1629252811&userId=2916901745&wua=HIVW_gka845tP4apVJpT8T3jvuTCLAlAdR6ZSX2hU/OKCP9NKuytiA6UpqB/DtGEhj5QuiADEypSd4LPac8cp8V7G/F%2BJsiO3yWaNRrkVDywhs1E3oEwWwzwBhdem93cpQj4Tzeh4lDq75qyHoVNw7dKHnAWzRKIjnCAs30ojR0TgFdm89VgM0xjNtFHvdF5yqcEwJkhnYi7D3xNjL5kJ/mF4I8SBoiTEhb0hYK1lh56K1D7b1N0sEXOkozMvbfVfo9X3oRIPhcPo3DKKHsSmNr4iPsk9y4zVLa2yFoswD4Re9t%2Bneo77L%2BBW%2Bxaw1tnmLzm3jec4z%2BIlNrXyAFg0Bh1wuA7xHu0AbTVnrut88Zb28gO2puegDsurUx4y4KlYIcxw";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await read426();
                        await $.wait(500);
                    }
                }


            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function receive() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1229",
            "Accept-Language": "zh-cn"
        };
        const body = "src=204&userId=2916901745&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068787&sqSv=1.0&sign=2c2acb044b04498358f5e430d7289311&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}




function share() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1867",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=304&wua=HIVW_rFCYW%2F75f%2F0UT9GG2FnV2A2NMl18v8cypDXyPzwHoXpHvM9Sj8x9Xaer90X3Ex3xEFnbWBSmpOTP0HMTLFIlOqL8ieZCImaGK6ml%2BdD%2BrnCif2BwON5qd0r0wK9ilMbf3dRIP20XdiGR09pEgcnz%2BIBdBfSFQi1Yvro3jk7%2BC4KEmYX5z%2F97AsNcqlLU3lbM9S54BUslgjjZAbo99vwMihUQ2nNMBBv68WbHgIfoHNVk%2BG78VXGWVe0AirKtUZr7et0fx5yAgBCbHY9AJr4eqTprqzc12xdF8ABdk1%2FjvdmEXlG5gsSyAzKD5FYRCCVDwcXHbYOmVwGSzLFJNaYwDw%3D%3D&ua=&miniWua=HHnB_do1QttZtzGDlGXrbYgiv%2Bq4BdvuNZTvRZZIUolmgFDFfhGjvF0uVJRSdZ4fSZ5inFjxFosy%2BqkiMhmAwQb%2BxaXBLMMQqgMV2PjQgIZeQQAlPUHAcmu0yucFW%2FaxKWHc2&userId=2916901745&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068621&sqSv=1.0&sign=51d6207fa28759325222146e2be4a0a3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsread() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.6&ustatus=1&umidtoken=wGRLAd1LOjxByTV7SSyOvpA4qSfDtolT&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            "Cookie": "isg=BLy8y1cg8VYBisUd1W4whMJzh15utWDf1ibuiJY9WafvYRzrvsWNbVLBRw8ZMpg3; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "603",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actId=355&miniWua=HHnB_c/ctO11SSNODDkG3RkNbzMkUI8EWCg/PA5SjzH7YwOUBhR9NOI3WOKepUeKY0UGAtKwawndI2MzObr1L3XdWOjNF4k155i8%2BWcrsTNbqHkk2sy3bYyrPU7hMMDK/zgMd&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629066304&userId=2916901745&wua=ktgi_aLfYfZH9LUibJBQjBTegTnJOd903oB6hZUaJ4lDIQTGmCCNaidE7Q0abSs8D8/SI%2BT/LHAdRQ8Nn6hCo6VExvP4aQk1kDqIzMdFbDOE22TOz6zs9w2cjgkzQ/wKQYdBscVMMkuP7zWnx5ZpyqzZAlr5gTRHxaKKKU5IRNMPzatgeT/erhUaZkwt%2BwOBr9ng4MQJ2SWybvKd3M9Dw0riw3coH0UR6BVLPMf0UgW1cxM9kYzRb7ddDyleCp%2BRoXmczfn1DvsRSJaRFwnAAu8NcgK9iXFaEFsw6f3LUG7nZGVGr67Pe0uDsLt1c%2BiaER7JV";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsread();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function read() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BDIyVn-9h1VRsrtp7nV3yEDjiXwUwzZdhviC__wLa-Xtj_aJ5FO0byale60z5K71; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzMDkxMCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMjUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XflxZv-XcfSRCM8xOPe9cTov51UPtAsEGN8uNnu59Gl-GykDa9PiD6hLSmBft0gUKXmJZ-jUuql5wFtceuB8zw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=707&key=sq_app_ad&miniWua=HHnB_U3vcrUclZBGI8xgdUJ8toyc%2Bcu3V7L6584b4LJIqAo9rKD4xOidudtaDEkcZkA34sDtTnXBwQcsP06dfIT%2BwJny1aqZ4O0U9X4YOywUGltpZN1pnlmCAZT/aayksQ%2BsR&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D68E7080F23E0123C177D2F090C22836&timestamp=1629014445&userId=2916901745&wua=HIVW_5GYaKaLjxLSXInwlxv92LU3UYSySyk5Zb1vIqiSKppZ3k/5ybmHegQJtI6SFnGMca6CRW8KEDuZTBpJG3oWo9wQTHmeBIvTt1/3VesMgxwl/6ump9ia7jvKwqSpZjY7Hq5JON%2Bzk/QhpAfitngKoSxhPKHLDAzpbRZTU06Vs7egZTirraGpMjB9685eeUXqfQt%2BAo%2BaRqFym8u40CdVOPOALEMLGQGGCmQFS9VolpMGFfhS4Iw4vELFzXblrumStKtxJZPnJw7EJ7px/sw9POkjSsxGRc2IEwjcocqaYJ2ueMxvhZzim/Cvk8v2wOFKbIewXvqnvtCG/mnPdf8grdg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await read();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function timeupload() {
    return new Promise((resolve, reject) => {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsshare() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_3Tz5Q%2FQuk9FImWbBSzUm%2FN%2Bk4wjoUc%2B%2Bg1Aj6lUFVL4lg3uSd%2FFuCjVsuYudoADGIvP9utkK8wQV%2BSY%2FQypkIEXr8KOinM0h8%2BeI2NF8dXcFW0t5WNRr1YiNpqryTfNciZIeB4IJ3KjlIMxZo7eKxxIbJcAkJ3k6bIiLp0cknSAZrNfPzAOkdHsAojTkuy2LdZKlH2A%2FDactl2%2FpOAJ%2BGNKuJ9rpztz9vudqBp%2FRntPQGQtY3D8iXwr8hf2wAQLUPDq6JiL61j1hOpkWTNlVMnxPvdUN%2Fe342gejaSHVv5zf8cb9Nwn5kyeWB24%2FCSL1b%2Bc8sX%2FUJMphr1cVo%2BQkqA%3D%3D&ua=&miniWua=HHnB_7DYrUuJn7%2BnkozmoMtJTDJ9slmM%2BjM1PYHVyaLHA7ICaKM0PxVvZBwHm7AMjlluCye8qqlxYykLPLjpzWyFR3%2BvBeJc3%2BcAY%2BMqUnpglCzESxBZZ0QEXM0ikiHUP3cuv&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629016036&sqSv=1.0&sign=5c6651e003dcf4d7104c01a870581bce&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsshucheng() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            "Cookie": "isg=BOHh2SrJJKggsYjKICUFi094-qn7jlWAS31jv0O28ennqgp8i999UQGgCFgsee24; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "100",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsvedioreward10() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BMHBbsFARAgBa6gqAIVl62-Y2gnb7jXga-9oWCMW0EiKCsXcaz76sNhA6PhMGc0Y; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=897&key=sq_app_ad&miniWua=HHnB_3SMWpVcrf%2BGigHsqHAbaMwFZjmFYm/nSWDLJ5MCjNLvVFtYMwQJEaFFm5sFGqFQ0hCqOXKk1d1MBbmEzQRNjNAGg/HPQe%2B6SZQCZa%2BgRylsfQ7NHm//jwtWr%2BOe89EbQ&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A1C6AC2353277A8E0CD35370A39ADDC8&timestamp=1629015720&userId=2916901745&user_id=2916901745&wua=ktgi_KWcfFAwrcl4kSYsk%2BqAf/XvZ/3UoOoaWSR4pkDOU%2BdxQ06K5q11k4BjdoLwZrrwIoEXsz66a/JsDq8xM%2Bgr2YNlBWtoiubDDvcF2Y//B0d9uYQ7ATL88qSRS46doPR8iY7rBdy6084VMi5wrcgNAocBn%2BAJCaKjZASokU4TZf5WgBWpdN/0ln4keyqPUnrOPOUDPWqxXO2lBuVr0BkGEBrGhBBWDrFw945P93o62quEBP/nvJLLX8/6g9kQHOIQLh1FWqxgUGfXYgQrQ/3en%2B9mDDgySVVXu48iTcTAg93zZ03Nz3/KdAP1/nUcR6b4O";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvedioreward10();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsvedioreward20() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BGVlQ4WMaHwfsIy2RLnZ3-MMfiWfohk0V9tMJGdKLxyNfojwL_LUBu9cDGQI5THs; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=980&key=sq_app_ad&miniWua=HHnB_%2BNXh03V1/aLva2aESnRsb3Vid9f3uBac5KaDmUx%2BeF4aO8r%2BPK%2BdtIDQRNlAiX9%2BBzgBl4kySlkbugT19uUSqowDQD76xTiKbyQKaO4obKaLgr18733BJewaxPOMO905&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=CE4FF05F51CF37FE111372001FDFCA39&timestamp=1629015259&userId=2916901745&user_id=2916901745&wua=ktgi_T5TSslcG8S40FfQ7ghBeeMC00V1KvqIp3gVIa4J/GYX9idgk6SrlViY7Odxg/clKzJwVYES6U77CB3B1Ml5OX%2Bei%2Bd0Af1k4zhg64iDJt5Jt0j8pCFz3AY94ki%2B%2BHnmSyR4a2Kd/RfCQXKhf7FSmTiB5vAHhPrb3aSL7vRoiX3EpPgU96iMXDIx0V9NW1PtH0YPwoRFOiYR4BQPEBq6qsOFbJ7TRkFti4RCqJs9uQr4y8MRtC%2BG85cCrnouExTP6mcVVftnplrkTTJYQwIS5CnV4uZilnd949q8be2eXJ1MzsyYBCpKbb7PW3il1df6j";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvedioreward20();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function jsdailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629015222&position=601&signInType=1&wua=ktgi_8VRO4TruIk1p8M2lu4SpGEzaHDS8yDsvLX9ElOXbMfnd1LjNgtGaPI9uVGeguslQPCNovWQkeiNgYg045ifWzfTHH2HwwhOb0hB07utbFqcSDMCzPCnYkR2%2BKfo%2FvaTJEFwsY1u0piLOQPACgubCVhTE4tZhr2w5PB7PWngoJMmoveydRzSmypRS%2BsTvsR0eHR%2F8hNUKFo%2FB304Uui%2Fl%2FqJVEbdF5nDyK2BwgjoLR5d7edxLKMtgNunW9TbJ%2BGLV9iHCjiM6pv5brTvZuFJu%2B46iDUpPEDt5cqlctf1U3reO4Km%2FMcUX8GVq2rua0lWG&ua=&miniWua=HHnB_JDcbWxm1YICXHWnp2SwR5LW6W%2BQYNxFuxH3SNK5LQbvFKM7QJvQAXETokQrv30zErou7AkieajiRMjjBA5pdxkMJ0MU1GDHFr0PjpKRa7scWxaK%2BM3XD%2FCXy2muXzZkp&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629015222&sqSv=1.0&sign=2533cb79da6874c1555fac73e7072980&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}





function dailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "2001",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629010657&position=501&signInType=1&wua=HIVW_SHrM3h2JkyoYAgn3ql4jRIy6b5g0AnUJP7I1U6aGiqQwA7oQSEgNZ%2BN8ALcrbeN4XfImFmU1WLw8hUDUw9LnTfLTpFLXlvQ7pL60uQzr1OUk%2FVboon34vSD%2BAMypmhGyIcxJajORk537gVeUjDdXi5pLnj7mjsDnE0Jgi%2BqvbFilG0C4vBwfZfzT6yZd5aCjTbUJt2VTLriJX2IHHpUU5i2RwkWrPKZoGWbO4OQT6YRO5jYlBnBqfkxhutQ5oqgiEBD3rUuIiDWIoSIfupc9V4yo4VSWtNoWZak20EZ0K7Q%3D&ua=&miniWua=HHnB_JuqDlmNVLuGpc0My162gs8NWXyFaoSc%2Ffuhz57T9z99RDkHNb3iTg0Mut4vnmWNqLe4O693LbAnypX9tSUb2rujnJ%2FHEvKQwHjqiROdCX8xtNN4%2Fawu6U5lPFEqVB2OhG%2FQzrnvjELSdHQ7p6VpG1Sd%2FjW68m3We4H0W1YLzWXI%3D&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.4.8.0&placeId=111111&timestamp=1629010657&sqSv=1.0&sign=3105bea087cff4a2b140b79cf27dfa64&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "{\"message\":\"2bZ0lmlRrgswoqrpFX8+qvvWu17D6dWpIFEX7YtXJisqA150Egopda2XXQVncsOSMLJuFHweuapowARas3uqNdTHBf9p\\/wY7SDVMuIt\\/ibqIfGEXdiwKrOVGXMaUmYP7asVr2KRka6rHevJfHtObxu2JRWFpMcSiLeKipFPq\\/0ENg6SgcILzH7uXBIwv3EVucv\\/kPciEmOvQc4Jk58XoUlWqz6my2IsdkJeQDeXlfU\\/naD6QUBf6\\/YmWNiMvJOodnIkdHKKTFHF783H1448Rag3IRvxbCQ2FVxxRCNNnf\\/lXMZPNAwuU0d6QJG3yu1D22gy6bnS3goSbvtqKuZVbHXkhEFiCHrgPFRh3f92T5qP5Lw2xXXGZLiAAVoogQvYYWUClZgRPTA0xfsX+SK3ULuwsRhPBb\\/eVVHnWOKCg++2p6E\\/8Q3FoAf1u\\/B1T7oKoR2VkQ+7sfgk4F8K3Xg0rduP6l1xa4f8+I5mL\\/QaVdBvHm4a9XpBPJLSWWDFxckoSKcvoSPACPAEOVqu1LVVCtX1LIiJ4cXQgL3r1S1cYEs6byXJvemToe3GDfVoG4DzNMPwPNloHXFtv8vcC+6kFwq+vraY4eX5gzODHuDQ9V2gu26jK9XWGSsXXPw5R3tXdXg9o\\/jp+WUTDRGvFMy2GKMqaNZp5wXdHuSOyJFNUtBB0TPKwRAZUeZ097uHntKRPz4Ehb6P\\/JGNCvMDas5qZtMC6hSHQZj6jQris16eHLbYtwsgkK1sPF53WKZ6VJdYrhZj9N\\/4n+IBbOZOumbA9CvOJJXQ2KeflbsUm3lOOjl+Ua9\\/9Vdn5f2Rh0MTsDI94hQ7dWsqyIjE2rbkUvPsgWNc4qYhFUgaO7tnZ6EzGJfRyw8AASE5AuGcONjCeoq5nkso2d5xDGfOQKVZz3s1xYiF7LsNoRsyLKXrQnBvdKloAfX5V\\/Gvz26IBlSBeyNnE8dQtT0N03X2qjzEOCgCDGyiibV\\/DGjcer6T\\/G6XdWaUrnG+zBs+PYiQ1\\/6On4K0yFkYsEqj53WmX6ar5N6ihrxg76nU08sjrnfOi6GCUHOBNqONJzqOifPWgn83zpxkVtPPFfcVrZdQfgY2bP+lA+tlrBcNSY2IEEVFx8nqH0HzTXmkw+s+cw9Wi85TZ\\/qP6n0TvF8sjuZ4cogVJuOJcNvqDyNYbo9LOpXDoHRslUNRZCY7yn5QQ1csArZNLqqsuTjCYGqVNLNWoqH8yxCeof4a3kLn6Axn06rDEYavoqnznd\\/NIE8ESe89RP+M4+mwwbkPbt5E9+wV1ZOfwb6iAUKH+c4yPzaHVwqbPoQwDpKWOTcOyuW2MN1EfXCdW4ws9ejdPmnFEgX\\/e1HcLIpiGRWlGmpQmYbfoWgyu\\/uo5U0AN2xxPXV4X09FSLwIdaUfsf8pHMENZpt9c11V95xiBKRaT8+W1gfbFu7ERRIWaD8sJOx3k59oXUvQ2tl+pZ5P6p5SaJhj9GTM7+dNV7PR1eHF4PE3qXlyi15K+gZiX8p2YnNYwgRO\\/xpaEyPsUAEXiH\\/i2MmYZyCZGUtqSr\\/bJQPHZTFCJ3CfbucOGBdSc09rSRyH5TnVzZz0\\/IDptEigYf+nFGrbk0FVlbpGE93Ie2TFkCxARMjVsZdxpdNhiIqmVAJiDTW5v0wpmRd66sYbrMbEdj28rUGsF\\/cTRNFPDPQ\\/2WRyIeYP1mWubUFGwh1zXCwuI1GkQRfj5r80l6Fga\\/1yNFBGVijc7XbPK9dsyyYbQXFl3VA9Q9Xadic\\/9lIKfbJ796ZbYIW0htwjFPIHcRzoMBNmKMLknqYuf1qT1UtIjSzCqAMyCpQ87Hapz9Nk9QiG+X2y7gYmmMRTeEwQo2RjHphtQiImao4wzWMx2MeX7pyw928O1P6V8ta7c9TQUBKUTuo2kENJ0cxOJxl8ZwKmNDs7VByj4Ynhb7+nhvGrykCAkLOhqhhyBXWe+zj8XZF+f1IKRJe\\/y+oo9uU1qtN5a4WYBcHNaTHPbYP6yE4+NbroeL2r5uI5YRhY3+7Y4tMWT82knjFRckh895hLJevl6jYk\\/aruquUAz94E0mTQi1K1XaUE1fVgpSoRu54FW2AlFeHBniS39CwBCE5pnk2JgsUZErJxlixetQ7AUQ6\\/90aDEpV4s8fnjHhslE3IsuLdpV6ya5lluAwm8euJ085tPsTs8uO9WS5FlbSQh9Rk6NiS\\/cM+\\/uH\\/YOt0B2yMo7lgceK4zlXPGlRCVpfnyB1KjbVbET1WY8DGrCngtgdFeiim6ggbgdIVgE2WYnzfzZ747etd+\\/vAnX3t8+xDWmF9ZYwkadTDDSAGiPrryJDt+cS5B1afOxWXNBMVHAvq6cIMk81ZuIMJK88x39vIRM6YvBb5reCrvTw8iuKBo31v44tOXMRSHBqDJgLDuZDkTuqGC75nIrakKjD27B\\/Nq8HVv3UBkVdWmnOy6tLrfypNC1cMTIW84bijRdzjDWeAsdHBMFn\\/QHY8BYcIoEsqd8Wu0y3IL7qDoHbXK1CvvfXeJDLYRwaAyyk4VTiArbeGyPTAkZz0hRK8fMv\\/Bg7AUm2i557VbhRTrgFI1KUHVEP9C+aZbHOObEG+A\\/wf+G3CRnXwNSazROKEjnhD3PP7xWAWTRqEMZc76GZ6YEy3aat34j\\/85SlTh3h4JPsh\\/0uQp59IcO5tdhfZ5ZapMx1ZYScQw4f9LdztN4WEiXkEdYUOce2Q56MrEeP\\/NptOWyne0uzDR7qqx1B0Ndr0te\\/CnzaBSEx0p+DQNsusTkQZ1CadpRo5ZPD5ZCLb\\/\\/gg5BaJj1ndTcqaNUzp9mL6Xate0lbHbMYjPlJX4btnZ8VPSS3ditz3q1Xt5c20gne7piSyxv7p8rc\\/mmSjQjvEpOeZEXkwPa9ZdSdr2xZ94YAY9BTt9mT\\/ypXWub7s32SXfFe5ffLC\\/7PI6N7JCtjjUvpGdfQRuJlbs\\/kjT\\/jb+TksfAQPgSjNtRDgy+g\\/Ue7AhVAiEVITDEFnGfi10HfeXZ8T0Y982nUqiJSe\\/+R\\/x8YvmFs+OZY+6yKyNGzoOZN83sI\\/aFrnr1hcZPwWIWAka0+i8b37l66LLNsV+GvQ1mHZY5wAsJASiCqIJCfCSC39bhXU6S8dU9U1O2w9rYJ13QOsQ5ZyYTYv6EqooiT4Rh7sya92WCpmeqjgvA+gsW32uBanc\\/M\\/o+jJSoQ5ZbBL7ONNUs28n\\/eKC4dZ4KiNaX0IOHDX7yuV06zYbXgyoBhQFm+uAy7UJ78EjC8ZkWtFwVZVucwB0rxdWngOv81IydobWI+5\\/dWR1pLByzaCPqnmnHX4bRFYIlvC4cqjN20kfVxUzwTRQ+4BZlDu6lO4JX6E96koqJi5osOFBKjNTZMHzluP\\/FafRSC7IsGwXzGM9wx7TX\\/1j+Q\\/kkPLm1ul20grTdNr5mfXfQieN428urwW2Z5ExjnAUDVshd0uxIHaie2lLM\\/tMEpup16pWPKeo9Kn5eHsp+cGQouwz99m1IaqJywnLChpBELX\\/oZGVC0Ogrq68iO77qaYKqv4effHBd7LzSceJ715lEwJI7bFpMHOg5D4S6xaHGMD3I8BeHXw3WRcSy1NscrB46r6VSTV7rzIKj6Gm9IM9fng56eYiQdSVouXehoHoXAn9fnutY2eJi9QpCrmiAqV7TTO9nl\\/LI9U64MW2xJevyyUyGQr\\/adXQpeYVgccQ5V91tubiyND5kl8gzMpvj2gUdVwID48QFYnpP+\\/Je5uO1zrSnwJBp1U6Oc8E8Acc9ZzqxKyiNxGXLLcWJBFb4qA0Npmel4QMxjTmMXE2z9ooTKdZ8KfUuGUFL0nrv7O3JJ522ohLViLTO+EtAnuyv3EwbBStTdDg07JzG6Q6D8IO14D+QyZh31tjwTncLpzJBqcuYBZxqlqQ0h1UIcThng3Xt4+lc1PYU2Aq6xJFV4APwoyQECuxiyVOFUs8xpAJOqw43Vf6TcUk4F1eB8Tmz8XwfD10Y9hGeaVToKwsht+oAw0vc4lvzVZt2wPVhhejK\\/2DYn0H41\\/TVfgzgU56IeOKrFMgVHqisSnxjgX1sKqBeYAr5AwyDtNx5dAT52HUBWdYEtJaM+RiGvsLaaOQR9ng+uIDC26YDplw\\/63jK81+ptSBJyU4b1J1kdzrzrY5TEoe0SGjgZUeKOIUHDDDxA66+Lt67FfpuBPHhF\\/8XvvpsvraBIkua2OV8\\/XNk+is6f5nFr0e4Ug2Wwms5yjLLxMUdcJXnnw0yd8qujsDrbzQB3zH0advwd02VbALQSI935eoyLOYrYHJMzLyGGFLM9LtERcBsGaSTHVluaxTpb8UWVnAoy1d1nAqBbJUL4ZDmbaIrgVLgY1r14ZQoeioKL2ZJzxWbIcOzEhaxK3eZv0OIPGAFzOaFg1oDoe8UhQAU83oIBzSKsN7kmt+KnazgMypng3HT+ZcJy+jDhBBDsqinXg+V3h5pSQsoyaBPj0QqaHG8IzfHvY\\/SozZSeWMkLd7gEF6zgDiVtaYPO1BMiXOQGivcwduO2tK0DYqOU72gQ+enF+PzmzHrmFx8\\/YXI9J7Q8G3zfn3A6Y2w4+ululr8i1qvrsHw6NBEucUnFHDSnA+zyO98aBE5ye6XfxMRXTt99cvh04uMPrw7\\/awl4bL25WY1eIdcp60xuaH+wiocnWBlyGz9P4AeWQQ81vwalbkz5gBrz7P7U\\/+kRJvnewHJIaDPs9wnGw==\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vediorewarddraw() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "{\"message\":\"2uv3ebdXXFKiXnKva+iBawMt9UGGPhtQXpTxGzK+eJnpoQQ4cFravHWNzOgEvzytd+2IMQ8iFF2wmXIO2nrV6LolWNuMy54XR6URewzOnJj\\/11NDMrjsGIe3whrVRmFxQk5TbP9\\/6LukXB9+KchHKr6xvN\\/xBh0aiH8gg30x4VIP87tsviZozre1WwXZRof1fzUnoQQv40SKDMUKFWTyNF3sUAZtJiUReeyHnL3UorwInJF9J19qnFoyytyh0mPnV5VnC4QJ+AzXLRG3mClKgy0d\\/pJPGys7etkNxMwJ\\/VGgAxF\\/SrRmZqexVXc2lQEyF+5cf+iwsqy1Wa4cf1mheIGzCoqoTwWjuXYYKGmCPsxqPqssFuhxQhTrqMuvrQcmuVUCBV3r2BWPS9tdccnJBhg+RirbqJkZkDEVpPh606Xe4EQXHBKFSb7XeE2Rd9U0qFM\\/qL+T2pW3ZT9U+uYcIEdawbeHs9WNQSyegCmV5v5pS\\/aF9+yJfiKrOIXv5u5XLW5IK5\\/Ep+2aPIy99t66Uskp1cvPcns5spYOISWQsg1Mpe8A1C2oPuu16d15zEKv6L6oR+j+ePhoji9VfMWkxLh4Ez1+N6U4miC66dZxM94iYf5jUJX6JRPFIAaOxV\\/YffJdZr1pkdPj\\/zDqJPQ+eh+gzctfUeIAzgHaeB43ndVs8ykPIZV5VxM8+s7bYguSnSQgzVUtyd0YKuhXLJsxHWU2boOGI3DZqHE4kdvFbi2jtEvKyvkrXryAKcVEhVRZr0CyfPcdKd4pZRZNXCDJBqcZV03KCj0LPKxknh5zW21xj7peOqHSeeOacz69izYDy37EuozWstv0cc1v7LHRwwqGeAg5W8VO+LZoMC+CB3zM22uAQ3QDql90\\/Ovpf1PR+W28YTu5lPs5hqzq8FdtXkj1wVN8nlGmrVfxxu82uvd+VJ6zRfjJ+D4HdElJPnvRhVw5jRsUM4E\\/wOWTWkTfWf5A5KXcQYgs5Mo3Ch5YkhaN2t+5Rf+E0l6fgIqhc89frE2TA7Tnxq3CuraPwbFuD3tDI91rm2yAP4s1EIBi4CANcLXd5qYN4ymxHLb8vEDWxO2GLPjmMyAHP0er9lhnL8lWwoYd4gQ2kTaexSedTW0z7vz6ue5Wz4SDgVB6lpfRQr2pdb1Ks9nx6JK1rus+a5CykI7fQu4tfyeTQSDk5YYlWHTutZO+JB1h8UoUznpM2vC9CQrgXAyFYcSfDNGItylg3wa7a9W5yX\\/kUaZLDXKLJJYdl43NnV2Et+kTwsz75vAQLOn+u88xAS4W6PMUXycF2j69rtwWkHtMwUodvaZb5qrlFBz2is2k00g1wwtbeOfUiDkGlqwtY+Bkp44IOWNRD8kBAGA2diDNI6IZGV6k2oPbzvJpqWf7yjXW5a59w1MPM7zCPuCzJfbZHzf\\/tskqgYGr1DsVpMg\\/tBech2YyB+yULCUfdnIF3khjHgbUuefwiXRcNvZdBCb4WeKcNR\\/fj6mtmJAUToYPpEsPrKoqCBH2kBJeouVO0w0Z30nLFfH4rFAZLpVr48dsfSo07Vdfn2jdPxsXrjo6d8PMBmoirfqWPN3LW2tXM36WWYwMRVRqsv4juh\\/zftxkRD5UlyU2nymGwpyVyTmnSiyHEsgR7deDdYWvg5cm9Q1ovEMbj3NQbebkZvbR+xTAqGsndUIGzAy9MzYkOfSifMqIS4W4acsFitL9qUmHtAfqxURbyTiFsRnBK0KNtQzuvM7rFzds6bgmOccRSLRON7LCY7+Yb8MX2rfYvAaW244wWRCcb79gzzSdghvTQksK1Sx+8tA3FTUkugHC\\/kAxq4EHa3aDMqxgh2bb\\/N\\/qQ1x4f6sf3vr2Rius\\/zFqjqjP1Hxlc6AJ8ts3X+4jqDfUgWv2o3KycSYT7qzucoCLiKNbAxusCCmAt6fDM8mWdseGaZHQvgkGSIhTduhipWaKP0ef6MVzXJif61eTAO3yeZs+qtUsktFo+QAjdym3OdRZUphJVDhjbc2fiyEUglS9Eua6MGLWAk3vn2Hvv4hdLrAx0MuRef7L7CxWLszyVxHIQVrE0Mej+To6MiEer2Lf5sTM1Gq6KON2jeFcrqqB\\/pu\\/jw2\\/QaGW\\/Kn3pstYEWIiAZR1bg\\/TRo121juadjuoFxQfnZnwE13J8ljyIzhPDlVy65vkDPcc6XS7OnNknd\\/9HvLTiJpRtZWbs7HHzaviWkQtl+ZzmIUv5Fr3Cu3KIFbDNgSVX6Zwai94PfE2ePApeCerLPVmX8OwFE58uV5oEPghT9fB8UzEJRsV4dD2OR26wDU5nKE064CLTDEZRkWq+Om+WkJ\\/gunfZmx+ffndV0ZEyz7ONWMcG1TVJovtTnc88GOjL2z+ZO2RKcq1FDhkk160nCM\\/Py\\/WaPzmcbW0YRlVlkywQmn4ZbZ8yYYXJll1+Rv4FYlrZMPzPoj0kvMOUo5zpR6ieKIKa5yo+g4r8g70H2NCBbtaA8TocSbhwNwYjG\\/\\/aVGN9avSHh9YzVgxAlG8qfbEDsX9VAetYU+awuXtLxvFf2J6VbzpvhumFi4PRSGqmZ4gqw2L+zc39rVtiNwm2CpdHlf\\/M1BIXYtVPpuwjP0TotpiLMfoIctMOBef\\/sZtXUTmKnGEB4nJJUIKkJR6hVCIqELwl8yk9O\\/Pml0G\\/HhqskNngq0qKhDeGRAmW5jNTF6GbrpOxwSUYv\\/30zZWUi\\/GxdsZqPmXOSfzfoiuWmzhkbT7iplLsSWoT\\/sLFVZQKR\\/5WkprQ6b1hWNAYGFb2gqAezRzONxq644kiascMIbCIwjvCEMXSw9Q2UM7pmjJCm50Zs6u1ryPjcPVBN74qvtTpXjNiA6c1WI8\\/QO3y\\/VjCd29d8mSbQpn\\/AgbDL7GeerOK\\/FphOvbVbnhfCiI1k3Fesw3N091uolh\\/khzP\\/sHlHTykDI7co\\/UW6z+3A7H1+RproggNhJzdpmGXxrdFgPCz61iDG3N7tJPEQ\\/NHoCFiL9TEWT\\/mWS7GKsnauqCMYdMRMqockwYZ4rbdEycVBdKs5PVX06iaVikWnvs3\\/bod+38NjmhE83AjgXabyebslIx8pvb6uqCO3M26WaJhd3XBnG0V04v9aknFY1mZ0JD9649bLceRLHVxlaWlT\\/C\\/UC1oU8ATcRI6Vsz3pezyEELWgPl9rkixWVsaoTFaCnZi7KdkR9FqN5vfn0BNJbkzzH30EK6gfzfsnFIcJrRxWF9SEaJp28Ek+WngUtVpHJk6x6oHkVma1\\/myjSluzZTyPbIBeUiTJRoJqTlQ7BIjICCj4ilg2pGiZAzOIJ9\\/sN6M96lVcJu4huPPeSvCvYW8SEvqlE2mDfYAc5eUeJ+3HdZqmKDwKjZYNYpum3GSR272KZKs9IXMUqGN+LH3GlIOoFh9feA88\\/Nlj1BM25gEY8iO9fvfNmy4ZZqPFEfeN1Lowfd+Gph3yemiCO3PAA5+9PYir7Bn9KQ5afgXQA9qCrmxETLMd0+vKOrc3lPfFC7SsUXdFhHjjE1cfvzbbOGbvE7z8NxjPpU4RhHGuEzGoMwdHMl6aSRzZn2EpA4IgIIGT0DtMO9rITJW+VooeqdcJal+YhTBoFX\\/ZqGLSt5nRw86qqWCDOq3+fT8y5m3rLbXtNllG8X81BXvhm35MxPQ6WM3h4RrJgFWmCN7NXKYzcnN2LmANlDh17vFuzMlqxnW65WeTQ++YEgOas5ihzo9gKJo7PWm2ORbCjoIi6HYgThiYIkH\\/A+DJUp0Ti+iSptH8FLwiHsHXHGWu4AwQl1w1SAcdHLyUyC235m6e1roXY4bAvsfss9MRvaPoEvoRME1P+djGe4aD\\/FgG7CjJ3RvaQx2aVqnOLcVxn9ffOkleS4motnEhZvaxdCtRdQZ0f3HS6DfEzFP79t\\/eQOPTXZHlZAnNlRrqusCF1ztWQ0zBhXweeqP6Tp\\/5VmvsD8ocshJmf26iU9uk+fPZ4wTYT8Z3bPnX3b4iCbpU8kiNALU3rI9E3RFwPT+5Mf+KLgnaceppS6\\/imDhh\\/4SuiPrx+e2cwZQuRn5Roh3VOtLxwhkIeVgoqXagp9Nld+Dc3vxXtIE6U2JY+5vIVvr7iMVrww0vLG1iLUN7Hk2pT8Gh3hW65\\/t6E8nziTRz5VeZj+xpYtI6\\/\\/0Q+AKnypdryJyLzQjfZCanGECqyf3hcVHm37qBR+KZESDYVjppUgFz8oD4Fe7YMfz4N4O18BcUt31+W5sPpKQw9b+k9dhxVGx\\/EyUmt5LY4k607DAAhuKRZCJ8pJW48bDfh6sMmydolsLP+NkUsZph\\/wTWLJJM+AiX5QaXvtL6jlyO4O4DItAch0FCZHkJDkDGOuP3bbIEdvyvROSYngghMN0kThmGVZzCwfFOg5E9pJe8HaX\\/yOgw1w4FdgRmQ3r54dzb\\/biFK\\/JiH0hZa1lM18KDmN85ne+FTueqIGe+iCturmvJL9WfkcY2WZ\\/GoDsrzPEeBaEkc906ybpZDpltjUGrwUs+6zkedWNM4LOJAaBdsBCOrvt9Rq2b\\/MVI9koh+dSynhCdzIkYVL8LhbpGrvKwcEeZrANGYg8XqTSSIDdGtlKRalRrzAySs3S8b77KyawH+baH64eLYghWYJDFX8R6SwQaP9e\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function drawreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Leto(JSBridgeVersion/3.0) AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_29) WK",
            "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "wua=HIVW_TB8cyKJuhWjB2xlQurypI5kuvo%2F9AD711q3jpJQCWsJNv4fq7zpFB1wtzj5oyVV06fN7qncBgRyAiZ%2Bq34MNU1q2hO6Ybas%2BaH9laokU2sLg6itc9c%2BB642cbshDYUOQTvv1JosGC2scvgd0Q30DR3N3ZvTRx2M9AbfWcTGz%2Fa6BNhLrDakmYc%2FleyEDs838jt1OCA3PNoJJvfgt9tYlmu94wFjuoKdwAzIGlJU7ksaPbA%2Fyz7BLv%2FLxJS5pikvxr0Q4qrGqJFD85O3XCnupN0D1%2BE54zVXC%2Fgg6Pe5bIQs%3D&ua=&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629011857&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b3243867382bdca486cef64931b847b8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
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

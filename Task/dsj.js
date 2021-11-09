GXRZ = '7.29.11 修复额度选择'
const $ = Env("电视家");
$.idx = ($.idx = ($.getval('dsjSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
////const notify = //$.isNode() ? require("./sendNotify") : ``;
//const COOKIE = //$.isNode() ? require("./dsjCOOKIE") : ``;
const COOKIE = '';
const logs = 0; // 0关闭日志，1原始日志，2格式化，3格式化且解码，
notifyttt = 1; // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
Minutes = 10; // 通知 默认控制在0-10分内
K = '', $.message = '', DATA = '', XH = 0, TXTX = 0, COOKIES_SPLIT = '', XYZ = 100, ddtime = '';

let dsjheaderArr = [];
let dsjheaderVal = ``;
let middledsjHEADER = [];



dsjheaderArr = ['{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "T1RWaE56VTJZelk1TnpneU16QXhNMkprWkRNMllXUm1ZekE0Tm1GbU4yRT18MTYzMDk5MDgxMzc4MTA0MzA1OHw0MjMxMDkyMmFmZDVjYjFlZjM2YjkzODMzYmM4MzZiZDM2N2U3NmNi","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "user.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "420000","cityCode": "420900","countryCode": "CN","cuuid": "3612f9316166d5a162accea960c34881","erid": "61131","ethMac": "","gpsCityCode": "420900","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone11,2","ispId": "","language": "zh_CN","routerMac": "e02481a23624","ssid": "f051e12e-b7d5-4381-84e8-e28c4f2ff5a9","userid": "62d5897fae73120cda6cae02e53f6739","uuid": "b963e558667e44ea908663230a232e82"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "TmpBd05tRXhZekF6T0RZek5qUmxPV1E1T1dVNFpUSm1Zak13TlRJMllqVT18MTYzMzY5MjQ2NzE5NjQwNDk2NHw3ZTgxOGMzMGY1NjdiZTc4NTM5M2Q3MWJhMTEzZGI2MTZjNGYzNWQ4","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "340000","cityCode": "340100","countryCode": "","cuuid": "73610ea1120523a64931c4ec6d8ac3e9","erid": "17213","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "711f16dc-16a6-47c8-9006-fa50426d2e53","userid": "8e055dfa9fe6d485dd8631cc35efd97e","uuid": "02f7c325094e43d9a2c9e6581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "TmpnNFpqTTRZakUxTXpJMllXSmhOemcyWVdReE16ZGxZelEyWXpBMU5Eaz18MTYzMzY5MzE5NTc1ODkxOTYyNHwzYTgzODVjYjYxODIyMmU5OWZhODZlYjhlZmU1ZDA0MmQ2YmE4ZWQx","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "350000","cityCode": "340200","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "80468","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "711f16dc-16a6-47c8-9006-fa50426d2e56","userid": "2cac3df05528157d79516675975b6f5a","uuid": "02f7c325094e43d9a2c9e6581a461f72"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "TVdObE5qYzBZVEl5TXpKa01qRXdNVEZpWVRrMlpHSXhOREZrWldKaE1qUT18MTYzMzgyODc0MzMzMjA5MDI1NHwyMThiMmYyZjZkZTYyMDYwZmFiOWY1MzRjNjk0ODEyYjVkYmE3Mjc5","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "340000","cityCode": "340100","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e01","erid": "60809","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "6f4fcac186122fba8018572f75569c88","uuid": "02f7c325094e43d9a2c9e6581a461f74"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WXpJek4yUXhORGsyTnpKbVpHSTBZekF3TjJaa00yRXpaVFZrT0RRMk56UT18MTYzMzgyOTEzNDA2NTQ5MDI2OHwxOTJmODQyMTU2MzQxMjM0ZjQwZmQ2NGEzZWY3OGFhNzlkMWQ3ZWNj","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "47.95.69.248","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e5e00","erid": "0","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "a92f4a163810a4d57bdff9b33e0d1bab","uuid": "02f7c325094e43d9a2c9e6581a461f51"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WkRkak5qRXpNMkV4TmpBNU1XVTBaVEUyTkRWbFpqTXdZVEJpWVRBeE4yTT18MTYzMzgyOTM4NTk4MTMyMTkwNnxmY2VhYjcyNThhMDVkNDRiMGZhZDExZTk2ZDQ1OGQ2ZDU2YmU5MDY4","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "47.95.69.248","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e20","erid": "0","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "1798e35861e49e3550a7bcec96e196b7","uuid": "02f7c325094e43d9a2c9e6581a461471"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WlRKbVpqUXhOelJtWkdZd1pUVmlPVGd6TURFM1pXSmlaamd5Tmprd09URT18MTYzMzgyOTg4Njk1Njc4MjQxNXwzMmM1ODY2YjI5ZDk1NDMyNjFlMTMzNDcyNTExMzA1OTUyMzE3NmIz","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "47.95.69.248","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e3e00","erid": "0","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "27dfb9475d4a2b02023027c2c8563fe6","uuid": "02f7c325094e43d9a2c9e6581a462f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "TVRNMk56STRaRFEwWmpKaE0yVTVZMlpoT0ROaE1qQXlNRGxtTjJSak4yTT18MTYzMzgzMDIwMDg4ODcwMTU0NnxiMzc4MThjMGZjZDdiOTRlODVlZDI3YTE0NzFiNzgwMDM3OTIzYmVm","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "47.95.69.248","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e80","erid": "0","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "a57d51031aadf7c9fbfa0a914d3b169d","uuid": "02f7c325094e43d9a2c9e6581a431f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WldKaU5XUXlZamhoT0Raa1pEVmhPVE15TnpZMlpHRmlNbUppTnpSaU5qTT18MTYzMzgzMDg0Nzg0NDQ3OTczMHxkYzdmNTRlMWU3NzNmM2U4YmU0MjFjZjA3MzU2ZTYzZjgwNTJlZGI5","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "47.95.69.248","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab685cc3er6e9e00","erid": "0","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "f0f60ce2f62cb6972af6af7068e27651","uuid": "02f7c325094e43d9a2c9e6581a461f70"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WkdVNFlqSTNNemd6TUdNeE9UYzVaVEk1WXpJeU5UWmtOVGt4TkRVd056UT18MTYzMzgzNDcyMDcxNDYzNjkzOHw4OGZlZTEyYTdlMDMzMzVjZTRmZTVlNDRiN2Y5ZTkyZDNmN2ZlNDYx","Cache-Control": "no-cache","Connection": "close","Content-Length": "53","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "47.95.69.248","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab659cc3ee6e9e00","erid": "0","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "a6c6569783adf618d5256d7a9f49dd01","uuid": "02f7c325094e43d9a2c9e6583a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "TWpGaU5HWmtZVFF6Wm1JM056bGpOemMyWlRrd016YzBaalF5WW1JNVlXUT18MTYzNDk1MzY3MTkwMDg2NDI5OXw3N2QwNmNmOTE0NjI0MjA3ZTkzMjQxMDMxZjYxNjM2YzFjMGUxODEx","Cache-Control": "no-cache","Connection": "close","Cookie": "beegosessionID=c02260bb0774211f7f4a8317b09478bf","Generation": "com.dianshijia.mobile.ios","Host": "offline.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "340000","cityCode": "340100","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "20540","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "977a63768ef7a2b698d1d8449960d0f4","uuid": "02f7c325094e43d9a2c9e3581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WVdGaU1EazRaR0l3WkRnMU16UTRaamsyWXpnNVlqbGpPR1ZqTWpNMU56VT18MTYzNDk1Mzk0OTU2MjYwMzYyM3xlZTEwZGFkYjU3MjY0ODcwYTNlNjk3N2VkMGVlYjZmYzQ2Mjc3MDMy","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "340000","cityCode": "340100","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "84531","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "eb9d5e94cdd73a9f1911a739b55d87d7","uuid": "02f7c325094e43d9a2c9e6581a463f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "TkdReVltTXhPRGN6T0RjMk5HUTJObVkzT0RJd05UZzBNV1JqT1RZeFpHRT18MTYzNDk1NDQ2OTI2NzgxNDQ0OXw3MDM1Y2E1NmZhYmE4YjA0Zjc2NDFjZjkyZjIzYjBiMzhiOWQxNTI1","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "340000","cityCode": "340300","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "76915","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "c87eed4b398787fb33ce51a075ca3d92","uuid": "02f7c325094e43d9a23c9e6581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WW1VeU5qVmtaRGRoTmpBd05XVTVaall4TVdSbVkySTRNR1JtTURNeU1tRT18MTYzNDk1NDcyOTAwNTcyNjkyMHxkNTdlZmUwZDBiYzg1NjRhM2IyYWNiMDYxZDhkZDk3NjhlMTM1NTI4","Cache-Control": "no-cache","Connection": "close","Cookie": "beegosessionID=862dbec62032e72ecc2bc77aff19046f","Generation": "com.dianshijia.mobile.ios","Host": "offline.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "340000","cityCode": "340100","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "79871","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "60e3a8439949408582132d93e5dea91b","uuid": "02f7c325094e43d9a2c9e6581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "TnprNU9HVXdNRGxtT0RrMVpqTXhOemc1TVRrMFptTTFObVpoWlRabE9Eaz18MTYzNjM3MzQ2NTkyNzg3OTk0NHw1NDAxMjNlNDY1NjI3MDk1MzY3YjZjMTNiYjcxZjFjZWNiZDEwNGJj","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "49866","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "711f16dc-16a6-47c8-9006-fa50426d2e53","userid": "c08d1b87f2bc6fd5d74b51086ec26169","uuid": "02f5c325094e43d9a2c9e6581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "T0RneE5EQmpOV1l5TURNd05EazRaalU1TUdRNE9HTmxPVFE1WkRSbU1qUT18MTYzNjM3NDEyODA4Nzg4ODY0NHxjMGM5OWE4YzRhZjlkNDRjNzU5Y2UzNDA0NjU0NDc0YWJlYmM0NmM3","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "340000","cityCode": "340100","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "94143","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "911f16dc-16a6-47c8-9006-fa50426d2e53","userid": "3ae32b9de20c3dec8f27f538f33b7501","uuid": "02f7c325194e43d9a2c9e6581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "WWpVM1pUa3pPVFZoTmpGaVpqbGxPRGN3TVRNME5EQXhNRFpsTnpZeE1XUT18MTYzNjM3NDczNzc0ODY1ODE2NXw3MjkyNDFmYWFjMTI1ZTM1NjE4MGM1OTdmMDAzMDk5MTRiMzdjOWVi","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "act.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "54408","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "b70e906118000ca1c6f999590e167780","uuid": "02f7c305094e43d9a2c9e6581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-Hans;q=1","AppVerCode": "236","AppVerName": "1.96","Authorization": "T0RVeVlUWTJNbVl3TkRGa00yRmlZMll6T0dFNFpqWmtNekV6TURjM016RT18MTYzNjM3NTA4NzE2Mjg2MTc2NHw2Njc0ZmJiMGU4YzRiMTU0N2E2MDJlNTAwNWMzNTA0NTlhODQ3MzY0","Cache-Control": "no-cache","Connection": "close","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "45963","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 5s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "187de0dc729ccb9823e006d4e1d9add1","uuid": "82f7c325094e43d9a2c9e6581a461f71"}',
                '{"Accept": "*/*","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","AppVerCode": "236","AppVerName": "1.96","Authorization": "T0RBd056ZzFaVEZoT1dOa1pEVmhNbVl3TXpOak9EQTBNVGs0TnpFeE5qVT18MTYzNjM4MDk2OTYzNzA1MDUxNHw5OGI0ZTUwYzQ5YTMwNDcwMTVmZDNkMTJjOTViOTllNTc3NGU0OTk2","Connection": "close","Content-Length": "40","Content-Type": "application/x-www-form-urlencoded","Generation": "com.dianshijia.mobile.ios","Host": "api.gaoqingdianshi.com","MarketChannelName": "Iphone","User-Agent": "Dsj/Client1.2","appId": "19227f89ea1a166451593601eb8a1b4f","areaCode": "","cityCode": "","countryCode": "","cuuid": "145c9ba82450411bab689cc3ee6e9e00","erid": "70759","ethMac": "","gpsCityCode": "","hwBrand": "iPhone","hwMac": "","hwModel": "iPhone 6s","ispId": "","language": "zh_CN","routerMac": "","ssid": "","userid": "13b3482f52e0f316c60b9a970c2113e3","uuid": "02f7c325094e43d9c2c9e6581a461f71"}'
            ]

console.log(`${GXRZ}\n`);
$.message += `${GXRZ}\n`

if ($.isNode() && process.env.DSJ_dsjHEADER) {
    XH = process.env.DSJ_XH || 0;
    XYZ = process.env.DSJ_XYZ || 100;
    TXTX = process.env.DSJ_TXTX || 0;
    notifyttt = process.env.DSJ_notifyttt || 1;
    notifyInterval = process.env.DSJ_notifyInterval || 2;
    Minutes = process.env.DSJ_Minutes || 10;
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
            COOKIES_SPLIT
        )} =============\n`
    );
    if (
        process.env.DSJ_dsjHEADER &&
        process.env.DSJ_dsjHEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middledsjHEADER = process.env.DSJ_dsjHEADER.split(COOKIES_SPLIT);
    } else {
        middledsjHEADER = process.env.DSJ_dsjHEADER.split();
    }
    Object.keys(middledsjHEADER).forEach((item) => {
        if (middledsjHEADER[item]) {
            dsjheaderArr.push(middledsjHEADER[item]);
        }
    });



} else if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val) {
    console.log(
        `============ cookie方式为：boxjs复制会话 =============\n`
    );
    XH = (COOKIE.settings.find(item => item.id === `dsjXH`)).val || 0;
    XYZ = (COOKIE.settings.find(item => item.id === `dsjXYZ`)).val || 100;
    TXTX = (COOKIE.settings.find(item => item.id === `dsjTXTX`)).val || 0;
    notifyttt = (COOKIE.settings.find(item => item.id === `dsjnotifyttt`)).val || 1;
    notifyInterval = (COOKIE.settings.find(item => item.id === `dsjnotifyInterval`)).val || 2;
    Minutes = (COOKIE.settings.find(item => item.id === `dsjMinutes`)).val || 10;
    dsjCount = COOKIE.settings.find(item => item.id === `dsjCount`).val || 1;
    for (let i = 1; i <= dsjCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if (COOKIE.datas.find(item => item.key === `dsjheader${op}`).val) {
            dsjheaderArr.push(COOKIE.datas.find(item => item.key === `dsjheader${op}`).val);


        }
    }
} else {
    if ("dsjXYZ") {
        XYZ = $.getval("dsjXYZ") || 100;
    }
    if ("dsjTXTX") {
        TXTX = $.getval("dsjTXTX") || 0;
    }

    if ("dsjXH") {
        XH = $.getval("dsjXH") || 0;
    }
    if ("dsjnotifyttt") {
        notifyttt = $.getval("dsjnotifyttt") || 1;
    }
    if ("dsjnotifyInterval") {
        notifyInterval = $.getval("dsjnotifyInterval") || 2;
    }
    if ("dsjMinutes") {
        Minutes = $.getval("dsjMinutes") || 10;
    }
    let dsjCount = ($.getval('dsjCount') || '1') - 0;
    for (let i = 1; i <= dsjCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if ($.getdata(`dsjheader${op}`)) {
            dsjheaderArr.push($.getdata(`dsjheader${op}`));



        }
    }
}

function RedCookie() {
    if (XH == 1 && JSON.stringify($request.headers).indexOf("userid") >= 0 && $request.url.indexOf("device") >= 0 && $request.body.indexOf("firstInstallTime") >= 0) {
        op = 1
        while (true) {
            op++;
            if (!$.getdata(`dsjheader${op}`)) {
                $.setdata(`${op - 1}`, `dsjSuffix`);
                $.idx = ($.idx = ($.getval('dsjSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : '';
                $.log(
                    `[${$.name + $.idx}] 当前电视家账号数量为${op - 1}✅: 成功🎉`
                );
                $.msg($.name + $.idx, `当前电视家账号数量为${op - 1}: 成功🎉`, ``);
                break;
            }
        }
    }
}

function GetCookie() {


    //获取用户
    if ($request && $request.headers.userid && JSON.stringify($request.headers).indexOf("userid") >= 0 && $request.url.indexOf("device") >= 0 && $request.body.indexOf("firstInstallTime") >= 0) {
        const userid = $request.headers.userid
        const token = $request.headers.Authorization
        const dsjheaderVal = userid + "&" + token

        if (dsjheaderVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('dsjheader' + $.idx);
                    if (bodys) {
                        userids = bodys.split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                            } else {
                                $.idx = Number($.idx) + 1
                            }
                            cookie()
                        } else {
                            $.setdata(dsjheaderVal, "dsjheader" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 更新用户ck✅: 成功,dsjheaderVal: ${dsjheaderVal}`
                            );
                            $.msg($.name + $.idx, `更新用户ck✅: 成功,dsjheaderVal`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(dsjheaderVal, "dsjheader" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 新增用户ck✅: 成功,dsjheaderVal: ${dsjheaderVal}`
                        );
                        $.msg($.name + $.idx, `新增用户ck✅: 成功,dsjheaderVal`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(dsjheaderVal, "dsjheader" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取用户ck✅: 成功,dsjheaderVal: ${dsjheaderVal}`
                );
                $.msg($.name + $.idx, `获取用户ck✅: 成功,dsjheaderVal`, ``);
                $.done();
            }
        }
    }


}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
    ).toLocaleString()} =====================\n`
);


console.log(
    `============ 共 ${dsjheaderArr.length} 个${$.name}账号=============\n`
);
//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//日期格式化时间戳
function timecs() {
    if ($.isNode()) {
        var date = new Date(newtime).getTime() - 8 * 60 * 60 * 1000
    } else var date = new Date(newtime).getTime()
    return date;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//str编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//str解码
function decodeUnicode(str) {
    str = str.replace(/\\u/g, "%u");
    return unescape(str);
}
//es编码  escape("中文")
//es解码  unescape("%u4E2D%u6587")
//URI编码  encodeURI("中文") 不完全
//URI解码  decodeURI("%E4%B8%AD%E6%96%87")  不完全
//URIC编码  encodeURIComponent("中文")
//URIC解码  decodeURIComponent("%E4%B8%AD%E6%96%87")
//日志格式化
function format(str) {
    if (logs == 2) {
        str = JSON.stringify(str).replace(/,/g, ",\n").replace(/{/g, '{\n').replace(/}/g, '\n}').replace(/\\/g, "").replace(/\\\\/g, '\\')
    }
    if (logs == 3) {
        str = decodeUnicode(JSON.stringify(str)).replace(/,/g, ",\n").replace(/{/g, '{\n').replace(/}/g, '\n}').replace(/\\/g, "")
    }
    return str;
}
//随机延迟 ceil向上取值RT(0, 5)=1 2 3 4 5
//随机延迟 floor向下取值RT(0, 5)=0 1 2 3 4
//随机延迟 round四舍五入取值RT(0, 5)=0 1 2 3 4 5
function RT(X, Y) {
    do rt = Math.round(Math.random() * Y);
    while (rt < X)
    return rt;
}





!(async () => {

    await all();
    await msgShow();

})()
    .catch((e) => {
        $.log('', `❌ ${O}, ${K}: 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })





async function all() {

    for (let i = 0; i < dsjheaderArr.length; i++) {
        dsjheaderVal = dsjheaderArr[i];
        userid = JSON.parse(dsjheaderVal).userid;
        token = JSON.parse(dsjheaderVal).Authorization;

        $.index = i + 1;
        O = (`${$.name + $.index}🔔`);
        $.isLogin = true;
        if (dsjheaderVal && RT(1, 100) <= XYZ) {

            taskheader = {
                'appId': `19227f89ea1a166451593601eb8a1b4f`,
                'Authorization': `${token}`,
                'userid': `${userid}`

            };
            console.log(`-----------------\n\n🔔开始运行【${$.name + $.index}】`)
            K = `用户信息🚩`;
            if (K == `用户信息🚩`) {
                taskurl = `http://user.gaoqingdianshi.com/api/v3/user/info`



                await taskget();
                $.user = DATA

                if ($.user.data && $.user.data.nickname) {
                    nickname = $.user.data.nickname
                    console.log(`\n${O}\n========== ${nickname} ==========\n登录天数：${$.user.data.loginDays}天，连续登陆：${$.user.data.continuousLoginDays}天\n会员到期：${time($.user.data.equityTime)}\n`)
                    $.message += `\n${O}\n========== 【${nickname}】 ==========\n【登录天数】：${$.user.data.loginDays}天，连续登陆：${$.user.data.continuousLoginDays}天\n【会员到期】：${time($.user.data.equityTime)}\n`;
                    if ($.user.data.bindAlipay == true) {
                        console.log(`提现账户：支付宝\n`);
                        $.message += `【提现账户】：支付宝\n`;
                    } else {
                        console.log(`提现账户：微信\n`);
                        $.message += `【提现账户】：微信\n`;
                    }
                } else {
                    $.isLogin = false; //cookie过期

                }
                if (!$.isLogin) {
                    $.msg(
                        O, time(Number(Date.now())) +
                    `⚠️COOKIE失效\n请点击前往获取 http://m1.liulianqi123.xyz/activity/f/transfer?yrwe=1&uid=ffe57a2713cbd8337445c52e3a06e8df`,
                        'http://m1.liulianqi123.xyz/activity/f/transfer?yrwe=1&uid=ffe57a2713cbd8337445c52e3a06e8df', {
                        "open-url": "http://m1.liulianqi123.xyz/activity/f/transfer?yrwe=1&uid=ffe57a2713cbd8337445c52e3a06e8df"
                    }
                    );
                    if ($.isNode()) {
                        await notify.sendNotify(O, time(Number(Date.now())) + `⚠️COOKIE失效\n请点击前往获取http://m1.liulianqi123.xyz/activity/f/transfer?yrwe=1&uid=ffe57a2713cbd8337445c52e3a06e8df`);
                    }
                    continue
                }
            }

            K = `现金收益🚩`;
            if (K == `现金收益🚩`) {


                taskurl = `http://api.gaoqingdianshi.com/api/cash/info`
                await taskget();

                $.xjsy = DATA
                if ($.xjsy.errCode == 0) {
                    txed = $.xjsy.data.withdrawalQuota / 100
                    xjye = $.xjsy.data.amount / 100

                    console.log(`现金收益：${$.xjsy.data.amount / 100}元，提现额度：${$.xjsy.data.withdrawalQuota / 100}元\n总计提现：${$.xjsy.data.totalWithdrawn / 100}元，总计次数：${$.xjsy.data.totalWithdrawnCount}次\n`);
                    $.message += `【现金收益】：${$.xjsy.data.amount / 100}元，提现额度：${$.xjsy.data.withdrawalQuota / 100}元\n【总计提现】：${$.xjsy.data.totalWithdrawn / 100}元，总计次数：${$.xjsy.data.totalWithdrawnCount}次，平均单次：${($.xjsy.data.totalWithdrawn / 100 / $.xjsy.data.totalWithdrawnCount).toFixed(2)}元\n`;
                }

            }

            K = `金币收益🚩`;
            if (K == `金币收益🚩`) {


                taskurl = `http://api.gaoqingdianshi.com/api/coin/info`
                await taskget();

                $.jbsy = DATA
                if ($.jbsy.errCode == 0) {

                    console.log(`金币收益：${$.jbsy.data.coin}金币，累计金币：${$.jbsy.data.totalAcquiredCoin / 10000}万金币\n`);
                    $.message += `【金币收益】：${$.jbsy.data.coin}金币，累计金币：${$.jbsy.data.totalAcquiredCoin / 10000}万金币\n`;
                }

            }
            K = `签到列表🚩`;
            if (K == `签到列表🚩`) {


                taskurl = `http://api.gaoqingdianshi.com/api/v8/sign/get`
                await taskget();


                $.qdlist = DATA
                if ($.qdlist && $.qdlist.data && $.qdlist.data.recentDays && $.qdlist.data.recentDays[0] && $.qdlist.data.recentDays[0].rewards && $.qdlist.data.recentDays[1] && $.qdlist.data.recentDays[1].rewards) {
                    mr = $.qdlist.data.recentDays[1].rewards
                    jr = $.qdlist.data.recentDays[0].rewards

                    if (mr) {

                        ed = mr.find(item => item.rewardsType === 4).id
                    } else {

                        ed = ``
                    }


                } else {
                    mr = ``
                    jr = ``
                    ed = ``
                }


            }
            K = `每日签到🚩`;
            if (K == `每日签到🚩`) {

                if ($.qdlist && $.qdlist.data && $.qdlist.data.isSign && $.qdlist.data.isSign == 2) {
                    taskurl = `http://act.gaoqingdianshi.com/api/v7/sign/signin?accelerate=0&ext=0&ticket=`
                    await taskget();

                    $.mrqd = DATA
                    if ($.mrqd.errCode == 0 && $.mrqd.data && $.mrqd.data.reward && $.mrqd.data.reward[1].name) {

                        console.log(`每日签到：获得${$.mrqd.data.reward[0].count}${$.mrqd.data.reward[0].name}，${$.mrqd.data.reward[1].name}\n`);
                        $.message += `【每日签到】：获得${$.mrqd.data.reward[0].count}${$.mrqd.data.reward[0].name}，${$.mrqd.data.reward[1].name}\n`;
                    } else if ($.mrqd.errCode == 0 && $.mrqd.data && $.mrqd.data.reward[0].name) {

                        console.log(`每日签到：获得${$.mrqd.data.reward[0].count}${$.mrqd.data.reward[0].name}\n`);
                        $.message += `【每日签到】：获得${$.mrqd.data.reward[0].count}${$.mrqd.data.reward[0].name}\n`;
                    }
                } else if (jr && jr.length == 2) {

                    console.log(`每日签到：已签到，奖励为${jr[0].count}${jr[0].name},${jr[1].name}\n`);
                    $.message += `【每日签到】：已签到，奖励为${jr[0].count}${jr[0].name},${jr[1].name}\n`;
                } else if (jr && jr.length == 1) {

                    console.log(`每日签到：已签到，奖励为${jr[0].count}${jr[0].name}\n`);
                    $.message += `【每日签到】：已签到，奖励为${jr[0].count}${jr[0].name}\n`;
                }

            }


            K = `明日奖励🚩`;
            if (K == `明日奖励🚩`) {

                if (ed && mr && $.qdlist.data && $.qdlist.data.isChooseExtraReward == 2) {
                    taskurl = `http://api.gaoqingdianshi.com/api/sign/chooseAdditionalReward?rewardId=${ed}`
                    await taskget();
                    $.mrjl = DATA
                    mrxzs = mr.find(item => item.id === ed).name
                    if ($.mrjl.errCode == 0) {
                        console.log(`明日奖励：${mrxzs}\n`);
                        $.message += `【明日奖励】：${mrxzs}\n`;
                    }

                } else if (ed && mr && $.qdlist.data && $.qdlist.data.isChooseExtraReward == 1) {
                    console.log(`明日奖励：已选择\n`);
                    $.message += `【明日奖励】：已选择\n`;
                }
            }


            K = `领取会员🚩`;
            if (K == `领取会员🚩`) {
                if ($.qdlist && $.qdlist.data && $.qdlist.data.isSign == 0) {

                    taskurl = `https://api.dianshihome.com/api/song/receive`

                    taskheader.appid = `3c3065a6f979f9b2b49e98ea1d02f313`
                    await taskget();

                    $.lqhy = DATA
                    if ($.lqhy.errCode == 0) {

                        console.log(`领取会员：成功\n`);
                        $.message += `【领取会员】：成功\n`;
                    }
                    taskheader.appid = `19227f89ea1a166451593601eb8a1b4f`
                }
            }


            K = `抽奖页面🚩`;
            if (K == `抽奖页面🚩`) {
                taskurl = `https://api.dianshihome.com/api/activity/turntable/get?userid=${userid}&platform=4&acode=xcx_choujiang`
                taskheader.appid = `3c3065a6f979f9b2b49e98ea1d02f313`
                await taskget();
                $.cjym = DATA
            }

            K = `转盘抽奖🚩`;
            if (K == `转盘抽奖🚩`) {
                if ($.cjym && $.cjym.data && $.cjym.data.attend != $.cjym.data.acquiredCount) {

                    taskurl = `https://api.dianshihome.com/api/activity/turntable/attend?userid=${userid}&platform=4&acode=xcx_choujiang`


                    await taskget();

                    $.cj = DATA
                    if ($.cj.errCode == 0) {

                        console.log(`转盘抽奖：${$.cj.data.prize.name}\n`);
                        $.message += `【转盘抽奖】：${$.cj.data.prize.name}\n`;
                    }

                } else {

                    console.log(`转盘抽奖：已完成\n`);
                    $.message += `【转盘抽奖】：已完成\n`;
                }
                taskheader.appid = `19227f89ea1a166451593601eb8a1b4f`
            }


            K = `金币领取🚩`;
            if (K == `金币领取🚩`) {
                if ($.jbsy.data && $.jbsy.data.tempCoin != null) {
                    jbjb = 0
                    for (let i = 0; i < $.jbsy.data.tempCoin.length; i++) {

                        jbid = $.jbsy.data.tempCoin[i]
                        taskurl = `http://api.gaoqingdianshi.com/api/coin/temp/exchange?id=${jbid.id}`
                        await taskget();

                        $.jblq = DATA
                        if ($.xjsy.errCode == 0) {
                            jbjb += jbid.coin

                        }
                    }
                    console.log(`金币领取：本次共领取${jbjb}金币\n`);
                    $.message += `【金币领取】：本次共领取${jbjb}金币\n`;


                }

            }

            K = `活动任务🚩`;
            if (K == `活动任务🚩`) {
                taskurl = `http://user.gaoqingdianshi.com/api/v2/taskext/getStatus`


                await taskget();
                $.resource = DATA
                if ($.resource.errCode == 0 && $.resource.data && $.resource.data[0] && $.resource.data[0].taskextCode) {
                    carveUp = $.resource.data.find(item => item.taskextCode == "carveUp");
                    walk = $.resource.data.find(item => item.taskextCode == "walk");
                    sleep = $.resource.data.find(item => item.taskextCode == "sleep");

                    if (carveUp && carveUp.taskextStatus < 2) {

                        console.log(`百万金币：未开始\n`);
                        $.message += `【签到列表】：未开始\n`;
                    }

                    if (sleep && sleep.taskextStatus < 2) {

                        console.log(`睡觉赚钱：未开始\n`);
                        $.message += `【睡觉赚钱】：未开始\n`;
                    }

                    if (carveUp && carveUp.taskextStatus == 2 && carveUp.userStatus == 2) {

                        console.log(`百万金币：已参加\n`);
                        $.message += `【百万金币】：已参加\n`;
                    }


                    if (sleep && sleep.taskextStatus == 2 && sleep.userStatus == 2) {

                        console.log(`睡觉赚钱：已参加\n`);
                        $.message += `【睡觉赚钱】：已参加\n`;
                    }



                    if (carveUp && carveUp.taskextStatus == 4 && carveUp.userStatus == 1) {

                        console.log(`百万金币：已完成\n`);
                        $.message += `【百万金币】：已完成\n`;
                    }
                    if (walk && walk.taskextStatus == 2 && walk.userStatus == 2) {

                        console.log(`走路赚钱：已完成\n`);
                        $.message += `【走路赚钱】：已完成\n`;
                    }

                    if (sleep && sleep.taskextStatus == 5 && sleep.userStatus == 1) {

                        console.log(`睡觉赚钱：已完成\n`);
                        $.message += `【睡觉赚钱】：已完成\n`;
                    }

                }
            }

            K = `百万金币参加🚩`;
            if (K == `百万金币参加🚩`) {
                if (carveUp && carveUp.taskextStatus == 2 && carveUp.userStatus == 1) {

                    taskurl = `http://api.gaoqingdianshi.com/api/v2/taskext/getCarveUp?ext=1`
                    await taskget();

                    $.bwjbcj = DATA
                    if ($.bwjbcj.errCode == 0) {

                        console.log(`百万金币参加：报名成功\n`);
                        $.message += `【百万金币参加】：报名成功\n`;
                    }
                }
            }
            K = `百万金币领取🚩`;
            if (K == `百万金币领取🚩`) {
                if (carveUp && carveUp.taskextStatus == 4 && carveUp.userStatus == 2) {

                    taskurl = `http://act.gaoqingdianshi.com/api/taskext/getCoin?code=carveUp&coin=0&ext=1`
                    await taskget();

                    $.bwjblq = DATA
                    if ($.bwjblq.errCode == 0) {

                        console.log(`百万金币领取：${$.bwjblq.data}金币\n`);
                        $.message += `【百万金币领取】：${$.bwjblq.data}金币\n`;
                    }
                }
            }



            K = `走路赚钱参加🚩`;
            if (K == `走路赚钱参加🚩`) {
                if (walk && walk.taskextStatus == 2 && walk.userStatus == 1) {

                    taskurl = `http://act.gaoqingdianshi.com/api/taskext/getWalk?step=${RT(20000, 30000)}`
                    await taskget();

                    $.zlzqcj = DATA
                    if ($.zlzqcj.errCode == 0) {

                        console.log(`走路赚钱参加：报名成功\n`);
                        $.message += `【走路赚钱参加】：报名成功\n`;
                    }
                }
            }
            K = `走路赚钱领取🚩`;
            if (K == `走路赚钱领取🚩`) {
                if (walk && walk.taskextStatus == 2 && walk.userStatus == 1) {

                    if (new Date().getDay() == 1) {
                        taskurl = `http://act.gaoqingdianshi.com/api/taskext/getCoin?code=walk&coin=20000&ext=1`
                    } else {
                        taskurl = `http://act.gaoqingdianshi.com/api/taskext/getCoin?code=walk&coin=2000&ext=1`
                    }


                    await taskget();
                    $.zlzqlq = DATA
                    if ($.zlzqlq.errCode == 0) {

                        console.log(`走路赚钱领取：${$.zlzqlq.data}金币\n`);
                        $.message += `【走路赚钱领取】：${$.zlzqlq.data}金币\n`;
                    }
                }
            }


            K = `睡觉赚钱参加🚩`;
            if (K == `睡觉赚钱参加🚩`) {
                if (sleep && sleep.taskextStatus == 2 && sleep.userStatus == 1) {

                    taskurl = `http://act.gaoqingdianshi.com/api/taskext/getSleep?ext=1`
                    await taskget();

                    $.sjzqcj = DATA
                    if ($.sjzqcj.errCode == 0) {

                        console.log(`睡觉赚钱参加：报名成功\n`);
                        $.message += `【睡觉赚钱参加】：报名成功\n`;
                    }
                }
            }

            K = `睡觉赚钱活动🚩`;
            if (K == `睡觉赚钱活动🚩`) {


                taskurl = `http://act.gaoqingdianshi.com/api/taskext/getSleep?ext=0`
                await taskget();

                $.sleeps = DATA

            }

            K = `睡觉赚钱领取🚩`;
            if (K == `睡觉赚钱领取🚩`) {
                if (sleep && sleep.taskextStatus == 5 && sleep.userStatus == 2 && $.sleeps.data.unGetCoin > 0) {

                    taskurl = `http://act.gaoqingdianshi.com/api/taskext/getCoin?code=sleep&coin=${RT($.sleeps.data.unGetCoin)}&ext=1`
                    await taskget();
                    $.sjzqlq = DATA
                    if ($.sjzqlq.errCode == 0) {

                        console.log(`睡觉赚钱领取：${$.sjzqlq.data}金币\n`);
                        $.message += `【睡觉赚钱领取】：${$.sjzqlq.data}金币\n`;
                    }
                }
            }





            K = `任务列表🚩`;
            if (K == `任务列表🚩`) {

                taskurl = `http://act.gaoqingdianshi.com/api/v5/task/get`
                await taskget();

                $.taskresource = DATA

            }


            K = `执行任务🚩`;
            if (K == `执行任务🚩`) {

                if ($.taskresource && $.taskresource.data && $.taskresource.data[0]) {
                    for (let i = 0; i < $.taskresource.data.length; i++) {
                        taskinfo = $.taskresource.data[i]

                        if (taskinfo && taskinfo.dayCompCount != taskinfo.dayDoCountMax && taskinfo.maxCoin > 0 && taskinfo.code != "taskExtraIos") {



                            if (taskinfo.code == "gameTime") {

                                taskurl = `http://act.gaoqingdianshi.com/api/v5/task/complete?code=SpWatchVideo`

                                console.log("额外激励视频")
                                await taskget();
                                $.task = DATA
                                if ($.task.errCode == 0 && $.task.data) {
                                    console.log(`额外激励视频：获得${$.task.data.getCoin}金币，进度${$.task.data.dayCompCount}/${$.task.data.dayDoCountMax}\n`);
                                    $.message += `【额外激励视频】：获得${$.task.data.getCoin}金币，进度${$.task.data.dayCompCount}/${$.task.data.dayDoCountMax}\n`;

                                }

                                taskurl = `http://act.gaoqingdianshi.com/api/v5/task/complete?code=${taskinfo.code}&time=3600`

                            } else {
                                taskurl = `http://act.gaoqingdianshi.com/api/v5/task/complete?code=${taskinfo.code}`
                            }

                            console.log(taskinfo.name)
                            await taskget();
                            $.task = DATA
                            if ($.task.errCode == 0 && $.task.data) {
                                console.log(`${$.task.data.name}：获得${$.task.data.getCoin}金币，进度${$.task.data.dayCompCount}/${$.task.data.dayDoCountMax}\n`);
                                $.message += `【${$.task.data.name}】：获得${$.task.data.getCoin}金币，进度${$.task.data.dayCompCount}/${$.task.data.dayDoCountMax}\n`;

                            }

                        }
                    }
                }

            }



            K = `额外额度🚩`;
            if (K == `额外额度🚩`) {

                if ($.taskresource && $.taskresource.data && $.taskresource.data[0]) {

                    ewedinfo = $.taskresource.data.find(item => item.code == "taskExtraIos")

                    if (ewedinfo.doneStatus == 1) {

                        taskurl = `http://act.gaoqingdianshi.com/api/v5/task/complete?code=${ewedinfo.code}`
                        await taskget();
                        $.ewed = DATA
                        if ($.ewed.errCode == 0 && $.ewed.data) {
                            console.log(`额外额度：获得1元额度\n`);
                            $.message += `【额外额度】：获得1元额度\n`;

                        }
                    } else if (ewedinfo.doneStatus == 2) {

                        console.log(`额外额度：今日已领取\n`);
                        $.message += `【额外额度】：今日已领取\n`;


                    } else if (ewedinfo.doneStatus == 3) {

                        console.log(`额外额度：所有任务还未完成\n`);
                        $.message += `【额外额度】：所有任务还未完成\n`;


                    }
                }

            }


            K = `余额提醒🚩`;
            if (K == `余额提醒🚩`) {

                if (TXTX && TXTX >= 5 && txed && txed >= 5 && txed >= TXTX && xjye && xjye >= 5 && xjye >= TXTX && $.xjsy.data && $.xjsy.data.isWithdrawalToday == false && (nowTimes.getHours() === 11 || nowTimes.getHours() === 19)) {


                    console.log(`余额提醒：当前可提余额${txed}元，请12点或者20点手动提现\n`)
                    $.message += `【余额提醒】：当前可提余额${txed}元，请12点或者20点手动提现\n`;


                    $.msg(O, ``, `========== 【${nickname}】 ==========\n当前可提余额${txed}元，请12点或者20点手动提现\n`);
                    if ($.isNode()) {
                        notify.sendNotify(O, `========== 【${nickname}】 ==========\n当前可提余额${txed}元，请12点或者20点手动提现\n`);
                    }

                } else if (TXTX == 0) {

                    console.log(`余额提醒：如需设置，请进boxjs设置或者设置环境变量\n`)
                    $.message += `【余额提醒】：如需设置，请进boxjs设置或者设置环境变量\n`;


                } else if ($.xjsy.data && $.xjsy.data.isWithdrawalToday != false) {

                    console.log(`余额提醒：今日已提现\n`)
                    $.message += `【余额提醒】：今日已提现\n`;

                }

            }

        }
    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}
//运行模块
function taskpost() {
    return new Promise(async resolve => {
        let url = {
            url: taskurl,
            headers: taskheader,
            body: taskbody,
        }
        $.post(url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${O} ${K}API请求失败，请检查网络重试`)
                } else {
                    if (data) {
                        if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                        DATA = JSON.parse(data);
                    } else {
                        console.log(`服务器返回数据为空`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}
//运行模块
function taskget() {
    return new Promise(async resolve => {
        let url = {
            url: taskurl,
            headers: taskheader
        }
        $.get(url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${O} ${K}API请求失败，请检查网络重试`)
                } else {
                    if (data) {
                        if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                        DATA = JSON.parse(data);
                    } else {
                        console.log(`服务器返回数据为空`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }

        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {
                url: opts
            } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }
            return new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })
        }

        get(opts) {
            return this.send.call(this.env, opts)
        }

        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }

    return new (class {
        constructor(name, opts) {
            this.name = name
            this.http = new Http(this)
            this.data = null
            this.dataFile = 'box.dat'
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.startTime = new Date().getTime()
            Object.assign(this, opts)
            this.log('', `🔔${this.name}, 开始!`)
        }

        isNode() {
            return 'undefined' !== typeof module && !!module.exports
        }

        isQuanX() {
            return 'undefined' !== typeof $task
        }

        isSurge() {
            return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
        }

        isLoon() {
            return 'undefined' !== typeof $loon
        }

        isShadowrocket() {
            return 'undefined' !== typeof $rocket
        }

        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }

        toStr(obj, defaultValue = null) {
            try {
                return JSON.stringify(obj)
            } catch {
                return defaultValue
            }
        }

        getjson(key, defaultValue) {
            let json = defaultValue
            const val = this.getdata(key)
            if (val) {
                try {
                    json = JSON.parse(this.getdata(key))
                } catch { }
            }
            return json
        }

        setjson(val, key) {
            try {
                return this.setdata(JSON.stringify(val), key)
            } catch {
                return false
            }
        }

        getScript(url) {
            return new Promise((resolve) => {
                this.get({
                    url
                }, (err, resp, body) => resolve(body))
            })
        }

        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
                httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
                let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
                httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
                httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
                const [key, addr] = httpapi.split('@')
                const opts = {
                    url: `http://${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpapi_timeout
                    },
                    headers: {
                        'X-Key': key,
                        'Accept': '*/*'
                    }
                }
                this.post(opts, (err, resp, body) => resolve(body))
            }).catch((e) => this.logErr(e))
        }

        loaddata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath))
                    } catch (e) {
                        return {}
                    }
                } else return {}
            } else return {}
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                const jsondata = JSON.stringify(this.data)
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsondata)
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                }
            }
        }

        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
            let result = source
            for (const p of paths) {
                result = Object(result)[p]
                if (result === undefined) {
                    return defaultValue
                }
            }
            return result
        }

        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj
            if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
            path
                .slice(0, -1)
                .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
                path[path.length - 1]
            ] = value
            return obj
        }

        getdata(key) {
            let val = this.getval(key)
            // 如果以 @
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
                const objval = objkey ? this.getval(objkey) : ''
                if (objval) {
                    try {
                        const objedval = JSON.parse(objval)
                        val = objedval ? this.lodash_get(objedval, paths, '') : val
                    } catch (e) {
                        val = ''
                    }
                }
            }
            return val
        }

        setdata(val, key) {
            let issuc = false
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
                const objdat = this.getval(objkey)
                const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
                try {
                    const objedval = JSON.parse(objval)
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                } catch (e) {
                    const objedval = {}
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                }
            } else {
                issuc = this.setval(val, key)
            }
            return issuc
        }

        getval(key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.read(key)
            } else if (this.isQuanX()) {
                return $prefs.valueForKey(key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                return this.data[key]
            } else {
                return (this.data && this.data[key]) || null
            }
        }

        setval(val, key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.write(val, key)
            } else if (this.isQuanX()) {
                return $prefs.setValueForKey(val, key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                this.data[key] = val
                this.writedata()
                return true
            } else {
                return (this.data && this.data[key]) || null
            }
        }

        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got')
            this.cktough = this.cktough ? this.cktough : require('tough-cookie')
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {}
                if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
                    opts.cookieJar = this.ckjar
                }
            }
        }

        get(opts, callback = () => { }) {
            if (opts.headers) {
                delete opts.headers['Content-Type']
                delete opts.headers['Content-Length']
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient.get(opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                this.got(opts)
                    .on('redirect', (resp, nextOpts) => {
                        try {
                            if (resp.headers['set-cookie']) {
                                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                                if (ck) {
                                    this.ckjar.setCookieSync(ck, null)
                                }
                                nextOpts.cookieJar = this.ckjar
                            }
                        } catch (e) {
                            this.logErr(e)
                        }
                        // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                    })
                    .then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => {
                            const {
                                message: error,
                                response: resp
                            } = err
                            callback(error, resp, resp && resp.body)
                        }
                    )
            }
        }

        post(opts, callback = () => { }) {
            const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
            // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
            if (opts.body && opts.headers && !opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            }
            if (opts.headers) delete opts.headers['Content-Length']
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient[method](opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                opts.method = method
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                const {
                    url,
                    ..._opts
                } = opts
                this.got[method](url, _opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => {
                        const {
                            message: error,
                            response: resp
                        } = err
                        callback(error, resp, resp && resp.body)
                    }
                )
            }
        }
        /**
         *
         * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
         *    :$.time('yyyyMMddHHmmssS')
         *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
         *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
         * @param {string} fmt 格式化参数
         * @param {number} 可选: 根据指定时间戳返回格式化日期
         *
         */
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date()
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
            return fmt
        }

        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts) {
            const toEnvOpts = (rawopts) => {
                if (!rawopts) return rawopts
                if (typeof rawopts === 'string') {
                    if (this.isLoon()) return rawopts
                    else if (this.isQuanX()) return {
                        'open-url': rawopts
                    }
                    else if (this.isSurge()) return {
                        url: rawopts
                    }
                    else return undefined
                } else if (typeof rawopts === 'object') {
                    if (this.isLoon()) {
                        let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
                        let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                        return {
                            openUrl,
                            mediaUrl
                        }
                    } else if (this.isQuanX()) {
                        let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
                        let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                        return {
                            'open-url': openUrl,
                            'media-url': mediaUrl
                        }
                    } else if (this.isSurge()) {
                        let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
                        return {
                            url: openUrl
                        }
                    }
                } else {
                    return undefined
                }
            }
            if (!this.isMute) {
                if (this.isSurge() || this.isLoon()) {
                    $notification.post(title, subt, desc, toEnvOpts(opts))
                } else if (this.isQuanX()) {
                    $notify(title, subt, desc, toEnvOpts(opts))
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }

        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.join(this.logSeparator))
        }

        logErr(err, msg) {
            const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
            if (!isPrintSack) {
                this.log('', `❗️${this.name}, 错误!`, err)
            } else {
                this.log('', `❗️${this.name}, 错误!`, err.stack)
            }
        }

        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }

        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000
            this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
            this.log()
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(val)
            }
        }
    })(name, opts)
}
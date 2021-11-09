/*
ck加密方法
如要加密sqxsck.json，将此脚本和sqxsck.json放在同一目录，node运行此脚本即可生成加密后的sqxsck.txt
此处的key值可以自己设置。
 */

let fs = require('fs');
const crypto = require('crypto');
let key = "123456878"; //12345678,//'315542424',//124342331;


/*解密函数*/
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

/*加密函数*/
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

/*json文件加密示例*/
data = require('./sqxsck.json');
data = JSON.stringify(data);
let encrypted = aesEncrypt(data, key);
fs.writeFile("./sqxsck.txt", encrypted, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

/*字符串加密示例*/
data1 = "需要加密的字符串"
    let encrypted1 = aesEncrypt(data1, key);
console.log(encrypted1 + '\n');

# 用于验证表单form相关的标签对应的value里输入的都是什么值
* 0依赖，支持，amd，commonjs，browser
# 注意
* 主要是用于验证表单form相关的标签对应的value里输入的都是什么值
* 也就是说，是用来验证字符串的
```
const checkStr = require('zhf.check-str');
checkStr.isEmpty(''); // true
checkStr.isZero('0'); // true
checkStr.isNumber('0.01'); // true
checkStr.isPositiveInteger('10'); // true
checkStr.isPositiveInteger('-10'); // false
checkStr.isNegativeInteger('-10'); // true
checkStr.isPositiveFloat('10.000', 3); // true
checkStr.isPhoneNum('15111111111'); // true
checkStr.isEmail('1123486116@qq.com'); // true
checkStr.isIp('192.168.51.93'); // true
checkStr.isUrl('h5.xxx.top'); // true
```

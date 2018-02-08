# 用于验证表单form相关的标签对应的value里输入的都是什么值
* 0依赖，支持，amd，commonjs，browser
# 注意
* 主要是用于验证表单form相关的标签对应的value里输入的都是什么值
* 也就是说，是用来验证字符串的
```
const strType = require('zhf.str-type');
strType.isEmpty(''); // true
strType.isZero('0'); // true
strType.isNumber('0.01'); // true
strType.isPositiveInteger('10'); // true
strType.isPositiveInteger('-10'); // false
strType.isNegativeInteger('-10'); // true
strType.isKeepDecimal('10.000', 3); // true
strType.isPhoneNum('15111111111'); // true
strType.isEmail('1123486116@qq.com'); // true
strType.isIp('192.168.51.93'); // true
```

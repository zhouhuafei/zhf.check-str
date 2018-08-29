# 用于验证表单form相关的标签对应的value里输入的都是什么值
* 0依赖，支持，amd，commonjs，browser
# 注意
* 主要是用于验证表单form相关的标签对应的value里输入的都是什么值
* 也就是说，是用来验证字符串的
* 如果入参不是字符串，会先转成字符串，然后去除字符串的首尾空格，再进行验证。所以是否为空(isEmpty)的检测不适用于密码，因为密码的首尾一般都是可以包含空字符串的。
```
const checkStr = require('zhf.check-str');

checkStr.isEmpty(''); // true
checkStr.isEmpty(' '); // true
checkStr.isEmpty('  '); // true
checkStr.isZero(false); // false
checkStr.isZero(''); // false
checkStr.isZero('0'); // true
checkStr.isZero('-0'); // true
checkStr.isZero('00'); // true
checkStr.isZero('-00'); // true
checkStr.isZero('000'); // true
checkStr.isZero('0.00'); // true
checkStr.isZero('-0.00'); // true
checkStr.isZero('00.00'); // true
checkStr.isZero('-00.00'); // true
checkStr.isNumber('0.01'); // true
checkStr.isNumber('-0.01'); // true
checkStr.isInteger('-0'); // true // 是否是整数
checkStr.isInteger('-1'); // true
checkStr.isInteger('1'); // true
checkStr.isInteger('1.0'); // false
checkStr.isInteger('1.01'); // false
checkStr.isPositiveInteger('0'); // false // 正整数不包含0
checkStr.isPositiveInteger('10'); // true
checkStr.isPositiveInteger('-10'); // false
checkStr.isNegativeInteger('-0'); // false // 负整数不包含0
checkStr.isNegativeInteger('-10'); // true
checkStr.isFloat('0.00', 2); // true // 是否是指定位数的浮点数
checkStr.isFloat('10.000', 3); // true
checkStr.isFloatNoLimitDigit('-10.00000000'); // true // 是否是不限位数的浮点数
checkStr.isFloatNoLimitDigit('10.00000000'); // true
checkStr.isPositiveFloat('', 2); // false // 是否是指定位数的正浮点数
checkStr.isPositiveFloat('呵呵', 2); // false
checkStr.isPositiveFloat('0.00', 2); // false // 正浮点数不包含0
checkStr.isPositiveFloat('0.01', 2); // true
checkStr.isPositiveFloat('10.000', 3); // true
checkStr.isPositiveFloat('-10.000', 3); // false
checkStr.isPositiveFloatNoLimitDigit('10.00000000'); // true // 是否是不限位数的正浮点数
checkStr.isPositiveFloatNoLimitDigit('-10.00000000'); // false
checkStr.isNegativeFloat('', 2); // false // 是否是指定位数的负浮点数
checkStr.isNegativeFloat('呵呵', 2); // false
checkStr.isNegativeFloat('-0.00', 2); // false // 负浮点数不包含0
checkStr.isNegativeFloat('-0.01', 2); // true
checkStr.isNegativeFloat('-10.000', 3); // true
checkStr.isNegativeFloatNoLimitDigit('10.00000000'); // false // 是否是不限位数的负浮点数
checkStr.isNegativeFloatNoLimitDigit('-10.00000000'); // true
checkStr.isPhoneNum('15111111111'); // true // 是否是手机号
checkStr.isPhoneNumEasy('15111111111'); // true // 是否是手机号简单版（11位数即可验证通过）
checkStr.isEmail('1123486116@qq.com'); // true
checkStr.isIp('192.168.51.93'); // true
checkStr.isUrl('h5.xxx.top'); // true
checkStr.isChinese('汉字'); // true // 是否是中文
checkStr.isChinese('english'); // false
checkStr.isEnglish('english'); // true // 是否是英文
checkStr.isEnglish('汉字'); // false
checkStr.isDoubleByteChar('汉字'); // true // 是否是双字节字符(汉字也是双字节字符)
checkStr.isLowercase('english'); // true // 是否小写
checkStr.isLowercase('English'); // false
checkStr.isUppercase('ENGLISH'); // true // 是否大写
checkStr.isUppercase('English'); // false
checkStr.isDate('2018/08/29'); // true // 是否是日期格式
checkStr.isDate('2018-08-29'); // true
checkStr.isTime('19:08:00'); // true // 是否是时间格式
checkStr.isDateTime('2018/08/29 19:08:00'); // true
checkStr.isDateTime('2018-08-29 19:08:00'); // true // 是否是日期时间格式
checkStr.isIdCardNum('23333319930214333X'); // true // 是否是身份证
checkStr.isIdCardNumEasy('233333333333333333'); // true // 是否是身份证简单版
checkStr.isIdCardNumEasy('23333333333333333x'); // true
checkStr.isIdCardNumEasy('23333333333333333X'); // true
checkStr.isPostalCode('201600'); // true // 是否是邮政编码
```

# 用于验证表单form相关的标签对应的value里输入的都是什么值
* 0依赖，支持，amd，commonjs，browser
# 注意
* 主要是用于验证表单form相关的标签对应的value里输入的都是什么值
* 也就是说，是用来验证字符串的
* 如果入参不是字符串，会先转成字符串，然后去除字符串的首尾空格，再进行验证。所以是否为空(isEmpty)的检测不适用于密码，因为密码的首尾一般都是可以包含空字符串的。
    - 不适用于对需要保留首尾空格的字符串进行判定
* 关于数字格式的字符串检测：
    - 正负符号和数字之间有空格就不算是数字了，系统函数```Number('- 99'); // NaN```都不认为这种格式可以转为数字。
    - 所以我也不处理了，如果处理的话，要在符号和数字之间加上\s*进行匹配。
```
const checkStr = require('zhf.check-str');

checkStr.isEmpty(''); // true // 是否是空
checkStr.isEmpty(' '); // true
checkStr.isEmpty('  '); // true
checkStr.isEmpty(null); // false
checkStr.isEmpty(undefined); // false
checkStr.isEmpty(); // false
checkStr.isEmpty(false); // false

checkStr.isZero(null); // false // 是否是0
checkStr.isZero(undefined); // false
checkStr.isZero(); // false
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

checkStr.isNumberDefault('0.00'); // true // 是否是数字(包含0)(有无正符号以及有无多余的0前缀都可验证通过)
checkStr.isNumberDefault('-0.00'); // true
checkStr.isNumberDefault('00.00'); // true
checkStr.isNumberDefault('-00.00'); // true
checkStr.isNumberDefault('+00.00'); // true
checkStr.isNumberDefault('0.01'); // true
checkStr.isNumberDefault('-0.01'); // true
checkStr.isNumberDefault('0010'); // true
checkStr.isNumberDefault('+0010'); // true
checkStr.isNumberDefault('-0010'); // true
checkStr.isNumberDefault('00.10'); // true
checkStr.isNumberDefault('+00.10'); // true
checkStr.isNumberDefault('-00.10'); // true

checkStr.isNumberNoPlusSign('0.01'); // true // 是否是数字(包含0)(无正符号)
checkStr.isNumberNoPlusSign('-0.01'); // true
checkStr.isNumberNoPlusSign('0010'); // true
checkStr.isNumberNoPlusSign('+0010'); // false
checkStr.isNumberNoPlusSign('-0010'); // true
checkStr.isNumberNoPlusSign('00.10'); // true
checkStr.isNumberNoPlusSign('+00.10'); // false
checkStr.isNumberNoPlusSign('-00.10'); // true

checkStr.isNumberNoZeroPrefix(); // false // 是否是数字(包含0)(无多余的0前缀)
checkStr.isNumberNoZeroPrefix(''); // false
checkStr.isNumberNoZeroPrefix('-00.10'); // false
checkStr.isNumberNoZeroPrefix('+00.10'); // false
checkStr.isNumberNoZeroPrefix('-0.10'); // true
checkStr.isNumberNoZeroPrefix('+0.10'); // true
checkStr.isNumberNoZeroPrefix('0.10'); // true
checkStr.isNumberNoZeroPrefix('00.'); // false
checkStr.isNumberNoZeroPrefix('.10'); // false

checkStr.isNumber('0.00'); // true // 是否是数字(包含0)(无正符号)(无多余的0前缀)
checkStr.isNumber('-0.00'); // true
checkStr.isNumber('00.00'); // false
checkStr.isNumber('-00.00'); // false
checkStr.isNumber('+00.00'); // false
checkStr.isNumber('0.01'); // true
checkStr.isNumber('-0.01'); // true
checkStr.isNumber('0010'); // false
checkStr.isNumber('+0010'); // false
checkStr.isNumber('-0010'); // false
checkStr.isNumber('00.10'); // false
checkStr.isNumber('+00.10'); // false
checkStr.isNumber('-00.10'); // false
checkStr.isNumber('0'); // true
checkStr.isNumber('10'); // true
checkStr.isNumber('哈哈'); // false
checkStr.isNumber(''); // false
checkStr.isNumber(); // false

checkStr.isIntegerDefault('-0'); // true // 是否是整数(包含0)(有无正符号以及有无多余的0前缀都可验证通过)
checkStr.isIntegerDefault('-1'); // true
checkStr.isIntegerDefault('1'); // true
checkStr.isIntegerDefault('1.0'); // false
checkStr.isIntegerDefault('1.01'); // false
checkStr.isIntegerDefault('10'); // true
checkStr.isIntegerDefault('+10'); // true
checkStr.isIntegerDefault('++10'); // false
checkStr.isIntegerDefault('-10'); // true
checkStr.isIntegerDefault('--10'); // false
checkStr.isIntegerDefault('0010'); // true
checkStr.isIntegerDefault('+0010'); // true
checkStr.isIntegerDefault('-0010'); // true
checkStr.isIntegerDefault('+ 0010'); // false
checkStr.isIntegerDefault('- 0010'); // false

checkStr.isIntegerNoPlusSign('10'); // true // 是否是整数(包含0)(无正符号)
checkStr.isIntegerNoPlusSign('+10'); // false
checkStr.isIntegerNoPlusSign('++10'); // false
checkStr.isIntegerNoPlusSign('-10'); // true
checkStr.isIntegerNoPlusSign('--10'); // false
checkStr.isIntegerNoPlusSign('0010'); // true
checkStr.isIntegerNoPlusSign('+0010'); // false
checkStr.isIntegerNoPlusSign('-0010'); // true

checkStr.isIntegerNoZeroPrefix('-0'); // true // 是否是整数(包含0)(无多余的0前缀)
checkStr.isIntegerNoZeroPrefix('-1'); // true
checkStr.isIntegerNoZeroPrefix('1'); // true
checkStr.isIntegerNoZeroPrefix('1.0'); // false
checkStr.isIntegerNoZeroPrefix('1.01'); // false
checkStr.isIntegerNoZeroPrefix('10'); // true
checkStr.isIntegerNoZeroPrefix('+10'); // true
checkStr.isIntegerNoZeroPrefix('++10'); // false
checkStr.isIntegerNoZeroPrefix('-10'); // true
checkStr.isIntegerNoZeroPrefix('--10'); // false
checkStr.isIntegerNoZeroPrefix('0010'); // false
checkStr.isIntegerNoZeroPrefix('+0010'); // false
checkStr.isIntegerNoZeroPrefix('-0010'); // false

checkStr.isInteger('-0'); // true // 是否是整数(包含0)(无正符号)(无多余的0前缀)
checkStr.isInteger('-1'); // true
checkStr.isInteger('1'); // true
checkStr.isInteger('1.0'); // false
checkStr.isInteger('1.01'); // false
checkStr.isInteger('10'); // true
checkStr.isInteger('+10'); // false
checkStr.isInteger('++10'); // false
checkStr.isInteger('-10'); // true
checkStr.isInteger('--10'); // false
checkStr.isInteger('0010'); // false
checkStr.isInteger('+0010'); // false
checkStr.isInteger('-0010'); // false

checkStr.isPositiveIntegerDefault('0'); // false // 是否是正整数(不包含0)(有无正符号以及有无多余的0前缀都可验证通过)
checkStr.isPositiveIntegerDefault('10'); // true
checkStr.isPositiveIntegerDefault('+10'); // true
checkStr.isPositiveIntegerDefault('-10'); // false
checkStr.isPositiveIntegerDefault('0010'); // true
checkStr.isPositiveIntegerDefault('+0010'); // true
checkStr.isPositiveIntegerDefault('-0010'); // false

checkStr.isPositiveIntegerNoPlusSign('0'); // false // 是否是正整数(不包含0)(无正符号)
checkStr.isPositiveIntegerNoPlusSign('10'); // true
checkStr.isPositiveIntegerNoPlusSign('+10'); // false
checkStr.isPositiveIntegerNoPlusSign('-10'); // false
checkStr.isPositiveIntegerNoPlusSign('0010'); // true
checkStr.isPositiveIntegerNoPlusSign('+0010'); // false
checkStr.isPositiveIntegerNoPlusSign('-0010'); // false

checkStr.isPositiveIntegerNoZeroPrefix('0'); // false // 是否是正整数(不包含0)(无多余的0前缀)
checkStr.isPositiveIntegerNoZeroPrefix('10'); // true
checkStr.isPositiveIntegerNoZeroPrefix('+10'); // true
checkStr.isPositiveIntegerNoZeroPrefix('-10'); // false
checkStr.isPositiveIntegerNoZeroPrefix('0010'); // false
checkStr.isPositiveIntegerNoZeroPrefix('+0010'); // false
checkStr.isPositiveIntegerNoZeroPrefix('-0010'); // false
checkStr.isPositiveIntegerNoZeroPrefix('10.00'); // false

checkStr.isPositiveInteger('0'); // false // 是否是正整数(不包含0)(无正符号)(无多余的0前缀)
checkStr.isPositiveInteger('10'); // true
checkStr.isPositiveInteger('+10'); // false
checkStr.isPositiveInteger('-10'); // false
checkStr.isPositiveInteger('0010'); // false
checkStr.isPositiveInteger('+0010'); // false
checkStr.isPositiveInteger('-0010'); // false
checkStr.isPositiveInteger('10.00'); // false

checkStr.isNegativeIntegerDefault('-0'); // false // 是否是负整数(不包含0)(有无多余的0前缀都可验证通过)
checkStr.isNegativeIntegerDefault('-10'); // true
checkStr.isNegativeIntegerDefault('0010'); // false
checkStr.isNegativeIntegerDefault('+0010'); // false
checkStr.isNegativeIntegerDefault('-0010'); // true
checkStr.isNegativeIntegerDefault('-1.00'); // false

checkStr.isNegativeInteger('-0'); // false // 是否是负整数(不包含0)(无多余的0前缀)
checkStr.isNegativeInteger('-10'); // true
checkStr.isNegativeInteger('0010'); // false
checkStr.isNegativeInteger('+0010'); // false
checkStr.isNegativeInteger('-0010'); // false
checkStr.isNegativeInteger('-1.00'); // false

checkStr.isFloatDefault('0.00', 2); // true // 是否是浮点数(2位小数点)(包含0)(有无正符号以及有无多余的0前缀都可验证通过)
checkStr.isFloatDefault('10.000', 3); // true // 是否是浮点数(3位小数点)(包含0)(有无正符号以及有无多余的0前缀都可验证通过)
checkStr.isFloatDefault('00.10'); // true // 是否是浮点数(不限位数)(包含0)(有无正符号以及有无多余的0前缀都可验证通过)
checkStr.isFloatDefault('+00.10'); // true
checkStr.isFloatDefault('-00.10'); // true

checkStr.isFloatNoPlusSign('0.00', 2); // true // 是否是浮点数(2位小数点)(包含0)(无正符号)
checkStr.isFloatNoPlusSign('10.000', 3); // true // 是否是浮点数(3位小数点)(包含0)(无正符号)
checkStr.isFloatNoPlusSign('00.10'); // true // 是否是浮点数(不限位数)(包含0)(无正符号)
checkStr.isFloatNoPlusSign('+00.10'); // false
checkStr.isFloatNoPlusSign('-00.10'); // true

checkStr.isFloatNoZeroPrefix('0.00', 2); // true // 是否是浮点数(2位小数点)(包含0)(无多余的0前缀)
checkStr.isFloatNoZeroPrefix('10.000', 3); // true // 是否是浮点数(3位小数点)(包含0)(无多余的0前缀)
checkStr.isFloatNoZeroPrefix('00.10'); // false // 是否是浮点数(不限位数)(包含0)(无多余的0前缀)
checkStr.isFloatNoZeroPrefix('+00.10'); // false
checkStr.isFloatNoZeroPrefix('-00.10'); // false
checkStr.isFloatNoZeroPrefix('+0.10'); // true
checkStr.isFloatNoZeroPrefix('-0.10'); // true

checkStr.isFloat('0.00', 2); // true // 是否是浮点数(2位小数点)(包含0)(无正符号)(无多余的0前缀)
checkStr.isFloat('10.000', 3); // true // 是否是浮点数(3位小数点)(包含0)(无正符号)(无多余的0前缀)
checkStr.isFloat('00.10'); // false // 是否是浮点数(不限位数)(包含0)(无正符号)(无多余的0前缀)
checkStr.isFloat('+00.10'); // false
checkStr.isFloat('-00.10'); // false
checkStr.isFloat('+0.10'); // false
checkStr.isFloat('-0.10'); // true

checkStr.isPositiveFloatDefault('', 2); // false // 是否是正浮点数(2位小数点)(不包含0)(有无正符号以及有无多余的0前缀都可验证通过)
checkStr.isPositiveFloatDefault('呵呵', 2); // false
checkStr.isPositiveFloatDefault('0.00', 2); // false
checkStr.isPositiveFloatDefault('0.01', 2); // true
checkStr.isPositiveFloatDefault('10.000', 3); // true
checkStr.isPositiveFloatDefault('+10.000', 3); // true
checkStr.isPositiveFloatDefault('-10.000', 3); // false

checkStr.isPositiveFloatNoPlusSign('', 2); // false // 是否是正浮点数(2位小数点)(不包含0)(无正符号)
checkStr.isPositiveFloatNoPlusSign('呵呵', 2); // false
checkStr.isPositiveFloatNoPlusSign('0.00', 2); // false
checkStr.isPositiveFloatNoPlusSign('0.01', 2); // true
checkStr.isPositiveFloatNoPlusSign('10.000', 3); // true // 是否是正浮点数(3位小数点)(不包含0)(无正符号)
checkStr.isPositiveFloatNoPlusSign('+10.000', 3); // false
checkStr.isPositiveFloatNoPlusSign('-10.000000'); // false // 是否是正浮点数(不限位数)(不包含0)(无正符号)
checkStr.isPositiveFloatNoPlusSign('10.00000000'); // true
checkStr.isPositiveFloatNoPlusSign('-10.00000000'); // false
checkStr.isPositiveFloatNoPlusSign('-010.00000000'); // false
checkStr.isPositiveFloatNoPlusSign('+10.00000000'); // false
checkStr.isPositiveFloatNoPlusSign('+010.00000000'); // false

checkStr.isPositiveFloatNoZeroPrefix('', 2); // false // 是否是正浮点数(2位小数点)(不包含0)(无多余的0前缀)
checkStr.isPositiveFloatNoZeroPrefix('呵呵', 2); // false
checkStr.isPositiveFloatNoZeroPrefix('0.00', 2); // false
checkStr.isPositiveFloatNoZeroPrefix('0.01', 2); // true
checkStr.isPositiveFloatNoZeroPrefix('10.000', 3); // true // 是否是正浮点数(3位小数点)(不包含0)(无多余的0前缀)
checkStr.isPositiveFloatNoZeroPrefix('+10.000', 3); // true
checkStr.isPositiveFloatNoZeroPrefix('-10.000000'); // false // 是否是正浮点数(不限位数)(不包含0)(无多余的0前缀)
checkStr.isPositiveFloatNoZeroPrefix('10.00000000'); // true
checkStr.isPositiveFloatNoZeroPrefix('-10.00000000'); // false
checkStr.isPositiveFloatNoZeroPrefix('-010.00000000'); // false
checkStr.isPositiveFloatNoZeroPrefix('+10.00000000'); // true
checkStr.isPositiveFloatNoZeroPrefix('+010.00000000'); // false

checkStr.isPositiveFloat('', 2); // false // 是否是正浮点数(2位小数点)(不包含0)(无正符号)(无多余的0前缀)
checkStr.isPositiveFloat('呵呵', 2); // false
checkStr.isPositiveFloat('0.00', 2); // false
checkStr.isPositiveFloat('0.01', 2); // true
checkStr.isPositiveFloat('10.000', 3); // true // 是否是正浮点数(3位小数点)(不包含0)(无正符号)(无多余的0前缀)
checkStr.isPositiveFloat('+10.000', 3); // false
checkStr.isPositiveFloat('-10.000000'); // false // 是否是正浮点数(不限位数)(不包含0)(无正符号)(无多余的0前缀)
checkStr.isPositiveFloat('10.00000000'); // true
checkStr.isPositiveFloat('-10.00000000'); // false
checkStr.isPositiveFloat('-010.00000000'); // false
checkStr.isPositiveFloat('+10.00000000'); // false
checkStr.isPositiveFloat('+010.00000000'); // false

checkStr.isNegativeFloatDefault('', 2); // false // 是否是负浮点数(2位小数点)(不包含0)(有无多余的0前缀都可验证通过)
checkStr.isNegativeFloatDefault('呵呵', 2); // false
checkStr.isNegativeFloatDefault('-0.00', 2); // false
checkStr.isNegativeFloatDefault('-0.01', 2); // true
checkStr.isNegativeFloatDefault('-10.000', 3); // true // 是否是负浮点数(3位小数点)(不包含0)(有无多余的0前缀都可验证通过)
checkStr.isNegativeFloatDefault('10.00000000'); // false // 是否是负浮点数(不限位数)(不包含0)(有无多余的0前缀都可验证通过)
checkStr.isNegativeFloatDefault('-10.00000000'); // true
checkStr.isNegativeFloatDefault('-010.00000000'); // true
checkStr.isNegativeFloatDefault('-0.10.00000000'); // false

checkStr.isNegativeFloat('', 2); // false // 是否是负浮点数(2位小数点)(不包含0)(无多余的0前缀)
checkStr.isNegativeFloat('呵呵', 2); // false
checkStr.isNegativeFloat('-0.00', 2); // false
checkStr.isNegativeFloat('-0.01', 2); // true
checkStr.isNegativeFloat('-10.000', 3); // true // 是否是负浮点数(3位小数点)(不包含0)(无多余的0前缀)
checkStr.isNegativeFloat('10.00000000'); // false // 是否是负浮点数(不限位数)(不包含0)(无多余的0前缀)
checkStr.isNegativeFloat('-10.00000000'); // true
checkStr.isNegativeFloat('-010.00000000'); // false
checkStr.isNegativeFloat('-0.10.00000000'); // false

checkStr.isPhoneNum('15111111111'); // true // 是否是手机号(复杂验证)
checkStr.isPhoneNumEasy('15111111111'); // true // 是否是手机号(简单验证)

checkStr.isEmail('1123486116@qq.com'); // true // 是否是邮箱

checkStr.isIp('192.168.51.93'); // true // 是否是ip地址

checkStr.isUrl('h5.xxx.top'); // true // 是否是网址

checkStr.isChinese('汉字'); // true // 是否是汉字
checkStr.isChinese('english'); // false

checkStr.isEnglish('english'); // true // 是否是英文字母
checkStr.isEnglish('汉字'); // false

checkStr.isDoubleByteChar('汉字'); // true // 是否是双字节字符(汉字也是双字节字符)

checkStr.isLowercase('english'); // true // 是否是小写字母
checkStr.isLowercase('English'); // false

checkStr.isUppercase('ENGLISH'); // true // 是否是大写字母
checkStr.isUppercase('English'); // false

checkStr.isDate('2018/08/29'); // true // 是否是日期格式
checkStr.isDate('2018-08-29'); // true

checkStr.isTime('19:08:00'); // true // 是否是时间格式

checkStr.isDateTime('2018/08/29 19:08:00'); // true // 是否是日期时间格式
checkStr.isDateTime('2018-08-29 19:08:00'); // true

checkStr.isIdCardNum('23333319930214333X'); // true // 是否是身份证号码(复杂验证)

checkStr.isIdCardNumEasy('233333333333333333'); // true // 是否是身份证号码(简单验证)
checkStr.isIdCardNumEasy('23333333333333333x'); // true
checkStr.isIdCardNumEasy('23333333333333333X'); // true

checkStr.isPostalCode('201600'); // true // 是否是邮政编码
```

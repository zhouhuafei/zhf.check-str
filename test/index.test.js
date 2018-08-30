const checkStr = require('../dist/index.min');

test(`checkStr`, () => {
    expect(checkStr.isEmpty('')).toEqual(true); // 是否是空
    expect(checkStr.isEmpty(' ')).toEqual(true);
    expect(checkStr.isEmpty('  ')).toEqual(true);
    expect(checkStr.isEmpty(null)).toEqual(false);
    expect(checkStr.isEmpty(undefined)).toEqual(false);
    expect(checkStr.isEmpty()).toEqual(false);
    expect(checkStr.isEmpty(false)).toEqual(false);

    expect(checkStr.isZero(null)).toEqual(false); // 是否是0
    expect(checkStr.isZero(undefined)).toEqual(false);
    expect(checkStr.isZero()).toEqual(false);
    expect(checkStr.isZero(false)).toEqual(false);
    expect(checkStr.isZero('')).toEqual(false);
    expect(checkStr.isZero('0')).toEqual(true);
    expect(checkStr.isZero('-0')).toEqual(true);
    expect(checkStr.isZero('00')).toEqual(true);
    expect(checkStr.isZero('-00')).toEqual(true);
    expect(checkStr.isZero('000')).toEqual(true);
    expect(checkStr.isZero('0.00')).toEqual(true);
    expect(checkStr.isZero('-0.00')).toEqual(true);
    expect(checkStr.isZero('00.00')).toEqual(true);
    expect(checkStr.isZero('-00.00')).toEqual(true);

    expect(checkStr.isNumber('0.00')).toEqual(true); // 是否是数字(包含0)
    expect(checkStr.isNumber('-0.00')).toEqual(true);
    expect(checkStr.isNumber('00.00')).toEqual(true);
    expect(checkStr.isNumber('-00.00')).toEqual(true);
    expect(checkStr.isNumber('+00.00')).toEqual(true);
    expect(checkStr.isNumber('0.01')).toEqual(true);
    expect(checkStr.isNumber('-0.01')).toEqual(true);
    expect(checkStr.isNumber('0010')).toEqual(true);
    expect(checkStr.isNumber('+0010')).toEqual(true);
    expect(checkStr.isNumber('-0010')).toEqual(true);
    expect(checkStr.isNumber('00.10')).toEqual(true);
    expect(checkStr.isNumber('+00.10')).toEqual(true);
    expect(checkStr.isNumber('-00.10')).toEqual(true);

    expect(checkStr.isNumberNoPlusSign('0.01')).toEqual(true); // 是否是数字(包含0)(无正符号)
    expect(checkStr.isNumberNoPlusSign('-0.01')).toEqual(true);
    expect(checkStr.isNumberNoPlusSign('0010')).toEqual(true);
    expect(checkStr.isNumberNoPlusSign('+0010')).toEqual(false);
    expect(checkStr.isNumberNoPlusSign('-0010')).toEqual(true);
    expect(checkStr.isNumberNoPlusSign('00.10')).toEqual(true);
    expect(checkStr.isNumberNoPlusSign('+00.10')).toEqual(false);
    expect(checkStr.isNumberNoPlusSign('-00.10')).toEqual(true);

    expect(checkStr.isInteger('-0')).toEqual(true); // 是否是整数(包含0)
    expect(checkStr.isInteger('-1')).toEqual(true);
    expect(checkStr.isInteger('1')).toEqual(true);
    expect(checkStr.isInteger('1.0')).toEqual(false);
    expect(checkStr.isInteger('1.01')).toEqual(false);
    expect(checkStr.isInteger('10')).toEqual(true);
    expect(checkStr.isInteger('+10')).toEqual(true);
    expect(checkStr.isInteger('++10')).toEqual(false);
    expect(checkStr.isInteger('-10')).toEqual(true);
    expect(checkStr.isInteger('--10')).toEqual(false);
    expect(checkStr.isInteger('0010')).toEqual(true);
    expect(checkStr.isInteger('+0010')).toEqual(true);
    expect(checkStr.isInteger('-0010')).toEqual(true);

    expect(checkStr.isIntegerNoPlusSign('10')).toEqual(true); // 是否是整数(包含0)(无正符号)
    expect(checkStr.isIntegerNoPlusSign('+10')).toEqual(false);
    expect(checkStr.isIntegerNoPlusSign('++10')).toEqual(false);
    expect(checkStr.isIntegerNoPlusSign('-10')).toEqual(true);
    expect(checkStr.isIntegerNoPlusSign('--10')).toEqual(false);
    expect(checkStr.isIntegerNoPlusSign('0010')).toEqual(true);
    expect(checkStr.isIntegerNoPlusSign('+0010')).toEqual(false);
    expect(checkStr.isIntegerNoPlusSign('-0010')).toEqual(true);

    expect(checkStr.isPositiveInteger('0')).toEqual(false); // 是否是正整数(不包含0)
    expect(checkStr.isPositiveInteger('10')).toEqual(true);
    expect(checkStr.isPositiveInteger('+10')).toEqual(true);
    expect(checkStr.isPositiveInteger('-10')).toEqual(false);
    expect(checkStr.isPositiveInteger('0010')).toEqual(true);
    expect(checkStr.isPositiveInteger('+0010')).toEqual(true);
    expect(checkStr.isPositiveInteger('-0010')).toEqual(false);

    expect(checkStr.isPositiveIntegerNoPlusSign('0')).toEqual(false); // 是否是正整数(不包含0)(无正符号)
    expect(checkStr.isPositiveIntegerNoPlusSign('10')).toEqual(true);
    expect(checkStr.isPositiveIntegerNoPlusSign('+10')).toEqual(false);
    expect(checkStr.isPositiveIntegerNoPlusSign('-10')).toEqual(false);
    expect(checkStr.isPositiveIntegerNoPlusSign('0010')).toEqual(true);
    expect(checkStr.isPositiveIntegerNoPlusSign('+0010')).toEqual(false);
    expect(checkStr.isPositiveIntegerNoPlusSign('-0010')).toEqual(false);

    expect(checkStr.isNegativeInteger('-0')).toEqual(false); // 是否是负整数(不包含0)
    expect(checkStr.isNegativeInteger('-10')).toEqual(true);
    expect(checkStr.isNegativeInteger('0010')).toEqual(false);
    expect(checkStr.isNegativeInteger('+0010')).toEqual(false);
    expect(checkStr.isNegativeInteger('-0010')).toEqual(true);

    expect(checkStr.isFloat('0.00', 2)).toEqual(true); // 是否是浮点数(默认两位)(包含0)
    expect(checkStr.isFloat('10.000', 3)).toEqual(true);
    expect(checkStr.isFloat('00.10')).toEqual(true);
    expect(checkStr.isFloat('+00.10')).toEqual(true);
    expect(checkStr.isFloat('-00.10')).toEqual(true);

    expect(checkStr.isFloatNoPlusSign('0.00', 2)).toEqual(true); // 是否是浮点数(默认两位)(包含0)(无正符号)
    expect(checkStr.isFloatNoPlusSign('10.000', 3)).toEqual(true);
    expect(checkStr.isFloatNoPlusSign('00.10')).toEqual(true);
    expect(checkStr.isFloatNoPlusSign('+00.10')).toEqual(false);
    expect(checkStr.isFloatNoPlusSign('-00.10')).toEqual(true);

    // expect(checkStr.isFloatNoLimitDigit('10.00000000')).toEqual(true); // 是否是浮点数(不限位数)(包含0)
    // expect(checkStr.isFloatNoLimitDigit('-0010.00000000')).toEqual(true);
    // expect(checkStr.isFloatNoLimitDigit('+0010.00000000')).toEqual(true);
    //
    // expect(checkStr.isFloatNoLimitDigitNoPlusSign('10.00000000')).toEqual(true); // 是否是浮点数(不限位数)(包含0)(无正符号)
    // expect(checkStr.isFloatNoLimitDigitNoPlusSign('-0010.00000000')).toEqual(true);
    // expect(checkStr.isFloatNoLimitDigitNoPlusSign('+0010.00000000')).toEqual(false);

    expect(checkStr.isPositiveFloat('', 2)).toEqual(false); // 是否是正浮点数(默认两位)(不包含0)
    expect(checkStr.isPositiveFloat('呵呵', 2)).toEqual(false);
    expect(checkStr.isPositiveFloat('0.00', 2)).toEqual(false);
    expect(checkStr.isPositiveFloat('0.01', 2)).toEqual(true);
    expect(checkStr.isPositiveFloat('10.000', 3)).toEqual(true);
    expect(checkStr.isPositiveFloat('+10.000', 3)).toEqual(true);
    expect(checkStr.isPositiveFloat('-10.000', 3)).toEqual(false);

    expect(checkStr.isPositiveFloatNoPlusSign('', 2)).toEqual(false); // 是否是正浮点数(默认两位)(不包含0)(无正符号)
    expect(checkStr.isPositiveFloatNoPlusSign('呵呵', 2)).toEqual(false);
    expect(checkStr.isPositiveFloatNoPlusSign('0.00', 2)).toEqual(false);
    expect(checkStr.isPositiveFloatNoPlusSign('0.01', 2)).toEqual(true);
    expect(checkStr.isPositiveFloatNoPlusSign('10.000', 3)).toEqual(true);
    expect(checkStr.isPositiveFloatNoPlusSign('+10.000', 3)).toEqual(false);
    expect(checkStr.isPositiveFloatNoPlusSign('-10.000', 3)).toEqual(false);

    // expect(checkStr.isPositiveFloatNoLimitDigit('10.00000000')).toEqual(true); // 是否是正浮点数(不限位数)(不包含0)
    // expect(checkStr.isPositiveFloatNoLimitDigit('-10.00000000')).toEqual(false);
    // expect(checkStr.isPositiveFloatNoLimitDigit('-010.00000000')).toEqual(false);
    // expect(checkStr.isPositiveFloatNoLimitDigit('+10.00000000')).toEqual(true);
    // expect(checkStr.isPositiveFloatNoLimitDigit('+010.00000000')).toEqual(true);
    //
    // expect(checkStr.isPositiveFloatNoLimitDigitNoPlusSign('')).toEqual(false); // 是否是正浮点数(不限位数)(不包含0)(无正符号)
    // expect(checkStr.isPositiveFloatNoLimitDigitNoPlusSign('10.00000000')).toEqual(true);
    // expect(checkStr.isPositiveFloatNoLimitDigitNoPlusSign('-10.00000000')).toEqual(false);
    // expect(checkStr.isPositiveFloatNoLimitDigitNoPlusSign('-010.00000000')).toEqual(false);
    // expect(checkStr.isPositiveFloatNoLimitDigitNoPlusSign('+10.00000000')).toEqual(false);
    // expect(checkStr.isPositiveFloatNoLimitDigitNoPlusSign('+010.00000000')).toEqual(false);

    expect(checkStr.isNegativeFloat('', 2)).toEqual(false); // 是否是指定位数的负浮点数
    expect(checkStr.isNegativeFloat('呵呵', 2)).toEqual(false);
    expect(checkStr.isNegativeFloat('-0.00', 2)).toEqual(false); // 负浮点数不包含0
    expect(checkStr.isNegativeFloat('-0.01', 2)).toEqual(true);
    expect(checkStr.isNegativeFloat('-10.000', 3)).toEqual(true);

    // expect(checkStr.isNegativeFloatNoLimitDigit('10.00000000')).toEqual(false); // 是否是不限位数的负浮点数
    // expect(checkStr.isNegativeFloatNoLimitDigit('-10.00000000')).toEqual(true);

    expect(checkStr.isPhoneNum('15111111111')).toEqual(true); // 是否是手机号(复杂验证)
    expect(checkStr.isPhoneNumEasy('15111111111')).toEqual(true); // 是否是手机号(简单验证)

    expect(checkStr.isEmail('1123486116@qq.com')).toEqual(true); // 是否是邮箱

    expect(checkStr.isIp('192.168.51.93')).toEqual(true); // 是否是ip地址

    expect(checkStr.isUrl('h5.xxx.top')).toEqual(true); // 是否是网址

    expect(checkStr.isChinese('汉字')).toEqual(true); // 是否是汉字
    expect(checkStr.isChinese('english')).toEqual(false);

    expect(checkStr.isEnglish('english')).toEqual(true); // 是否是英文字母
    expect(checkStr.isEnglish('汉字')).toEqual(false);

    expect(checkStr.isDoubleByteChar('汉字')).toEqual(true); // 是否是双字节字符(汉字也是双字节字符)

    expect(checkStr.isLowercase('english')).toEqual(true); // 是否是小写字母
    expect(checkStr.isLowercase('English')).toEqual(false);

    expect(checkStr.isUppercase('ENGLISH')).toEqual(true); // 是否是大写字母
    expect(checkStr.isUppercase('English')).toEqual(false);

    expect(checkStr.isDate('2018/08/29')).toEqual(true); // 是否是日期格式
    expect(checkStr.isDate('2018-08-29')).toEqual(true);

    expect(checkStr.isTime('19:08:00')).toEqual(true); // 是否是时间格式

    expect(checkStr.isDateTime('2018/08/29 19:08:00')).toEqual(true); // 是否是日期时间格式
    expect(checkStr.isDateTime('2018-08-29 19:08:00')).toEqual(true);

    expect(checkStr.isIdCardNum('23333319930214333X')).toEqual(true); // 是否是身份证号码(复杂验证)

    expect(checkStr.isIdCardNumEasy('233333333333333333')).toEqual(true); // 是否是身份证号码(简单验证)
    expect(checkStr.isIdCardNumEasy('23333333333333333x')).toEqual(true);
    expect(checkStr.isIdCardNumEasy('23333333333333333X')).toEqual(true);

    expect(checkStr.isPostalCode('201600')).toEqual(true); // 是否是邮政编码
});

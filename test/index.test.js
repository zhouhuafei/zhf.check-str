const checkStr = require('../dist/index.min');

test(`checkStr.isEmpty`, () => {
    expect(checkStr.isEmpty('')).toEqual(true);
});

test(`checkStr.isZero`, () => {
    expect(checkStr.isZero('0')).toEqual(true);
});

test(`checkStr.isNumber`, () => {
    expect(checkStr.isNumber('0.01')).toEqual(true);
    expect(checkStr.isNumber('-0.01')).toEqual(true);
});

test(`checkStr.isPositiveInteger`, () => {
    expect(checkStr.isPositiveInteger('0')).toEqual(false); // 正整数不包含0
    expect(checkStr.isPositiveInteger('10')).toEqual(true);
    expect(checkStr.isPositiveInteger('-10')).toEqual(false);
});

test(`checkStr.isNegativeInteger`, () => {
    expect(checkStr.isNegativeInteger('-0')).toEqual(false); // 负整数不包含0
    expect(checkStr.isNegativeInteger('-10')).toEqual(true);
});

test(`checkStr.isFloat`, () => {
    expect(checkStr.isFloat('0.00', 2)).toEqual(true); // 是否是指定位数的浮点数
    expect(checkStr.isFloat('10.000', 3)).toEqual(true);
    expect(checkStr.isFloatNoLimitDigit('-10.00000000')).toEqual(true); // 是否是不限位数的浮点数
    expect(checkStr.isFloatNoLimitDigit('10.00000000')).toEqual(true);
});

test(`checkStr.isPositiveFloat`, () => {
    expect(checkStr.isPositiveFloat('', 2)).toEqual(false); // 是否是指定位数的正浮点数
    expect(checkStr.isPositiveFloat('呵呵', 2)).toEqual(false);
    expect(checkStr.isPositiveFloat('0.00', 2)).toEqual(false); // 正浮点数不包含0
    expect(checkStr.isPositiveFloat('0.01', 2)).toEqual(true);
    expect(checkStr.isPositiveFloat('10.000', 3)).toEqual(true);
    expect(checkStr.isPositiveFloat('-10.000', 3)).toEqual(false);
    expect(checkStr.isPositiveFloatNoLimitDigit('10.00000000')).toEqual(true); // 是否是不限位数的正浮点数
    expect(checkStr.isPositiveFloatNoLimitDigit('-10.00000000')).toEqual(false);
});

test(`checkStr.isNegativeFloat`, () => {
    expect(checkStr.isNegativeFloat('', 2)).toEqual(false); // 是否是指定位数的负浮点数
    expect(checkStr.isNegativeFloat('呵呵', 2)).toEqual(false);
    expect(checkStr.isNegativeFloat('-0.00', 2)).toEqual(false); // 负浮点数不包含0
    expect(checkStr.isNegativeFloat('-0.01', 2)).toEqual(true);
    expect(checkStr.isNegativeFloat('-10.000', 3)).toEqual(true);
    expect(checkStr.isNegativeFloatNoLimitDigit('10.00000000')).toEqual(false); // 是否是不限位数的负浮点数
    expect(checkStr.isNegativeFloatNoLimitDigit('-10.00000000')).toEqual(true);
});

test(`checkStr.isPhoneNum`, () => {
    expect(checkStr.isPhoneNum('15111111111')).toEqual(true); // 是否是手机号
    expect(checkStr.isPhoneNumEasy('15111111111')).toEqual(true); // 是否是手机号简单版（11位数即可验证通过）
});

test(`checkStr.isEmail`, () => {
    expect(checkStr.isEmail('1123486116@qq.com')).toEqual(true);
});

test(`checkStr.isIp`, () => {
    expect(checkStr.isIp('192.168.51.93')).toEqual(true);
});

test(`checkStr.isUrl`, () => {
    expect(checkStr.isUrl('h5.xxx.top')).toEqual(true);
});

test(`other`, () => {
    expect(checkStr.isChinese('汉字')).toEqual(true); // 是否是中文
    expect(checkStr.isChinese('english')).toEqual(false);
    expect(checkStr.isEnglish('english')).toEqual(true); // 是否是英文
    expect(checkStr.isEnglish('汉字')).toEqual(false);
    expect(checkStr.isLowercase('english')).toEqual(true); // 是否小写
    expect(checkStr.isLowercase('English')).toEqual(false);
    expect(checkStr.isUppercase('ENGLISH')).toEqual(true); // 是否大写
    expect(checkStr.isUppercase('English')).toEqual(false);
    expect(checkStr.isContainsHtmlTag('<input>')).toEqual(true); // 是否包含html标签
    expect(checkStr.isContainsHtmlTag('<input/>')).toEqual(true);
    expect(checkStr.isContainsHtmlTag('<div>是否包含html标签</div>')).toEqual(true);
    expect(checkStr.isContainsHtmlTag('是否包含html标签</div>')).toEqual(true);
    expect(checkStr.isContainsHtmlTag('是否包含html标签<div></div>是否包含html标签')).toEqual(true);
    expect(checkStr.isContainsHtmlTag('是否包含html标签<>是否包含html标签')).toEqual(false);
    expect(checkStr.isDate('2018/08/29')).toEqual(true); // 是否是日期格式
    expect(checkStr.isDate('2018-08-29')).toEqual(true);
    expect(checkStr.isTime('19:08:00')).toEqual(true); // 是否是时间格式
    expect(checkStr.isDateTime('2018/08/29 19:08:00')).toEqual(true);
    expect(checkStr.isDateTime('2018-08-29 19:08:00')).toEqual(true); // 是否是日期时间格式
    expect(checkStr.isIdCardNum('23333319930214333X')).toEqual(true); // 是否是身份证
    expect(checkStr.isIdCardNumEasy('233333333333333333')).toEqual(true); // 是否是身份证简单版
    expect(checkStr.isIdCardNumEasy('23333333333333333x')).toEqual(true);
    expect(checkStr.isIdCardNumEasy('23333333333333333X')).toEqual(true);
});

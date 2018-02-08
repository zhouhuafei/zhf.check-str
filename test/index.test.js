const strType = require('../dist/index.min');

test(`strType.isEmpty(''); // true`, () => {
    expect(strType.isEmpty('')).toEqual(true);
});

test(`strType.isZero('0'); // true`, () => {
    expect(strType.isZero('0')).toEqual(true);
});

test(`strType.isPositiveInteger('10'); // true`, () => {
    expect(strType.isPositiveInteger('10')).toEqual(true);
});

test(`strType.isPositiveInteger('-10'); // false`, () => {
    expect(strType.isPositiveInteger('-10')).toEqual(false);
});

test(`strType.isKeepDecimal('10.000', 3); // true`, () => {
    expect(strType.isKeepDecimal('10.000', 3)).toEqual(true);
});

test(`strType.isPhoneNum('15551992700'); // true`, () => {
    expect(strType.isPhoneNum('15551992700')).toEqual(true);
});

test(`strType.isEmail('1123486116@qq.com'); // true`, () => {
    expect(strType.isEmail('1123486116@qq.com')).toEqual(true);
});

test(`strType.isIp('192.168.51.93'); // true`, () => {
    expect(strType.isIp('192.168.51.93')).toEqual(true);
});

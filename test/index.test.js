const checkStr = require('../dist/index.min');

test(`checkStr.isEmpty(''); // true`, () => {
    expect(checkStr.isEmpty('')).toEqual(true);
});

test(`checkStr.isZero('0'); // true`, () => {
    expect(checkStr.isZero('0')).toEqual(true);
});

test(`checkStr.isNumber('0.01'); // true`, () => {
    expect(checkStr.isNumber('0.01')).toEqual(true);
});

test(`checkStr.isPositiveInteger('10'); // true`, () => {
    expect(checkStr.isPositiveInteger('10')).toEqual(true);
});

test(`checkStr.isPositiveInteger('-10'); // false`, () => {
    expect(checkStr.isPositiveInteger('-10')).toEqual(false);
});

test(`checkStr.isNegativeInteger('-10'); // true`, () => {
    expect(checkStr.isNegativeInteger('-10')).toEqual(true);
});

test(`checkStr.isFloat('10.000', 3); // true`, () => {
    expect(checkStr.isFloat('10.000', 3)).toEqual(true);
});

test(`checkStr.isPositiveFloat('-10.000', 3); // false`, () => {
    expect(checkStr.isPositiveFloat('-10.000', 3)).toEqual(false);
});

test(`checkStr.isNegativeFloat('-10.000', 3); // true`, () => {
    expect(checkStr.isNegativeFloat('-10.000', 3)).toEqual(true);
});

test(`checkStr.isPhoneNum('15111111111'); // true`, () => {
    expect(checkStr.isPhoneNum('15111111111')).toEqual(true);
});

test(`checkStr.isEmail('1123486116@qq.com'); // true`, () => {
    expect(checkStr.isEmail('1123486116@qq.com')).toEqual(true);
});

test(`checkStr.isIp('192.168.51.93'); // true`, () => {
    expect(checkStr.isIp('192.168.51.93')).toEqual(true);
});

test(`checkStr.isUrl('h5.xxx.top'); // true`, () => {
    expect(checkStr.isUrl('h5.xxx.top')).toEqual(true);
});

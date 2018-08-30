'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('checkStr', function () {
    function handleValue(value) {
        // return value.toString().replace(/(^\s*)|(\s*$)/g, '');
        // return value.toString().trim(); // 去首尾空格，null和undefined没有toString方法也没有valueOf方法
        return String(value).trim(); // 去首尾空格
    }

    return {
        // 是否是空
        isEmpty: function isEmpty(value) {
            return handleValue(value) === '';
        },

        // 是否是0
        isZero: function isZero(value) {
            value = handleValue(value);
            if (value !== '') {
                value = Number(value).toString();
            }
            return value === '0';
        },

        // 是否是数字(包含0)
        isNumber: function isNumber(value) {
            var reg = /^[-+]?\d+(\.\d+)?$/;
            return reg.test(handleValue(value));
        },

        // 是否是数字(包含0)(无正符号)
        isNumberNoPlusSign: function isNumberNoPlusSign(value) {
            var reg = /^[-]?\d+(\.\d+)?$/;
            return reg.test(handleValue(value));
        },

        // 是否是数字(包含0)(无多余的0前缀)
        isNumberNoZeroPrefix: function isNumberNoZeroPrefix(value) {
            value = handleValue(value); // 转成字符串并去除首尾空格
            var reg = /^[-+]?\d+(\.\d+)?$/;
            var isNumber = reg.test(value); // 先通过数字的验证
            if (isNumber && (value[0] === '+' || value[0] === '-')) {
                // 剔除符号（+，-）
                value = value.substring(1);
            }
            return value.split('.')[0].length > 0 && value[0] !== '0'; // 如果小数点前面的数字位数大于1，且第一个数字不是0，则表示无0前缀。
        },

        // 是否是整数(包含0)
        isInteger: function isInteger(value) {
            var reg = /^[-+]?\d+$/;
            return reg.test(handleValue(value));
        },

        // 是否是整数(包含0)(无正符号)
        isIntegerNoPlusSign: function isIntegerNoPlusSign(value) {
            var reg = /^(-)?\d+$/;
            return reg.test(handleValue(value));
        },

        // 是否是正整数(不包含0)
        isPositiveInteger: function isPositiveInteger(value) {
            var reg = /^[+]?0*[1-9]\d*$/;
            return reg.test(handleValue(value));
        },

        // 是否是正整数(不包含0)(无正符号)
        isPositiveIntegerNoPlusSign: function isPositiveIntegerNoPlusSign(value) {
            var reg = /^0*[1-9]\d*$/;
            return reg.test(handleValue(value));
        },

        // 是否是负整数(不包含0)
        isNegativeInteger: function isNegativeInteger(value) {
            var reg = /^-0*[1-9]\d*$/;
            return reg.test(handleValue(value));
        },

        // 是否是浮点数(默认两位)(包含0)
        isFloat: function isFloat(value) {
            var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var reg = new RegExp('^[-+]?\\d+\\.\\d{' + place + '}$');
            return reg.test(handleValue(value));
        },

        // 是否是浮点数(默认两位)(包含0)(无正符号)
        isFloatNoPlusSign: function isFloatNoPlusSign(value) {
            var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var reg = new RegExp('^[-]?\\d+\\.\\d{' + place + '}$');
            return reg.test(handleValue(value));
        },

        // 是否是浮点数(不限位数)(包含0)
        isFloatNoLimitDigit: function isFloatNoLimitDigit(value) {
            var reg = new RegExp('^[-+]?\\d+\\.\\d+$');
            return reg.test(handleValue(value));
        },

        // 是否是浮点数(不限位数)(包含0)(无正符号)
        isFloatNoLimitDigitNoPlusSign: function isFloatNoLimitDigitNoPlusSign(value) {
            var reg = new RegExp('^[-]?\\d+\\.\\d+$');
            return reg.test(handleValue(value));
        },

        // 是否是正浮点数(默认两位)(不包含0)
        isPositiveFloat: function isPositiveFloat(value) {
            var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var reg = new RegExp('^[+]?\\d+\\.\\d{' + place + '}$');
            var v = handleValue(value);
            if (Number(v) === 0) {
                return false;
            }
            return reg.test(v);
        },

        // 是否是正浮点数(默认两位)(不包含0)(无正符号)
        isPositiveFloatNoPlusSign: function isPositiveFloatNoPlusSign(value) {
            var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var reg = new RegExp('^\\d+\\.\\d{' + place + '}$');
            var v = handleValue(value);
            if (Number(v) === 0) {
                return false;
            }
            return reg.test(v);
        },

        // 是否是正浮点数(不限位数)(不包含0)
        isPositiveFloatNoLimitDigit: function isPositiveFloatNoLimitDigit(value) {
            var reg = new RegExp('^[+]?\\d+\\.\\d+$');
            var v = handleValue(value);
            if (Number(v) === 0) {
                return false;
            }
            return reg.test(v);
        },

        // 是否是正浮点数(不限位数)(不包含0)(无正符号)
        isPositiveFloatNoLimitDigitNoPlusSign: function isPositiveFloatNoLimitDigitNoPlusSign(value) {
            var reg = new RegExp('^\\d+\\.\\d+$');
            var v = handleValue(value);
            if (Number(v) === 0) {
                return false;
            }
            return reg.test(v);
        },

        // 是否是负浮点数(默认两位)(不包含0)
        isNegativeFloat: function isNegativeFloat(value) {
            var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var reg = new RegExp('^-\\d+\\.\\d{' + place + '}$');
            var v = handleValue(value);
            if (Number(v) === 0) {
                return false;
            }
            return reg.test(v);
        },

        // 是否是负浮点数(不限位数)(不包含0)
        isNegativeFloatNoLimitDigit: function isNegativeFloatNoLimitDigit(value) {
            var reg = new RegExp('^-\\d+\\.\\d+$');
            var v = handleValue(value);
            if (Number(v) === 0) {
                return false;
            }
            return reg.test(v);
        },

        // 是否是手机号(复杂验证)
        isPhoneNum: function isPhoneNum(value) {
            var reg = /^1[3456789]\d{9}$/;
            return reg.test(handleValue(value));
        },

        // 是否是手机号(简单验证)
        isPhoneNumEasy: function isPhoneNumEasy(value) {
            var reg = /^1\d{10}$/;
            return reg.test(handleValue(value));
        },

        // 是否是邮箱
        isEmail: function isEmail(value) {
            var reg = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;
            return reg.test(handleValue(value));
        },

        // 是否是ip地址
        isIp: function isIp(value) {
            var reg = /^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-5][0-5])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/;
            return reg.test(handleValue(value));
        },

        // 是否是身份证号码(复杂验证)
        isIdCardNum: function isIdCardNum(value) {
            var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
            return reg.test(handleValue(value));
        },

        // 是否是身份证号码(简单验证)
        isIdCardNumEasy: function isIdCardNumEasy(value) {
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 简单判定
            return reg.test(handleValue(value));
        },

        // 是否是汉字
        isChinese: function isChinese(value) {
            var reg = /^[\u4e00-\u9fa5]+$/;
            return reg.test(handleValue(value));
        },

        // 是否是英文字母
        isEnglish: function isEnglish(value) {
            var reg = /^[a-zA-Z]+$/;
            return reg.test(handleValue(value));
        },

        // 是否是双字节字符(汉字也是双字节字符)
        isDoubleByteChar: function isDoubleByteChar(value) {
            // 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。
            // const reg = /^[^\x20-\xff]+$/; // eslint推荐这么使用，我关闭了eslint针对这个的检测
            var reg = /^[^\x00-\xff]+$/;
            return reg.test(handleValue(value));
        },

        // 是否是小写字母
        isLowercase: function isLowercase(value) {
            var reg = /^[a-z]+$/;
            return reg.test(handleValue(value));
        },

        // 是否是大写字母
        isUppercase: function isUppercase(value) {
            var reg = /^[A-Z]+$/;
            return reg.test(handleValue(value));
        },

        // 是否是网址
        isUrl: function isUrl(value) {
            var reg = /^(?:http(?:s|):\/\/|)(?:(?:\w*?)\.|)(?:\w*?)\.(?:\w{2,4})(?:\?.*|\/.*|)$/;
            return reg.test(handleValue(value));
        },

        // 是否是邮政编码
        isPostalCode: function isPostalCode(value) {
            var reg = /^[1-9]\d{5}$/;
            return reg.test(handleValue(value));
        },

        // 是否是日期格式
        isDate: function isDate(value) {
            var reg = /(^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$)|(^[1-9]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$)/;
            return reg.test(handleValue(value));
        },

        // 是否是时间格式
        isTime: function isTime(value) {
            var reg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
            return reg.test(handleValue(value));
        },

        // 是否是日期时间格式
        isDateTime: function isDateTime(value) {
            var reg = /^([1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|([1-9]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1]))\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
            return reg.test(handleValue(value));
        }
    };
});
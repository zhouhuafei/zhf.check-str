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
        window[name] = factory();
    }
})('is', function () {
    return {
        // 是不是空
        isEmpty: function isEmpty(value) {
            return value.toString().trim() === '';
        },

        // 是不是0
        isZero: function isZero(value) {
            return value.toString().trim() === '0';
        },

        // 是不是数字
        isNumber: function isNumber(value) {
            var reg = /^\d+$/;
            return reg.test(value);
        },

        // 是不是正整数
        isPositiveInteger: function isPositiveInteger(value) {
            var reg = /^[1-9]\d*$/;
            return reg.test(value);
        },

        // 是不是负整数
        isNegativeInteger: function isNegativeInteger(value) {
            var reg = /^-[1-9]\d*$/;
            return reg.test(value);
        },

        // 是不是保留了place位小数(默认两位)
        isKeepDecimal: function isKeepDecimal(value) {
            var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var reg = new RegExp('^\\d+\\.\\d{' + place + '}$');
            return reg.test(value);
        },

        // 是不是手机号
        isPhoneNum: function isPhoneNum(value) {
            var reg = /^1[34578]\d{9}$/;
            return reg.test(value);
        },

        // 是不是邮箱
        isEmail: function isEmail(value) {
            var reg = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            return reg.test(value);
        },

        // 是不是ip地址
        isIp: function isIp(value) {
            var reg = /^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-5][0-5])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/;
            return reg.test(value);
        }
    };
});
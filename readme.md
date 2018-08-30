# 用于验证表单form相关的标签对应的value里输入的都是什么值
* 0依赖，支持，amd，commonjs，browser
# 注意
* 主要是用于验证表单form相关的标签对应的value里输入的都是什么值
* 也就是说，是用来验证字符串的
* 如果入参不是字符串，会先转成字符串，然后去除字符串的首尾空格，再进行验证。所以是否为空(isEmpty)的检测不适用于密码，因为密码的首尾一般都是可以包含空字符串的。
```
const checkStr = require('zhf.check-str');


```

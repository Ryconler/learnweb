/* parseInt()将字符串转化为10进制整数 */
console.log(parseInt('12px'));
console.log(parseInt('0xf'));  //自动检测到是16进制的字符串=15
console.log(parseInt('0xf',16));  //限制只识别16进制数=15
console.log(parseInt('0xf',10));  //限制只识别10进制数=0
console.log(parseInt('010'));  // 不能检测到是8进制字符串=10
console.log(parseInt('010',8));  //手动限制只识别8进制数=8
/* parseFloat()将字符串转化为10进制浮点 */
console.log(parseFloat('1.23px'));  //只能识别10进制浮点数
/* isNaN()检测是否不是数字*/
console.log(isNaN(NaN));  //=true
/* isFinite()检测是否有限 */
console.log(isFinite(Infinity));  //是否有限=false
console.log(isFinite(Number.MAX_VALUE));  //是否有限=true
/* encodeURIComponent()decodeURIComponent()对URI编解码 */
console.log(encodeURIComponent('http://www.web.com?a=中文&&b=english')); //将URI编码为Unicode
console.log(decodeURIComponent('http%3A%2F%2Fwww.web.com%3Fa%3D%E4%B8%AD%E6%96%87%26%26b%3Denglish')); //将Unicode解码为URI
/* eval()将字符串解析为js来执行 */
eval('console.log(1)') //等于console.log(1)



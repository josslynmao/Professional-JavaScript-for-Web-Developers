var octalNum = "070";
var message;
var num = "0.78.45";
alert(typeof(octalNum));//typeof显示类型
alert(message == undefined);//未初始化变量默认值为undefined
alert(Boolean(octalNum));
alert(Boolean(message));
alert(Number(octalNum));//将字符串转换为数字
alert(parseInt(octalNum , 8));//将字符串转换为为二进制整数（转换成2进制就出问题了，和第一个0有关系？）
alert(parseFloat(num));//将字符串转换为小数
window.onload;
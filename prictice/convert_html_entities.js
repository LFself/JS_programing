function convertHTML(str) {
//正则表达式替换相应字符，
  str=str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
  return str;
}

convertHTML("Dolce <&  Gabbana");

//方法2，str.split("")分割为数组，switch循环查找替换，最后str.join("")合并

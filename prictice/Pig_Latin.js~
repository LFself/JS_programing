function translatePigLatin(str) {
  var vowelEle=/[aeiou]/gi;  //正则表达式表示含aeiou的变量
  if(str[0].match(vowelEle))  //判断首字符是否为元音，用match函数
    return str+"way";
  else
  {//str.match()[0]用来寻找第一个非0的元音元素，indexOf()用于返回元素所在位置
    //conNumber计算辅音的个数
    var conNumber=str.indexOf(str.match(vowelEle)[0]);    
    //str.substring()从下标处开始，取指定字符
   return str.substring(conNumber)+str.substring(0,conNumber)+"ay";
    //注：数组下标由0开始
  }
}

translatePigLatin("consonant");

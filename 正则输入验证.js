
#dairyNotes

<script type = "text/javascript">
   
   /**
   *判断输入框中的值只能输入数字
   * @param  string val 输入框的值
   * @return boolean
   */
  function isNum(val) {
      var flag = true; //控制返回值
      var reg = /\d/gi; //正则表达式
      var len = 0;
      val = $.trim(val); //滤掉值两边的空格
      if (val.match(reg) != null) {
          len = val.match(reg).length;
      }

      if (len != val.length || len === 0) {
          flag = false;
      }
      return flag;
  }
/**
*判断输入框中的值只能输入中文字符
*@param string val 输入框的值
*return boolean
*/
 function isNum(val) {
      var flag = true; //控制返回值
      var reg = /[\u4e00-\u9fa5]/gi; //正则表达式
      var len = 0;
      val = $.trim(val); //滤掉值两边的空格
      if (val.match(reg) != null) {
          len = val.match(reg).length;
      }

      if (len != val.length || len === 0) {
          flag = false;
      }
      return flag;
  }

  
</script>


#dairyNotes
#判断某个控件的值必须为数字(jq)

<script type = "text/javascript">
   /**
   * @param  {控件的val值}
   * @return {Boolean}
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
  
</script>

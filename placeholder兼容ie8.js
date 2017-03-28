
  <!-- input的type为password的时候的html代码 -->
  <input type="password" class="password inputTxt" id="password" name="password" placeholder="请输入您的管理员密码">
  <input type="text" class="password inputTxt" style="display: none;color: #a9a99a;font-size: 14px;" value="请输入您的管理员密码">


<script type="text/javascript">
   /**
     * 兼容ie8中的input的type为text或者textarea的placeholder,input的type为password的时候进行特殊处理，
     * 在页面加载的时候，用text进行代替，输入密码的时候用password代替（因为ie8不可修改type的属性值）
     * @param string id 元素的id值
     * @param string color 提示字的颜色
     */
    var placeholder = function(id, color) {

        //判断浏览器是否支持placeholder的属性,返回值是true or false
        var isPlaceholder = 'placeholder' in document.createElement('input');

        // alert(isPlaceholder);

        if (!isPlaceholder) {

            //获取input输入框中的placeholder的属性值
            var placeVal = $.trim($(id).attr('placeholder'));

            var inpType = $.trim($(id).attr('type'));

            if (inpType === 'password') {
                //当输入框的type为password的时候
                // alert('111')

                $(id).hide();
                $(id).next().show();

                $(id).focus(function(){
                    $(this).val('');
                });

                //鼠标聚焦
                $(id).next().focus(function() {
                    $(this).hide();
                    $(this).prev('#password').show().focus();
                });

                //鼠标失去焦点
                $(id).blur(function() {
                    if ($.trim($(this).val()) === '') {
                        $(this).hide();
                        $(this).next().show();
                    }
                });

            } else {

                //其他普通输入框或者textarea

                $(id).val(placeVal);
                $(id).css('color', color);

                //鼠标进性聚焦的时候
                $(id).focus(function() {
                    if ($.trim($(this).val()) === placeVal) {
                        $(this).val('');
                        $(this).css('color', '#000');
                    }
                });

                //鼠标失去焦点
                $(id).blur(function() {

                    if ($.trim($(this).val()) === '') {
                        $(this).val(placeVal);
                        $(this).css('color', color);
                    }
                });
            }
        }
    };
</script>

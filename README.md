# dairyNotes
#通过递归遍历获取嵌套iframe中的dom元素(jquery编写)

<script type = "text/javascript">
/**
 * @param  {[框架]}
 * @param  {[选择器]}
 * @return {[dom元素]}
 */
    var elem = null;	//保存找到的dom元素
    var flag = true;  //跳出循环的变量控制
    function getFrameDocument(iframe, selector) {
        var frames = iframe.frames;
        // console.log("the length:    " + frames.length);
        if (frames.length > 0) {
            for (let i = 0; i < frames.length; i++) {
                // console.log("i的值为 :  " + i);
                //flag的值为false时，跳出外层的所有循环
                if (flag === false) {
                    break;
                }

                if ($(frames[i].document).find(selector).size() > 0) {
                    // console.log("找到了");
                    // console.log($(frames[i].document).find(selector));
                    elem = $(frames[i].document).find(selector);
                    flag = false;	//找到dom元素时，将flag设置为false
                    break;	//跳出本层循环
                }
                getFrameDocument(frames[i], selector);	//递归调用
            }
        }
        return elem;
    }
    var a = getFrameDocument(top, "#hellojavascript");
    console.log(a[0]);
</script>

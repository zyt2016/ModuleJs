<script type="text/javascript">
/**
 * 添加事件处理函数
 * @param domElement   obj      dom元素
 * @param string   type     点击事件类型 例如：click
 * @param function callback 事件处理函数
 * @param array    params   给回调函数的传递的参数
 */
function addEventHandle(obj, type, callback, params = []) {
    //ff除ie以外的浏览器
    if (window.addEventListener) {
        //参数最后一个为事件模型参数，true为事件捕获模型，false为事件冒泡模型（默认）
        obj.addEventListener(type, function() {
            callback(params);
        }, false);
    } else {
        //ie浏览器
        obj.attachEvent('on' + type, function() {
            callback(params);
        });
    }
}

/**
 * 移除事件
 * @param  string   obj      dom元素
 * @param  string   type     事件类型，例如：click
 * @param  function callback 回调函数
 */
function removeEventHandle(obj, type, callback, params = []) {

    //ff除ie以外的浏览器
    if (window.addEventListener) {
        //参数最后一个为事件模型参数，true为事件捕获模型，false为事件冒泡模型（默认）
        obj.removeEventListener(type, function() {
            callback(params);
        }, false);
    } else {
        //ie浏览器
        obj.detachEvent('on' + type, function() {
            callback(params);
        });
    }

}

/**
 * 阻止事件冒泡
 * @param  event event 事件对象，在ie浏览器中，event是作为属性存在，在其他浏览器中，
 * event通过function(event){}存在
 */
function stopBubbleEvent(event) {
    var eve = event || window.event; //得到事件对象
    var eventSource = eve.target || eve.srcElement; //得到事件源

    if (window.event) {
        //ie浏览器
        eve.cancleBubble = true;
    } else {
        eve.stopPropagation();
    }
}

/**
 * 阻止元素的默认行为
 * @param  event event 事件对象
 */
function stopDefaultEvent(event) {

    var eve = event || window.event;
    if (window.event) {
        //ie浏览器
        eve.returnValue = false;
    } else {
        eve.preventDefault();
    }

}
</script>

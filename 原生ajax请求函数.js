<script type = "text/javascript">
    /**
     * ajax请求需要的参数列表
     * @type obj
     */
    var ajaxPar = {
        url: '',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(response, xml) {
            //此处放成功后执行的代码
        },
        fail: function(status) {
            //此处放失败后执行的代码
        }

    };


    function ajax(ajaxObj) {

        var type = ajaxObj.toUpperCase();
        var params = convertToKeyVal(ajaxObj.data);

        //第一步：创建XMLHttpRequest对象
        var xhr = null;
        xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new activeXObject('Microsoft.XMLHTTP');

        //第二步：连接服务器和发送请求
        //参数依次为：请求的类型，请求的url，是否异步请求
        if (type === 'GET') {

            //GET可用于任何数据类型的提交
            xhr.open(type, ajaxObj.url + '?' + params, true);
            xhr.send(null);
        } else if (type === 'POST') {

            //POST只能用于表单提交
            xhr.open(type, ajaxObj.url, true);
            //设置表单提交时的内容类型
            xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
            xhr.send(params);
        }

        //第三步：接收数据
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var status = xhr.satatus;
                status === 200 ? ajax.success(xhr.responseText, xhr.responseXML) : ajax.fail(status);
            }
        };


    }

    function convertToKeyVal(obj) {
        var arr = [];
        for (var ele in obj) {
            //encodeURIComponent：因为url中不能存在空格符之类的，所以要进行编码转换
            arr.push(encodeURIComponent(ele) + '=' + encodeURIComponent(obj[ele]));
        }
        arr.push(("v=" + Math.random()).replace(".", "")); //防止缓存
        return arr.join('&');
    }
</script>

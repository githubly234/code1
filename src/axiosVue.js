import Vue from "vue"
import axios from 'axios'
import querystring from "querystring"

//配置请求的根路径
axios.defaults.baseURL = 'http://localhost:4000/';
//配置post请求头
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.withCredentials=true;






new Vue({
    el: "#app",
    data: {

    },
    methods: {
        testGet() {
            //发送get请求
            axios.get("/api/getnewslist", {
                    //get请求参数，该参数会拼接在url后面
                    //http://localhost:4000/api/getnewslist?pageIndex=1&pagenum=2
                    params: {
                        pageIndex: 1,
                        pagenum: 2
                    }
                })
                .then((response) => {
                    console.log(response)
                })

                //当请求中有异常 用catch
                .catch(function (error) {
                    console.log(error);
                });
        },
        //post请求 新增一个品牌
        //post请求头

        // Content-Type：application/json：请求体中的数据会以json字符串得形式发送到后端
        //Content-Type：application/x-www-form-urlencoded:请求体中的数据会以普通表单形式（键值对）发送到后端
        //Content-Type：multipart/form-data：它会将请求体的数据处理为一条消息，以标签为单元，用分隔符分开。即可以上传键值对，也可以上传文件
        testPost() {
            //如果我们发送的请求是post请求并且向服务器以表单形式提交数据，我们要做两件事：
            //1.设置请求头为：axios.defaults.hearders.post['Content-Type']='application/x-www-form-urlencoded';
            //2.把请求参数通过querystring.stringify转换一下，得到右边的数据‘name=李宁&id=1001’
            // console.log(querystring.stringify({
            //     name:"李宁",
            //     id:'1001'
            // }))
            console.log(axios,"000000000000000000000000")
            axios.post("/api/news/new", querystring.stringify({
                    name: "李宁",
                    id: '1001'
                }))
                .then((response) => {
                    console.log(response)
                })
        }
    }
})
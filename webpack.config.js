const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',
    entry: __dirname + "/app/main.js", //入口文件
    output:{
        path: __dirname + "/build",//打包后的存放文件的文件夹
        filename: "bundle-[hash].js" //打包后的输出的文件
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true,//HotModuleReplacementPlugin插件实现热加载
        port:8989
    },
    module:{
        rules:[{
            test:/(\.jsx|js)$/,
            use:{
                loader:"babel-loader",
            },
            exclude:/node_modules/
        },{
                test: /(\.scss|\.css)$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options:{
                            modules:true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        //new webpack.HotModuleReplacementPlugin()//热加载插件 "server": "webpack-dev-server --open --hot" 配置了--hot就不需要显示的写出当前插件
    ]
}
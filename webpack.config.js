module.exports = {
    devtool:'eval-source-map',
    entry: __dirname + "/app/main.js", //入口文件
    output:{
        path: __dirname + "/public",//打包后的存放文件的文件夹
        filename: "bundle.js" //打包后的输出的文件
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
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
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
}
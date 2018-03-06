var webpack= require("webpack");

module.exports={
    entry:{
        bundle:[ "./src/app.js"]
    },
    output:{
        path:__dirname,
        publicPath:"/",
        filename:"dist/[name].js"
    },
    module:{
        loaders:[
            {test: /\.html$/, loaders: ['html-loader']},
            {test: /(\.js)$/, loader:["babel-loader"] ,exclude:/node_modules/},
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve:{
        alias: {
            vue$:'vue/dist/vue.js'
        }
    },
    plugins:[
         /* 
         new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
               */
    ],
    devServer:{
        host:"localhost",
        contentBase:__dirname,
        port:"8000",
        inline:true
    },
    watchOptions:{
        poll:1000,//监测修改的时间(ms)
        aggregeateTimeout:500, //防止重复按键，500毫秒内算按键一次
        ignored:/node_modules/,//不监测
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}


//用来做热启动，通过命令"webpack-dev-server"可以让改的代码立马生效不用一直每次都跑一下命令"webpack"
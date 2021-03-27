const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    mode: 'development',
    entry:{
        app: path.join(__dirname, 'main.js'),
    },
    resolve:{
        extensions:['.js', '.vue'],
    },
    module:{
        rules:[{
            test: /\.vue$/,
            use: 'vue-loader',
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename:'[name].js',
        path: path.join(__dirname, 'build'),
    },
}
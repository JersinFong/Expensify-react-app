const path = require('path');
//set up entry -> output path
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    //add babel, let webpack use babel to compile
    //so that we can use JSX expression and ES6 features
    module:{
        rules:[{
            loader: 'babel-loader',
            //support js files;
            test: /\.js$/,
            //ignore modules
            exclude: /node_modules/
        },{
            //support css and scss file and loader
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //set up webpack source map, add it to dev tool in chrome
    devtool: 'cheap-module-eva-source-map',
    //set up webpack dev server
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        //set up client side router
        historyApiFallback: true,
    }       
};
var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

var browserConfig = {
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true",
            __PRODUCTION__ : JSON.stringify(false) 
        })
    ]
};

var serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: "server.js",
        publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false",
            __PRODUCTION__ : JSON.stringify(false) 
        })
    ]
};

module.exports = [browserConfig, serverConfig];

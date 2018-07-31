const path = require( 'path' );
const merge = require( 'webpack-merge' );
const webpack = require( 'webpack' );
const commonConfig = require( './webpack.config' );

const devConfig = {
    devtool: 'cheap-eval-source-map',
    devServer: {
        port: "3000",
        host: "localhost",
        historyApiFallback: true,
        noInfo: false,
        stats: "minimal"
    }
};

module.exports = merge( commonConfig, devConfig );


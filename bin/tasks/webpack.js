const path = require( 'path' );
const chalk = require( 'chalk' );
const webpack = require( 'webpack' );
const buildenv = process.argv[ 2 ];
const config = {
    dev: {
        devtool: 'source-map',
        entry: {
            path: './src/js/main.js'
        },
        output: {
            path: './build/js/',
            filename: 'main.js',
            sourceMapFilename: '[file].map'
        },
        module: {
            loaders: [ {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015',
                exclude: path.resolve( __dirname, 'node_modules' )
            } ]
        }

    },
    production: {
        entry: {
            path: './src/js/main.js'
        },
        output: {
            path: './build/js/',
            filename: 'main.js'
        },
        module: {
            loaders: [ {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015',
                exclude: path.resolve( __dirname, 'node_modules' )
            } ]
        }

    }
}

const compiler = webpack( buildenv === 'production' ? config.production : config.dev );

compiler.run( ( err, stats ) => {
    if ( err ) {
        console.log( 'webpack:build', err );
        console.log( chalk.white.bgGreen.bold( 'Webpack JS Compliation Complete!' ) );
    }
    console.log( '[webpack:build]', stats.toString( {
        chunks: true,
        colors: true
    } ) );
} );

const fs = require( 'fs-extra' );
const chalk = require( 'chalk' )
const sass = require( 'node-sass' );

sass.render( {
    file: './src/sass/main.scss',
    outFile: './build/main.css',
    //includePaths: [ 'lib/', 'mod/' ],
    outputStyle: 'compressed',
    sourceMap: true
}, ( error, result ) => {
    if ( error ) {
        console.log( chalk.white.bgRed.bold( 'Sass Compliation' ) );
        console.log( chalk.white.bold( error.formatted ) );
    } else {
        fs.outputFile( './build/css/main.css', result.css, err => {
            if ( err ) {
                console.log( chalk.white.bgRed.bold( 'Error writing css file!' ) );
            } else {
                console.log( chalk.white.bgGreen.bold( 'Sass Compliation Complete!' ) );
            }
        } );
    }
} );

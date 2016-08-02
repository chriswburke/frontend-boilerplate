const chalk = require( 'chalk' )
const rimraf = require( 'rimraf' );

rimraf( './build/**/*', {
    rmdir: false
}, function ( err ) {
    console.log( chalk.white.bgGreen.bold( 'Build Directory Cleaned' ) );
} );

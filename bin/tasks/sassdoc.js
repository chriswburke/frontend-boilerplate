const sassdoc = require( 'sassdoc' );
const chalk = require( 'chalk' );

sassdoc( './src/sass', {
        dest: './docs/sass',
        verbose: true
    } )
    .then( function () {
        console.log( 'Your documentation has been generated!' );
    }, function ( err ) {
        console.error( err );
    } );

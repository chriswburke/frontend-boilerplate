const autoprefixer = require( 'autoprefixer' );
const postcss = require( 'postcss' );

postcss( [ autoprefixer ] ).process( './build/css/main.css' ).then( result => {
    result.warnings().forEach( warn => {
        console.warn( warn.toString() );
    } );
    console.log( result.css );
} );

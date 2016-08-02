const imagemin = require( '../lib/imagemin' );
const map = require( 'map-stream' );
const vfs = require( 'vinyl-fs' );

vfs.src( [ './src/images/**/*' ] )
    .pipe( imagemin() )
    .pipe( vfs.dest( './build/images' ) );

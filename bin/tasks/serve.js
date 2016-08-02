const fs = require( 'fs' );
const pkg = JSON.parse( fs.readFileSync( 'package.json', 'utf8' ) );
const superstatic = require( 'superstatic' ).server;
const chalk = require( 'chalk' );
const serverOptions = {
    config: {
        public: './build',
        cleanUrls: true
            // redirects: [],
            // rewrites: [ {
            //     source: '**',
            //     destination: '/index.html'
            // } ]
    },
    errorPage: './build/error.html',
    port: process.env.PORT || 9000,
    debug: false,
    gzip: true
};

const app = superstatic( serverOptions );

const server = app.listen( err => {
    if ( err ) {
        console.log( chalk.white.bold.bgRed( pkg.name + ' failed to start on port ' + serverOptions.port ) );
        console.log( chalk.red( err ) );
    }
    console.log( chalk.white.bold.bgGreen( pkg.name + ' running on port ' + serverOptions.port ) );
} );

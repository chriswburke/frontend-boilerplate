const path = require( 'path' );
const chalk = require( 'chalk' );
const extname = require( 'gulp-extname' );
const assemble = require( 'assemble' );
const helpers = require( 'handlebars-helpers' )();
const app = assemble();

app.create( 'pages' );

app.task( 'load', cb => {
    app.helpers( helpers );
    app.data( 'src/templates/data/**/*.json' );
    app.partials( 'src/templates/partials/**/*.hbs' );
    app.layouts( 'src/templates/layouts/**/*.hbs' );
    app.pages( 'src/templates/pages/**/*.hbs' );
    cb();
} );

app.task( 'default', [ 'load' ], () => app.toStream( 'pages' )
    .pipe( app.renderFile() )
    .pipe( extname() )
    .pipe( app.dest( 'build' ) ) );

app.build( [ 'default' ], err => {
    if ( err ) throw err;
    console.log( chalk.white.bgGreen.bold( 'Assembled Templates' ) );
} );

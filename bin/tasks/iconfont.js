const fs = require( 'fs' );
const chalk = require( 'chalk' );
const pkg = JSON.parse( fs.readFileSync( 'package.json', 'utf8' ) );
const webfontsGenerator = require( 'webfonts-generator' );
const glob = require( 'glob-fs' )( {gitignore: true} );
const files = glob.readdirSync( 'src/icons/*.svg' );

webfontsGenerator( {
    fontName: pkg.name,
    files: files,
    dest: `./build/fonts/${pkg.name}`,
    css: true,
    cssDest: './src/sass/generated/_icons.scss',
    cssTemplate: webfontsGenerator.templates.scss,
    html: true,
    templateOptions: {
        classPrefix: 'icon-',
        baseClass: 'icon'
    },
    types: [ 'svg', 'ttf', 'woff' ],
    order: [ 'woff', 'ttf', 'svg' ],
    startCodePoint: 0xF101,
    writeFiles: true

}, error => {
    if ( error ) {
        console.log( chalk.white.bgRed.bold( 'Error creating iconfont!' ) );
        console.log( error );
    }

    else {
        console.log( chalk.white.bgGreen.bold( 'Iconfont Generated!' ) );
    }
} );

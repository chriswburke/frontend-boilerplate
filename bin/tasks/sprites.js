var sprite = require( 'sprity' );
sprite.create( {
    src: './src/sprites',
    out: './build/images/sprites',
    style: './src/sass/generated/style.scss',
    processor: 'sass',
    'style-type': 'scss',
    'dimension': [ {
        ratio: 1,
        dpi: 72
    }, {
        ratio: 2,
        dpi: 192
    } ]

}, function () {
    console.log( 'done' );
} );

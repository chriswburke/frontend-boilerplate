var sprite = require( 'sprity' );
sprite.create( {
    src: '',
    out: '',
    style: 'style.scss',
    processor: 'sass',
    'dimension': [ {
        ratio: 1,
        dpi: 72
    }, {
        ratio: 2,
        dpi: 192
    } ],
    'style-type': 'scss'
}, function () {
    console.log( 'done' );
} );

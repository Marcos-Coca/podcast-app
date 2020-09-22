const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
    .add('index')
    // /posta.234314
    .add('channel', '/:slug-:id', 'channel') // blog   blog      /blog/:slug
    .add('podcast', '/:slugChannel-:idChannel/:slug-:id', 'podcast'); // blog   blog      /blog/:slug

module.exports = {
  language: 'ja',
  theme: 'theme_print.css',
  entry: [
    'example/spread_01.md',
    'example/text_01.md',
  ],
  output: [
    'book_print.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/main.scss";`
      }
    }
  },
  pages: {
    'index': {
      entry: 'src/index/main.js',  // the source template
      template: 'public/index.html',// output as dist/index.html
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'newcard': {
      entry: 'src/newcard/main.js',  // the source template
      template: 'public/index.html',// output as dist/index.html
      filename: 'newcard.html',
      title: 'Newcard',
      chunks: ['chunk-vendors', 'chunk-common', 'newcard']
    },
    'faq': {
      entry: 'src/faq/main.js',  // the source template
      template: 'public/index.html',// output as dist/index.html
      filename: 'faq.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'faq']
    },
  }
};

module.exports = {

  chokidar: {
    source: {
      files: ['components/**/*.scss', 'demoapp/js/site.js', 'components/**/*.js', 'components/**/*.md', 'sass/**/*.scss', 'svg/*.svg', 'views/docs/**.html', 'views/**.html', 'views/includes/**.html', 'views/controls/**.html', 'js/*/*.js', 'js/*.js', 'js/cultures/*.*'],
      tasks: ['sohoxi-watch'],
      options: {
        livereload: true,
        nospawn: true // For the docs task to work
      }
    }
  }

};

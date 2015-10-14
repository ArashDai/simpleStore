var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');

gulp.task('styles',function(){
  return gulp.src('./src/styles.css')
          .pipe(concat('all.css'))
          .pipe(gulp.dest('./src/'))
});

gulp.task('watch',function(){
  var start = Date.now();
  var watchJS = watchify(browserify({
        entries:'./src/main.js',
        transform:reactify,
        debug:true,
        cache: {}, packageCache: {}, fullPaths: true
  }));
  return watchJS.on('update',function(){
    watchJS.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/build'))
    console.log('updated at ' + (Date.now() - start) + ' ms ago');
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./client/build'))

});

gulp.task('watch2',function(){
  //gulp.watch('./src/styles.css','styles');
  var watchCSS = watchify(browserify({
        entries:'./src/styles.css',
        transform:concat,
        debug:false,
        cache: {}, packageCache: {}, fullPaths: true
  }));
  return watchCSS.on('update',function(){
    watchCSS.bundle()
    .pipe(source('./src/all.css'))
    .pipe(gulp.dest('./src/'))
  })
  // .bundle()
  // .pipe(source('./src/all.css'))
  // .pipe(gulp.dest('./src/'))
})


gulp.task('build',function(){
  return browserify({
    entries:'./src/main.js',
    transform:reactify,
    debug:true
  }).bundle()
  .on('error',function(err){
    console.log(err)
    console.log(err.message)
  })
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./client/build'));
});


gulp.task('server',function(){
  nodemon({
    script:'./server/server.js',
    ext:'html js',
    ignore: ['client']
  });
});


gulp.task('default',
  ['server','build','styles','watch','watch2']);

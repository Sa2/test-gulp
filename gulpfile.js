// gruntと違いjson内に記述するわけではない
// $ gulp でdefaultタスクを実行する

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
gulp.task('default', function(){ 
  console.log('Hello World'); 
}); 

gulp.task('sample', function(){
  console.log('Hello world tasking');
});

gulp.task('sass', function(){
  // sass(scss)読み込み用ディレクトリを指定
  gulp.src("./assets/scss/*.scss")
  // コンパイルメソッドを実行
  .pipe(sass())
  // コンパイル後出力ファイル先の指定
  .pipe(gulp.dest('./assets/css/'));
});

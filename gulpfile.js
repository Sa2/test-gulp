// gruntと違いjson内に記述するわけではない
// $ gulp でdefaultタスクを実行する

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

// タスク名をdefaultにすることで$ gulp でdefaultタスクを実行する
gulp.task('default', function(){ 
  console.log('Hello World'); 
}); 

gulp.task('sample1', function(){
  console.log('Hello task1');
});

gulp.task('sample2', function(){
  console.log('Hello task2');
});

// sassをコンパイルする
gulp.task('sass', function(){
  // sass(scss)読み込み用ディレクトリを指定
  gulp.src("./assets/scss/*.scss")
  // コンパイルメソッドを実行
  .pipe(sass())
  // コンパイル後出力ファイル先の指定
  .pipe(gulp.dest('./assets/css/'));
});

// 別タスクを呼び出し
gulp.task('call-task', function(){
  // sample1タスクを呼び出し
  gulp.run('sample1');
});

// 依存タスクを配列に定義
// ビルドタスクとしてグループ化するならこっちの方法を行う
gulp.task('group-task', ['sample1', 'sample2'], function() {
  console.log('task completed');
});

// gruntと違いjson内に記述するわけではない
// $ gulp でdefaultタスクを実行する

// 各モジュールを変数として読み込む
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');

// タスク名をdefaultにすることで$ gulp でdefaultタスクを実行する
gulp.task('default', function(){ 
  console.log('Hello World'); 
}); 

// "$gulp sample1" でsample1タスクを実行
gulp.task('sample1', function(){
  console.log('Hello task1');
});

gulp.task('sample2', function(){
  console.log('Hello task2');
});

// 別タスクを呼び出し
gulp.task('call-task', function(){
  // sample1タスクを呼び出し
  gulp.run('sample1');
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

gulp.task('copy2dist', function() {
  // sassタスクでコンパイル
  gulp.run('sass');
  // srcタスクとdestタスクを組み合わせてcopyすることができる
  gulp.src('./assets/css/example.css')
  .pipe(gulp.dest('./dist/css'));
})

// minify化
gulp.task('uglify', function(){
  gulp.src('./assets/js/*.js')
  // pipeで処理を連結シェルスクのpipeと同じ
  .pipe(uglify())
  .pipe(gulp.dest("dist/js"));
});

// 依存タスクを配列に定義
// ビルドタスクとしてグループ化するならこっちの方法を行う
gulp.task('group-task', ['sample1', 'sample2'], function() {
  console.log('task completed!');
});

// サンプルとして成果物としてdistディレクトリに出力するタスクを作成
gulp.task('product', ['uglify', 'copy2dist'], function() {
  console.log('distribution created!');
});

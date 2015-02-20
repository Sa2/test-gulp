# test-gulp

## about

gulp.jsを試用してみる簡単なプロジェクト。

下記ページを参考にしている。

[【Gulp.js入門】新鋭フロンエンド・タスクランナーツール を試してみました。](http://dev.classmethod.jp/tool/gulpjs-part-001/)


## summary
ほぼ参考ページのまとめと同様の感想。

書き方はjsっぽくてGruntより好感触。
Gruntではプロパティにタスクを書いていくので複雑なタスクを作り始めたり、タスクの量が増えると保守が難しくなる。

gulp.jsではfuctionにタスクを書き、変数にモジュールを読み込ませるので括弧がやたら増えて見苦しいビルドタスクになることがない。

gulp-coffeeを入れておけばGruntと同様にCoffeeScriptでビルドタスクを書ける。（また近いうちに試してみる）

ただし、モジュールはGruntほど充実していないが、[gulp.js - plugins](http://gulpjs.com/plugins/)を見ると必要な機能はそろっている印象。

日本語のドキュメントに関してはGruntより情報が少ないので
英語を読もうと思う志は必要。

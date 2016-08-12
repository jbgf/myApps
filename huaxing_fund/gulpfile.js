/*npm install gulp browser-sync gulp-if gulp-uglify run-sequence --save-dev */
var gulp=require('gulp'),
	
	browserSync=require('browser-sync'),
	
	gulpif=require('gulp-if'),
	
	uglify=require('gulp-uglify'),

	

	runSequence = require('run-sequence');

/*开发线路*/
gulp.task('default',function(callback){
	runSequence(['browserSync','watch'],
		callback)
})
gulp.task('browserSync',function(){
	browserSync.init({
        server: {
            baseDir: "."
        }
    });
/*	browserSync({

		proxy: "localhost:8001/water_cleaner_php_02"			//处理php文件，gulp-connect-php默认监听8000，直接设置port：8000会发生占用，启用8001；
	})*/
});
gulp.task('watch',['browserSync'],function(){
	 gulp.watch(['./jdb/**/*.js','./jdb/**/*.css','./jdb/**/*.html'],browserSync.reload);
});



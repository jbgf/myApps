/*npm install gulp gulp-connect-php browser-sync gulp-sass gulp-if gulp-uglify run-sequence --save-dev */
var gulp=require('gulp'),
	
	browserSync=require('browser-sync'),
	
	gulpif=require('gulp-if'),
	
	uglify=require('gulp-uglify'),

	connect = require('gulp-connect-php'),
	
	runSequence = require('run-sequence');

/*优化线路*//*
gulp.task('build',function(callback){
	runSequence('clean:dest',
		['sass','useref','images','fonts'],
		callback)
})
*/
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
gulp.task('watch',['browserSync'/*,'connectPhp'*/],function(){

	 gulp.watch(['./water_cleaner_php_02/**/*.js','./water_cleaner_php_02/**/*.css',
	 			 './water_cleaner_php_02/**/*.html'],browserSync.reload);
	 gulp.watch(['./huaxing/**/*.js','./huaxing/**/*.css','./huaxing/**/*.html'],browserSync.reload);
	 gulp.watch(['./wheel/**/*.js','./wheel/**/*.css','./wheel/**/*.html'],browserSync.reload);
	 gulp.watch(['./jquery.nicescroll-master/**/*.js','./jquery.nicescroll-master/**/*.css','./jquery.nicescroll-master/**/*.html'],browserSync.reload);
	 gulp.watch(['./quarantine/**/*.js','./quarantine/**/*.css','./quarantine/**/*.html'],browserSync.reload);
});

gulp.task('connectPhp',function(){
	connect.server({
		bin:'f:/xampp/php/php.exe',
		ini: 'f:/xampp/php/php.ini',
		port:8001
  	});
  	
})
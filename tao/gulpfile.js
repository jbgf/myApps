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

});
gulp.task('watch',['browserSync'],function(){
	 
	 gulp.watch(['./js/*.js','./**/*.css','./**/*.html'],browserSync.reload);
	 gulp.watch(['./wheel/**/*.js','./wheel/**/*.css','./wheel/**/*.html'],browserSync.reload);
	 
	 
});



/*npm install gulp gulp-connect-php gulp-plumber browser-sync gulp-sass gulp-if gulp-changed gulp-uglify run-sequence --save-dev */
var gulp=require('gulp'),
	sass = require('gulp-sass'),
	browserSync=require('browser-sync'),
	changed = require('gulp-changed'),
	gulpif=require('gulp-if'),
	plumber = require('gulp-plumber'),
	uglify=require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect-php'),
	runSequence = require('run-sequence');

var urlArr = [
			{	id:0,
				url:'iot'},
			{
				id:1,
				folder:"game",
				sub:[
					{id:0,url:'game/running'},
					{id:1,url:'game/bestone'},
					{id:2,url:'game/12312'},
					{id:3,url:'game/valentineDay'},
					{id:4,url:'game/valentineDay2'},
					{id:5,url:'game/floor'}
				]
			},
			{
				id:2,
				url:'quarantine2'},
			{
				id:3,
				url:'qualitysupervision'},
			{
				id:4,
				url:'quarantine2_m'},
			{
				id:5,
				url:'newworld'},
			{
				id:6,
				url:'mingyue'},
			{
				id:7,
				url:'qze'},
			{
				id:8,
				url:'wd'},
			{id:9,url:'ImperialVision'},
			{id:10,url:'ImperialVision2'},
			{id:11,url:'ImperialVision3'},
			{id:12,url:'twoyears'},
			{id:13,url:'qzebackground'},
			{
				id:14,
				folder:"download",
				sub:[
					{id:0,url:'download/software'}
				]
			},
			{id:15,url:'rh'},
			{id:16,url:'wuyi'},
			{id:17,url:'wuyi-m'}
		];
		var baseSass = 'mySassWare';
        var baseComponent = 'component';
		var watchSassArr = [];
		for (var i = 0; i < urlArr.length; i++) {
			var obj = urlArr[i];
			var sub = obj.sub;
			var url1 = '',
				url2 = '';
				if(sub){
					for (var j = 0; j < sub.length; j++) {
						url1 = sub[j].url + '/sass/*.scss';
						url2 = sub[j].url + '/sass/'+baseSass+'/*.scss';
                        url3 = sub[j].url + '/sass/'+baseComponent+'/*.scss';
					}
					 
				}else{
					url1 = obj.url+'/sass/*.scss';
					url2 = obj.url+'/sass/'+baseSass+'/*.scss';
                    url3 = obj.url+'/sass/'+baseComponent+'/*.scss';
				}
				Array.prototype.push.call(watchSassArr,url1,url2,url3);
		};
 
var	newest = urlArr.length-1,
	arr = getSub(17);
		  	/*getSub(1)[5];*/
var baseDir = arr.url;

function getSub(id){
	var arr = urlArr[id]['sub'];
		arr ? "" : (arr = urlArr[id]);
	return arr;
}

gulp.task('sass',['sass-component'],function(){
	return gulp.src([''+baseDir+'/sass/*.scss',''+baseDir+'/sass/'+baseSass+'/*.scss'])
	/*只编译change的文件*/
			   .pipe(plumber())
			   .pipe(changed(''+baseDir+'/css/',{extension: '.css'}))
		       .pipe(sourcemaps.init())
		       .pipe(sass().on('error', sass.logError))
		       .pipe(sourcemaps.write('./maps'))
			   .pipe(plumber.stop())
			   .pipe(gulp.dest(''+baseDir+'/css/'))
			   .pipe(browserSync.reload({
					stream:true
				}))  
});
gulp.task('sass-component',function(){
	return gulp.src([''+baseDir+'/sass/'+baseComponent+'/*.scss'])
	/*只编译change的文件*/
			   .pipe(plumber())
			   .pipe(changed(''+baseDir+'/'+baseComponent+'',{extension: '.css'}))
		       .pipe(sourcemaps.init())
		       .pipe(sass().on('error', sass.logError))
		       .pipe(sourcemaps.write('./maps'))
			   .pipe(plumber.stop())
			   .pipe(gulp.dest(''+baseDir+'/'+baseComponent+''))
			     
});

gulp.task('concatComponents', function() {                                //- 创建一个名为 concat 的 task
    gulp.src([''+baseDir+'/'+baseComponent+'/*.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('component.css'))                            //- 合并后的文件名
        .pipe(gulp.dest(''+baseDir+'/css/'))                               //- 输出文件本地

});

gulp.task('minify-css', () => {
  return gulp.src(''+baseDir+'/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(''+baseDir+'/dist/css/'));
});

/*优化线路*/
gulp.task('build',function(callback){
	runSequence(['concatComponents','minify-css'],callback);
})

/*开发线路*/
gulp.task('default',function(callback){
	runSequence(['browserSync','watch'],
		callback)
})
gulp.task('browserSync',function(){
	/*browserSync.init({
        server: {
            baseDir: "."
        }
    });*/
	browserSync({
		proxy: "localhost:8001"			//处理php文件，gulp-connect-php默认监听8000，直接设置port：8000会发生占用，启用8001；
	})
});
gulp.task('watch',['connectPhp'],function(){
	 gulp.watch(['./'+baseDir+'/**/*.html','./'+baseDir+'/**/*.js','./'+baseDir+'/**/*.css','./'+baseDir+'/**/*.php'],browserSync.reload);	 
	 gulp.watch(watchSassArr,['sass']);
});

gulp.task('connectPhp',function(){
	connect.server({
		bin:'f:/xampp/php/php.exe',
		ini: 'f:/xampp/php/php.ini',
		port:8001
  	});
})
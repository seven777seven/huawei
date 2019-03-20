var gulp = require("gulp");
gulp.task("watchall",async ()=>{
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html").pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\huawei1'))
    });
    gulp.watch('php/*.php',async ()=>{
        gulp.src('php/*.php').pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\huawei1\\php'));
    });
    gulp.watch('img/*.{jpg,png,gif}',async ()=>{
        gulp.src('img/*.{jpg,png,gif}').pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\huawei1\\img'));
    });
    gulp.watch('js/*.js',async ()=>{
        gulp.src('js/*.js').pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\huawei1\\js'));
    });
    gulp.watch('css/*.css',async ()=>{
        gulp.src('css/*.css').pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\huawei1\\css'));
    });
    gulp.watch('font/*.{eot,ttf,woff,woff2}',async ()=>{
        gulp.src('font/*.{eot,ttf,woff,woff2}').pipe(gulp.dest('D:\\phpStudy\\PHPTutorial\\WWW\\huawei1\\font'));
    })

})
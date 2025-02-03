var gulp = require( ' gulp ' );
 var browserSync = require( ' browser-sync ' ).create();
 var reload = browserSync.reload;

gulp.task( ' servir ' , función () {
  browserSync.init({
    servidor : {
       baseDir : " ./ "
    }
  });

  gulp.watch( " *.html " ).on( " cambiar " , recargar);
});
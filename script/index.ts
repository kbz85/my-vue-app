import { src, dest, series } from 'gulp'
import { resolve } from 'path'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
// const gulp = require('gulp')
// const path = require('path')
// const sass = require('gulp-sass')(require('sass'))
// const autoprefixer = require('gulp-autoprefixer')
const sass = gulpSass(dartSass);
function buildVxeTableCss() {
    const vxePath = resolve(__dirname, '../src/styles2/')
    console.log(123123, vxePath)
    return src(`${vxePath}/index.scss`)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest('dist'))
}
// module.exports = gulp.task('css', function () {
//     buildVxeTableCss()
// })

series(
    buildVxeTableCss()
)
// buildVxeTableCss()
// export default 

//   "type": "module",
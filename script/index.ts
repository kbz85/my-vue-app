import { src, dest, series, parallel } from 'gulp'
import { resolve } from 'path'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'

const sass = gulpSass(dartSass);
const vxePath = resolve(__dirname, '../src/styles/')
export const buildScssCss = () => {
    return src(`${vxePath}/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest('dist/scss'))
}

export const buildLessCss = () => {
    return src(`${vxePath}/*.less`)
        .pipe(less({
            javascriptEnabled: true
        }))
        .pipe(autoprefixer())
        .pipe(dest('dist/less'))
}


export default series(
    async () => buildScssCss(),
    async () => buildLessCss()
)
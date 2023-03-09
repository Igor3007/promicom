"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./promicom/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: [
                "./src/styles/*.{scss,sass}",
            ],
            dist: "./promicom/static/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: [
                "./src/js/*js",
                "./src/js/import/*js",
            ],
            dist: "./promicom/static/js/",
            watch: [
                "./src/js/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/responsive/**/*.{jpg,jpeg,png,gif,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./promicom/static/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        resize: {
            src: [
                "./promicom/img/**/*-responsive.{jpg,jpeg,png,webp}",
                "!./src/img/favicon/*.{jpg,jpeg,png}"
            ],
            dist: "./promicom/static/img/",
            watch: "./promicom/img/**/*-responsive.{jpg,jpeg,png,webp}"
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./promicom/static/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./promicom/static/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./promicom/static/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./promicom/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]),
    gulp.parallel("resize"),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"]),
    gulp.parallel("resize"));

export default development;

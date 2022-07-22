import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';
import sassPlugin from 'esbuild-plugin-sass';

console.log("build scripts files")
esbuild.build({
    entryPoints: ['assets/scripts/app.js'],
    bundle: true,
    minify: true,
    outfile: 'dist/app.js',
    plugins: [babel()]
})
.catch((e) => console.error(e.message))

console.log("build styles files")
esbuild.build({
    entryPoints: ['assets/scss/app.scss'],
    bundle: true,
    minify: true,
    outfile: 'dist/app.css',
    plugins: [sassPlugin()]
})
.catch((e) => console.error(e.message))

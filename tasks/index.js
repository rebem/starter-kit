import eslint from 'start-eslint';
import clean from 'start-clean';

export { webpackDev, webpackBuild } from './webpack';
export { karmaBuild, karmaDev } from './karma';

export const lint = eslint();
export const cleanBuild = clean('build/');
export const cleanCoverage = clean('coverage/');

export const build = [
    cleanBuild,
    exports.webpackBuild
];

export const dev = [
    exports.webpackDev
];

export const tdd = [
    cleanCoverage,
    exports.karmaDev
];

export const test = [
    lint,
    exports.karmaBuild
];

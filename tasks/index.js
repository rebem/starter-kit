import eslint from 'start-eslint';
import clean from 'start-clean';

export { webpackDev, webpackBuild } from './webpack';
export { karmaBuild, karmaDev } from './karma';

export const lint = [
    eslint()
];

export const build = [
    clean('build/'),
    exports.webpackBuild
];

export const dev = [
    exports.webpackDev
];

export const tdd = [
    clean('coverage/'),
    exports.karmaDev
];

export const test = [
    eslint(),
    exports.karmaBuild
];

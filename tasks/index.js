export { eslint } from 'start-eslint';

export { cleanBuild, cleanCoverage } from './clean';
export { webpackDev, webpackBuild } from './webpack';
export { karmaBuild, karmaDev } from './karma';

export const build = [
    exports.cleanBuild,
    exports.webpackBuild
];

export const dev = [
    exports.webpackDev
];

export const tdd = [
    exports.cleanCoverage,
    exports.karmaDev
];

export const test = [
    exports.eslint,
    exports.karmaBuild
];

export { cleanBuild } from './clean';
export { webpackDev, webpackBuild } from './webpack';
export { eslint } from './lint';

export const build = [
    exports.cleanBuild,
    exports.webpackBuild
];

export const dev = [
    exports.webpackDev
];

export const test = [
    exports.eslint
];

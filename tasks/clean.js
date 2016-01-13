export function cleanBuild() {
    const del = require('del');

    return del([ 'build/' ]);
}

export function cleanCoverage() {
    const del = require('del');

    return del([ 'coverage/' ]);
}

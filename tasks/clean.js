export function cleanBuild() {
    const del = require('del');

    return del([ 'build/' ]);
}

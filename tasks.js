import Start from 'start';
import reporter from 'start-pretty-reporter';
import env from 'start-env';
import files from 'start-files';
import clean from 'start-clean';
import eslint from 'start-eslint';
import * as webpack from 'start-webpack';
import karma from 'start-karma';

const start = Start(reporter());

export function build() {
    return start(
        env('production'),
        files('build/'),
        clean(),
        webpack.build(require('./conf/webpack.build').default)
    );
}

export function dev() {
    return start(
        env('development'),
        webpack.dev(require('./conf/webpack.dev').default)
    );
}

export function lint() {
    return start(
        env('test'),
        files([ 'src/**/*.js', 'test/**/*.js', 'conf/**/*.js' ]),
        eslint()
    );
}

export function test() {
    return start(
        env('test'),
        lint,
        files('coverage/'),
        clean(),
        karma(require('./conf/karma.build').default)
    );
}

export function tdd() {
    return start(
        env('test'),
        files('coverage/'),
        clean(),
        karma(require('./conf/karma.dev').default)
    );
}

export const prepush = test;

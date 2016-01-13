export function karmaBuild() {
    process.env.NODE_ENV = 'test';

    const { Server } = require('karma');
    const karmaConfig = require('../conf/karma');

    return new Promise((resolve, reject) => {
        const karmaServer = new Server(
            {
                ...karmaConfig,
                singleRun: true,
                autoWatch: false
            },
            exitCode => {
                if (exitCode !== 0) {
                    return reject();
                }

                resolve();
            }
        );

        karmaServer.start();
    });

}

export function karmaDev() {
    process.env.NODE_ENV = 'test';

    const { Server } = require('karma');
    const karmaConfig = require('../conf/karma');

    return new Promise((resolve, reject) => {
        const karmaServer = new Server(
            {
                ...karmaConfig,
                singleRun: false,
                autoWatch: true,
                reporters: [
                    'clear-screen',
                    ...karmaConfig.reporters
                ]
            }
        );

        karmaServer.start();
    });
}

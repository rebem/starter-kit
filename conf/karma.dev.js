import karmaCommonConfig from './karma.common';

export default {
    ...karmaCommonConfig,
    singleRun: false,
    autoWatch: true,
    reporters: [
        'clear-screen',
        ...karmaCommonConfig.reporters
    ]
};

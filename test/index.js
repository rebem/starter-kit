import chai from 'chai';
import chaiBEM from 'chai-bem';
import chaiSpies from 'chai-spies';

chai.use(chaiBEM());
chai.use(chaiSpies);

// https://github.com/webpack/karma-webpack#alternative-usage

// components
const componentsTests = require.context('./src/components/', true, /\.js$/);
const componentsSources = require.context('../src/components/', true, /\.js$/);

componentsTests.keys().forEach(componentsTests);
componentsSources.keys().forEach(componentsSources);

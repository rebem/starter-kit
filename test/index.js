import chai from 'chai';
import BEM from 'chai-bem';
import chaiSpies from 'chai-spies';
import chaiColors from 'chai-colors';
import chaiAsPromised from 'chai-as-promised';

chai.use(BEM());
chai.use(chaiSpies);
chai.use(chaiColors);
chai.use(chaiAsPromised);

// https://github.com/webpack/karma-webpack#alternative-usage

// components
const componentsTests = require.context('./src/components/', true, /\.js$/);
const componentsSources = require.context('../src/components/', true, /\.js$/);

componentsTests.keys().forEach(componentsTests);
componentsSources.keys().forEach(componentsSources);

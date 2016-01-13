import React from 'react';
import { isCompositeComponent } from 'react-addons-test-utils';
import { expect } from 'chai';
import createRender from 'test/helpers/render';

import AppInjector from '#app?class&inject';

const App = AppInjector({
    '#range'() {
        return React.createElement('div');
    }
});

const render = createRender();

describe('example (input)', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(App).to.exist;
        });

        it('is a function', () => {
            expect(App).to.be.function;
        });

        it('creates component', () => {
            render(App)
                .test(function() {
                    expect(isCompositeComponent(this.instance)).to.be.true;
                });
        });
    });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'rebem-enzyme';

import App from '#app';
import Authentication from '#authentication';
import Heading from '#heading';

let renderedComponent = null;
const block = 'app';

describe('App', function() {
    it('should exist', function() {
        expect(App).to.exist;
    });

    describe('render', function() {
        beforeEach(function() {
            renderedComponent = shallow(<App/>);
        });

        describe('header elem', function() {
            let headerElement = null;

            beforeEach(function() {
                headerElement = renderedComponent.findBEM({ block, elem: 'header' });
            });

            it('exists', function() {
                expect(headerElement).to.have.length(1);
            });

            it('Heading component', function() {
                expect(headerElement.find(Heading)).to.have.length(1);
            });
        });

        describe('content elem', function() {
            let contentElement = null;

            beforeEach(function() {
                contentElement = renderedComponent.findBEM({ block, elem: 'content' });
            });

            it('exists', function() {
                expect(contentElement).to.have.length(1);
            });

            it('Authentication component', function() {
                expect(contentElement.find(Authentication)).to.have.length(1);
            });
        });

        it('footer elem', function() {
            expect(renderedComponent.findBEM({ block, elem: 'footer' })).to.have.length(1);
        });
    });
});

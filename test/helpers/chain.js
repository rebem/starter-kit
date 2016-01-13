import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import bem from './bem';

export default class {
    constructor(options = {}) {
        this.elements = {};
        this.options = options;
    }

    render(component) {
        let instance = null;

        if (this.options.shallow === true) {
            const shallowRenderer = TestUtils.createRenderer();

            shallowRenderer.render(component);

            instance = shallowRenderer.getRenderOutput();
        } else {
            instance = TestUtils.renderIntoDocument(component);
        }

        this.instance = instance;
        this.rootInstance = instance;

        return this;
    }

    find(testFunction, name = 'result') {
        this.elements[name] = testFunction.call(this, this.elements);

        return this;
    }

    findRoot(name = 'result') {
        this.elements[name] = ReactDOM.findDOMNode(this.instance);

        return this;
    }

    findType(type, name = 'result') {
        this.elements[name] = TestUtils.findRenderedComponentWithType(this.instance, type);

        return this;
    }

    findTypes(type, name = 'result') {
        this.elements[name] = TestUtils.scryRenderedComponentsWithType(this.instance, type);

        return this;
    }

    findTag(tag, name = 'result') {
        this.elements[name] = TestUtils.findRenderedDOMComponentWithTag(this.instance, tag);

        return this;
    }

    findTags(tag, name = 'result') {
        this.elements[name] = TestUtils.scryRenderedDOMComponentsWithTag(this.instance, tag);

        return this;
    }

    findClass(className, name = 'result') {
        this.elements[name] = TestUtils.findRenderedDOMComponentWithClass(this.instance, className);

        return this;
    }

    findElem(elem, name = 'default') {
        this.elements[name] = TestUtils.findRenderedDOMComponentWithClass(
            this.instance,
            bem.stringify(elem)
        );

        return this;
    }

    findClasses(className, name = 'result') {
        this.elements[name] = TestUtils.scryRenderedDOMComponentsWithClass(this.instance, className);

        return this;
    }

    setProps(props) {
        this.rootInstance.setState(props);

        return this;
    }

    trigger({ method, options }, name = 'result') {
        TestUtils.Simulate[method](this.elements[name], options);

        return this;
    }

    test(callback) {
        callback.call(this, this.elements);

        return this;
    }

    mixin(mixins) {
        Object.keys(mixins).forEach(mixin => {
            this[mixin] = mixins[mixin];
        });

        return this;
    }
}

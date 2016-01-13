import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

import Chain from './chain';

@DragDropContext(TestBackend)
class DndWrapperClass extends React.Component {
    render() {
        return this.props.children;
    }
}
const DndWrapper = React.createFactory(DndWrapperClass);

function createDndWrapper(Component, props) {
    class WrapperClass extends React.Component {
        constructor(...args) {
            super(...args);

            this.state = props;
        }

        getManager() {
            return this.refs.dndWrapper.getManager();
        }

        render() {
            return DndWrapper({ ...props, ref: 'dndWrapper' }, Component(this.state));
        }
    }

    return React.createElement(WrapperClass);
}

function createWrapper(Component, props) {
    class WrapperClass extends React.Component {
        constructor(...args) {
            super(...args);

            this.state = props;
        }

        render() {
            return Component(this.state);
        }
    }

    return React.createElement(WrapperClass);
}

function render({ Component, props, chain, options }) {
    if (options.dnd) {
        if (options.rerendable) {
            return chain.render(createDndWrapper(Component, props));
        }

        return chain.render(DndWrapper(null, Component(props)));
    }

    if (options.rerendable) {
        return chain.render(createWrapper(Component, props));
    }

    return chain.render(Component(props));
}

export default function(options = {}) {
    const chain = new Chain(options);

    return function(Component, props) {
        const result = render({ Component: React.createFactory(Component), props, chain, options });

        result.instance = TestUtils.findRenderedComponentWithType(result.instance, Component);

        return result;
    };
}

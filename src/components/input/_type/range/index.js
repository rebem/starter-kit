import { Component } from 'react';

import Input from '#input';

export default class extends Component {
    static displayName = 'app: input/_type/range';
    static defaultProps = {
        min: 0,
        max: 100,
        step: 1
    };

    render() {
        return Input({
            type: 'range',
            mods: {
                type: 'range'
            },
            ...this.props
        });
    }
}

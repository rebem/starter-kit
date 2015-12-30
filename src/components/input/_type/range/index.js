import { Component } from '@yummies/yummies';

import Input from '#input';

export default class extends Component {
    static displayName = 'input/_type/range';
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

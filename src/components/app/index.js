import { Component } from 'react';
import { BEM } from 'rebem';

import Range from '#range';

export default class extends Component {
    static displayName = 'app: app';

    render() {
        return BEM(
            {
                ...this.props,
                block: 'app'
            },
            Range({
                index: 5,
                step: 5,
                max: 20
            })
        );
    }
}

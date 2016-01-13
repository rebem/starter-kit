import { Component } from 'react';
import BEM from '@yummies/bem';
import Range from '#range';

export default class extends Component {
    static displayName = 'app: app';

    render() {
        return BEM({
            block: 'app',
            mods: this.props.mods,
            mix: this.props.mix,
            content: Range({
                index: 5,
                step: 5,
                max: 20
            })
        });
    }
}

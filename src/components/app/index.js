import { Component } from 'react';
import Yummies from '@yummies/yummies';
import Range from '#range';

export default class extends Component {
    static displayName = 'app: app';

    render() {
        return Yummies({
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

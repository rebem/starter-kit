import { Component } from '@yummies/yummies';
import Range from '#range';

export default class extends Component {
    static displayName = 'app';

    render() {
        return {
            block: 'app',
            content: Range({
                index: 5,
                step: 5,
                max: 20
            })
        };
    }
}

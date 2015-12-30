import { Component } from '@yummies/yummies';
import InputRange from '#input/_type/range';

export default class extends Component {
    static displayName = 'input/_type/range';

    constructor(props, context) {
        super(props, context);

        this.state = {
            index: props.index,
            max: props.index === props.max
        };
    }

    _onRangeChange(e) {
        const index = Number(e.target.value);

        this.setState({
            index,
            max: index === this.props.max
        });
    }

    render() {
        return {
            block: 'range',
            content: [
                InputRange({
                    value: this.state.index,
                    max: this.props.max,
                    step: this.props.step,
                    onChange: ::this._onRangeChange,
                    key: 'input'
                }),
                {
                    elem: 'index',
                    mods: {
                        max: this.state.max
                    },
                    tag: 'span',
                    props: {
                        key: 'index'
                    },
                    content: this.state.index
                }
            ]
        };
    }
}

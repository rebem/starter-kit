import { Component } from 'react';
import BEM from '@yummies/bem';

import InputRange from '#input/_type/range';

export default class extends Component {
    static displayName = 'app: range';

    constructor(props, context) {
        super(props, context);

        this.state = {
            index: props.index,
            max: props.index === props.max
        };

        this._onRangeChange = this._onRangeChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.index !== this.props.index) {
            this.setState({
                index: nextProps.index
            });
        }

        if (nextProps.max !== this.props.max) {
            this.setState({
                max: nextProps.index === nextProps.max
            });
        }
    }

    _onRangeChange(e) {
        const index = Number(e.target.value);

        this.setState({
            index,
            max: index === this.props.max
        });
    }

    render() {
        return BEM({
            block: 'range',
            mods: this.props.mods,
            mix: this.props.mix,
            content: [
                InputRange({
                    value: this.state.index,
                    max: this.props.max,
                    step: this.props.step,
                    mix: {
                        block: 'range',
                        elem: 'input'
                    },
                    onChange: this._onRangeChange,
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
        });
    }
}

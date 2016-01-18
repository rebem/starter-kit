import { Component } from 'react';
import { BEM } from 'rebem';

import RangeInput from '#range/input';
import RangeIndex from '#range/index';

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
        return BEM(
            {
                block: 'range'
            },
            RangeInput({
                ...this.props,
                value: this.state.index,
                onChange: this._onRangeChange
            }),
            RangeIndex(
                {
                    mods: {
                        max: this.state.max
                    }
                },
                this.state.index
            )
        );
    }
}

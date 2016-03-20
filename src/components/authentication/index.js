import { Component } from 'react';
import { blockFactory } from 'rebem';

import Button from '#button';
import Form from '#form';
import Heading from '#heading';
import Input from '#input';
import Notification from '#notification';

const block = 'authentication';
const Block = blockFactory(block);

export default class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        };
    }

    handleFormSubmit = e => {
        e.preventDefault();

        this.setState({
            status: 'ready to go!'
        });
    };

    render() {
        return Block(this.props,
            Heading({
                type: 'h2',
                mix: {
                    block,
                    elem: 'heading'
                }
            }, 'Login'),
            Notification({
                mix: {
                    block,
                    elem: 'status',
                    mods: { empty: this.state.status === '' }
                }
            }, this.state.status),
            Form({ mix: { block, elem: 'form' }, onSubmit: this.handleFormSubmit },
                Block({ elem: 'form-row' },
                    Input({ placeholder: 'login' })
                ),
                Block({ elem: 'form-row' },
                    Input({ placeholder: 'password', type: 'password' })
                ),
                Block({ elem: 'form-row' },
                    Button({ type: 'submit', value: 'Submit' })
                )
            )
        );
    }
}

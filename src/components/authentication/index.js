import React, { Component } from 'react';

import Button from '#button';
import Form from '#form';
import Heading from '#heading';
import Input from '#input';
import Notification from '#notification';

const block = 'authentication';

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
        return (
            <div block={block} {...this.props}>
                <Heading type="h2" mix={{ block, elem: 'heading' }}>
                    {"Login"}
                </Heading>
                <Notification mix={{ block, elem: 'status', mods: { empty: this.state.status === '' } }}>
                    {this.state.status}
                </Notification>
                <Form mix={{ block, elem: 'form' }} onSubmit={this.handleFormSubmit}>
                    <div block={block} elem="form-row">
                        <Input placeholder="login"/>
                    </div>
                    <div block={block} elem="form-row">
                        <Input type="password" placeholder="password"/>
                    </div>
                    <div block={block} elem="form-row">
                        <Button type="submit" value="Submit"/>
                    </div>
                </Form>
            </div>
        );
    }
}

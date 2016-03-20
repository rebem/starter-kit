import { Component } from 'react';
import { blockFactory } from 'rebem';

import App from '#app';
import Authentication from '#authentication';
import Heading from '#heading';
import Link from '#link';

const block = 'app';
const Block = blockFactory(block);

export default class extends Component {
    render() {
        return App(this.props,
            Block({ elem: 'header' },
                Heading({
                    mix: { block, elem: 'title' }
                }, 'reBEM Starter Kit')
            ),
            Block({ elem: 'content' },
                Authentication()
            ),
            Block({ elem: 'footer' },
                'Made with ',
                Link({ href: 'http://rebem.js.org/' }, 'reBEM')
            )
        );
    }
}

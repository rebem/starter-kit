import React, { Component } from 'react';

import App from '#app';
import Authentication from '#authentication';
import Heading from '#heading';
import Link from '#link';

const block = 'app';

export default class extends Component {
    render() {
        return (
            <App {...this.props}>
                <div block={block} elem="header">
                    <Heading mix={{ block, elem: 'title' }}>
                        {"reBEM Starter Kit"}
                    </Heading>
                </div>
                <div block={block} elem="content">
                    <Authentication/>
                </div>
                <div block={block} elem="footer">
                    {"Made with "}
                    <Link href="http://rebem.js.org/">{"reBEM"}</Link>
                </div>
            </App>
        );
        // return App(this.props,
        //     Block({ elem: 'header' },
        //         Heading({
        //             mix: { block, elem: 'title' }
        //         }, 'reBEM Starter Kit')
        //     ),
        //     Block({ elem: 'content' },
        //         Authentication()
        //     ),
        //     Block({ elem: 'footer' },
        //         'Made with ',
        //         Link({ href: 'http://rebem.js.org/' }, 'reBEM')
        //     )
        // );
    }
}

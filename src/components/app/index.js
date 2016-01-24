import { BEM } from 'rebem';

import Range from '#range';

export default function(props) {
    return BEM({ ...props, block: 'app' },
        Range({
            index: 5,
            step: 5,
            max: 20
        })
    );
}

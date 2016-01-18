import { BEM } from 'rebem';

export default function(props) {
    return BEM({
        ...props,
        block: 'range',
        elem: 'input',
        tag: 'input',
        type: 'range'
    });
}

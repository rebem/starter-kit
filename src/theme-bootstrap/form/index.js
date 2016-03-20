import { BEM } from 'rebem';

export default function({ children, ...props }) {
    return BEM({
        ...props,
        block: 'form',
        tag: 'form'
    }, children);
}

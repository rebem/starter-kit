import { BEM } from 'rebem';

export default function({ children, ...props }) {
    return BEM(
        {
            ...props,
            block: 'range',
            elem: 'index',
            tag: 'span'
        },
        children
    );
}

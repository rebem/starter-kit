import { BEM } from 'rebem';

export default function(props) {
    return BEM(
        {
            ...props,
            block: 'range',
            elem: 'index',
            tag: 'span'
        },
        props.children
    );
}

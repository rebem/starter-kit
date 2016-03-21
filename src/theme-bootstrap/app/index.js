import { BEM } from 'rebem';

export default function App({ children, ...props }) {
    return BEM({
        ...props,
        block: 'app'
    }, children);
}

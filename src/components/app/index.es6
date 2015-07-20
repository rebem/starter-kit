import Range from '#range';

export default Base => class extends Base {
    static displayName = 'app';

    render() {
        return {
            block: 'app',
            content: Range({
                index: 5,
                step: 5,
                max: 20
            })
        };
    }
};

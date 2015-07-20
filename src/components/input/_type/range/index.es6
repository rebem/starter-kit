export default Base => class extends Base {
    static displayName = 'input/_type/range';

    render() {
        const bemjson = super.render();

        bemjson.mods = {
            ...bemjson.mods,
            type: 'range'
        };

        bemjson.content[0].props = {
            ...bemjson.content[0].props,
            type: 'range',
            min: this.props.min || 0,
            max: this.props.max || 100,
            step: this.props.step || 1
        };

        return bemjson;
    }
};

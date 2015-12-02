const defaults = {
    min: 0,
    max: 100,
    step: 1
};

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
            min: this.props.min || defaults.min,
            max: this.props.max || defaults.max,
            step: this.props.step || defaults.step
        };

        return bemjson;
    }
};

import { breakpointClassValidator } from '../../validators';
import { breakpointClass, capitalizeFirst, toDashCase } from '../../helpers';

const properties = {};
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

for (let breakpoint of breakpoints) {
    properties[breakpoint] = {
        type: [String, Boolean, Number],
        default: false
    };

    for (let property of ['offset', 'push', 'pull']) {
        properties[property + capitalizeFirst(breakpoint)] = {
            type: [String, Boolean, Number],
            default: false
        };
    }
}

export default {
    name: 'Column',
    props: {
        first: {
            type: [Boolean, String],
            default: false,
            validator: breakpointClassValidator
        },
        last: {
            type: [Boolean, String],
            default: false,
            validator: breakpointClassValidator
        },

        ...properties
    },
    computed: {
        classes: function () {
            return [
                breakpointClass('-first', this.first),
                breakpointClass('-last', this.last),

                ...Object.keys(properties).map((p) => this[p] ? breakpointClass(`-${toDashCase(p)}`, this[p]) : '')
            ];
        }
    }
};

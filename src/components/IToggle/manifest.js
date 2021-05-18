module.exports = {
	name: 'toggle',
	slots: [
		{
			name: 'default',
			description: 'Slot for default checkbox label',
			type: []
		}
	],
	events: [
		{
			name: 'update:modelValue',
			description: 'Event emitted for setting the modelValue',
			type: []
		}
	],
	props: [
		{
			name: 'color',
			description: 'The color variant of the checkbox',
			type: [
				'light',
				'dark'
			],
			default: 'light'
		},
		{
			name: 'disabled',
			description: 'The disabled state of the checkbox',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'indeterminate',
			description: 'The indeterminate state of the checkbox',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'value',
			description: 'Used to set the checkbox value when used inside a checkbox group',
			type: [],
			default: 'false'
		},
		{
			name: 'modelValue',
			description: 'Used to set the checkbox value when used by itself',
			type: [],
			default: 'false'
		},
		{
			name: 'name',
			description: 'The unique identifier of the checkbox',
			type: [
				'String'
			],
			default: 'uid()'
		},
		{
			name: 'readonly',
			description: 'The readonly state of the checkbox',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'size',
			description: 'The size variant of the checkbox',
			type: [
				'sm',
				'md',
				'lg'
			],
			default: 'md'
		},
		{
			name: 'tabindex',
			description: 'The tabindex of the checkbox',
			type: [
				'Number',
				'String'
			],
			default: '1'
		}
	],
	styles: [
		{
			name: 'font-size',
			description: 'The font size of the toggle component label',
			type: 'size',
			default: 'font-size()'
		},
		{
			name: 'indicator-margin-right',
			description: 'The right margin of the toggle component indicator',
			default: 'spacing(\'1/2\')'
		},
		{
			name: 'indicator-width',
			description: 'The width of the toggle component indicator',
			type: 'size',
			default: '40px'
		},
		{
			name: 'indicator-height',
			description: 'The height of the toggle component indicator',
			type: 'size',
			default: '20px'
		},
		{
			name: 'indicator-border-radius',
			description: 'The border radius of the toggle component indicator',
			type: 'size',
			default: '20px'
		},
		{
			name: 'indicator-icon-width',
			description: 'The width of the toggle component indicator icon',
			type: 'size',
			default: '16px'
		},
		{
			name: 'indicator-icon-height',
			description: 'The height of the toggle component indicator icon',
			type: 'size',
			default: '16px'
		},
		{
			name: 'indicator-icon-border-radius',
			description: 'The border radius of the toggle component indicator icon',
			type: 'size',
			default: '50%'
		},
		{
			name: 'transition-duration',
			description: 'The transition duration of the toggle component',
			default: 'var(--transition-duration)'
		},
		{
			name: 'color',
			description: 'The label color of the toggle component',
			type: 'color',
			variants: {
				light: 'contrast-color($color-light)',
				dark: 'contrast-color($color-dark)'
			}
		},
		{
			name: 'color-disabled',
			description: 'The label color of the toggle component when disabled',
			type: 'color',
			variants: {
				light: 'color(\'light-70\')',
				dark: 'color(\'dark-30\')'
			}
		},
		{
			name: 'indicator-background',
			description: 'The background of the toggle component indicator',
			type: 'color',
			variants: {
				light: 'color(\'light\')',
				dark: 'color(\'dark\')'
			}
		},
		{
			name: 'indicator-background-checked',
			description: 'The background of the toggle component indicator when checked',
			type: 'color',
			variants: {
				light: 'color(\'primary\')',
				dark: 'color(\'primary\')'
			}
		},
		{
			name: 'indicator-background-disabled',
			description: 'The background of the toggle component indicator when disabled',
			type: 'color',
			variants: {
				light: 'color(\'light-40\')',
				dark: 'color(\'dark-40\')'
			}
		},
		{
			name: 'indicator-background-checked-disabled',
			description: 'The background of the toggle component indicator when checked and disabled',
			type: 'color',
			variants: {
				light: 'color(\'primary-25\')',
				dark: 'color(\'primary-75\')'
			}
		},
		{
			name: 'indicator-border-color',
			description: 'The border-color of the toggle component indicator',
			type: 'color',
			variants: {
				light: 'color(\'light-55\')',
				dark: 'color(\'dark\')'
			}
		},
		{
			name: 'indicator-border-color-checked',
			description: 'The border-color of the toggle component indicator when checked',
			type: 'color',
			variants: {
				light: 'color(\'primary-55\')',
				dark: 'color(\'primary-55\')'
			}
		},
		{
			name: 'indicator-border-color-disabled',
			description: 'The border-color of the toggle component indicator when disabled',
			type: 'color',
			variants: {
				light: 'color(\'light\')',
				dark: 'color(\'dark\')'
			}
		},
		{
			name: 'indicator-border-color-checked-disabled',
			description: 'The border-color of the toggle component indicator when checked and disabled',
			type: 'color',
			variants: {
				light: 'color(\'primary-30\')',
				dark: 'color(\'primary-70\')'
			}
		},
		{
			name: 'indicator-icon-background',
			description: 'The background of the toggle component indicator icon',
			type: 'color',
			variants: {
				light: 'color(\'white\')',
				dark: 'color(\'white\')'
			}
		},
		{
			name: 'indicator-icon-background-checked',
			description: 'The background of the toggle component indicator icon when checked',
			type: 'color',
			variants: {
				light: 'color(\'white\')',
				dark: 'color(\'white\')'
			}
		},
		{
			name: 'indicator-icon-background-disabled',
			description: 'The background of the toggle component indicator icon when disabled',
			type: 'color',
			variants: {
				light: 'color(\'gray-05\')',
				dark: 'color(\'gray-25\')'
			}
		},
		{
			name: 'indicator-icon-background-checked-disabled',
			description: 'The background of the toggle component indicator icon when checked and disabled',
			type: 'color',
			variants: {
				light: 'color(\'gray-10\')',
				dark: 'color(\'dark-25\')'
			}
		}
	]
};

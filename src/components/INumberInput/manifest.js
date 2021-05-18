module.exports = {
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
			description: 'The color variant of the input',
			type: [
				'light',
				'dark'
			],
			default: 'light'
		},
		{
			name: 'clearable',
			description: 'Display the input as clearable',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'disabled',
			description: 'The disabled state of the input',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'id',
			description: 'The id of the internal input element',
			type: [
				'String'
			],
			default: '{"type":"","default":""}'
		},
		{
			name: 'modelValue',
			description: 'Used to set the field value',
			type: [
				'String',
				'Number'
			],
			default: '{"type":"","default":""}'
		},
		{
			name: 'name',
			description: 'The unique identifier of the input',
			type: [
				'String'
			],
			default: 'uid()'
		},
		{
			name: 'readonly',
			description: 'The readonly state of the input',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'size',
			description: 'The size variant of the input',
			type: [
				'sm',
				'md',
				'lg'
			],
			default: 'md'
		},
		{
			name: 'tabindex',
			description: 'The tabindex of the input',
			type: [
				'Number',
				'String'
			],
			default: '1'
		},
		{
			name: 'min',
			description: 'The minimum allowed input value',
			type: [
				'Number'
			],
			default: '-Infinity'
		},
		{
			name: 'max',
			description: 'The maximum allowed input value',
			type: [
				'Number'
			],
			default: '+Infinity'
		},
		{
			name: 'precision',
			description: 'The precision of the input value, for floating point numbers',
			type: [
				'Number'
			],
			default: '0'
		},
		{
			name: 'step',
			description: 'The increment step to increase or decrease the value by',
			type: [
				'Number'
			],
			default: '1'
		}
	]
};

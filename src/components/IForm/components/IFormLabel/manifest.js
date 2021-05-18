module.exports = {
	slots: [
		{
			name: 'default',
			description: 'Slot for default form label content',
			type: []
		}
	],
	props: [
		{
			name: 'for',
			description: 'The id of the target input to be focused by the form label. If left empty, clicking the form label will focus the next sibling input',
			type: [
				'String'
			],
			default: '{"type":"","default":""}'
		},
		{
			name: 'placement',
			description: 'The placement of the form label',
			type: [
				'left',
				'right'
			],
			default: 'left'
		},
		{
			name: 'size',
			description: 'The size variant of the form label',
			type: [
				'sm',
				'md',
				'lg'
			],
			default: 'md'
		}
	]
};

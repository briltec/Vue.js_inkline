module.exports = {
	name: 'hamburger-menu',
	events: [
		{
			name: 'update:modelValue',
			description: 'Event emitted for setting the modelValue',
			type: []
		}
	],
	props: [
		{
			name: 'animation',
			description: 'The animation of the hamburger menu',
			type: [
				'close',
				'arrow-up',
				'arrow-down',
				'arrow-left',
				'arrow-right',
				'plus',
				'minus'
			],
			default: 'close'
		},
		{
			name: 'color',
			description: 'The color variant of the hamburger menu',
			type: [
				'light',
				'dark'
			],
			default: 'light'
		},
		{
			name: 'modelValue',
			description: 'Used to set the hamburger menu as opened or closed',
			type: [
				'Boolean'
			],
			default: 'false'
		}
	],
	styles: [
		{
			name: 'bar-width',
			description: 'The width of the hamburger-menu component bars',
			default: '30px'
		},
		{
			name: 'bar-height',
			description: 'The height of the hamburger-menu component bars',
			default: '3px'
		},
		{
			name: 'bar-border-radius',
			description: 'The border radius of the hamburger-menu component bars',
			default: '2px'
		},
		{
			name: 'bar-spacing',
			description: 'The spacing between the hamburger-menu component bars',
			default: '5px'
		},
		{
			name: 'padding',
			description: 'The padding of the hamburger-menu component',
			default: 'spacing(\'1/2\')'
		},
		{
			name: 'opacity',
			description: 'The opacity of the hamburger-menu component',
			default: '0.7'
		},
		{
			name: 'opacity-hover',
			description: 'The opacity of the hamburger-menu component',
			default: '1'
		},
		{
			name: 'background',
			description: 'The background of the hamburger-menu component',
			type: 'color',
			variants: {
				light: 'color(\'dark\')',
				dark: 'color(\'light\')'
			}
		}
	]
};

module.exports = {
    name: 'column',
	slots: [
		{
			name: 'default',
			description: 'Slot for default column content',
			type: []
		}
	],
	props: [
		{
			name: 'xs',
			description: 'The number of columns to span for extra-small screen sizes. Setting the prop to true will set the width automatically',
			type: [
				'Boolean',
				'String',
				'Number'
			]
		},
		{
			name: 'sm',
			description: 'The number of columns to span for small screen sizes. Setting the prop to true will set the width automatically',
			type: [
				'Boolean',
				'String',
				'Number'
			]
		},
		{
			name: 'md',
			description: 'The number of columns to span for medium screen sizes. Setting the prop to true will set the width automatically',
			type: [
				'Boolean',
				'String',
				'Number'
			]
		},
		{
			name: 'lg',
			description: 'The number of columns to span for large screen sizes. Setting the prop to true will set the width automatically',
			type: [
				'Boolean',
				'String',
				'Number'
			]
		},
		{
			name: 'xl',
			description: 'The number of columns to span for extra-large screen sizes. Setting the prop to true will set the width automatically',
			type: [
				'Boolean',
				'String',
				'Number'
			]
		},
		{
			name: 'xxl',
			description: 'The number of columns to span for extra-extra-large screen sizes. Setting the prop to true will set the width automatically',
			type: [
				'Boolean',
				'String',
				'Number'
			]
		},
		{
			name: 'first',
			description: 'Display the column as the first column',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'first-xs',
			description: 'Display the column as the first column on extra-small screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'first-sm',
			description: 'Display the column as the first column on small screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'first-md',
			description: 'Display the column as the first column on medium screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'first-lg',
			description: 'Display the column as the first column on large screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'first-xl',
			description: 'Display the column as the first column on extra-large screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'first-xxl',
			description: 'Display the column as the first column on extra-extra-large screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'last',
			description: 'Display the column as the last column',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'last-xs',
			description: 'Display the column as the last column on extra-small screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'last-sm',
			description: 'Display the column as the last column on small screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'last-md',
			description: 'Display the column as the last column on medium screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'last-lg',
			description: 'Display the column as the last column on large screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'last-xl',
			description: 'Display the column as the last column on extra-large screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'last-xxl',
			description: 'Display the column as the last column on extra-extra-large screens',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'offset',
			description: 'The number of columns to offset the column by',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'offset-xs',
			description: 'The number of columns to offset the column by on extra-small screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'offset-sm',
			description: 'The number of columns to offset the column by on small screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'offset-md',
			description: 'The number of columns to offset the column by on medium screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'offset-lg',
			description: 'The number of columns to offset the column by on large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'offset-xl',
			description: 'The number of columns to offset the column by on extra-large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'offset-xxl',
			description: 'The number of columns to offset the column by on extra-extra-large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'push',
			description: 'The number of columns to push the column by',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'push-xs',
			description: 'The number of columns to push the column by on extra-small screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'push-sm',
			description: 'The number of columns to push the column by on small screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'push-md',
			description: 'The number of columns to push the column by on medium screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'push-lg',
			description: 'The number of columns to push the column by on large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'push-xl',
			description: 'The number of columns to push the column by on extra-large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'push-xxl',
			description: 'The number of columns to push the column by on extra-extra-large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'pull',
			description: 'The number of columns to pull the column by',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'pull-xs',
			description: 'The number of columns to pull the column by on extra-small screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'pull-sm',
			description: 'The number of columns to pull the column by on small screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'pull-md',
			description: 'The number of columns to pull the column by on medium screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'pull-lg',
			description: 'The number of columns to pull the column by on large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'pull-xl',
			description: 'The number of columns to pull the column by on extra-large screens',
			type: [
				'String',
				'Number'
			]
		},
		{
			name: 'pull-xxl',
			description: 'The number of columns to pull the column by on extra-extra-large screens',
			type: [
				'String',
				'Number'
			]
		}
	],
    css: {
	    selector: '.column'
    }
};

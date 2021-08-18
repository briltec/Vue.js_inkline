module.exports = {
    slots: [
        {
            name: 'default',
            description: 'Slot for default nav item content',
            type: []
        }
    ],
    props: [
        {
            name: 'active',
            description: 'The active state of the nav item',
            type: [
                'Boolean'
            ],
            default: 'false'
        },
        {
            name: 'disabled',
            description: 'The disabled state of the nav item',
            type: [
                'Boolean'
            ],
            default: 'false'
        },
        {
            name: 'tag',
            description: 'Set the HTML tag to be used for rendering the nav item',
            type: [
                'String'
            ],
            default: 'div'
        },
        {
            name: 'tabindex',
            description: 'The tabindex of the list group item',
            type: [
                'Number',
                'String'
            ],
            default: '1'
        }
    ]
};
import ILayout from '../index.vue';
import {
    ILayoutContentHeader,
    ILayoutContentHeaderFooter,
    ILayoutContentWithLeftAsideHeaderFooter,
    ILayoutContentWithLeftAndRightAsidesHeaderFooter,
    ILayoutContentWithRightAsideHeaderFooter,
    ILayoutLeftAndRightAsidesWithContentHeaderFooter,
    ILayoutLeftAsideWithContentHeaderFooter,
    ILayoutRightAsideWithContentHeaderFooter
} from './index';

export default {
    component: ILayout,
    title: 'Components/Layout'
};

const Template = (args: any) => ({
    setup: () => ({ args }),
    template: `<i-layout v-bind="args">
        Layout
    </i-layout>`,
});

export const Component = Template.bind({});

export const ContentHeader = () => ILayoutContentHeader;
export const ContentHeaderFooter = () => ILayoutContentHeaderFooter;
export const ContentWithLeftAsideHeaderFooter = () => ILayoutContentWithLeftAsideHeaderFooter;
export const ContentWithLeftAndRightAsidesHeaderFooter = () => ILayoutContentWithLeftAndRightAsidesHeaderFooter;
export const ContentWithRightAsideHeaderFooter = () => ILayoutContentWithRightAsideHeaderFooter;
export const LeftAndRightAsidesWithContentHeaderFooter = () => ILayoutLeftAndRightAsidesWithContentHeaderFooter;
export const LeftAsideWithContentHeaderFooter = () => ILayoutLeftAsideWithContentHeaderFooter;
export const RightAsideWithContentHeaderFooter = () => ILayoutRightAsideWithContentHeaderFooter;

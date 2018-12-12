import { mount } from '@vue/test-utils';
import BreadcrumbItem from 'inkline/components/BreadcrumbItem';

describe('Components', () => {
    describe('BreadcrumbItem', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(BreadcrumbItem);
        });

        it('should render correctly', () => {
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
});

import { mount } from '@vue/test-utils';
import NavbarBrand from 'inkline/components/NavbarBrand';

describe('Components', () => {
    describe('NavbarBrand', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(NavbarBrand);
        });

        test('should render correctly', () => {
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
});
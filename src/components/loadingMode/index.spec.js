import React from 'react';
import { mount, shallow } from 'enzyme';
import Loading from './index';

describe('Test Loading Component', () => {
    let wrapper, props;

    it('should not render element which have no props', () => {
        wrapper = shallow(<Loading />);
        const tableLoad = wrapper.find('table')
        expect(tableLoad.length).toEqual(0);
    });

    it('should not render element which have false props', () => {
        props = { data: 'apel' };
        wrapper = shallow(<Loading {...props} />);
        const tableLoad = wrapper.find('table')
        expect(tableLoad.length).toEqual(0);
    });

    it('should render element', () => {
        props = { data: 'table' };
        wrapper = mount(<Loading {...props} />);
        const tableLoad = wrapper.find('table')
        expect(tableLoad.length).toEqual(1);
    });
});
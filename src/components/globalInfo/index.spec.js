import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './index';

describe('Test Loading Component', () => {
    let wrapper, props;

    it('should not render element if have no props', () => {
        wrapper = shallow(<Component />);
        const element = wrapper.find('.global-info')
        expect(element.length).toEqual(0);
    });

    it('should render element if have right props', () => {
        props = {
            data: {
                cases: 0,
                recovered: 0,
                deaths: 0
            }
        };
        wrapper = mount(<Component {...props} />);
        const element = wrapper.find('.global-info.row');
        expect(element.length).toEqual(1);
    });
});
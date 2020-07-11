import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('Test Footer Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = wrapper = shallow(<Component />)
    })

    it('renders correctly', () => {
        expect(wrapper.find('footer').exists()).toBe(true)
    })

    it('should contain p element', () => {
        const footer = wrapper.find("footer");
        expect(footer.find('p').length).toBe(1);
    })
});
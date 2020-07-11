import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('Test Distance Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = wrapper = shallow(<Component />)
    })

    it('should renders correctly', () => {
        expect(wrapper.find('.inputScale').exists()).toBe(true)
    })

    it('should have element p and input', () => {
        const element = wrapper.find('.inputScale');
        expect(element.find('p').exists()).toBeTruthy();
        expect(element.find('input').exists()).toBeTruthy();
    })

    it('should have certain attributes', () => {
        const input = wrapper.find("input");
        expect(input.props()).toHaveProperty("value");
        expect(input.props().hasOwnProperty('onChange')).toBe(true);
    })
});
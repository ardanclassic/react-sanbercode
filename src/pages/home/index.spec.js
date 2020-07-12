import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('Test Home Component', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Component />))

    it('should renders parent element correctly', () => {
        const parentElement = wrapper.find('.home-area')
        expect(parentElement.exists()).toBeTruthy();
    })

    it('should renders sub element', () => {
        expect(wrapper.find('h1').exists()).toBeTruthy();
        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.find('p').exists()).toBeTruthy();
        expect(wrapper.find('.sites').exists()).toBeTruthy();
        expect(wrapper.find('a').exists()).toBeTruthy();

        expect(wrapper.find('h1').length).toEqual(1);
        expect(wrapper.find('h2').length).toEqual(1);
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('.sites').length).toEqual(1);
        expect(wrapper.find('a').length).toEqual(2);
    })
});
import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('Test Converter Component', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Component />))

    it('should renders parent element correctly', () => {
        const parentElement = wrapper.find('.converter-area')
        expect(parentElement.exists()).toBeTruthy();
    })

    it('should renders subparent element', () => {
        expect(wrapper.find('h1').exists()).toBeTruthy();
        expect(wrapper.find('h1').length).toEqual(3);

        expect(wrapper.find('Row').exists()).toBeTruthy();
        expect(wrapper.find('Row').length).toEqual(1);
        
        expect(wrapper.find('Col').exists()).toBeTruthy();
        expect(wrapper.find('Col').length).toEqual(2);

        expect(wrapper.find('.group.weight').exists()).toBeTruthy();
        expect(wrapper.find('WeightInput').exists()).toBeTruthy();
        expect(wrapper.find('WeightInput').length).toEqual(4);

        expect(wrapper.find('.group.distance').exists()).toBeTruthy();
        expect(wrapper.find('JarakInput').exists()).toBeTruthy();
        expect(wrapper.find('JarakInput').length).toEqual(4);
    })
    
    it('should define deafult state in constructor', () => {
        expect(wrapper.state('satuan')).toBe('m');
        expect(wrapper.state('jarak')).toBe('');
        expect(wrapper.state('weightScale')).toBe('kg');
        expect(wrapper.state('weight')).toBe('');
    });
});
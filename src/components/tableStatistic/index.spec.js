import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from './index';

describe('Test Loading Component', () => {
    let wrapper, props;
    
    it('should not table contain if have no props', () => {
        wrapper = shallow(<Component />);
        const tableRow = wrapper.find('td')
        expect(tableRow.length).toEqual(0);
    });

    it('should render element if have right props', () => {
        let props = {
            data: [{
                countryInfo: { flag: 'testFlag' },
                country: 'testCountry',
                cases: 0,
                recovered: 0,
                death: 0,
            }]
        }

        wrapper = mount(<Component {...props} />);
        const element = wrapper.find('td');
        expect(element.length).toEqual(6);
    });
});
import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'utils';
import CountryInfo from './index';

describe('Country Info Component', () => {
    let wrapper, card, button;
    beforeEach(() => {
        wrapper = mount(<CountryInfo />);
        button = wrapper.find("button");
    })

    it('should render form', () => {
        const component = findByTestAttr(wrapper, 'form-country');
        expect(component.length).toEqual(1);
    });

    it('should render button', () => {
        expect(button.length).toEqual(1);
    });

    it('should have 0 card element when component have no prop', () => {
        button.simulate('click');
        card = wrapper.find('.card');
        expect(card.length).toEqual(0);
    });

    it('should show card element when button is clicked', () => {
        let props = {
            data: {
                countryInfo: { flag: 'testFlag' },
                country: 'testCountry',
                cases: 0,
                recovered: 0,
                death: 0,
            }
        }
        wrapper.setProps({ ...props });
        button.simulate('click');
        card = wrapper.find('.card');
        expect(card.length).toEqual(1);
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import { findByTestAttr } from 'utils';

const setup = (props = {}) => {
    const component = shallow(<Navbar {...props} />);
    return component;
}

// providing mock location from useLocation
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "baseurl/example/path"
    })
}));

describe('Navbar Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    })

    it('should render navbar', () => {
        const wrapper = findByTestAttr(component, 'navbar');
        expect(wrapper.length).toEqual(1);
    });

    it('should render a title logo', () => {
        const wrapper = findByTestAttr(component, 'logo-title');
        expect(wrapper.length).toEqual(1);
    });

    it('should render a list menu', () => {
        const wrapper = findByTestAttr(component, 'list-menu');
        expect(wrapper.length).toEqual(1);
    });
});
import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Footer', function () {
    let wrapper;
	  
	beforeAll(() => {
        wrapper = shallow(<Footer />);
	});
    
	test('Footer should renders 2 menus"', () => {
		expect(wrapper.find('ul li').length).toEqual(2);
    });
    
    test('Footer active menu should be Products"', () => {
		expect(wrapper.find('ul li.active span').text()).toEqual("Products");
	});
});

import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import ProductCard from '../src/components/ProductCard';

const productObj = {
    id: 6,
    title: 'The Scout Skincare Kit',
    description: '<p><em>This is a demonstration store. You can purchase products like this from <a href="http://unitedbyblue.com/" target="_blank">United By Blue</a>.</em></p><meta charset="utf-8">\n<p><span>A collection of the best Ursa Major has to offer! "The Scout" kit contains travel sizes of their best selling skin care items including: </span></p>\n<ul>\n<li><span style="line-height: 1.4;">Face Wash (2 fl oz)</span></li>\n<li><span style="line-height: 1.4;">Shave Cream (2 fl oz)</span></li>\n<li><span style="line-height: 1.4;">Face Balm (0.5 fl oz)</span></li>\n<li><span style="line-height: 1.4;">5 tonic-infused bamboo Face Wipes</span></li>\n</ul>\n<p><span>All wrapped together in a great, reusable tin.</span><span class="aam"> </span></p>',
    image: 'https://cdn.shopify.com/s/files/1/0803/6591/products/skin-care_c18143d5-6378-46aa-b0d7-526aee3bc776.jpg?v=1426708827',
    type: 'Accessories',
    price: 36,
};

describe('Product card', () => {
    it('check for renderButton function', () => {
        sinon.spy(ProductCard.prototype, 'renderButton');
        const wrapper = shallow(<ProductCard product={productObj} isAddedToCart={false} />);
        expect(ProductCard.prototype.renderButton.calledOnce).to.equal(true);
    });

    it('check for props', () => {
        const wrapper = mount(<ProductCard product={productObj} isAddedToCart={false} />);
        expect(wrapper.props().product.title).to.be.equal('The Scout Skincare Kit');
        expect(wrapper.props().product.price).to.be.equal(36);
        expect(wrapper.props().isAddedToCart).to.be.false;
    });

    it('should be a card item', () => {
        const wrapper = shallow(<ProductCard product={productObj} isAddedToCart={false} />);
        expect(wrapper.find('div')).to.have.length(1);
    });
});

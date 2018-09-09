import React from 'react';

import {ViewBagCartWrapper} from './styles';

const ViewBagCart = ({products, productCart}) => {
    let items = 0;
    let price = 0;
    Object.keys(productCart).forEach(code => {
        items = items+ productCart[code];
        let productObj = products.find((o) => o.skuCode === code);
        if(productObj) {
            price = price + parseInt(productObj.mrp * productCart[code]);
        }
        return productCart[code];
    });
    
    return (
        <ViewBagCartWrapper>
            <div className="cart-detail">
                <span className="quantity">{items} items</span>
                <span>|</span>
                <span className="price">Rs. {price}</span>
            </div>
            <div className="view-bag">
                <span>VIEW BAG ></span>
            </div>
        </ViewBagCartWrapper>
    )
}

export default ViewBagCart; 
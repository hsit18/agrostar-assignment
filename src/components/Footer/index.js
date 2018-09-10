import React from 'react';

import {FooterWrapper} from './styles';

const Footer = () => (
    <FooterWrapper>
        <ul>
            <li className="active">
                <i className="fas fa-shopping-bag" />
                <span>Products</span>
            </li>
            <li>
                <i className="fas fa-shopping-bag" />
                <span>My Orders</span>
            </li>
        </ul>
    </FooterWrapper>
);

export default Footer;
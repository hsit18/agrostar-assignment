import React, { Component } from 'react'

import {FooterWrapper} from './styles';

class Footer extends Component {
    render () {
        return (
            <FooterWrapper>
                <ul>
                    <li>Products</li>
                    <li>My Orders</li>
                </ul>
            </FooterWrapper>
        )
    }
}

export default Footer;
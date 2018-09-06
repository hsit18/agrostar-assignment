import React, { Component } from 'react'

import {HeaderWrapper} from './styles';

class Header extends Component {
    render () {
        return (
            <HeaderWrapper>
                <h1>
                    AgroStar <span>LITE</span>
                </h1>
            </HeaderWrapper>
        )
    }
}

export default Header;
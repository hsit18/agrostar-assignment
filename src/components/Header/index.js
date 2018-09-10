import React from 'react'

import {HeaderWrapper} from './styles';

const Header = () => (
    <HeaderWrapper>
        <h1>
            AgroStar <span>LITE</span>
        </h1>
        <div className="header-icon">
            <i className="fas fa-sync-alt" />
            <i className="fas fa-user-alt" />
        </div>
        
    </HeaderWrapper>
);

export default Header;
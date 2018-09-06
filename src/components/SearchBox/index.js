import React, { Component } from 'react'

import {SearchBoxWrapper} from './styles';

class SearchBox extends Component {
    render () {
        return (
            <SearchBoxWrapper>
                <input type="text" placeholder="Search by product name" />
            </SearchBoxWrapper>
        )
    }
}

export default SearchBox;
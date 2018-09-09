import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../state/products';

import {SearchBoxWrapper} from './styles';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.onChange_SearchText = this.onChange_SearchText.bind(this);
    }
    
    onChange_SearchText({target: { value } }) {
        this.props.setProductSearchText(value);
    }

    render () {
        const {searchText} = this.props;
        return (
            <SearchBoxWrapper>
                <input type="text" defaultValue={searchText} onChange={this.onChange_SearchText} placeholder="Search by product name" />
            </SearchBoxWrapper>
        )
    }
}

export default connect(
    state => ({ searchText: state.products.searchText}),
    dispatch => bindActionCreators(actions, dispatch),
)(SearchBox);
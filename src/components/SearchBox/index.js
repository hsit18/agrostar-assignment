import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../state/products';

import {SearchBoxWrapper} from './styles';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onClick_SearchText = this.onClick_SearchText.bind(this);
        this.onChange_SetValue = this.onChange_SetValue.bind(this);
    }
    
    onChange_SetValue({target: { value }}) {
        this.setState({value});
    }
    onClick_SearchText() {
        this.props.setProductSearchText(this.state.value);
    }

    render () {
        const {value} = this.state;
        return (
            <SearchBoxWrapper>
                <input type="text" defaultValue={value} onChange={this.onChange_SetValue} placeholder="Search by product name" />
                <i onClick={this.onClick_SearchText} className="fas fa-search"></i>
            </SearchBoxWrapper>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => bindActionCreators(actions, dispatch),
)(SearchBox);
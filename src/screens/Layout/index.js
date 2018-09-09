import React, { Component } from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';

import ProductPage from '../ProductPage';

import {LayoutWrapper, Main} from './styles';

class Layout extends Component {
    render () {
        return (
            <LayoutWrapper>
                <Header />
                <SearchBox />
                <Main>
                    <ProductPage />
                </Main>
                <Footer />
            </LayoutWrapper>
        )
    }
}

export default Layout;
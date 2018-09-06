import React, { Component } from 'react'

import {LayoutWrapper, Container} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';

import ProductPage from '../ProductPage';

class Layout extends Component {
    render () {
        return (
            <LayoutWrapper>
                <Header />
                <Container>
                    <SearchBox />
                    <ProductPage />
                </Container>
                <Footer />
            </LayoutWrapper>
        )
    }
}

export default Layout;
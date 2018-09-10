import React from 'react'

import ProductPage from '../ProductPage';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';

import {LayoutWrapper, Main} from './styles';

const Layout = () => (
    <LayoutWrapper>
        <Header />
        <SearchBox />
        <Main>
            <ProductPage />
        </Main>
        <Footer />
    </LayoutWrapper>
)

export default Layout;
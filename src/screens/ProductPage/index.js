import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../state/products';

import ProductCard from '../../components/ProductCard';
import ViewBagCart from '../../components/ViewBagCart';

import {ProductWrapper, NoResultFound} from './styles';
class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.onClick_addProduct = this.onClick_addProduct.bind(this);
        this.onClick_removeProduct = this.onClick_removeProduct.bind(this);        
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    onClick_addProduct({currentTarget}) {
        this.props.addProduct(currentTarget.getAttribute('data-code'));
    }

    onClick_removeProduct({currentTarget}) {
        this.props.removeProduct(currentTarget.getAttribute('data-code'));
    }

    render () {
        const {productList, productCart, searchText} = this.props;
        
        if(productList && productList.length) {
            let filteredProducts = [];
            if(searchText && searchText.length > 2) {
                filteredProducts = productList.filter(({productName}) => (productName.toLowerCase().indexOf(searchText) > -1));
            } else {
                filteredProducts = productList;
            }
            if(!(filteredProducts && filteredProducts.length)) {
                return (
                    <NoResultFound>No Result Found</NoResultFound>
                ); 
            }
            return (   
                <React.Fragment>
                    <ProductWrapper>
                        {filteredProducts.map(product => (
                            <ProductCard 
                                key={product.skuCode} 
                                product={product} 
                                productCart={productCart[product.skuCode]}
                                onClick_addProduct={this.onClick_addProduct}    
                                onClick_removeProduct={this.onClick_removeProduct}
                            />
                        ))}
                    </ProductWrapper>
                    {productCart && Object.keys(productCart).length > 0 &&
                        <ViewBagCart products={productList} productCart={productCart}/>
                    }
                </React.Fragment>
            )
        }
        return null;
    };
}

export default connect(
    state => ({ 
        searchText: state.products.searchText,
        productList: state.products.productList,
        productCart: state.products.productCart 
    }),
    dispatch => bindActionCreators(actions, dispatch),
)(ProductPage);
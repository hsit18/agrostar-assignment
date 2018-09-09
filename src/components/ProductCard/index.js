import React from 'react';

import {ProductCardWrapper, ProductImage, AddButton, ProductButtonCart} from './styles';

const ProductButton = ({code, onClick_addProduct, onClick_removeProduct, productCart}) => {
    
    if(productCart) {
        return (
            <ProductButtonCart>
                <span className="action" data-code={code} onClick={onClick_addProduct}>+</span>
                <span>{productCart}</span>
                <span className="action" data-code={code} onClick={onClick_removeProduct}>-</span>
            </ProductButtonCart>
        )
    }
    return (
        <AddButton data-code={code} type="button" onClick={onClick_addProduct}>Add</AddButton>
    )
}
const ProductCard = ({product: {productName, mrp, productImages, skuCode}, productCart, onClick_addProduct, onClick_removeProduct}) => {

    return (
        <ProductCardWrapper>
            <ProductImage src={productImages[0].name} />
            <h2 className="title">{productName}</h2>
            <span className="price">Rs. {mrp}</span>
            <ProductButton
                code={skuCode}
                productCart={productCart}
                onClick_addProduct={onClick_addProduct}
                onClick_removeProduct={onClick_removeProduct}
            />
        </ProductCardWrapper>
    )
}

export default ProductCard; 
import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
    background: #fff;
    border-radius: 4px;
    width: 137px;
    height: 208px;
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    .title {
        color: #9C9C9C;
        font-size: 13px;
        font-weight: normal;
        margin: 0;
        height: 40px;
        width: 100%;
    }
    .price {
        padding-top: 3px;
        font-weight: bold;
        font-size: 14px;
        width: 97%;
    }
`;
export const ProductImage = styled.img`
    background: #EAEAEA;
    border-radius: 4px;
    width: 100%;
    height: 113px;
`;

export const AddButton = styled.button`
    background: #fff;
    color: #49944B;
    border: 1px solid #49944B;
    border-radius: 3px;
    width: 100%;
    height: 30px;
    cursor: pointer;
`;

export const ProductButtonCart = styled.div`
    background: #fff;
    color: #49944B;
    border: 1px solid #49944B;
    border-radius: 3px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;

    span {
        padding: 6px;

        &.action {
            background: #B1D8B7;
            width: 10%;
            text-align: center;
            cursor: pointer;
        }
    }

`;






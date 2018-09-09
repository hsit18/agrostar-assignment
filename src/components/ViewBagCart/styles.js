import styled from 'styled-components';

export const ViewBagCartWrapper = styled.div`
    padding: 17px 3px;
    background: #307C2F;
    left: 50%;
    position: absolute;
    width: calc(100% - 15px);
    transform: translate(-50%);
    bottom: 17%
    display: flex;
    color: #fff;
    justify-content: space-between;
    border-radius: 3px;
    font-size: 14px;
    font-weight: normal;

    .cart-detail {
        display: flex;
        justify-content: space-between;
        width: 35%;
    }
`;

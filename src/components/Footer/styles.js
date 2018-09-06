import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    height: 60px;
    background: #fff;
    bottom: 12px;
    position: fixed;
    margin: 0 3px 0 3px;
    width: 348px;

    ul {
        display: flex;
        justify-content: space-around;

        li {
            list-style: none;
            cursor: pointer;
        }
    }
    
`;

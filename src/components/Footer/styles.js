import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    height: 60px;
    background: #fff;
    
    left: 50%;
    position: absolute;
    width: calc(100% - 4px);
    transform: translate(-50%);
    bottom: 1px;

    ul {
        display: flex;
        justify-content: space-around;

        li {
            list-style: none;
            cursor: pointer;
        }
    }
    
`;

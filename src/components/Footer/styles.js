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
        justify-content: space-between;
        padding: 18px 30px 0 30px;
        margin: 0;
        width: 77%;
 
        li {
            list-style: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;

            &.active {
                color: #619C5D;
            }

            span {
                padding-top: 4px;
            }
        }
    }
    
`;

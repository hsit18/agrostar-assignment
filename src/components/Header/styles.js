import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 45px;
    background: #fff;
    margin: 0 0px 38px 2px;
    position: sticky;
    top: 33px;
    padding: 3px;
    width: calc(100% - 10px);
    h1 {
        font-size: 1.2em;
        font-weight: normal;
        color: #A8383C;
        padding: 0;
        margin: 0;
        span {
            color: #479449;
            display: block;
            padding-left: 40px;
            font-style: italic;
        }
    }
`;

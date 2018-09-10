import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
    height: 42px; 
    margin: 0 10px;
    border-radius: 4px;
    border: 1px solid #fff;
    background: #fff;
    display: flex;
    justify-content: space-between;
    input {
        width:85%;
        border: none;
        font-style: italic;
        font-size: 1em;
        padding-left: 8px;
        outline: none;
    }

    i {
        font-size: 1.3em;
        padding: 12px;
    }
`;

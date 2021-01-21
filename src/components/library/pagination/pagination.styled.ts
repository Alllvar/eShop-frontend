import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Button = styled.button`
    width: 80px;
    margin: 0 10px;
    height: 30px;
    cursor: pointer;
    font-family: Lucida Console, Courier, monospace;
    border-radius: 8px;
    border: 1px solid #111111;
    &:hover {
        background-color: #2ECC40;
    }
`;

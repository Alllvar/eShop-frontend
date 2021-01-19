import styled from 'styled-components';

export const FilterListContainer = styled.div`
    position: fixed;
    left: 0%;
    top: 10%;
    margin-left: 150px;
    font-family: Lucida Console, Courier, monospace;
    color: white;
`;

export const Title = styled.h1`
    
`;

export const FilterList = styled.ul`
    padding: 5px;
`;

export const FilterLiElement = styled.li`
    list-style:none;
    margin-bottom: 8px;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: #FFDC00;
    }
`;

export const Input = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 10px;
`;



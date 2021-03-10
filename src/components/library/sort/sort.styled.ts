import styled from 'styled-components';

export const SortContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-between;
`;

export const SortSelect = styled.select`
    width: 100px;
    margin: 8px;
    padding: 8px;
    cursor: pointer;
`;

export const SortOption = styled.option`
    height: 250px;
`;

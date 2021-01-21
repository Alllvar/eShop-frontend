import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;
    margin-bottom: 30px;
`;

export const ProductPhoto = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 30px;
`;

export const ProductInfoContainer = styled.div`
    margin-left: 50px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-family: Lucida Console, Courier, monospace;
`;

export const Title = styled.h1`
    text-decoration: none;
    color: #fff;
    
    &:hover {
        color: #FFDC00;
    }
`;

export const Price = styled.h2`
    font-size: 24px;
`;

export const Description = styled.h4`
    font-size: 16px;
`;

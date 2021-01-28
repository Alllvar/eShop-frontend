import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    width: 800px;
    justify-content: space-between;
    font-family: Lucida Console, Courier, monospace;
    padding-top: 100px;
`;

export const ProductPhotoWrap = styled.div`
    
`;

export const ProductPhoto = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 30px;
`;

export const ProductContentWrap = styled.div`
    width: 350px;
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

export const ReviewContainer = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

export const ReviewTitle = styled.h4`
  font-size: 16px;
  color: #852700;
`;

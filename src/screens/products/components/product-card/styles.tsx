import styled from "styled-components";

export const StyledProductCardWrapper = styled.div`
  background: ${(props) => props.theme.palette.white};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.boxShadow.m};
  padding: 8px;
  color: ${(props) => props.theme.palette.dark};
`;

export const StyledProductCardTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
  text-decoration: none;
`;

export const StyledProductCardImage = styled.div`
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledProductCardPrice = styled.div`
  font-size: 16px;
  margin-top: 8px;
  font-weight: 600;
`;

export const StyledProductCardMinorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${(props) => props.theme.palette.gray};
  margin-top: 4px;
`;

export const StyledProductCardSold = styled.div``;

export const StyledProductCardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${(props) => props.theme.palette.warning};
  font-weight: 600;
`;

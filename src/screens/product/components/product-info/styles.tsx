import styled from "styled-components";

export const StyledProductInfoWrapper = styled.div``;

export const StyledProductInfoImage = styled.div`
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledProductInfoTitle = styled.h1`
  font-size: 24px;
  margin-top: 16px;
  font-weight: 400;
`;

export const StyledProductInfoPrice = styled.div`
  font-size: 32px;
  margin-top: 16px;
  font-weight: 600;
`;

export const StyledProductCardMinorInfo = styled.div``;

export const StyledProductCardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme.palette.warning};
  margin-top: 8px;
`;

export const StyledProductCardSold = styled.div`
  margin-top: 8px;
`;

export const StyledProductCardDescription = styled.div`
  margin-top: 16px;

  p {
    margin-top: 8px;
  }
`;

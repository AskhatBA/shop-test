import styled from "styled-components";

export const StyledSkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 4px));
  grid-gap: 8px;
`;

export const StyledSkeletonCard = styled.div`
  background: ${(props) => props.theme.palette.white};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.boxShadow.m};
  padding: 8px;
`;

export const StyledSkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: #eee;
`;

export const StyledSkeletonTitle = styled.div`
  width: 100%;
  height: 15px;
  background: #eee;
  margin-top: 8px;
`;

export const StyledSkeletonPrice = styled.div`
  width: 100%;
  height: 19px;
  background: #eee;
  margin-top: 8px;
`;

export const StyledSkeletonReviews = styled.div`
  width: 100%;
  height: 15px;
  background: #eee;
  margin-top: 4px;
`;

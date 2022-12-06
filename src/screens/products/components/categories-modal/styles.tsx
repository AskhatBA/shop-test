import styled from "styled-components";

export const StyledCategoriesModal = styled.div`
  padding-top: 68px;

  ul {
    list-style: none;

    li {
      padding: 16px 32px;
      font-weight: 500;
      font-size: 24px;
      &:first-letter {
        text-transform: capitalize;
      }
    }
  }
`;

import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.$color.baseWhite};
  border-radius: 6px;
  box-shadow: 0 8px 16px ${({ theme }) => theme.$color.background__dark};
  display: inline-block;
  max-width: 90%;
  margin: ${({ theme }) => theme.$size.xs};
  padding: ${({ theme }) => theme.$size.reg};
  vertical-align: top;
`;

export const StyledDateSpan = styled.span`
  font-size: ${({ theme }) => theme.$size.sm};
  color: ${({ theme }) => theme.$color.text__light};
`;

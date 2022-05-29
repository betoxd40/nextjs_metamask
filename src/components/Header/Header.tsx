import { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Header: FunctionComponent = () => (
  <Container>
    <h2>ETH Block Number App</h2>
  </Container>
);

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 0px -1px 0px rgb(242 243 247 / 16%);

  h2 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  background-color: #f0f0f1;
  border-bottom: solid #d1d1d3 4px;
`;
export const HeaderContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  ul {
    padding-left: 0;
  }
`;

export const Logo = styled.span`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  font-weight: 700;
  font-size: 23px;
  color: #1976d2;
`;

export const Li = styled.li`
  display: inline-block;
  padding: 7px 15px;
  &:nth-child(1) {
    padding-left: 30px;
  }
  a {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }
  .active {
    color: #1976d2;
  }
`;
export const UserBlock = styled.div`
  margin-left: auto;
`;

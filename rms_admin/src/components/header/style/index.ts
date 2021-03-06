import styled from 'styled-components';
import { color } from '../../../style';

export const Header = styled.header`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Center = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  a {
    color: ${color.main};
    :hover {
      color: ${color.main};
    }
  }
`;

export const Nav = styled.nav`
  width: 340px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 13px;

    a:visited,
    a:link,
    a:active,
    a:hover {
      color: black;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 15px;
  }
  span {
    margin-left: 3px;
  }
`;

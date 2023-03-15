import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 25px 40px;
`;
export const Img = styled.img`
  width: 300px;
  height: 500px;
  margin-right: 20px;
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.04);
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin: 20px 10px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;
export const Subject = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin: 15px 10px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  list-style: none;
  font-size: 20px;
  font-weight: 400;
  margin: 10px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #9d99cd68;
  /* margin: 25px; */
  padding: 25px;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    color: #99a4f7;
  }
`;
export const ListLink = styled.ul`
  display: flex;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    color: #99a4f7;
  }
  justify-content: start;
  align-items: center;
  list-style: none;
`;

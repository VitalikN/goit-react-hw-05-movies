import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: calc(100vw - 48px);

  margin: 0 auto;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.04);
  }
`;
export const Img = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const Text = styled.p`
  padding: 10px;
  color: black;
  font-size: 14px;
  font-weight: 600;
`;

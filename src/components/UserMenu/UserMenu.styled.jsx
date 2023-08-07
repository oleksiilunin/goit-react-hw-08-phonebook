import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const UserMenuText = styled.p`
  padding: 8px;
  border-radius: 8px;

  color: #5b5c6c;
  background-color: #45e2a6;
  /* background-color: rgb(255, 253, 140); */

  font-size: 20px;
  font-weight: 600;
  /* text-decoration: underline; */
`;
// export const UserMenuButton = styled.button`
//   padding: 8px;
//   border-radius: 8px;

//   color: #5b5c6c;
//   background-color: #45e2a6;

//   font-size: 20px;
//   font-weight: 600;
//   text-decoration: underline;
// `;

export const UserMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* width: 160px; */
  height: 36px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #cececf;

  font-size: 16px;
  font-weight: 500;

  background-color: #d2d8db;
  color: #666666;
  box-shadow: #b4b4b4 2px 2px 0px;
  transition: transform 200ms, box-shadow 200ms;

  &:active {
    transform: translateX(2px) translateY(2px);
    box-shadow: #b4b4b4 0px 0px 0px;
  }
`;

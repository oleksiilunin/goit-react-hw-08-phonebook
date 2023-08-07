import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;

  max-width: 1200px;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  max-width: 512px;
  width: 100%;
`;
export const Title = styled.h1`
  color: #5b5c6c;
`;
export const Text = styled.p`
  color: #5b5c6c;

  font-size: 20px;
  text-indent: 20px;
  line-height: 1.5;
`;

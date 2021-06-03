import styled from "styled-components";

export const Container = styled.footer`
  background: #333;
  padding: 0 30px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    position: unset;
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

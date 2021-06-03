import styled from "styled-components";

export const Container = styled.div`
  background: #333;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width: 70px;
    }
    a {
      font-weight: bold;
      color: #fff;
    }
  }
`;

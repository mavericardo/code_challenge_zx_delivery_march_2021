import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  flex: 1 16%;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);

  .product-image img {
    width: 100%;
  }

  .product-info {
    margin-top: auto;
    padding-top: 20px;
    text-align: center;
  }

  .number {
    text-align: center;
  }

  .minus,
  .plus {
    cursor: pointer;
    font-size: 26px;
  }

  .input-minus-plus {
    height: 32px;
    width: 100px;
    text-align: center;
    font-size: 26px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

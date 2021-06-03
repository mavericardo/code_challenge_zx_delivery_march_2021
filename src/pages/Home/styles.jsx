import styled from "styled-components";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";

export const BannerSearch = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
  background-size: cover;
  background-color: #333;
  background-image: url(https://i2.wp.com/brejada.com/wp-content/uploads/2018/05/Casa-Corona-002.jpg?fit=2835%2C1890&ssl=1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    z-index: 1;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #333;
    font-weight: 400;
    width: 40%;
    margin: 0 auto;
  }

  
  @media (min-width: 320px) and (max-width: 480px) {
    background-color: #FFC500;
    background-image: url();
    
    h1 {
      font-size: 28px;
      color: #333;
      width:auto;
    } 
  }
`;

export const ContainerSearch = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 592px;
  font-size: 18px;
  padding: 10px;
  margin: 10px auto 0px auto;
  background: #fff;
  border: none;
  border-radius: 5px;
  ::placeholder {
    color: #333;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 95%;
  }
`;

export const SuggestionsSearch = styled.div`
    width: 592px;
    height: 100px;
    overflow-y: scroll;
    margin: 0px auto 0px auto;
    border-radius: 5px;
   

    .suggestion-loading {
      background: #fff;
      width:100%;
      text-align: center;
      border-radius: 5px;
    }

    .suggestion-item {
      background: #fff;
      cursor: pointer;
      font-size: 13px;
      padding: 5px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      width: 95%;
    }
`;

export const HowItWorks = styled.div`
  h1 {
    z-index: 1;
    font-size: 25px;
    line-height: 44px;
    text-align: center;
    color: #333;
    font-weight: 400;
    width: 40%;
    margin: 20px auto 55px auto;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    height: 250px;

    div {
      height: 100px;
      max-width: 288px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h6 {
        line-height: 20px;
        color: #333;
        font-weight: 400;
        font-size: 23px;
        text-align: center;
      }

      p {
        color: #666;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    h1 {
      font-size: 25px;
      line-height: 44px;
      text-align: center;
      color: #333;
      font-weight: 400;
      width: 40%;
      margin: 20px auto 15px auto;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height:auto;
      margin-bottom: 25px;

      div {
        height: auto;
        width: 100%;
      }
    }
  }
`;

export const ButtonSearchStore = styled.button`
  margin: 15px;
  padding: 12px 12px;
  color: #333;
  cursor: pointer;
  text-align: center;
  background: #feee7d;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 2px 5px 10px #333;

  &:hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }

  &:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  &:focus {
    outline: 1px dotted #333;
    outline-offset: -4px;
  }
`;

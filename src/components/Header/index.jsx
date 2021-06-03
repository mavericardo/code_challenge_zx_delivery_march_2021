import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/small-logo.png";
import { Container, Content } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Zé Delivery" />
          <Link to="/">Zé Delivery</Link>
        </nav>
      </Content>
    </Container>
  );
}

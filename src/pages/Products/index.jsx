import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardProduct from "../../components/CardProduct";
import { Container, ContainerProducts, BackButton, Loading } from "./styles";
import backIcon from "../../assets/back-arrow.png";
import loadingIcon from "../../assets/loading.svg";
import { useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import GET_PRODUCTS from "../../queries/getProducts";

export default function Products() {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  function handleClick() {
    history.push("/");
  }

  const { id } = useParams();

  const [getStore] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      id: id,
      search: "",
      categoryId: null,
    },
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      if (data.poc.products) {
        setProducts(data.poc.products);
      }
    },
    onError: (error) => {
      toast.error(
        "Ops! Tivemos um pequeno problema para buscar os produtos disponíveis para este endereço. Tente novamente ou aguardo um pouco."
      );
      this.handleClick();
    },
  });

  useEffect(() => {
    getStore();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <BackButton onClick={handleClick}>
          <img src={backIcon} alt="backIcon" width="18" /> Voltar
        </BackButton>

        {products.length == 0 && (
          <Loading>
            <img src={loadingIcon} alt="Loading Products" width="60" />
          </Loading>
        )}

        <ContainerProducts>
          {products.map((product) => {
            return <CardProduct key={product.id} product={product} />;
          })}
        </ContainerProducts>
      </Container>
      <Footer />
    </>
  );
}

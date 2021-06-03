import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  BannerSearch,
  ContainerSearch,
  SuggestionsSearch,
  Input,
  HowItWorks,
  ButtonSearchStore,
} from "./styles";
import { useLazyQuery } from "@apollo/client";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { toast } from "react-toastify";
import GET_STORE from "../../queries/getStore";

export default function Home() {
  const history = useHistory();

  const [textButtonSearchStore, setTextButtonSearchStore] = useState(
    "Ver produtos disponíveis 🔦"
  );

  const [address, setAddress] = useState("");

  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    setTextButtonSearchStore("...Buscando produtos disponíveis ⌛️");
    getStore();
  };

  const handleButton = async () => {
    if (address) {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setCoordinates(latLng);
      setTextButtonSearchStore("...Buscando produtos disponíveis ⌛️");
      getStore();
    } else {
      toast.error("Ops! digite um endereço.");
    }
  };

  const [getStore] = useLazyQuery(GET_STORE, {
    variables: {
      algorithm: "NEAREST",
      lat: coordinates.lat,
      long: coordinates.lng,
      now: "2017-08-01T20:00:00.000Z",
    },
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      if (data.pocSearch.length > 0) {
        toast.success(
          "Encontramos produtos disponíveis para este endereço. Beba com moderação 🍻"
        );
        history.push(`/products/${data.pocSearch[0].id}`);
      } else {
        toast.error(
          "Ops! Não encontramos produtos disponíveis para este endereço."
        );
      }
      setTextButtonSearchStore("Ver produtos disponíveis");
    },
    onError: (error) => {
      toast.error(
        "Ops! Tivemos um pequeno problema para buscar os produtos disponíveis para este endereço. Tente novamente ou aguardo um pouco."
      );
      setTextButtonSearchStore("Ver produtos disponíveis");
    },
  });

  return (
    <>
      <Header />
      <BannerSearch>
        <h1>
          <strong> Bebidas geladas </strong> a <strong> preço </strong> de
          mercado na sua casa<strong> agora </strong>
        </h1>

        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
          searchOptions={{componentRestrictions: {country: "br"}}}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <ContainerSearch>
              <Input
                {...getInputProps({
                  placeholder: "Inserir endereço para ver preço",
                })}
              />

              <SuggestionsSearch>
                {loading ? (
                  <div className="suggestion-loading">
                    ...Buscando endereços
                  </div>
                ) : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#333" : "#fff",
                    color: suggestion.active ? "#fff" : "#333",
                  };

                  return (
                    <div
                      className="suggestion-item"
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={suggestion.placeId}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </SuggestionsSearch>
            </ContainerSearch>
          )}
        </PlacesAutocomplete>

        <ButtonSearchStore type="button" onClick={handleButton}>
          {textButtonSearchStore}
        </ButtonSearchStore>
      </BannerSearch>
      <HowItWorks>
        <h1>Como funciona o Zé Delivery?</h1>
        <section>
          <div>
            <figure>
              <img
                width="112px"
                height="112px"
                src="https://courier-images-web.imgix.net/static/img/delivery-man.png?auto=compress,format&amp;fit=max&amp;w=112&amp;h=undefined&amp;dpr=2&amp;fm=png"
                alt="Onde você estiver"
              />
            </figure>
            <h6>Onde você estiver</h6>
            <p>Achamos as bebidas geladinhas na sua área e levamos até você!</p>
          </div>
          <div>
            <figure>
              <img
                width="112px"
                height="112px"
                src="https://courier-images-web.imgix.net/static/img/welcome_how_it_works_02.png?auto=compress,format&amp;fit=max&amp;w=112&amp;h=undefined&amp;dpr=2&amp;fm=png"
                alt="Só as favoritas"
              />
            </figure>
            <h6>Só as favoritas</h6>
            <p>
              Você pode escolher entre cervejas, vinhos, água, energéticos,
              refrigerantes, salgadinhos e até gelo!
            </p>
          </div>
          <div>
            <figure>
              <img
                width="112px"
                height="112px"
                src="https://courier-images-web.imgix.net/static/img/double_cellphone_greeting.png?auto=compress,format&amp;fit=max&amp;w=112&amp;h=undefined&amp;dpr=2&amp;fm=png"
                alt="Facilita seu brinde"
              />
            </figure>
            <h6>Facilita seu brinde</h6>
            <p>
              Suas bebidas chegam geladinhas e super rápidas, prontas para
              brindar!
            </p>
          </div>
        </section>
      </HowItWorks>
      <Footer />
    </>
  );
}

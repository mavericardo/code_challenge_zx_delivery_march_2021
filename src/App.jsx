import "./styles/global.css";
import { Router } from "react-router-dom";
import { ToastContainer  } from 'react-toastify';
import Routes from "./routes";
import history from "./services/history";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./services/apollo";

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={history}>
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </ApolloProvider>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";

import { client } from "./apolloClient";
import { App } from "./App";

const root = createRoot(document.getElementById("root")!);

// Cast App to a React component type so TypeScript accepts it as a JSX element
const AppComponent = App as unknown as React.ComponentType<any>;

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppComponent />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);

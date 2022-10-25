import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { addPost } from "./redux/state";
import { sendMessage } from "./redux/state";

export const root = ReactDOM.createRoot(document.getElementById("root"));

export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} sendMessage={sendMessage} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

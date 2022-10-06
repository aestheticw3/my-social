import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let chatUsersData = [
  { name: "Guinevere Rogers" },
  { name: "Clarissa Leonard" },
  { name: "Dominic Cobbett" },
  { name: "Jade Frost" },
  { name: "Patricia Beck" },
  { name: "Perry Rose" },
  { name: "Sienna Carter" },
  { name: "Clara Wintringham" },
  { name: "Aiken Tate" },
  { name: "Lesley Stanley" },
  { name: "Jillian Hayward" },
];

let chatMessagesData = [
  { message: "First message" },
  { message: "Second message" },
  { message: "Third message" },
  { message: "Fourth message" },
];

let postsData = [
  {
    text: "i get these people are friends of the devs but jesus",
    likes: 121,
  },
  {
    text: "9221 hours: bad game, there's no real late game content",
    likes: 12,
  },
  { text: "i would have never guessed heap for this problem lol", likes: 14 },
  { text: "but pooh, gotta be 1st to review it", likes: 14 },
  { text: "i wonder if my friend's ex's game is for sale", likes: 21 },
  { text: "speaking of", likes: 10 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        chatUsersData={chatUsersData}
        chatMessagesData={chatMessagesData}
        postsData={postsData}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

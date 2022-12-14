import { renderEntireTree } from "./../render";

export let state = {
  profile: {
    postsData: [
      { text: "these people are friends of the devs", likes: 121 },
      { text: "there's no real late game content", likes: 12 },
      {
        text: "i would have never guessed heap for this problem lol",
        likes: 14,
      },
      { text: "but pooh, gotta be 1st to review it", likes: 14 },
      { text: "i wonder if my friend's ex's game is for sale", likes: 21 },
      { text: "speaking of", likes: 10 },
    ],
    newPostText: "blablabla",
  },
  messages: {
    chatUsersData: [
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
    ],

    chatMessagesData: [
      { message: "First message" },
      { message: "Second message" },
      { message: "Third message" },
      { message: "Fourth message" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    text: postMessage,
    likes: 0,
  };
  state.profile.postsData.push(newPost);
  renderEntireTree(state);
};

export let sendMessage = (messageText) => {
  let newMessage = {
    message: messageText,
  };
  state.messages.chatMessagesData.push(newMessage);
  renderEntireTree(state);
};

export default state;

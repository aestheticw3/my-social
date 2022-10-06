import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main
        chatUsersData={props.chatUsersData}
        chatMessagesData={props.chatMessagesData}
        postsData={props.postsData}
      />
    </div>
  );
}

export default App;

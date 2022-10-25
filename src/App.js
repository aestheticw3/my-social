import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main
        state={props.state}
        addPost={props.addPost}
        sendMessage={props.sendMessage}
      />
    </div>
  );
}

export default App;

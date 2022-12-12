import "./App.css";
import Video from "./components/Video";
import VideoFooter from "./components/VideoFooter";

function App() {
  return (
    //BEM naming convention
    <div className=".app">
      <div className="app__videos">
        <Video />
      </div>

    <VideoFooter />
    </div>
  );
}

export default App;

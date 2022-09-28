import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  state={props.state.dialogsPage}
                  addMessage={props.addMessage}
                  updateNewMessageText={props.updateNewMessageText}
                  newMessageText={props.state.dialogsPage.newMessageText}
                />
              }
            />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            {/* <Route
              path="/friends/*"
              element={<Friends state={props.state.sideBar} />}
            /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

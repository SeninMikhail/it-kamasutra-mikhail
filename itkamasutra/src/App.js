import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Suspense } from "react";
import Preloader from "./components/Common/Preloader/Preloader";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        {/* <Nav state={props.state} /> */}
        <Nav />
        <div className="app-wrapper-content">
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Routes>
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/news/*" element={<News />} />
              {/* <Route path="/count/*" element={<Counter />} /> */}
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

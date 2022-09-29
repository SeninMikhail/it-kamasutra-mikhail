import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sideBar-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "MishMyash" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are yo" },
        { id: 3, message: "Yo" },
        { id: 4, message: "kabzda kak prosto" },
        { id: 5, message: "prisobachit' komponentu" },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hello world", likesCount: 12 },
        { id: 2, message: "My post", likesCount: 5 },
      ],
      newPostText: "it-kamasutra",
    },
    sideBar: {
      friends: [{ name: "Alex" }, { name: "Sara" }],
    },
  },
  _callSubscriber() {
    console.log("state changes");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer.bind(this);
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;

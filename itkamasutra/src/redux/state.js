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
      newMessageText: "Message",
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

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  // dispatch(action) {
  //   if (action.type === "ADD-POST") {
  //     let newPost = {
  //       id: 5,
  //       message: this._state.profilePage.newPostText,
  //       likesCount: 0,
  //     };
  //     this._state.profilePage.posts.push(newPost);
  //     this._state.profilePage.newPostText = "";
  //     this._callSubscriber(this._state);
  //   } else if (action.type === "UPDATE-NEW-POST-TEXT") {
  //     this._state.profilePage.newPostText = action.newText;
  //     this._callSubscriber(this._state);
  //   } else if (action.type === "ADD-MESSAGE") {
  //     let newMessage = {
  //       id: 5,
  //       message: this._state.dialogsPage.newMessageText,
  //     };
  //     this._state.dialogsPage.messages.push(newMessage);
  //     this._state.dialogsPage.newMessageText = "";
  //     this._callSubscriber(this._state);
  //   } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
  //     this._state.dialogsPage.newMessageText = action.newText;
  //     this._callSubscriber(this._state);
  //   }
  // },
};

export default store;
window.store = store;

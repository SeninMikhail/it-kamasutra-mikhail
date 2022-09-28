let rerenderEntireTree = () => {
  console.log("state changes");
};

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;

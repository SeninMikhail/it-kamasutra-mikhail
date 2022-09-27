import { rerenderEntireTree } from "./../render.js";

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

export default state;

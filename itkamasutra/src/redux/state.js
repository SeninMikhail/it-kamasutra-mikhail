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
      { id: 4, message: "kabzda" },
      { id: 5, message: "prisobachit'" },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, message: "Hello world", likesCount: 12 },
      { id: 2, message: "My post", likesCount: 5 },
    ],
  },
  sideBar: {
    friends: [{ name: "Alex" }, { name: "Sara" }],
  },
};

export default state;

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageActionCreater = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};
export default dialogsReducer;

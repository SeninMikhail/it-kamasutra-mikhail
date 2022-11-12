import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import {
  addMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;

//         let addMessage = () => {
//           store.dispatch(addMessageActionCreater());
//         };

//         let onMessageChange = (text) => {
//           store.dispatch(updateNewMessageTextActionCreater(text));
//         };

//         return (
//           <Dialogs
//             updateNewMessageTextActionCreater={onMessageChange}
//             addMessage={addMessage}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreater(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreater());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

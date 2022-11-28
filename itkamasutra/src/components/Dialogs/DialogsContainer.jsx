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

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
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

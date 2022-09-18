import React from "react";

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;

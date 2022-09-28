import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import {
  addMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreater());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreater(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>

      <div className={style.messages}>
        {messagesElement}
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>Add Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

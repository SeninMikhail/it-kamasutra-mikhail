import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import {
  addMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
    // props.dispatch(addMessageActionCreater());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageTextActionCreater(text);
    // props.dispatch(updateNewMessageTextActionCreater(text));
  };
  debugger;
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>

      <div className={style.messages}>
        {messagesElement}
        <div>
          <textarea
            placeholder="Enter message"
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
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

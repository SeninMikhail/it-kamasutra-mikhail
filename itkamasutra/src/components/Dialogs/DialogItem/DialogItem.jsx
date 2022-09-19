import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog + " " + style.active}>
      <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;

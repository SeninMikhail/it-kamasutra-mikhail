import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Drt1ewPwIMxcWoRXwAUN79V6n_YQRY3B1g&usqp=CAU"></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;

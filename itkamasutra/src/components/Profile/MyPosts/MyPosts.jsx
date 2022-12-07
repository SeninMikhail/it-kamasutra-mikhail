import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../../redux/profile-reducer";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={style.postBlock}>
      <h3>My post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};
let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" />
      </div>
      <div>
        <button>Add posts</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;

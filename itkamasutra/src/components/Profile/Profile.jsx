import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;

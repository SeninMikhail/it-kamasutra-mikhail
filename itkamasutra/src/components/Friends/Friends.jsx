import React from "react";
import Friend from "./Friend";
// import style from "./Friends.module.css";

const Friends = (props) => {
  const miniFriend = props.state.friends.map((d) => <Friend name={d.name} />);
  return <div>{miniFriend}</div>;
};

export default Friends;

import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/Profile"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/Dialogs"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="News"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="Music"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={style.itemSettings}>
        <NavLink
          to="Settings"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div className={style.itemFriends}>
        <NavLink
          to="Friends"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Friends:
        </NavLink>
        <div className={style.itemFriendsLink}>
          {/* <Friends state={props.state.sideBar} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

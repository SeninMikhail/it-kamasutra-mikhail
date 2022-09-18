import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" />
      </div>

      <div className={style.descriptionBlock}>ava+desc</div>
    </div>
  );
};

export default ProfileInfo;

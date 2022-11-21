import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={style.content}>
      <div className={style.img}>
        <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" />
      </div>

      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava+desc
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWhithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={style.content}>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} />

        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;

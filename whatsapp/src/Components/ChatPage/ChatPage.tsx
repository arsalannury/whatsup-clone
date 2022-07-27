import React from "react";
import MenuSvg from "../SideBar/MenuSvg";
import LensSvg from "./LensSvg";
import "./_chatPage.scss";

const ChatPage: React.FC = () => {
  return (
    <div className="chat-page-container">
      <div className="information-user">
        <div className="all-user-detail">
          <img src="profile.jpg" alt="profile-user-img" />

          <div className="details-user">
            <p className="user-name">ArsalanNury</p>
            <p className="user-last-online">last seen today at 12:03 PM</p>
          </div>
        </div>

        <div className="chat-menu">
          <LensSvg />
          <MenuSvg />
        </div>
      </div>


      <div className="chat-main-content">
 
      </div>

    </div>
  );
};

export default ChatPage;

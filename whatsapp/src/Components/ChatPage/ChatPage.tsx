import React, { SyntheticEvent, useState } from "react";
import MenuSvg from "../SideBar/MenuSvg";
import AttachFileSvg from "./AttachFileSvg";
import LensSvg from "./LensSvg";
import StickerSvg from "./StickerSvg";
import VoiceSvg from "./VoiceSvg";
import Picker from 'emoji-picker-react';
import "./_chatPage.scss";

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [emoji, setEmoji] = useState<boolean>(false);

  const handleChangeMssage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMessage(event.target.value);
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessage(message+emojiObject.emoji)
  };

  const handleStickerShow = (): void => {
    setEmoji(!emoji);
  }

  return (
    <div className="chat-page-container">
      {emoji && <Picker onEmojiClick={onEmojiClick} />}
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

      <div className="chat-main-content"></div>

      <div className="message-send-section">
        <div className="icon-actions">
          <StickerSvg clicked={handleStickerShow} />
          <AttachFileSvg />
        </div>

        <input
          type="text"
          name="message"
          id="message"
          className="send-message-input"
          placeholder="Type a message"
          value={message}
          onChange={(event) => {handleChangeMssage(event)}}
        />

        <VoiceSvg />
      </div>
    </div>
  );
};

export default ChatPage;

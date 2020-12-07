import React from "react";
import defaultImage from "../../images/defaultAvatar.png";
import saveIcon from "../../svg/save.svg";
import "./ReadingContent.scss";
import testImage from "../../images/testImage1.jpeg";

const ReadingContent = (props) => {
  return (
    <div id="reading-content-container">
      <div id="reading-content-header">
        <button id="save-icon-button">
          <img id="save-icon" src={saveIcon} alt="saveIcon"></img>
        </button>
        <div id="author-info">
          <img id="author-ava" src={defaultImage}></img>
          <div id="author-name-date">
            <a id="author-name">Author's Name</a>
            <p id="post-date">April 18th,2020</p>
          </div>
        </div>
      </div>
      <div id="reading-content-preheader">
        <p id="reading-content-title">Title</p>
        <p id="reading-content-subtitle">Subtitle</p>
      </div>
      <img id="reading-content-image" src={testImage} alt="title-image" />
      <div id="reading-content-body">
        <p className="reading-content-body-title">Lorem Ipsum là gì?</p>
        <p className="reading-content-body-paragraph">
          Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
          trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
          như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
          khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành
          một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế
          kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn
          không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ
          việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây
          hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
        </p>
      </div>
    </div>
  );
};

export default ReadingContent;

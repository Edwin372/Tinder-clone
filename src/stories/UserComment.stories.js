import React from "react";
import UserComment from "../components/comments/UserComment.jsx";
import avatar from "../svg/avatar.svg";
import img from "../images/testImage6.jpg";

export default {
  title: "Example/UserComment",
  component: UserComment,
};

const Template = (args) => <UserComment {...args} />;

export const userComment = Template.bind({});
userComment.args = {
  name: "Tung Tran",
  avatar: avatar,
  dateComment: "July 16th 2019",
  commentContent:
    "Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua ai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua ai nay hay qua Bai nay hay qua Bai nay hay qua Bai nay hay qua ai nay ha ",
  commentImage: img,
};

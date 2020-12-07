import React from "react";
import ReadingContent from "../components/layout/ReadingContent.jsx";

export default {
  title: "Example/Reading Content",
  component: ReadingContent,
};

const Template = (args) => <ReadingContent {...args} />;

export const readingContent = Template.bind({});
readingContent.args = {};

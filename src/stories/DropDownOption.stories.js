import React from "react";
import DropDownOption from "../components/buttons/DropDownOption";

export default {
  title: "DropDownOption",
  component: DropDownOption,
};

const Template = (args) => <DropDownOption {...args} />;
export const dropdownOption = Template.bind({});
dropdownOption.args = {
  buttons: [
    {
      name: "Delete",
      handleClick: () => {
        console.log("Delete");
      },
    },
    {
      name: "Edit",
      handleClick: () => {
        console.log("Edit");
      },
    },
  ],
};

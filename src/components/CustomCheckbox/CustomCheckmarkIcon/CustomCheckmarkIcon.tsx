import React, { FC } from "react";
import { Icon } from "@chakra-ui/react";

const CustomCheckmarkIcon: FC = () => (
  <Icon viewBox="0 0 24 24" color="white" boxSize="16px">
    <path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  </Icon>
);

export default CustomCheckmarkIcon;

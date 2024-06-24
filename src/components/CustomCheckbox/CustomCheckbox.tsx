"use client";
import React, { FC, useState } from "react";
import { Checkbox, Text } from "@chakra-ui/react";
import CustomCheckmarkIcon from "./CustomCheckmarkIcon/CustomCheckmarkIcon";

const CustomCheckbox: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      borderColor="custom.250"
      icon={isChecked ? <CustomCheckmarkIcon /> : <></>}
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    >
      <Text
        fontSize={{ base: "11px", xxs: "12px", xl: "14px" }}
        fontWeight="400"
        color="custom.250"
      >
        I&apos;m transferring to an address other than my own
      </Text>
    </Checkbox>
  );
};

export default CustomCheckbox;

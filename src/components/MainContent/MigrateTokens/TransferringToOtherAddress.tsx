"use client";
import React, { useState } from "react";
import { Collapse, Flex, Input } from "@chakra-ui/react";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";

export const TransferringToOtherAddress = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Flex mb="16px">
        <CustomCheckbox onChange={(e) => setIsActive(e)} />
      </Flex>
      <Collapse in={isActive} animateOpacity endingHeight="72px">
        <Flex mb={{ base: "16px", lg: "24px" }}>
          <Input
            borderColor="custom.550"
            placeholder="Enter a Destination Address"
            h="48px"
          />
        </Flex>
      </Collapse>
    </>
  );
};

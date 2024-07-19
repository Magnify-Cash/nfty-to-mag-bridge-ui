"use client";
import React, { useEffect, useState } from "react";
import { Collapse, Flex, Input } from "@chakra-ui/react";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";

export const TransferringToOtherAddress = ({
  onChange,
}: {
  onChange?: (string?: `0x${string}`) => void;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if (!isActive) {
      onChange?.(undefined);
      setAddress("");
    }
  }, [isActive, onChange]);

  useEffect(() => {
    onChange?.(address as `0x${string}`);
  }, [address, onChange]);

  return (
    <>
      <Flex mb="16px">
        <CustomCheckbox onChange={(e) => setIsActive(e)} />
      </Flex>
      <Collapse in={isActive} animateOpacity endingHeight="72px">
        <Flex mb={{ base: "16px", lg: "24px" }}>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value as `0x${string}`)}
            borderColor="custom.550"
            placeholder="Enter a Destination Address"
            h="48px"
          />
        </Flex>
      </Collapse>
    </>
  );
};

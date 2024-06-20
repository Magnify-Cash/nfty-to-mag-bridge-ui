"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { chains } from "./data";

const Dropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState(chains[0]);

  return (
    <Menu isOpen={isOpen} matchWidth>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={
              isOpen ? (
                <Image src="arrowUp.svg" alt=""/>
              ) : (
                <Image src="arrowDown.svg" alt=""/>
              )
            }
            onClick={() => setIsOpen(!isOpen)}
            bg="custom.450"
            border="1px solid"
            borderColor="custom.250"
            _hover={{ bg: "custom.450" }}
            width="full"
            textAlign="left"
            h="48px"
            sx={{
              "&[data-active]": {
                backgroundColor: "custom.450",
              },
            }}
          >
            <Flex alignItems="center">
              <Image
                src={selectedChain.icon}
                alt={selectedChain.name}
                boxSize="20px"
                mr="11px"
                w="24px"
                h="24px"
              />
              <Text color="custom.300" fontSize="16px" fontWeight="400">
                {selectedChain.name}
              </Text>
            </Flex>
          </MenuButton>
          <MenuList
            bg="custom.450"
            width="full"
            padding="8px"
            borderColor="custom.250"
          >
            {chains.map((item) => (
              <MenuItem
                padding="8px"
                key={item.id}
                onClick={() => {
                  setSelectedChain(item);
                  setIsOpen(false);
                }}
                _hover={{
                  bg: "custom.500",
                  border: "1px solid",
                  borderColor: "transparent",
                }}
                borderRadius="8px"
                color="custom.300"
                h="48px"
                border="1px solid transparent"
                borderColor={
                  selectedChain.id === item.id ? "custom.150" : "transparent"
                }
                bg={selectedChain.id === item.id ? "custom.500" : "custom.450"}
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="full"
                >
                  <Flex alignItems="center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      boxSize="20px"
                      mr="11px"
                      w="24px"
                      h="24px"
                    />
                    <Text>{item.name}</Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="16px" fontWeight="600" mr="5px">
                      {item.value}
                    </Text>
                    <Text fontSize="16px" fontWeight="400">
                      NFTY
                    </Text>
                  </Flex>
                </Flex>
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;

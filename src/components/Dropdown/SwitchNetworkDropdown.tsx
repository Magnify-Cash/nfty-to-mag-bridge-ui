"use client";
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useChainId, useSwitchChain } from "wagmi";
import { Chain } from "viem";
import { useAllNetworkUserTokenBalance } from "@/api/web3/read/tokenBalance";
import { mergeConfigs } from "@/lib/helpers/utils";
import { IChainAdditionalConfig } from "@/lib/types";

const chainsAdditionalConfig: Record<number, IChainAdditionalConfig> = {
  1: { icon: "/Ethereum.svg", amount: 0 },
  11155111: { icon: "/Ethereum.svg", amount: 0 },
  56: { icon: "/BNB.svg", amount: 0 },
  97: { icon: "/BNB.svg", amount: 0 },
  137: { icon: "/Polygon.svg", amount: 0 },
  80002: { icon: "/Polygon.svg", amount: 0 },
};

const SwitchNetworkDropdown: FC = () => {
  const { data } = useAllNetworkUserTokenBalance();
  const [isOpen, setIsOpen] = useState(false);
  const { chains, switchChain } = useSwitchChain();
  const chainId = useChainId();
  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0]);

  const mergedChainsAdditionalConfig = useMemo(
    () => mergeConfigs(chainsAdditionalConfig, data),
    [data],
  );

  useEffect(() => {
    const newChainId = chains.find((chain) => chain.id === chainId);
    if (newChainId) {
      setSelectedChain(newChainId);
    }
  }, [chainId, chains]);

  return (
    <Menu isOpen={isOpen} matchWidth placement="bottom">
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={
              isOpen ? (
                <Image src="arrowUp.svg" alt="" />
              ) : (
                <Image src="arrowDown.svg" alt="" />
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
                src={chainsAdditionalConfig[selectedChain.id ?? 1].icon}
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
            {chains.map((item) => {
              const { icon, amount } =
                mergedChainsAdditionalConfig[item.id ?? "1"];
              return (
                <MenuItem
                  padding="8px"
                  key={item.id}
                  onClick={() => {
                    switchChain({ chainId: item.id });
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
                  bg={
                    selectedChain.id === item.id ? "custom.500" : "custom.450"
                  }
                >
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    width="full"
                  >
                    <Flex alignItems="center">
                      <Image
                        src={icon}
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
                        {amount}
                      </Text>
                      <Text fontSize="16px" fontWeight="400">
                        NFTY
                      </Text>
                    </Flex>
                  </Flex>
                </MenuItem>
              );
            })}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SwitchNetworkDropdown;

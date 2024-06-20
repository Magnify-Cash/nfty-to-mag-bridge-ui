import { Center, Flex, Image, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <Center
        h="88px"
        borderBottom="1px solid"
        borderColor="custom.350"
        mb="15px"
        padding="0 10px"
      >
        <Flex w="1110px" justifyContent="space-between" color="custom.50">
          <Link href="/">
            <Image
              alt="Magnify cash logo"
              src="logo.svg"
              w="100%"
              height="100%"
              cursor="pointer"
              transition="0.4s ease"
              _hover={{ opacity: 0.8 }}
            />
          </Link>

          {/* Connect Wallet blue button */}
          {/* <Button
            width={{
              base: "147px",
            }}
            variant="blueBtn"
            h="40px"
            fontSize="14px"
            fontWeight="500"
          >
            Connect Wallet
          </Button> */}

          {/* Connected Wallet - 2 buttons */}
          <Flex>
            <Button variant="tokenBtn" h="40px" mr="16px" padding="0px 24px">
              <Image alt="NFTY icon" src="NFTY.svg" mr="11px" />
              <Text>234</Text>
            </Button>

            <Button variant="connectBtn" h="40px" fontSize="14px" padding="0px 21px">
              <Image alt="Metamask icon" src="Metamask.svg" mr="11px" />
              <Text>0 х 978...66be </Text>
            </Button>
          </Flex>
        </Flex>
      </Center>
    </header>
  );
};

export default Header;

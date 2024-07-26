"use client";
import { Box, Center, Flex, Heading, Text, useSteps } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { migrationSteps } from "./data";

import { useAccount } from "wagmi";
import { useIsMounted } from "@/lib/hooks/isMounted";
import { usePathname, useRouter } from "next/navigation";

const MigrationSteps = () => {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: migrationSteps.length,
  });
  const isMounted = useIsMounted();

  useEffect(() => {
    if (pathname === '/') {
      router.push('/connect')
    }
  }, [pathname]);

  useEffect(() => {
    if (isConnected) {
      router.push(migrationSteps[1].url);
    } else {
      router.push(migrationSteps[0].url);
    }
  }, [isConnected]);

  useEffect(() => {
    if (pathname === "/connect") {
      setActiveStep(0);
    }
    if (pathname === "/migrate") {
      setActiveStep(1);
    }
    if (pathname === "/confirm-success" || pathname === "/confirm-error") {
      setActiveStep(2);
    }
  }, [pathname]);

  return (
    <Flex
      bg="custom.450"
      padding={{ base: "15px 10px", xxs: "20px 16px", md: "38px 24px" }}
      borderRadius="20px"
      border="1px solid"
      borderColor="custom.150"
      direction="column"
      width={{ base: "100%", lg: "322px" }}
      maxW="600px"
      h={{ base: "initial", lg: "352px" }}
      mr={{ base: "auto", lg: "40px" }}
      ml={{ base: "auto", lg: "0" }}
      mb={{ base: "24px", lg: "0" }}
    >
      <Heading
        as="h2"
        mb={{ base: "19px", md: "35px" }}
        fontSize="24px"
        fontWeight="700"
        color="custom.400"
        textAlign={{ base: "center", lg: "left" }}
      >
        Migrate your Tokens
      </Heading>

      <Flex
        direction={{ base: "row", lg: "column" }}
        justifyContent="space-between"
      >
        {migrationSteps.map((item) => {
          const isActive = isMounted && item.id === activeStep;
          // const isFirstStep = item.id === 0;
          // const connectItemUrl = isFirstStep && !isConnected ? item.url : "";

          return (
            <Flex
              key={item.id}
              // href={isFirstStep ? connectItemUrl : item.url}
              // onClick={() => {
              //   if (isFirstStep && !connectItemUrl) {
              //     return;
              //   }
              //   setActiveStep(item.id);
              // }}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex
                direction={{ base: "column", lg: "row" }}
                mb={{ base: "0", lg: "24px" }}
                alignItems="center"
              >
                <Center
                  fontSize={{ base: "14px", md: "16px" }}
                  w={{ base: "64px", md: "75px" }}
                  h={{ base: "32px", md: "40px" }}
                  borderRadius="20px"
                  border="1px solid"
                  mr={{ base: "0", lg: "16px" }}
                  background={isActive ? "custom.50" : "custom.500"}
                  borderColor={isActive ? "custom.50" : "custom.150"}
                  fontWeight={isActive ? "600" : "400"}
                  color={isActive ? "custom.100" : "custom.150"}
                  mb={{ base: "4px", sm: "8px", lg: "0" }}
                >
                  {item.id + 1}
                </Center>
                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight={isActive ? "600" : "400"}
                  color={isActive ? "custom.50" : "custom.550"}
                >
                  <Box as="span" display={{ base: "none", sm: "block" }}>
                    {item.titleDesk}
                  </Box>
                  <Box as="span" display={{ base: "block", sm: "none" }}>
                    {item.titleMob}
                  </Box>
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default MigrationSteps;

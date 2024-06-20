import { Flex, Heading, Text, Center } from "@chakra-ui/react";
import React, { FC } from "react";
import { migrationSteps } from "./data";

const MigrationSteps: FC = () => {
  return (
    <Flex
      bg="custom.450"
      padding="38px 24px"
      borderRadius="20px"
      border="1px solid"
      borderColor="custom.150"
      direction="column"
      width="322px"
      h="352px"
      mr="40px"
    >
      <Heading
        as="h2"
        mb="35px"
        fontSize={{ base: "24px", md: "24px" }}
        fontWeight="700"
        color="custom.400"
      >
        Migrate your Tokens
      </Heading>

      <Flex direction="column">
        {migrationSteps.map((item) => {
          return (
            <Flex key={item.id} mb="24px" alignItems="center">
              <Center
                fontSize="16px"
                w="75px"
                h="40px"
                borderRadius="20px"
                border="1px solid"
                mr="16px"
                background={item.active ? "custom.50" : "custom.500"}
                borderColor={item.active ? "custom.50 " : "custom.150"}
                fontWeight={item.active ? "600" : "400"}
                color={item.active ? "custom.100 " : "custom.150"}
              >
                {item.id}
              </Center>
              <Text
                fontSize="16px"
                fontWeight={item.active ? "600" : "400"}
                color={item.active ? "custom.50" : "custom.550"}
              >
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default MigrationSteps;

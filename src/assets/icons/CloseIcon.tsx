import { Box } from "@chakra-ui/react";
import { FC } from "react";

const CloseIcon: FC = () => {
  return (
    <Box
      as="svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#BDC0C0"
      _hover={{ fill: "custom.50" }}
      transition="fill .3s ease"
      cursor="pointer"
      boxSizing="border-box"
    >
      <path d="M12 20.16C7.48803 20.16 3.84003 16.512 3.84003 12C3.84003 7.48803 7.48803 3.84003 12 3.84003C16.512 3.84003 20.16 7.48803 20.16 12C20.16 16.512 16.512 20.16 12 20.16ZM12 4.80003C8.01603 4.80003 4.80003 8.01603 4.80003 12C4.80003 15.984 8.01603 19.2 12 19.2C15.984 19.2 19.2 15.984 19.2 12C19.2 8.01603 15.984 4.80003 12 4.80003Z" />
      <path d="M14.8134 8.64001L15.3596 9.18665L9.18627 15.36L8.64001 14.8138L14.8134 8.64001Z" />
      <path d="M9.18627 8.64001L15.3596 14.8134L14.8134 15.36L8.64001 9.18665L9.18627 8.64001Z" />
    </Box>
  );
};

export default CloseIcon;

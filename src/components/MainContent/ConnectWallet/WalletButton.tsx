import { Button, ButtonProps, Image } from "@chakra-ui/react";

const walletButtonConfig: Record<string, { icon: string; name: string }> = {
  Injected: { icon: "/Metamask.svg", name: "MetaMask" },
  WalletConnect: { icon: "/walletConnect.svg", name: "WalletConnect" },
};

export const WalletButton = ({
  connectorName,
  ...props
}: { connectorName: string } & ButtonProps) => {
  const buttonConfig = walletButtonConfig[connectorName];

  return (
    <Button
      variant="borderedBtn"
      h="56px"
      fontSize="18px"
      w="100%"
      mb="16px"
      {...props}
    >
      <Image alt="wallet_icon" src={buttonConfig?.icon} mr="15px" />
      {buttonConfig?.name}
    </Button>
  );
};

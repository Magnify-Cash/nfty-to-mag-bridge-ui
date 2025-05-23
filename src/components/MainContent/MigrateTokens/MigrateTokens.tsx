"use client";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import SwitchNetworkDropdown from "../../Dropdown/SwitchNetworkDropdown";
import { TransferringToOtherAddress } from "@/components/MainContent/MigrateTokens/TransferringToOtherAddress";
import { useApproveNFTYToken } from "@/api/web3/write/erc20";
import { useCheckAllowanceNFTYToken } from "@/api/web3/read/erc20";
import { ReactNode, useEffect, useMemo, useRef } from "react";
import { formatUnits } from "viem";
import { useSendToBridge, useSendToMigrator } from "@/api/web3/write/bridge";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import {
  useAllNetworkUserTokenBalance,
  useWillReceiveMagToken,
} from "@/api/web3/read/tokenBalance";
import { useInfoByUserAddress } from "@/api/http/user";
import { useActiveTxStore } from "@/state/tx";
import Loader from "@/components/Loader/Loader";
import { IUserInfoResponse } from "@/lib/types";
import { useRouter } from "next/navigation";
import {
  isMainnetCheck,
  isSupportedChains,
  supportedChainsId,
  truncateNumber,
} from "@/lib/helpers/utils";
import { useIsMounted } from "@/lib/hooks/isMounted";

const SwitchNetworkButton = ({ children }: { children: ReactNode }) => {
  const { chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const isMounted = useIsMounted();

  const isSupportedChainId = useMemo(
    () => isSupportedChains(chainId),
    [chainId],
  );

  if (!isMounted) {
    return null;
  }

  if (isSupportedChainId) {
    return children;
  }

  return (
    <Button
      onClick={() => switchChain({ chainId: supportedChainsId[0] })}
      variant="blueBtn"
      h={{ base: "48px", lg: "56px" }}
      fontSize={{ base: "14px", lg: "16px" }}
      fontWeight="600"
      w="100%"
      sx={{
        _disabled: {
          bg: "custom.150",
          color: "custom.100",
          cursor: "not-allowed",
          opacity: "1",
          _hover: {
            bg: "custom.150",
            color: "custom.100",
            boxShadow: "none",
            opacity: "1",
          },
        },
      }}
    >
      Switch Network
    </Button>
  );
};

const YouWillReceive = ({
  amount,
  isMainnet,
  isRefetch,
}: {
  amount: bigint;
  isMainnet: boolean;
  isRefetch: boolean;
}) => {
  const { data, refetch } = useWillReceiveMagToken({ amount, isMainnet });

  const formatedAmount = truncateNumber(formatUnits(data ?? BigInt("0"), 18));

  useEffect(() => {
    if (isRefetch) {
      refetch();
    }
  }, [isRefetch, refetch]);

  return (
    <Flex fontSize={{ base: "14px", md: "16px" }} color="custom.300">
      <Text fontWeight="500" mr="8px">
        You will receive:
      </Text>
      <Text fontWeight="600" mr="4px">
        {formatedAmount}
      </Text>
      <Text fontWeight="400"> MAG</Text>
    </Flex>
  );
};

const MigrateTokens = () => {
  const router = useRouter();
  const otherAddress = useRef<`0x${string}` | undefined>();
  const { address, chainId: walletChainId } = useAccount();
  const isMainnet = isMainnetCheck(walletChainId);
  const { hash: storeHash } = useActiveTxStore();
  const chainId = useChainId();
  const { data } = useAllNetworkUserTokenBalance();
  const { approveUsdc, isPending, isSuccess } = useApproveNFTYToken(isMainnet);
  const {
    sendToBridge,
    isPending: isPendingSendToBridge,
    isSuccess: isSuccessSendToBridge,
  } = useSendToBridge();
  const {
    sendToMigrator,
    isPending: isPendingSendToMigrator,
    isSuccess: isSuccessSendToMigrator,
    isError,
  } = useSendToMigrator();
  const {
    data: userInfo,
    isSent,
    isComplete,
    isBlock,
    isRefund,
  } = useInfoByUserAddress();
  const activeTokenAmountBigint = data[walletChainId ?? chainId]?.amount;
  const activeTokenAmount = useMemo(
    () => formatUnits(activeTokenAmountBigint ?? 0, 18),
    [activeTokenAmountBigint],
  );

  const { isApproved, refetchAllowanceUsdc } = useCheckAllowanceNFTYToken({
    amount: activeTokenAmountBigint,
    isMainnet,
  });

  useEffect(() => {
    if (isSuccess) {
      refetchAllowanceUsdc();
    }
  }, [isSuccess, refetchAllowanceUsdc]);

  useEffect(() => {
    if (
      (isComplete &&
        storeHash &&
        storeHash.toLowerCase() ===
          (userInfo as IUserInfoResponse)?.sendTxHash.toLowerCase()) ||
      isSuccessSendToMigrator
    ) {
      if (isMainnet) {
        router.push(`/confirm-success?nfty=${activeTokenAmountBigint}`);
      } else {
        router.push(`/confirm-success`);
      }
    }
  }, [
    activeTokenAmountBigint,
    isComplete,
    isMainnet,
    isSuccessSendToMigrator,
    router,
    storeHash,
    userInfo,
  ]);

  useEffect(() => {
    if (
      (isRefund &&
        storeHash &&
        storeHash.toLowerCase() ===
          (userInfo as IUserInfoResponse)?.sendTxHash.toLowerCase()) ||
      isError
    ) {
      if (isMainnet) {
        router.push(`/confirm-error?nfty=${activeTokenAmountBigint}`);
      } else {
        router.push(`/confirm-error`);
      }
    }
  }, [
    activeTokenAmountBigint,
    isComplete,
    isError,
    isMainnet,
    isRefund,
    router,
    storeHash,
    userInfo,
  ]);

  const buttonConfig = useMemo(() => {
    switch (true) {
      case storeHash &&
        storeHash !== (userInfo as IUserInfoResponse)?.sendTxHash:
        return {
          text: "",
          onClick: () => {},
          isLoading: true,
        };
      case isSent:
        return {
          text: "",
          onClick: () => {},
          isLoading: true,
        };

      case !isApproved:
        return {
          text: "Approve tokens",
          onClick: () => approveUsdc(activeTokenAmountBigint),
          isLoading: isPending,
        };
      case isApproved:
        return {
          text: "Confirm Migration",
          onClick: () => {
            if (isMainnet) {
              sendToMigrator({
                amount: activeTokenAmountBigint,
                address: otherAddress.current || address!,
              });

              return;
            }
            sendToBridge({
              amount: activeTokenAmountBigint,
              address: otherAddress.current || address!,
            });
          },
          isLoading: isPendingSendToBridge || isPendingSendToMigrator,
        };
      default:
        return {
          text: "Loading",
          onClick: () => {},
        };
    }
  }, [
    storeHash,
    userInfo,
    isSent,
    isApproved,
    isPending,
    isPendingSendToBridge,
    isPendingSendToMigrator,
    approveUsdc,
    activeTokenAmountBigint,
    isMainnet,
    sendToBridge,
    address,
    sendToMigrator,
  ]);

  return (
    <Flex
      direction="column"
      padding={{ base: "15px 10px", xxs: "24px 16px", md: "28px 24px" }}
      w="100%"
    >
      <Box mb="24px" w="100%">
        <SwitchNetworkDropdown />
      </Box>

      <Flex
        justifyContent="space-between"
        w="100%"
        mb={{ base: "20px", sm: "31px" }}
        direction={{ base: "column", xl: "row" }}
      >
        <Flex
          bg="custom.500"
          borderRadius="8px"
          padding={{ base: "16px 16px", md: "14px 16px" }}
          direction="column"
          w={{ base: "100%", xl: "306px" }}
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Flex alignItems="center" mb={{ base: "8px", sm: "13px" }}>
            <Image src="NFTY.svg" alt="NFTY icon" marginRight="8px" />
            <Text color="custom.50" fontSize="14px" fontWeight="400">
              NFTY
            </Text>
          </Flex>

          <Flex
            fontSize={{ base: "14px", md: "16px" }}
            color="custom.300"
            flexWrap="wrap"
          >
            <Text fontWeight="500" mr="8px">
              Amount to migrate:
            </Text>
            <Text fontWeight="600" mr="4px">
              {truncateNumber(activeTokenAmount)}
            </Text>
            <Text fontWeight="400"> NFTY</Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <Image
            src="reverse.svg"
            cursor="pointer"
            transition="0.3s ease"
            _hover={{ opacity: 0.7 }}
            margin={{ base: "18px 0", xl: "0 24px" }}
            w={{ base: "30px", md: "40px" }}
            h={{ base: "30px", md: "40px" }}
            alt=""
            transform={{ base: "rotate(90deg)", xl: "none" }}
          />
        </Flex>
        <Flex
          bg="custom.500"
          borderRadius="8px"
          padding="14px 16px"
          direction="column"
          w={{ base: "100%", xl: "306px" }}
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Flex alignItems="center" mb="13px">
            <Image src="MAG.svg" alt="MAG icon" marginRight="8px" />
            <Text color="custom.50" fontSize="14px" fontWeight="400">
              MAG
            </Text>
          </Flex>

          <YouWillReceive
            amount={activeTokenAmountBigint}
            isMainnet={isMainnet}
            isRefetch={isSuccessSendToBridge || isSuccessSendToMigrator}
          />
        </Flex>
      </Flex>

      <TransferringToOtherAddress
        onChange={(address) => {
          otherAddress.current = address;
        }}
      />

      {isBlock ? (
        <Button
          variant="blueBtn"
          h={{ base: "48px", lg: "56px" }}
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight="600"
          w="100%"
          pointerEvents="none"
        >
          <Flex>
            <Box>
              <Loader />
            </Box>
            <Text ml="12px">Waiting for Lock transaction </Text>
          </Flex>
        </Button>
      ) : (
        <SwitchNetworkButton>
          <Button
            onClick={buttonConfig.onClick}
            isLoading={buttonConfig.isLoading}
            variant="blueBtn"
            h={{ base: "48px", lg: "56px" }}
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="600"
            w="100%"
            sx={{
              _disabled: {
                bg: "custom.150",
                color: "custom.100",
                cursor: "not-allowed",
                opacity: "1",
                _hover: {
                  bg: "custom.150",
                  color: "custom.100",
                  boxShadow: "none",
                  opacity: "1",
                },
              },
            }}
          >
            {buttonConfig.text}
          </Button>
        </SwitchNetworkButton>
      )}
    </Flex>
  );
};

export default MigrateTokens;

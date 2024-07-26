"use client";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useCallback } from "react";
import { ERC20Abi } from "@/lib/abi/ERC20";
import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";

export const useApproveNFTYToken = (isMainnet?: boolean) => {
  const { contracts } = useContractByNetworkId();
  const spender = isMainnet
    ? contracts.Migrator!.address
    : contracts.bridge.address;

  const {
    writeContract,
    data,
    isPending: isPendingWallet,
  } = useWriteContract();

  const approveUsdc = useCallback(
    (amount: bigint) =>
      writeContract({
        address: contracts.NFTYToken.address,
        abi: ERC20Abi,
        functionName: "approve",
        args: [spender, amount],
      }),
    [writeContract, contracts.NFTYToken.address, spender],
  );

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash: data });

  const isPending = isLoading || isPendingWallet;

  return { approveUsdc, isPending, isSuccess };
};

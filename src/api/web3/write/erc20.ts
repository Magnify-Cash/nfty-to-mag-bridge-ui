'use client'
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useCallback } from "react";
import { ERC20Abi } from "@/lib/abi/ERC20";
import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";

export const useApproveNFTYToken = () => {
  const { contracts } = useContractByNetworkId();

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
        args: [contracts.bridge.address, amount],
      }),
    [writeContract, contracts],
  );

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash: data });

  const isPending = isLoading || isPendingWallet;

  return { approveUsdc, isPending, isSuccess };
};

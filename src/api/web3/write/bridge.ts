import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useCallback } from "react";
import { BridgeAbi } from "@/lib/abi/bridge";

export const useSendToBridge = () => {
  const { contracts } = useContractByNetworkId();

  const {
    writeContract,
    data,
    isPending: isPendingWallet,
  } = useWriteContract();

  const sendToBridge = useCallback(
    ({ address, amount }: { address: `0x${string}`; amount: bigint }) =>
      writeContract({
        address: contracts.bridge.address,
        abi: BridgeAbi,
        functionName: "send",
        args: [contracts.NFTYToken.address, address, amount],
      }),
    [writeContract, contracts],
  );

  const { isLoading } = useWaitForTransactionReceipt({ hash: data });

  const isPending = isLoading || isPendingWallet;

  return { sendToBridge, isPending };
};

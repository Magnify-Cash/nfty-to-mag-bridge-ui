import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useCallback, useEffect } from "react";
import { BridgeAbi } from "@/lib/abi/bridge";
import { useActiveTxStore } from "@/state/tx";
import { IS_DEV } from "@/lib/constants";

export const useSendToBridge = () => {
  const { contracts } = useContractByNetworkId();
  const { setHash } = useActiveTxStore();

  const {
    writeContract,
    data,
    isPending: isPendingWallet,
    error,
    failureReason,
  } = useWriteContract({
    mutation: {
      onSuccess: (data) => {
        setHash(data);
      },
    },
  });

  useEffect(() => {
    if (failureReason && IS_DEV) {
      console.log({ failureReason });
      console.log({ error });
    }
  }, [failureReason, error]);

  const sendToBridge = useCallback(
    ({ address, amount }: { address: `0x${string}`; amount: bigint }) => {
      console.log("bridge", {
        address,
        amount,
        bridge: contracts.bridge.address,
        NFTYToken: contracts.NFTYToken.address,
        contracts,
      });
      writeContract({
        address: contracts.bridge.address,
        abi: BridgeAbi,
        functionName: "send",
        args: [contracts.NFTYToken.address, address, amount],
      });
    },

    [writeContract, contracts],
  );

  const { isLoading } = useWaitForTransactionReceipt({ hash: data });

  const isPending = isLoading || isPendingWallet;

  return { sendToBridge, isPending, hash: data };
};

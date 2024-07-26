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
export const useSendToMigrator = () => {
  const { contracts } = useContractByNetworkId();

  const {
    writeContract,
    data,
    isPending: isPendingWallet,
    error,
    failureReason,
  } = useWriteContract();

  useEffect(() => {
    if (failureReason && IS_DEV) {
      console.log({ failureReason });
      console.log({ error });
    }
  }, [failureReason, error]);

  const sendToMigrator = useCallback(
    ({ address, amount }: { address: `0x${string}`; amount: bigint }) => {
      writeContract({
        address: contracts.Migrator!.address,
        abi: BridgeAbi,
        functionName: "send",
        args: [contracts.NFTYToken.address, address, amount],
      });
    },

    [writeContract, contracts],
  );

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash: data });

  const isPending = isLoading || isPendingWallet;

  return { sendToMigrator, isPending, isSuccess, hash: data };
};

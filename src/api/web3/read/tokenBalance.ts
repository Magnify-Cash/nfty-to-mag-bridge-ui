import { Chain, createPublicClient, http } from "viem";
import { chains } from "@/lib/configs/wagmi";
import { useQueries } from "@tanstack/react-query";
import { useAccount, useBlockNumber, useReadContract } from "wagmi";
import { ERC20Abi } from "@/lib/abi/ERC20";
import { networksConfig } from "@/api/web3/networkConfig";
import { useCallback, useEffect, useMemo } from "react";
import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";
import { BridgeAbi } from "@/lib/abi/bridge";

const publicProviderFactory = (chain: Chain) =>
  createPublicClient({
    chain,
    transport: http(),
  });

const publicProviders = chains.map((chain) => publicProviderFactory(chain));

export const useAllNetworkUserTokenBalance = () => {
  const { address } = useAccount();
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });

  const results = useQueries({
    queries: publicProviders.map((provider) => ({
      queryKey: [provider.chain.name, address],
      queryFn: () =>
        provider.readContract({
          address:
            networksConfig[provider.chain.id].contracts.NFTYToken.address,
          abi: ERC20Abi,
          functionName: "balanceOf",
          args: [address!],
        }),
      staleTime: 10000,
    })),
  });

  const data = useMemo(
    () => ({
      data: results.reduce(
        (acc, result, i) => {
          acc[chains[i].id] = { amount: result.data ?? BigInt(0) };
          return acc;
        },
        {} as { [key: number]: { amount: bigint } },
      ),
      pending: results.some((result) => result.isPending),
    }),
    [results],
  );

  const refetchAll = useCallback(() => {
    results.forEach((result) => result.refetch());
  }, [results]);

  useEffect(() => {
    if (Number(blockNumber) % 5 === 0) {
      refetchAll();
    }
  }, [blockNumber, refetchAll]);

  return { ...data };
};

export const useWillReceiveMagToken = ({
  amount,
  isMainnet,
}: {
  amount?: bigint;
  isMainnet: boolean;
}) => {
  const { contracts } = useContractByNetworkId();
  const contractAddress = isMainnet
    ? contracts.Migrator!.address
    : contracts.bridge.address;

  const { data = BigInt(0), refetch } = useReadContract({
    query: { enabled: !!amount },
    address: contractAddress,
    abi: BridgeAbi,
    functionName: "getConvertedAmount",
    args: [amount!],
  });

  return { data, refetch };
};

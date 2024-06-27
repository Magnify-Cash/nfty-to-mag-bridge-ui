import { Chain, createPublicClient, http } from "viem";
import { chains } from "@/lib/configs/wagmi";
import { useQueries } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { ERC20Abi } from "@/lib/abi/ERC20";
import { networksConfig } from "@/api/web3/networkConfig";

const publicProviderFactory = (chain: Chain) =>
  createPublicClient({
    chain,
    transport: http(),
  });

const publicProviders = chains.map((chain) => publicProviderFactory(chain));

export const useAllNetworkUserTokenBalance = () => {
  const { address } = useAccount();

  return useQueries({
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
    combine: (results) => {
      return {
        data: results.reduce(
          (acc, result, i) => {
            acc[chains[i].id] = { amount: result.data ?? BigInt(0) };
            return acc;
          },
          {} as { [key: number]: { amount: bigint } },
        ),
        pending: results.some((result) => result.isPending),
      };
    },
  });
};

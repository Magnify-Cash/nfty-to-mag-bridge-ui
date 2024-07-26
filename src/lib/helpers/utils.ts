import { formatUnits } from "viem";
import { IChainAdditionalConfig } from "@/lib/types";
import { chains } from "@/lib/configs/wagmi";
import { IS_DEV } from "@/lib/constants";
import { mainnet, sepolia } from "wagmi/chains";

export const getShortAddress = (address: string, start = 5, endCount = 4) =>
  `${address?.slice(0, start)}...${address?.slice(address.length - (endCount ?? start + 1))}`;

export function mergeConfigs(
  chainsConfig: Record<number, IChainAdditionalConfig>,
  additionalAmounts: Record<number, { amount?: bigint }>,
): Record<number, { icon: string; amount: number }> {
  const mergedConfig = { ...chainsConfig };

  for (const key in additionalAmounts) {
    const numKey = Number(key);
    if (mergedConfig[numKey] && additionalAmounts[key].amount !== undefined) {
      // mergedConfig[numKey].amount = parseFloat(additionalAmounts[key].amount!);
      mergedConfig[numKey].amount = parseFloat(
        formatUnits(additionalAmounts[key].amount!, 18),
      );
    }
  }
  return mergedConfig;
}

const supportedChainsId = chains.map((chain) => chain.id);

export const isSupportedChains = (chainId?: number) =>
  supportedChainsId.find((id) => id === chainId);

export const isMainnetCheck = (chainId?: number) => {
  const mainnetChainId = IS_DEV ? sepolia.id : mainnet.id;

  return mainnetChainId === chainId;
};

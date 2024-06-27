import { formatUnits } from "viem";
import { IChainAdditionalConfig } from "@/lib/types";

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
